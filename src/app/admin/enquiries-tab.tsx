
"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { mockEnquiries } from "@/lib/mock-data";
import type { Enquiry, EnquiryStatus } from "@/lib/types";
import { MoreHorizontal, ChevronLeft, ChevronRight, MessageSquare, Clock, CheckCircle, Mail } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const getBadgeVariant = (status: EnquiryStatus) => {
  switch (status) {
    case "Resolved":
      return "default";
    case "Open":
      return "secondary";
    case "Pending":
      return "outline";
    default:
      return "default";
  }
};

export default function EnquiriesTab() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>(mockEnquiries);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = itemsPerPage === -1 ? 1 : Math.ceil(enquiries.length / itemsPerPage);

  const currentEnquiries = useMemo(() => {
    if (itemsPerPage === -1) {
        return enquiries;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return enquiries.slice(startIndex, startIndex + itemsPerPage);
  }, [enquiries, currentPage, itemsPerPage]);

  const enquiryStats = useMemo(() => {
    return enquiries.reduce((acc, enquiry) => {
        if (enquiry.status === 'Open') acc.open++;
        if (enquiry.status === 'Resolved') acc.resolved++;
        if (enquiry.status === 'Pending') acc.pending++;
        return acc;
    }, { open: 0, resolved: 0, pending: 0 });
  }, [enquiries]);

  const handleStatusChange = (enquiryId: string, newStatus: EnquiryStatus) => {
    setEnquiries(
      enquiries.map((enquiry) =>
        enquiry.id === enquiryId ? { ...enquiry, status: newStatus } : enquiry
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Enquiries</CardTitle>
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{enquiries.length}</div>
                    <p className="text-xs text-muted-foreground">+2 this week</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Open Enquiries</CardTitle>
                    <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{enquiryStats.open}</div>
                    <p className="text-xs text-muted-foreground">Awaiting response</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Follow-up</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{enquiryStats.pending}</div>
                    <p className="text-xs text-muted-foreground">Needs further action</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{enquiryStats.resolved}</div>
                    <p className="text-xs text-muted-foreground">Closed issues</p>
                </CardContent>
            </Card>
        </div>
        
        {/* Enquiries Table */}
        <Card>
          <CardHeader>
            <CardTitle>Manage Enquiries</CardTitle>
            <CardDescription>View and respond to all customer enquiries.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentEnquiries.map((enquiry) => (
                  <TableRow key={enquiry.id}>
                    <TableCell>{enquiry.customerName}</TableCell>
                    <TableCell className="font-medium">{enquiry.subject}</TableCell>
                    <TableCell>{enquiry.date}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(enquiry.status)}>{enquiry.status}</Badge>
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
                            <DropdownMenuItem onClick={() => handleStatusChange(enquiry.id, "Open")}>Open</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusChange(enquiry.id, "Pending")}>Pending</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleStatusChange(enquiry.id, "Resolved")}>Resolved</DropdownMenuItem>
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
