"use client"
import { motion } from "framer-motion";
import { ART_DATA } from "@/data/artData";

export default function GalleryPage() {
  // Gallery mein hum images ko thoda random aur artistic dikhayenge
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Gallery Intro */}
        <header className="max-w-3xl mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-500 text-xs font-bold tracking-[0.5em] uppercase mb-4"
          >
            The Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none"
          >
            Artistic <br /> <span className="text-zinc-800 outline-text">Vision</span>
          </motion.h1>
          <p className="mt-8 text-zinc-500 text-lg leading-relaxed italic">
            "Every stroke tells a story of patience, passion, and the pursuit of perfection." 
            <span className="block mt-2 text-white not-italic font-bold">— Misbah Salim Ansari</span>
          </p>
        </header>

        {/* Cinematic Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          {ART_DATA.slice(0, 12).map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-xl ${
                // Random spanning for a "Museum" feel
                index % 3 === 0 ? "md:col-span-8 aspect-video" : "md:col-span-4 aspect-square"
              }`}
            >
              <img 
                src={art.image} 
                alt={art.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out cursor-none"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase mb-2">{art.category}</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{art.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Call to Action */}
        <div className="mt-32 text-center border-y border-white/5 py-20">
          <h2 className="text-4xl font-light italic text-zinc-400 mb-8">Want a custom masterpiece?</h2>
          <a 
            href="/store" 
            className="inline-block bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-gold-500 transition-all"
          >
            Visit the Collector's Store
          </a>
        </div>
      </div>
    </div>
  );
}