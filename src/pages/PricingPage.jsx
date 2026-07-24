import React from 'react';
import { Check, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export default function PricingPage({ onOpenAuth }) {
  const plans = [
    {
      name: "Starter Free",
      price: "₹0",
      period: "forever",
      desc: "Perfect for occasional shoppers checking prices",
      badge: "Free Plan",
      badgeColor: "bg-zinc-800 text-zinc-300 border-zinc-700",
      buttonText: "Get Started Free",
      buttonStyle: "glass-card hover:bg-white/10 text-white border-white/10",
      features: [
        "10 Product Analyses per Month",
        "12-Month Price History Graph",
        "Basic Buy vs Wait Signal",
        "Cross-Store Price Comparison",
        "Community Support"
      ]
    },
    {
      name: "BuyWise Pro",
      price: "₹299",
      period: "/ month",
      desc: "For tech lovers & frequent buyers wanting maximum savings",
      badge: "Most Popular",
      badgeColor: "bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30",
      popular: true,
      buttonText: "Start 14-Day Free Trial",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold shadow-xl shadow-blue-600/30",
      features: [
        "UNLIMITED Product Price Analyses",
        "Instant Email & SMS Price Drop Alerts",
        "Fake Review Detection & Trust Audit",
        "Festival Sale Price Forecast AI",
        "Best Alternatives & Coupon Finder",
        "Priority Customer Support"
      ]
    },
    {
      name: "Pro Ultra",
      price: "₹799",
      period: "/ month",
      desc: "For deal hunters & reseller businesses needing API access",
      badge: "Power Users",
      badgeColor: "bg-purple-600 text-white border-purple-400",
      buttonText: "Get Ultra Access",
      buttonStyle: "glass-card hover:bg-purple-600/30 text-white border-purple-500/40",
      features: [
        "Everything in Pro Plan",
        "Real-Time Web Scraper API",
        "Custom Webhook Price Triggers",
        "Multi-User Portfolio Dashboard",
        "Bulk URL File Import & Export",
        "1-on-1 Shopping Advisor Agent"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
          TRANSPARENT PRICING
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Saves You 10x More Than It Costs
        </h1>
        <p className="text-xs sm:text-base text-zinc-400">
          Choose a plan to unlock unlimited AI price predictions, price drop alerts, and fake review audits.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl glass-card border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
              plan.popular 
                ? 'border-blue-500/50 bg-gradient-to-b from-blue-950/20 to-zinc-900/90 shadow-2xl shadow-blue-900/30 scale-105 z-10' 
                : 'border-white/10'
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 left-0 bg-blue-600 text-white font-mono text-[10px] font-bold text-center py-1 tracking-widest uppercase">
                RECOMMENDED BY 94% USERS
              </div>
            )}

            <div className="space-y-6 pt-2">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold font-mono border ${plan.badgeColor}`}>
                  {plan.badge}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">{plan.name}</h3>
                <p className="text-xs text-zinc-400 mt-1 min-h-[32px]">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black font-mono text-white">{plan.price}</span>
                <span className="text-xs text-zinc-400 font-mono">{plan.period}</span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-white/10 text-xs text-zinc-300">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenAuth('signup')}
                className={`w-full py-3.5 rounded-2xl text-xs font-extrabold transition-all hover:scale-[1.02] ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
