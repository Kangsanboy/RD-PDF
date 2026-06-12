"use client";

import { useState } from "react";
import { Printer, Save, MapPin, Calendar, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function PengaturanCetakPage() {
  const [tempatCetak, setTempatCetak] = useState("Soreang");
  const [tanggalCetak, setTanggalCetak] = useState("2026-06-12");
  const [watermark, setWatermark] = useState("RD-PDF AL-JAWAHIR");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    console.log("Pengaturan Cetak Disimpan:", { tempatCetak, tanggalCetak, watermark });
  };

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-lg">
            <Printer size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Pengaturan Cetak Rapor</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Konfigurasi parameter output dokumen PDF rapor santri</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-8 space-y-8">
            
            {/* Tempat Cetak */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                <MapPin size={16} className="text-blue-500" /> Tempat Cetak
              </label>
              <input 
                type="text" 
                value={tempatCetak}
                onChange={(e) => setTempatCetak(e.target.value)}
                placeholder="Contoh: Soreang"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition-all"
              />
              <p className="text-[11px] text-slate-400">Isi dengan nama Kabupaten atau Kecamatan lokasi madrasah.</p>
            </div>

            {/* Tanggal Cetak */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                <Calendar size={16} className="text-blue-500" /> Tanggal Cetak Rapor
              </label>
              <input 
                type="date" 
                value={tanggalCetak}
                onChange={(e) => setTanggalCetak(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition-all cursor-pointer"
              />
            </div>

            {/* Watermark */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                <ShieldCheck size={16} className="text-blue-500" /> Watermark Dokumen
              </label>
              <input 
                type="text" 
                value={watermark}
                onChange={(e) => setWatermark(e.target.value)}
                placeholder="Kosongkan jika tidak ingin menggunakan watermark"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:text-white transition-all"
              />
              <p className="text-[11px] text-slate-400">Teks ini akan muncul secara transparan di latar belakang halaman rapor.</p>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex justify-end items-center gap-4">
            {isSaved && (
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm">
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
      </div>
    </main>
  );
}