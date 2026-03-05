import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "The E-commerce Revolution",
      category: "Performance Marketing",
      image: "https://picsum.photos/seed/shop/800/600",
      stats: "300% ROI"
    },
    {
      title: "Local Dominance",
      category: "SEO & GMB",
      image: "https://picsum.photos/seed/local/800/600",
      stats: "#1 Ranking"
    },
    {
      title: "Brand Rebirth",
      category: "Branding & Identity",
      image: "https://picsum.photos/seed/brand/800/600",
      stats: "Global Reach"
    },
    {
      title: "Social Surge",
      category: "Social Media",
      image: "https://picsum.photos/seed/social/800/600",
      stats: "1M+ Reach"
    },
    {
      title: "The Tech Stack",
      category: "Web Development",
      image: "https://picsum.photos/seed/code/800/600",
      stats: "0.5s Load"
    },
    {
      title: "Visual Impact",
      category: "Graphic Design",
      image: "https://picsum.photos/seed/design/800/600",
      stats: "Award Winning"
    }
  ];

  return (
    <div className="pt-40 pb-24 bg-[#0A0F1A] min-h-screen relative overflow-hidden text-white">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-bold uppercase tracking-[0.2em] text-xs"
          >
            Proof of Concept
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mt-6 mb-6 tracking-tighter"
          >
            Case <span className="text-secondary-bg">Studies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Results speak louder than promises. Explore how we've dismantled competition for our partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass rounded-[3rem] overflow-hidden aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Result</span>
                  <span className="text-secondary-bg font-display font-bold text-xl">{project.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
