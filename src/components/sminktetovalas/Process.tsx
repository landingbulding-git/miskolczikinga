/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      title: "Konzultáció & Egészségügyi szűrés",
      description: "Küldd be az űrlapot mindössze 30 másodperc alatt, és 24 órán belül felhívlak egy kellemes egyeztetésre. Már az első beszélgetés alatt kiszűrjük az esetleges kontraindikációkat, kizáró tényezőket a biztonságodért.",
      label: "Egyéni konzultáció"
    },
    {
      title: "Fájdalommentes érzéstelenítés és előrajzoláss",
      description: "A beleegyező nyilatkozat aláírása után megkezdjük a hatékony érzéstelenítést (injekció nélkü), majd milliméter pontosan megtervezem az arcodhoz illő egyedi formát. Te hagyod jóvá a vonalakat, én pedig egy felületes átkarcolással rögzítem a kontúrt.",
      label: "Személyre szabott tervezés"
    },
    {
      title: "Fájdalommentes pigmentálás és ingyenes korrekció",
      description: "Az átkarcolt területre felviszem a másodlagos érzéstelenítőt, ami akár 1–1,5 órára teljesen elzsibbasztja a bőrt a tökéletes kényelemért. Ezután mikrotűs géppel és orvosi tisztaságú színgarantált pigmentekkel elkészítem a finom satírt.",
      label: "Fájdalommentes beavatkozás"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block mb-4">Egyszerű & Átlátható Út</span>
          <h2 className="font-serif-lux text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal-800 tracking-tight leading-[1.1]">
            Érd el a 24/7 természetes szépséget 3 egyszerű lépésben.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group space-y-8"
            >
              <div className="relative">
                <span className="font-serif-lux text-6xl italic text-charcoal-800/10 transition-colors group-hover:text-gold-400/20 duration-500">
                  0{idx + 1}
                </span>
                <div className="absolute top-1/2 left-0 w-8 h-px bg-gold-400/30" />
              </div>

              <div className="space-y-4">
                <h3 className="font-serif-lux text-2xl font-light text-charcoal-800">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-700/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4">
                <span className="text-[9px] font-bold tracking-luxury text-gold-600 uppercase">
                  {step.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
