"use client"
import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";

export default function ProductCard({ art }) {
  const whatsappNumber = "919022611621"; 

  const handleWhatsApp = () => {
    const message = `Assalam o Alaikum! I'm interested in: *${art.title}*\nPrice: ₹${art.price}\n\nCan you share more details?`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col h-full group relative bg-[#0d0d0d] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 hover:border-gold-500/20"
    >
      {/* Fixed Height Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
        <img 
          src={art.image} 
          alt={art.title}
          className="w-full h-full object-cover" 
        />
        
        {art.slots < 5 && (
          <div className="absolute top-6 right-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
            <Zap size={10} fill="currentColor" /> ONLY {art.slots} SLOTS LEFT
          </div>
        )}
      </div>

      {/* Content Section - Flex grow ensures footer buttons align */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-auto">
          <p className="text-gold-500 text-[10px] uppercase tracking-[0.4em] mb-2 font-medium">
            {art.category}
          </p>
          <h3 className="text-xl font-bold text-white uppercase tracking-tighter leading-tight mb-4 min-h-[3rem]">
            {art.title}
          </h3>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-black text-white italic">₹{art.price}</span>
            <span className="text-zinc-600 line-through text-xs">₹{art.price + 1000}</span>
          </div>
        </div>

        <button 
          onClick={handleWhatsApp}
          className="w-full bg-white text-black h-14 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-gold-500 transition-colors flex items-center justify-center gap-3 shadow-xl"
        >
          <MessageCircle size={18} />
          Claim this Artwork
        </button>
      </div>
    </motion.div>
  );
}