'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Reservation, INITIAL_RESERVATIONS } from '@/data/reservations';
import { API_BASE_URL, fetchWithAuth } from '@/lib/api';

interface ReservationsContextType {
  reservations: Reservation[];
  updateStatus: (id: string, newStatus: Reservation['status']) => void;
  addReservation: (reservation: Omit<Reservation, 'id' | 'createdAt'>) => void;
  deleteReservation: (id: string) => void;
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
const STORAGE_KEY = 'sre_admin_reservations_list';

export function ReservationsProvider({ children }: { children: React.ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadReservations() {
      // 1. Initial hydration from localStorage
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setReservations(parsed);
          }
        }
      } catch (e) {
        console.warn('LocalStorage reservations load error', e);
      }

      // 2. Fetch from backend API
      try {
        const res = await fetch(`${API_BASE_URL}/api/reservations`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.items) && data.items.length > 0 && isMounted) {
            const mapped: Reservation[] = data.items.map((item: any) => ({
              id: item._id || item.id,
              customerName: item.customer_name || item.customerName || 'Guest',
              phone: item.phone || '',
              email: item.email || '',
              date: item.date || '',
              timeSlot: item.time_slot || item.timeSlot || 'Lunch Session',
              guests: `${item.guests || 2} Guests`,
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

            // Combine backend with existing initial reservations (backend items prioritized)
            const backendIds = new Set(mapped.map((r) => r.id));
            const remaining = INITIAL_RESERVATIONS.filter((r) => !backendIds.has(r.id));
            const combined = [...mapped, ...remaining];

            setReservations(combined);
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(combined));
            } catch (e) {}
          }
        }
      } catch (err) {
        console.warn('Backend reservations sync fallback to cache', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadReservations();

    return () => {
      isMounted = false;
    };
  }, []);

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

    // Sync to backend
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
      id: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toLocaleString('en-IN', {
        dateStyle: 'short',
        timeStyle: 'short',
      }),
    };
    saveToStorage([newRes, ...reservations]);

    // Parse guest count
    const numGuests = parseInt(data.guests.replace(/[^\d]/g, ''), 10) || 2;

    // Sync to backend
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
    }).catch((err) => {
      console.warn('Backend sync failed for addReservation', err);
    });
  };

  const deleteReservation = (id: string) => {
    const updated = reservations.filter((item) => item.id !== id);
    saveToStorage(updated);

    // Sync to backend
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
