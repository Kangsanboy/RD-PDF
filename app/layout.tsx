import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar"; // Panggil Sidebar di sini

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RD PDF",
  description: "Rapor Digital Pendidikan Diniyah Formal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <ThemeProvider>
          {/* Bungkus utama agar Sidebar dan Konten bersebelahan */}
          <div className="flex min-h-screen">
            
            {/* Sidebar sekarang terkunci permanen di sini */}
            <Sidebar />
            
            {/* Konten menu yang berubah-ubah bakal masuk ke sini */}
            <div className="flex-1 w-full flex flex-col">
              {children}
            </div>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
