
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';
import StoreProvider from '@/lib/StoreProvider';

export const metadata: Metadata = {
  title: 'SwiftMove',
  description: 'Efficient Porter Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <StoreProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
              {children}
              <Toaster />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
