
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockNotifications } from "@/lib/mock-data";
import type { Notification, NotificationStatus } from "@/lib/types";
import { Send, PlusCircle, Pencil, Trash2, Check, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const getBadgeVariant = (status: NotificationStatus) => {
  switch (status) {
    case "Sent":
      return "default";
    case "Scheduled":
      return "secondary";
    case "Draft":
      return "outline";
    default:
      return "default";
  }
};

export default function NotificationsTab() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingNotification, setEditingNotification] = useState<Notification | null>(null);

  const handleSaveNotification = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newNotificationData = {
      id: editingNotification?.id || `notif_${Date.now()}`,
      title: formData.get("title") as string,
      message: formData.get("message") as string,
      status: "Draft" as NotificationStatus,
      date: new Date().toISOString().split('T')[0],
      recipients: 0
    };

    if (editingNotification) {
      setNotifications(notifications.map((n) => (n.id === editingNotification.id ? {...n, ...newNotificationData, status: n.status} : n)));
    } else {
      setNotifications([newNotificationData, ...notifications]);
    }
    setIsDialogOpen(false);
    setEditingNotification(null);
  };
  
  const openEditDialog = (notification: Notification) => {
    setEditingNotification(notification);
    setIsDialogOpen(true);
  };
  
  const openAddDialog = () => {
    setEditingNotification(null);
    setIsDialogOpen(true);
  };

  const notificationStats = notifications.reduce((acc, n) => {
      acc.total++;
      if (n.status === 'Sent') acc.sent++;
      if (n.status === 'Scheduled') acc.scheduled++;
      return acc;
  }, { total: 0, sent: 0, scheduled: 0 });

  return (
    <div className="space-y-8">
       {/* Stat Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Notifications</CardTitle>
                    <Send className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{notificationStats.total}</div>
                    <p className="text-xs text-muted-foreground">sent, scheduled, and drafts</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sent</CardTitle>
                    <Check className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{notificationStats.sent}</div>
                    <p className="text-xs text-muted-foreground">successfully delivered</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{notificationStats.scheduled}</div>
                    <p className="text-xs text-muted-foreground">waiting to be sent</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Recipients</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{notifications.reduce((acc, n) => acc + n.recipients, 0).toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">across all sent notifications</p>
                </CardContent>
            </Card>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Compose Card */}
        <Card className="md:col-span-1 h-fit">
          <CardHeader>
            <CardTitle>Compose Notification</CardTitle>
            <CardDescription>Create and send a new push notification to users.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g., Special Offer!" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." />
              </div>
              <Button className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Notification
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* History Card */}
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>Notification History</CardTitle>
                <CardDescription>View and manage past and scheduled notifications.</CardDescription>
            </div>
             <Button onClick={openAddDialog}>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Draft
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {notifications.map((notification) => (
                  <TableRow key={notification.id}>
                    <TableCell className="font-medium">{notification.title}</TableCell>
                    <TableCell>{notification.date}</TableCell>
                    <TableCell>{notification.recipients.toLocaleString() || 'N/A'}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(notification.status)}>{notification.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => openEditDialog(notification)} disabled={notification.status === 'Sent'}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                       <Button variant="destructive" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingNotification ? "Edit Draft" : "Create New Draft"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveNotification} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title-dialog">Title</Label>
              <Input id="title-dialog" name="title" defaultValue={editingNotification?.title} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message-dialog">Message</Label>
              <Textarea id="message-dialog" name="message" defaultValue={editingNotification?.message} required />
            </div>
            <DialogFooter>
              <Button type="submit">Save Draft</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
