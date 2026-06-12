"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash2, Users, Filter } from "lucide-react";

export default function GuruPage() {
  // Data dummy guru
  const [dummyGuru] = useState([
    { id: 1, niy: "198001012005011001", nama: "K.H. Furqon Arifin", jk: "L", status: "Aktif" },
    { id: 2, niy: "198502022010011002", nama: "Ust. Ahmad Fauzi", jk: "L", status: "Aktif" },
    { id: 3, niy: "-", nama: "Ustazah Siti Aminah", jk: "P", status: "Aktif" },
    { id: 4, niy: "199004042015011004", nama: "Ust. Hamzah", jk: "L", status: "Aktif" },
    { id: 5, niy: "-", nama: "Ust. Zulkifli", jk: "L", status: "Cuti" },
  ]);

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-violet-600 rounded-xl text-white shadow-lg shadow-violet-500/20">
            <Users size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Data Guru</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Kelola direktori tenaga pendidik Pendidikan Diniyah Formal</p>
          </div>
        </div>
        
        <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-violet-500/20 transition-all font-bold text-sm active:scale-95">
          <Plus size={18} />
          Tambah Guru
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
              placeholder="Cari nama guru atau NIP/NIY..." 
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-slate-200 transition-all shadow-sm"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Filter size={16} /> <span className="hidden sm:inline">Filter:</span>
            </div>
            <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-slate-200 cursor-pointer">
                <option>Semua Status</option>
                <option>Aktif</option>
                <option>Cuti / Non-Aktif</option>
            </select>
            <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-slate-200 cursor-pointer">
                <option>Semua Gender</option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
            </select>
          </div>
        </div>

        {/* Tabel Data Guru */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-bold tracking-wider">
                <th className="px-6 py-5">NIP / NIY</th>
                <th className="px-6 py-5">Nama Lengkap</th>
                <th className="px-6 py-5 text-center">L/P</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {dummyGuru.map((item) => (
                <tr key={item.id} className="hover:bg-violet-50/30 dark:hover:bg-violet-900/10 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                    {item.niy !== "-" ? item.niy : <span className="text-slate-300 dark:text-slate-600 italic">Kosong</span>}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {item.nama}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold ${
                        item.jk === 'L' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400' : 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-400'
                    }`}>
                        {item.jk}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${
                      item.status === 'Aktif' 
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                        : 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                        <button className="p-2 rounded-lg text-slate-400 hover:bg-violet-50 hover:text-violet-600 dark:hover:bg-violet-900/20 transition-all" title="Edit Data">
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
          <p className="text-xs text-slate-500 dark:text-slate-400">Menampilkan 5 data guru</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-all">Next</button>
          </div>
        </div>

      </div>
    </main>
  );
}