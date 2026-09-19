'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

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

const ADMIN_EMAIL = 'srenewaanandabavan@gmail.com';
const ADMIN_PASSWORD_STANDARD = '63833 12948';
const ADMIN_PASSWORD_NOSPACE = '6383312948';
const STORAGE_KEY = 'sre_admin_session';

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if session exists in localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.email === ADMIN_EMAIL) {
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
    // Add realistic brief validation delay
    await new Promise((res) => setTimeout(res, 400));

    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();
    const cleanPassNoSpace = pass.replace(/\s+/g, '');

    if (
      cleanEmail === ADMIN_EMAIL &&
      (cleanPass === ADMIN_PASSWORD_STANDARD || cleanPassNoSpace === ADMIN_PASSWORD_NOSPACE)
    ) {
      const user: AdminUser = {
        email: ADMIN_EMAIL,
        name: 'Sre New Aananda Bavan',
        role: 'Administrator',
        loginTime: new Date().toISOString(),
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        if (typeof document !== 'undefined') {
          document.cookie = `sre_admin_auth=true; path=/; max-age=86400; SameSite=Lax`;
        }
      } catch (err) {
        console.warn('Storage error', err);
      }

      setAdminUser(user);
      setIsAuthenticated(true);
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return {
      success: false,
      error: 'Invalid email or password. Please check your credentials and try again.',
    };
  };

  const logout = () => {
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
