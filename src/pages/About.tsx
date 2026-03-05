import React from "react";
import { motion } from "motion/react";
import { Award, Target, Eye, User } from "lucide-react";

const About = () => {
  return (
    <div className="pt-40 pb-24 bg-[#0A0F1A] min-h-screen relative overflow-hidden text-white">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">Our Origin</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-[1.1] md:leading-[0.9]">
              The Marketian <br />
              <span className="text-secondary-bg">Philosophy</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Founded by <span className="text-white font-bold">Daksh Mehta</span> in Ellenabad, Haryana, 
              The Marketian was born from a simple realization: the digital world is a battlefield, 
              and traditional agencies are using outdated weapons.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-display font-bold text-white mb-2">100%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Aggression</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-white mb-2">24/7</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Innovation</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-[4rem] overflow-hidden relative group">
              <img
                src="https://picsum.photos/seed/agency/800/800"
                alt="The Marketian Office"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl max-w-[200px] hidden md:block">
              <p className="text-xs font-bold text-white leading-relaxed">
                "We don't just manage brands. We weaponize them."
              </p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-accent mt-4">— Daksh Mehta</p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Build", desc: "We construct digital foundations that are unbreakable and scalable." },
            { title: "Scale", desc: "We identify growth levers and pull them with surgical precision." },
            { title: "Dominate", desc: "We don't settle for market share. We aim for market control." }
          ].map((value, idx) => (
            <div key={idx} className="glass p-10 rounded-[3rem] space-y-6">
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-accent font-display font-bold text-xl">
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-display font-bold text-white">{value.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
