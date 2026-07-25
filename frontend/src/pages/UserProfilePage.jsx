import React, { useState } from 'react';
import { User, Mail, Bell, Shield, DollarSign, Settings, Bookmark, CheckCircle2, Moon } from 'lucide-react';

export default function UserProfilePage({ user, wishlistItems = [] }) {
  const [currency, setCurrency] = useState('₹ INR');
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header Profile Card */}
      <div className="p-8 rounded-3xl glass-card border border-white/10 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-emerald-400 p-[2px] shadow-xl">
          <div className="w-full h-full bg-[#09090B] rounded-full flex items-center justify-center font-bold text-2xl text-white">
            {user ? user.name.charAt(0) : 'U'}
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left space-y-1">
          <h1 className="text-2xl font-bold text-white">{user ? user.name : 'Alex Rivera'}</h1>
          <p className="text-xs text-zinc-400 font-mono">{user ? user.email : 'alex.rivera@gmail.com'}</p>
          <div className="flex items-center justify-center sm:justify-start gap-2 pt-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
              PRO MEMBER
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400 font-mono">Member since 2026</span>
          </div>
        </div>
      </div>

      {/* Settings Form */}
      <form onSubmit={handleSaveSettings} className="p-8 rounded-3xl glass-card border border-white/10 space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-400" />
          Account & Notification Preferences
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-2">Default Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
            >
              <option value="₹ INR">₹ INR (Indian Rupee)</option>
              <option value="$ USD">$ USD (US Dollar)</option>
              <option value="€ EUR">€ EUR (Euro)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-2">Theme Preference</label>
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-xs text-zinc-300 flex items-center justify-between">
              <span className="flex items-center gap-2"><Moon className="w-4 h-4 text-blue-400" /> Dark Mode (Default)</span>
              <span className="text-[10px] text-emerald-400 font-mono">ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
            Notification Channels
          </h4>

          <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer">
            <span className="text-xs text-zinc-300">Email Price Drop Alerts</span>
            <input 
              type="checkbox" 
              checked={emailAlerts} 
              onChange={(e) => setEmailAlerts(e.target.checked)} 
              className="rounded bg-zinc-800 text-blue-600 focus:ring-0"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer">
            <span className="text-xs text-zinc-300">Browser Push Notifications</span>
            <input 
              type="checkbox" 
              checked={pushAlerts} 
              onChange={(e) => setPushAlerts(e.target.checked)} 
              className="rounded bg-zinc-800 text-blue-600 focus:ring-0"
            />
          </label>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2"
        >
          {savedSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Settings Saved!</span>
            </>
          ) : (
            <span>Save Preferences</span>
          )}
        </button>
      </form>

    </div>
  );
}
