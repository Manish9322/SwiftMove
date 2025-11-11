
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle, Star } from "lucide-react";
import Link from "next/link";
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

export default function CustomerDashboardPage() {
    const bookings = mockBookings.slice(0, 3); // Show a few recent bookings

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Bookings</h1>
                <Button asChild>
                    <Link href="/booking"><PlusCircle className="mr-2 h-4 w-4" /> New Booking</Link>
                </Button>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Here is a summary of your recent activity.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date & Time</TableHead>
                                <TableHead>Pickup</TableHead>
                                <TableHead>Destination</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {bookings.map((booking) => (
                                <TableRow key={booking.id}>
                                    <TableCell>{booking.date} at {booking.time}</TableCell>
                                    <TableCell>{booking.pickupLocation}</TableCell>
                                    <TableCell>{booking.destination}</TableCell>
                                    <TableCell>
                                        <Badge variant={getBadgeVariant(booking.status)}>{booking.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {booking.status === 'Completed' ? (
                                            <Button variant="outline" size="sm"><Star className="mr-2 h-4 w-4" /> Rate Service</Button>
                                        ) : (
                                             <Button variant="outline" size="sm">View Details</Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Account Overview</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total Bookings</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">12</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Member Since</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">2023</p>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    );
}
