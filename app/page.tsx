"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Users, GraduationCap, LayoutGrid, History, Activity, LogIn, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  // Dummy Data Riwayat Login
  const riwayatLogin = [
    { id: 1, nama: "Suryadi Lesmana", peran: "Admin RDM", waktu: "Hari ini, 08:15 WIB", ip: "192.168.1.10", status: "Sukses" },
    { id: 2, nama: "K.H. Furqon Arifin", peran: "Wali Kelas", waktu: "Kemarin, 20:30 WIB", ip: "114.125.10.x", status: "Sukses" },
    { id: 3, nama: "Ust. Ahmad Fauzi", peran: "Wali Kelas", waktu: "Kemarin, 14:10 WIB", ip: "10.0.0.5", status: "Sukses" },
    { id: 4, nama: "Unknown / Tamu", peran: "Tidak Dikenal", waktu: "11 Jun 2026, 02:11 WIB", ip: "103.45.12.x", status: "Gagal" },
  ];

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Dashboard */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Dashboard Admin</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Ringkasan sistem Rapor Digital Pendidikan Diniyah Formal</p>
        </div>
        
        <div className="flex items-center gap-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-sky-500 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-700 transition-all"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="flex items-center gap-4 bg-white dark:bg-slate-800 py-2 px-4 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium hidden sm:block">Admin MAS AL-JAWAHIR</span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 dark:neon-glow flex items-center justify-center text-white font-bold text-xs">
                A
            </div>
          </div>
        </div>
      </header>

      {/* 4 Kartu Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Guru */}
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-800 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 shadow-sm hover:shadow-md dark:shadow-none dark:neon-glow transition-all flex items-center justify-between">
          <div>
            <h3 className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wide">Total Guru</h3>
            <p className="text-4xl font-extrabold text-blue-900 dark:text-white mt-2">31</p>
          </div>
          <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
            <Users size={32} />
          </div>
        </div>
        
        {/* Siswa */}
        <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-slate-800 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm hover:shadow-md dark:shadow-none dark:neon-glow transition-all flex items-center justify-between">
          <div>
            <h3 className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold uppercase tracking-wide">Total Siswa</h3>
            <p className="text-4xl font-extrabold text-emerald-900 dark:text-white mt-2">103</p>
          </div>
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900/50 rounded-full text-emerald-600 dark:text-emerald-400">
            <GraduationCap size={32} />
          </div>
        </div>
        
        {/* Kelas */}
        <div className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-900/20 dark:to-slate-800 p-6 rounded-2xl border border-rose-100 dark:border-rose-800/50 shadow-sm hover:shadow-md dark:shadow-none dark:neon-glow transition-all flex items-center justify-between">
          <div>
            <h3 className="text-rose-600 dark:text-rose-400 text-sm font-semibold uppercase tracking-wide">Total Kelas</h3>
            <p className="text-4xl font-extrabold text-rose-900 dark:text-white mt-2">5</p>
          </div>
          <div className="p-4 bg-rose-100 dark:bg-rose-900/50 rounded-full text-rose-600 dark:text-rose-400">
            <LayoutGrid size={32} />
          </div>
        </div>

        {/* Alumni (Baru) */}
        <div className="bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-slate-800 p-6 rounded-2xl border border-amber-100 dark:border-amber-800/50 shadow-sm hover:shadow-md dark:shadow-none dark:neon-glow transition-all flex items-center justify-between">
          <div>
            <h3 className="text-amber-600 dark:text-amber-400 text-sm font-semibold uppercase tracking-wide">Total Alumni</h3>
            <p className="text-4xl font-extrabold text-amber-900 dark:text-white mt-2">342</p>
          </div>
          <div className="p-4 bg-amber-100 dark:bg-amber-900/50 rounded-full text-amber-600 dark:text-amber-400">
            <History size={32} />
          </div>
        </div>
      </div>

      {/* Grid Bawah (Statistik Nilai & Riwayat Login) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Panel Kiri: Statistik Status Nilai */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-center gap-2">
                <Activity size={18} className="text-indigo-500" />
                <h3 className="font-bold text-slate-700 dark:text-slate-200">Statistik Input Nilai</h3>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center space-y-6">
                
                {/* Tingkat Wustho */}
                <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        <span>Tingkat Wustho (Kelas 1 & 2)</span>
                        <span className="text-indigo-600 dark:text-indigo-400">85%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3">
                        <div className="bg-indigo-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5">Sisa 2 Wali Kelas belum mengunci nilai.</p>
                </div>

                {/* Tingkat Ulya */}
                <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        <span>Tingkat Ulya (Kelas 3)</span>
                        <span className="text-emerald-600 dark:text-emerald-400">100%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3">
                        <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1.5 flex items-center gap-1">
                        <CheckCircle2 size={12}/> Pengisian nilai selesai & terkunci.
                    </p>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-700">
                    <button className="w-full py-2.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors">
                        Lihat Detail Status Nilai &rarr;
                    </button>
                </div>
            </div>
        </div>

        {/* Panel Kanan: Riwayat Login Terbaru */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <LogIn size={18} className="text-sky-500" />
                    <h3 className="font-bold text-slate-700 dark:text-slate-200">Riwayat Akses Terbaru</h3>
                </div>
                <span className="text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded font-bold uppercase tracking-wider">
                    Log System
                </span>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                    <thead className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50">
                        <tr>
                            <th className="px-6 py-3 font-medium">Pengguna</th>
                            <th className="px-6 py-3 font-medium">Waktu Akses</th>
                            <th className="px-6 py-3 font-medium">IP Address</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                        {riwayatLogin.map((log) => (
                            <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-3">
                                    <p className="font-semibold text-slate-800 dark:text-slate-200">{log.nama}</p>
                                    <p className="text-[11px] text-slate-500">{log.peran}</p>
                                </td>
                                <td className="px-6 py-3 text-xs text-slate-600 dark:text-slate-400">{log.waktu}</td>
                                <td className="px-6 py-3 font-mono text-xs text-slate-500">{log.ip}</td>
                                <td className="px-6 py-3">
                                    {log.status === "Sukses" ? (
                                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded flex items-center gap-1 w-max">
                                            <CheckCircle2 size={12}/> Sukses
                                        </span>
                                    ) : (
                                        <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded flex items-center gap-1 w-max">
                                            <ShieldAlert size={12}/> Gagal
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </main>
  );
}
