export interface User {
  id: string;
  name: string;
  email: string;
  memberSince: string;
}

export type PorterStatus = "Available" | "On-duty" | "Unavailable";

export interface Porter {
  id: string;
  name: string;
  contact: string;
  status: PorterStatus;
}

export type BookingStatus = "Pending" | "In-progress" | "Completed" | "Cancelled";

export interface Booking {
  id: string;
  customerName: string;
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  status: BookingStatus;
  porterId?: string;
}
