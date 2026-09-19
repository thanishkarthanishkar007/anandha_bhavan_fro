'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MENU_ITEMS, MenuItem, MenuCategory } from '@/data/menu';

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (itemData: Partial<MenuItem> & { name: string; category: MenuCategory; price: string }) => MenuItem;
  updateMenuItem: (id: string, updatedFields: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  toggleStock: (id: string) => void;
  stockStatus: Record<string, boolean>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);
const STORAGE_KEY_ITEMS = 'sre_admin_custom_menu_items';
const STORAGE_KEY_STOCK = 'sre_admin_menu_stock_status';

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(MENU_ITEMS);
  const [stockStatus, setStockStatus] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      // Load custom / modified menu items
      const savedItems = localStorage.getItem(STORAGE_KEY_ITEMS);
      if (savedItems) {
        const parsed = JSON.parse(savedItems);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMenuItems(parsed);
        }
      }

      // Load stock statuses
      const savedStock = localStorage.getItem(STORAGE_KEY_STOCK);
      if (savedStock) {
        setStockStatus(JSON.parse(savedStock));
      }
    } catch (err) {
      console.error('Failed to load menu state from storage', err);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveItems = (newItems: MenuItem[]) => {
    setMenuItems(newItems);
    try {
      localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(newItems));
    } catch (e) {
      console.warn('Could not persist menu items', e);
    }
  };

  const saveStock = (newStock: Record<string, boolean>) => {
    setStockStatus(newStock);
    try {
      localStorage.setItem(STORAGE_KEY_STOCK, JSON.stringify(newStock));
    } catch (e) {
      console.warn('Could not persist stock status', e);
    }
  };

  const addMenuItem = (
    itemData: Partial<MenuItem> & { name: string; category: MenuCategory; price: string }
  ): MenuItem => {
    const rawPrice = itemData.price || '₹0';
    const numPrice = parseInt(rawPrice.replace(/[^\d]/g, ''), 10) || 0;

    const newItem: MenuItem = {
      id: `dish-${Date.now()}`,
      name: itemData.name,
      category: itemData.category,
      timing: itemData.timing || 'All Day (7:00 AM – 11:00 PM)',
      tagline: itemData.tagline || `${itemData.name} - Authentic Pure Veg`,
      price: rawPrice.startsWith('₹') ? rawPrice : `₹${rawPrice}`,
      numericPrice: numPrice,
      description:
        itemData.description ||
        `Freshly prepared authentic ${itemData.name} made with high-quality ingredients, traditional recipes, and pure ghee.`,
      image: itemData.image || '/images/menu/idli.png',
      themeColor: '#4F8F24',
      gradient: 'from-amber-50 to-orange-50',
      ingredients: itemData.ingredients || ['Fresh Traditional Ingredients', 'Pure Ghee', 'House Spices'],
      features: ['100% Pure Veg', 'Authentic Recipe', 'Freshly Prepared'],
      storySections: [
        {
          heading: 'Culinary Craft',
          text: `Prepared fresh daily using traditional methods honoring authentic vegetarian taste.`,
        },
      ],
      detailsSection: {
        preparation: 'Crafted fresh upon order with aromatic house seasonings.',
        servingSuggestion: 'Best enjoyed warm with authentic chutneys and sambar.',
        tradition: 'Classic South Indian heritage recipe.',
      },
      freshnessSection: {
        spiceOrigin: 'Salem & Erode Traditional Spices',
        preparationTime: '10-15 mins',
        freshnessGuarantee: 'Cooked fresh daily, pure veg guarantee',
      },
      orderSection: {
        portionSize: 'Standard Serving',
        accompaniments: ['Signature Coconut Chutney', 'Traditional Sambar'],
        isPopular: true,
      },
      isVeg: true,
    };

    const updated = [newItem, ...menuItems];
    saveItems(updated);
    return newItem;
  };

  const updateMenuItem = (id: string, updatedFields: Partial<MenuItem>) => {
    const updated = menuItems.map((item) => {
      if (item.id === id) {
        const merged = { ...item, ...updatedFields };
        if (updatedFields.price) {
          const rawPrice = updatedFields.price;
          merged.price = rawPrice.startsWith('₹') ? rawPrice : `₹${rawPrice}`;
          merged.numericPrice = parseInt(merged.price.replace(/[^\d]/g, ''), 10) || 0;
        }
        return merged;
      }
      return item;
    });
    saveItems(updated);
  };

  const deleteMenuItem = (id: string) => {
    const updated = menuItems.filter((item) => item.id !== id);
    saveItems(updated);
  };

  const toggleStock = (id: string) => {
    const current = stockStatus[id] !== false; // default true
    const updated = {
      ...stockStatus,
      [id]: !current,
    };
    saveStock(updated);
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        toggleStock,
        stockStatus,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
