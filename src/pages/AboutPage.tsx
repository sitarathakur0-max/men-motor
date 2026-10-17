import React from 'react';
import { PageRoute } from '../utils/navigation';
import { BrandLogo, GoldEmblem } from '../components/BrandLogo';
import { MapPin, Phone, MessageSquare, Clock, Droplets, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Banner */}
      <section className="bg-[#101010] border-b border-white/10 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] mb-3">
            About Men &amp; Motors
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight text-balance">
            Automotive Care on Jampur Road
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#A6A6A6] max-w-2xl leading-relaxed">
            Men &amp; Motors provides dedicated car washing and routine engine oil changes in Dera Ghazi Khan, helping drivers keep their vehicles clean and well-maintained.
          </p>
        </div>
      </section>

      {/* Main Brand & Identity Presentation */}
      <section className="py-20 bg-[#141414] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Logo Display Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-[#191919] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col items-center shadow-2xl">
                <BrandLogo variant="full" size="xl" />
                <div className="mt-6 pt-5 border-t border-white/10 w-full text-center">
                  <span className="text-xs uppercase tracking-wider text-[#A6A6A6]">
                    Official Brand Identity
                  </span>
                </div>
              </div>
            </div>

            {/* Business Introduction Copy */}
            <div className="lg:col-span-7">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
                Our Focus
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
                Practical, Reliable Automotive Maintenance
              </h2>
              <div className="w-16 h-1 bg-[#FFC928] mt-3 mb-6" />

              <div className="space-y-4 text-base text-[#A6A6A6] leading-relaxed">
                <p>
                  Located on Jampur Road in Dera Ghazi Khan, Men &amp; Motors operates as an automotive care facility specifically dedicated to routine vehicle upkeep.
                </p>
                <p>
                  Rather than branching into complex and unrelated mechanical overhauls, our business concentrates on what daily drivers need most consistently: removing road dirt and grime through thorough exterior washing, and preserving engine longevity through on-schedule oil servicing.
                </p>
                <p>
                  As shown in our official logo, Men &amp; Motors operates as “A Project of Munro Cafe”. We take pride in delivering honest, straightforward service to local vehicle owners across DG Khan.
                </p>
              </div>

              {/* Service Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-[#191919] border border-white/10 rounded-xl">
                  <div className="flex items-center gap-2.5 text-white font-display font-bold text-base uppercase">
                    <Droplets className="w-4 h-4 text-[#FFC928]" />
                    <span>Car Washing</span>
                  </div>
                  <p className="mt-2 text-xs text-[#A6A6A6] leading-relaxed">
                    Exterior vehicle cleaning to wash away everyday road dust and maintain paint appearance.
                  </p>
                </div>
                <div className="p-4 bg-[#191919] border border-white/10 rounded-xl">
                  <div className="flex items-center gap-2.5 text-white font-display font-bold text-base uppercase">
                    <Wrench className="w-4 h-4 text-[#FFC928]" />
                    <span>Oil Change</span>
                  </div>
                  <p className="mt-2 text-xs text-[#A6A6A6] leading-relaxed">
                    Routine engine lubrication servicing in accordance with vehicle manufacturer schedules.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* How to Enquire Section */}
      <section className="py-20 bg-[#F0F0EE] text-[#191919]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8E7019] block mb-2">
              Customer Guidance
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#101010] uppercase tracking-tight">
              How Customers Can Enquire
            </h2>
            <div className="w-16 h-1 bg-[#FFC928] mt-3 mb-6" />
            <p className="text-[#444] text-base leading-relaxed">
              We value your time and aim to make every visit as smooth as possible. Here is how you can easily connect with our team:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <span className="font-display font-extrabold text-2xl text-[#8E7019] block mb-2">01</span>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Call Before Visiting
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                Give us a quick call at +92 336 4336666 to check current queue length and confirm that a bay is open.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <span className="font-display font-extrabold text-2xl text-[#8E7019] block mb-2">02</span>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                State Vehicle Details
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                For oil changes, let our team know your vehicle make and model so we can verify compatible oil options and pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-black/5 shadow-sm">
              <span className="font-display font-extrabold text-2xl text-[#8E7019] block mb-2">03</span>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Visit Jampur Road
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                Drive into our Jampur Road facility in Dera Ghazi Khan to have your wash or oil service completed efficiently.
              </p>
            </div>
          </div>

          {/* Direct Contact CTAs */}
          <div className="mt-12 p-8 bg-[#101010] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="font-display font-extrabold text-2xl uppercase tracking-wide text-white">
                Have a Question About Our Services?
              </h3>
              <p className="text-sm text-[#A6A6A6] mt-1">
                Reach out directly via phone or WhatsApp for instant service assistance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+923364336666"
                className="px-6 py-3 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +92 336 4336666</span>
              </a>
              <a
                href="https://wa.me/923364336666"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#191919] hover:bg-[#252525] border border-white/10 text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
