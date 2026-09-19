'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useMenu } from '@/context/MenuContext';
import { MenuItem, MenuCategory } from '@/data/menu';
import {
  UtensilsCrossed,
  Search,
  Plus,
  Pencil,
  Eye,
  Trash2,
  CheckCircle2,
  XCircle,
  Leaf,
  X,
  Sparkles,
  Save,
  Clock,
  Tag,
  FileText,
  DollarSign,
  AlertCircle,
} from 'lucide-react';

const MAIN_CATEGORIES = [
  'All',
  'Breakfast',
  'Lunch',
  'Starters',
  'Breads & Gravies',
  'Rice & Noodles',
  'Dinner',
  'Drinks & Desserts',
] as const;

const ALL_CATEGORY_OPTIONS: MenuCategory[] = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Soup Varieties',
  'Snacks & Crispies',
  'Starters',
  'Semi Starters',
  'Rolls',
  'Thandhoori Varieties',
  'Indian Breads',
  'Indian Gravy',
  'Fried Rice',
  'Noodles',
  'Pulao & Biryani',
  'Salad',
  'Raita',
  'Hot Beverage',
  'Cold Beverage & Juices',
  'Classic Milkshakes',
  'Dessert & Ice Cream',
];

export default function AdminMenuPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const { menuItems, addMenuItem, updateMenuItem, deleteMenuItem, toggleStock, stockStatus } = useMenu();

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [viewingItem, setViewingItem] = useState<MenuItem | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  // Form state for Add / Edit
  const [formData, setFormData] = useState({
    name: '',
    category: 'Breakfast' as MenuCategory,
    price: '',
    timing: '7:00 AM – 11:30 AM',
    tagline: '',
    description: '',
    image: '/images/menu/idli.png',
    ingredients: '',
  });

  // Open Add Modal
  const openAddModal = () => {
    setFormData({
      name: '',
      category: (selectedCategory !== 'All' && ALL_CATEGORY_OPTIONS.includes(selectedCategory as MenuCategory)
        ? (selectedCategory as MenuCategory)
        : 'Breakfast'),
      price: '',
      timing: 'All Day (7:00 AM – 11:00 PM)',
      tagline: '',
      description: '',
      image: '/images/menu/idli.png',
      ingredients: 'Traditional Spices, Pure Ghee, Fresh Vegetables',
    });
    setIsAddModalOpen(true);
  };

  // Open Edit Modal
  const openEditModal = (dish: MenuItem) => {
    setEditingItem(dish);
    setFormData({
      name: dish.name,
      category: dish.category,
      price: dish.price,
      timing: dish.timing || '',
      tagline: dish.tagline || '',
      description: dish.description || '',
      image: dish.image || '/images/menu/idli.png',
      ingredients: dish.ingredients ? dish.ingredients.join(', ') : '',
    });
  };

  // Handle Add Submit
  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.price.trim()) {
      alert('Please fill in dish name and price.');
      return;
    }

    const ingredientsList = formData.ingredients
      .split(',')
      .map((i) => i.trim())
      .filter(Boolean);

    addMenuItem({
      name: formData.name.trim(),
      category: formData.category,
      price: formData.price.trim(),
      timing: formData.timing.trim(),
      tagline: formData.tagline.trim() || `${formData.name} - Authentic Pure Veg`,
      description: formData.description.trim() || `Authentic ${formData.name} prepared fresh with traditional spices.`,
      image: formData.image.trim() || '/images/menu/idli.png',
      ingredients: ingredientsList.length > 0 ? ingredientsList : ['Fresh Ingredients', 'Pure Ghee'],
    });

    setIsAddModalOpen(false);
    showSuccessToast(`"${formData.name}" added to menu successfully!`);
  };

  // Handle Edit Submit
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;
    if (!formData.name.trim() || !formData.price.trim()) {
      alert('Please fill in dish name and price.');
      return;
    }

    const ingredientsList = formData.ingredients
      .split(',')
      .map((i) => i.trim())
      .filter(Boolean);

    updateMenuItem(editingItem.id, {
      name: formData.name.trim(),
      category: formData.category,
      price: formData.price.trim(),
      timing: formData.timing.trim(),
      tagline: formData.tagline.trim(),
      description: formData.description.trim(),
      image: formData.image.trim(),
      ingredients: ingredientsList,
    });

    setEditingItem(null);
    showSuccessToast(`Updated "${formData.name}" successfully!`);
  };

  const showSuccessToast = (msg: string) => {
    setActionSuccess(msg);
    setTimeout(() => setActionSuccess(null), 4000);
  };

  // Filtered dishes
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter matching
      let matchesCat = true;
      if (selectedCategory === 'Breakfast') {
        matchesCat = item.category === 'Breakfast';
      } else if (selectedCategory === 'Lunch') {
        matchesCat = item.category === 'Lunch';
      } else if (selectedCategory === 'Dinner') {
        matchesCat = item.category === 'Dinner';
      } else if (selectedCategory === 'Starters') {
        matchesCat =
          item.category === 'Starters' ||
          item.category === 'Semi Starters' ||
          item.category === 'Snacks & Crispies' ||
          item.category === 'Soup Varieties' ||
          item.category === 'Rolls';
      } else if (selectedCategory === 'Breads & Gravies') {
        matchesCat =
          item.category === 'Indian Breads' ||
          item.category === 'Indian Gravy' ||
          item.category === 'Thandhoori Varieties';
      } else if (selectedCategory === 'Rice & Noodles') {
        matchesCat =
          item.category === 'Fried Rice' ||
          item.category === 'Noodles' ||
          item.category === 'Pulao & Biryani';
      } else if (selectedCategory === 'Drinks & Desserts') {
        matchesCat =
          item.category === 'Hot Beverage' ||
          item.category === 'Cold Beverage & Juices' ||
          item.category === 'Classic Milkshakes' ||
          item.category === 'Dessert & Ice Cream' ||
          item.category === 'Salad' ||
          item.category === 'Raita';
      }

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.price.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [menuItems, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 font-outfit">
      {/* Toast Notification */}
      {actionSuccess && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-deep-green text-warm-white shadow-xl border border-golden-yellow/40 flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-golden-yellow shrink-0" />
          <span className="text-xs sm:text-sm font-bold">{actionSuccess}</span>
        </div>
      )}

      {/* Header with Top ADD Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-restaurant-green/10 border border-restaurant-green/20 text-xs font-bold text-restaurant-green mb-2">
            <UtensilsCrossed className="w-3.5 h-3.5 text-golden-yellow" />
            <span>Catalog Management</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-deep-green tracking-tight">
            Menu Management
          </h1>
          <p className="text-xs sm:text-sm text-deep-green/70">
            Create, edit, and manage {menuItems.length} South Indian & continental vegetarian dishes
          </p>
        </div>

        {/* Top ADD Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={openAddModal}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Add Menu Item</span>
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {MAIN_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-restaurant-green text-warm-white shadow-sm'
                  : 'bg-warm-white text-deep-green/70 border border-deep-green/10 hover:bg-cream/60'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Search and Summary */}
      <div className="bg-warm-white rounded-3xl p-4 sm:p-5 border border-deep-green/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-deep-green/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dish by name, price, category..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-xs sm:text-sm text-deep-green placeholder-deep-green/40 focus:outline-none focus:ring-2 focus:ring-restaurant-green"
          />
        </div>

        <div className="text-xs text-deep-green/60">
          Displaying <span className="font-bold text-deep-green">{filteredItems.length}</span> of{' '}
          <span className="font-bold text-deep-green">{menuItems.length}</span> items
        </div>
      </div>

      {/* Menu Table */}
      <div className="bg-warm-white rounded-3xl border border-deep-green/10 shadow-sm overflow-hidden">
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <UtensilsCrossed className="w-8 h-8 text-deep-green/40 mx-auto" />
            <p className="font-bold text-deep-green">No menu items match your search</p>
            <p className="text-xs text-deep-green/60">Try clearing the search query or category filter.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-deep-green/10 bg-cream/40 text-[11px] font-bold text-deep-green/60 uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Dish</th>
                  <th className="py-3.5 px-4">Category</th>
                  <th className="py-3.5 px-4">Timing</th>
                  <th className="py-3.5 px-4">Price</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-deep-green/10 text-xs sm:text-sm">
                {filteredItems.map((dish) => {
                  const isAvailable = stockStatus[dish.id] !== false;
                  return (
                    <tr key={dish.id} className="hover:bg-cream/30 transition-colors">
                      {/* Dish Thumbnail & Name */}
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-cream shrink-0 border border-deep-green/10">
                            <Image
                              src={dish.image}
                              alt={dish.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-extrabold text-deep-green">{dish.name}</div>
                            <div className="text-[11px] text-deep-green/60 line-clamp-1 max-w-xs">
                              {dish.tagline || dish.description}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3.5 px-4">
                        <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cream border border-deep-green/10 text-deep-green">
                          {dish.category}
                        </span>
                      </td>

                      {/* Timing */}
                      <td className="py-3.5 px-4 text-xs text-deep-green/70">
                        {dish.timing || 'All Day'}
                      </td>

                      {/* Price */}
                      <td className="py-3.5 px-4">
                        <span className="font-extrabold text-restaurant-green text-sm">
                          {dish.price}
                        </span>
                      </td>

                      {/* Status Toggle */}
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => toggleStock(dish.id)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            isAvailable
                              ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                              : 'bg-red-100 text-red-800 hover:bg-red-200'
                          }`}
                          title="Click to toggle availability"
                        >
                          {isAvailable ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>In Stock</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5" />
                              <span>Out of Stock</span>
                            </>
                          )}
                        </button>
                      </td>

                      {/* Actions: EDIT, VIEW, DELETE */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* EDIT Button */}
                          <button
                            onClick={() => openEditModal(dish)}
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-restaurant-green/10 hover:bg-restaurant-green hover:text-warm-white text-restaurant-green text-xs font-bold transition-colors cursor-pointer"
                            title="Edit this dish"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                            <span>Edit</span>
                          </button>

                          {/* Preview View Button */}
                          <button
                            onClick={() => setViewingItem(dish)}
                            className="p-1.5 rounded-xl hover:bg-cream text-deep-green/60 hover:text-deep-green transition-colors cursor-pointer"
                            title="View Dish Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          {/* Delete Button */}
                          <button
                            onClick={() => {
                              if (confirm(`Are you sure you want to remove "${dish.name}" from the menu?`)) {
                                deleteMenuItem(dish.id);
                                showSuccessToast(`Removed "${dish.name}" from menu.`);
                              }
                            }}
                            className="p-1.5 rounded-xl hover:bg-red-50 text-deep-green/40 hover:text-red-600 transition-colors cursor-pointer"
                            title="Delete Item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ================= ADD MENU ITEM MODAL ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-green/40 backdrop-blur-xs overflow-y-auto">
          <div className="bg-warm-white rounded-3xl max-w-xl w-full p-6 sm:p-7 border border-deep-green/15 shadow-2xl space-y-5 animate-fadeIn my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-deep-green/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-restaurant-green text-warm-white flex items-center justify-center">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-deep-green">Add New Menu Item</h3>
                  <p className="text-xs text-deep-green/60">Create a dish for Sre New Aananda Bavan</p>
                </div>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-deep-green/60 hover:bg-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Dish Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ghee Butter Masala Dosa"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>

                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Price (INR) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="e.g. ₹90"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as MenuCategory })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                  >
                    {ALL_CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Service Timing
                  </label>
                  <input
                    type="text"
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    placeholder="e.g. 7:00 AM – 11:30 AM"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  placeholder="e.g. Crispy golden dosa roasted in pure country ghee"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                />
              </div>

              <div>
                <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed description of taste, ingredients, and preparation style..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Image Path
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="/images/menu/idli.png"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Key Ingredients (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={formData.ingredients}
                    onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                    placeholder="e.g. Pure Ghee, Rice, Sambar Dal"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-deep-green/10">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-cream text-deep-green font-semibold text-xs hover:bg-cream/80"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-restaurant-green text-warm-white font-bold text-xs hover:bg-leaf-green shadow-md"
                >
                  Create Menu Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= EDIT MENU ITEM MODAL ================= */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-green/40 backdrop-blur-xs overflow-y-auto">
          <div className="bg-warm-white rounded-3xl max-w-xl w-full p-6 sm:p-7 border border-deep-green/15 shadow-2xl space-y-5 animate-fadeIn my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-deep-green/10">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-golden-yellow text-deep-green flex items-center justify-center">
                  <Pencil className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-deep-green">Edit Menu Item</h3>
                  <p className="text-xs text-deep-green/60">Modify details for &ldquo;{editingItem.name}&rdquo;</p>
                </div>
              </div>
              <button
                onClick={() => setEditingItem(null)}
                className="p-1.5 rounded-lg text-deep-green/60 hover:bg-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Dish Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>

                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Price *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as MenuCategory })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                  >
                    {ALL_CATEGORY_OPTIONS.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Service Timing
                  </label>
                  <input
                    type="text"
                    value={formData.timing}
                    onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                />
              </div>

              <div>
                <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Image Path / URL
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Ingredients (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.ingredients}
                    onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-deep-green/10">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-xl bg-cream text-deep-green font-semibold text-xs hover:bg-cream/80"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-restaurant-green text-warm-white font-bold text-xs hover:bg-leaf-green shadow-md flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= VIEW DISH MODAL ================= */}
      {viewingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-green/40 backdrop-blur-xs">
          <div className="bg-warm-white rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-deep-green/15 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-deep-green/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-restaurant-green">
                  {viewingItem.category}
                </span>
                <h3 className="text-xl font-extrabold text-deep-green">{viewingItem.name}</h3>
              </div>
              <button
                onClick={() => setViewingItem(null)}
                className="p-1.5 rounded-lg text-deep-green/60 hover:bg-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden border border-deep-green/10">
              <Image
                src={viewingItem.image}
                alt={viewingItem.name}
                fill
                sizes="(max-width: 640px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-deep-green/90 backdrop-blur-xs text-golden-yellow font-black px-3 py-1 rounded-xl text-sm border border-golden-yellow/20">
                {viewingItem.price}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-deep-green/80 leading-relaxed">
              {viewingItem.description}
            </p>

            {viewingItem.ingredients && viewingItem.ingredients.length > 0 && (
              <div>
                <p className="text-[11px] font-bold text-deep-green/60 uppercase tracking-wider mb-1.5">
                  Key Ingredients:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {viewingItem.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg bg-cream border border-deep-green/10 text-deep-green text-xs font-medium"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-deep-green/10 flex items-center justify-between">
              <button
                onClick={() => {
                  const dish = viewingItem;
                  setViewingItem(null);
                  openEditModal(dish);
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-restaurant-green/10 text-restaurant-green hover:bg-restaurant-green hover:text-warm-white text-xs font-bold transition-all"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit Dish</span>
              </button>

              <button
                onClick={() => setViewingItem(null)}
                className="px-4 py-2 rounded-xl bg-deep-green text-warm-white text-xs font-bold hover:bg-deep-green/90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
