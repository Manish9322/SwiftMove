import Link from "next/link";
import { Facebook, Instagram, Twitter, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <Truck className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SwiftMove. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
