"use client";
import { motion } from "framer-motion";
import { Dumbbell, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#a3e635]/10 blur-[80px] md:blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-[#a3e635]/30 bg-[#a3e635]/10 text-[#a3e635] text-[10px] md:text-sm font-medium mb-4 md:mb-6 uppercase tracking-wider">
            <Dumbbell size={14} className="md:w-4 md:h-4" /> The Ultimate Fitness Experience
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-bold mb-4 md:mb-6 tracking-tighter text-white leading-[1.1]">
            BE LEGENDARY WITH <br className="hidden sm:block" /> 
            <span className="text-[#a3e635]">DUMBLEDUDE</span>
          </h1>
          
          <p className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-zinc-400 text-sm md:text-xl mb-8 md:mb-10 px-2">
            Stop making excuses and start making progress. We provide the gear, 
            the grind, and the community to push you past your limits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a 
              href="#membership" 
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-[#a3e635] text-black font-bold rounded-md hover:bg-white transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm md:text-base"
            >
              Join the Tribe <ArrowRight size={18} />
            </a>
            <a 
              href="#features" 
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 border border-zinc-700 hover:bg-zinc-800 text-white transition-all font-bold rounded-md uppercase tracking-wider flex items-center justify-center text-sm md:text-base"
            >
              View Programs
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 md:bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 select-none pointer-events-none">
        <h2 className="text-[6rem] sm:text-[10rem] md:text-[15rem] font-display font-black leading-none text-white">
          STRENGTH POWER DISCIPLINE GRIND STRENGTH
        </h2>
      </div>
    </section>
  );
};

export default Hero;