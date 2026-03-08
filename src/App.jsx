import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import WhatIsCopra from "./WhatIsCopra";
import WhySellToUs from "./WhySellToUs";
import Gallery from "./Gallery";
import Contact from "./Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-is-copra" element={<WhatIsCopra />} />
          <Route path="/why-sell-to-us" element={<WhySellToUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;