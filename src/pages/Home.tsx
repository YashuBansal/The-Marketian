import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Users, Zap, Globe, Search, Play, ArrowUpRight } from "lucide-react";

const Home = () => {
  const services = [
    { title: "Strategy", icon: <TrendingUp className="h-5 w-5" />, size: "col-span-2 row-span-1", color: "bg-accent/20" },
    { title: "Social", icon: <Users className="h-5 w-5" />, size: "col-span-1 row-span-2", color: "bg-primary/40" },
    { title: "SEO", icon: <Search className="h-5 w-5" />, size: "col-span-1 row-span-1", color: "bg-secondary-bg/10" },
    { title: "Web", icon: <Globe className="h-5 w-5" />, size: "col-span-2 row-span-1", color: "bg-white/5" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0A0F1A] text-white selection:bg-accent selection:text-white">
      {/* Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-secondary-bg/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-1.5 glass rounded-full text-xs font-bold tracking-[0.2em] uppercase text-secondary-bg"
            >
              <Zap className="h-3 w-3 mr-2 fill-current" />
              Build . Scale . Dominate
            </motion.span>

            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-display font-extrabold leading-[1.1] md:leading-[0.85] tracking-tighter text-gradient">
              THE <br />
              MARKETIAN
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              We engineer digital dominance for brands that refuse to be second. 
              Data-driven strategy meets creative rebellion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-white text-primary rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10">Start Your Legacy</span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="flex items-center space-x-3 text-white font-bold hover:text-secondary-bg transition-colors"
              >
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center group">
                  <Play className="h-4 w-4 fill-current transition-transform group-hover:scale-110" />
                </div>
                <span>Our Methods</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* Bento Grid Services */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest">Our Capabilities</h2>
              <p className="text-4xl md:text-6xl font-display font-bold leading-tight">
                Tools for the <br />
                <span className="text-secondary-bg">Modern Age</span>
              </p>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                We've dismantled the traditional agency model to build something faster, smarter, and more aggressive.
              </p>
              <Link to="/services" className="inline-flex items-center space-x-2 text-white font-bold group">
                <span>Explore all services</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  className={`${s.size} ${s.color} glass rounded-[2rem] p-8 flex flex-col justify-between group cursor-pointer`}
                >
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">{s.title}</h3>
                    <div className="flex items-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      View details <ArrowUpRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="col-span-1 row-span-1 glass rounded-[2rem] p-8 flex items-center justify-center border-dashed border-white/20">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest text-center">More <br />Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Split Feature Section */}
      <section className="py-32 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square glass rounded-[3rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
                  alt="Tech"
                  className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[2rem] animate-float">
                <p className="text-4xl font-display font-bold text-secondary-bg">245%</p>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Avg. Growth</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest">The Philosophy</h2>
              <p className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Data is the Fuel. <br />
                Creativity is the <span className="text-accent">Engine.</span>
              </p>
              <div className="space-y-6">
                {[
                  { t: "Precision Targeting", d: "We find your audience where they live, breathe, and scroll." },
                  { t: "Aggressive Scaling", d: "When we find what works, we pour gasoline on the fire." },
                  { t: "Radical Transparency", d: "No fluff. No vanity metrics. Only results that matter." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Products - Horizontal Scroll-like Grid */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Proprietary Tech</h2>
              <p className="text-4xl md:text-5xl font-display font-bold">The LaunchPad Series</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <span>View all products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "LaunchPad™", d: "The ultimate brand ignition system." },
              { n: "ContentFlow™", d: "Infinite content, zero friction." },
              { n: "LeadSprint™", d: "High-velocity customer acquisition." },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-accent/30 transition-all group"
              >
                <div className="text-4xl font-display font-bold text-white/10 mb-6 group-hover:text-accent/20 transition-colors">0{i+1}</div>
                <h3 className="text-2xl font-display font-bold mb-4">{p.n}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{p.d}</p>
                <Link to="/products" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-secondary-bg hover:text-white transition-colors">
                  Learn more <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative glass rounded-[4rem] p-12 md:p-24 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 opacity-50" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
                Stop Existing. <br />
                <span className="text-accent">Start Dominating.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                The digital landscape is a battlefield. Don't go in unarmed. 
                Let's build your empire.
              </p>
              <Link
                to="/contact"
                className="inline-block px-12 py-6 bg-white text-primary rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-white/10"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
