import React from 'react';
import { PageRoute } from '../utils/navigation';
import { BrandLogo } from './BrandLogo';
import { Phone, MapPin, Facebook, Instagram, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#141414] text-[#F7F7F5] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Parent identity */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <BrandLogo variant="compact" size="lg" className="mb-4" />
            <p className="text-[#A6A6A6] text-sm leading-relaxed max-w-sm mt-2">
              Men &amp; Motors provides practical automotive care in Dera Ghazi Khan, focusing on exterior vehicle washing and routine engine oil changes to keep your car running clean and reliably.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FFC928]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FFC928]" />
              <span>A Project of Munro Cafe</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A6A6A6]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#FFC928] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#FFC928] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('car-wash')}
                  className="hover:text-[#FFC928] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Car Wash</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('oil-change')}
                  className="hover:text-[#FFC928] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Oil Change</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FFC928] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white mb-4">
              Location &amp; Enquiries
            </h3>
            
            <div className="space-y-3.5 text-sm text-[#A6A6A6]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFC928] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Jampur Road</span>
                  <span>Dera Ghazi Khan, Pakistan</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FFC928] shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="tel:+923364336666" 
                    className="text-white hover:text-[#FFC928] transition-colors font-medium block"
                  >
                    +92 336 4336666
                  </a>
                  <span className="text-xs text-[#A6A6A6]">Calls &amp; WhatsApp Enquiries</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FFC928] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Open Daily (Closes 12 AM)</span>
                  <span className="text-xs text-[#A6A6A6]">Call before visiting to confirm bay availability</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-3">
                Connect on Social Media
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/MenAndMotorsDGKhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#191919] border border-white/10 hover:border-[#FFC928] hover:text-[#FFC928] text-white flex items-center justify-center transition-all"
                  aria-label="Men & Motors on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/menandmotors.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#191919] border border-white/10 hover:border-[#FFC928] hover:text-[#FFC928] text-white flex items-center justify-center transition-all"
                  aria-label="Men & Motors on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923364336666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#191919] border border-white/10 hover:border-[#25D366] text-xs font-semibold text-white hover:text-[#25D366] flex items-center gap-1.5 transition-all"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A6A6A6] gap-4">
          <p>© {currentYear} Men &amp; Motors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Car Wash &amp; Oil Change</span>
            <span aria-hidden="true">·</span>
            <span>Jampur Road, DG Khan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
