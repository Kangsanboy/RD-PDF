"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Kita hilangkan pengecekan "mounted" karena Next.js versi baru 
  // sudah kita tangani pakai suppressHydrationWarning di layout.tsx
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}