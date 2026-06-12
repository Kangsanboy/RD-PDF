"use client";

import { useState } from "react";
import { Plus, Search, Edit, UploadCloud, Copy, Printer, FileSpreadsheet, Eye, EyeOff, UserX } from "lucide-react";

export default function GuruPage() {
  // Data dummy sesuai referensi dengan tambahan field
  const [dummyGuru] = useState([
    { id: 1, niy: "131232040111017", nama: "AANG NURHIDAYAT, S.Pd.I", jk: "L", ttl: "Bandung, 13 Juni 1991", pendidikan: "Sarjana (S1)", password: "password123", wali: "-", jtm: "-", status: "Aktif" },
    { id: 2, niy: "131232040111027", nama: "ACENG FAJRI MUHAMMAD SATIBI", jk: "L", ttl: "Bandung, 13 Juni 1991", pendidikan: "Sarjana (S1)", password: "password123", wali: "-", jtm: "-", status: "Aktif" },
    { id: 3, niy: "131232040111006", nama: "AD RIMA WIDIANINGSIH, S.Pd.I", jk: "P", ttl: "Bandung, 13 Juni 1991", pendidikan: "Sarjana (S1)", password: "password123", wali: "X.A", jtm: "39", status: "Aktif" },
    { id: 4, niy: "131232040111024", nama: "CIBUNG CHANDRA SAKTI", jk: "L", ttl: "Bandung, 10 Agustus 1987", pendidikan: "Sarjana (S1)", password: "password123", wali: "XI.", jtm: "39", status: "Aktif" },
  ]);

  // State untuk toggle visibilitas password (simulasi)
  const [showPassword, setShowPassword] = useState<number | null>(null);

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Data Guru</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Master Data</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-medium">
            <UploadCloud size={16} /> Upload Guru
          </button>
          <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-medium">
            <Plus size={16} /> Tambah
          </button>
        </div>
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
            
            <div className="ml-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span>Show</span>
                <select className="border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 px-2 py-1 text-xs outline-none">
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
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-1 focus:ring-violet-500 dark:text-slate-200 transition-all"
            />
          </div>
        </div>

        {/* Tabel Data Guru (Bisa di-scroll horizontal kalau sempit) */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-semibold tracking-wide">
                <th className="px-4 py-3 w-10 text-center">No</th>
                <th className="px-4 py-3 text-center">Foto</th>
                <th className="px-4 py-3">NIK/NUPTK/NIY</th>
                <th className="px-4 py-3">Nama Lengkap</th>
                <th className="px-4 py-3 text-center">L/P</th>
                <th className="px-4 py-3">TTL</th>
                <th className="px-4 py-3">Pendidikan</th>
                <th className="px-4 py-3">Password</th>
                <th className="px-4 py-3">Wali Kelas</th>
                <th className="px-4 py-3 text-center">JTM</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {dummyGuru.map((item, index) => (
                <tr key={item.id} className="hover:bg-violet-50/30 dark:hover:bg-violet-900/10 transition-colors">
                  <td className="px-4 py-3 text-center text-slate-500 dark:text-slate-400">{index + 1}</td>
                  
                  {/* Kolom Foto (Inisial) */}
                  <td className="px-4 py-3 text-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400 flex items-center justify-center font-bold text-xs mx-auto">
                        {item.nama.charAt(0)}
                    </div>
                  </td>

                  <td className="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-400">{item.niy}</td>
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{item.nama}</td>
                  <td className="px-4 py-3 text-center">{item.jk}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{item.ttl}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{item.pendidikan}</td>
                  
                  {/* Kolom Password */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                            {showPassword === item.id ? item.password : '••••••••'}
                        </span>
                        <button 
                            onClick={() => setShowPassword(showPassword === item.id ? null : item.id)}
                            className="text-slate-400 hover:text-violet-500 transition-colors"
                        >
                            {showPassword === item.id ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                    </div>
                  </td>

                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">{item.wali}</td>
                  <td className="px-4 py-3 text-center font-medium text-slate-700 dark:text-slate-300">{item.jtm}</td>
                  
                  {/* Kolom Aksi */}
                  <td className="px-4 py-3">
                    <div className="flex justify-center gap-1.5">
                        <button className="flex items-center gap-1 bg-violet-100 hover:bg-violet-200 text-violet-700 dark:bg-violet-900/30 dark:hover
