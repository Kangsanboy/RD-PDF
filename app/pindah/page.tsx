"use client";

import Sidebar from '@/components/Sidebar';
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Dashboard Admin</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Selamat datang di Rapor Digital Madrasah PDF</p>
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-sky-500 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-700 transition-all"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 py-2 px-4 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">Admin MAS AL-JAWAHIR</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 dark:neon-glow"></div>
            </div>
          </div>
        </header>

        {/* Kartu Statistik Berwarna */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Kartu Guru (Biru) */}
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 shadow-sm hover:shadow-md dark:shadow-none dark:neon-glow transition-all">
            <h3 className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide">Total Guru</h3>
            <p className="text-4xl font-extrabold text-blue-900 dark:text-white mt-3">31</p>
          </div>
          
          {/* Kartu Siswa (Hijau) */}
          <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-slate-800 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm hover:shadow-md dark:shadow-none dark:neon-glow transition-all">
            <h3 className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold uppercase tracking-wide">Total Siswa</h3>
            <p className="text-4xl font-extrabold text-emerald-900 dark:text-white mt-3">103</p>
          </div>
          
          {/* Kartu Kelas (Merah/Rose) */}
          <div className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-900/20 dark:to-slate-800 p-6 rounded-2xl border border-rose-100 dark:border-rose-800/50 shadow-sm hover:shadow-md dark:shadow-none dark:neon-glow transition-all">
            <h3 className="text-rose-600 dark:text-rose-400 text-sm font-semibold uppercase tracking-wide">Total Kelas</h3>
            <p className="text-4xl font-extrabold text-rose-900 dark:text-white mt-3">5</p>
          </div>
        </div>
      </main>
    </div>
  );
}