
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { mockBookings } from "@/lib/mock-data";
import type { Booking, BookingStatus } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, ListOrdered, CheckCircle, Clock, Ban, ChevronLeft, ChevronRight, TrendingUp, DollarSign } from "lucide-react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = itemsPerPage === -1 ? 1 : Math.ceil(bookings.length / itemsPerPage);

  const currentBookings = useMemo(() => {
    if (itemsPerPage === -1) {
        return bookings;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return bookings.slice(startIndex, startIndex + itemsPerPage);
  }, [bookings, currentPage, itemsPerPage]);
  
  const bookingStats = useMemo(() => {
    return bookings.reduce((acc, booking) => {
        acc.total++;
        if(booking.status === 'Pending') acc.pending++;
        if(booking.status === 'Completed') acc.completed++;
        if(booking.status === 'In-progress') acc.inProgress++;
        if(booking.status === 'Cancelled') acc.cancelled++;
        return acc;
    }, { total: 0, pending: 0, completed: 0, inProgress: 0, cancelled: 0 });
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
  
  const handleItemsPerPageChange = (value: string) => {
      const numValue = value === "all" ? -1 : parseInt(value, 10);
      setItemsPerPage(numValue);
      setCurrentPage(1); 
  };

  return (
    <div className="space-y-8">
        {/* Stat Cards */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                    <ListOrdered className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{bookingStats.total}</div>
                     <p className="text-xs text-muted-foreground">+10.5% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{bookingStats.inProgress}</div>
                     <p className="text-xs text-muted-foreground">+5 since last hour</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
                    <Ban className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{bookingStats.cancelled}</div>
                    <p className="text-xs text-muted-foreground">+2 since yesterday</p>
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
               <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Rows per page</span>
                    <Select value={itemsPerPage === -1 ? "all" : itemsPerPage.toString()} onValueChange={handleItemsPerPageChange}>
                        <SelectTrigger className="w-20">
                            <SelectValue placeholder={itemsPerPage} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                            <SelectItem value="100">100</SelectItem>
                            <SelectItem value="all">All</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange('prev')}
                  disabled={currentPage === 1}
                  className="h-8 w-8"
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Previous</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange('next')}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8"
                >
                    <ChevronRight className="h-4 w-4" />
                     <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
        </Card>
    </div>
  );
}
