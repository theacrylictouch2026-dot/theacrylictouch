"use client";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  // Yeh ensure karega ke animation sirf client par chale
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Jab tak client load nahi hota, simple hidden ya static nav dikhayein
    return <nav className="fixed top-0 w-full px-8 py-5 opacity-0" />;
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-[100] px-8 py-5 flex justify-between items-center 
                 bg-charcoal/40 backdrop-blur-md border-b border-white/5"
    >
      {/* Brand Logo */}
      <Link href="/" className="text-xl font-black tracking-[0.3em] text-white uppercase group">
        THE<span className="text-gold-500 group-hover:italic transition-all">ACRYLIC</span>TOUCH
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-10">
        <SignedIn>
          <div className="hidden md:flex gap-8 items-center text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">
            <Link href="/store" className="hover:text-gold-500 transition-colors">Store</Link>
            <Link href="/gallery" className="hover:text-gold-500 transition-colors">Gallery</Link>
            <Link href="/register-competition" className="hover:text-gold-500 transition-colors">Competition</Link>
          </div>
          <div className="pl-4 border-l border-white/10">
            <UserButton 
              fallbackRedirectUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8 border border-gold-500/50"
                }
              }}
            />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-all cursor-pointer">
              Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </motion.nav>
  );
}