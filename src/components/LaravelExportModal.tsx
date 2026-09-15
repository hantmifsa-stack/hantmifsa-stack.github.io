import React, { useState, useEffect } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  FileCode, 
  Terminal, 
  FolderTree, 
  Download,
  ExternalLink
} from 'lucide-react';
import { sampleBladeCode, sampleControllerCode } from '../data/portfolioData';

interface LaravelExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaravelExportModal: React.FC<LaravelExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'blade' | 'controller' | 'routes' | 'tailwind' | 'setup'>('blade');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const routesCode = `<?php
// routes/web.php

use App\\Http\\Controllers\\PortfolioController;
use Illuminate\\Support\\Facades\\Route;

/*
|--------------------------------------------------------------------------
| Web Routes - Portofolio Developer Laravel & Tailwind
|--------------------------------------------------------------------------
*/

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::post('/contact', [PortfolioController::class, 'sendContact'])->name('contact.send');
`;

  const tailwindConfigCode = `// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
                mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                brand: {
                    50: '#fff1f2',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                }
            }
        },
    },
    plugins: [],
};
`;

  const setupGuide = `# 1. Buat Proyek Laravel Baru (Terminal / Command Prompt)
composer create-project laravel/laravel portfolio-app
cd portfolio-app

# 2. Pasang Tailwind CSS & Vite
npm install -D tailwindcss @tailwindcss/vite
npm install lucide-react

# 3. Jalankan Migrasi Database
php artisan migrate

# 4. Jalankan Server Pengembangan
# Terminal 1:
php artisan serve

# Terminal 2:
npm run dev

# 5. Buka Browser
# Kunjungi http://localhost:8000 untuk melihat portofolio Anda!
`;

  const getContentToCopy = () => {
    switch (activeTab) {
      case 'blade':
        return sampleBladeCode;
      case 'controller':
        return sampleControllerCode;
      case 'routes':
        return routesCode;
      case 'tailwind':
        return tailwindConfigCode;
      case 'setup':
        return setupGuide;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getContentToCopy());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 text-slate-100 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white">
                Struktur Kode Laravel 11 & Tailwind CSS
              </h2>
              <p className="text-[11px] text-slate-400">
                Salin langsung ke proyek Laravel lokal Anda (Blade, Controller, Routes)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 bg-slate-950/60 px-4 pt-2 gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('blade')}
            className={`px-3.5 py-2 rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'blade'
                ? 'bg-slate-900 text-rose-400 border-b-2 border-rose-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            app.blade.php
          </button>
          <button
            onClick={() => setActiveTab('controller')}
            className={`px-3.5 py-2 rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'controller'
                ? 'bg-slate-900 text-rose-400 border-b-2 border-rose-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            PortfolioController.php
          </button>
          <button
            onClick={() => setActiveTab('routes')}
            className={`px-3.5 py-2 rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'routes'
                ? 'bg-slate-900 text-rose-400 border-b-2 border-rose-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            routes/web.php
          </button>
          <button
            onClick={() => setActiveTab('tailwind')}
            className={`px-3.5 py-2 rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'tailwind'
                ? 'bg-slate-900 text-sky-400 border-b-2 border-sky-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            tailwind.config.js
          </button>
          <button
            onClick={() => setActiveTab('setup')}
            className={`px-3.5 py-2 rounded-t-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'setup'
                ? 'bg-slate-900 text-emerald-400 border-b-2 border-emerald-500 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Petunjuk CLI Terminal
          </button>
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-950 font-mono text-xs leading-relaxed text-slate-300">
          <pre className="whitespace-pre overflow-x-auto">
            <code>{getContentToCopy()}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Siap diintegrasikan ke Laravel 10 / 11 dengan Vite</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Kode Tab Ini</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
