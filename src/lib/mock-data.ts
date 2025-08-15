import type { User, Porter, Booking } from './types';

export const mockUsers: User[] = [
  { id: 'usr_1', name: 'Alice Johnson', email: 'alice@example.com', memberSince: '2023-01-15' },
  { id: 'usr_2', name: 'Bob Williams', email: 'bob@example.com', memberSince: '2023-02-20' },
  { id: 'usr_3', name: 'Charlie Brown', email: 'charlie@example.com', memberSince: '2023-03-10' },
  { id: 'usr_4', name: 'Diana Miller', email: 'diana@example.com', memberSince: '2023-04-05' },
];

export const mockPorters: Porter[] = [
  { id: 'ptr_1', name: 'Mike Ross', contact: '+1234567890', status: 'Available' },
  { id: 'ptr_2', name: 'Harvey Specter', contact: '+1987654321', status: 'On-duty' },
  { id: 'ptr_3', name: 'Jessica Pearson', contact: '+1122334455', status: 'Unavailable' },
  { id: 'ptr_4', name: 'Louis Litt', contact: '+1554433221', status: 'Available' },
];

export const mockBookings: Booking[] = [
  {
    id: 'bk_1',
    customerName: 'Alice Johnson',
    pickupLocation: 'Terminal 1, Gate A5',
    destination: 'Hotel Shuttle Area',
    date: '2024-08-15',
    time: '14:30',
    status: 'Completed',
    porterId: 'ptr_1',
  },
  {
    id: 'bk_2',
    customerName: 'Bob Williams',
    pickupLocation: 'Baggage Claim 3',
    destination: 'Rental Car Center',
    date: '2024-08-20',
    time: '10:00',
    status: 'In-progress',
    porterId: 'ptr_2',
  },
  {
    id: 'bk_3',
    customerName: 'Charlie Brown',
    pickupLocation: 'International Arrivals',
    destination: 'Taxi Stand',
    date: '2024-08-22',
    time: '18:45',
    status: 'Pending',
  },
    {
    id: 'bk_4',
    customerName: 'Diana Miller',
    pickupLocation: 'Domestic Departures',
    destination: 'Airport Lounge',
    date: '2024-08-25',
    time: '09:15',
    status: 'Cancelled',
  },
];
