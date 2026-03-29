import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
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
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
