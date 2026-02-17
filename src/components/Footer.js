import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white">
              The <span className="text-gold-500">Acrylic</span> Touch
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Creating timeless hand-painted masterpieces and premium custom frames for your most cherished memories.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-4">Explore</h4>
            <a href="/store" className="text-zinc-500 hover:text-gold-500 transition-colors text-sm w-fit">Gallery Store</a>
            <a href="/register-competition" className="text-zinc-500 hover:text-gold-500 transition-colors text-sm w-fit">Art Competition</a>
            <a href="#" className="text-zinc-500 hover:text-gold-500 transition-colors text-sm w-fit">Terms of Service</a>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
             <h4 className="text-white font-bold uppercase text-xs tracking-widest">Connect</h4>
             <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold-500 hover:text-black transition-all text-zinc-400"><Instagram size={20}/></a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold-500 hover:text-black transition-all text-zinc-400"><Facebook size={20}/></a>
                <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold-500 hover:text-black transition-all text-zinc-400"><Mail size={20}/></a>
             </div>
          </div>
        </div>

        {/* Highlighted Owner Name */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © 2026 THE ACRYLIC TOUCH. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest italic">Curated & Crafted by</span>
            <span className="text-gold-500 font-bold tracking-widest text-xs uppercase border-b border-gold-500/30 pb-1">
              Misbah Salim Ansari
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}