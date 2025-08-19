"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { mockCoupons } from "@/lib/mock-data";
import type { Coupon, CouponStatus } from "@/lib/types";
import { Pencil, PlusCircle, Trash2, ChevronLeft, ChevronRight, BadgePercent, Tag, DollarSign, BarChart2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const getBadgeVariant = (status: CouponStatus) => {
  switch (status) {
    case "Active":
      return "default";
    case "Inactive":
      return "secondary";
    case "Expired":
      return "outline";
    default:
      return "default";
  }
};

export default function OffersTab() {
  const [coupons, setCoupons] = useState<Coupon[]>(mockCoupons);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = itemsPerPage === -1 ? 1 : Math.ceil(coupons.length / itemsPerPage);

  const currentCoupons = useMemo(() => {
    if (itemsPerPage === -1) {
      return coupons;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return coupons.slice(startIndex, startIndex + itemsPerPage);
  }, [coupons, currentPage, itemsPerPage]);

  const couponStats = useMemo(() => {
    return coupons.reduce((acc, coupon) => {
        acc.total++;
        if (coupon.status === 'Active') acc.active++;
        if (coupon.status === 'Inactive') acc.inactive++;
        acc.totalRedeemed += coupon.redemptions;
        return acc;
    }, { total: 0, active: 0, inactive: 0, totalRedeemed: 0 });
  }, [coupons]);

  const handleSaveCoupon = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Dates are tricky with forms, need to handle them from the state of the component
    const startDate = editingCoupon?.startDate ? new Date(editingCoupon.startDate) : new Date();
    const endDate = editingCoupon?.endDate ? new Date(editingCoupon.endDate) : new Date();
    
    const newCouponData: Coupon = {
      id: editingCoupon?.id || `coupon_${Date.now()}`,
      code: formData.get("code") as string,
      type: formData.get("type") as 'percentage' | 'fixed',
      value: parseFloat(formData.get("value") as string),
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      status: formData.get("status") as CouponStatus,
      usageLimit: parseInt(formData.get("usageLimit") as string, 10),
      redemptions: editingCoupon?.redemptions || 0,
    };

    if (editingCoupon) {
      setCoupons(coupons.map((c) => (c.id === editingCoupon.id ? newCouponData : c)));
    } else {
      setCoupons([newCouponData, ...coupons]);
    }
    setIsDialogOpen(false);
    setEditingCoupon(null);
  };
  
  const openEditDialog = (coupon: Coupon) => {
    setEditingCoupon(coupon);
    setIsDialogOpen(true);
  };
  
  const openAddDialog = () => {
    setEditingCoupon(null);
    setIsDialogOpen(true);
  };

  const handleDeleteCoupon = (id: string) => {
    setCoupons(coupons.filter(c => c.id !== id));
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
                <CardTitle className="text-sm font-medium">Total Coupons</CardTitle>
                <Tag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{couponStats.total}</div>
                <p className="text-xs text-muted-foreground">Active and inactive</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Coupons</CardTitle>
                <BadgePercent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{couponStats.active}</div>
                <p className="text-xs text-muted-foreground">Currently available for use</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Redemptions</CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{couponStats.totalRedeemed.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Across all coupons</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">$1,234.56</div>
                <p className="text-xs text-muted-foreground">Estimated customer savings</p>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Manage Coupons</CardTitle>
            <CardDescription>Create, edit, and manage promotional offers.</CardDescription>
          </div>
          <Button onClick={openAddDialog}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Coupon
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Expires On</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCoupons.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell className="font-medium">{coupon.code}</TableCell>
                  <TableCell className="capitalize">{coupon.type}</TableCell>
                  <TableCell>{coupon.type === 'percentage' ? `${coupon.value}%` : `$${coupon.value.toFixed(2)}`}</TableCell>
                  <TableCell>{coupon.redemptions} / {coupon.usageLimit}</TableCell>
                  <TableCell>{format(new Date(coupon.endDate), "PPP")}</TableCell>
                  <TableCell><Badge variant={getBadgeVariant(coupon.status)}>{coupon.status}</Badge></TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="outline" size="icon" onClick={() => openEditDialog(coupon)}>
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                    <Button variant="destructive" size="icon" onClick={() => handleDeleteCoupon(coupon.id)}>
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

      <Dialog open={isDialogOpen} onOpenChange={(isOpen) => { setIsDialogOpen(isOpen); if (!isOpen) setEditingCoupon(null); }}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>{editingCoupon ? "Edit Coupon" : "Add New Coupon"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveCoupon} className="space-y-4 pt-4">
            <div className="space-y-2">
                <Label htmlFor="code">Coupon Code</Label>
                <Input id="code" name="code" defaultValue={editingCoupon?.code} placeholder="e.g., SUMMER20" required />
            </div>
             <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Select name="type" defaultValue={editingCoupon?.type || 'percentage'}>
                        <SelectTrigger id="type"><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="percentage">Percentage</SelectItem>
                            <SelectItem value="fixed">Fixed Amount</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="value">Value</Label>
                    <Input id="value" name="value" type="number" step="0.01" defaultValue={editingCoupon?.value} placeholder="e.g., 20 or 15.50" required />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Start Date</Label>
                     <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start font-normal">
                                {editingCoupon?.startDate ? format(new Date(editingCoupon.startDate), "PPP") : "Select date"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={editingCoupon?.startDate ? new Date(editingCoupon.startDate) : undefined} onSelect={(date) => setEditingCoupon(prev => ({...prev, startDate: date?.toISOString().split('T')[0]} as Coupon))} initialFocus />
                        </PopoverContent>
                    </Popover>
                </div>
                 <div className="space-y-2">
                    <Label>End Date</Label>
                     <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start font-normal">
                                {editingCoupon?.endDate ? format(new Date(editingCoupon.endDate), "PPP") : "Select date"}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                             <Calendar mode="single" selected={editingCoupon?.endDate ? new Date(editingCoupon.endDate) : undefined} onSelect={(date) => setEditingCoupon(prev => ({...prev, endDate: date?.toISOString().split('T')[0]} as Coupon))} initialFocus />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
             <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="usageLimit">Usage Limit</Label>
                    <Input id="usageLimit" name="usageLimit" type="number" defaultValue={editingCoupon?.usageLimit || 100} required />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select name="status" defaultValue={editingCoupon?.status || 'Active'}>
                        <SelectTrigger id="status"><SelectValue placeholder="Select status" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Coupon</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
