"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";
import { askCurator } from "@/app/actions/ai-action";

export default function AICurator() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([{ role: "ai", text: "Welcome, Artist. Need guidance for the vault?" }]);
  const [loading, setLoading] = useState(false);

  const handleChat = async (e) => {
    e.preventDefault();
    if (!input) return;

    const userMsg = input;
    setInput("");
    setChat((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    const aiResponse = await askCurator(userMsg);
    setChat((prev) => [...prev, { role: "ai", text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 h-96 bg-charcoal/90 backdrop-blur-2xl border border-gold-500/30 rounded-3xl flex flex-col shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-gold-500/5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500">The AI Curator</span>
              <button onClick={() => setIsOpen(false)}><X size={16} className="text-zinc-500 hover:text-white" /></button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-xs ${msg.role === "user" ? "bg-gold-500 text-black font-medium" : "bg-white/5 text-zinc-300 border border-white/10"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && <div className="text-[10px] text-gold-500 animate-pulse uppercase tracking-widest">AI is thinking...</div>}
            </div>

            {/* Input Area */}
            <form onSubmit={handleChat} className="p-4 border-t border-white/5 flex gap-2">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-gold-500"
              />
              <button type="submit" className="bg-gold-500 text-black p-2 rounded-full hover:scale-110 transition-transform">
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gold-500 text-black p-4 rounded-full shadow-2xl shadow-gold-500/20 flex items-center gap-2 group"
      >
        <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="font-bold text-xs uppercase tracking-widest overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500">Curator</span>
      </motion.button>
    </div>
  );
}