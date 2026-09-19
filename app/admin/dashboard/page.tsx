'use client';

import React from 'react';
import Link from 'next/link';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { useReservations } from '@/context/ReservationsContext';
import { useMenu } from '@/context/MenuContext';
import { useRestaurant } from '@/context/RestaurantContext';
import {
  CalendarCheck,
  UtensilsCrossed,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Users,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const { adminUser } = useAdminAuth();
  const { reservations, updateStatus, stats } = useReservations();
  const { menuItems } = useMenu();
  const { restaurantInfo } = useRestaurant();

  // Category counts from menuItems
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    menuItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [menuItems]);

  const recentReservations = reservations.slice(0, 5);

  return (
    <div className="space-y-8 font-outfit">
      {/* Top Banner / Welcome Card */}
      <div className="relative overflow-hidden bg-deep-green text-warm-white rounded-3xl p-6 sm:p-8 border border-restaurant-green/30 shadow-lg">
        <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-restaurant-green/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-restaurant-green/30 border border-restaurant-green/40 text-golden-yellow text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-golden-yellow" />
              <span>Sre New Aananda Bavan • Management Console</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-warm-white tracking-tight">
              Welcome back, Administrator
            </h1>
            <p className="text-warm-white/75 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Managing operations for Poosaripatty Salem branch. Total 271 authentic vegetarian menu items and active table reservations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/admin/reservations/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-golden-yellow text-deep-green font-bold text-xs hover:bg-yellow-400 transition-all shadow-md active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Manage Bookings</span>
            </Link>
            <Link
              href="/admin/menu/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-warm-white/10 hover:bg-warm-white/20 text-warm-white border border-warm-white/20 font-semibold text-xs transition-all"
            >
              <UtensilsCrossed className="w-4 h-4 text-golden-yellow" />
              <span>View 271 Dishes</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Menu Items */}
        <Link
          href="/admin/menu/"
          className="bg-warm-white rounded-3xl p-5 sm:p-6 border border-deep-green/10 shadow-sm hover:shadow-md hover:border-restaurant-green/30 transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-restaurant-green/10 text-restaurant-green flex items-center justify-center group-hover:scale-110 transition-transform">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-restaurant-green px-2.5 py-0.5 rounded-full bg-restaurant-green/10">
              Live Catalog
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold text-deep-green/60 uppercase tracking-wider">Total Menu Items</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black text-deep-green">{menuItems.length}</span>
              <span className="text-xs text-deep-green/60 font-medium">Dishes</span>
            </div>
            <p className="mt-2 text-xs text-deep-green/70 flex items-center gap-1">
              <span>Covering 7 meal categories</span>
              <ArrowRight className="w-3 h-3 text-restaurant-green opacity-0 group-hover:opacity-100 transition-opacity" />
            </p>
          </div>
        </Link>

        {/* Total Reservations */}
        <Link
          href="/admin/reservations/"
          className="bg-warm-white rounded-3xl p-5 sm:p-6 border border-deep-green/10 shadow-sm hover:shadow-md hover:border-restaurant-green/30 transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-golden-yellow/15 text-golden-yellow flex items-center justify-center group-hover:scale-110 transition-transform">
              <CalendarCheck className="w-6 h-6 text-golden-yellow" />
            </div>
            <span className="text-[11px] font-bold text-amber-700 px-2.5 py-0.5 rounded-full bg-amber-50">
              {stats.pending} Pending
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold text-deep-green/60 uppercase tracking-wider">Table Reservations</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black text-deep-green">{stats.total}</span>
              <span className="text-xs text-deep-green/60 font-medium">Recorded</span>
            </div>
            <p className="mt-2 text-xs text-deep-green/70 flex items-center gap-1">
              <span className="text-emerald-600 font-semibold">{stats.confirmed} Confirmed</span>
              <span>•</span>
              <span className="text-blue-600 font-semibold">{stats.completed} Completed</span>
            </p>
          </div>
        </Link>

        {/* Restaurant Status */}
        <div className="bg-warm-white rounded-3xl p-5 sm:p-6 border border-deep-green/10 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 px-2.5 py-0.5 rounded-full bg-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open Now
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold text-deep-green/60 uppercase tracking-wider">Operating Timings</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl sm:text-2xl font-black text-deep-green line-clamp-1">{restaurantInfo.operatingHours}</span>
            </div>
            <p className="mt-2 text-xs text-deep-green/70">
              All 7 days • Pure Vegetarian dining
            </p>
          </div>
        </div>

        {/* Highway Helpline */}
        <div className="bg-warm-white rounded-3xl p-5 sm:p-6 border border-deep-green/10 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-deep-green/10 text-deep-green flex items-center justify-center">
              <Phone className="w-6 h-6 text-restaurant-green" />
            </div>
            <span className="text-[11px] font-bold text-restaurant-green px-2.5 py-0.5 rounded-full bg-restaurant-green/10">
              NH-44 Salem
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold text-deep-green/60 uppercase tracking-wider">Direct Hotline</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xl sm:text-2xl font-black text-deep-green">{restaurantInfo.phone}</span>
            </div>
            <p className="mt-2 text-xs text-deep-green/70 flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp: {restaurantInfo.whatsapp}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Recent Reservations & Menu Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Recent Table Bookings (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-deep-green">
                Recent Table Bookings
              </h2>
              <p className="text-xs text-deep-green/60">
                Latest customer table reservations and status
              </p>
            </div>
            <Link
              href="/admin/reservations"
              className="text-xs font-bold text-restaurant-green hover:text-leaf-green flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-warm-white rounded-3xl border border-deep-green/10 shadow-sm overflow-hidden">
            <div className="divide-y divide-deep-green/10">
              {recentReservations.map((item) => (
                <div key={item.id} className="p-4 sm:p-5 hover:bg-cream/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-deep-green text-sm sm:text-base">
                        {item.customerName}
                      </span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          item.status === 'Confirmed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.status === 'Pending'
                            ? 'bg-amber-100 text-amber-800'
                            : item.status === 'Completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-deep-green/70">
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-deep-green/40" />
                        {item.phone}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-deep-green/40" />
                        {item.guests}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-deep-green/40" />
                        {item.timeSlot}
                      </span>
                    </div>

                    {item.specialRequests && (
                      <p className="text-[11px] text-deep-green/60 italic line-clamp-1">
                        &ldquo;{item.specialRequests}&rdquo;
                      </p>
                    )}
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    {item.status === 'Pending' && (
                      <button
                        onClick={() => updateStatus(item.id, 'Confirmed')}
                        className="px-3 py-1.5 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        Confirm
                      </button>
                    )}
                    {item.status === 'Confirmed' && (
                      <button
                        onClick={() => updateStatus(item.id, 'Completed')}
                        className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-warm-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                      >
                        Mark Done
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-cream/40 border-t border-deep-green/10 text-center">
              <Link
                href="/admin/reservations/"
                className="text-xs font-bold text-deep-green/70 hover:text-restaurant-green transition-colors"
              >
                Open Full Reservations Manager ({reservations.length} total entries) →
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Menu Breakdown & Branch Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-deep-green">
              Menu Categories
            </h2>
            <p className="text-xs text-deep-green/60">
              Item distribution across 7 meal divisions
            </p>
          </div>

          <div className="bg-warm-white rounded-3xl border border-deep-green/10 p-5 shadow-sm space-y-3">
            {[
              { name: 'Breakfast', count: 48, icon: '🥞' },
              { name: 'Lunch', count: 38, icon: '🍛' },
              { name: 'Starters', count: 38, icon: '🥟' },
              { name: 'Breads & Gravies', count: 38, icon: '🫓' },
              { name: 'Rice & Noodles', count: 38, icon: '🍚' },
              { name: 'Dinner', count: 33, icon: '🍲' },
              { name: 'Drinks & Desserts', count: 38, icon: '🍹' },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={`/admin/menu/?category=${encodeURIComponent(cat.name)}`}
                className="flex items-center justify-between p-3 rounded-2xl bg-cream/40 hover:bg-cream hover:border-restaurant-green/30 border border-transparent transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-deep-green group-hover:text-restaurant-green transition-colors">
                    {cat.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-warm-white border border-deep-green/10 text-deep-green">
                    {cat.count} items
                  </span>
                  <ChevronRight className="w-4 h-4 text-deep-green/40 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Restaurant Quick Overview Card */}
          <div className="bg-warm-white rounded-3xl border border-deep-green/10 p-5 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-deep-green flex items-center gap-2">
              <MapPin className="w-4 h-4 text-golden-yellow" />
              <span>Sre New Aananda Bavan - Branch Info</span>
            </h3>
            <p className="text-xs text-deep-green/80 leading-relaxed">
              Bangalore to Salem Byepass, NH 44, opposite to Government Higher Secondary School, Poosaripatty, Omalur, Salem, Tamil Nadu 636305
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-cream text-restaurant-green font-semibold border border-deep-green/10 hover:bg-cream/80 transition-colors"
              >
                <span>Google Maps View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <Link
                href="/admin/settings/"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-deep-green text-warm-white font-semibold hover:bg-deep-green/90 transition-colors"
              >
                <span>Settings & Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
