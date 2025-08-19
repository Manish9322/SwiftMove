
"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { mockPorters } from "@/lib/mock-data";
import type { Porter, PorterStatus } from "@/lib/types";
import { Pencil, PlusCircle, Trash2, ChevronLeft, ChevronRight, Users, UserCheck, UserX } from "lucide-react";

const getBadgeVariant = (status: PorterStatus) => {
  switch (status) {
    case "Available":
      return "default";
    case "On-duty":
      return "secondary";
    case "Unavailable":
      return "destructive";
    default:
      return "default";
  }
};

export default function PortersTab() {
  const [porters, setPorters] = useState<Porter[]>(mockPorters);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPorter, setEditingPorter] = useState<Porter | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = itemsPerPage === -1 ? 1 : Math.ceil(porters.length / itemsPerPage);

  const currentPorters = useMemo(() => {
    if (itemsPerPage === -1) {
      return porters;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return porters.slice(startIndex, startIndex + itemsPerPage);
  }, [porters, currentPage, itemsPerPage]);

  const porterStats = useMemo(() => {
      return porters.reduce((acc, porter) => {
          if (porter.status === 'Available') acc.available++;
          if (porter.status === 'On-duty') acc.onDuty++;
          if (porter.status === 'Unavailable') acc.unavailable++;
          return acc;
      }, { available: 0, onDuty: 0, unavailable: 0 });
  }, [porters]);

  const handleSavePorter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPorterData = {
      id: editingPorter?.id || `ptr_${Date.now()}`,
      name: formData.get("name") as string,
      contact: formData.get("contact") as string,
      status: formData.get("status") as PorterStatus,
      zone: formData.get("zone") as string,
      rating: editingPorter?.rating || 0,
    };

    if (editingPorter) {
      setPorters(porters.map((p) => (p.id === editingPorter.id ? { ...editingPorter, ...newPorterData } : p)));
    } else {
      setPorters([...porters, { ...newPorterData, rating: 5.0, id: `ptr_${Date.now()}` }]);
    }
    setIsDialogOpen(false);
    setEditingPorter(null);
  };

  const handleDeletePorter = (id: string) => {
    setPorters(porters.filter((p) => p.id !== id));
  };
  
  const openEditDialog = (porter: Porter) => {
    setEditingPorter(porter);
    setIsDialogOpen(true);
  };
  
  const openAddDialog = () => {
    setEditingPorter(null);
    setIsDialogOpen(true);
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
                  <CardTitle className="text-sm font-medium">Total Porters</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{porters.length}</div>
                  <p className="text-xs text-muted-foreground">+5 from last month</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Available</CardTitle>
                  <UserCheck className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{porterStats.available}</div>
                  <p className="text-xs text-muted-foreground">Ready for assignments</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">On-duty</CardTitle>
                  <UserCheck className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{porterStats.onDuty}</div>
                  <p className="text-xs text-muted-foreground">Currently active</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unavailable</CardTitle>
                  <UserX className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{porterStats.unavailable}</div>
                  <p className="text-xs text-muted-foreground">Offline or on break</p>
              </CardContent>
          </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Manage Porters</CardTitle>
            <CardDescription>Add, edit, or remove porters from the system.</CardDescription>
          </div>
          <Button onClick={openAddDialog}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Porter
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Zone</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPorters.map((porter) => (
                <TableRow key={porter.id}>
                  <TableCell>{porter.name}</TableCell>
                  <TableCell>{porter.contact}</TableCell>
                  <TableCell>{porter.zone}</TableCell>
                  <TableCell>{porter.rating.toFixed(1)}</TableCell>
                  <TableCell><Badge variant={getBadgeVariant(porter.status)}>{porter.status}</Badge></TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="icon" onClick={() => openEditDialog(porter)}>
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => handleDeletePorter(porter.id)}>
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingPorter ? "Edit Porter" : "Add New Porter"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSavePorter} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" defaultValue={editingPorter?.name} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact</Label>
              <Input id="contact" name="contact" defaultValue={editingPorter?.contact} required />
            </div>
             <div className="space-y-2">
              <Label htmlFor="zone">Assigned Zone</Label>
              <Input id="zone" name="zone" defaultValue={editingPorter?.zone} placeholder="e.g., Terminal A" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
               <Select name="status" defaultValue={editingPorter?.status || 'Available'}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Available">Available</SelectItem>
                  <SelectItem value="On-duty">On-duty</SelectItem>
                  <SelectItem value="Unavailable">Unavailable</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
