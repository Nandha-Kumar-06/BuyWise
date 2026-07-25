import React, { useState } from 'react';
import { 
  Bookmark, Bell, DollarSign, TrendingUp, Search, Calendar, 
  Trash2, ExternalLink, Sparkles, CheckCircle2, AlertCircle, ArrowUpRight 
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid 
} from 'recharts';

export default function DashboardPage({ 
  wishlistItems = [], 
  onRemoveWishlist, 
  onAnalyze, 
  onOpenPriceAlert 
}) {
  const [activeSubTab, setActiveSubTab] = useState('wishlist');

  // Savings analytics chart mock data
  const savingsData = [
    { month: 'Jan', saved: 2400 },
    { month: 'Feb', saved: 4800 },
    { month: 'Mar', saved: 9200 },
    { month: 'Apr', saved: 14500 },
    { month: 'May', saved: 22000 },
    { month: 'Jun', saved: 34250 }
  ];

  const statCards = [
    { label: "Products Tracked", value: wishlistItems.length + 6, icon: Bookmark, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { label: "Total Money Saved", value: "₹34,250", icon: DollarSign, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { label: "Active Price Alerts", value: "5 Deals", icon: Bell, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { label: "Upcoming Festival Sales", value: "3 Events", icon: Calendar, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            PERSONAL PRICE COMMAND CENTER
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-1">
            Savings & Tracked Products Dashboard
          </h1>
        </div>
        
        <button
          onClick={() => onAnalyze('iphone-16-pro')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2 self-start sm:self-auto"
        >
          <Sparkles className="w-4 h-4" />
          <span>Analyze New Link</span>
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="p-6 rounded-3xl glass-card border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-zinc-400 block font-mono">{stat.label}</span>
                <span className="text-2xl font-extrabold text-white font-mono mt-1 block">
                  {stat.value}
                </span>
              </div>
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      {/* SAVINGS GROWTH GRAPH */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              MONEY SAVED OVER TIME
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Cumulative Shopping Savings Growth
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            +38% vs MSRP
          </span>
        </div>

        <div className="h-64 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={savingsData}>
              <defs>
                <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
              <XAxis dataKey="month" stroke="#71717A" tick={{ fontSize: 11 }} />
              <YAxis stroke="#71717A" tick={{ fontSize: 11 }} tickFormatter={(v) => `₹${v/1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181B', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '12px' }}
                formatter={(val) => [`₹${val.toLocaleString('en-IN')}`, 'Saved']}
              />
              <Area type="monotone" dataKey="saved" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorSaved)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* TRACKED WISHLIST & ALERTS TABLE */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <h3 className="text-xl font-bold text-white">Your Saved Wishlist & Price Alerts</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSubTab('wishlist')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSubTab === 'wishlist' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white/5 text-zinc-400 hover:text-white'
              }`}
            >
              Wishlist Items ({wishlistItems.length})
            </button>
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <Bookmark className="w-12 h-12 text-zinc-600 mx-auto" />
            <h4 className="text-base font-bold text-white">No products saved in your wishlist yet</h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Analyze any product and click "Add to Wishlist" to track prices and receive drop notifications.
            </p>
            <button
              onClick={() => onAnalyze('iphone-16-pro')}
              className="mt-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
            >
              Analyze Demo iPhone 16 Pro
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[11px] font-mono text-zinc-400 border-b border-white/10 uppercase">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Current Price</th>
                  <th className="py-3 px-4">AI Signal</th>
                  <th className="py-3 px-4">Est. Lowest</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-zinc-300">
                {wishlistItems.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-xl border border-white/10" />
                        <div>
                          <div className="font-bold text-white hover:text-blue-400 cursor-pointer" onClick={() => onAnalyze(item.id)}>
                            {item.name}
                          </div>
                          <span className="text-[10px] text-zinc-500 font-mono">{item.brand}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-white">
                      ₹{item.currentPrice.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-4 font-mono">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold border ${
                        item.recommendation === 'BUY NOW' 
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      }`}>
                        {item.recommendation}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono text-emerald-400 font-bold">
                      ₹{item.expectedLowestPrice.toLocaleString('en-IN')}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onOpenPriceAlert(item)}
                          className="p-2 rounded-xl glass-card text-emerald-400 hover:bg-emerald-500/20"
                          title="Set Price Alert"
                        >
                          <Bell className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onRemoveWishlist(item.id)}
                          className="p-2 rounded-xl glass-card text-rose-400 hover:bg-rose-500/20"
                          title="Remove"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
