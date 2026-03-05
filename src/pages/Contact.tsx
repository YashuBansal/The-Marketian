import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Digital Strategy",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "Digital Strategy", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

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
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white mt-6 mb-6 tracking-tighter"
          >
            Let's Build Your <span className="text-secondary-bg">Empire</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            The digital landscape waits for no one. Secure your dominance today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass p-10 rounded-[3rem] space-y-10 relative overflow-hidden">
              <h3 className="text-2xl font-display font-bold text-white">Direct Channels</h3>
              <div className="space-y-8">
                {[
                  { icon: Phone, label: "Call", value: "+91 9817117838" },
                  { icon: Mail, label: "Email", value: "info.themarketian@gmail.com" },
                  { icon: MapPin, label: "Visit", value: "Ellenabad, Haryana, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-secondary-bg" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{item.label}</p>
                      <p className="font-bold text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-10 rounded-[3rem]">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-widest mb-6">Availability</h4>
              <ul className="space-y-4 text-xs font-bold tracking-widest text-gray-500">
                <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">09:00 - 19:00</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="text-white">10:00 - 16:00</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-accent">Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="glass p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-white mb-4">Transmission Received</h3>
                  <p className="text-gray-400 mb-10 font-light">Our strategists are analyzing your request. Expect a response within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-10 py-4 bg-white text-primary rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-white placeholder:text-gray-600"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-white placeholder:text-gray-600"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-white placeholder:text-gray-600"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Objective</label>
                      <select
                        className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-white appearance-none cursor-pointer"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option className="bg-[#0A0F1A]">Digital Strategy</option>
                        <option className="bg-[#0A0F1A]">Social Media</option>
                        <option className="bg-[#0A0F1A]">SEO Optimization</option>
                        <option className="bg-[#0A0F1A]">Performance Ads</option>
                        <option className="bg-[#0A0F1A]">Web Development</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] ml-2">Mission Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your goals..."
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-white placeholder:text-gray-600 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full py-6 bg-white text-primary rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent hover:text-white transition-all shadow-2xl shadow-white/5 flex items-center justify-center space-x-3 disabled:opacity-50 group"
                  >
                    {status === "loading" ? (
                      <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Initiate Contact</span>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                  
                  {status === "error" && (
                    <p className="text-accent text-[10px] text-center font-bold uppercase tracking-widest">System Error. Please retry.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
