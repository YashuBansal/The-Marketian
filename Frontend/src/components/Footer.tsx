import React from "react";
import { Link } from "react-router-dom";
import { Rocket, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0F1A] text-white pt-32 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter">
                MARKETIAN
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              We dismantle traditional models to build digital dominance. 
              The future belongs to the aggressive.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-accent mb-8">Navigation</h3>
            <ul className="space-y-4">
              {["Services", "Products", "Portfolio", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-accent mb-8">Capabilities</h3>
            <ul className="space-y-4">
              {["Digital Strategy", "Social Media", "SEO Optimization", "Performance Marketing", "Web Development"].map((item) => (
                <li key={item} className="text-gray-400 text-sm font-medium">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-accent mb-8">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-secondary-bg" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Call</p>
                  <p className="text-sm font-bold">+91 9817117838</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-secondary-bg" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-1">Email</p>
                  <p className="text-sm font-bold">info.themarketian@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} The Marketian. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase font-bold tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
