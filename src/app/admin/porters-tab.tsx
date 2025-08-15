"use client";

import { useState } from "react";
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

  const handleSavePorter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newPorter = {
      id: editingPorter?.id || `ptr_${Date.now()}`,
      name: formData.get("name") as string,
      contact: formData.get("contact") as string,
      status: formData.get("status") as PorterStatus,
    };

    if (editingPorter) {
      setPorters(porters.map((p) => (p.id === editingPorter.id ? newPorter : p)));
    } else {
      setPorters([...porters, newPorter]);
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

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Manage Porters</CardTitle>
          <CardDescription>Add, edit, or remove porters from the system.</CardDescription>
        </div>
        <Button onClick={openAddDialog}>Add Porter</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {porters.map((porter) => (
              <TableRow key={porter.id}>
                <TableCell>{porter.name}</TableCell>
                <TableCell>{porter.contact}</TableCell>
                <TableCell><Badge variant={getBadgeVariant(porter.status)}>{porter.status}</Badge></TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" onClick={() => openEditDialog(porter)}>Edit</Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDeletePorter(porter.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

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
    </Card>
  );
}
