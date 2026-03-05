import React from "react";
import { motion } from "motion/react";
import { Zap, Shield, Rocket, BarChart3, Map } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Marketian LaunchPad™",
      icon: <Rocket className="h-10 w-10" />,
      desc: "The ultimate starter kit for new businesses. We handle everything from domain setup to initial social media presence.",
      price: "Custom Quote",
      features: ["Brand Identity", "Basic Website", "Social Media Setup", "GMB Optimization"]
    },
    {
      name: "ContentFlow™",
      icon: <Zap className="h-10 w-10" />,
      desc: "A streamlined content engine that ensures your brand stays active and relevant across all social channels without the stress.",
      price: "Monthly Subscription",
      features: ["Content Calendar", "Graphic Design", "Copywriting", "Automated Posting"]
    },
    {
      name: "BrandDNA™",
      icon: <Shield className="h-10 w-10" />,
      desc: "Deep-dive branding that uncovers your unique value proposition and translates it into a powerful visual and verbal identity.",
      price: "One-time Package",
      features: ["Logo Suite", "Brand Voice", "Visual Guidelines", "Market Positioning"]
    },
    {
      name: "LeadSprint™",
      icon: <BarChart3 className="h-10 w-10" />,
      desc: "Performance-focused ad campaigns designed to generate high-quality leads in the shortest possible time.",
      price: "Performance Based",
      features: ["Ad Management", "Landing Page Optimization", "Lead Tracking", "Weekly Reports"]
    },
    {
      name: "LocalBoost™",
      icon: <Map className="h-10 w-10" />,
      desc: "Dominate your local market. We optimize your local presence to ensure you're the first choice for nearby customers.",
      price: "Monthly Package",
      features: ["GMB Management", "Local SEO", "Review Strategy", "Local Citations"]
    }
  ];

  return (
    <div className="pt-40 pb-24 bg-[#0A0F1A] min-h-screen relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-bold uppercase tracking-[0.2em] text-xs"
          >
            Proprietary Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mt-6 mb-6 tracking-tighter"
          >
            Digital <span className="text-secondary-bg">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Engineered for efficiency and growth. Our digital products are designed to solve specific business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-[3rem] flex flex-col md:flex-row gap-8 items-start hover:border-accent/30 transition-all group"
            >
              <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                <div className="text-white group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold text-white">{product.name}</h3>
                  <span className="text-[10px] font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed font-light text-sm">{product.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-white/40">
                      <Zap className="h-3 w-3 text-accent mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
