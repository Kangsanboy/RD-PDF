"use client";

import { useState } from "react";
import { Settings2, Save, Info, CheckCircle2 } from "lucide-react";

export default function PengaturanPage() {
  // State untuk menyimpan pilihan form
  const [tahunAjaran, setTahunAjaran] = useState("1447/1448 H");
  const [sistemPenilaian, setSistemPenilaian] = useState("Sistem Paket");
  const [semester, setSemester] = useState("Genap - Paket");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    // Simulasi simpan data
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    console.log("Data disimpan:", { tahunAjaran, sistemPenilaian, semester });
  };

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="mb-8">
        <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg">
                <Settings2 size={24} />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Pengaturan</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Konfigurasi tahun ajaran dan sistem penilaian aktif</p>
            </div>
        </div>
      </header>

      <div className="max-w-4xl space-y-6">
        
        {/* Banner Informasi (Warna Biru Khas RDM) */}
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-6 text-white shadow-md flex items-start gap-4">
          <div className="bg-white/20 p-2 rounded-full mt-1">
            <Info size={20} className="text-white" />
          </div>
          <p className="text-sm md:text-base leading-relaxed font-medium">
            Halaman ini digunakan untuk menentukan tahun ajaran dan semester aktif. 
            Silakan aktifkan tahun ajaran dan semester sesuai dengan periode yang sedang berjalan 
            di lembaga Pendidikan Diniyah Formal Anda.
          </p>
        </div>

        {/* Card Form Pengaturan */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Input Tahun Ajaran */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Tahun Ajaran Aktif
              </label>
              <div className="md:col-span-2">
                <select 
                  value={tahunAjaran}
                  onChange={(e) => setTahunAjaran(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition-all appearance-none cursor-pointer"
                >
                  <option value="1446/1447 H">1446/1447 H</option>
                  <option value="1447/1448 H">1447/1448 H</option>
                  <option value="1448/1449 H">1448/1449 H</option>
                </select>
              </div>
            </div>

            {/* Input Sistem Penilaian */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-8">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Sistem Penilaian
              </label>
              <div className="md:col-span-2">
                <select 
                  value={sistemPenilaian}
                  onChange={(e) => setSistemPenilaian(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition-all appearance-none cursor-pointer"
                >
                  <option value="Sistem Paket">Sistem Paket (Khusus IW)</option>
                  <option value="Sistem Kredit">Sistem Kredit (SKS)</option>
                </select>
              </div>
            </div>

            {/* Input Semester Aktif */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-8">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Semester Aktif
              </label>
              <div className="md:col-span-2">
                <select 
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition-all appearance-none cursor-pointer"
                >
                  <option value="Ganjil - Paket">Ganjil - Paket</option>
                  <option value="Genap - Paket">Genap - Paket</option>
                </select>
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex justify-end items-center gap-4">
            {isSaved && (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm animate-bounce">
                    <CheckCircle2 size={18} /> Berhasil disimpan!
                </div>
            )}
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              <Save size={20} /> Simpan Pengaturan
            </button>
          </div>
        </div>

        {/* Info Tambahan */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500">
            Perubahan pengaturan akan berdampak pada seluruh halaman input nilai dan cetak rapor santri.
        </p>
      </div>
    </main>
  );
}