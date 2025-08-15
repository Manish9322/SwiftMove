import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingsTab from "./bookings-tab";
import PortersTab from "./porters-tab";
import UsersTab from "./users-tab";
import { ListOrdered, Truck, Users } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 font-headline">Admin Dashboard</h1>
      <Tabs defaultValue="bookings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="bookings">
            <ListOrdered className="mr-2 h-4 w-4" />
            Bookings
          </TabsTrigger>
          <TabsTrigger value="porters">
            <Truck className="mr-2 h-4 w-4" />
            Porters
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="mr-2 h-4 w-4" />
            Users
          </TabsTrigger>
        </TabsList>
        <TabsContent value="bookings">
          <BookingsTab />
        </TabsContent>
        <TabsContent value="porters">
          <PortersTab />
        </TabsContent>
        <TabsContent value="users">
          <UsersTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
