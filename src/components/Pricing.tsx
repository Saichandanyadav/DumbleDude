"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "1,499",
    features: ["Access to Gym Floor", "Locker Room Access", "1 Fitness Assessment", "General Trainer Support"],
    highlight: false,
  },
  {
    name: "Pro Warrior",
    price: "2,999",
    features: ["All Starter Features", "Unlimited Group Classes", "Personalized Workout Plan", "Basic Nutrition Guide", "Steam Room Access"],
    highlight: true,
  },
  {
    name: "Elite Beast",
    price: "5,499",
    features: ["All Pro Features", "2 Personal Training Sessions", "Monthly Body Composition", "Dietitian Consultation", "Guest Passes (2/mo)"],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="membership" className="py-16 md:py-24 bg-[#09090b]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase mb-4 text-white leading-tight">
            Choose Your <span className="text-[#a3e635]">Challenge</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base max-w-md mx-auto">
            Flexible membership options designed for every fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`p-6 md:p-8 rounded-2xl border ${
                plan.highlight 
                  ? "border-[#a3e635] bg-zinc-900/50 md:scale-105 z-10" 
                  : "border-white/10 bg-zinc-900/20"
              } relative overflow-hidden flex flex-col h-full`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-[#a3e635] text-black text-[9px] md:text-[10px] font-bold px-3 md:px-4 py-1.5 rounded-bl-lg uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 uppercase text-white">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-6 md:mb-8">
                <span className="text-3xl md:text-4xl font-bold text-white">₹{plan.price}</span>
                <span className="text-zinc-500 text-xs md:text-sm">/month</span>
              </div>
              
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-zinc-300 leading-tight">
                    <Check size={16} className="text-[#a3e635] shrink-0 mt-0.5" /> 
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3.5 md:py-4 rounded-md text-xs md:text-sm font-bold uppercase tracking-widest transition-all ${
                plan.highlight 
                  ? "bg-[#a3e635] text-black hover:bg-white shadow-[0_0_20px_rgba(163,230,53,0.2)]" 
                  : "border border-white/20 text-white hover:bg-white/5"
              }`}>
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;