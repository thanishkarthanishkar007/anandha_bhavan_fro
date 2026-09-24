'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Eye,
  FileEdit,
  Trash2,
  Ban,
  AlertTriangle,
  Clock,
  CheckCircle,
  RefreshCw,
  Search,
  Filter,
  Check,
  Mail,
  Phone,
  Calendar,
} from 'lucide-react';
import { API_BASE_URL } from '@/lib/api';

interface PrivacyRequest {
  _id: string;
  reference_id: string;
  request_type: string;
  request_title: string;
  name: string;
  email: string;
  phone: string;
  details: string;
  status: 'pending' | 'in_progress' | 'resolved' | 'rejected';
  resolution_notes?: string;
  created_at: string;
  resolved_at?: string;
}

export default function AdminPrivacyPage() {
  const [requests, setRequests] = useState<PrivacyRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'resolved'>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/privacy/requests`);
      if (res.ok) {
        const data = await res.json();
        setRequests(data.items || []);
      } else {
        setRequests([]);
      }
    } catch (err) {
      console.warn('Could not fetch privacy requests:', err);
      setRequests([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleUpdateStatus = async (
    id: string,
    newStatus: 'pending' | 'in_progress' | 'resolved'
  ) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`${API_BASE_URL}/api/privacy/requests/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          resolution_notes: `Marked as ${newStatus} by administrator on ${new Date().toLocaleDateString()}`,
        }),
      });
      if (res.ok) {
        setRequests((prev) =>
          prev.map((req) =>
            req._id === id ? { ...req, status: newStatus } : req
          )
        );
      }
    } catch (err) {
      console.warn('Error updating status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredRequests = requests.filter((req) => {
    const matchesSearch =
      req.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.phone.includes(searchQuery) ||
      (req.reference_id && req.reference_id.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (statusFilter === 'pending') {
      return req.status === 'pending' || req.status === 'in_progress';
    }
    if (statusFilter === 'resolved') {
      return req.status === 'resolved';
    }
    return true;
  });

  const pendingCount = requests.filter((r) => r.status === 'pending' || r.status === 'in_progress').length;
  const resolvedCount = requests.filter((r) => r.status === 'resolved').length;

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'view_data':
        return { label: 'View Data', icon: Eye, color: 'bg-blue-100 text-blue-800 border-blue-200' };
      case 'correct_data':
        return { label: 'Correction', icon: FileEdit, color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
      case 'request_erasure':
        return { label: 'Erasure', icon: Trash2, color: 'bg-rose-100 text-rose-800 border-rose-200' };
      case 'withdraw_consent':
        return { label: 'Withdraw Consent', icon: Ban, color: 'bg-amber-100 text-amber-800 border-amber-200' };
      case 'privacy_grievance':
        return { label: 'Grievance', icon: AlertTriangle, color: 'bg-purple-100 text-purple-800 border-purple-200' };
      default:
        return { label: type, icon: ShieldCheck, color: 'bg-gray-100 text-gray-800 border-gray-200' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-deep-green">
              DPDP Privacy Requests
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-restaurant-green/15 text-restaurant-green font-bold text-xs">
              Act 2023
            </span>
          </div>
          <p className="text-xs sm:text-sm text-deep-green/70 mt-1">
            Data Subject Access Requests (DSAR), Erasure, and Grievance redressal module.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchRequests}
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-warm-white border border-deep-green/15 hover:border-restaurant-green text-deep-green text-xs font-bold shadow-xs transition-colors self-start sm:self-center"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-warm-white border border-deep-green/10 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-deep-green/60 uppercase tracking-wider">
              Total Requests
            </span>
            <ShieldCheck className="w-5 h-5 text-deep-green/40" />
          </div>
          <span className="text-3xl font-extrabold text-deep-green mt-2 block">
            {requests.length}
          </span>
          <span className="text-[11px] text-deep-green/60 mt-1 block">
            Under 30-day statutory response timeline
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-warm-white border border-amber-200/60 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              Pending Action
            </span>
            <Clock className="w-5 h-5 text-amber-600" />
          </div>
          <span className="text-3xl font-extrabold text-amber-800 mt-2 block">
            {pendingCount}
          </span>
          <span className="text-[11px] text-amber-700/80 mt-1 block">
            Require DPO review or fulfillment
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-warm-white border border-emerald-200/60 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Resolved
            </span>
            <CheckCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-3xl font-extrabold text-emerald-800 mt-2 block">
            {resolvedCount}
          </span>
          <span className="text-[11px] text-emerald-700/80 mt-1 block">
            Successfully closed & logged
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-warm-white rounded-2xl p-4 border border-deep-green/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-deep-green/40" />
          <input
            type="text"
            placeholder="Search by name, phone, email, or ref ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-cream/40 border border-deep-green/15 focus:border-restaurant-green focus:outline-none text-xs text-deep-green"
          />
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              statusFilter === 'all'
                ? 'bg-deep-green text-warm-white'
                : 'bg-cream/60 text-deep-green/70 hover:bg-cream'
            }`}
          >
            All ({requests.length})
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('pending')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              statusFilter === 'pending'
                ? 'bg-amber-600 text-white'
                : 'bg-cream/60 text-deep-green/70 hover:bg-cream'
            }`}
          >
            Pending ({pendingCount})
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('resolved')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              statusFilter === 'resolved'
                ? 'bg-restaurant-green text-white'
                : 'bg-cream/60 text-deep-green/70 hover:bg-cream'
            }`}
          >
            Resolved ({resolvedCount})
          </button>
        </div>
      </div>

      {/* Requests List */}
      <div className="bg-warm-white rounded-3xl border border-deep-green/10 shadow-xs overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-xs text-deep-green/60">
            <RefreshCw className="w-6 h-6 animate-spin mx-auto text-restaurant-green mb-2" />
            Loading DPDP privacy requests from database...
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="p-12 text-center space-y-2">
            <ShieldCheck className="w-10 h-10 text-deep-green/30 mx-auto" />
            <h3 className="font-bold text-deep-green text-sm">No Privacy Requests Found</h3>
            <p className="text-xs text-deep-green/60 max-w-sm mx-auto">
              Any requests submitted by visitors via the Privacy Centre will appear here for review and resolution.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-deep-green/10">
            {filteredRequests.map((req) => {
              const badge = getTypeBadge(req.request_type);
              const IconComp = badge.icon;
              const isResolved = req.status === 'resolved';

              return (
                <div key={req._id} className="p-5 sm:p-6 hover:bg-cream/20 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left: Info */}
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-deep-green/10 text-deep-green">
                          {req.reference_id || 'DPDP-REF'}
                        </span>

                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md border text-xs font-bold ${badge.color}`}
                        >
                          <IconComp className="w-3.5 h-3.5" />
                          <span>{badge.label}</span>
                        </span>

                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                            isResolved
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {req.status === 'resolved' ? 'Resolved' : 'Pending Review'}
                        </span>
                      </div>

                      <div className="text-sm font-bold text-deep-green">
                        {req.name}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-deep-green/75">
                        <span className="inline-flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-restaurant-green" />
                          <a href={`tel:${req.phone}`} className="hover:underline">
                            {req.phone}
                          </a>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-restaurant-green" />
                          <a href={`mailto:${req.email}`} className="hover:underline">
                            {req.email}
                          </a>
                        </span>
                        <span className="inline-flex items-center gap-1 text-deep-green/50">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(req.created_at).toLocaleString()}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-cream/50 border border-deep-green/10 text-xs text-deep-green/85 leading-relaxed mt-2">
                        <strong className="block text-deep-green/60 text-[10px] uppercase font-bold tracking-wider mb-0.5">
                          Request Details:
                        </strong>
                        {req.details}
                      </div>

                      {req.resolution_notes && (
                        <div className="text-[11px] text-emerald-800 font-medium">
                          <strong>Resolution note:</strong> {req.resolution_notes}
                        </div>
                      )}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2 self-end lg:self-center shrink-0">
                      {!isResolved ? (
                        <button
                          type="button"
                          onClick={() => handleUpdateStatus(req._id, 'resolved')}
                          disabled={updatingId === req._id}
                          className="px-4 py-2 rounded-xl bg-restaurant-green hover:bg-leaf-green text-warm-white text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-50"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Mark Resolved</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleUpdateStatus(req._id, 'pending')}
                          disabled={updatingId === req._id}
                          className="px-3.5 py-2 rounded-xl border border-deep-green/20 hover:bg-cream text-deep-green text-xs font-semibold transition-colors disabled:opacity-50"
                        >
                          Reopen
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
