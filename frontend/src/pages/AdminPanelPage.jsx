import React, { useState } from 'react';
import { ShieldCheck, Cpu, Database, Users, Activity, Plus, Server, RefreshCw } from 'lucide-react';
import { mockProducts } from '../data/mockProducts';

export default function AdminPanelPage() {
  const [productsList, setProductsList] = useState(mockProducts);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice) return;

    const newProd = {
      id: `admin-${Date.now()}`,
      name: newProductName,
      brand: "Admin Added",
      category: "Electronics",
      currentPrice: Number(newProductPrice),
      recommendation: "BUY NOW",
      confidenceScore: 95,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80"
    };

    setProductsList([newProd, ...productsList]);
    setNewProductName('');
    setNewProductPrice('');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> ADMIN CONTROL CENTER
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-1">
            BuyWise AI System Management
          </h1>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs border border-emerald-500/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>All 12 Scraper Workers Operational</span>
        </div>
      </div>

      {/* Analytics Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl glass-card border border-white/10">
          <span className="text-xs text-zinc-400 font-mono">Total Active Users</span>
          <span className="text-3xl font-extrabold text-white font-mono mt-1 block">124,890</span>
        </div>
        <div className="p-6 rounded-3xl glass-card border border-white/10">
          <span className="text-xs text-zinc-400 font-mono">Tracked Products DB</span>
          <span className="text-3xl font-extrabold text-blue-400 font-mono mt-1 block">{productsList.length + 1420}</span>
        </div>
        <div className="p-6 rounded-3xl glass-card border border-white/10">
          <span className="text-xs text-zinc-400 font-mono">Scraper Response Latency</span>
          <span className="text-3xl font-extrabold text-emerald-400 font-mono mt-1 block">142ms</span>
        </div>
        <div className="p-6 rounded-3xl glass-card border border-white/10">
          <span className="text-xs text-zinc-400 font-mono">AI Model Accuracy</span>
          <span className="text-3xl font-extrabold text-purple-400 font-mono mt-1 block">96.8%</span>
        </div>
      </div>

      {/* Add New Product Form */}
      <form onSubmit={handleAddProduct} className="p-6 rounded-3xl glass-card border border-white/10 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Plus className="w-4 h-4 text-emerald-400" />
          Manually Add Product to Price Index
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Product Title (e.g. iPad Pro M4)"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Current Price in ₹"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
          >
            Add Product to Database
          </button>
        </div>
      </form>

      {/* Products Table */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-4">
        <h3 className="text-xl font-bold text-white">Indexed Products Database</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="text-[11px] font-mono text-zinc-400 border-b border-white/10 uppercase">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Product Name</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">AI Signal</th>
                <th className="py-3 px-4 text-right">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              {productsList.map((p) => (
                <tr key={p.id} className="hover:bg-white/5">
                  <td className="py-3 px-4 font-mono text-zinc-500">{p.id}</td>
                  <td className="py-3 px-4 font-bold text-white">{p.name}</td>
                  <td className="py-3 px-4 font-mono">₹{p.currentPrice?.toLocaleString('en-IN')}</td>
                  <td className="py-3 px-4 font-mono text-emerald-400">{p.recommendation}</td>
                  <td className="py-3 px-4 font-mono text-right">{p.confidenceScore || 96}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
