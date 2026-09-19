'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Reservation, INITIAL_RESERVATIONS } from '@/data/reservations';

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
}

const ReservationsContext = createContext<ReservationsContextType | undefined>(undefined);
const STORAGE_KEY = 'sre_admin_reservations_list';

export function ReservationsProvider({ children }: { children: React.ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReservations(parsed);
        }
      }
    } catch (e) {
      console.error('Error loading reservations', e);
    } finally {
      setIsLoaded(true);
    }
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
  };

  const deleteReservation = (id: string) => {
    const updated = reservations.filter((item) => item.id !== id);
    saveToStorage(updated);
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
