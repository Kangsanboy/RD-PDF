"use client";

import { Plus, Search, Edit, Trash2 } from "lucide-react";

export default function MapelPage() {
  // Data dummy sementara (nanti kita ganti ambil dari Supabase)
  const dummyMapel = [
    { id: 1, kode: "MP-01", nama: "Nahwu", kelompok: "Muatan Lokal" },
    { id: 2, kode: "MP-02", nama: "Shorof", kelompok: "Muatan Lokal" },
    { id: 3, kode: "MP-03", nama: "Fiqih", kelompok: "Wajib" },
    { id: 4, kode: "MP-04", nama: "Tauhid", kelompok: "Wajib" },
  ];

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Mata Pelajaran</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Kelola data mata pelajaran Pendidikan Diniyah Formal</p>
        </div>
        
        {/* Tombol Tambah */}
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all font-medium text-sm">
          <Plus size={18} />
          Tambah Mapel
        </button>
      </header>

      {/* Area Konten Utama (Card) */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Toolbar (Pencarian dll) */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari mata pelajaran..." 
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-200 transition-all"
            />
          </div>
        </div>

        {/* Tabel Data */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="px-6 py-4 font-semibold">No</th>
                <th className="px-6 py-4 font-semibold">Kode Mapel</th>
                <th className="px-6 py-4 font-semibold">Nama Mata Pelajaran</th>
                <th className="px-6 py-4 font-semibold">Kelompok</th>
                <th className="px-6 py-4 font-semibold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {dummyMapel.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{index + 1}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-medium">{item.kode}</td>
                  <td className="px-6 py-4 text-slate-800 dark:text-slate-200 font-semibold">{item.nama}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.kelompok === 'Wajib' 
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                        : 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400'
                    }`}>
                      {item.kelompok}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button className="text-slate-400 hover:text-blue-500 transition-colors p-1" title="Edit">
                      <Edit size={18} />
                    </button>
                    <button className="text-slate-400 hover:text-rose-500 transition-colors p-1" title="Hapus">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Tabel (Pagination) */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
          <span>Menampilkan 1 sampai 4 dari 4 entri</span>
          {/* Nanti di sini bisa ditambah tombol Next/Prev */}
        </div>

      </div>
    </main>
  );
}