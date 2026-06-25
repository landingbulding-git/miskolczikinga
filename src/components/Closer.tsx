/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle, Shield, LucideIcon } from 'lucide-react';
import LeadForm from './LeadForm';

interface ValueStackItem {
  text: string;
}

export default function Closer() {
  const valueStack: ValueStackItem[] = [
    { text: 'Havi limitált új vendég (Várakozási idő: 3-4 hét)' },
    { text: 'Kockázat- és fájdalommentes luxus eljárás' },
    { text: 'Természetes, „no-makeup” hatás garantálva' }
  ];

  return (
    <section id="lead-form-anchor" className="py-16 md:py-24 bg-charcoal-800 text-cream-100 overflow-hidden relative">
      {/* Editorial background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-charcoal-900/30 -skew-x-12 transform translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* Left Column - Editorial Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-900/10 border border-gold-400/30 text-amber-900 text-xs rounded-full font-mono font-bold tracking-wider uppercase">
                <AlertCircle className="w-3.5 h-3.5" />
                Korlátozott Szabad Helyek
              </span>
              <h2 className="font-serif-lux text-3.5xl sm:text-5xl font-light text-charcoal-800 tracking-tight leading-tight">
                Biztosítsd be az időtlen szépséget és időszuverenitást, amíg még vannak szabad helyeim.
              </h2>
              <div className="h-0.5 w-16 bg-gold-400" />
            </div>

            {/* Value Stack */}
            <div className="space-y-4 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-700 font-bold block">
                Amiért Érdemes Most Cselekedned:
              </span>
              <div className="space-y-3">
                {valueStack.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/70 border border-cream-300 p-3.5 rounded-xl">
                    <div className="p-1 rounded-full bg-gold-400/10 text-gold-600 shrink-0">
                      <CheckCircle className="w-4 h-4 fill-gold-400/5 text-gold-500" />
                    </div>
                    <span className="text-sm font-sans font-medium text-charcoal-800">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick trust assurances */}
            <div className="bg-white/30 border border-gold-200/40 p-4 rounded-xl flex items-center gap-3">
              <Shield className="w-5 h-5 text-gold-500 shrink-0" />
              <p className="text-[11px] sm:text-xs text-charcoal-800 leading-normal">
                <strong>15 éves anatómiai szakértelem. Nincs sablon, nincs kompromisszum.</strong> Minden tervezésnél és pigmentálandó pontnál a Te arcológiád a legmagasabb szintű orvos-kozmetikai előírások alapján van kezelve.
              </p>
            </div>
          </div>

          {/* RIGHT: Re-inserted Lead Capture Form */}
          <div className="lg:col-span-6">
            <LeadForm idPrefix="closer-bottom-atf" />
          </div>

        </div>
      </div>
    </section>
  );
}
