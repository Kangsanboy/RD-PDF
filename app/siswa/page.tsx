"use client";

import { useState } from "react";
import { Search, Plus, UploadCloud, Edit, Trash2, GraduationCap, Copy, Printer, FileSpreadsheet, Info, Eye, EyeOff, UserMinus } from "lucide-react";

export default function SiswaPage() {
  // State dropdown
  const [selectedTingkat, setSelectedTingkat] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");
  const [showPassword, setShowPassword] = useState<number | null>(null);

  // Data dummy siswa sesuai referensi gambar
  const dummySiswa = [
    { id: 1, nis: "160001", nisn: "0099937981", nama: "AMAR NAZRIEL GUNAWAN", jk: "L", ttl: "BANDUNG, 09 Desember 2009", password: "YA82C3", status: "Aktif" },
    { id: 2, nis: "160002", nisn: "3099986938", nama: "ARLINE AMELIA HANAFI", jk: "P", ttl: "BANDUNG, 14 Agustus 2009", password: "WQY56F", status: "Aktif" },
    { id: 3, nis: "250034", nisn: "0108542998", nama: "AVISA BELVA AZALIA W", jk: "P", ttl: "BANDUNG, 30 Mei 2010", password: "BM8QFC", status: "Aktif" },
    { id: 4, nis: "250003", nisn: "0109782724", nama: "BUNGA HARUMI NURALISYA", jk: "P", ttl: "BANDUNG, 10 Juni 2010", password: "V1MD64", status: "Aktif" },
    { id: 5, nis: "210005", nisn: "0101972387", nama: "BUNGA INDI AZZHAHRANI", jk: "P", ttl: "BANDUNG, 27 Januari 2010", password: "SXSMHR", status: "Aktif" },
  ];

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-teal-600 rounded-xl text-white shadow-lg shadow-teal-500/20">
            <GraduationCap size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Data Siswa</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Master Data Santri Pendidikan Diniyah Formal</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-semibold">
            <Plus size={16} /> Tambah Siswa
          </button>
          <button className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg shadow-sm transition-all text-sm font-semibold">
            <UploadCloud size={16} /> Upload Siswa
          </button>
        </div>
      </header>

      {/* Banner Peringatan / Info */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-xl p-4 mb-6 flex items-start gap-3 shadow-sm">
        <div className="bg-amber-100 dark:bg-amber-800/50 p-1.5 rounded-full mt-0.5">
          <Info size={18} className="text-amber-600 dark:text-amber-400" />
        </div>
        <div className="text-sm text-amber-800 dark:text-amber-300/90 leading-relaxed">
          <p className="font-bold mb-1">Perhatian!!!</p>
          <p>Mulai tahun pelajaran ini, data siswa baru dikelola secara mandiri pada sistem RD PDF. Silakan pilih <strong>Tingkat</strong> dan <strong>Kelas</strong> terlebih dahulu untuk menampilkan data santri.</p>
        </div>
      </div>

      {/* Area Filter Tingkat & Kelas */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 mb-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
            <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Tingkat</label>
            <select 
                value={selectedTingkat}
                onChange={(e) => setSelectedTingkat(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white transition-all cursor-pointer"
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
                disabled={!selectedTingkat}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Area Konten Tabel */}
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
            <div className="ml-4 hidden sm:flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span>Show</span>
                <select className="border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 px-2 py-1 text-xs outline-none">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <span>entries</span>
            </div>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-9 pr-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 dark:text-slate-200 transition-all"
            />
          </div>
        </div>

        {/* LOGIKA KONDISIONAL TABEL */}
        {!selectedKelas ? (
            <div className="flex flex-col items-center justify-center p-16 text-slate-400 dark:text-slate-500 bg-slate-50/30 dark:bg-slate-900/20">
                <GraduationCap size={56} className="mb-4 opacity-20" />
                <p className="text-lg font-medium">No data available in table</p>
                <p className="text-sm mt-1 text-slate-400">Silakan pilih kelas terlebih dahulu untuk melihat daftar santri.</p>
            </div>
        ) : (
            <div className="overflow-x-auto">
            <table className="w-full text-sm text-left whitespace-nowrap">
                <thead>
                <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 font-semibold tracking-wide">
                    <th className="px-4 py-3 w-10 text-center">No</th>
                    <th className="px-4 py-3 text-center">Foto</th>
                    <th className="px-4 py-3">NIS</th>
                    <th className="px-4 py-3">NISN</th>
                    <th className="px-4 py-3">Nama Lengkap</th>
                    <th className="px-4 py-3 text-center">L/P</th>
                    <th className="px-4 py-3">TTL</th>
                    <th className="px-4 py-3">Password</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center min-w-[200px]">Aksi</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                {dummySiswa.map((item, index) => (
                    <tr key={item.id} className="hover:bg-teal-50/30 dark:hover:bg-teal-900/10 transition-colors">
                        <td className="px-4 py-3 text-center text-slate-500 dark:text-slate-400">{index + 1}</td>
                        
                        <td className="px-4 py-3 text-center">
                            <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300 flex items-center justify-center font-bold text-xs mx-auto">
                                {item.nama.charAt(0)}
                            </div>
                        </td>

                        <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300">{item.nis}</td>
                        <td className="px-4 py-3 font-mono text-xs text-slate-500 dark:text-slate-400">{item.nisn}</td>
                        <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{item.nama}</td>
                        
                        <td className="px-4 py-3 text-center">
                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-md text-xs font-bold ${
                                item.jk === 'L' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400' : 'bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-400'
                            }`}>
                                {item.jk}
                            </span>
                        </td>
                        
                        <td className="px-4 py-3 text-slate-600 dark:text-slate-400 text-xs">{item.ttl}</td>
                        
                        <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded w-16 text-center">
                                    {showPassword === item.id ? item.password : '••••••'}
                                </span>
                                <button 
                                    onClick={() => setShowPassword(showPassword === item.id ? null : item.id)}
                                    className="text-slate-400 hover:text-teal-500 transition-colors"
                                >
                                    {showPassword === item.id ? <EyeOff size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                        </td>

                        <td className="px-4 py-3 text-center">
                            <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">
                                {item.status}
                            </span>
                        </td>
                        
                        <td className="px-4 py-3">
                            <div className="flex justify-center gap-1.5">
                                <button className="flex items-center gap-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 dark:text-indigo-400 px-2 py-1.5 rounded text-[11px] font-semibold transition-colors">
                                    <Edit size={12} /> Edit
                                </button>
                                <button className="flex items-center gap-1 bg-amber-100 hover:bg-amber-200 text-amber-700 dark:bg-amber-900/30 dark:hover:bg-amber-900/50 dark:text-amber-400 px-2 py-1.5 rounded text-[11px] font-semibold transition-colors">
                                    <UserMinus size={12} /> Mutasi
                                </button>
                                <button className="flex items-center gap-1 bg-rose-100 hover:bg-rose-200 text-rose-700 dark:bg-rose-900/30 dark:hover:bg-rose-900/50 dark:text-rose-400 px-2 py-1.5 rounded text-[11px] font-semibold transition-colors">
                                    <Trash2 size={12} /> Hapus
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}

        {/* Footer Pagination (Hanya muncul jika kelas dipilih) */}
        {selectedKelas && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center text-xs">
            <p className="text-slate-500 dark:text-slate-400">Showing 1 to 5 of 32 entries</p>
            <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden">
                <button className="px-3 py-1.5 border-r border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">Previous</button>
                <button className="px-3 py-1.5 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 font-bold border-r border-slate-200 dark:border-slate-700">1</button>
                <button className="px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 transition-colors">2</button>
                <button className="px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">Next</button>
            </div>
            </div>
        )}

      </div>
    </main>
  );
}
