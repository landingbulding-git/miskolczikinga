/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import LeadForm from './LeadForm';

export default function Closer() {
  const benefits = [
    "Egyéni konzultáció és arc-diagnózis: Személyre szabott tervezés a Te arcarchitektúrádra",
    "Prémium kétfázisú érzéstelenítés: Fájdalommentes, luxus eljárás",
    "Ingyenes korrekció: Az alapár tartalmazza a tökéletesítő második alkalmat",
    "15 éves bajnoki garancia: Nemzetközi szintű szépítőmunka",
    "Esztétikus gyógyulás: Modern pigmentálási technikám természetes hatást garantál"
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
              <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block">Jelentkezés konzultációra</span>
              <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
                Biztosítsd be az időtlen szépséget. <br /><span className="italic">Most, amíg még van hely.</span>
              </h2>
            </div>

            <p className="text-lg text-cream-100/70 font-light leading-relaxed max-w-xl">
              Csak korlátozott számú vendéget fogadok havi szinten, hogy minden egyes alkalomra 100%-os figyelmet tudjak fordítani. Az arc egyedi, az Ön szépségvonalai sablonok nélkül érdemelnek kezelést. Ezt garantáljuk 15 év nemzetközi bajnoki tapasztalattal.
            </p>

            <div className="space-y-6 pt-4">
              <h4 className="text-[11px] font-bold tracking-luxury text-gold-400/60 uppercase">Amit megkapsz</h4>
              <ul className="space-y-4">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-base text-cream-100/80 font-light">
                    <span className="text-gold-500 font-bold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-1/2 w-full">
            <LeadForm idPrefix="closer-form" />
          </div>

        </div>
      </div>
    </section>
  );
}
