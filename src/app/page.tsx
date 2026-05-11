import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Transformation from "@/components/Transformation";
import Schedule from "@/components/Schedule";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#09090b]">
      <Navbar />
      <Hero />
      <Features />
      <Transformation />
      <Schedule />
      <Trainers />
      <Pricing />
      <Footer />

      <div className="fixed bottom-6 right-6 z-[9999] pointer-events-none select-none">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg shadow-2xl flex flex-col items-end">
          <span className="text-[#a3e635] text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1">
            Demo Showcase
          </span>
          <h4 className="text-white text-sm font-display font-bold italic uppercase tracking-tighter">
            GrowthCraft <span className="text-zinc-500 text-[10px] lowercase font-normal italic not-uppercase tracking-normal">by</span> Sai
          </h4>
        </div>
      </div>
    </main>
  );
}