'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { API_BASE_URL, setAuthToken, clearAuthToken, getAuthToken } from '@/lib/api';

export interface AdminUser {
  email: string;
  name: string;
  role: string;
  loginTime: string;
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  adminUser: AdminUser | null;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);
const STORAGE_KEY = 'sre_admin_session';

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if session exists in localStorage and token is active
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const token = getAuthToken();

      if (saved && token) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.email) {
          setIsAuthenticated(true);
          setAdminUser(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load admin session', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);

    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: cleanEmail,
          password: cleanPass,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success && data.token) {
        setAuthToken(data.token);

        const user: AdminUser = {
          email: data.user.email,
          name: data.user.name || 'Sre New Aananda Bavan',
          role: data.user.role || 'Administrator',
          loginTime: new Date().toISOString(),
        };

        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
          if (typeof document !== 'undefined') {
            document.cookie = `sre_admin_auth=true; path=/; max-age=604800; SameSite=Lax`;
          }
        } catch (err) {
          console.warn('Storage error', err);
        }

        setAdminUser(user);
        setIsAuthenticated(true);
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return {
          success: false,
          error: data.detail || 'Invalid email or password. Please verify credentials.',
        };
      }
    } catch (err: any) {
      console.error('Backend authentication connection error', err);
      setIsLoading(false);
      return {
        success: false,
        error:
          'Unable to connect to the authentication server. Please check your internet connection or try again shortly.',
      };
    }
  };

  const logout = () => {
    clearAuthToken();
    try {
      localStorage.removeItem(STORAGE_KEY);
      if (typeof document !== 'undefined') {
        document.cookie = `sre_admin_auth=; path=/; max-age=0`;
      }
    } catch (err) {
      console.warn('Storage clear error', err);
    }
    setAdminUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        adminUser,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
