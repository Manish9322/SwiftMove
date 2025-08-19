
"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { mockBookings } from "@/lib/mock-data";
import type { Booking, BookingStatus } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ListOrdered, CheckCircle, Clock, Ban, ChevronLeft, ChevronRight } from "lucide-react";

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

const ITEMS_PER_PAGE = 5;

export default function BookingsTab() {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE);

  const currentBookings = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return bookings.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [bookings, currentPage]);
  
  const bookingStats = useMemo(() => {
    return bookings.reduce((acc, booking) => {
        acc.total++;
        if(booking.status === 'Pending') acc.pending++;
        if(booking.status === 'Completed') acc.completed++;
        if(booking.status === 'In-progress') acc.inProgress++;
        return acc;
    }, { total: 0, pending: 0, completed: 0, inProgress: 0 });
  }, [bookings]);

  const handleStatusChange = (bookingId: string, newStatus: BookingStatus) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId ? { ...booking, status: newStatus } : booking
      )
    );
  };
  
  const handlePageChange = (direction: 'next' | 'prev') => {
      if (direction === 'next' && currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
      } else if (direction === 'prev' && currentPage > 1) {
          setCurrentPage(currentPage - 1);
      }
  };

  return (
    <div className="space-y-8">
        {/* Stat Cards */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                    <ListOrdered className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{bookingStats.total}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{bookingStats.pending}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">In-progress</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{bookingStats.inProgress}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed</CardTitle>
                    <Ban className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{bookingStats.completed}</div>
                </CardContent>
            </Card>
        </div>
        
        {/* Bookings Table */}
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
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.customerName}</TableCell>
                    <TableCell>{booking.pickupLocation}</TableCell>
                    <TableCell>{booking.destination}</TableCell>
                    <TableCell>
                      {booking.date} at {booking.time}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(booking.status)}>{booking.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                       <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                             <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleStatusChange(booking.id, "Pending")}>Pending</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusChange(booking.id, "In-progress")}>In-progress</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusChange(booking.id, "Completed")}>Completed</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusChange(booking.id, "Cancelled")}>Cancelled</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
           <div className="flex items-center justify-between p-4 border-t">
              <div className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange('prev')}
                  disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange('next')}
                  disabled={currentPage === totalPages}
                >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
        </Card>
    </div>
  );
}

    