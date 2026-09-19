export interface Reservation {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  guests: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  specialRequests?: string;
  createdAt: string;
}

export const INITIAL_RESERVATIONS: Reservation[] = [
  {
    id: 'RES-1001',
    customerName: 'Karthik Raja',
    phone: '98421 54321',
    email: 'karthik.raja@example.com',
    date: '2026-09-18',
    timeSlot: 'Lunch (12:30 PM - 01:30 PM)',
    guests: '4 Guests',
    status: 'Confirmed',
    specialRequests: 'Window table preferred, authentic filter coffee after meal.',
    createdAt: '2026-09-18 09:30 AM',
  },
  {
    id: 'RES-1002',
    customerName: 'Dr. Meenakshi Sundaram',
    phone: '94432 11980',
    email: 'meenakshi.s@salemmed.org',
    date: '2026-09-18',
    timeSlot: 'Dinner (07:30 PM - 08:30 PM)',
    guests: '6 Guests',
    status: 'Pending',
    specialRequests: 'Family gathering. Extra ghee roast and paneer butter masala.',
    createdAt: '2026-09-18 10:15 AM',
  },
  {
    id: 'RES-1003',
    customerName: 'Venkatesh Babu',
    phone: '88701 92834',
    email: 'venkat.babu@gmail.com',
    date: '2026-09-18',
    timeSlot: 'Lunch (01:00 PM - 02:00 PM)',
    guests: '2 Guests',
    status: 'Confirmed',
    specialRequests: 'Special South Indian Meals.',
    createdAt: '2026-09-18 11:00 AM',
  },
  {
    id: 'RES-1004',
    customerName: 'Priya Dharshini',
    phone: '97890 12345',
    email: 'priya.dh@techcorp.in',
    date: '2026-09-19',
    timeSlot: 'Breakfast (08:30 AM - 09:30 AM)',
    guests: '3 Guests',
    status: 'Pending',
    specialRequests: 'Ghee Podi Idli and Medu Vada.',
    createdAt: '2026-09-18 11:35 AM',
  },
  {
    id: 'RES-1005',
    customerName: 'Senthil Kumar',
    phone: '98430 77651',
    email: 'senthil.k@omaluur.com',
    date: '2026-09-17',
    timeSlot: 'Dinner (08:00 PM - 09:00 PM)',
    guests: '5 Guests',
    status: 'Completed',
    specialRequests: 'Highway traveler family dinner.',
    createdAt: '2026-09-17 06:20 PM',
  },
  {
    id: 'RES-1006',
    customerName: 'Anand Natarajan',
    phone: '94882 34567',
    email: 'anand.n@bangalore.co',
    date: '2026-09-17',
    timeSlot: 'Lunch (12:00 PM - 01:00 PM)',
    guests: '8 Guests',
    status: 'Completed',
    specialRequests: 'Highway tour group halt.',
    createdAt: '2026-09-17 10:00 AM',
  },
];
