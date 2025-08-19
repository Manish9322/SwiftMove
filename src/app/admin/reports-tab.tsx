
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ListOrdered, Users, Truck, BadgePercent, TrendingUp, Ban, Eye, Download, Search, Filter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const reports = [
    {
        title: "Bookings Report",
        description: "Detailed analysis of all bookings, including status, locations, and timings.",
        icon: <ListOrdered className="h-8 w-8 text-primary" />,
        data: [
            { id: "BK001", customer: "John Doe", date: "2023-10-26", status: "Completed", amount: "$50.00" },
            { id: "BK002", customer: "Jane Smith", date: "2023-10-25", status: "Completed", amount: "$75.00" },
        ]
    },
    {
        title: "User Demographics",
        description: "Insights into user registration trends and geographic distribution.",
        icon: <Users className="h-8 w-8 text-primary" />,
        data: [
            { id: "USR001", name: "John Doe", email: "john@example.com", joined: "2023-01-15", country: "USA" },
            { id: "USR002", name: "Jane Smith", email: "jane@example.com", joined: "2023-02-20", country: "Canada" },
        ]
    },
    {
        title: "Porter Performance",
        description: "Track porter ratings, availability, and job completion rates.",
        icon: <Truck className="h-8 w-8 text-primary" />,
        data: [
            { id: "PTR001", name: "Mike Ross", rating: "4.8/5", jobs: 25, status: "Available" },
            { id: "PTR002", name: "Harvey Specter", rating: "4.9/5", jobs: 30, status: "On-duty" },
        ]
    },
    {
        title: "Offer Success & Impact",
        description: "Analyze coupon redemption rates and their impact on sales.",
        icon: <BadgePercent className="h-8 w-8 text-primary" />,
        data: [
            { code: "SUMMER20", redeemed: 150, total_used: 200, impact: "+5% sales" },
            { code: "WINTER10", redeemed: 100, total_used: 150, impact: "+3% sales" },
        ]
    },
    {
        title: "Revenue Analytics",
        description: "Breakdown of revenue by period, service type, and location.",
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        data: [
            { month: "October", revenue: "$15,000", transactions: 300 },
            { month: "September", revenue: "$12,500", transactions: 250 },
        ]
    },
    {
        title: "Cancellation Analysis",
        description: "Understand the common reasons for booking cancellations.",
        icon: <Ban className="h-8 w-8 text-primary" />,
        data: [
            { reason: "Change of plans", count: 50, percentage: "45%" },
            { reason: "Flight delay", count: 30, percentage: "27%" },
        ]
    }
];

export default function ReportsTab() {
  const [selectedReport, setSelectedReport] = useState<any>(null);

  return (
    <div className="space-y-8">
        <Card>
            <CardHeader>
                <CardTitle>Generate & View Reports</CardTitle>
                <CardDescription>Access detailed reports to gain insights into your business operations and performance.</CardDescription>
            </CardHeader>
        </Card>
      
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reports.map((report, index) => (
                <Card key={index} className="flex flex-col">
                    <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                        <div className="p-2 bg-primary/10 rounded-md">{report.icon}</div>
                        <div className="flex-1">
                            <CardTitle>{report.title}</CardTitle>
                            <CardDescription className="mt-1">{report.description}</CardDescription>
                        </div>
                    </CardHeader>
                    <CardFooter className="mt-auto flex items-center gap-2 pt-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="w-full" variant="outline" onClick={() => setSelectedReport(report)}>
                                    <Eye className="mr-2 h-4 w-4" />
                                    View
                                </Button>
                            </DialogTrigger>
                        </Dialog>
                         <Button className="w-full">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>

        <Dialog open={!!selectedReport} onOpenChange={(isOpen) => !isOpen && setSelectedReport(null)}>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle>{selectedReport?.title}</DialogTitle>
                    <DialogDescription>
                       View and filter the data for the {selectedReport?.title.toLowerCase()}.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search..." className="pl-9" />
                        </div>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Date Range
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar mode="range" />
                            </PopoverContent>
                        </Popover>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    {selectedReport && Object.keys(selectedReport.data[0]).map((key) => (
                                        <TableHead key={key} className="capitalize">{key}</TableHead>
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {selectedReport?.data.map((row: any, rowIndex: number) => (
                                    <TableRow key={rowIndex}>
                                        {Object.values(row).map((value: any, cellIndex: number) => (
                                            <TableCell key={cellIndex}>
                                                {typeof value === 'string' && value.startsWith('$') ? <Badge variant="secondary">{value}</Badge> : value}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setSelectedReport(null)}>Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  );
}
