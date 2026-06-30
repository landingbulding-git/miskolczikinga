/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'sminktetovalas' | 'sminkkepzes';
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToForm = () => {
    const anchorId = currentPage === 'sminkkepzes' ? 'academy-form-anchor' : 'lead-form-anchor';
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-cream-100/90 backdrop-blur-md border-b border-cream-300/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between gap-4">
        
        {/* Brand logo & tagline representation */}
        <a 
          href="/" 
          className="flex flex-col cursor-pointer select-none shrink-0 no-underline"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-serif-lux font-bold text-base sm:text-2xl tracking-wider text-charcoal-900 uppercase">
              MISKOLCZI KINGA
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          <span className="text-[8px] sm:text-[11px] font-mono uppercase tracking-widest text-charcoal-700 font-medium whitespace-nowrap">
            Többszörös EB & VB Dobogós sminkmester
          </span>
        </a>

        {/* Dynamic Nav Tabs */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-wider">
          <a
            href="/"
            className={`cursor-pointer transition-all relative py-2 no-underline ${
              currentPage === 'home' ? 'text-charcoal-900 font-extrabold' : 'text-charcoal-700 hover:text-gold-650'
            }`}
          >
            RÓLAM
            {currentPage === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" />
            )}
          </a>
          <a
            href="/sminktetovalas"
            className={`cursor-pointer transition-all relative py-2 no-underline ${
              currentPage === 'sminktetovalas' ? 'text-charcoal-900 font-extrabold' : 'text-charcoal-700 hover:text-gold-650'
            }`}
          >
            SMINKTETOVÁLÁS
            {currentPage === 'sminktetovalas' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" />
            )}
          </a>
          <a
            href="/sminkkepzes"
            className={`cursor-pointer transition-all relative py-2 no-underline ${
              currentPage === 'sminkkepzes' ? 'text-charcoal-900 font-extrabold' : 'text-charcoal-700 hover:text-gold-650'
            }`}
          >
            SMINKISKOLA
            {currentPage === 'sminkkepzes' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400" />
            )}
          </a>
        </nav>

        {/* Action Elements */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-charcoal-800 p-2 hover:bg-cream-200 rounded transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button
            onClick={scrollToForm}
            className="bg-gold-400 text-charcoal-950 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase shadow-xl border border-gold-300 hover:bg-gold-300 transition-all cursor-pointer flex items-center gap-1.5 text-left"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="hidden sm:inline">{currentPage === 'sminkkepzes' ? 'Jelentkezem Kingához képzésre' : 'Jelentkezem egyéni tervezésre Kingához'}</span>
            <span className="sm:hidden">{currentPage === 'sminkkepzes' ? 'Képzés' : 'Konzultáció'}</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-cream-100/95 backdrop-blur-md border-b border-cream-300/30 md:hidden">
            <div className="flex flex-col items-start gap-0 px-4 py-4 max-w-7xl mx-auto">
              <a
                href="/"
                className={`w-full px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider rounded transition-colors no-underline ${
                  currentPage === 'home' ? 'bg-charcoal-900 text-cream-50' : 'text-charcoal-700 hover:bg-cream-200'
                }`}
              >
                Rólam
              </a>
              <a
                href="/sminktetovalas"
                className={`w-full px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider rounded transition-colors no-underline ${
                  currentPage === 'sminktetovalas' ? 'bg-charcoal-900 text-cream-50' : 'text-charcoal-700 hover:bg-cream-200'
                }`}
              >
                Sminktetoválás
              </a>
              <a
                href="/sminkkepzes"
                className={`w-full px-3 py-2 text-sm font-mono font-bold uppercase tracking-wider rounded transition-colors no-underline ${
                  currentPage === 'sminkkepzes' ? 'bg-charcoal-900 text-cream-50' : 'text-charcoal-700 hover:bg-cream-200'
                }`}
              >
                Sminkiskola
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
