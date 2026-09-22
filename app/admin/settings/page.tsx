'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { useRestaurant, RestaurantInfo } from '@/context/RestaurantContext';
import {
  Settings,
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  LogOut,
  ExternalLink,
  Globe,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Pencil,
  Save,
  X,
  CheckCircle2,
  RefreshCw,
  Building2,
  Sparkles,
} from 'lucide-react';

export default function AdminSettingsPage() {
  const router = useRouter();
  const { adminUser, logout } = useAdminAuth();
  const { restaurantInfo, updateRestaurantInfo, resetToDefaults } = useRestaurant();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Form state for editing
  const [formData, setFormData] = useState<RestaurantInfo>(restaurantInfo);

  const openEditModal = () => {
    setFormData(restaurantInfo);
    setIsEditModalOpen(true);
  };

  const handleSaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRestaurantInfo(formData);
    setIsEditModalOpen(false);
    setSuccessToast('Restaurant information updated successfully! Changes are live across the website.');
    setTimeout(() => setSuccessToast(null), 4000);
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to sign out of the Admin Panel?')) {
      logout();
      router.replace('/admin/');
    }
  };

  return (
    <div className="space-y-6 font-outfit">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-20 right-6 z-50 p-4 rounded-2xl bg-deep-green text-warm-white shadow-xl border border-golden-yellow/40 flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-golden-yellow shrink-0" />
          <span className="text-xs sm:text-sm font-bold">{successToast}</span>
        </div>
      )}

      {/* Header with Top EDIT Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-restaurant-green/10 border border-restaurant-green/20 text-xs font-bold text-restaurant-green mb-2">
            <Settings className="w-3.5 h-3.5 text-golden-yellow" />
            <span>Branch Profile & System Config</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-deep-green tracking-tight">
            Restaurant Settings
          </h1>
          <p className="text-xs sm:text-sm text-deep-green/70">
            Manage official restaurant profile, contact helplines, operating hours, and administrator access
          </p>
        </div>

        {/* Top EDIT Button */}
        <button
          onClick={openEditModal}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95 shrink-0 self-start sm:self-center"
        >
          <Pencil className="w-4 h-4" />
          <span>Edit Restaurant Info</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Branch Details (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Branch Overview Card */}
          <div className="bg-warm-white rounded-3xl p-6 sm:p-7 border border-deep-green/10 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-deep-green/10">
              {/* Official Website Logo & Brand Name */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 sm:h-12 shrink-0 flex items-center">
                  <Image
                    src={restaurantInfo.logo || '/images/navbar-logo.png'}
                    alt="Restaurant Logo"
                    width={1014}
                    height={582}
                    priority
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="relative h-7 sm:h-9 shrink-0 flex items-center">
                  <Image
                    src={restaurantInfo.brandImage || '/images/navbar-brand.png'}
                    alt={restaurantInfo.name}
                    width={1024}
                    height={316}
                    priority
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  Operational
                </span>
                <button
                  onClick={openEditModal}
                  className="p-2 rounded-xl bg-cream hover:bg-restaurant-green/10 text-restaurant-green transition-colors cursor-pointer"
                  title="Edit details"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Restaurant Subtitle */}
            <div className="text-xs text-deep-green/70 flex items-center gap-2">
              <span className="font-bold text-deep-green">{restaurantInfo.name}</span>
              <span>•</span>
              <span className="text-restaurant-green font-semibold">{restaurantInfo.subTagline}</span>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-deep-green/60 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-golden-yellow" />
                <span>Restaurant Location</span>
              </label>
              <div className="p-4 rounded-2xl bg-cream/50 border border-deep-green/10 text-xs sm:text-sm text-deep-green leading-relaxed space-y-1">
                <p className="font-medium">{restaurantInfo.address}</p>
                {restaurantInfo.landmark && (
                  <p className="text-xs text-restaurant-green font-semibold">
                    Landmark: {restaurantInfo.landmark}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Details (Phone, WhatsApp, Email) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-deep-green/60 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-restaurant-green" />
                  <span>Telephone</span>
                </label>
                <div className="p-3 rounded-2xl bg-cream/50 border border-deep-green/10 font-bold text-xs text-deep-green flex items-center justify-between">
                  <span>{restaurantInfo.phone}</span>
                  <a
                    href={`tel:${restaurantInfo.phoneRaw || restaurantInfo.phone}`}
                    className="text-xs text-restaurant-green hover:underline font-semibold"
                  >
                    Call
                  </a>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-deep-green/60 flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </label>
                <div className="p-3 rounded-2xl bg-cream/50 border border-deep-green/10 font-bold text-xs text-deep-green flex items-center justify-between">
                  <span>{restaurantInfo.whatsapp}</span>
                  <a
                    href={`https://wa.me/${(restaurantInfo.whatsappRaw || restaurantInfo.whatsapp).replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-emerald-600 hover:underline font-semibold"
                  >
                    Chat
                  </a>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-deep-green/60 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Email</span>
                </label>
                <div className="p-3 rounded-2xl bg-cream/50 border border-deep-green/10 font-bold text-xs text-deep-green truncate" title={restaurantInfo.email}>
                  <a
                    href={`mailto:${restaurantInfo.email}`}
                    className="hover:text-restaurant-green truncate block"
                  >
                    {restaurantInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Timings */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-deep-green/60 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-golden-yellow" />
                <span>Operating Timings</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-cream/50 border border-deep-green/10">
                  <span className="font-bold text-deep-green block">Morning Tiffin</span>
                  <span className="text-restaurant-green font-semibold">{restaurantInfo.mornTiffin}</span>
                </div>
                <div className="p-3 rounded-xl bg-cream/50 border border-deep-green/10">
                  <span className="font-bold text-deep-green block">Royal Lunch</span>
                  <span className="text-restaurant-green font-semibold">{restaurantInfo.royalLunch}</span>
                </div>
                <div className="p-3 rounded-xl bg-cream/50 border border-deep-green/10">
                  <span className="font-bold text-deep-green block">Dinner Tiffin</span>
                  <span className="text-restaurant-green font-semibold">{restaurantInfo.dinnerTiffin}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels Card */}
          <div className="bg-warm-white rounded-3xl p-6 sm:p-7 border border-deep-green/10 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-base text-deep-green flex items-center gap-2">
                <Globe className="w-4 h-4 text-restaurant-green" />
                <span>Connected Social Media Channels</span>
              </h3>
              <button
                onClick={openEditModal}
                className="text-xs text-restaurant-green hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Pencil className="w-3 h-3" />
                <span>Edit Links</span>
              </button>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  name: 'Instagram',
                  url: restaurantInfo.instagramUrl,
                  icon: Instagram,
                  color: 'text-pink-600',
                },
                {
                  name: 'Facebook',
                  url: restaurantInfo.facebookUrl,
                  icon: Facebook,
                  color: 'text-blue-600',
                },
                {
                  name: 'YouTube',
                  url: restaurantInfo.youtubeUrl,
                  icon: Youtube,
                  color: 'text-red-600',
                },
              ].map((channel) => {
                const Icon = channel.icon;
                return (
                  <div
                    key={channel.name}
                    className="flex items-center justify-between p-3 rounded-2xl bg-cream/40 border border-deep-green/10 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${channel.color}`} />
                      <span className="font-bold text-deep-green">{channel.name}</span>
                    </div>
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-restaurant-green hover:underline font-semibold text-[11px]"
                    >
                      <span className="max-w-[200px] truncate hidden sm:inline">{channel.url}</span>
                      <span className="sm:hidden">Open</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Admin Access & Session (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Admin Credentials & Session Card */}
          <div className="bg-warm-white rounded-3xl p-6 sm:p-7 border border-deep-green/10 shadow-sm space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-deep-green/10">
              <div className="w-10 h-10 rounded-xl bg-restaurant-green/10 text-restaurant-green flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-deep-green">Admin Session</h3>
                <p className="text-xs text-deep-green/60">Active management authentication</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-cream/50 border border-deep-green/10 space-y-1">
                <p className="text-[10px] font-bold text-deep-green/50 uppercase tracking-wider">
                  Logged In As
                </p>
                <p className="font-bold text-sm text-deep-green">
                  {adminUser?.email || 'srenewaanandabavan@gmail.com'}
                </p>
                <p className="text-[11px] text-restaurant-green font-semibold flex items-center gap-1 pt-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Authenticated Administrator</span>
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-cream/50 border border-deep-green/10 space-y-1">
                <p className="text-[10px] font-bold text-deep-green/50 uppercase tracking-wider">
                  Admin Sign In Route
                </p>
                <p className="font-bold text-xs text-deep-green">
                  srenewaanandabavan.com/admin/
                </p>
                <p className="text-[11px] text-deep-green/60">
                  Protected route • Direct sign-in & dashboard redirect
                </p>
              </div>
            </div>

            {/* Logout Action */}
            <div className="pt-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-warm-white font-bold text-xs shadow-md transition-all cursor-pointer active:scale-98"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out of Admin Portal</span>
              </button>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="bg-cream/50 rounded-3xl p-6 border border-deep-green/10 text-xs space-y-3">
            <h4 className="font-bold text-deep-green uppercase tracking-wider text-[11px]">
              Fast Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-warm-white border border-deep-green/10 text-deep-green font-semibold hover:border-restaurant-green transition-all text-center flex items-center justify-center gap-1"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3 h-3 text-deep-green/50" />
              </a>
              <a
                href="/menu/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-warm-white border border-deep-green/10 text-deep-green font-semibold hover:border-restaurant-green transition-all text-center flex items-center justify-center gap-1"
              >
                <span>Public Menu</span>
                <ExternalLink className="w-3 h-3 text-deep-green/50" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= EDIT RESTAURANT INFORMATION MODAL ================= */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-green/40 backdrop-blur-xs overflow-y-auto">
          <div className="bg-warm-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-deep-green/15 shadow-2xl space-y-6 animate-fadeIn my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-deep-green/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-restaurant-green text-warm-white flex items-center justify-center">
                  <Pencil className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-deep-green">Edit Restaurant Information</h3>
                  <p className="text-xs text-deep-green/60">
                    Changes will be saved and reflected on both the admin panel and public website
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1.5 rounded-lg text-deep-green/60 hover:bg-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Edit Form */}
            <form onSubmit={handleSaveSubmit} className="space-y-5 text-xs sm:text-sm">
              {/* Section 1: Basic Identity */}
              <div className="space-y-3">
                <h4 className="font-bold text-deep-green text-xs uppercase tracking-wider text-restaurant-green flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Restaurant Identity</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Restaurant Name *
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
                      Sub-Tagline
                    </label>
                    <input
                      type="text"
                      value={formData.subTagline}
                      onChange={(e) => setFormData({ ...formData, subTagline: e.target.value })}
                      placeholder="Pure Vegetarian Family Restaurant"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Logo Path *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.logo}
                      onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                      placeholder="/images/navbar-logo.png"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Brand Image Banner Path *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.brandImage}
                      onChange={(e) => setFormData({ ...formData, brandImage: e.target.value })}
                      placeholder="/images/navbar-brand.png"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Contact Information */}
              <div className="space-y-3 pt-3 border-t border-deep-green/10">
                <h4 className="font-bold text-deep-green text-xs uppercase tracking-wider text-restaurant-green flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Contact Numbers & Email</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Telephone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                          phoneRaw: `+91${e.target.value.replace(/\D/g, '')}`,
                        })
                      }
                      placeholder="63833 12948"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          whatsapp: e.target.value,
                          whatsappRaw: `+91${e.target.value.replace(/\D/g, '')}`,
                        })
                      }
                      placeholder="86755 35555"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="srenewaanandabavan@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Location Details */}
              <div className="space-y-3 pt-3 border-t border-deep-green/10">
                <h4 className="font-bold text-deep-green text-xs uppercase tracking-wider text-restaurant-green flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Address & Landmark</span>
                </h4>
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Full Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                  />
                </div>

                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Landmark
                  </label>
                  <input
                    type="text"
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                    placeholder="Opposite to Government Higher Secondary School, Poosaripatty"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
              </div>

              {/* Section 4: Timings */}
              <div className="space-y-3 pt-3 border-t border-deep-green/10">
                <h4 className="font-bold text-deep-green text-xs uppercase tracking-wider text-restaurant-green flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Operating Timings</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Morning Tiffin
                    </label>
                    <input
                      type="text"
                      value={formData.mornTiffin}
                      onChange={(e) => setFormData({ ...formData, mornTiffin: e.target.value })}
                      placeholder="06:30 AM – 11:30 AM"
                      className="w-full px-3.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Royal Lunch
                    </label>
                    <input
                      type="text"
                      value={formData.royalLunch}
                      onChange={(e) => setFormData({ ...formData, royalLunch: e.target.value })}
                      placeholder="12:00 PM – 03:30 PM"
                      className="w-full px-3.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Dinner Tiffin
                    </label>
                    <input
                      type="text"
                      value={formData.dinnerTiffin}
                      onChange={(e) => setFormData({ ...formData, dinnerTiffin: e.target.value })}
                      placeholder="05:30 PM – 10:30 PM"
                      className="w-full px-3.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Section 5: Social Media Links */}
              <div className="space-y-3 pt-3 border-t border-deep-green/10">
                <h4 className="font-bold text-deep-green text-xs uppercase tracking-wider text-restaurant-green flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Social Media Channels</span>
                </h4>
                <div className="space-y-2.5">
                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Instagram URL
                    </label>
                    <input
                      type="url"
                      value={formData.instagramUrl}
                      onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      Facebook URL
                    </label>
                    <input
                      type="url"
                      value={formData.facebookUrl}
                      onChange={(e) => setFormData({ ...formData, facebookUrl: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                      YouTube URL
                    </label>
                    <input
                      type="text"
                      value={formData.youtubeUrl}
                      onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-deep-green/10">
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Reset all restaurant information back to original defaults?')) {
                      resetToDefaults();
                      setIsEditModalOpen(false);
                      setSuccessToast('Reset to default restaurant information.');
                    }
                  }}
                  className="px-4 py-2 rounded-xl text-deep-green/60 hover:text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Reset Defaults
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-cream text-deep-green font-semibold text-xs hover:bg-cream/80 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-restaurant-green text-warm-white font-bold text-xs hover:bg-leaf-green shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
