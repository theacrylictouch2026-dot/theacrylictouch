import sql from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import RegistrationForm from "@/components/RegistrationForm";
import AICurator from "@/components/AICurator";

export default async function CompetitionPage() {
  let slotsFilled = 0;
  try {
    const registrations = await sql`SELECT count(*) FROM registrations`;
    slotsFilled = registrations[0].count;
  } catch (error) {
    console.error("Database connection error:", error);
  }

  const totalSlots = 50;
  const slotsLeft = totalSlots - slotsFilled;

  return (
    // 'relative' aur 'min-h-screen' zaroori hain floating elements ke liye
    <div className="min-h-screen bg-charcoal text-white py-20 px-8 relative overflow-x-hidden">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase">
          Battle of <span className="text-gold-500 italic">Brushes</span>
        </h1>
        <p className="text-zinc-500 mb-12 tracking-[0.4em] text-[10px] uppercase font-bold">
          Spring Edition 2026 • Exclusive Entry
        </p>

        {/* Slot Counter */}
        <div className="relative p-12 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden mb-16 shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-8xl font-black text-gold-500 mb-2 tabular-nums">{slotsLeft}</h2>
            <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-400 font-bold">Premium Slots Remaining</p>
          </div>
          <div className="mt-10 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
             <div 
               className="bg-gold-500 h-full transition-all duration-1000" 
               style={{ width: `${(slotsLeft / totalSlots) * 100}%` }}
             ></div>
          </div>
        </div>

        {/* Form Logic */}
        <SignedIn>
          <div className="max-w-md mx-auto">
            <RegistrationForm />
          </div>
        </SignedIn>

        <SignedOut>
          <div className="p-12 border border-white/5 bg-white/[0.02] rounded-3xl">
            <p className="text-zinc-400 mb-8 italic text-sm">Authentication required to secure a slot.</p>
            <SignInButton mode="modal">
               <button className="px-12 py-5 bg-gold-500 text-black font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-gold-400 transition-all cursor-pointer">
                 Identify Yourself
               </button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
      <div className="fixed bottom-10 right-10 z-[9999]">
         <AICurator />
      </div>

    </div>
  );
}