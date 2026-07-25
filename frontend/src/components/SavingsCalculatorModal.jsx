import React, { useState } from 'react';
import { X, Calculator, TrendingUp, Sparkles, CheckCircle2, DollarSign } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SavingsCalculatorModal({ isOpen, onClose }) {
  const [techSpend, setTechSpend] = useState(120000); // Yearly spend in INR ₹
  const [shoppingFrequency, setShoppingFrequency] = useState('monthly');
  const [categories, setCategories] = useState(['smartphones', 'laptops']);

  if (!isOpen) return null;

  // Calculate estimated savings: average 14-22% savings with BuyWise AI predictions
  const estimatedSavings = Math.round(techSpend * 0.18);
  const fiveYearSavings = estimatedSavings * 5;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-card rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow backdrop accent */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              BuyWise AI Savings Calculator
            </h3>
            <p className="text-xs text-zinc-400">See how much money you can save by timing your purchases</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Controls */}
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2 flex items-center justify-between">
                <span>Annual Electronics & Shopping Budget:</span>
                <span className="font-mono text-emerald-400 text-sm font-bold">₹{techSpend.toLocaleString('en-IN')}</span>
              </label>
              <input
                type="range"
                min="20000"
                max="500000"
                step="5000"
                value={techSpend}
                onChange={(e) => setTechSpend(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                <span>₹20k</span>
                <span>₹2.5L</span>
                <span>₹5L+</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2">
                Shopping Habits
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'casual', label: 'Occasional' },
                  { id: 'monthly', label: 'Monthly' },
                  { id: 'techie', label: 'Tech Enthusiast' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setShoppingFrequency(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                      shoppingFrequency === item.id 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                        : 'bg-white/5 text-zinc-400 border border-white/5 hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <span className="text-[11px] font-semibold text-zinc-400">Included AI Algorithms:</span>
              <div className="text-[11px] text-zinc-300 space-y-1">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Amazon Festival Sale Prediction</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Cross-Store Price Match Optimization</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Bank Cashback & Card Stacking Alert</div>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/30 to-zinc-900/80 border border-emerald-500/20 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider font-mono">
                Estimated Annual Savings
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white font-mono">
                  ₹{estimatedSavings.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-emerald-400 font-bold">/ year</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                Based on BuyWise AI's average 18% price drop signal accuracy.
              </p>
            </div>

            <div className="pt-4 my-4 border-t border-emerald-500/20">
              <span className="text-[11px] text-zinc-400">5-Year Cumulative Savings:</span>
              <div className="text-2xl font-bold text-emerald-300 font-mono">
                ₹{fiveYearSavings.toLocaleString('en-IN')}
              </div>
            </div>

            <button
              onClick={() => {
                triggerConfetti();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4" />
              Claim My Savings Strategy
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
