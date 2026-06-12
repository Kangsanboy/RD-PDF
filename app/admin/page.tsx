"use client";

import { useState } from "react";
import { ShieldCheck, Plus, Search, Edit, Trash2, Copy, Printer, FileSpreadsheet, Eye, EyeOff } from "lucide-react";

export default function AdminPage() {
  // State untuk toggle visibilitas password
  const [showPassword, setShowPassword] = useState<number | null>(null);

  // Data dummy admin sesuai referensi
  const dummyAdmin = [
    { id: 1, email: "srdlesmana@gmail.com", nama: "Suryadi Lesmana", jk: "L", ttl: "Cianjur, 05 November 1997", pendidikan: "Staf Madrasah", password: "password123" },
    { id: 2, email: "proktor.aljawahir@gmail.com", nama: "Admin Pusat", jk: "L", ttl: "Bandung, 01 Januari 1990", pendidikan: "S1 Teknik Informatika", password: "adminrahasia" },
  ];

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-purple-600 rounded-xl text-white shadow-lg shadow-purple-500/20">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Data Admin RDM</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Master Data Pengelola Aplikasi</p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-purple-500/20 transition-all font-bold text-sm active:scale-95">
          <Plus size={18} />
          Tambah
        </button>
      </header>

      {/* Area Konten Utama */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Toolbar Export & Search */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/50">
          
          {/* Tombol Export */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <Copy size={14} /> Copy
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <Printer size={14} /> Print
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 dark:border-slate-600 rounded-md text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors">
              <FileSpreadsheet size={14} /> Excel
            </button>
            
            <div className="ml-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hidden sm:flex">
                <span>Show</span>
                <select className="border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-purple-500">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <span>entries</span>
            </div>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 dark:text-slate-200 transition-all"
            />
          </div>
        </div>

        {/* Tabel Data Admin */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-semibold tracking-wide">
                <th className="px-4 py-4 w-10 text-center">No</th>
                <th className="px-4 py-4 text-center">Foto</th>
                <th className="px-4 py-4">Email</th>
                <th className="px-4 py-4">Nama Lengkap</th>
                <th className="px-4 py-4 text-center">L/P</th>
                <th className="px-4 py-4">TTL</th>
                <th className="px-4 py-4">Pendidikan</th>
                <th className="px-4 py-4">Password</th>
                <th className="px-4 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {dummyAdmin.map((item, index) => (
                <tr key={item.id} className="hover:bg-purple-50/30 dark:hover:bg-purple-900/10 transition-colors">
                  <td className="px-4 py-4 text-center text-slate-500 dark:text-slate-400">{index + 1}</td>
                  
                  {/* Kolom Foto (Inisial) */}
                  <td className="px-4 py-4 text-center">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400 flex items-center justify-center font-bold text-xs mx-auto">
                        {item.nama.charAt(0)}
                    </div>
                  </td>

                  <td className="px-4 py-4 font-medium text-slate-700 dark:text-slate-300">{item.email}</td>
                  <td className="px-4 py-4 font-bold text-slate-800 dark:text-slate-200">{item.nama}</td>
                  <td className="px-4 py-4 text-center">{item.jk}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400 text-xs">{item.ttl}</td>
                  <td className="px-4 py-4 text-slate-600 dark:text-slate-400 text-xs">{item.pendidikan}</td>
                  
                  {/* Kolom Password */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                            {showPassword === item.id ? item.password : '••••••••'}
                        </span>
                        <button 
                            onClick={() => setShowPassword(showPassword === item.id ? null : item.id)}
                            className="text-slate-400 hover:text-purple-500 transition-colors"
                        >
                            {showPassword === item.id ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                    </div>
                  </td>
                  
                  {/* Kolom Aksi */}
                  <td className="px-4 py-4">
                    <div className="flex justify-center gap-1.5">
                        <button className="flex items-center gap-1 bg-purple-100 hover:bg-purple-200 text-purple-700 dark:bg-purple-900/30 dark:hover:bg-purple-900/50 dark:text-purple-400 px-2.5 py-1.5 rounded text-xs font-semibold transition-colors">
                            <Edit size={12} /> Edit
                        </button>
                        <button className="flex items-center gap-1 bg-rose-100 hover:bg-rose-200 text-rose-700 dark:bg-rose-900/30 dark:hover:bg-rose-900/50 dark:text-rose-400 px-2.5 py-1.5 rounded text-xs font-semibold transition-colors">
                            <Trash2 size={12} /> Del
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center text-xs">
          <p className="text-slate-500 dark:text-slate-400">Showing 1 to 2 of 2 entries</p>
          <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden">
            <button className="px-3 py-1.5 border-r border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">First</button>
            <button className="px-3 py-1.5 border-r border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 font-bold border-r border-slate-200 dark:border-slate-700">1</button>
            <button className="px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 transition-colors cursor-not-allowed">Next</button>
            <button className="px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-not-allowed">Last</button>
          </div>
        </div>

      </div>
    </main>
  );
}