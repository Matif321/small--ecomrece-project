import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CategorySection from "./Components/CategorySection";
import TrendingItems from "./Components/TrendingItems";
import Newarrival from "./Components/Newarrival";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ContactPage from "./pages/ContactPage";
import Wishlist from "./pages/Wishlist";
import Auth from "./pages/Auth";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Checkout from "./pages/Checkout";
import WhatsAppButton from "./Components/WhatsAppButton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />
      <ToastContainer position="bottom-right" autoClose={3000}
        hideProgressBar={false}
        newestOnTop closeOnClick rtl={false}
        pauseOnFocusLoss draggable pauseOnHover theme="colored" />

      <div style={{ paddingTop: '80px' }}>
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CategorySection />
                <TrendingItems />
                <Newarrival />
                <Testimonials />
                <Footer />
              </>
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={
              <>
                <ContactPage />
                <Footer />
              </>
            }
          />

          {/* WISHLIST */}
          <Route
            path="/heart"
            element={
              <>
                <Wishlist />
                <Footer />
              </>
            }
          />

          {/* CART */}
          <Route
            path="/cart"
            element={
              <>
                <Cart />
                <Footer />
              </>
            }
          />

          {/* LOGIN / AUTH */}
          <Route path="/auth" element={<Auth />} />

          {/* SHOP ROUTES */}
          <Route path="/category/:categoryName" element={<><CategoryPage /><Footer /></>} />
          <Route path="/product/:productId" element={<><ProductDetailsPage /><Footer /></>} />
          <Route path="/checkout" element={<><Checkout /><Footer /></>} />
        </Routes>
      </div>
    </>
  );
}
