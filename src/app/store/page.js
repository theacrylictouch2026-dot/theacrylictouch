"use client"
import { useState } from "react";
import { ART_DATA } from "@/data/artData";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

export default function StorePage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Hand Painted Frames", "Printed Frames"];

  const filteredArt = filter === "All" 
    ? ART_DATA 
    : ART_DATA.filter(art => art.category === filter);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic mb-8"
          >
            The <span className="text-gold-500">Vault</span>
          </motion.h1>

          {/* Luxury Filter Buttons */}
          <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest transition-all duration-300 ${
                  filter === cat 
                  ? "bg-gold-500 text-black" 
                  : "bg-transparent text-zinc-500 border border-white/10 hover:border-gold-500/50"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        {/* --- FIXED HEIGHT GRID START --- */}
        <motion.div 
          layout
          // 'columns' hata kar 'grid' use kiya hai taaki heights same rahein
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredArt.map((art) => (
              <motion.div
                key={art.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full" // Pure card ko full height lega
              >
                <ProductCard art={art} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* --- FIXED HEIGHT GRID END --- */}

        {filteredArt.length === 0 && (
          <p className="text-center text-zinc-500 mt-20 italic">No masterpieces found in this category.</p>
        )}
      </div>
    </div>
  );
}