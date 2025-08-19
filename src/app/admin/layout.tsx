
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bell,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  PanelLeft,
  Settings,
  Truck,
  Users,
  MessageSquare,
  HelpCircle,
  Send,
  BadgePercent,
  BarChart3,
  Shapes,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
       <aside className={cn(
          "fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background transition-all duration-300 sm:flex",
          isCollapsed ? "w-16" : "w-60"
        )}>
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
           <div className={cn("flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6", isCollapsed && "border-none px-0")}>
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Truck className="h-6 w-6" />
                <span className={cn(isCollapsed && "hidden")}>SwiftMove</span>
              </Link>
           </div>
           
          <div className={cn("flex-1 overflow-auto py-2 w-full", isCollapsed && "flex flex-col items-center")}>
            <Link
              href="/admin/dashboard"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/dashboard') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Dashboard</span>
            </Link>
            <Link
              href="/admin/bookings"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/bookings') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <ListOrdered className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Bookings</span>
            </Link>
             <Link
              href="/admin/porters"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/porters') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Truck className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Porters</span>
            </Link>
             <Link
              href="/admin/users"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/users') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Users className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Users</span>
            </Link>
            <Link
              href="/admin/offers"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/offers') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <BadgePercent className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Offers</span>
            </Link>
            <Link
              href="/admin/fencing"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/fencing') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Shapes className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Fencing</span>
            </Link>
             <Link
              href="/admin/reports"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/reports') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <BarChart3 className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Reports</span>
            </Link>
             <Link
              href="/admin/notifications"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/notifications') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Send className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Notifications</span>
            </Link>
             <Link
              href="/admin/enquiries"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/enquiries') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <MessageSquare className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Enquiries</span>
            </Link>
            <Link
              href="/admin/faq"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/admin/faq') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <HelpCircle className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>FAQ</span>
            </Link>
          </div>
        </nav>
        <nav className={cn("mt-auto flex flex-col items-center gap-4 px-2 py-4", isCollapsed && "px-0")}>
          <Link
              href="#"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Settings className="h-4 w-4" />
               <span className={cn(isCollapsed && "hidden")}>Settings</span>
            </Link>
             <Link
              href="/"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isCollapsed ? 'justify-center' : ''}`}
            >
              <LogOut className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Logout</span>
            </Link>
        </nav>
      </aside>
      <div className={cn("flex flex-col sm:gap-4 sm:py-4 transition-all duration-300", isCollapsed ? "sm:pl-16" : "sm:pl-60")}>
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <PanelLeft className="h-4 w-4" />
              <span className="sr-only">Toggle Sidebar</span>
          </Button>
          <div className="relative flex-1">
             <h1 className="text-lg font-semibold">Admin Panel</h1>
          </div>
          <ThemeToggle />
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://placehold.co/48x48.png" alt="@admin" data-ai-hint="person avatar" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
