"use client";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const classes = {
  Mon: [
    { time: "06:30 AM", name: "Surya Namaskar & Yoga", coach: "Guru Sharma" },
    { time: "07:00 PM", name: "Heavy Weight Training", coach: "Arjun Singh" }
  ],
  Tue: [
    { time: "07:30 AM", name: "Desi Akhada HIIT", coach: "Vikram" },
    { time: "06:30 PM", name: "Kickboxing", coach: "Rahul Khanna" }
  ],
  Wed: [
    { time: "06:00 AM", name: "Functional Fitness", coach: "Priya Rao" },
    { time: "07:30 PM", name: "Bodybuilding Pro", coach: "Arjun Singh" }
  ],
  Thu: [
    { time: "07:00 AM", name: "Core & Stability", coach: "Guru Sharma" },
    { time: "06:00 PM", name: "Bolly-Burn Dance", coach: "Anjali" }
  ],
  Fri: [
    { time: "06:30 AM", name: "Endurance Run", coach: "Vikram" },
    { time: "07:00 PM", name: "Crossfit Challenge", coach: "Rahul Khanna" }
  ],
  Sat: [
    { time: "08:00 AM", name: "Zumba Party", coach: "Anjali" },
    { time: "11:00 AM", name: "Open Gym / Recovery", coach: "Staff" }
  ],
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<keyof typeof classes>("Mon");

  return (
    <section id="schedule" className="py-16 md:py-24 bg-[#09090b]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase italic text-white leading-tight">
            Training <span className="text-[#a3e635]">Timetable</span>
          </h2>
          <p className="text-zinc-500 mt-3 md:mt-4 uppercase tracking-[0.15em] text-[10px] md:text-sm font-semibold">
            Sessions sync with our expert gurus
          </p>
        </div>
        
        <div className="flex justify-start md:justify-center gap-2 md:gap-3 mb-10 md:mb-16 overflow-x-auto no-scrollbar pb-4 md:pb-0">
          {days.map((day) => (
            <button 
              key={day}
              onClick={() => setActiveDay(day as any)}
              className={`min-w-[80px] md:min-w-[100px] px-4 md:px-8 py-2.5 md:py-3 rounded-md font-black uppercase tracking-tighter transition-all duration-300 text-xs md:text-base shrink-0 ${
                activeDay === day 
                ? "bg-[#a3e635] text-black scale-105 md:scale-110 shadow-[0_0_20px_rgba(163,230,53,0.3)]" 
                : "bg-zinc-900 text-zinc-500 border border-white/5 hover:border-[#a3e635]/50"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {classes[activeDay].map((c, i) => (
            <div 
              key={i} 
              className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 bg-[#111113] rounded-xl md:rounded-2xl border border-white/5 hover:border-[#a3e635]/30 transition-all duration-500"
            >
              <div className="mb-6 md:mb-0 w-full md:w-auto">
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#a3e635] rounded-full animate-pulse" />
                  <p className="text-[#a3e635] text-base md:text-lg font-black tracking-widest">{c.time}</p>
                </div>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white uppercase italic group-hover:text-[#a3e635] transition-colors leading-tight">
                  {c.name}
                </h4>
              </div>
              
              <div className="flex flex-col md:items-end w-full md:w-auto pt-6 md:pt-0 border-t md:border-t-0 border-white/5">
                <p className="text-zinc-400 text-[10px] md:text-sm uppercase font-bold tracking-[0.2em] md:tracking-[0.3em] mb-4">
                  Led by <span className="text-white">{c.coach}</span>
                </p>
                <button className="w-full md:w-auto bg-white/5 text-white text-xs md:text-sm font-bold uppercase py-3.5 md:py-3 px-8 rounded-lg hover:bg-[#a3e635] hover:text-black transition-all duration-300 transform md:group-hover:translate-x-[-4px]">
                  Confirm Booking
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;