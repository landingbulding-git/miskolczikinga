/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function AcademyValueProps() {
  const scrollToForm = () => {
    const el = document.getElementById('academy-form-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const brands = [
    "MAKE UP FOR EVER", "INGLOT", "BEN NYE", "GRIMAS", "M·A·C", 
    "URBAN DECAY", "ANASTASIA BH", "JEFFREE STAR", "BOBBI BROWN", 
    "MAKE-UP ATELIER", "LIME CRIME", "COLOURPOP", "MADE BY MITCHELL", 
    "STACEY MARIE", "P.LOUISE"
  ];

  return (
    <section className="bg-cream-100 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <span className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase block mb-3">Kiemelkedő Értékajánlataink</span>
          <h2 className="font-serif-lux text-4xl sm:text-6xl font-light text-charcoal-800 tracking-tight leading-none mb-6">
            Minden részlet a szakmai <br /><span className="italic">kiteljesedést</span> szolgálja.
          </h2>
          <p className="text-lg text-charcoal-700/70 font-light leading-relaxed">
            Nem titkolózunk, nincsenek kötelező kezdőcsomagok. Az egyetlen célunk, hogy gondolkodó, sikeres szakembert képezzünk belőled gyorsan és alaposan.
          </p>
        </div>
        
        <div className="space-y-24 md:space-y-32">
          
          {/* Pillar 1: Material Security - Asymmetrical Layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-gold-500 uppercase tracking-luxury block">01 / Anyagellátás</span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl font-light text-charcoal-800 leading-tight">
                  Teljes Körű Prémium Anyagbiztosítás Extra Költségek Nélkül.
                </h3>
              </div>
              <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                A képzés teljes időtartama alatt minden luxus- és professzionális alapanyagot, nemzetközi világmárkák termékeit és csúcskategóriás eszközeit korlátlanul biztosítunk számodra szegedi és budapesti lakásstúdiónkban. Így egyetlen forintot sem kell felesleges, méregdrága kezdőcsomagokra kidobnod a beiratkozás előtt. Ráadásul Kinga segít összeállítani a kezdő sminkkészletedet a pénztárcád és a céljaid alapján. Pontosan megmutatja, mi az a 3 kulcspaletta, amivel a munka 90%-át megoldhatod felesleges kiadások nélkül.
              </p>
              
              <div className="pl-8 border-l border-gold-400/30">
                <p className="font-serif-lux text-lg italic text-charcoal-700 leading-relaxed">
                  „Hatalmas megkönnyebbülés volt, hogy nem kellett százezreket elköltenem sminkcuccokra az első nap előtt. Mindenből a legfelsőbb kategóriát kaptuk!”
                </p>
                <p className="text-[10px] font-bold tracking-luxury uppercase mt-4 text-gold-600">— D. Eszter, végzett tanuló</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800" 
                  alt="Profi sminkek" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-gold-300/20 -z-10" />
            </motion.div>
          </div>

          {/* Subdued Brand Bar - Replacing loud marquee */}
          <div className="py-12 border-y border-charcoal-800/5">
            <p className="text-[10px] font-bold tracking-luxury text-charcoal-700/40 uppercase text-center mb-10">
              A stúdiókban korlátlanul biztosított prémium márkáink
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-1000">
              {brands.slice(0, 8).map((brand, idx) => (
                <span key={idx} className="font-serif-lux text-sm tracking-widest font-medium text-charcoal-900">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 2: Retouched Portfolio - Reversed Asymmetry */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-gold-500 uppercase tracking-luxury block">02 / Portfólió</span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl font-light text-charcoal-800 leading-tight">
                  Saját Fotóstúdió és Retusált Digitális Portfólió.
                </h3>
              </div>
              <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                A tanfolyam során elkészített legjobb sminkjeidről és a záróvizsgádról professzionális stúdiókörnyezetben, csúcsminőségű felszereléssel készítünk képeket. A kész, precízen retusált, magazin-minőségű fotókból egy olyan komplett digitális portfóliót kapsz, amivel azonnal magabiztosan szerezhetsz prémium vendégeket.
              </p>

              <div className="pl-8 border-l border-gold-400/30">
                <p className="font-serif-lux text-lg italic text-charcoal-700 leading-relaxed">
                  „A portfólióm miatt azonnal megkerestek esküvői felkérésekkel az első hetekben. Döbbenetes magabiztosságot adott!”
                </p>
                <p className="text-[10px] font-bold tracking-luxury uppercase mt-4 text-gold-600">— László Petra</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800" 
                  alt="Portfólió fotózás" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-gold-300/20 -z-10" />
            </motion.div>
          </div>

          {/* Pillar 3: Metodika */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-gold-500 uppercase tracking-luxury block">03 / Metodika</span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl font-light text-charcoal-800 leading-tight">
                  Legkeresettebb, legmodernebb technikák.
                </h3>
              </div>
              <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                Úgy építettük fel a tanmenetet, hogy minden héten egy-egy modern, piacképes technikát sajátíts el mélyrehatóan. Miután az első napon végignézted a professzionális bemutatót és begyakoroltad a lépéseket, a második napon egy teljesen új karakterű modellen, más színvilággal alkotod meg ugyanazt a sminket. Így a technika azonnal rögzül a kezedben, és pontosan látni fogod, hogyan alakítsd a mozdulatokat a különböző arcformákhoz.
              </p>

              <button 
                onClick={scrollToForm}
                className="text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase border-b border-gold-400 pb-1 hover:text-gold-600 transition-colors"
              >
                Szeretném elsajátítani a technikákat &rarr;
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/2"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800" 
                  alt="Modell sminkelés" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
            </motion.div>
          </div>

          {/* Pillar 4: Bőrdiagnosztika */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 space-y-8"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-gold-500 uppercase tracking-luxury block">04 / Bőrdiagnosztika</span>
                <h3 className="font-serif-lux text-3xl sm:text-4xl font-light text-charcoal-800 leading-tight">
                  A bőr ismerete nélkül a smink csak festék. Itt az alapoktól sajátítod el a lényeget.
                </h3>
              </div>
              <p className="text-base text-charcoal-700/80 font-light leading-relaxed">
                Kinga közel 10 év kozmetikusi tapasztalattal tanít sminkelést. Nem divatos stílusokat tanulsz meg lemásolni, hanem megtanulod olvasni az arcot: a bőrtípust, a bőrdiagnózist, az arcformát. Azt a gondolkodást, amivel minden egyes vendéghez másképpen állsz hozzá – amitől a munkád prémium lesz, nem csak szép.
              </p>

              <button 
                onClick={scrollToForm}
                className="text-[11px] font-bold tracking-luxury text-charcoal-800 uppercase border-b border-gold-400 pb-1 hover:text-gold-600 transition-colors"
              >
                Megtanulom a bőr rejtelmeit &rarr;
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="lg:w-1/2"
            >
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=800" 
                  alt="Bőrdiagnosztika" 
                  className="w-full h-full object-cover grayscale-[0.1]"
                />
              </div>
            </motion.div>
          </div>

          {/* Portfolio Gallery - Participants' Work */}
          <div className="pt-16 md:pt-24 border-t border-charcoal-800/5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center">
                <p className="text-[11px] font-bold tracking-luxury text-gold-500 uppercase mb-3">
                  Képek korábbi résztvevők portfólióiból
                </p>
                <h3 className="font-serif-lux text-2xl sm:text-3xl font-light text-charcoal-800">
                  Végzett tanulóink munkái
                </h3>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: item * 0.05 }}
                    className="group relative overflow-hidden rounded-sm shadow-md bg-charcoal-900"
                  >
                    <div className="aspect-square">
                      <img
                        src={`https://images.unsplash.com/photo-155035529109-a90fb38ba796?auto=format&fit=crop&q=80&w=300&h=300`}
                        alt={`Résztvevő portfólió ${item}`}
                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
