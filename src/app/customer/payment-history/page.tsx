
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const payments = [
    { id: "PAY-001", date: "2024-07-28", amount: "$25.00", method: "Visa **** 4242", status: "Paid", bookingId: "BK-1234" },
    { id: "PAY-002", date: "2024-07-20", amount: "$30.00", method: "Mastercard **** 5678", status: "Paid", bookingId: "BK-1201" },
    { id: "PAY-003", date: "2024-07-15", amount: "$22.50", method: "PayPal", status: "Paid", bookingId: "BK-1198" },
];

export default function CustomerPaymentHistoryPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold">Payment History</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Your Transactions</CardTitle>
                    <CardDescription>A record of all your payments.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Transaction ID</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Booking ID</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Payment Method</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {payments.map((payment) => (
                                <TableRow key={payment.id}>
                                    <TableCell className="font-medium">{payment.id}</TableCell>
                                    <TableCell>{payment.date}</TableCell>
                                    <TableCell>{payment.bookingId}</TableCell>
                                    <TableCell>{payment.amount}</TableCell>
                                    <TableCell>{payment.method}</TableCell>
                                    <TableCell>
                                        <Badge>{payment.status}</Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Invoice</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
