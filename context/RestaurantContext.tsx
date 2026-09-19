'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface RestaurantInfo {
  name: string;
  tagline: string;
  subTagline: string;
  logo: string;
  brandImage: string;
  address: string;
  landmark: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  operatingHours: string;
  mornTiffin: string;
  royalLunch: string;
  dinnerTiffin: string;
  mapsEmbedUrl: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
}

export const DEFAULT_RESTAURANT_INFO: RestaurantInfo = {
  name: 'Sre New Aananda Bavan',
  tagline: 'Pure Veg A/C Restaurant',
  subTagline: 'Pure Vegetarian Family Restaurant',
  logo: '/images/navbar-logo.png',
  brandImage: '/images/navbar-brand.png',
  address:
    'Bangalore to Salem Byepass, NH 44, opposite to Government Higher Secondary School, Poosaripatty, Omalur, Salem, Tamil Nadu 636305',
  landmark: 'Opposite to Government Higher Secondary School, Poosaripatty',
  phone: '63833 12948',
  phoneRaw: '+916383312948',
  whatsapp: '86755 35555',
  whatsappRaw: '+918675535555',
  email: 'srenewaanandabavan@gmail.com',
  operatingHours: '06:30 AM – 10:45 PM (All 7 Days)',
  mornTiffin: '06:30 AM – 11:30 AM',
  royalLunch: '12:00 PM – 03:30 PM',
  dinnerTiffin: '05:30 PM – 10:30 PM',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2017.8807760691552!2d78.0664093377075!3d11.845825643645435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1789711781336!5m2!1sen!2sin',
  instagramUrl: 'https://www.instagram.com/srenewaanandabavan?stkn=N29pdGxkcnAxdjc3',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61594584594104',
  youtubeUrl: 'http://www.youtube.com/@SreNewAanandaBavan',
};

interface RestaurantContextType {
  restaurantInfo: RestaurantInfo;
  updateRestaurantInfo: (info: Partial<RestaurantInfo>) => void;
  resetToDefaults: () => void;
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);
const STORAGE_KEY = 'sre_restaurant_profile_info';

export function RestaurantProvider({ children }: { children: React.ReactNode }) {
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>(DEFAULT_RESTAURANT_INFO);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          setRestaurantInfo((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch (e) {
      console.error('Failed to load restaurant profile info', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const updateRestaurantInfo = (newInfo: Partial<RestaurantInfo>) => {
    setRestaurantInfo((prev) => {
      const updated = { ...prev, ...newInfo };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.warn('Failed to persist restaurant info', err);
      }
      return updated;
    });
  };

  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    setRestaurantInfo(DEFAULT_RESTAURANT_INFO);
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurantInfo,
        updateRestaurantInfo,
        resetToDefaults,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error('useRestaurant must be used within a RestaurantProvider');
  }
  return context;
}
