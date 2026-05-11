"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Trophy, Zap, MapPin } from "lucide-react"; 

const stats = [
  { label: "Indian Athletes", value: "25k+", icon: <Users className="text-[#a3e635]" /> },
  { label: "Certified Gurus", value: "80+", icon: <ShieldCheck className="text-[#a3e635]" /> },
  { label: "Body Transformations", value: "98%", icon: <Trophy className="text-[#a3e635]" /> },
];

const services = [
  { 
    title: "Olympia Level Coaching", 
    desc: "Personal training from certified experts who understand Indian body types and genetics.", 
    icon: <Zap /> 
  },
  { 
    title: "Pure Veg & Non-Veg Diet", 
    desc: "Customized macro-balanced meal plans including Paneer-based or Chicken-based Indian diets.", 
    icon: <Trophy /> 
  },
  { 
    title: "Modern Desi Gym", 
    desc: "A powerhouse of international equipment mixed with traditional Indian strength values.", 
    icon: <MapPin /> 
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-[#09090b] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="p-6 md:p-10 border border-white/5 bg-zinc-900/30 rounded-2xl md:rounded-3xl text-center hover:border-[#a3e635]/20 transition-colors"
            >
              <div className="flex justify-center mb-4 md:mb-6 scale-110 md:scale-125">{stat.icon}</div>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-2 md:mb-3 text-white tracking-tighter">{stat.value}</h3>
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-[9px] md:text-[10px] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-display font-bold uppercase mb-4 italic text-white leading-tight">
            The <span className="text-[#a3e635]">Dude</span> Advantage
          </h2>
          <div className="h-1 w-20 md:w-32 bg-[#a3e635] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {services.map((service, idx) => (
            <div key={idx} className="group cursor-default p-0 md:p-4 text-center md:text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto md:mx-0 bg-zinc-900 text-[#a3e635] border border-white/10 flex items-center justify-center rounded-xl md:rounded-2xl mb-6 md:mb-8 group-hover:bg-[#a3e635] group-hover:text-black group-hover:rotate-[10deg] transition-all duration-500 shadow-xl">
                {service.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-5 uppercase tracking-tighter text-white italic">
                {service.title}
              </h4>
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-medium px-4 md:px-0">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;