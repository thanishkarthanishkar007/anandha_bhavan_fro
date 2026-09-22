export interface Reservation {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  guests: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  tableType?: string;
  specialRequests?: string;
  createdAt: string;
}

// Zero mock/dummy data - only actual website submissions are stored and displayed
export const INITIAL_RESERVATIONS: Reservation[] = [];
