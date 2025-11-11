
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Check, X, MapPin, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const activeOrders = [
    { id: "BK-1245", pickup: "Terminal 4", destination: "Rideshare Pickup Zone A", status: "In-progress" },
];

const completedOrders = [
    { id: "BK-1240", pickup: "Terminal 1", destination: "Baggage Claim 3", status: "Completed" },
    { id: "BK-1235", pickup: "International Arrivals", destination: "Parking Garage B", status: "Completed" },
];

const cancelledOrders = [
     { id: "BK-1221", pickup: "Terminal 3", destination: "Rental Car Center", status: "Cancelled" },
]

export default function AgentOrdersPage() {
  return (
    <div className="space-y-4">
        <h1 className="text-2xl font-bold">My Orders</h1>
        <Tabs defaultValue="active" className="w-full">
            <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
                <Card>
                    <CardHeader>
                        <CardTitle>Active Orders</CardTitle>
                        <CardDescription>Your current and ongoing jobs.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {activeOrders.map(order => (
                            <Card key={order.id} className="mb-4">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="flex items-center gap-2"><Package className="h-5 w-5 text-primary" />{order.id}</CardTitle>
                                            <Badge className="mt-2">In-progress</Badge>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline">Mark as Completed</Button>
                                            <Button variant="destructive">Cancel Order</Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <MapPin className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm font-medium">Pickup</p>
                                            <p className="text-muted-foreground">{order.pickup}</p>
                                        </div>
                                    </div>
                                     <div className="flex items-center gap-4">
                                        <MapPin className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm font-medium">Destination</p>
                                            <p className="text-muted-foreground">{order.destination}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="completed">
                <Card>
                    <CardHeader>
                        <CardTitle>Completed Orders</CardTitle>
                        <CardDescription>Your past completed jobs.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Pickup</TableHead>
                                    <TableHead>Destination</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {completedOrders.map(order => (
                                    <TableRow key={order.id}>
                                        <TableCell>{order.id}</TableCell>
                                        <TableCell>{order.pickup}</TableCell>
                                        <TableCell>{order.destination}</TableCell>
                                        <TableCell><Badge variant="default"><Check className="mr-1 h-3 w-3" />Completed</Badge></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="cancelled">
                 <Card>
                    <CardHeader>
                        <CardTitle>Cancelled Orders</CardTitle>
                        <CardDescription>Orders that were cancelled.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Pickup</TableHead>
                                    <TableHead>Destination</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cancelledOrders.map(order => (
                                    <TableRow key={order.id}>
                                        <TableCell>{order.id}</TableCell>
                                        <TableCell>{order.pickup}</TableCell>
                                        <TableCell>{order.destination}</TableCell>
                                        <TableCell><Badge variant="destructive"><X className="mr-1 h-3 w-3"/>Cancelled</Badge></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  );
}
