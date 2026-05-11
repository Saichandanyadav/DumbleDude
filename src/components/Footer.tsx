"use client";
import { Camera, MessageCircle, Play, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#09090b] border-t border-white/5 pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image 
                  src="/logo.png" 
                  alt="DumbleDude Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-display text-2xl font-bold uppercase tracking-tighter text-white">
                Dumble<span className="text-[#a3e635]">Dude</span>
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-xs">
              Pushing boundaries since 2018. We don't just build muscles; we build legends. Join the community that never sleeps and never quits.
            </p>
            <div className="flex gap-5">
              <Camera className="text-zinc-500 hover:text-[#a3e635] cursor-pointer transition-all" size={20} />
              <MessageCircle className="text-zinc-500 hover:text-[#a3e635] cursor-pointer transition-all" size={20} />
              <Play className="text-zinc-500 hover:text-[#a3e635] cursor-pointer transition-all" size={20} />
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase mb-5 md:mb-6 text-[#a3e635] tracking-widest text-xs md:text-sm">Training Zones</h4>
            <ul className="space-y-3 text-zinc-400 text-sm font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Personal Training</li>
              <li className="hover:text-white cursor-pointer transition-colors">Crossfit Arena</li>
              <li className="hover:text-white cursor-pointer transition-colors">Powerlifting Pit</li>
              <li className="hover:text-white cursor-pointer transition-colors">Yoga & Recovery</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cardio HIIT Zone</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase mb-5 md:mb-6 text-[#a3e635] tracking-widest text-xs md:text-sm">The Headquarters</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#a3e635] shrink-0" />
                <span>456 Iron Avenue, <br /> Downtown Fitness District</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#a3e635] shrink-0" />
                <span>+1 (800) DUM-DUDE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#a3e635] shrink-0" />
                <span>beast@dumbledude.com</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl md:bg-transparent md:p-0">
            <h4 className="font-display font-bold uppercase mb-4 text-[#a3e635] tracking-widest text-xs md:text-sm">Stay In The Loop</h4>
            <p className="text-zinc-500 text-[10px] md:text-xs mb-4 uppercase font-bold">Get weekly workout tips & gear drops</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="bg-zinc-900 border border-white/10 px-4 py-3.5 text-xs focus:outline-none focus:border-[#a3e635] transition-all rounded text-white w-full"
              />
              <button className="bg-white text-black font-black text-xs py-3.5 uppercase tracking-tighter hover:bg-[#a3e635] transition-all rounded w-full">
                Subscribe to the Grind
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 text-center md:text-left">
          <div className="text-zinc-600 text-[9px] md:text-[10px] uppercase tracking-[0.2em] order-2 md:order-1">
            © {new Date().getFullYear()} DumbleDude Fitness Systems. No Excuses.
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-zinc-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold order-1 md:order-2">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of War</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;