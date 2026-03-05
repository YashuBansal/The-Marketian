import React from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, Users, Search, Globe, Smartphone, Palette, 
  Target, BarChart, Megaphone, MapPin, Layout as LayoutIcon, Laptop
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Digital Strategy",
      icon: <Target className="h-8 w-8" />,
      desc: "Comprehensive roadmaps tailored to your business goals, ensuring every move is strategic and impactful.",
      features: ["Market Research", "Competitor Analysis", "ROI Forecasting"]
    },
    {
      title: "Social Media Management",
      icon: <Users className="h-8 w-8" />,
      desc: "Building and engaging communities across platforms like Instagram, Facebook, LinkedIn, and Twitter.",
      features: ["Content Creation", "Community Management", "Social Analytics"]
    },
    {
      title: "Search Engine Optimization (SEO)",
      icon: <Search className="h-8 w-8" />,
      desc: "Improving your visibility on search engines to drive high-quality organic traffic to your website.",
      features: ["On-Page SEO", "Technical SEO", "Backlink Strategy"]
    },
    {
      title: "Google & Meta Ads",
      icon: <Megaphone className="h-8 w-8" />,
      desc: "High-converting paid campaigns that put your brand in front of the right audience at the right time.",
      features: ["PPC Management", "Retargeting", "Ad Creative Design"]
    },
    {
      title: "WordPress Development",
      icon: <Laptop className="h-8 w-8" />,
      desc: "Custom, responsive, and high-performance WordPress websites designed to convert visitors into customers.",
      features: ["Custom Themes", "E-commerce Setup", "Speed Optimization"]
    },
    {
      title: "Graphic Design",
      icon: <Palette className="h-8 w-8" />,
      desc: "Stunning visuals that communicate your brand message effectively and leave a lasting impression.",
      features: ["Social Media Graphics", "Marketing Collateral", "UI/UX Design"]
    },
    {
      title: "Branding & Identity",
      icon: <LayoutIcon className="h-8 w-8" />,
      desc: "Creating a unique brand voice and visual identity that sets you apart from the competition.",
      features: ["Logo Design", "Brand Guidelines", "Brand Storytelling"]
    },
    {
      title: "Local Business Marketing",
      icon: <MapPin className="h-8 w-8" />,
      desc: "Optimizing your Google My Business profile and local presence to dominate your local market.",
      features: ["GMB Optimization", "Local Citations", "Review Management"]
    }
  ];

  return (
    <div className="pt-40 pb-24 bg-[#0A0F1A] min-h-screen relative overflow-hidden">
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
            Our Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mt-6 mb-6 tracking-tighter"
          >
            Solutions for the <span className="text-secondary-bg">Modern Age</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            We offer a full suite of digital marketing services designed to help your brand build, scale, and dominate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 glass rounded-[3rem] hover:border-accent/30 transition-all group"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors">
                <div className="text-white group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed font-light text-sm">{service.desc}</p>
              <ul className="space-y-4">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-xs font-bold uppercase tracking-widest text-white/50">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
