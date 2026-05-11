"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const results = [
  { name: "Arjun Mehta", result: "Lost 18kg", image: "/transform1.png", category: "Fat Loss" },
  { name: "Priya Sharma", result: "Muscle Gain", image: "/transform2.png", category: "Body Recomp" },
  { name: "Rohan Das", result: "Lean Physique", image: "/transform3.png", category: "Strength" },
  { name: "Ananya Iyer", result: "Post-Pregnancy Fit", image: "/transform4.png", category: "Transformation" },
  { name: "Vikram Singh", result: "Bulking Phase", image: "/transform5.png", category: "Mass Gain" },
  { name: "Karan Malhotra", result: "Elite Endurance", image: "/transform6.png", category: "Athletic" },
];

const Transformation = () => {
  const infiniteResults = [...results, ...results];

  return (
    <section id="results" className="py-24 bg-[#09090b] overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase italic text-white">
          Real <span className="text-[#a3e635]">Results</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          className="flex gap-10 whitespace-nowrap py-4"
        >
          {infiniteResults.map((item, idx) => (
            <div 
              key={idx}
              className="group relative w-[700px] h-[380px] shrink-0 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 z-0 opacity-100">
                <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#a3e635_360deg)]" />
              </div>

              <div className="absolute inset-[2px] z-10 bg-zinc-900 rounded-[10px] overflow-hidden flex items-end justify-center">
                <Image 
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="relative z-20 p-10 w-full text-left whitespace-normal">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#a3e635] font-bold border border-[#a3e635]/30 bg-[#a3e635]/10 px-3 py-1 rounded mb-4 inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-4xl font-display font-bold text-white mb-1 tracking-tighter italic uppercase">
                        {item.name}
                      </h3>
                      <p className="text-zinc-300 font-bold uppercase text-base tracking-[0.1em]">
                        {item.result}
                      </p>
                    </div>
                    
                    <div className="mb-2">
                      <div className="w-14 h-14 rounded-full border-2 border-[#a3e635]/20 flex items-center justify-center group-hover:border-[#a3e635] group-hover:bg-[#a3e635] transition-all duration-500">
                         <div className="w-3 h-3 bg-[#a3e635] group-hover:bg-black rounded-full transition-colors" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0">
                     <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-[#a3e635]" 
                        />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-5 md:mt-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <h3 className="text-5xl md:text-8xl font-display font-black uppercase italic leading-none tracking-tighter text-white/10 select-none">
            NEXT IS YOURS
          </h3>
          <div className="absolute inset-0 flex items-center justify-center">
             <h3 className="text-3xl md:text-6xl font-display font-bold uppercase italic tracking-tighter text-white">
               NEXT IS <span className="text-[#a3e635]">YOURS</span>
             </h3>
          </div>
        </motion.div>
        <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-[0.5em] mt-4 font-bold">
          Start your transformation today
        </p>
      </div>
    </section>
  );
};

export default Transformation;