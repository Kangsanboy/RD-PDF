"use client";

import { useState } from "react";
import { BookOpenCheck, Copy, Printer, FileSpreadsheet, Search, Info, Plus, CopyPlus, Users, Trash2 } from "lucide-react";

export default function MengajarPage() {
  // State untuk melacak pilihan dropdown
  const [selectedTingkat, setSelectedTingkat] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");

  // Daftar guru untuk pilihan di dalam tabel
  const daftarGuru = [
    "-- Pilih Guru --",
    "K.H. Furqon Arifin",
    "Ust. Ahmad Fauzi",
    "Ustazah Siti Aminah",
    "Ust. Hamzah",
    "Ust. Zulkifli"
  ];

  // Dummy jadwal pelajaran yang muncul kalau kelas udah dipilih
  const dummyJadwal = [
    { id: 1, mapel: "Nahwu", kelompok: "Muatan Lokal", jtm: 4, guru: "Ust. Ahmad Fauzi" },
    { id: 2, mapel: "Shorof", kelompok: "Muatan Lokal", jtm: 4, guru: "Ust. Hamzah" },
    { id: 3, mapel: "Fiqih", kelompok: "Wajib", jtm: 3, guru: "K.H. Furqon Arifin" },
    { id: 4, mapel: "Tauhid", kelompok: "Wajib", jtm: 2, guru: "Ust. Zulkifli" },
    { id: 5, mapel: "Tarikh / SKI", kelompok: "Wajib", jtm: 2, guru: "-- Pilih Guru --" }, // Contoh belum diisi
  ];

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-500/20">
            <BookOpenCheck size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Data Mengajar Guru</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Pengaturan jadwal dan beban jam tatap muka (JTM)</p>
          </div>
        </div>
        
        {/* Tombol Aksi Kanan Atas */}
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-semibold">
            <Plus size={16} /> Tambah
          </button>
          <button className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-semibold">
            <CopyPlus size={16} /> Salin Mengajar
          </button>
          <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-semibold">
            <Users size={16} /> Daftar Guru
          </button>
        </div>
      </header>

      {/* Banner Informasi (Pengganti banner kuning yang kaku) */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-xl p-4 mb-6 flex items-start gap-3 shadow-sm">
        <div className="bg-amber-100 dark:bg-amber-800/50 p-1.5 rounded-full mt-0.5">
          <Info size={18} className="text-amber-600 dark:text-amber-400" />
        </div>
        <div className="text-sm text-amber-800 dark:text-amber-300/90 leading-relaxed">
          <p>Untuk mengatur jadwal mengajar berdasarkan kelas, silakan pilih <strong>Tingkatan</strong> dan <strong>Kelas</strong> di bawah ini terlebih dahulu.</p>
          <p>Untuk mengatur jadwal berdasarkan guru dan mapel, klik tombol <strong>Tambah</strong> pada pojok kanan atas.</p>
        </div>
      </div>

      {/* Area Filter Tingkat & Kelas */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 mb-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Tingkat</label>
            <select 
                value={selectedTingkat}
                onChange={(e) => setSelectedTingkat(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all cursor-pointer"
            >
                <option value="">-- Pilih Tingkat --</option>
                <option value="Wustho">Wustho</option>
                <option value="Ulya">Ulya</option>
            </select>
        </div>
        <div className="flex-1">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Kelas</label>
            <select 
                value={selectedKelas}
                onChange={(e) => setSelectedKelas(e.target.value)}
                disabled={!selectedTingkat} // Disable kalau tingkat belum dipilih
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <option value="">-- Pilih Kelas --</option>
                {selectedTingkat === "Wustho" && (
                    <>
                        <option value="1A">Kelas 1A</option>
                        <option value="1B">Kelas 1B</option>
                    </>
                )}
                {selectedTingkat === "Ulya" && (
                    <option value="1-Ulya">Kelas 1-Ulya</option>
                )}
            </select>
        </div>
      </div>

      {/* Area Tabel Data Mengajar */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden min-h-[300px]">
        
        {/* Toolbar Tabel */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-slate-800/50">
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

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search mapel..." 
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:text-slate-200 transition-all"
            />
          </div>
        </div>

        {/* LOGIKA KONDISIONAL: Tampil tabel kalau kelas sudah dipilih, tampil pesan kosong kalau belum */}
        {!selectedKelas ? (
            <div className="flex flex-col items-center justify-center p-12 text-slate-400 dark:text-slate-500">
                <BookOpenCheck size={48} className="mb-4 opacity-20" />
                <p className="text-lg font-medium">No data available in table</p>
                <p className="text-sm">Silakan pilih Tingkat dan Kelas di atas terlebih dahulu.</p>
            </div>
        ) : (
            <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead>
                <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-semibold tracking-wide">
                    <th className="px-4 py-3 w-12 text-center">No</th>
                    <th className="px-4 py-3">Mata Pelajaran</th>
                    <th className="px-4 py-3">Kelompok</th>
                    <th className="px-4 py-3 text-center w-24">JTM</th>
                    <th className="px-4 py-3 min-w-[250px]">Guru Pengampu</th>
                    <th className="px-4 py-3 text-center w-32">Aksi</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                {dummyJadwal.map((item, index) => (
                    <tr key={item.id} className="hover:bg-indigo-50/30 dark:hover:bg-indigo-900/10 transition-colors group">
                        <td className="px-4 py-4 text-center text-slate-500 dark:text-slate-400">{index + 1}</td>
                        <td className="px-4 py-4 font-bold text-slate-800 dark:text-slate-200">{item.mapel}</td>
                        <td className="px-4 py-4 text-slate-600 dark:text-slate-400 text-xs">{item.kelompok}</td>
                        <td className="px-4 py-4 text-center font-mono font-medium text-slate-700 dark:text-slate-300">{item.jtm}</td>
                        
                        {/* Dropdown Pemilihan Guru langsung di dalam tabel */}
                        <td className="px-4 py-4">
                            <select 
                                defaultValue={item.guru}
                                className={`w-full text-sm px-3 py-1.5 rounded-md border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer ${
                                    item.guru === "-- Pilih Guru --" 
                                    ? "bg-rose-50 border-rose-300 text-rose-600 dark:bg-rose-900/20 dark:border-rose-700/50 dark:text-rose-400" 
                                    : "bg-white border-slate-300 text-slate-700 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-200"
                                }`}
                            >
                                {daftarGuru.map((guru, idx) => (
                                    <option key={idx} value={guru}>{guru}</option>
                                ))}
                            </select>
                        </td>
                        
                        <td className="px-4 py-4">
                            <div className="flex justify-center">
                                <button className="flex items-center gap-1.5 bg-rose-500 hover:bg-rose-600 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition-all shadow-sm active:scale-95">
                                    <Trash2 size={14} /> Hapus Ajar
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