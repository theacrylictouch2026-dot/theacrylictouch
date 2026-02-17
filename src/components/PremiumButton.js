"use client";
import { motion } from "framer-motion";

export default function PremiumButton({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative px-10 py-4 bg-transparent text-white border border-gold-500 rounded-sm overflow-hidden group transition-all"
    >
      <span className="relative z-10 uppercase tracking-[0.3em] text-xs font-bold group-hover:text-black transition-colors duration-500">
        {children}
      </span>
      {/* Background Gold Animation */}
      <div className="absolute inset-0 bg-gold-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
    </motion.button>
  );
}