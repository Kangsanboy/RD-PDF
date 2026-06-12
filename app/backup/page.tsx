"use client";

import { useState } from "react";
import { Database, Search, UploadCloud, Save, HardDriveDownload, Download, Trash2, AlertTriangle } from "lucide-react";

export default function BackupRestorePage() {
  // Data dummy history backup (Sesuai referensi gambar)
  const [dummyBackup] = useState([
    { id: 1, nama: "RDMBackup_131232040111_20260613054948.rdm", ukuran: "1.02 MB", tanggal: "2026-06-13 05:49:50" },
    { id: 2, nama: "RDMBackup_131232040111_20260501120000.rdm", ukuran: "0.98 MB", tanggal: "2026-05-01 12:00:00" },
  ]);

  // Fungsi simulasi aksi tombol
  const handleRestore = () => {
    alert("Membuka jendela pemilihan file (.rdm) dari komputer Anda untuk proses Restore data...");
  };

  const handleBackupDB = () => {
    alert("Memproses pembuatan file Backup Database... Mohon tunggu sebentar.");
  };

  const handleBackupSemua = () => {
    alert("Memproses pembuatan file Backup Keseluruhan (Database + File/Foto)... Proses ini mungkin memakan waktu lebih lama.");
  };

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-slate-700 dark:bg-slate-600 rounded-xl text-white shadow-lg shadow-slate-500/20">
            <Database size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Backup / Restore</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Pusat pencadangan dan pemulihan database aplikasi</p>
          </div>
        </div>
        
        {/* Tombol Aksi Backup & Restore */}
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={handleRestore}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl shadow-sm transition-all text-sm font-bold active:scale-95"
          >
            <UploadCloud size={16} /> Restore
          </button>
          <button 
            onClick={handleBackupDB}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl shadow-sm transition-all text-sm font-bold active:scale-95"
          >
            <Save size={16} /> Backup DB
          </button>
          <button 
            onClick={handleBackupSemua}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl shadow-sm transition-all text-sm font-bold active:scale-95"
          >
            <HardDriveDownload size={16} /> Backup Semua
          </button>
        </div>
      </header>

      {/* Banner Peringatan Keamanan */}
      <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 rounded-xl p-4 mb-6 flex items-start gap-3 shadow-sm">
        <div className="bg-rose-100 dark:bg-rose-800/50 p-1.5 rounded-full mt-0.5">
          <AlertTriangle size={18} className="text-rose-600 dark:text-rose-400" />
        </div>
        <div className="text-sm text-rose-800 dark:text-rose-300/90 leading-relaxed">
          <p className="font-bold mb-1">Perhatian Penting!</p>
          <p>Lakukan proses <strong>Backup</strong> secara berkala untuk menghindari kehilangan data. Jika Anda melakukan <strong>Restore</strong>, maka seluruh data saat ini akan ditimpa dan digantikan dengan data dari file backup yang Anda unggah.</p>
        </div>
      </div>

      {/* Area Konten Utama (Tabel) */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Toolbar Export & Search */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/50">
          
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Show</span>
            <select className="border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 px-2 py-1 text-xs outline-none focus:ring-1 focus:ring-slate-500">
                <option>10</option>
                <option>25</option>
                <option>50</option>
            </select>
            <span>entries</span>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Cari file backup..." 
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 dark:text-slate-200 transition-all"
            />
          </div>
        </div>

        {/* Tabel Data Backup */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead>
              <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 font-bold tracking-wide">
                <th className="px-6 py-4 w-10 text-center">No</th>
                <th className="px-6 py-4">Nama File Backup</th>
                <th className="px-6 py-4">Ukuran</th>
                <th className="px-6 py-4">Tanggal Backup</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {dummyBackup.map((item, index) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-center text-slate-500 dark:text-slate-400 font-medium">{index + 1}</td>
                  <td className="px-6 py-4">
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-200 text-xs">
                        {item.nama}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                    {item.ukuran}
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    {item.tanggal}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                        <button className="flex items-center gap-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                            <Download size={14} /> Download
                        </button>
                        <button className="flex items-center gap-1.5 bg-rose-100 hover:bg-rose-200 text-rose-700 dark:bg-rose-900/30 dark:hover:bg-rose-900/50 dark:text-rose-400 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors">
                            <Trash2 size={14} /> Del
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
          <p className="text-slate-500 dark:text-slate-400">Showing 1 to {dummyBackup.length} of {dummyBackup.length} entries</p>
          <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden">
            <button className="px-3 py-1.5 border-r border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">First</button>
            <button className="px-3 py-1.5 border-r border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold border-r border-slate-200 dark:border-slate-700">1</button>
            <button className="px-3 py-1.5 text-slate-400 border-r border-slate-200 dark:border-slate-700 cursor-not-allowed">Next</button>
            <button className="px-3 py-1.5 text-slate-400 cursor-not-allowed">Last</button>
          </div>
        </div>

      </div>
    </main>
  );
}