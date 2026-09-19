'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { AdminAuthProvider, useAdminAuth } from '@/context/AdminAuthContext';
import { ReservationsProvider } from '@/context/ReservationsContext';
import { MenuProvider } from '@/context/MenuContext';
import { useRestaurant } from '@/context/RestaurantContext';
import {
  LayoutDashboard,
  CalendarCheck,
  UtensilsCrossed,
  Settings,
  LogOut,
  ExternalLink,
  Menu as MenuIcon,
  X,
  ShieldCheck,
  Phone,
  Clock,
  ChevronRight,
  User,
} from 'lucide-react';

function AdminShell({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, adminUser, logout } = useAdminAuth();
  const { restaurantInfo } = useRestaurant();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Normalize pathname to strip trailing slashes for reliable route matching
  const cleanPath = (pathname || '').replace(/\/+$/, '') || '/';
  const isAuthPage = cleanPath === '/admin' || cleanPath === '/admin/login';

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated && !isAuthPage) {
        router.replace('/admin/');
      } else if (isAuthenticated && isAuthPage) {
        router.replace('/admin/dashboard/');
      }
    }
  }, [isAuthenticated, isLoading, isAuthPage, router]);

  // If on login/auth page, ALWAYS render children directly!
  // If already authenticated, the useEffect above will redirect to /admin/dashboard/
  if (isAuthPage) {
    return <>{children}</>;
  }

  // For protected admin pages, show loading state while checking session
  if (isLoading) {
    return (
      <div className="min-h-screen bg-warm-white flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-deep-green flex items-center justify-center text-golden-yellow shadow-lg animate-pulse">
            <ShieldCheck className="w-8 h-8 text-golden-yellow" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-deep-green text-lg">Sre New Aananda Bavan</h3>
            <p className="text-xs text-deep-green/60 tracking-wider uppercase mt-1">Admin Portal Verification</p>
          </div>
          <div className="w-8 h-8 border-3 border-restaurant-green/30 border-t-restaurant-green rounded-full animate-spin mt-2" />
        </div>
      </div>
    );
  }

  // If unauthenticated trying to access protected route, show redirecting state
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-warm-white flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-3 border-restaurant-green/30 border-t-restaurant-green rounded-full animate-spin" />
          <p className="text-xs text-deep-green/60">Redirecting to Admin Sign In...</p>
        </div>
      </div>
    );
  }

  const navLinks = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard/',
      icon: LayoutDashboard,
    },
    {
      name: 'Menu',
      href: '/admin/menu/',
      icon: UtensilsCrossed,
    },
    {
      name: 'Reservations',
      href: '/admin/reservations/',
      icon: CalendarCheck,
    },
    {
      name: 'Restaurant Settings',
      href: '/admin/settings/',
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    if (confirm('Are you sure you want to sign out of the Admin Panel?')) {
      logout();
      router.replace('/admin/');
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F0] flex flex-col font-outfit text-deep-green">
      {/* Fixed Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 z-40 bg-warm-white/95 backdrop-blur-md border-b border-deep-green/10 shadow-xs">
        <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
          {/* Left: Mobile Menu Toggle & Brand (Same Logo and Website Name from main website) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-deep-green/80 hover:bg-cream/60 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>

            <Link
              href="/admin/dashboard/"
              className="group flex items-center gap-2 sm:gap-2.5 focus:outline-none shrink-0"
              aria-label={`${restaurantInfo.name} Admin Home`}
            >
              {/* Hexagonal A&B Logo from main website */}
              <div className="relative h-8 sm:h-9 shrink-0 flex items-center">
                <Image
                  src={restaurantInfo.logo || "/images/navbar-logo.png"}
                  alt={`${restaurantInfo.name} Logo`}
                  width={1014}
                  height={582}
                  priority
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Sre New Aananda Bavan Brand Name from main website */}
              <div className="relative h-6 sm:h-7 shrink-0 flex items-center">
                <Image
                  src={restaurantInfo.brandImage || "/images/navbar-brand.png"}
                  alt={`${restaurantInfo.name} - Pure Veg A/C Restaurant`}
                  width={1024}
                  height={316}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Admin Badge */}
              <span className="hidden md:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-restaurant-green/10 text-restaurant-green border border-restaurant-green/20 ml-1">
                Admin
              </span>
            </Link>
          </div>

          {/* Right: Actions & Profile */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* View Live Website link */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cream/80 border border-deep-green/10 text-xs font-semibold text-deep-green/80 hover:text-restaurant-green hover:border-restaurant-green/30 transition-all shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </a>

            {/* Admin User Chip */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-cream/90 border border-deep-green/10">
              <div className="w-7 h-7 rounded-full bg-restaurant-green text-cream flex items-center justify-center text-xs font-bold shadow-2xs">
                <User className="w-3.5 h-3.5" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-deep-green leading-none">
                  {adminUser?.email || 'srenewaanandabavan@gmail.com'}
                </p>
                <p className="text-[10px] text-restaurant-green font-medium leading-tight mt-0.5">
                  Super Administrator
                </p>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200/60 text-xs font-semibold transition-all hover:shadow-xs cursor-pointer"
              title="Sign Out of Admin Portal"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Desktop Sidebar (Locked in place, non-scrollable) */}
      <aside className="hidden lg:flex lg:flex-col fixed top-16 left-0 bottom-0 w-64 bg-warm-white border-r border-deep-green/10 p-5 shrink-0 justify-between z-30 overflow-hidden select-none">
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="px-3 text-[10px] font-bold text-deep-green/50 uppercase tracking-widest">
              Main Navigation
            </p>
            <nav className="space-y-1 pt-2">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = cleanPath === (item.href || '').replace(/\/+$/, '');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-restaurant-green text-warm-white shadow-sm'
                        : 'text-deep-green/80 hover:bg-cream/70 hover:text-restaurant-green'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-golden-yellow' : 'text-deep-green/60'}`} />
                      <span>{item.name}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-80" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Branch Quick Card */}
          <div className="bg-cream/60 rounded-2xl p-4 border border-restaurant-green/15 text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-deep-green">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Restaurant Status: Open</span>
            </div>
            <p className="text-deep-green/70 text-[11px] leading-relaxed line-clamp-2">
              {restaurantInfo.address}
            </p>
            <div className="pt-1 flex items-center justify-between text-[11px] text-restaurant-green font-medium border-t border-deep-green/5">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" /> {restaurantInfo.phone}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> Till 11 PM
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-4 border-t border-deep-green/10 space-y-3">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 bg-red-50/70 hover:bg-red-100 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
          <p className="text-center text-[10px] text-deep-green/40">
            Spice Royale © 2026 • v1.0
          </p>
        </div>
      </aside>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-deep-green/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-xs bg-warm-white h-full shadow-2xl p-5 flex flex-col justify-between z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-deep-green/10">
                <div className="flex items-center gap-2">
                  <div className="relative h-7 shrink-0 flex items-center">
                    <Image
                      src="/images/navbar-logo.png"
                      alt="Logo"
                      width={1014}
                      height={582}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="relative h-5 shrink-0 flex items-center">
                    <Image
                      src="/images/navbar-brand.png"
                      alt="Brand"
                      width={1024}
                      height={316}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-lg hover:bg-cream text-deep-green/70"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-1">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = cleanPath === (item.href || '').replace(/\/+$/, '');
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-restaurant-green text-warm-white'
                          : 'text-deep-green/80 hover:bg-cream'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-golden-yellow' : 'text-deep-green/60'}`} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-3 pt-4 border-t border-deep-green/10">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-deep-green bg-cream border border-deep-green/10"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View Public Site</span>
              </a>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Workspace Area (Independently scrollable while sidebar remains fixed) */}
      <main className="lg:pl-64 pt-16 min-h-screen bg-[#F7F6F0]">
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <MenuProvider>
        <ReservationsProvider>
          <AdminShell>{children}</AdminShell>
        </ReservationsProvider>
      </MenuProvider>
    </AdminAuthProvider>
  );
}
