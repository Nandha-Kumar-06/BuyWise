import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell, Sparkles, ShoppingBag, ArrowUpRight, Flame } from 'lucide-react';
import { mockSalesCalendar } from '../data/mockProducts';

function CountdownTimer({ targetDateStr }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDateStr).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateStr]);

  return (
    <div className="grid grid-cols-4 gap-2 text-center font-mono">
      <div className="p-2 rounded-xl bg-black/50 border border-white/10">
        <span className="text-lg font-black text-white">{timeLeft.days}</span>
        <span className="block text-[9px] text-zinc-400">DAYS</span>
      </div>
      <div className="p-2 rounded-xl bg-black/50 border border-white/10">
        <span className="text-lg font-black text-white">{timeLeft.hours}</span>
        <span className="block text-[9px] text-zinc-400">HOURS</span>
      </div>
      <div className="p-2 rounded-xl bg-black/50 border border-white/10">
        <span className="text-lg font-black text-white">{timeLeft.minutes}</span>
        <span className="block text-[9px] text-zinc-400">MINS</span>
      </div>
      <div className="p-2 rounded-xl bg-black/50 border border-white/10">
        <span className="text-lg font-black text-emerald-400">{timeLeft.seconds}</span>
        <span className="block text-[9px] text-zinc-400">SECS</span>
      </div>
    </div>
  );
}

export default function SaleCalendarPage({ onTriggerReminder }) {
  return (
    <div className="min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
          <Flame className="w-4 h-4 text-amber-400" />
          FESTIVAL DISCOUNT RADAR 2026
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          Upcoming Major Sale Events & Countdowns
        </h1>
        <p className="text-xs sm:text-base text-zinc-400">
          Track upcoming mega sales across Amazon, Flipkart, Croma, and Reliance Digital to time your big purchases for maximum savings.
        </p>
      </div>

      {/* Sales Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockSalesCalendar.map((sale) => (
          <div
            key={sale.id}
            className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 glass-card-hover flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            {/* Banner Overlay */}
            <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10">
              <img src={sale.banner} alt={sale.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-blue-600/90 text-white font-mono text-[10px] font-bold shadow-lg">
                {sale.store}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <h3 className="text-lg font-bold text-white leading-snug">{sale.title}</h3>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 font-medium">
                ⚡ <strong>Expected Discount:</strong> {sale.expectedDiscount}
              </div>

              <div className="text-xs text-zinc-300 space-y-1">
                <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase block">Top Product Categories:</span>
                <div className="flex flex-wrap gap-1.5">
                  {sale.topCategories.map((cat, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/5 text-[11px]">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs text-zinc-400 font-mono">
                💳 Bank Offer: <strong className="text-white">{sale.bankOffers}</strong>
              </div>

              {/* Countdown */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-zinc-400 block mb-1">EVENT STARTS IN:</span>
                <CountdownTimer targetDateStr={sale.startDate} />
              </div>
            </div>

            {/* Action */}
            <button
              onClick={() => onTriggerReminder(sale.title)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <Bell className="w-4 h-4" />
              <span>Remind Me When Sale Starts</span>
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
