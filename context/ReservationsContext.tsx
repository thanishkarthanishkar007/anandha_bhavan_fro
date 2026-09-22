'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Reservation } from '@/data/reservations';
import { API_BASE_URL, fetchWithAuth } from '@/lib/api';

interface ReservationsContextType {
  reservations: Reservation[];
  updateStatus: (id: string, newStatus: Reservation['status']) => void;
  addReservation: (reservation: Omit<Reservation, 'id' | 'createdAt'>) => void;
  deleteReservation: (id: string) => void;
  refreshReservations: () => Promise<void>;
  stats: {
    total: number;
    pending: number;
    confirmed: number;
    completed: number;
    cancelled: number;
  };
  isLoading: boolean;
}

const ReservationsContext = createContext<ReservationsContextType | undefined>(undefined);
const STORAGE_KEY = 'sre_admin_reservations_list_v2';

export function ReservationsProvider({ children }: { children: React.ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReservations = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/reservations`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.items)) {
          const mapped: Reservation[] = data.items.map((item: any) => ({
            id: item._id || item.id,
            customerName: item.customer_name || item.customerName || 'Guest',
            phone: item.phone || '',
            email: item.email || '',
            date: item.date || '',
            timeSlot: item.time_slot || item.timeSlot || 'Standard Dining',
            guests:
              typeof item.guests === 'number'
                ? `${item.guests} Guests`
                : item.guests || '2 Guests',
            tableType: item.table_type || item.tableType || 'AC Dining',
            status: (item.status as Reservation['status']) || 'Pending',
            specialRequests: item.special_notes || item.specialRequests || '',
            createdAt: item.created_at
              ? new Date(item.created_at).toLocaleString('en-IN', {
                  dateStyle: 'short',
                  timeStyle: 'short',
                })
              : new Date().toLocaleString('en-IN', {
                  dateStyle: 'short',
                  timeStyle: 'short',
                }),
          }));

          setReservations(mapped);
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
          } catch (e) {}
        }
      }
    } catch (err) {
      console.warn('Backend reservations sync error', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Purge legacy mock data cache from previous versions
    try {
      localStorage.removeItem('sre_admin_reservations_list');
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Verify no mock data
          const isClean = !parsed.some((r: any) => r.id && String(r.id).startsWith('RES-100'));
          if (isClean) {
            setReservations(parsed);
          } else {
            localStorage.removeItem(STORAGE_KEY);
          }
        }
      }
    } catch (e) {}

    fetchReservations();

    // Poll every 15 seconds to automatically pick up new reservations submitted by customers
    const interval = setInterval(() => {
      fetchReservations();
    }, 15000);

    return () => clearInterval(interval);
  }, [fetchReservations]);

  const saveToStorage = (items: Reservation[]) => {
    setReservations(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn('Could not save reservations to storage', e);
    }
  };

  const updateStatus = (id: string, newStatus: Reservation['status']) => {
    const updated = reservations.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    saveToStorage(updated);

    // Sync to backend MongoDB Atlas
    fetchWithAuth(`/api/reservations/${encodeURIComponent(id)}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status: newStatus }),
    }).catch((err) => {
      console.warn('Backend sync failed for reservation status update', err);
    });
  };

  const addReservation = (data: Omit<Reservation, 'id' | 'createdAt'>) => {
    const newRes: Reservation = {
      ...data,
      id: `RES-${Date.now()}`,
      createdAt: new Date().toLocaleString('en-IN', {
        dateStyle: 'short',
        timeStyle: 'short',
      }),
    };
    saveToStorage([newRes, ...reservations]);

    const numGuests = parseInt(data.guests.replace(/[^\d]/g, ''), 10) || 2;

    fetchWithAuth('/api/reservations', {
      method: 'POST',
      body: JSON.stringify({
        customer_name: data.customerName,
        phone: data.phone,
        email: data.email || '',
        guests: numGuests,
        date: data.date,
        time_slot: data.timeSlot,
        table_type: data.tableType || 'AC Dining',
        special_notes: data.specialRequests || '',
      }),
    })
      .then(() => fetchReservations())
      .catch((err) => {
        console.warn('Backend sync failed for addReservation', err);
      });
  };

  const deleteReservation = (id: string) => {
    const updated = reservations.filter((item) => item.id !== id);
    saveToStorage(updated);

    fetchWithAuth(`/api/reservations/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    }).catch((err) => {
      console.warn('Backend sync failed for deleteReservation', err);
    });
  };

  const stats = {
    total: reservations.length,
    pending: reservations.filter((r) => r.status === 'Pending').length,
    confirmed: reservations.filter((r) => r.status === 'Confirmed').length,
    completed: reservations.filter((r) => r.status === 'Completed').length,
    cancelled: reservations.filter((r) => r.status === 'Cancelled').length,
  };

  return (
    <ReservationsContext.Provider
      value={{
        reservations,
        updateStatus,
        addReservation,
        deleteReservation,
        refreshReservations: fetchReservations,
        stats,
        isLoading,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
}

export function useReservations() {
  const context = useContext(ReservationsContext);
  if (!context) {
    throw new Error('useReservations must be used within a ReservationsProvider');
  }
  return context;
}
