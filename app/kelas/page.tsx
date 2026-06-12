"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2, LayoutGrid, Filter } from "lucide-react";

export default function KelasPage() {
  // Data dummy kelas
  const [dummyKelas] = useState([
    { id: 1, kode: "KL-01", nama: "Kelas 1A", tingkat: "Wustho", wali: "Ust. Ahmad Fauzi" },
    { id: 2, kode: "KL-02", nama: "Kelas 1B", tingkat: "Wustho", wali: "Ust. Hamzah" },
    { id: 3, kode: "KL-03", nama: "Kelas 2A", tingkat: "Wustho", wali: "Ust. Zulkifli" },
    { id: 4, kode: "KL-04", nama: "Kelas 1-Ulya", tingkat: "Ulya", wali: "Ust. Abdullah" },
    { id: 5, kode: "KL-05", nama: "Kelas 3-Ulya", tingkat: "Ulya", wali: "K.H. Furqon Arifin" },
  ]);

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-600 rounded-xl text-white shadow-lg shadow-emerald-500/20">
            <LayoutGrid size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Data Kelas</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manajemen rombongan belajar santri PDF</p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all font-bold text-sm active:scale-95">
          <Plus size={18} />
          Tambah Kelas
        </button>
      </header>

      {/* Area Konten Utama */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Toolbar Filter & Search */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari nama kelas atau wali..." 
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-slate-200 transition-all shadow-sm"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mr-2">
                <Filter size={16} /> <span>Tingkat:</span>
            </div>
            <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-slate-200 cursor-pointer">
                <option>Semua Tingkat</option>
                <option>Wustho</option>
                <option>Ulya</option>
            </select>
          </div>
        </div>

        {/* Tabel Data Kelas */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-bold tracking-wider">
                <th className="px-6 py-5">Kode</th>
                <th className="px-6 py-5">Nama Kelas</th>
                <th className="px-6 py-5">Tingkat</th>
                <th className="px-6 py-5">Wali Kelas</th>
                <th className="px-6 py-5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {dummyKelas.map((item) => (
                <tr key={item.id} className="hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">{item.kode}</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.nama}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${
                      item.tingkat === 'Ulya' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' 
                        : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    }`}>
                      {item.tingkat}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-medium">
                    {item.wali}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                        <button className="p-2 rounded-lg text-slate-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20 transition-all" title="Edit Data">
                            <Edit size={18} />
                        </button>
                        <button className="p-2 rounded-lg text-slate-400 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-900/20 transition-all" title="Hapus Data">
                            <Trash2 size={18} />
                        </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="p-5 border-t border-slate-100 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-800/30 flex justify-between items-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">Menampilkan 5 data kelas</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-all">Next</button>
          </div>
        </div>

      </div>
    </main>
  );
}
