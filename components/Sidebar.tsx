"use client";

import Link from 'next/link';
import Image from 'next/image'; // Tambahan untuk manggil gambar logo
import { useState } from 'react';
import { 
  LayoutDashboard, 
  Building2, 
  Settings, 
  Users, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck, 
  Database, 
  LogOut,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>('Guru');

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col fixed transition-colors duration-300">
      
      {/* Area Header (Logo & Tahun Ajaran) */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center gap-4">
        
        {/* Tempat Logo Gambar */}
        <div className="relative w-full h-16">
          <Image
            src="/logo rd-pdf.png"
            alt="Logo RD PDF"
            fill
            className="object-contain object-center drop-shadow-md"
            priority
          />
        </div>

        {/* Tahun Ajaran Hijriyah */}
        <div className="bg-sky-50 dark:bg-slate-800 text-sky-700 dark:text-sky-400 text-[10px] font-extrabold py-1.5 px-4 rounded-full border border-sky-200 dark:border-slate-600 tracking-widest shadow-sm">
          TAHUN AJARAN 1447/1448 H
        </div>
      </div>

      {/* Area Menu Navigasi */}
      <nav className="flex-1 overflow-y-auto py-5 custom-scrollbar">
        
        {/* === MAIN MENU === */}
        <ul className="space-y-1 mb-6 px-3">
          <li>
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg bg-blue-600 text-white shadow-md dark:shadow-none dark:bg-blue-600/90 transition-all">
              <LayoutDashboard size={18} />
              <span className="font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/profil" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
              <Building2 size={18} />
              <span className="font-medium">Profil Lembaga</span>
            </Link>
          </li>
        </ul>

        {/* === PENGATURAN === */}
        <div className="mb-6">
          <h2 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-6">Pengaturan</h2>
          <ul className="space-y-1 px-3">
            <li>
              <button onClick={() => toggleMenu('Lembaga')} className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <div className="flex items-center gap-3">
                  <Settings size={18} />
                  <span className="font-medium">Lembaga</span>
                </div>
                {openMenu === 'Lembaga' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {openMenu === 'Lembaga' && (
                <ul className="mt-1 ml-9 space-y-1">
                  <li><Link href="/pengaturan" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pengaturan</Link></li>
                  <li><Link href="/mapel" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mata Pelajaran</Link></li>
                  <li><Link href="/kelas" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kelas</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleMenu('Guru')} className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <div className="flex items-center gap-3">
                  <Users size={18} />
                  <span className="font-medium">Guru</span>
                </div>
                {openMenu === 'Guru' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {openMenu === 'Guru' && (
                <ul className="mt-1 ml-9 space-y-1">
                  <li><Link href="/guru" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Data Guru</Link></li>
                  <li><Link href="/mengajar" className="block px-3 py-2 text-sm text-blue-700 dark:text-blue-400 font-medium bg-blue-50 dark:bg-slate-800/50 rounded-lg transition-colors">Mengajar</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleMenu('Siswa')} className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <div className="flex items-center gap-3">
                  <GraduationCap size={18} />
                  <span className="font-medium">Siswa</span>
                </div>
                {openMenu === 'Siswa' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {openMenu === 'Siswa' && (
                <ul className="mt-1 ml-9 space-y-1">
                  <li><Link href="/siswa" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Data Siswa</Link></li>
                  <li><Link href="/riwayat" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Riwayat Siswa</Link></li>
                  <li><Link href="/pindah" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pindah Kelas</Link></li>
                  <li><Link href="/naik" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Naik Kelas</Link></li>
                  <li><Link href="/alumni" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Data Alumni</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button onClick={() => toggleMenu('Rapor')} className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                <div className="flex items-center gap-3">
                  <BookOpen size={18} />
                  <span className="font-medium">Rapor</span>
                </div>
                {openMenu === 'Rapor' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
              {openMenu === 'Rapor' && (
                <ul className="mt-1 ml-9 space-y-1">
                  <li><Link href="/kkm" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Nilai KKM</Link></li>
                  <li><Link href="/pengaturan-cetak" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pengaturan Cetak</Link></li>
                  <li><Link href="/status-nilai" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Status Nilai</Link></li>
                  <li><Link href="/cetak-rapor" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cetak Rapor</Link></li>
                  <li><Link href="/kirim-nilai" className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Kirim Nilai</Link></li>
                </ul>
              )}
            </li>

          </ul>
        </div>

        {/* === ADMINISTRASI === */}
        <div className="mb-6">
          <h2 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-6">Administrasi</h2>
          <ul className="space-y-1 px-3">
            <li>
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <ShieldCheck size={18} />
                <span className="font-medium">Admin Aplikasi</span>
              </Link>
            </li>
            <li>
              <Link href="/backup" className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all">
                <Database size={18} />
                <span className="font-medium">Backup Restore</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* === AKUN === */}
        <div>
          <h2 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-6">Akun</h2>
          <ul className="space-y-1 px-3">
            <li>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-rose-600 dark:text-rose-400 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all">
                <LogOut size={18} />
                <span className="font-medium">Logout</span>
              </button>
            </li>
          </ul>
        </div>

      </nav>
    </aside>
  );
}