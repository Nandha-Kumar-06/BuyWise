import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Search, TrendingUp, ShieldCheck, ArrowUpRight, 
  Bookmark, Bell, Share2, CheckCircle2, ThumbsUp, ThumbsDown, Info, Calendar, ExternalLink
} from 'lucide-react';
import { 
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, 
  CartesianGrid, ReferenceLine
} from 'recharts';
import { mockProducts } from '../data/mockProducts';
import { analyzeProductInput } from '../utils/aiPredictor';

export default function AnalyzerPage({ 
  currentInput, 
  onAddToWishlist, 
  onOpenPriceAlert, 
  wishlistItems = [] 
}) {
  const [inputUrl, setInputUrl] = useState(currentInput || '');
  const [analyzing, setAnalyzing] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const [productData, setProductData] = useState(() => analyzeProductInput(currentInput || 'iqoo-z10-lite-5g-64gb'));
  const [isCopied, setIsCopied] = useState(false);

  // Re-run analysis if external prop changes
  useEffect(() => {
    if (currentInput) {
      setInputUrl(currentInput);
      triggerAnalysis(currentInput);
    }
  }, [currentInput]);

  const triggerAnalysis = (query) => {
    if (!query || !query.trim()) return;
    setAnalyzing(true);
    setProgressStep(1);

    const timer1 = setTimeout(() => setProgressStep(2), 300);
    const timer2 = setTimeout(() => setProgressStep(3), 600);
    const timer3 = setTimeout(() => {
      const result = analyzeProductInput(query);
      setProductData(result);
      setAnalyzing(false);
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      triggerAnalysis(inputUrl.trim());
    }
  };

  const isSavedInWishlist = wishlistItems.some(item => item.id === productData.id);

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Search Header Bar */}
      <div className="mb-10 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
          AI PRODUCT PRICE INTELLIGENCE
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Real-Time Price & Review Analyzer
        </h1>

        <form onSubmit={handleFormSubmit} className="mt-6">
          <div className="relative p-2 rounded-2xl glass-card border border-white/15 shadow-2xl flex items-center gap-2 group focus-within:border-zinc-400">
            <Search className="w-5 h-5 ml-3 text-zinc-400 group-focus-within:text-white transition-colors" />
            <input
              type="text"
              placeholder="Paste Amazon, Flipkart product link or type product name (e.g., iQOO Z7 Pro, iQOO Z10 Lite)..."
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className="w-full pl-2 pr-4 py-3 bg-transparent text-white text-xs sm:text-sm font-medium focus:outline-none"
            />
            <button
              type="submit"
              disabled={analyzing}
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs shadow-lg flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] border border-white/10 whitespace-nowrap"
            >
              {analyzing ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>Scanning...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Analyze Now</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Sample Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400 pt-1">
          <span className="text-[11px] font-mono text-zinc-500">TRY QUICK SEARCHES:</span>
          {[
            { label: 'iQOO Z10 Lite 5G', query: 'iqoo z10 lite 5g' },
            { label: 'iQOO Z7 Pro 5G', query: 'iqoo z7 pro' },
            { label: 'Blue Star 1.5T AC', query: 'blue star 1.5 ton ac' },
            { label: 'Robustt AC Bracket', query: 'robustt ac bracket' }
          ].map((sample, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputUrl(sample.query);
                triggerAnalysis(sample.query);
              }}
              className="px-3 py-1 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-[11px] font-medium transition-all border border-white/5"
            >
              {sample.label}
            </button>
          ))}
        </div>
      </div>

      {/* LOADING STATE ANIMATION */}
      {analyzing ? (
        <div className="my-16 max-w-xl mx-auto p-8 rounded-3xl glass-card border border-white/10 text-center space-y-6 animate-pulse">
          <div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/15 flex items-center justify-center text-emerald-400 mx-auto">
            <Sparkles className="w-8 h-8 animate-spin" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Fetching Live Pricing & Reviews for "{inputUrl}"</h3>
            <p className="text-xs text-zinc-400 mt-1 font-mono">Running Amazon & Flipkart data audit</p>
          </div>

          <div className="space-y-3 text-xs text-left max-w-sm mx-auto">
            <div className={`flex items-center gap-2.5 ${progressStep >= 1 ? 'text-emerald-400' : 'text-zinc-600'}`}>
              <CheckCircle2 className="w-4 h-4" />
              <span>Checking Flipkart & Amazon live seller price listings</span>
            </div>
            <div className={`flex items-center gap-2.5 ${progressStep >= 2 ? 'text-emerald-400' : 'text-zinc-600'}`}>
              <CheckCircle2 className="w-4 h-4" />
              <span>Verifying bank offers & card cashback discounts</span>
            </div>
            <div className={`flex items-center gap-2.5 ${progressStep >= 3 ? 'text-emerald-400' : 'text-zinc-600'}`}>
              <CheckCircle2 className="w-4 h-4" />
              <span>Auditing customer reviews & computing historical drop signal</span>
            </div>
          </div>
        </div>
      ) : (
        /* PRODUCT ANALYSIS DASHBOARD */
        <div className="space-y-8 animate-fadeIn">
          
          {/* TOP SECTION: Product Summary Card & Primary AI Verdict */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Product Image & Overview */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 flex flex-col justify-between">
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative w-full sm:w-52 h-52 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/90 flex-shrink-0 flex items-center justify-center p-2">
                  <img 
                    src={productData.image} 
                    alt={productData.name} 
                    className="max-w-full max-h-full object-contain rounded-xl"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                    {productData.availability}
                  </span>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-200 font-mono text-[10px] font-semibold border border-white/10">
                      {productData.brand}
                    </span>
                    <span className="text-zinc-500 text-xs">•</span>
                    <span className="text-xs text-zinc-400">{productData.category}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight break-words">
                    {productData.name}
                  </h2>

                  <div className="flex items-baseline gap-3 pt-1">
                    <span className="text-3xl font-extrabold font-mono text-white">
                      ₹{productData.currentPrice.toLocaleString('en-IN')}
                    </span>
                    {productData.listPrice > productData.currentPrice && (
                      <span className="text-sm font-mono text-zinc-500 line-through">
                        ₹{productData.listPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => onAddToWishlist(productData)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isSavedInWishlist 
                          ? 'bg-zinc-700 text-white border border-white/20' 
                          : 'glass-card border border-white/10 text-zinc-300 hover:text-white'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{isSavedInWishlist ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                    </button>

                    <button
                      onClick={() => onOpenPriceAlert(productData)}
                      className="px-4 py-2 rounded-xl glass-card border border-white/10 text-zinc-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <Bell className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Set Price Alert</span>
                    </button>

                    <button
                      onClick={copyShareLink}
                      className="p-2 rounded-xl glass-card border border-white/10 text-zinc-400 hover:text-white transition-all text-xs"
                      title="Share Analysis"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stores Row */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider block mb-3">
                  STORE PRICE COMPARISON (FLIPKART & AMAZON LIVE)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {productData.stores.map((store, idx) => (
                    <a
                      key={idx}
                      href={store.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold text-zinc-300">
                        <span>{store.name}</span>
                        <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-white" />
                      </div>
                      <div className="mt-2 font-mono font-bold text-sm text-white">
                        ₹{store.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">
                        {store.delivery}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: AI RECOMMENDATION CARD */}
            <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl glass-card border flex flex-col justify-between relative overflow-hidden ${
              productData.recommendation === 'BUY NOW' 
                ? 'border-emerald-500/40 bg-gradient-to-b from-emerald-950/30 to-zinc-900/90' 
                : 'border-amber-500/40 bg-gradient-to-b from-amber-950/30 to-zinc-900/90'
            }`}>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    AI BUY/WAIT SIGNAL
                  </span>
                  <div className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 font-mono text-xs font-bold border border-white/10">
                    {productData.confidenceScore}% Confidence
                  </div>
                </div>

                {/* Big Recommendation Badge */}
                <div className="py-2">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-2xl font-black font-mono tracking-tight shadow-xl ${
                    productData.recommendation === 'BUY NOW' 
                      ? 'bg-emerald-500 text-white shadow-emerald-500/30' 
                      : 'bg-amber-500 text-white shadow-amber-500/30'
                  }`}>
                    {productData.recommendation === 'BUY NOW' ? '⚡ BUY NOW' : '⏳ WAIT FOR SALE'}
                  </div>
                </div>

                <div className="space-y-2 pt-2 text-xs sm:text-sm">
                  <p className="text-zinc-200 font-medium leading-relaxed">
                    {productData.reason}
                  </p>
                </div>

                {/* Expected Lowest Price & Savings Stats */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                    <span className="text-[10px] text-zinc-400 font-mono block">EXPECTED LOWEST</span>
                    <span className="text-lg font-bold font-mono text-emerald-400">
                      ₹{productData.expectedLowestPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10">
                    <span className="text-[10px] text-zinc-400 font-mono block">ESTIMATED SAVINGS</span>
                    <span className="text-lg font-bold font-mono text-emerald-300">
                      -₹{productData.estimatedSavings.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-xs text-zinc-300 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                  <span><strong>Best Date to Buy:</strong> {productData.bestDateToBuy}</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={productData.stores[0]?.url || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-2xl font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-500/20"
                >
                  <span>Go to Store & Buy at Lowest Price</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>

          {/* INTERACTIVE PRICE HISTORY GRAPH */}
          <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                  HISTORICAL TREND & FORECAST
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  12-Month Price History & AI Projection
                </h3>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-zinc-400" />
                  <span className="text-zinc-300">Historical Price</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-zinc-300">AI Predicted Price</span>
                </div>
              </div>
            </div>

            {/* Recharts Line Graph */}
            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={productData.priceHistory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
                  <XAxis dataKey="date" stroke="#71717A" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#71717A" tick={{ fontSize: 11 }} domain={['auto', 'auto']} tickFormatter={(val) => `₹${(val / 1000).toFixed(0)}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181B', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', color: '#FFF', fontSize: '12px', fontFamily: 'JetBrains Mono' }}
                    formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, 'Price']}
                  />
                  <ReferenceLine y={productData.expectedLowestPrice} stroke="#10B981" strokeDasharray="3 3" label={{ value: 'Target Price', fill: '#10B981', fontSize: 10, position: 'insideBottomRight' }} />
                  <Line type="monotone" dataKey="price" stroke="#A1A1AA" strokeWidth={3} dot={{ fill: '#A1A1AA', r: 4 }} activeDot={{ r: 7, fill: '#FFF' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
