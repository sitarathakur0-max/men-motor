import React, { useState } from 'react';
import { PageRoute } from '../utils/navigation';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Car Wash', route: 'car-wash' },
    { label: 'Oil Change', route: 'oil-change' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#101010]/95 backdrop-blur-md border-b border-[#FFC928]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (Primary Action) */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand element */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928] rounded p-1 transition-opacity hover:opacity-90"
            aria-label="Men & Motors Home"
          >
            <BrandLogo variant="compact" size="md" />
          </button>

          {/* Zone 2: Nav links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleLinkClick(link.route)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer text-sm font-semibold uppercase tracking-wider ${
                    isActive
                      ? 'text-[#FFC928]'
                      : 'text-[#F7F7F5] hover:text-[#FFC928]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFC928] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:+923364336666"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#F7F7F5] bg-[#191919] border border-white/10 hover:border-[#FFC928]/40 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC928]" />
              <span>+92 336 4336666</span>
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#FFC928] hover:bg-[#E5B21D] rounded-lg transition-all shadow-md shadow-[#FFC928]/10 cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="tel:+923364336666"
              className="p-2 text-[#FFC928] bg-[#191919] border border-white/10 rounded-lg"
              aria-label="Call Men & Motors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F7F7F5] hover:text-[#FFC928] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928] rounded-lg"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-b border-[#FFC928]/20 px-6 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  onClick={() => handleLinkClick(link.route)}
                  className={`text-left py-2.5 px-3 rounded-md text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#191919] text-[#FFC928] border-l-2 border-[#FFC928]'
                      : 'text-[#F7F7F5] hover:bg-[#191919]/50 hover:text-[#FFC928]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-black bg-[#FFC928] hover:bg-[#E5B21D] rounded-lg transition-colors cursor-pointer"
              >
                Contact Us
              </button>
              <a
                href="tel:+923364336666"
                className="w-full py-2.5 text-center text-xs font-bold text-[#F7F7F5] bg-[#191919] border border-white/10 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFC928]" />
                Call +92 336 4336666
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
