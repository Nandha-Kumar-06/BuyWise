import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Heart, ShieldCheck, Mail } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="relative bg-[#09090B] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#09090B] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white">BuyWise <span className="gradient-text-blue font-mono font-bold text-sm">AI</span></span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Know the best time to buy. BuyWise AI uses machine learning to forecast price trends, audit fake reviews across stores, and guarantee maximum savings on every product.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-blue-500/40 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-blue-500/40 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl glass-card text-zinc-400 hover:text-white hover:border-blue-500/40 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">Product</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li><button onClick={() => setActiveTab('analyzer')} className="hover:text-blue-400 transition-colors">AI Price Analyzer</button></li>
              <li><button onClick={() => setActiveTab('features')} className="hover:text-blue-400 transition-colors">Review Summarizer</button></li>
              <li><button onClick={() => setActiveTab('sales')} className="hover:text-blue-400 transition-colors">Festival Sale Calendar</button></li>
              <li><button onClick={() => setActiveTab('dashboard')} className="hover:text-blue-400 transition-colors">Savings Dashboard</button></li>
              <li><button onClick={() => setActiveTab('pricing')} className="hover:text-blue-400 transition-colors">Pricing & Plans</button></li>
            </ul>
          </div>

          {/* Column 3: Retailers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">Supported Retailers</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center gap-2"><span>🛒</span> Amazon India</li>
              <li className="flex items-center gap-2"><span>⚡</span> Flipkart</li>
              <li className="flex items-center gap-2"><span>🏬</span> Croma Retail</li>
              <li className="flex items-center gap-2"><span>💎</span> Reliance Digital</li>
              <li className="flex items-center gap-2"><span>🍎</span> Apple Official Store</li>
            </ul>
          </div>

          {/* Column 4: Legal & Security */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">Trust & Security</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 256-Bit SSL Encrypted</li>
              <li><a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-blue-400 transition-colors">Cookie Preferences</a></li>
              <li className="flex items-center gap-1.5 pt-1"><Mail className="w-3.5 h-3.5 text-blue-400" /> support@buywise.ai</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} BuyWise AI, Inc. Built for smart shoppers worldwide.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for zero overpaying.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
