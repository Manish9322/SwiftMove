
import type { User, Porter, Booking, Enquiry, FaqItem, Notification, Coupon, Fence } from './types';

export const mockUsers: User[] = [
  { id: 'usr_1', name: 'Alice Johnson', email: 'alice@example.com', memberSince: '2023-01-15' },
  { id: 'usr_2', name: 'Bob Williams', email: 'bob@example.com', memberSince: '2023-02-20' },
  { id: 'usr_3', name: 'Charlie Brown', email: 'charlie@example.com', memberSince: '2023-03-10' },
  { id: 'usr_4', name: 'Diana Miller', email: 'diana@example.com', memberSince: '2023-04-05' },
  { id: 'usr_5', name: 'Ethan Hunt', email: 'ethan@example.com', memberSince: '2024-07-01' },
  { id: 'usr_6', name: 'Fiona Glenanne', email: 'fiona@example.com', memberSince: '2024-07-05' },
  { id: 'usr_7', name: 'George Costanza', email: 'george@example.com', memberSince: '2024-07-10' },
  { id: 'usr_8', name: 'Hannah Montana', email: 'hannah@example.com', memberSince: '2024-07-12' },
  { id: 'usr_9', name: 'Indiana Jones', email: 'indy@example.com', memberSince: '2024-07-15' },
  { id: 'usr_10', name: 'Jack Sparrow', email: 'jack@example.com', memberSince: '2024-07-18' },
  { id: 'usr_11', name: 'Kara Thrace', email: 'kara@example.com', memberSince: '2024-07-20' },
];

export const mockPorters: Porter[] = [
  { id: 'ptr_1', name: 'Mike Ross', contact: '+1234567890', status: 'Available', zone: 'Terminal A', rating: 4.8 },
  { id: 'ptr_2', name: 'Harvey Specter', contact: '+1987654321', status: 'On-duty', zone: 'Terminal B', rating: 4.9 },
  { id: 'ptr_3', name: 'Jessica Pearson', contact: '+1122334455', status: 'Unavailable', zone: 'Terminal C', rating: 4.7 },
  { id: 'ptr_4', name: 'Louis Litt', contact: '+1554433221', status: 'Available', zone: 'Terminal A', rating: 4.5 },
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

export const mockEnquiries: Enquiry[] = [
    { id: 'enq_1', customerName: 'Grace Lee', subject: 'Question about bulk booking', status: 'Open', date: '2024-07-28' },
    { id: 'enq_2', customerName: 'Henry Wilson', subject: 'Issue with payment', status: 'Resolved', date: '2024-07-27' },
    { id: 'enq_3', customerName: 'Ivy Clark', subject: 'Partnership opportunity', status: 'Pending', date: '2024-07-29' },
    { id: 'enq_4', customerName: 'Jack Turner', subject: 'Feedback on service', status: 'Resolved', date: '2024-07-26' },
];

export const mockFaqs: FaqItem[] = [
    { id: 'faq_1', question: 'What if my flight is delayed?', answer: "We monitor flight schedules and will adjust your porter's arrival time accordingly. No extra charges for flight delays.", category: 'Bookings' },
    { id: 'faq_2', question: 'Is my luggage insured?', answer: 'Absolutely. We provide complimentary insurance coverage for your belongings while they are in our care for your complete peace of mind.', category: 'Safety' },
    { id: 'faq_3', question: 'How do I identify my porter?', answer: "You will receive your porter's photo, name, and contact details in your booking confirmation. They will also be wearing a SwiftMove uniform.", category: 'Service' },
    { id: 'faq_4', question: 'What is your cancellation policy?', answer: 'We offer a flexible cancellation policy. You can cancel for a full refund up to 24 hours before your scheduled service time.', category: 'Bookings' },
];

export const mockNotifications: Notification[] = [
    { id: 'notif_1', title: 'Summer Discount!', message: 'Get 20% off all bookings this summer. Use code SUMMER20.', date: '2024-07-20', status: 'Sent', recipients: 1250 },
    { id: 'notif_2', title: 'New Service Area: LAX', message: 'We are now live at Los Angeles International Airport!', date: '2024-07-15', status: 'Sent', recipients: 8500 },
    { id: 'notif_3', title: 'Scheduled Maintenance', message: 'The app will be down for maintenance on July 30th from 2-3 AM EST.', date: '2024-07-25', status: 'Scheduled', recipients: 0 },
];

export const mockCoupons: Coupon[] = [
    { id: 'cpn_1', code: 'SUMMER20', type: 'percentage', value: 20, startDate: '2024-06-01', endDate: '2024-08-31', usageLimit: 1000, redemptions: 452, status: 'Active' },
    { id: 'cpn_2', code: 'WELCOME10', type: 'fixed', value: 10, startDate: '2024-01-01', endDate: '2024-12-31', usageLimit: 5000, redemptions: 1234, status: 'Active' },
    { id: 'cpn_3', code: 'FIRST5', type: 'fixed', value: 5, startDate: '2024-01-01', endDate: '2024-12-31', usageLimit: 100, redemptions: 100, status: 'Expired' },
    { id: 'cpn_4', code: 'BIZTRIP', type: 'percentage', value: 15, startDate: '2024-05-01', endDate: '2024-12-31', usageLimit: 200, redemptions: 34, status: 'Inactive' },
];

export const mockFences: Fence[] = [
    { id: 'fnc_1', name: 'Downtown Core', description: 'Central business district and surrounding areas.', status: 'Active' },
    { id: 'fnc_2', name: 'Airport Zone', description: 'JFK International Airport and nearby hotels.', status: 'Active' },
    { id: 'fnc_3', name: 'North Suburbs', description: 'Residential areas in the northern part of the city.', status: 'Inactive' },
    { id: 'fnc_4', name: 'Convention Center Area', description: 'The main convention center and entertainment complex.', status: 'Active' },
];
