import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#features' },
    { label: 'Why Us', href: '#problem-solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Vendor Plans', href: '#personas' },
    { label: 'Rate Calculator', href: '#calculator' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-[#ffe17c] border-b-2 border-black z-50">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#"
          className="font-cabinet text-2xl font-extrabold tracking-tighter text-black uppercase whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          Kinetic Express
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-satoshi text-sm font-bold text-black tracking-tight hover:underline underline-offset-4 decoration-2 decoration-black transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenTrial}
            className="hidden md:inline-flex neo-btn-primary px-5 py-2.5 text-sm tracking-tight whitespace-nowrap shrink-0"
          >
            Book a Rider
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 bg-black text-[#ffe17c] border-2 border-black flex items-center justify-center neo-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ffe17c] border-b-2 border-black px-6 py-6 space-y-4 neo-shadow-lg">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-satoshi text-base font-bold text-black hover:pl-2 transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="pt-4 border-t-2 border-black">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="neo-btn-primary w-full py-3 text-sm whitespace-nowrap"
            >
              Book a Rider
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
