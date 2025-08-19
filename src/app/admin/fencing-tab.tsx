
"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { mockFences } from "@/lib/mock-data";
import type { Fence, FenceStatus } from "@/lib/types";
import { Pencil, PlusCircle, Trash2, ChevronLeft, ChevronRight, Shapes, CheckCircle, XCircle } from "lucide-react";

const getBadgeVariant = (status: FenceStatus) => {
  switch (status) {
    case "Active":
      return "default";
    case "Inactive":
      return "secondary";
    default:
      return "default";
  }
};

export default function FencingTab() {
  const [fences, setFences] = useState<Fence[]>(mockFences);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFence, setEditingFence] = useState<Fence | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = itemsPerPage === -1 ? 1 : Math.ceil(fences.length / itemsPerPage);

  const currentFences = useMemo(() => {
    if (itemsPerPage === -1) {
      return fences;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return fences.slice(startIndex, startIndex + itemsPerPage);
  }, [fences, currentPage, itemsPerPage]);
  
  const fenceStats = useMemo(() => {
    return fences.reduce((acc, fence) => {
        acc.total++;
        if(fence.status === 'Active') acc.active++;
        if(fence.status === 'Inactive') acc.inactive++;
        return acc;
    }, { total: 0, active: 0, inactive: 0 });
  }, [fences]);

  const handleSaveFence = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newFenceData: Fence = {
      id: editingFence?.id || `fnc_${Date.now()}`,
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      status: formData.get("status") as FenceStatus,
    };

    if (editingFence) {
      setFences(fences.map((f) => (f.id === editingFence.id ? newFenceData : f)));
    } else {
      setFences([newFenceData, ...fences]);
    }
    setIsDialogOpen(false);
    setEditingFence(null);
  };

  const handleDeleteFence = (id: string) => {
    setFences(fences.filter((f) => f.id !== id));
  };
  
  const openEditDialog = (fence: Fence) => {
    setEditingFence(fence);
    setIsDialogOpen(true);
  };
  
  const openAddDialog = () => {
    setEditingFence(null);
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
                    <CardTitle className="text-sm font-medium">Total Zones</CardTitle>
                    <Shapes className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{fenceStats.total}</div>
                    <p className="text-xs text-muted-foreground">Defined operational areas</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Zones</CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{fenceStats.active}</div>
                    <p className="text-xs text-muted-foreground">Currently operational</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Inactive Zones</CardTitle>
                    <XCircle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{fenceStats.inactive}</div>
                    <p className="text-xs text-muted-foreground">Temporarily disabled</p>
                </CardContent>
            </Card>
        </div>
        
        {/* Fences Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>Manage Geofences</CardTitle>
                <CardDescription>Define and manage operational zones for your porters.</CardDescription>
            </div>
             <Button onClick={openAddDialog}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Zone
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Zone Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentFences.map((fence) => (
                  <TableRow key={fence.id}>
                    <TableCell className="font-medium">{fence.name}</TableCell>
                    <TableCell>{fence.description}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(fence.status)}>{fence.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                        <Button variant="outline" size="icon" onClick={() => openEditDialog(fence)}>
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="destructive" size="icon" onClick={() => handleDeleteFence(fence.id)}>
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

        <Dialog open={isDialogOpen} onOpenChange={(isOpen) => { setIsDialogOpen(isOpen); if (!isOpen) setEditingFence(null); }}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{editingFence ? "Edit Zone" : "Add New Zone"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSaveFence} className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Zone Name</Label>
                        <Input id="name" name="name" defaultValue={editingFence?.name} placeholder="e.g., Downtown Core" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" name="description" defaultValue={editingFence?.description} placeholder="Describe the area this zone covers..." required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select name="status" defaultValue={editingFence?.status || 'Active'}>
                            <SelectTrigger id="status"><SelectValue placeholder="Select status" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Inactive">Inactive</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save Zone</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  );
}
