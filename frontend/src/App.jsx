import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import SavingsCalculatorModal from './components/SavingsCalculatorModal';
import PriceAlertModal from './components/PriceAlertModal';
import AuthModal from './components/AuthModal';

import LandingPage from './pages/LandingPage';
import AnalyzerPage from './pages/AnalyzerPage';
import FeaturesPage from './pages/FeaturesPage';
import DashboardPage from './pages/DashboardPage';
import SaleCalendarPage from './pages/SaleCalendarPage';
import PricingPage from './pages/PricingPage';
import UserProfilePage from './pages/UserProfilePage';
import AdminPanelPage from './pages/AdminPanelPage';

import { mockProducts } from './data/mockProducts';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [analyzerQuery, setAnalyzerQuery] = useState('iphone-16-pro');
  
  // User state
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('buywise_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Wishlist state
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('buywise_wishlist');
    return saved ? JSON.parse(saved) : [mockProducts[0], mockProducts[1]];
  });

  // Toast stack
  const [toasts, setToasts] = useState([]);

  // Modals state
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isPriceAlertOpen, setIsPriceAlertOpen] = useState(false);
  const [alertProduct, setAlertProduct] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  useEffect(() => {
    localStorage.setItem('buywise_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const showToast = (message, type = 'info') => {
    const newToast = { id: Date.now(), message, type };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 3500);
  };

  const handleAnalyzeProduct = (queryOrId) => {
    setAnalyzerQuery(queryOrId);
    setActiveTab('analyzer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToWishlist = (product) => {
    const exists = wishlistItems.some(item => item.id === product.id);
    if (exists) {
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
      showToast(`Removed "${product.name.split('(')[0]}" from Wishlist`, 'info');
    } else {
      setWishlistItems([product, ...wishlistItems]);
      showToast(`Saved "${product.name.split('(')[0]}" to Wishlist!`, 'success');
    }
  };

  const handleRemoveWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    showToast(`Removed from Wishlist`, 'info');
  };

  const handleOpenPriceAlert = (product) => {
    setAlertProduct(product || mockProducts[0]);
    setIsPriceAlertOpen(true);
  };

  const handleOpenAuth = (mode = 'login') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleLoginSuccess = (userObj) => {
    setUser(userObj);
    localStorage.setItem('buywise_user', JSON.stringify(userObj));
    showToast(`Welcome back, ${userObj.name}!`, 'success');
  };

  return (
    <div className="relative min-h-screen bg-[#09090B] text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Interactive Trailing Cursor */}
      <CustomCursor enabled={true} />

      {/* Particle & Aurora Canvas Background */}
      <ParticleBackground />

      {/* Glassmorphic Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        wishlistCount={wishlistItems.length}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenAuth={handleOpenAuth}
        onOpenPriceAlert={handleOpenPriceAlert}
        user={user}
      />

      {/* Main View Router */}
      <main className="relative z-10 min-h-[calc(100vh-300px)]">
        {activeTab === 'home' && (
          <LandingPage
            onAnalyze={handleAnalyzeProduct}
            setActiveTab={setActiveTab}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />
        )}

        {activeTab === 'analyzer' && (
          <AnalyzerPage
            currentInput={analyzerQuery}
            onAddToWishlist={handleAddToWishlist}
            onOpenPriceAlert={handleOpenPriceAlert}
            wishlistItems={wishlistItems}
          />
        )}

        {activeTab === 'features' && (
          <FeaturesPage
            onAnalyze={handleAnalyzeProduct}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardPage
            wishlistItems={wishlistItems}
            onRemoveWishlist={handleRemoveWishlist}
            onAnalyze={handleAnalyzeProduct}
            onOpenPriceAlert={handleOpenPriceAlert}
          />
        )}

        {activeTab === 'sales' && (
          <SaleCalendarPage
            onTriggerReminder={(saleTitle) => showToast(`Price Drop Reminder set for ${saleTitle}!`, 'success')}
          />
        )}

        {activeTab === 'pricing' && (
          <PricingPage
            onOpenAuth={handleOpenAuth}
          />
        )}

        {activeTab === 'profile' && (
          <UserProfilePage
            user={user}
            wishlistItems={wishlistItems}
          />
        )}

        {activeTab === 'admin' && (
          <AdminPanelPage />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating Toast Stack */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto px-4 py-3 rounded-2xl glass-card border shadow-2xl text-xs font-semibold flex items-center gap-2 animate-fadeIn ${
              t.type === 'success' 
                ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/80' 
                : 'border-blue-500/40 text-blue-300 bg-blue-950/80'
            }`}
          >
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* Modals */}
      <SavingsCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      <PriceAlertModal
        isOpen={isPriceAlertOpen}
        onClose={() => setIsPriceAlertOpen(false)}
        product={alertProduct}
        onSetAlert={(alertObj) => showToast(`Price alert activated at ₹${alertObj.targetPrice.toLocaleString('en-IN')}`, 'success')}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
        onLoginSuccess={handleLoginSuccess}
      />

    </div>
  );
}
