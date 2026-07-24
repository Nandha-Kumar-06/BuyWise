import React, { useState, useEffect } from 'react';
import { Sparkles, Bookmark, Calculator, ShieldCheck, User, Menu, X, Calendar, TrendingUp, Cpu, LayoutDashboard, DollarSign, LogIn } from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  wishlistCount, 
  onOpenCalculator, 
  onOpenAuth,
  user
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Public nav links (Admin panel removed from public bar)
  const navLinks = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'analyzer', label: 'Product Analyzer', icon: Cpu, badge: 'AI Live' },
    { id: 'features', label: 'Features', icon: TrendingUp },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'sales', label: 'Sale Calendar', icon: Calendar },
    { id: 'pricing', label: 'Pricing', icon: DollarSign }
  ];

  // Add Admin tab only if user is logged in
  if (user && user.isAdmin) {
    navLinks.push({ id: 'admin', label: 'Admin Panel', icon: ShieldCheck });
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3 shadow-2xl shadow-black/50' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-emerald-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#09090B] rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                BuyWise <span className="gradient-text-blue font-mono font-bold text-sm px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20">AI</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider">SMART PRICE INTELLIGENCE</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-card px-3 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveTab(link.id)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-white bg-blue-600/90 shadow-md shadow-blue-600/30' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-zinc-400'}`} />
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold border border-emerald-500/30">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Savings Calculator Quick Action */}
            <button
              onClick={onOpenCalculator}
              className="p-2.5 rounded-xl glass-card text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all text-xs font-semibold flex items-center gap-1.5 group"
              title="Savings Calculator"
            >
              <Calculator className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden xl:inline">Savings Calc</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className="relative p-2.5 rounded-xl glass-card text-zinc-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all group"
              title="Wishlist & Saved Products"
            >
              <Bookmark className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold flex items-center justify-center border-2 border-[#09090B] animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Auth / Account */}
            {user ? (
              <button
                onClick={() => setActiveTab('profile')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-white/10 hover:border-blue-500/40 text-xs font-semibold text-white transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-400 flex items-center justify-center font-bold text-[10px]">
                  {user.name.charAt(0)}
                </div>
                <span>{user.name}</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('login')}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Log In</span>
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Sign Up Free
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-card text-zinc-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav mt-3 border-t border-white/10 py-4 px-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between transition-all ${
                    isActive 
                      ? 'bg-blue-600 text-white font-semibold' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenCalculator();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl glass-card text-xs font-semibold text-emerald-400 flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                Savings Calculator
              </button>
              
              {!user ? (
                <button
                  onClick={() => {
                    onOpenAuth('signup');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 text-center"
                >
                  Sign Up Free
                </button>
              ) : (
                <button
                  onClick={() => {
                    setActiveTab('profile');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-zinc-800 text-center"
                >
                  My Profile Settings
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
