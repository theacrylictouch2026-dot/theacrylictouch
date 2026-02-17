"use client";
import { useState } from "react";
import { registerUser } from "@/app/register-competition/actions";
import { jsPDF } from "jspdf";
import PremiumButton from "./PremiumButton";

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleDownloadPDF = (name, receiptId) => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a6", // Chota premium ticket size
    });

    // Premium Theme Styling
    doc.setFillColor(18, 18, 18); // Charcoal Background
    doc.rect(0, 0, 105, 148, "F");
    
    doc.setTextColor(197, 160, 89); // Gold Color
    doc.setFontSize(16);
    doc.text("THE ACRYLIC TOUCH", 10, 20);
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text("COMPETITION TICKET 2026", 10, 30);
    
    doc.setDrawColor(197, 160, 89);
    doc.line(10, 35, 95, 35); // Divider

    doc.setFontSize(12);
    doc.text(`PARTICIPANT: ${name.toUpperCase()}`, 10, 50);
    
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("RECEIPT ID:", 10, 65);
    doc.setTextColor(197, 160, 89);
    doc.text(receiptId, 10, 72);

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.text("Show this ticket at the entry or upload during", 10, 100);
    doc.text("the online submission phase.", 10, 105);

    doc.save(`TheAcrylicTouch_Ticket_${receiptId}.pdf`);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("Registering in Vault...");

    const formData = new FormData(e.target);
    const result = await registerUser(formData);

    if (result.success) {
      setStatus("Success! Downloading Ticket...");
      handleDownloadPDF(formData.get("name"), result.receiptId);
    } else {
      setStatus("Error: " + result.error);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
      <div className="text-left">
        <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-2">Full Name</label>
        <input 
          name="name" 
          required 
          className="w-full bg-zinc-900 border border-white/10 p-3 rounded-lg text-white focus:border-gold-500 outline-none transition-all"
          placeholder="Alexander Voss"
        />
      </div>
      
      <div className="text-left">
        <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 block mb-2">Email Address</label>
        <input 
          name="email" 
          type="email" 
          required 
          className="w-full bg-zinc-900 border border-white/10 p-3 rounded-lg text-white focus:border-gold-500 outline-none transition-all"
          placeholder="voss@luxury.com"
        />
      </div>

      <PremiumButton type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Download PDF"}
      </PremiumButton>

      {status && <p className="text-xs text-gold-500 mt-4 tracking-widest uppercase">{status}</p>}
    </form>
  );
}