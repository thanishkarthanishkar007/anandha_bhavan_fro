'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MENU_ITEMS, MenuItem, MenuCategory } from '@/data/menu';
import { API_BASE_URL, fetchWithAuth } from '@/lib/api';

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (itemData: Partial<MenuItem> & { name: string; category: MenuCategory; price: string }) => MenuItem;
  updateMenuItem: (id: string, updatedFields: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  toggleStock: (id: string) => void;
  stockStatus: Record<string, boolean>;
  isLoading: boolean;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);
const STORAGE_KEY_ITEMS = 'sre_admin_custom_menu_items';
const STORAGE_KEY_STOCK = 'sre_admin_menu_stock_status';

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(MENU_ITEMS);
  const [stockStatus, setStockStatus] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Load from backend API and fallback to localStorage / defaults
  useEffect(() => {
    let isMounted = true;

    async function loadMenu() {
      // 1. First check localStorage for instant render
      try {
        const savedItems = localStorage.getItem(STORAGE_KEY_ITEMS);
        if (savedItems) {
          const parsed = JSON.parse(savedItems);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setMenuItems(parsed);
          }
        }

        const savedStock = localStorage.getItem(STORAGE_KEY_STOCK);
        if (savedStock) {
          setStockStatus(JSON.parse(savedStock));
        }
      } catch (e) {
        console.warn('Initial localStorage load error', e);
      }

      // 2. Fetch live menu from Backend MongoDB API
      try {
        const res = await fetch(`${API_BASE_URL}/api/menu`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.items) && data.items.length > 0 && isMounted) {
            const backendItems: MenuItem[] = data.items;
            const backendStock: Record<string, boolean> = {};

            backendItems.forEach((item) => {
              if (item.inStock !== undefined) {
                backendStock[item.id] = item.inStock;
              }
            });

            let activeCatalog: MenuItem[];
            if (backendItems.length >= 50) {
              // Full catalog is stored in MongoDB Atlas - respect all adds, edits, and deletions
              activeCatalog = backendItems;
            } else {
              // Partial or initial items - merge with defaults without duplicating IDs
              const backendIds = new Set(backendItems.map((i) => i.id));
              const remainingDefaults = MENU_ITEMS.filter((i) => !backendIds.has(i.id));
              activeCatalog = [...backendItems, ...remainingDefaults];
            }

            setMenuItems(activeCatalog);
            setStockStatus((prev) => ({ ...prev, ...backendStock }));

            try {
              localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(activeCatalog));
            } catch (e) {}
          }
        }
      } catch (err) {
        console.warn('Backend menu sync fallback to cached/default items', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadMenu();

    return () => {
      isMounted = false;
    };
  }, []);

  const saveItemsLocally = (newItems: MenuItem[]) => {
    setMenuItems(newItems);
    try {
      localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(newItems));
    } catch (e) {
      console.warn('Could not persist menu items locally', e);
    }
  };

  const saveStockLocally = (newStock: Record<string, boolean>) => {
    setStockStatus(newStock);
    try {
      localStorage.setItem(STORAGE_KEY_STOCK, JSON.stringify(newStock));
    } catch (e) {
      console.warn('Could not persist stock status locally', e);
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
    saveItemsLocally(updated);

    // Persist to MongoDB Atlas via backend API
    fetchWithAuth('/api/menu', {
      method: 'POST',
      body: JSON.stringify(newItem),
    }).catch((err) => {
      console.warn('Backend sync failed for addMenuItem', err);
    });

    return newItem;
  };

  const updateMenuItem = (id: string, updatedFields: Partial<MenuItem>) => {
    let targetItem: MenuItem | undefined;

    const updated = menuItems.map((item) => {
      if (item.id === id) {
        const merged = { ...item, ...updatedFields };
        if (updatedFields.price) {
          const rawPrice = updatedFields.price;
          merged.price = rawPrice.startsWith('₹') ? rawPrice : `₹${rawPrice}`;
          merged.numericPrice = parseInt(merged.price.replace(/[^\d]/g, ''), 10) || 0;
        }
        targetItem = merged;
        return merged;
      }
      return item;
    });

    saveItemsLocally(updated);

    // Persist to MongoDB Atlas via backend API
    if (targetItem) {
      fetchWithAuth(`/api/menu/${encodeURIComponent(id)}`, {
        method: 'PUT',
        body: JSON.stringify(targetItem),
      }).catch((err) => {
        console.warn('Backend sync failed for updateMenuItem', err);
      });
    }
  };

  const deleteMenuItem = (id: string) => {
    const updated = menuItems.filter((item) => item.id !== id);
    saveItemsLocally(updated);

    // Persist to MongoDB Atlas via backend API
    fetchWithAuth(`/api/menu/${encodeURIComponent(id)}`, {
      method: 'DELETE',
    }).catch((err) => {
      console.warn('Backend sync failed for deleteMenuItem', err);
    });
  };

  const toggleStock = (id: string) => {
    const current = stockStatus[id] !== false; // default true
    const newStock = !current;
    const updated = {
      ...stockStatus,
      [id]: newStock,
    };
    saveStockLocally(updated);

    // Persist to MongoDB Atlas via backend API
    fetchWithAuth(`/api/menu/${encodeURIComponent(id)}/stock`, {
      method: 'PATCH',
      body: JSON.stringify({ inStock: newStock }),
    }).catch((err) => {
      console.warn('Backend sync failed for toggleStock', err);
    });
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
        isLoading,
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
