"use client";

import Image from "next/image";
import { useState } from "react";
import { Upload, Save, KeyRound, Building, UserCheck, Edit2, X } from "lucide-react";

export default function ProfilPage() {
  // State untuk mengatur mode edit data lembaga
  const [isEditingLembaga, setIsEditingLembaga] = useState(false);

  return (
    <main className="flex-1 ml-64 p-8 bg-slate-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Halaman */}
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Profil Lembaga</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Kelola informasi data lembaga dan akun administrator</p>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* ================= KOLOM KIRI ================= */}
        <div className="space-y-8">
          
          {/* Kartu Logo */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-4 bg-slate-100 dark:bg-slate-700 rounded-2xl p-2 border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center">
              <Image 
                src="/logo rd-pdf.png" 
                alt="Logo Lembaga" 
                fill 
                className="object-contain p-2"
              />
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 dark:text-white uppercase tracking-wide">
              MAS AL-JAWAHIR
            </h3>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-6">Proktor</span>
            
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm">
              <Upload size={16} /> Upload Logo Baru
            </button>
            <p className="text-xs text-slate-400 mt-4 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-lg w-full border border-slate-100 dark:border-slate-700">
              Gunakan logo dengan ukuran maksimal 200x200 px agar cetak rapor tidak lambat.
            </p>
          </div>

          {/* Kartu Ubah Password */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-center gap-2">
              <KeyRound size={18} className="text-slate-500 dark:text-slate-400" />
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Ubah Password</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">Password Baru</label>
                <input type="password" placeholder="Masukkan password baru" className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white" />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">Konfirmasi Password</label>
                <input type="password" placeholder="Ulangi password baru" className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white" />
              </div>
              <div className="pt-2 flex justify-end">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
                  <Save size={16} /> Simpan
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* ================= KOLOM KANAN ================= */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Kartu Detail Data Lembaga */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden transition-all duration-300">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building size={18} className="text-slate-500 dark:text-slate-400" />
                <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Data Detail Lembaga</h3>
              </div>
              
              {/* Tombol Toggle Edit Data */}
              <button 
                onClick={() => setIsEditingLembaga(!isEditingLembaga)}
                className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                  isEditingLembaga 
                    ? "bg-rose-100 text-rose-600 hover:bg-rose-200 dark:bg-rose-900/30 dark:text-rose-400" 
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
                }`}
              >
                {isEditingLembaga ? <><X size={14}/> Batal Edit</> : <><Edit2 size={14}/> Edit Data</>}
              </button>
            </div>
            
            <div className="p-0">
              <ul className="divide-y divide-slate-100 dark:divide-slate-700/50">
                
                {/* Form Item Component (Supaya Kodenya Rapi) */}
                {[
                  { label: "Nama Lembaga", value: "MAS AL-JAWAHIR" },
                  { label: "NSM / NSPP", value: "131232040111" },
                  { label: "NPSN", value: "69976325" },
                  { label: "Alamat", value: "JL. LEMBUR TEGAL" },
                  { label: "Kecamatan", value: "SOREANG" },
                  { label: "Kabupaten/Kota", value: "KABUPATEN BANDUNG" },
                  { label: "Provinsi", value: "JAWA BARAT" },
                ].map((item, index) => (
                  <li key={index} className="flex flex-col sm:flex-row sm:items-center px-6 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <span className="text-sm font-medium text-slate-500 w-48">{item.label}</span>
                    {isEditingLembaga ? (
                      <input 
                        type="text" 
                        defaultValue={item.value} 
                        className="flex-1 mt-1 sm:mt-0 px-3 py-1.5 text-sm bg-white dark:bg-slate-900 border border-blue-300 dark:border-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all shadow-sm"
                      />
                    ) : (
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1 sm:mt-0">{item.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Munculkan tombol simpan HANYA saat mode edit aktif */}
              {isEditingLembaga && (
                <div className="p-5 border-t border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-end">
                  <button 
                    onClick={() => setIsEditingLembaga(false)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm"
                  >
                    <Save size={16} /> Simpan Data Lembaga
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Kartu Pimpinan */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-center gap-2">
              <UserCheck size={18} className="text-slate-500 dark:text-slate-400" />
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">Pimpinan (Kepala)</h3>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Nama Pimpinan</label>
                <input 
                  type="text" 
                  defaultValue="Dr. H. Furqon Arifin, S.Pd.I., M.M.Pd" 
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white font-medium" 
                />
                <span className="text-[11px] text-slate-400 mt-1 block">Tuliskan nama lengkap beserta gelar untuk dicetak di rapor.</span>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">NIP / NIY</label>
                <input 
                  type="text" 
                  placeholder="Masukkan NIP atau kosongkan jika tidak ada" 
                  className="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white" 
                />
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm">
                  <Save size={16} /> Simpan Pimpinan
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
