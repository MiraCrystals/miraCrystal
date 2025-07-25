import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteShowcase from "./components/ChakraShowcase";
import FeaturedProducts from "./components/FeaturedProducts";
import FounderSection from "./components/FounderSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WaveSection from "./components/WaveSection";
import SpiritualBackground from "./components/SpiritualBackground";
import ChakraProgress from "./components/ChakraProgress";
import SoundToggle from "./components/SoundToggle";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import ScrollToHash from "./components/ScrollToHash";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

import { CartProvider } from "./components/CartContext";
import AdminProducts from "./components/AdminProducts";
import AdminOrders from "./components/AdminOrders";
import AdminUsers from "./components/AdminUsers";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen relative">
          <SpiritualBackground />

          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ScrollToHash />
                    <Hero />
                    <WaveSection />
                    <ChakraProgress />
                    <WaveSection reverse />
                    <FeaturedProducts />
                    <WaveSection />
                    <FounderSection />
                    <WaveSection reverse />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/users" element={<AdminUsers />} />

              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
