"use client";

import { useState } from "react";
import { Printer, Search, FileText, BookOpen, UserSquare, Layers, FileSpreadsheet, Download } from "lucide-react";

export default function CetakRaporPage() {
  const [selectedTingkat, setSelectedTingkat] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");

  // Dummy Data Siswa sesuai referensi
  const dummySiswa = [
    { id: 1, nisn: "0099937981", nama: "AMAR NAZRIEL GUNAWAN", jk: "L", ttl: "BANDUNG, 09 Desember 2009" },
    { id: 2, nisn: "3099986938", nama: "ARLINE AMELIA HANAFI", jk: "P", ttl: "BANDUNG, 14 Agustus 2009" },
    { id: 3, nisn: "0108542998", nama: "AVISA BELVA AZALIA W", jk: "P", ttl: "BANDUNG, 30 Mei 2010" },
    { id: 4, nisn: "0109782724", nama: "BUNGA HARUMI NURALISYA", jk: "P", ttl: "BANDUNG, 10 Juni 2010" },
    { id: 5, nisn: "0101972387", nama: "BUNGA INDI AZZHAHRANI", jk: "P", ttl: "BANDUNG, 27 Januari 2010" },
  ];

  // Fungsi simulasi klik cetak
  const handlePrint = (jenis: string, namaSiswa: string) => {
    alert(`Membuka format cetak ${jenis} untuk siswa: ${namaSiswa}\n(Fitur layout kertas akan dikembangkan di tahap selanjutnya)`);
  };

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman & Tombol Cetak Massal */}
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-6 gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-sky-600 rounded-xl text-white shadow-lg shadow-sky-500/20">
            <Printer size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Cetak Rapor Siswa</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Pusat pencetakan dokumen akademik santri</p>
          </div>
        </div>
        
        {/* Tombol Cetak Massal (Satu Kelas) */}
        {selectedKelas && (
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg shadow-sm transition-all text-xs font-bold uppercase tracking-wide">
              <Download size={14} /> Semua Rapor
            </button>
            <button className="flex items-center gap-1.5 bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 rounded-lg shadow-sm transition-all text-xs font-bold uppercase tracking-wide">
              <Download size={14} /> Semua Nilai
            </button>
            <button className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-lg shadow-sm transition-all text-xs font-bold uppercase tracking-wide">
              <Download size={14} /> Semua Sampul
            </button>
            <button className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg shadow-sm transition-all text-xs font-bold uppercase tracking-wide">
              <Download size={14} /> Semua Identitas
            </button>
          </div>
        )}
      </header>

      {/* Area Filter Tingkat & Kelas */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 mb-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Tingkat</label>
            <select 
                value={selectedTingkat} onChange={(e) => setSelectedTingkat(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white transition-all cursor-pointer"
            >
                <option value="">-- Pilih Tingkat --</option>
                <option value="Wustho">Wustho</option>
                <option value="Ulya">Ulya</option>
            </select>
        </div>
        <div className="flex-1">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Kelas</label>
            <select 
                value={selectedKelas} onChange={(e) => setSelectedKelas(e.target.value)}
                disabled={!selectedTingkat}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <option value="">-- Pilih Kelas --</option>
                <option value="1A">Kelas 1A</option>
                <option value="1B">Kelas 1B</option>
            </select>
        </div>
      </div>

      {/* Area Konten Tabel */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden min-h-[300px]">
        
        {/* Toolbar Pencarian */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="text-xs text-slate-500 dark:text-slate-400">
             {selectedKelas ? `Menampilkan ${dummySiswa.length} data siswa` : "Pilih kelas untuk memuat data"}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Cari siswa..." 
              className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-slate-200 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* LOGIKA KONDISIONAL TABEL */}
        {!selectedKelas ? (
            <div className="flex flex-col items-center justify-center p-16 text-slate-400 dark:text-slate-500 bg-slate-50/30 dark:bg-slate-900/20">
                <Printer size={56} className="mb-4 opacity-20" />
                <p className="text-lg font-medium">Tabel Cetak Kosong</p>
                <p className="text-sm mt-1 text-slate-400">Silakan pilih Tingkat dan Kelas di atas untuk memuat daftar siswa.</p>
            </div>
        ) : (
            <div className="overflow-x-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
                <thead>
                <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-semibold tracking-wide">
                    <th className="px-5 py-4 w-10 text-center">No</th>
                    <th className="px-5 py-4">NISN</th>
                    <th className="px-5 py-4">Nama Lengkap</th>
                    <th className="px-5 py-4 text-center">L/P</th>
                    <th className="px-5 py-4">TTL</th>
                    <th className="px-5 py-4 text-center">Aksi Cetak</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                {dummySiswa.map((item, index) => (
                    <tr key={item.id} className="hover:bg-sky-50/30 dark:hover:bg-sky-900/10 transition-colors">
                        <td className="px-5 py-3 text-center text-slate-500 dark:text-slate-400">{index + 1}</td>
                        <td className="px-5 py-3 font-mono text-xs text-slate-600 dark:text-slate-400">{item.nisn}</td>
                        <td className="px-5 py-3 font-bold text-slate-800 dark:text-slate-200">{item.nama}</td>
                        <td className="px-5 py-3 text-center text-slate-600 dark:text-slate-400">{item.jk}</td>
                        <td className="px-5 py-3 text-xs text-slate-600 dark:text-slate-400">{item.ttl}</td>
                        
                        {/* 5 Tombol Aksi Cetak Per Siswa */}
                        <td className="px-5 py-3">
                            <div className="flex justify-center gap-1.5">
                                <button 
                                    onClick={() => handlePrint("Nilai", item.nama)}
                                    className="flex items-center gap-1.5 bg-rose-100 hover:bg-rose-200 text-rose-700 dark:bg-rose-900/30 dark:hover:bg-rose-900/50 dark:text-rose-400 px-2.5 py-1.5 rounded-md text-[11px] font-bold transition-colors"
                                >
                                    <FileSpreadsheet size={14} /> Nilai
                                </button>
                                <button 
                                    onClick={() => handlePrint("Rapor", item.nama)}
                                    className="flex items-center gap-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-400 px-2.5 py-1.5 rounded-md text-[11px] font-bold transition-colors"
                                >
                                    <FileText size={14} /> Rapor
                                </button>
                                <button 
                                    onClick={() => handlePrint("Rekap", item.nama)}
                                    className="flex items-center gap-1.5 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 dark:text-indigo-400 px-2.5 py-1.5 rounded-md text-[11px] font-bold transition-colors"
                                >
                                    <Layers size={14} /> Rekap
                                </button>
                                <button 
                                    onClick={() => handlePrint("Sampul", item.nama)}
                                    className="flex items-center gap-1.5 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:hover:bg-emerald-900/50 dark:text-emerald-400 px-2.5 py-1.5 rounded-md text-[11px] font-bold transition-colors"
                                >
                                    <BookOpen size={14} /> Sampul
                                </button>
                                <button 
                                    onClick={() => handlePrint("Identitas", item.nama)}
                                    className="flex items-center gap-1.5 bg-amber-100 hover:bg-amber-200 text-amber-700 dark:bg-amber-900/30 dark:hover:bg-amber-900/50 dark:text-amber-400 px-2.5 py-1.5 rounded-md text-[11px] font-bold transition-colors"
                                >
                                    <UserSquare size={14} /> Identitas
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}
      </div>
    </main>
  );
}