import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from "@/lib/auth/Provider";
import TrpcProvider from "@/lib/trpc/Provider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/themes-provider';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body className={cn(
          'min-h-screen font-sans antialiased     ',
          inter.className
        )}>
          <NextAuthProvider>
            <TrpcProvider>

              <Navbar />
              {children}

              <Toaster />
            </TrpcProvider>
          </NextAuthProvider>
        </body>
      </ThemeProvider>
    </html>
  )
}
