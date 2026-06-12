"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock, User, Calendar, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-4 md:p-8 relative overflow-hidden">
      
      {/* Efek Latar Belakang Neon */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-sky-600/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Kontainer Utama Login */}
      <div className="w-full max-w-5xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-[0_0_40px_rgba(14,165,233,0.15)] overflow-hidden flex flex-col md:flex-row z-10">
        
        {/* Kolom Kiri: Visual Branding */}
        <div className="w-full md:w-1/2 p-12 hidden md:flex flex-col justify-between relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-r border-slate-700/50">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
               {/* Gunakan logo RD PDF abang di sini */}
              <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h1 className="text-2xl font-extrabold text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                RD PDF
              </h1>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Digitalisasi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                Pendidikan Diniyah
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Sistem informasi akademik dan rapor terpadu untuk MAS AL-JAWAHIR.
            </p>
          </div>
          
          <div className="relative z-10 text-xs text-slate-500">
            <p>&copy; 2026 MAS AL-JAWAHIR. All rights reserved.</p>
            <p>RDM Versi 3.1 (Custom Build)</p>
          </div>
        </div>

        {/* Kolom Kanan: Form Login */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          <div className="max-w-sm w-full mx-auto">
            
            <div className="mb-10 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Selamat Datang</h3>
              <p className="text-slate-400 text-sm">Silakan login menggunakan akun RDM Anda.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Input Username */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-500" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Masukkan username/email" 
                    className="w-full pl-11 pr-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-white placeholder-slate-600 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Input Password */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Password</label>
                    <a href="#" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">Lupa Password?</a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-500" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="w-full pl-11 pr-12 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-white placeholder-slate-600 transition-all shadow-inner"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-sky-400 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {/* Select Tahun Ajaran */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tahun Ajaran</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar size={14} className="text-slate-500" />
                        </div>
                        <select className="w-full pl-9 pr-3 py-2.5 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-300 text-sm appearance-none cursor-pointer transition-all">
                            <option>2025/2026</option>
                            <option>2026/2027</option>
                        </select>
                    </div>
                </div>

                {/* Select Semester */}
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Semester</label>
                    <select className="w-full px-4 py-2.5 bg-slate-950/50 border border-slate-700/50 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-300 text-sm appearance-none cursor-pointer transition-all">
                        <option>Genap</option>
                        <option>Ganjil</option>
                    </select>
                </div>
              </div>

              {/* Tombol Login */}
              <button className="w-full mt-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all active:scale-[0.98]">
                Login Aplikasi
              </button>

            </form>
          </div>
        </div>

      </div>
    </main>
  );
}