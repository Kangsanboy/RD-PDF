"use client";

import { useState } from "react";
import { Search, Plus, UploadCloud, Edit, Trash2, GraduationCap, Filter, Eye, Copy, Printer, FileSpreadsheet } from "lucide-react";

export default function SiswaPage() {
  // Data dummy siswa
  const [dummySiswa] = useState([
    { id: 1, nis: "12345678", nisn: "0012345678", nama: "Abdullah Azzam", jk: "L", kelas: "1A", tingkat: "Wustho", status: "Aktif" },
    { id: 2, nis: "12345679", nisn: "0012345679", nama: "Aisyah Putri", jk: "P", kelas: "1A", tingkat: "Wustho", status: "Aktif" },
    { id: 3, nis: "12345680", nisn: "0012345680", nama: "Bagas Pratama", jk: "L", kelas: "1B", tingkat: "Wustho", status: "Mutasi" },
    { id: 4, nis: "12345681", nisn: "0012345681", nama: "Fatimah Az-Zahra", jk: "P", kelas: "1-Ulya", tingkat: "Ulya", status: "Aktif" },
    { id: 5, nis: "12345682", nisn: "0012345682", nama: "Muhammad Rizki", jk: "L", kelas: "1-Ulya", tingkat: "Ulya", status: "Aktif" },
  ]);

  return (
    <main className="flex-1 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-teal-600 rounded-xl text-white shadow-lg shadow-teal-500/20">
            <GraduationCap size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Data Siswa</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Kelola data induk santri Pendidikan Diniyah Formal</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-semibold">
            <UploadCloud size={16} /> Upload Siswa
          </button>
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-semibold">
            <Plus size={16} /> Tambah Siswa
          </button>
        </div>
      </header>

      {/* Area Konten Utama */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Toolbar Filter & Search */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/50">
          
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
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                type="text" 
                placeholder="Cari nama atau NIS/NISN..." 
                className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 dark:text-slate-200 transition-all shadow-sm"
                />
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Filter size={16} className="hidden sm:block" />
            </div>
            <select className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 dark:text-slate-200 cursor-pointer shadow-sm w-full md:w-auto">
                <option>Semua Kelas</option>
                <option>Kelas 1A (Wustho)</option>
                <option>Kelas 1B (Wustho)</option>
                <option>Kelas 1-Ulya (Ulya)</option>
            </select>
          </div>
        </div>

        {/* Tabel Data Siswa */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-semibold tracking-wide">
                <th className="px-5 py-4 w-10 text-center">No</th>
                <th className="px-5 py-4">NIS / NISN</th>
                <th className="px-5 py-4">Nama Lengkap</th>
                <th className="px-5 py-4 text-center">L/P</th>
                <th className="px-5 py-4">Tingkat</th>
                <th className="px-5 py-4">Rombel (Kelas)</th>
                <th className="px-5 py-4 text-center">Status</th>
                <th className="px-5 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {dummySiswa.map((item, index) => (
                <tr key={item.id} className="hover:bg-teal-50/30 dark:hover:bg-teal-900/10 transition-colors group">
                  <td className="px-5 py-3 text-center text-slate-500 dark:text-slate-400">{index + 1}</td>
                  <td className="px-5 py-3">
                    <div className="flex flex-col">
                        <span className="font-mono font-medium text-slate-700 dark:text-slate-300">{item.nis}</span>
                        <span className="font-mono text-xs text-slate-400">{item.nisn}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {item.nama}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-center">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold ${
                        item.jk === 'L' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400' : 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-400'
                    }`}>
                        {item.jk}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-widest border ${
                      item.tingkat === 'Ulya' 
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-800 dark:text-indigo-400' 
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400'
                    }`}>
                      {item.tingkat}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-medium text-slate-700 dark:text-slate-300">{item.kelas}</td>
                  <td className="px-5 py-3 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === 'Aktif' 
                        ? 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400' 
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex justify-center gap-1.5">
                        <button className="p-1.5 rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-300 transition-colors" title="Detail Siswa">
                            <Eye size={16} />
                        </button>
                        <button className="p-1.5 rounded-md text-slate-400 hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/30 dark:hover:text-teal-400 transition-colors" title="Edit Data">
                            <Edit size={16} />
                        </button>
                        <button className="p-1.5 rounded-md text-slate-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/30 dark:hover:text-rose-400 transition-colors" title="Hapus Data">
                            <Trash2 size={16} />
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-400">Showing 1 to 5 of 103 entries</p>
          <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden">
            <button className="px-3 py-1.5 border-r border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 font-bold border-r border-slate-200 dark:border-slate-700">1</button>
            <button className="px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 transition-colors">2</button>
            <button className="px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 transition-colors">3</button>
            <button className="px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">Next</button>
          </div>
        </div>

      </div>
    </main>
  );
}