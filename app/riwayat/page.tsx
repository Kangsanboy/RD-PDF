"use client";

import { useState } from "react";
import { Search, Archive, Copy, Printer, FileSpreadsheet, Eye, Filter, History } from "lucide-react";

export default function RiwayatPage() {
  // State untuk fitur pencarian interaktif
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTahun, setSelectedTahun] = useState("");

  // Data dummy alumni dan siswa pindahan
  const dummyRiwayat = [
    { id: 1, nis: "140001", nisn: "0088837981", nama: "Ahmad Fauzan", jk: "L", tahunLulus: "2023/2024", kelasTerakhir: "3-Ulya", status: "Lulus" },
    { id: 2, nis: "140002", nisn: "3088886938", nama: "Siti Nurhaliza", jk: "P", tahunLulus: "2023/2024", kelasTerakhir: "3-Ulya", status: "Lulus" },
    { id: 3, nis: "150034", nisn: "0098542998", nama: "Bima Arya", jk: "L", tahunLulus: "2024/2025", kelasTerakhir: "2-Wustho", status: "Pindah" },
    { id: 4, nis: "130003", nisn: "0079782724", nama: "Dinda Kirana", jk: "P", tahunLulus: "2022/2023", kelasTerakhir: "3-Ulya", status: "Lulus" },
    { id: 5, nis: "150005", nisn: "0081972387", nama: "Fikri Haikal", jk: "L", tahunLulus: "2024/2025", kelasTerakhir: "3-Ulya", status: "Lulus" },
  ];

  // Logika Filter Pencarian
  const filteredData = dummyRiwayat.filter((item) => {
    const matchesSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase()) || item.nis.includes(searchTerm);
    const matchesTahun = selectedTahun === "" || selectedTahun === "Semua Tahun" ? true : item.tahunLulus === selectedTahun;
    return matchesSearch && matchesTahun;
  });

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500 rounded-xl text-white shadow-lg shadow-amber-500/20">
            <Archive size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Riwayat Siswa</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Arsip data alumni dan rekam jejak santri mutasi</p>
          </div>
        </div>
      </header>

      {/* Area Konten Utama */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Toolbar Filter & Search */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/50">
          
          {/* Tombol Export */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm">
              <Copy size={14} /> Copy
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm">
              <Printer size={14} /> Print
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors shadow-sm">
              <FileSpreadsheet size={14} /> Excel
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {/* Filter Tahun */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
                <Filter size={16} className="text-slate-400 hidden sm:block" />
                <select 
                  value={selectedTahun}
                  onChange={(e) => setSelectedTahun(e.target.value)}
                  className="w-full sm:w-auto bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-slate-200 cursor-pointer shadow-sm"
                >
                    <option>Semua Tahun</option>
                    <option>2024/2025</option>
                    <option>2023/2024</option>
                    <option>2022/2023</option>
                </select>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Cari nama atau NIS..." 
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-amber-300 dark:border-amber-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 dark:text-slate-200 transition-all shadow-sm"
                />
            </div>
          </div>
        </div>

        {/* Tabel Data Riwayat */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-semibold tracking-wide">
                <th className="px-5 py-4 w-10 text-center">No</th>
                <th className="px-5 py-4">NIS / NISN</th>
                <th className="px-5 py-4">Nama Lengkap</th>
                <th className="px-5 py-4 text-center">L/P</th>
                <th className="px-5 py-4">Tahun Keluar</th>
                <th className="px-5 py-4">Kelas Terakhir</th>
                <th className="px-5 py-4 text-center">Status</th>
                <th className="px-5 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.id} className="hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-colors group">
                    <td className="px-5 py-4 text-center text-slate-500 dark:text-slate-400">{index + 1}</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-col">
                          <span className="font-mono font-medium text-slate-700 dark:text-slate-300">{item.nis}</span>
                          <span className="font-mono text-xs text-slate-400">{item.nisn}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {item.nama}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="text-slate-600 dark:text-slate-400 font-medium">
                          {item.jk}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-700 dark:text-slate-300">
                      {item.tahunLulus}
                    </td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                      {item.kelasTerakhir}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className={`px-3 py-1 rounded text-[10px] font-extrabold uppercase tracking-widest border ${
                        item.status === 'Lulus' 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400' 
                          : 'bg-rose-50 border-rose-200 text-rose-700 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-center">
                          <button className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">
                              <Eye size={14} /> Detail
                          </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-5 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <History size={48} className="mb-4 opacity-20" />
                      <p className="text-lg font-medium">Data tidak ditemukan</p>
                      <p className="text-sm mt-1">Coba gunakan kata kunci atau filter tahun yang lain.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-400">
            Menampilkan {filteredData.length} data riwayat
          </p>
          <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden">
            <button className="px-3 py-1.5 border-r border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 font-bold border-r border-slate-200 dark:border-slate-700">1</button>
            <button className="px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">Next</button>
          </div>
        </div>

      </div>
    </main>
  );
}