import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Contact from './pages/Contact';
import ECourse from './pages/ECourse';
import Merchandise from './pages/Merchandise';
import Career from './pages/Career';
import Cart from './pages/Cart';
import PSB from './pages/PSB';
import PSB_FB from './pages/PSB_FB';
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/content" element={<Content />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/e-course" element={<ECourse />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/career" element={<Career />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/psb" element={<PSB />} />
              <Route path="/psb-fb" element={<PSB_FB />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
