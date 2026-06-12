"use client";

import { useState } from "react";
import { TrendingUp, Search, CheckSquare, XSquare, Send, GraduationCap, AlertCircle } from "lucide-react";

export default function NaikKelasPage() {
  // State dropdown
  const [asalTingkat, setAsalTingkat] = useState("");
  const [asalKelas, setAsalKelas] = useState("");
  const [tujuanTingkat, setTujuanTingkat] = useState("");
  const [tujuanKelas, setTujuanKelas] = useState("");

  // State pilihan siswa
  const [selectedSiswa, setSelectedSiswa] = useState<number[]>([]);

  // Dummy Data Siswa Asal (Misal siswa kelas 1 Wustho tahun lalu)
  const dummySiswaAsal = [
    { id: 1, nisn: "0064988630", nama: "NAFILAH AENIL MARDIYAH", jk: "P" },
    { id: 2, nisn: "0072214641", nama: "ANISSA FATMAH AL FADILLAH", jk: "P" },
    { id: 3, nisn: "0081234567", nama: "AHMAD ZAKIY", jk: "L" },
    { id: 4, nisn: "0091234568", nama: "BINTANG SAPUTRA", jk: "L" },
  ];

  // Dummy Data Siswa Tujuan (Misal siswa yang sudah masuk kelas 2 Wustho)
  const dummySiswaTujuan = [
    { id: 101, nisn: "0097495268", nama: "MUHAMMAD FAIZ", jk: "L" },
    { id: 102, nisn: "0084364426", nama: "MUHAMMAD RIZKI NURYZID", jk: "L" },
  ];

  const toggleSelect = (id: number) => {
    if (selectedSiswa.includes(id)) {
      setSelectedSiswa(selectedSiswa.filter(item => item !== id));
    } else {
      setSelectedSiswa([...selectedSiswa, id]);
    }
  };

  const selectAll = () => setSelectedSiswa(dummySiswaAsal.map(siswa => siswa.id));
  const clearSelection = () => setSelectedSiswa([]);

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
            <TrendingUp size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Kenaikan Kelas</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Menu ini digunakan untuk menaikkan siswa dari tingkatan sebelumnya.</p>
          </div>
        </div>
      </header>

      {/* Grid 2 Kolom (Kiri: Tahun Asal, Kanan: Tahun Tujuan) */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* ================= KOLOM KIRI: KELAS ASAL ================= */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">Kelas Asal</h3>
            </div>
            {/* Label Tahun Ajaran Asal */}
            <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-bold">
              TA 1446/1447 H
            </span>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            
            {/* Filter Kelas Asal */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
                <div className="flex-1">
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Tingkat</label>
                    <select 
                        value={asalTingkat} onChange={(e) => setAsalTingkat(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white transition-all cursor-pointer"
                    >
                        <option value="">-- Pilih --</option>
                        <option value="Wustho">Wustho</option>
                        <option value="Ulya">Ulya</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Kelas</label>
                    <select 
                        value={asalKelas} onChange={(e) => setAsalKelas(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white transition-all cursor-pointer"
                    >
                        <option value="">-- Pilih --</option>
                        <option value="1A">Kelas 1A</option>
                        <option value="1B">Kelas 1B</option>
                    </select>
                </div>
            </div>

            {/* Tabel Kelas Asal */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden flex-1 flex flex-col">
                <div className="p-3 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                    <div className="text-xs text-slate-500">Show 10 entries</div>
                    <div className="relative w-48">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input type="text" placeholder="Search..." className="w-full pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded focus:outline-none focus:border-blue-500 dark:text-white" />
                    </div>
                </div>
                
                <div className="overflow-y-auto flex-1 max-h-[250px]">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 sticky top-0 border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th className="px-4 py-2 w-10 text-center">Pilih</th>
                                <th className="px-4 py-2">NISN</th>
                                <th className="px-4 py-2">Nama Lengkap</th>
                                <th className="px-4 py-2 text-center">L/P</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                            {dummySiswaAsal.map((item) => {
                                const isSelected = selectedSiswa.includes(item.id);
                                return (
                                    <tr 
                                        key={item.id} 
                                        onClick={() => toggleSelect(item.id)}
                                        className={`cursor-pointer transition-colors ${
                                            isSelected 
                                            ? "bg-blue-50 dark:bg-blue-900/30" 
                                            : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                                        }`}
                                    >
                                        <td className="px-4 py-3 text-center">
                                            <div className={`w-4 h-4 rounded border flex items-center justify-center mx-auto ${
                                                isSelected ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300 dark:border-slate-600"
                                            }`}>
                                                {isSelected && <CheckSquare size={12} />}
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-400">{item.nisn}</td>
                                        <td className={`px-4 py-3 font-semibold ${isSelected ? "text-blue-700 dark:text-blue-400" : "text-slate-700 dark:text-slate-200"}`}>
                                            {item.nama}
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-500">{item.jk}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Aksi & Tombol Pindah */}
            <div className="mt-4 flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-medium">Terpilih: {selectedSiswa.length} Siswa</span>
                    <div className="flex gap-2">
                        <button onClick={selectAll} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 rounded-lg text-xs font-bold transition-colors">
                            <CheckSquare size={14} /> Select All
                        </button>
                        <button onClick={clearSelection} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 rounded-lg text-xs font-bold transition-colors">
                            <XSquare size={14} /> Clear
                        </button>
                    </div>
                </div>

                {/* Info Instruksi (Pengganti Kotak Merah) */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-lg p-3 flex gap-3 items-start">
                    <AlertCircle size={16} className="text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-blue-800 dark:text-blue-300">
                        <p className="font-bold mb-1">Perhatikan:</p>
                        <ul className="list-disc pl-4 space-y-0.5">
                            <li>Silakan pilih kelas asal</li>
                            <li>Silakan klik pada siswa yang akan dinaikkan</li>
                            <li>Silakan pilih kelas tujuan di panel kanan</li>
                        </ul>
                    </div>
                </div>
                
                <button 
                    disabled={selectedSiswa.length === 0}
                    className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                    Proses Kenaikan Kelas <Send size={18} />
                </button>
            </div>
          </div>
        </div>

        {/* ================= KOLOM KANAN: KELAS TUJUAN ================= */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TrendingUp size={18} className="text-emerald-500" />
              <h3 className="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">Kelas Tujuan</h3>
            </div>
            {/* Label Tahun Ajaran Tujuan */}
            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full text-xs font-bold">
              TA 1447/1448 H
            </span>
          </div>
          
          <div className="p-5 flex-1 flex flex-col">
            {/* Filter Kelas Tujuan */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
                <div className="flex-1">
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Tingkat</label>
                    <select 
                        value={tujuanTingkat} onChange={(e) => setTujuanTingkat(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white transition-all cursor-pointer"
                    >
                        <option value="">-- Pilih --</option>
                        <option value="Wustho">Wustho</option>
                        <option value="Ulya">Ulya</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">Kelas</label>
                    <select 
                        value={tujuanKelas} onChange={(e) => setTujuanKelas(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-sm px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:text-white transition-all cursor-pointer"
                    >
                        <option value="">-- Pilih --</option>
                        <option value="2A">Kelas 2A</option>
                        <option value="2B">Kelas 2B</option>
                    </select>
                </div>
            </div>

            {/* Tabel Kelas Tujuan */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden flex-1 flex flex-col mb-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                    <div className="text-xs text-slate-500">Show 10 entries</div>
                    <div className="relative w-48">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input type="text" placeholder="Search..." className="w-full pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded focus:outline-none focus:border-blue-500 dark:text-white" />
                    </div>
                </div>
                
                <div className="overflow-y-auto flex-1 max-h-[250px] bg-slate-50/30 dark:bg-slate-900/20">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 sticky top-0 border-b border-slate-200 dark:border-slate-700">
                            <tr>
                                <th className="px-4 py-2 w-10 text-center">No</th>
                                <th className="px-4 py-2">NISN</th>
                                <th className="px-4 py-2">Nama Lengkap</th>
                                <th className="px-4 py-2 text-center">L/P</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                            {dummySiswaTujuan.map((item, index) => (
                                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="px-4 py-3 text-center text-slate-400">{index + 1}</td>
                                    <td className="px-4 py-3 font-mono text-xs text-slate-600 dark:text-slate-400">{item.nisn}</td>
                                    <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">{item.nama}</td>
                                    <td className="px-4 py-3 text-center text-slate-500">{item.jk}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Info Instruksi Tujuan */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-lg p-3 flex gap-3 items-start mt-auto">
                <AlertCircle size={16} className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-amber-800 dark:text-amber-300">
                    <p className="font-bold mb-1">Perhatikan:</p>
                    <ul className="list-disc pl-4 space-y-0.5">
                        <li>Siswa yang diproses akan pindah ke tahun ajaran baru</li>
                        <li>Silakan klik pada siswa di tabel ini jika ingin <strong className="text-rose-600 dark:text-rose-400">dibatalkan</strong> naiknya</li>
                    </ul>
                </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}