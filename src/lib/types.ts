
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
  zone: string;
  rating: number;
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

export type EnquiryStatus = "Open" | "Pending" | "Resolved";

export interface Enquiry {
  id: string;
  customerName: string;
  subject: string;
  status: EnquiryStatus;
  date: string;
}

export interface FaqItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export type NotificationStatus = "Sent" | "Scheduled" | "Draft";

export interface Notification {
    id: string;
    title: string;
    message: string;
    date: string;
    status: NotificationStatus;
    recipients: number;
}

export type CouponStatus = "Active" | "Inactive" | "Expired";

export interface Coupon {
    id: string;
    code: string;
    type: 'percentage' | 'fixed';
    value: number;
    startDate: string;
    endDate: string;
    usageLimit: number;
    redemptions: number;
    status: CouponStatus;
}

export type FenceStatus = "Active" | "Inactive";

export interface Fence {
    id: string;
    name: string;
    description: string;
    status: FenceStatus;
}
