import React from 'react';
import { 
  TrendingUp, BarChart3, MessageSquareText, ShieldAlert, Store, 
  Bookmark, Bell, Sparkles, Calculator, CheckCircle2 
} from 'lucide-react';

export default function FeaturesPage({ onAnalyze, onOpenCalculator }) {
  const featuresList = [
    {
      id: "ai-prediction",
      icon: TrendingUp,
      title: "AI Price Prediction",
      desc: "Machine learning neural model trained on 5 years of ecommerce pricing trends to forecast exact price drop dates.",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      id: "price-history",
      icon: BarChart3,
      title: "Price History Graph",
      desc: "Interactive Recharts line graph showing 12-month historical lowest & highest price milestones.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      id: "review-summarizer",
      icon: MessageSquareText,
      title: "Review Summarizer",
      desc: "Natural Language Processing algorithms distill 10,000+ customer reviews into concise pros, cons, and overall verdict.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      id: "fake-review",
      icon: ShieldAlert,
      title: "Fake Review Detection",
      desc: "Scans linguistic patterns, account creation timestamps, and rating velocity to filter out fake bot reviews.",
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20"
    },
    {
      id: "compare-stores",
      icon: Store,
      title: "Compare Stores",
      desc: "Simultaneous price, cashback, and stock level checks across Amazon, Flipkart, Croma, and Reliance Digital.",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      id: "wishlist",
      icon: Bookmark,
      title: "Wishlist Tracker",
      desc: "Save your favorite tech products and monitor your cumulative portfolio savings in real-time.",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      id: "price-alerts",
      icon: Bell,
      title: "Smart Price Alerts",
      desc: "Receive instant email & browser notifications when a product reaches your desired target price.",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      id: "alternatives",
      icon: Sparkles,
      title: "Best Alternatives Finder",
      desc: "AI recommends superior value choices and flagship specs at lower price brackets.",
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    },
    {
      id: "savings-calculator",
      icon: Calculator,
      title: "Savings Calculator",
      desc: "Interactive tool to calculate your projected yearly shopping savings based on target spend.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
          COMPLETE AI PRICE INTELLIGENCE SUITE
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Powerful Features for Smart Shoppers
        </h1>
        <p className="text-xs sm:text-base text-zinc-400">
          Everything you need to analyze products, detect price drops, skip fake reviews, and guarantee maximum value.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresList.map((feat) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.id}
              onClick={() => {
                if (feat.id === 'savings-calculator') onOpenCalculator();
                else onAnalyze('iphone-16-pro');
              }}
              className="p-8 rounded-3xl glass-card border border-white/10 glass-card-hover cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${feat.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-blue-400">
                <span>Try Live Demo</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
