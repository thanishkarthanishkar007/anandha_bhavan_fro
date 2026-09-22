'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/context/AdminAuthContext';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';

export default function AdminSignInPage() {
  const router = useRouter();
  const { login } = useAdminAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError('Please enter your admin email address.');
      return;
    }
    if (!password) {
      setError('Please enter your admin password.');
      return;
    }

    setIsSubmitting(true);
    const result = await login(email, password);
    setIsSubmitting(false);

    if (result.success) {
      router.push('/admin/dashboard/');
    } else {
      setError(result.error || 'Authentication failed.');
    }
  };

  return (
    <div className="min-h-screen bg-warm-white relative flex flex-col justify-between overflow-hidden font-outfit">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-restaurant-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-golden-yellow/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navbar */}
      <header className="px-6 py-5 flex items-center justify-between z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-deep-green/70 hover:text-restaurant-green transition-colors bg-cream/70 hover:bg-cream px-3.5 py-1.5 rounded-full border border-deep-green/10 shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Website</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-restaurant-green animate-pulse" />
          <span className="text-xs font-semibold text-deep-green/70">Admin Portal v1.0</span>
        </div>
      </header>

      {/* Main Sign In Card */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-8 z-10">
        <div className="w-full max-w-md bg-warm-white rounded-3xl p-7 sm:p-9 border border-deep-green/15 shadow-premium">
          {/* Official Brand Logo & Name */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <div className="relative h-11 shrink-0 flex items-center">
                <Image
                  src="/images/navbar-logo.png"
                  alt="A&B Logo"
                  width={1014}
                  height={582}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="relative h-9 shrink-0 flex items-center">
                <Image
                  src="/images/navbar-brand.png"
                  alt="Sre New Aananda Bavan"
                  width={1024}
                  height={316}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-restaurant-green/10 border border-restaurant-green/20 text-[11px] font-bold text-restaurant-green uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 text-golden-yellow" />
              <span>Authorized Personnel Only</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-deep-green tracking-tight">
              Admin Sign In
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-deep-green/70">
              Management Access Console
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-3.5 rounded-2xl bg-red-50/90 border border-red-200 text-red-700 text-xs flex items-start gap-2.5 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <div className="flex-1 leading-relaxed">{error}</div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-deep-green uppercase tracking-wider mb-1.5">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-deep-green/40">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter admin email"
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-cream/50 border border-deep-green/15 text-deep-green placeholder-deep-green/40 text-sm focus:outline-none focus:ring-2 focus:ring-restaurant-green focus:border-transparent transition-all"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-deep-green uppercase tracking-wider">
                  Admin Password
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-deep-green/40">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full pl-10 pr-11 py-3 rounded-2xl bg-cream/50 border border-deep-green/15 text-deep-green placeholder-deep-green/40 text-sm focus:outline-none focus:ring-2 focus:ring-restaurant-green focus:border-transparent transition-all"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-deep-green/40 hover:text-deep-green transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-warm-white/40 border-t-warm-white rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-4 text-center text-xs text-deep-green/60 z-10">
        <p>
          Sre New Aananda Bavan • NH 44 Bangalore to Salem Byepass, Poosaripatty, Omalur, Salem 636305
        </p>
      </footer>
    </div>
  );
}
