import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div
      className="bg-surface-lowest mode-transition"
      onClick={closeMobileMenu} // Close menu when clicking anywhere
    >
      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="min-h-screen">
        <Outlet /> {/* renders the child route */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
