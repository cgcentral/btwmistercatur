import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Lazy load secondary pages to split bundle size
const About = lazy(() => import('./pages/About'));
const Content = lazy(() => import('./pages/Content'));
const Contact = lazy(() => import('./pages/Contact'));
const ECourse = lazy(() => import('./pages/ECourse'));
const Merchandise = lazy(() => import('./pages/Merchandise'));
const Career = lazy(() => import('./pages/Career'));
const Cart = lazy(() => import('./pages/Cart'));
const PSB = lazy(() => import('./pages/PSB'));
const PSB_FB = lazy(() => import('./pages/PSB_FB'));
const Checkout = lazy(() => import('./pages/Checkout'));
const OrderSuccess = lazy(() => import('./pages/OrderSuccess'));

// Lazy load Footer below the fold to save vital initial chunk bytes
const Footer = lazy(() => import('./components/Footer'));

import { CartProvider } from './context/CartContext';

// Analytics Tracker Component (Meta Pixel & GTM)
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Meta Pixel PageView
      if ((window as any).fbq) {
        (window as any).fbq('track', 'PageView');
      }
      
      // GTM Virtual PageView
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'virtual_pageview',
          page_path: location.pathname + location.search,
          page_title: document.title
        });
      }

      // GA4 gtag PageView
      if ((window as any).gtag) {
        (window as any).gtag('config', 'G-6X1CKGW3RL', {
          page_path: location.pathname + location.search,
          page_title: document.title
        });
      }
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AnalyticsTracker />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="min-h-screen bg-[#070913] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-10 h-10 border-4 border-brand-yellow border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-gray-400 font-medium text-sm tracking-wider animate-pulse">MEMUAT HALAMAN...</span>
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/content" element={<Content />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/e-course" element={<ECourse />} />
                <Route path="/merchandise" element={<Merchandise />} />
                <Route path="/career" element={<Career />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/psb" element={<PSB />} />
                <Route path="/psb-fb" element={<PSB_FB />} />
              </Routes>
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </Router>
    </CartProvider>
  );
}
