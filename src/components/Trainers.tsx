"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Send } from "lucide-react";

const trainers = [
  {
    name: "Arjun Singh",
    role: "Head of Strength",
    specialty: "Bodybuilding & Powerlifting",
    image: "/trainer1.png",
  },
  {
    name: "Priya Rao",
    role: "Mobility Lead",
    specialty: "Yoga & Functional Flow",
    image: "/trainer2.png",
  },
  {
    name: "Rahul Khanna",
    role: "HIIT Specialist",
    specialty: "Crossfit & Endurance",
    image: "/trainer3.png",
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-[#09090b]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase italic text-white mb-10 md:mb-16">
          Meet The <span className="text-[#a3e635]">Gurus</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl md:rounded-2xl border border-white/10">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#a3e635] flex items-center justify-center text-black hover:bg-white transition-colors">
                      <Camera size={16} />
                    </a>
                    <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#a3e635] flex items-center justify-center text-black hover:bg-white transition-colors">
                      <Send size={16} />
                    </a>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase italic text-left leading-tight">
                    {trainer.name}
                  </h3>
                </div>
              </div>
              
              <div className="mt-4 md:mt-6 text-left px-2 md:px-0">
                <p className="text-[#a3e635] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs mb-1">
                  {trainer.role}
                </p>
                <p className="text-zinc-500 text-xs md:text-sm font-bold uppercase">
                  {trainer.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;