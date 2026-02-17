"use client";
import { motion } from "framer-motion";
import PremiumButton from "@/components/PremiumButton";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Globe, Star, Quote } from "lucide-react";

// Fake Reviews Data
const REVIEWS = [
  {
    name: "Alexander Voss",
    role: "Art Collector",
    text: "The texture and depth of the acrylic pieces are unmatched. A true luxury experience.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Interior Designer",
    text: "Found the perfect centerpiece for my penthouse project. The AI assistant is a genius.",
    rating: 5
  },
  {
    name: "Marcello Rossi",
    role: "Gallery Owner",
    text: "The competition standards are high. It's the new benchmark for modern artists.",
    rating: 4
  }
];

export default function Home() {
  return (
    <div className="bg-charcoal text-white selection:bg-gold-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 blur-[120px] rounded-full"></div>
        <div className="relative z-10 text-center px-4">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-gold-500 tracking-[0.6em] uppercase text-[10px] mb-6 font-medium">
            Exclusive Art Collective
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            THE <span className="text-gold-500 italic">ACRYLIC</span><br/> TOUCH
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="text-zinc-500 max-w-lg mx-auto mb-12 text-sm md:text-base font-light tracking-wide leading-relaxed">
            Where every stroke tells a story of luxury. Discover curated masterpieces or join our global competition.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
            <Link href="/dashboard">
              <PremiumButton>Enter the Vault</PremiumButton>
            </Link>
          </motion.div>
        </div>
        <div className="absolute inset-8 border border-white/5 pointer-events-none"></div>
      </section>

      {/* 2. LIVE TICKER */}
      <div className="bg-gold-500 py-3 overflow-hidden whitespace-nowrap border-y border-gold-600">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block text-black font-bold text-[10px] uppercase tracking-[0.3em]"
        >
          LIMITED SLOTS LEFT FOR SPRING COMPETITION — REGISTER NOW — NEW MASTERPIECES ADDED TO THE VAULT — &nbsp;
          LIMITED SLOTS LEFT FOR SPRING COMPETITION — REGISTER NOW — NEW MASTERPIECES ADDED TO THE VAULT — &nbsp;
        </motion.div>
      </div>

      {/* 3. STATS SECTION */}
      <section className="py-24 px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: <Globe size={20}/>, label: "Global Artists", val: "50+" },
            { icon: <ShieldCheck size={20}/>, label: "Verified Pieces", val: "100%" },
            { icon: <Zap size={20}/>, label: "AI Assisted", val: "24/7" },
            { icon: <ArrowRight size={20}/>, label: "New Art Weekly", val: "15+" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="text-gold-500 bg-gold-500/5 p-4 rounded-full border border-gold-500/20">{item.icon}</div>
              <div>
                <h4 className="text-2xl font-bold text-white">{item.val}</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. REVIEWS SECTION (New Animated Glass Cards) */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 tracking-[0.4em] uppercase text-[10px] mb-4">Elite Feedback</h2>
          <h3 className="text-4xl font-bold italic">Voice of the Connoisseurs</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 group overflow-hidden"
            >
              {/* Animated Glow on Hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-gold-500/0 via-gold-500/20 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <Quote className="text-gold-500/20 absolute top-4 right-4" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                ))}
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic relative z-10">
                "{review.text}"
              </p>

              <div className="relative z-10">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">{review.name}</h4>
                <p className="text-gold-500 text-[10px] uppercase mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED EXPERIENCE SECTION */}
      <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            THE FUTURE OF <br /> 
            <span className="text-gold-500 font-serif italic font-light">Art Curation</span>
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed font-light">
            Hamara AI Assistant sirf ek chatbot nahi hai, ye ek connoisseur hai. 
            Aapke taste aur space ke mutabiq, hum aapko suggest karte hain woh art 
            jo aapki deewaron ki shaan ban jaye.
          </p>
          <Link href="/store" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gold-500">
            Browse the store <span className="group-hover:translate-x-2 transition-transform underline"><ArrowRight size={16}/></span>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent z-10"></div>
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1541963463532-d68292c34b19')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-[2s]"></div>
        </motion.div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-12 px-8 border-t border-white/5 text-center">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em]">
          &copy; 2026 The Acrylic Touch. Designed for the Elite.
        </p>
      </footer>

    </div>
  );
}