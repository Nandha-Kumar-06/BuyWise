import React, { useState } from 'react';
import { X, Bell, Mail, Smartphone, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export default function PriceAlertModal({ isOpen, onClose, product, onSetAlert }) {
  const [targetPrice, setTargetPrice] = useState(
    product ? Math.round(product.currentPrice * 0.88) : 50000
  );
  const [email, setEmail] = useState('');
  const [notifyViaEmail, setNotifyViaEmail] = useState(true);
  const [notifyViaPush, setNotifyViaPush] = useState(true);
  const [saved, setSaved] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    if (onSetAlert) {
      onSetAlert({
        productId: product.id,
        productName: product.name,
        currentPrice: product.currentPrice,
        targetPrice: targetPrice,
        email: email || 'user@buywise.ai'
      });
    }
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-card rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Glow accent */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Bell className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Create Price Drop Alert</h3>
            <p className="text-xs text-zinc-400">Get notified instantly when price falls to your target</p>
          </div>
        </div>

        {saved ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Price Alert Activated!</h4>
            <p className="text-xs text-zinc-400 max-w-xs">
              We'll watch <span className="text-white font-medium">{product.name}</span> across Amazon, Flipkart & Croma and alert you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Product Summary */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-3">
              <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-xl" />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-white truncate">{product.name}</h4>
                <div className="text-[11px] text-zinc-400 flex items-center gap-2">
                  <span>Current Price: <strong className="text-white font-mono">₹{product.currentPrice.toLocaleString('en-IN')}</strong></span>
                </div>
              </div>
            </div>

            {/* Target Price Slider & Input */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2 flex items-center justify-between">
                <span>Alert Target Price:</span>
                <span className="font-mono text-blue-400 text-sm font-bold">₹{targetPrice.toLocaleString('en-IN')}</span>
              </label>
              <input
                type="range"
                min={Math.round(product.currentPrice * 0.5)}
                max={product.currentPrice}
                step="500"
                value={targetPrice}
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <p className="text-[11px] text-emerald-400 mt-1">
                ⚡ Save ₹{(product.currentPrice - targetPrice).toLocaleString('en-IN')} ({Math.round(((product.currentPrice - targetPrice)/product.currentPrice)*100)}% drop)
              </p>
            </div>

            {/* Email Address Input */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                Notify Email Address:
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                <input
                  type="email"
                  required
                  placeholder="yourname@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Channels */}
            <div className="flex items-center gap-4 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-zinc-300">
                <input 
                  type="checkbox" 
                  checked={notifyViaEmail} 
                  onChange={(e) => setNotifyViaEmail(e.target.checked)} 
                  className="rounded bg-zinc-800 border-white/20 text-blue-600 focus:ring-0"
                />
                Email Alert
              </label>
              <label className="flex items-center gap-2 cursor-pointer text-zinc-300">
                <input 
                  type="checkbox" 
                  checked={notifyViaPush} 
                  onChange={(e) => setNotifyViaPush(e.target.checked)} 
                  className="rounded bg-zinc-800 border-white/20 text-blue-600 focus:ring-0"
                />
                Browser Push Alert
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <Zap className="w-4 h-4" />
              Set Price Alert Now
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
