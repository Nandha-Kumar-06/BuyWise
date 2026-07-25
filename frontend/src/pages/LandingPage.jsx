import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Search, TrendingUp, ShieldCheck, Zap, 
  BarChart3, RefreshCw, Bookmark, CheckCircle2, Star, Calculator,
  ShoppingBag, Bell, Eye, Flame, AlertCircle
} from 'lucide-react';
import { mockProducts, mockTrustedBrands } from '../data/mockProducts';

export default function LandingPage({ onAnalyze, setActiveTab, onOpenCalculator }) {
  const [urlInput, setUrlInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onAnalyze(urlInput);
    }
  };

  const heroFloatingCards = [
    {
      title: "iPhone 16 Pro (128GB)",
      recommendation: "WAIT",
      price: "₹1,19,900",
      target: "₹1,04,900",
      savings: "Save ₹15,000",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Sony WH-1000XM5",
      recommendation: "BUY NOW",
      price: "₹22,990",
      target: "All-Time Low",
      savings: "Save ₹12,000",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/30 text-xs font-semibold text-blue-300 shadow-xl shadow-blue-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>AI Price Forecasting v2.4 Live</span>
            <span className="text-zinc-500">|</span>
            <span className="text-emerald-400 font-mono font-bold">120,000+ Deals Analyzed Today</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Know the <span className="gradient-text-blue">Best Time</span> to Buy.
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            AI predicts future prices, analyzes thousands of reviews, compares stores across Amazon & Flipkart, and guarantees you never overpay again.
          </motion.p>

          {/* Large Paste URL Search Analyzer Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <form 
              onSubmit={handleSearchSubmit}
              className="relative p-2 sm:p-3 rounded-2xl sm:rounded-3xl glass-card border border-white/15 shadow-2xl shadow-blue-900/20 flex flex-col sm:flex-row items-center gap-2 group focus-within:border-blue-500/60 focus-within:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="relative flex-1 w-full flex items-center pl-3">
                <Search className="w-5 h-5 text-zinc-400 group-focus-within:text-blue-400 transition-colors" />
                <input
                  type="text"
                  placeholder="Paste product URL (Amazon, Flipkart, Croma) or type product name..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full pl-3 pr-4 py-3 bg-transparent text-white placeholder-zinc-500 text-xs sm:text-sm font-medium focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Analyze Product</span>
                </button>
              </div>
            </form>

            {/* Quick Demo Trigger Badges */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
              <span className="font-mono text-[11px] text-zinc-500">TRY DEMO:</span>
              {mockProducts.slice(0, 3).map(p => (
                <button
                  key={p.id}
                  onClick={() => onAnalyze(p.id)}
                  className="px-3 py-1 rounded-full glass-card hover:bg-white/10 hover:border-blue-500/40 text-zinc-300 hover:text-white transition-all text-[11px] flex items-center gap-1.5"
                >
                  <Flame className="w-3 h-3 text-amber-400" />
                  {p.name.split('(')[0]}
                </button>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Floating Interactive Sample Cards Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {heroFloatingCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => onAnalyze(card.title)}
              className="p-5 rounded-2xl glass-card border border-white/10 glass-card-hover cursor-pointer flex items-center gap-4 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/15 transition-all" />
              
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-20 h-20 object-cover rounded-xl border border-white/10 shadow-md group-hover:scale-105 transition-transform" 
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-xs sm:text-sm font-bold text-white truncate">{card.title}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold font-mono border ${card.badgeColor}`}>
                    {card.recommendation}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 text-xs font-mono">
                  <span className="text-white font-bold">{card.price}</span>
                  <span className="text-emerald-400 font-semibold">{card.savings}</span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-blue-400" />
                  <span>Target Date: Festival Sales 2026</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Retailers Marquee */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-center text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 mb-8">
            SUPPORTED STORES & INTELLIGENCE SOURCES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {mockTrustedBrands.map((brand, idx) => (
              <span key={idx} className="text-sm font-bold font-mono text-zinc-300 hover:text-blue-400 transition-colors cursor-default">
                {brand.logo}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* QUICK DEMO PRODUCT SHOWCASE GRID */}
      <section className="py-16 bg-zinc-950/60 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
                LIVE DEMO PRODUCTS
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Trending Product Analysis
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('analyzer')}
              className="mt-4 md:mt-0 text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 group"
            >
              <span>Explore All Analyzer Features</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -8 }}
                onClick={() => onAnalyze(product.id)}
                className="p-5 rounded-3xl glass-card border border-white/10 glass-card-hover cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold font-mono shadow-lg border ${
                        product.recommendation === 'BUY NOW' 
                          ? 'bg-emerald-500/90 text-white border-emerald-400' 
                          : 'bg-amber-500/90 text-white border-amber-400'
                      }`}>
                        {product.recommendation}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-zinc-400 mb-1 flex items-center justify-between">
                    <span>{product.brand}</span>
                    <span className="text-blue-400 font-bold">{product.confidenceScore}% AI Confidence</span>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-3">
                    {product.name}
                  </h3>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-500 block">CURRENT PRICE</span>
                    <span className="text-base font-extrabold font-mono text-white">
                      ₹{product.currentPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-emerald-400 block">EST. SAVINGS</span>
                    <span className="text-xs font-bold font-mono text-emerald-300">
                      -₹{product.estimatedSavings.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE FEATURES HIGHLIGHT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            WHY BUYWISE AI?
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Built Like a Billion-Dollar Startup
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Advanced algorithms engineered to save you thousands of dollars across major shopping platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "AI Price Trend Prediction",
              description: "Scans 12-month pricing cycles, inflation indices, and festival calendars to predict the exact date for maximum discount.",
              accent: "text-blue-400 bg-blue-500/10 border-blue-500/20"
            },
            {
              icon: ShieldCheck,
              title: "Fake Review Audit Score",
              description: "Detects incentivized reviews, seller bots, and rating inflation to present true customer sentiment scores.",
              accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
            },
            {
              icon: ShoppingBag,
              title: "Multi-Store Price Compare",
              description: "Simultaneously compares pricing, hidden coupon codes, bank cashback offers, and delivery times across Amazon, Flipkart, Croma, and Reliance.",
              accent: "text-purple-400 bg-purple-500/10 border-purple-500/20"
            }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl glass-card border border-white/10 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${feature.accent}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-blue-400">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Savings Calculator Callout Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-zinc-900 to-emerald-900/30 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              INTERACTIVE SAVINGS TOOL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Calculate Your Yearly Shopping Savings
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
              Input your annual shopping budget to discover how much money BuyWise AI can save you each year.
            </p>
          </div>

          <button
            onClick={onOpenCalculator}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white font-extrabold text-sm shadow-xl shadow-emerald-500/30 flex items-center gap-3 transition-all hover:scale-105 whitespace-nowrap"
          >
            <Calculator className="w-5 h-5" />
            <span>Launch Savings Calculator</span>
          </button>
        </div>

      </section>

    </div>
  );
}
