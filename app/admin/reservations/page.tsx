'use client';

import React, { useState, useMemo } from 'react';
import { useReservations } from '@/context/ReservationsContext';
import { Reservation } from '@/data/reservations';
import {
  CalendarCheck,
  Search,
  Plus,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  Phone,
  Mail,
  Users,
  Trash2,
  AlertCircle,
  Calendar,
  Sparkles,
  X,
  RefreshCw,
} from 'lucide-react';

export default function AdminReservationsPage() {
  const {
    reservations,
    updateStatus,
    addReservation,
    deleteReservation,
    refreshReservations,
    stats,
    isLoading,
  } = useReservations();

  const [activeTab, setActiveTab] = useState<'All' | 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    await refreshReservations();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  // New reservation form state
  const [newRes, setNewRes] = useState({
    customerName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Lunch (12:30 PM - 01:30 PM)',
    guests: '2 Guests',
    status: 'Confirmed' as Reservation['status'],
    specialRequests: '',
  });

  const filteredReservations = useMemo(() => {
    return reservations.filter((item) => {
      const matchesTab = activeTab === 'All' || item.status === activeTab;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.customerName.toLowerCase().includes(query) ||
        item.phone.includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.date.includes(query) ||
        (item.specialRequests && item.specialRequests.toLowerCase().includes(query));

      return matchesTab && matchesSearch;
    });
  }, [reservations, activeTab, searchQuery]);

  const handleCreateReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRes.customerName.trim() || !newRes.phone.trim()) {
      alert('Please provide customer name and phone number.');
      return;
    }

    addReservation(newRes);
    setIsAddModalOpen(false);
    // Reset form
    setNewRes({
      customerName: '',
      phone: '',
      email: '',
      date: new Date().toISOString().split('T')[0],
      timeSlot: 'Lunch (12:30 PM - 01:30 PM)',
      guests: '2 Guests',
      status: 'Confirmed',
      specialRequests: '',
    });
  };

  return (
    <div className="space-y-6 font-outfit">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-restaurant-green/10 border border-restaurant-green/20 text-xs font-bold text-restaurant-green mb-2">
            <CalendarCheck className="w-3.5 h-3.5 text-golden-yellow" />
            <span>Table Bookings & Enquiries</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-deep-green tracking-tight">
            Reservations Management
          </h1>
          <p className="text-xs sm:text-sm text-deep-green/70">
            View, approve, and track dining reservations for Poosaripatty Salem branch
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleManualRefresh}
            disabled={isRefreshing}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-2xl bg-cream hover:bg-cream/80 text-deep-green border border-deep-green/15 font-bold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer shrink-0 disabled:opacity-50"
            title="Refresh bookings from database"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-restaurant-green hover:bg-leaf-green text-warm-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer shrink-0 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>New Reservation</span>
          </button>
        </div>
      </div>

      {/* Metric Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {[
          { label: 'All Bookings', count: stats.total, value: 'All' as const, color: 'border-deep-green/20 text-deep-green' },
          { label: 'Pending', count: stats.pending, value: 'Pending' as const, color: 'border-amber-400 bg-amber-50/50 text-amber-800' },
          { label: 'Confirmed', count: stats.confirmed, value: 'Confirmed' as const, color: 'border-emerald-400 bg-emerald-50/50 text-emerald-800' },
          { label: 'Completed', count: stats.completed, value: 'Completed' as const, color: 'border-blue-400 bg-blue-50/50 text-blue-800' },
          { label: 'Cancelled', count: stats.cancelled, value: 'Cancelled' as const, color: 'border-red-300 bg-red-50/50 text-red-800' },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              activeTab === tab.value
                ? 'bg-warm-white shadow-md ring-2 ring-restaurant-green'
                : 'bg-warm-white/70 hover:bg-warm-white'
            }`}
          >
            <p className="text-[11px] font-bold uppercase tracking-wider text-deep-green/60">{tab.label}</p>
            <p className="text-xl font-black text-deep-green mt-0.5">{tab.count}</p>
          </button>
        ))}
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-warm-white rounded-3xl p-4 sm:p-5 border border-deep-green/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-deep-green/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, phone, date..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-xs sm:text-sm text-deep-green placeholder-deep-green/40 focus:outline-none focus:ring-2 focus:ring-restaurant-green"
          />
        </div>

        <div className="text-xs text-deep-green/60 self-start sm:self-center">
          Showing <span className="font-bold text-deep-green">{filteredReservations.length}</span> of{' '}
          <span className="font-bold text-deep-green">{reservations.length}</span> bookings
        </div>
      </div>

      {/* Reservations Table / Cards */}
      <div className="bg-warm-white rounded-3xl border border-deep-green/10 shadow-sm overflow-hidden">
        {filteredReservations.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-cream mx-auto flex items-center justify-center text-deep-green/40">
              <Calendar className="w-6 h-6" />
            </div>
            <p className="font-bold text-deep-green">No reservations found</p>
            <p className="text-xs text-deep-green/60 max-w-sm mx-auto">
              No bookings matched your filter criteria. Try adjusting the search query or active tab.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-deep-green/10 bg-cream/40 text-[11px] font-bold text-deep-green/60 uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Customer</th>
                  <th className="py-3.5 px-4">Contact</th>
                  <th className="py-3.5 px-4">Date & Slot</th>
                  <th className="py-3.5 px-4">Party Size</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Notes</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-deep-green/10 text-xs sm:text-sm">
                {filteredReservations.map((item) => (
                  <tr key={item.id} className="hover:bg-cream/30 transition-colors">
                    {/* Customer */}
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-bold text-deep-green">{item.customerName}</div>
                      <div className="text-[11px] text-deep-green/50">ID: {item.id}</div>
                    </td>

                    {/* Contact */}
                    <td className="py-4 px-4">
                      <div className="font-semibold text-deep-green flex items-center gap-1">
                        <Phone className="w-3 h-3 text-deep-green/40" />
                        <span>{item.phone}</span>
                      </div>
                      {item.email && (
                        <div className="text-[11px] text-deep-green/60 flex items-center gap-1 mt-0.5">
                          <Mail className="w-3 h-3 text-deep-green/40" />
                          <span>{item.email}</span>
                        </div>
                      )}
                    </td>

                    {/* Date & Slot */}
                    <td className="py-4 px-4">
                      <div className="font-bold text-deep-green flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-golden-yellow" />
                        <span>{item.date}</span>
                      </div>
                      <div className="text-[11px] text-deep-green/70 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-deep-green/40" />
                        <span>{item.timeSlot}</span>
                      </div>
                    </td>

                    {/* Guests */}
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-cream border border-deep-green/10 text-deep-green font-semibold text-xs">
                        <Users className="w-3 h-3 text-deep-green/50" />
                        {item.guests}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td className="py-4 px-4">
                      <select
                        value={item.status}
                        onChange={(e) => updateStatus(item.id, e.target.value as Reservation['status'])}
                        className={`text-xs font-bold px-2.5 py-1 rounded-xl border appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-restaurant-green ${
                          item.status === 'Confirmed'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : item.status === 'Pending'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : item.status === 'Completed'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : 'bg-red-50 text-red-800 border-red-200'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    {/* Special Requests */}
                    <td className="py-4 px-4 max-w-xs">
                      {item.specialRequests ? (
                        <p className="text-[11px] text-deep-green/70 italic line-clamp-2">
                          &ldquo;{item.specialRequests}&rdquo;
                        </p>
                      ) : (
                        <span className="text-[11px] text-deep-green/40">—</span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {item.status === 'Pending' && (
                          <button
                            onClick={() => updateStatus(item.id, 'Confirmed')}
                            className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                            title="Confirm Booking"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => {
                            if (confirm(`Delete reservation for ${item.customerName}?`)) {
                              deleteReservation(item.id);
                            }
                          }}
                          className="p-1.5 rounded-lg text-deep-green/40 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* New Reservation Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-green/40 backdrop-blur-xs">
          <div className="bg-warm-white rounded-3xl max-w-lg w-full p-6 sm:p-7 border border-deep-green/15 shadow-2xl space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-deep-green/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-restaurant-green text-warm-white flex items-center justify-center">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-lg text-deep-green">Add New Reservation</h3>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-lg text-deep-green/60 hover:bg-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateReservation} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                  Customer Name *
                </label>
                <input
                  type="text"
                  required
                  value={newRes.customerName}
                  onChange={(e) => setNewRes({ ...newRes, customerName: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newRes.phone}
                    onChange={(e) => setNewRes({ ...newRes, phone: e.target.value })}
                    placeholder="e.g. 98421 54321"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={newRes.email}
                    onChange={(e) => setNewRes({ ...newRes, email: e.target.value })}
                    placeholder="e.g. guest@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={newRes.date}
                    onChange={(e) => setNewRes({ ...newRes, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                  />
                </div>
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Time Slot
                  </label>
                  <select
                    value={newRes.timeSlot}
                    onChange={(e) => setNewRes({ ...newRes, timeSlot: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                  >
                    <option value="Breakfast (07:30 AM - 08:30 AM)">Breakfast (07:30 AM)</option>
                    <option value="Breakfast (08:30 AM - 09:30 AM)">Breakfast (08:30 AM)</option>
                    <option value="Lunch (12:30 PM - 01:30 PM)">Lunch (12:30 PM)</option>
                    <option value="Lunch (01:30 PM - 02:30 PM)">Lunch (01:30 PM)</option>
                    <option value="Dinner (07:30 PM - 08:30 PM)">Dinner (07:30 PM)</option>
                    <option value="Dinner (08:30 PM - 09:30 PM)">Dinner (08:30 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                    Guests
                  </label>
                  <select
                    value={newRes.guests}
                    onChange={(e) => setNewRes({ ...newRes, guests: e.target.value })}
                    className="w-full px-2.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5 Guests">5 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8+ Guests">8+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-deep-green uppercase tracking-wider text-[11px] mb-1">
                  Special Notes / Preferences
                </label>
                <textarea
                  rows={2}
                  value={newRes.specialRequests}
                  onChange={(e) => setNewRes({ ...newRes, specialRequests: e.target.value })}
                  placeholder="e.g. Window seating, high chair needed, etc."
                  className="w-full px-3.5 py-2 rounded-xl bg-cream/50 border border-deep-green/15 text-deep-green focus:outline-none focus:ring-2 focus:ring-restaurant-green text-xs"
                />
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
                  className="px-5 py-2 rounded-xl bg-restaurant-green text-warm-white font-bold text-xs hover:bg-leaf-green shadow-sm"
                >
                  Save Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
