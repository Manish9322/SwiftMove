
"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bell,
  LayoutDashboard,
  LogOut,
  PanelLeft,
  Settings,
  Star,
  Truck,
  Package,
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

const AgentLayout = ({ children }: { children: React.ReactNode }) => {
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
              <Link href="/agent" className="flex items-center gap-2 font-semibold">
                <Truck className="h-6 w-6" />
                <span className={cn(isCollapsed && "hidden")}>Agent Panel</span>
              </Link>
           </div>
           
          <div className={cn("flex-1 overflow-auto py-2 w-full", isCollapsed && "flex flex-col items-center")}>
            <Link
              href="/agent/dashboard"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/agent/dashboard') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Dashboard</span>
            </Link>
            <Link
              href="/agent/orders"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/agent/orders') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Package className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Orders</span>
            </Link>
             <Link
              href="/agent/reviews"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/agent/reviews') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
            >
              <Star className="h-4 w-4" />
              <span className={cn(isCollapsed && "hidden")}>Reviews</span>
            </Link>
          </div>
        </nav>
        <nav className={cn("mt-auto flex flex-col items-center gap-4 px-2 py-4", isCollapsed && "px-0")}>
          <Link
              href="/agent/settings"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive('/agent/settings') ? 'bg-muted text-primary' : ''} ${isCollapsed ? 'justify-center' : ''}`}
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
             <h1 className="text-lg font-semibold">Agent Panel</h1>
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
                  <AvatarImage src="https://placehold.co/48x48.png" alt="@agent" data-ai-hint="person avatar" />
                  <AvatarFallback>AG</AvatarFallback>
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

export default AgentLayout;
