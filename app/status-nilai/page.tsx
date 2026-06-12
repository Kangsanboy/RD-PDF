"use client";

import { useState } from "react";
import { BarChart3, Search, Lock, Unlock, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function StatusNilaiPage() {
  const [selectedTingkat, setSelectedTingkat] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");

  // Dummy Data Status Nilai Wali Kelas
  const [dummyStatus, setDummyStatus] = useState([
    { id: 1, kelas: "1A", tingkat: "Wustho", wali: "Ust. Ahmad Fauzi", progress: 100, isPublished: true, isLocked: true },
    { id: 2, kelas: "1B", tingkat: "Wustho", wali: "Ust. Hamzah", progress: 78, isPublished: false, isLocked: false },
    { id: 3, kelas: "2A", tingkat: "Wustho", wali: "Ust. Zulkifli", progress: 45, isPublished: false, isLocked: false },
    { id: 4, kelas: "1-Ulya", tingkat: "Ulya", wali: "Ust. Abdullah", progress: 0, isPublished: false, isLocked: false },
    { id: 5, kelas: "3-Ulya", tingkat: "Ulya", wali: "K.H. Furqon Arifin", progress: 100, isPublished: true, isLocked: true },
  ]);

  // Fungsi Toggle Kunci
  const toggleLock = (id: number) => {
    setDummyStatus(dummyStatus.map(item => 
      item.id === id ? { ...item, isLocked: !item.isLocked } : item
    ));
  };

  // Fungsi Toggle Publikasi
  const togglePublish = (id: number) => {
    setDummyStatus(dummyStatus.map(item => 
      item.id === id ? { ...item, isPublished: !item.isPublished } : item
    ));
  };

  // Menghitung rata-rata progres untuk Bar Chart di atas
  const averageProgress = Math.round(dummyStatus.reduce((acc, curr) => acc + curr.progress, 0) / dummyStatus.length);

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-500/20">
            <BarChart3 size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Status Nilai Rapor</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Monitoring progres pengisian nilai oleh wali kelas</p>
          </div>
        </div>
      </header>

      {/* Area Konten Utama */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Filter Tingkat & Kelas */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Tingkat</label>
                <select 
                    value={selectedTingkat} onChange={(e) => setSelectedTingkat(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all cursor-pointer shadow-sm"
                >
                    <option value="">Semua Tingkat</option>
                    <option value="Wustho">Wustho</option>
                    <option value="Ulya">Ulya</option>
                </select>
            </div>
            <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Kelas</label>
                <select 
                    value={selectedKelas} onChange={(e) => setSelectedKelas(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all cursor-pointer shadow-sm"
                >
                    <option value="">Semua Kelas</option>
                    <option value="1A">Kelas 1A</option>
                    <option value="1B">Kelas 1B</option>
                    <option value="2A">Kelas 2A</option>
                </select>
            </div>
        </div>

        {/* Global Progress Bar */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                Grafik Progres Keseluruhan Madrasah
            </h3>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                        <span>Pengisian Nilai Akademik</span>
                        <span className="text-indigo-600 dark:text-indigo-400">{averageProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3.5 overflow-hidden border border-slate-200 dark:border-slate-600 shadow-inner">
                        <div 
                            className="bg-indigo-600 h-3.5 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2" 
                            style={{ width: `${averageProgress}%` }}
                        >
                            <span className="text-[10px] text-white font-bold">{averageProgress}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Toolbar Pencarian */}
        <div className="p-4 bg-slate-50/80 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Menampilkan {dummyStatus.length} Data Rombel
            </div>
            <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                    type="text" 
                    placeholder="Cari wali kelas..." 
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-200 transition-all shadow-sm"
                />
            </div>
        </div>

        {/* Tabel Data Status */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 font-bold tracking-wide">
                <th className="px-6 py-4">Kelas</th>
                <th className="px-6 py-4">Wali Kelas</th>
                <th className="px-6 py-4 text-center">Progres Nilai</th>
                <th className="px-6 py-4 text-center">Publikasi Wali Santri</th>
                <th className="px-6 py-4 text-center">Status Kunci</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {dummyStatus.map((item) => (
                <tr key={item.id} className="hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-colors">
                  
                  {/* Kolom Kelas */}
                  <td className="px-6 py-4">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{item.kelas}</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5 uppercase tracking-wider">{item.tingkat}</span>
                  </td>
                  
                  {/* Kolom Wali Kelas */}
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">
                    {item.wali}
                  </td>
                  
                  {/* Kolom Progres Nilai */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-1.5">
                        <span className={`px-3 py-1 rounded text-[11px] font-extrabold tracking-wide ${
                            item.progress === 100 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800" : 
                            item.progress > 0 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800" : 
                            "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border border-rose-200 dark:border-rose-800"
                        }`}>
                            Input : {item.progress}%
                        </span>
                        {/* Mini progress bar under the badge */}
                        <div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${item.progress === 100 ? "bg-emerald-500" : item.progress > 0 ? "bg-amber-500" : "bg-rose-500"}`}
                                style={{ width: `${item.progress}%` }}
                            ></div>
                        </div>
                    </div>
                  </td>
                  
                  {/* Kolom Publikasi */}
                  <td className="px-6 py-4 text-center">
                    <button 
                        onClick={() => togglePublish(item.id)}
                        title={item.isPublished ? "Sembunyikan dari Wali Santri" : "Publikasikan ke Wali Santri"}
                        className={`inline-flex p-2 rounded-lg transition-all border ${
                            item.isPublished 
                            ? "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800" 
                            : "bg-rose-50 text-rose-500 border-rose-200 hover:bg-rose-100 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800"
                        }`}
                    >
                        {item.isPublished ? <Eye size={18} /> : <EyeOff size={18} />}
                    </button>
                  </td>

                  {/* Kolom Kunci */}
                  <td className="px-6 py-4 text-center">
                    <button 
                        onClick={() => toggleLock(item.id)}
                        title={item.isLocked ? "Buka Kunci (Edit Diizinkan)" : "Kunci Nilai (Edit Dilarang)"}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border shadow-sm ${
                            item.isLocked 
                            ? "bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600" 
                            : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-700"
                        }`}
                    >
                        {item.isLocked ? <><Lock size={14} /> Terkunci</> : <><Unlock size={14} /> Terbuka</>}
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}