"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { mockBookings } from "@/lib/mock-data";
import type { Booking, BookingStatus } from "@/lib/types";

const getBadgeVariant = (status: BookingStatus) => {
  switch (status) {
    case "Completed":
      return "default";
    case "In-progress":
      return "secondary";
    case "Pending":
      return "outline";
    case "Cancelled":
      return "destructive";
    default:
      return "default";
  }
};

export default function BookingsTab() {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);

  const handleStatusChange = (bookingId: string, newStatus: BookingStatus) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Bookings</CardTitle>
        <CardDescription>View and update all customer bookings.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.pickupLocation}</TableCell>
                <TableCell>{booking.destination}</TableCell>
                <TableCell>
                  {booking.date} at {booking.time}
                </TableCell>
                <TableCell>
                  <Select
                    value={booking.status}
                    onValueChange={(value) => handleStatusChange(booking.id, value as BookingStatus)}
                  >
                    <SelectTrigger className="w-[150px]">
                      <SelectValue>
                         <Badge variant={getBadgeVariant(booking.status)}>{booking.status}</Badge>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="In-progress">In-progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
