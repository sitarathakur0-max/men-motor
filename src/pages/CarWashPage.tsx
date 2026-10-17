import React, { useState } from 'react';
import { PageRoute } from '../utils/navigation';
import { Droplets, Phone, MessageSquare, Clock, MapPin, ChevronDown, CheckCircle2, Shield, AlertCircle } from 'lucide-react';

interface CarWashPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CarWashPage: React.FC<CarWashPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const carWashFaqs = [
    {
      q: "What does the car wash service include?",
      a: "Our car washing service focuses on thorough exterior cleaning to remove everyday road dust, mud, and environmental grime from your vehicle's bodywork, glass, and wheels."
    },
    {
      q: "How can I confirm car wash charges for my car?",
      a: "Car wash pricing may vary depending on vehicle size and current service offerings. Please contact us at +92 336 4336666 or message us on WhatsApp to confirm the exact rate for your vehicle."
    },
    {
      q: "Do I need to make an appointment or can I drive in?",
      a: "Walk-ins and drive-ins are welcome during operating hours. However, calling ahead is always recommended to check current queue length and confirm immediate bay availability."
    },
    {
      q: "How long does a typical exterior wash take?",
      a: "A standard wash usually takes around 20 to 35 minutes depending on vehicle size and bay queue. Contacting us before arrival allows us to give you a realistic time estimate."
    },
    {
      q: "What are your operating hours?",
      a: "Our facility is open daily, closing at 12 AM. We encourage calling ahead to confirm our current daily schedule before traveling."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Car Wash Hero */}
      <section className="bg-[#101010] border-b border-white/10 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFC928]/10 text-[#FFC928] rounded-full text-xs font-semibold mb-4">
                <Droplets className="w-3.5 h-3.5" />
                <span>Dedicated Wash Bay · Jampur Road</span>
              </div>
              
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
                Car Wash in Dera Ghazi Khan
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#A6A6A6] leading-relaxed max-w-xl">
                Keep your vehicle looking clean, sharp, and road-ready. Men &amp; Motors provides practical exterior car washing to clear road grime and dust on Jampur Road.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+923364336666"
                  className="px-7 py-3.5 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-[#FFC928]/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Check Bay Availability</span>
                </a>
                <a
                  href="https://wa.me/923364336666?text=Hello%20Men%20%26%20Motors,%20I%20would%20like%20to%20enquire%20about%20car%20wash%20pricing%20and%20availability%20today."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#191919] hover:bg-[#252525] border border-white/15 text-white font-display font-bold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#191919] shadow-2xl">
                <img
                  src="/src/assets/images/car_wash_detail_1792222239349.jpg"
                  alt="Car wash water sheeting on vehicle hood"
                  className="w-full h-72 sm:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-[#141414] border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#A6A6A6]">
                    <span className="font-semibold text-white">Car Washing Facility</span>
                    <span className="text-[#FFC928]">Jampur Road, DG Khan</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Practical Washing Information */}
      <section className="py-20 bg-[#F0F0EE] text-[#191919]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8E7019] block mb-2">
              Vehicle Maintenance Care
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#101010] uppercase tracking-tight">
              Why Regular Washing Matters
            </h2>
            <div className="w-16 h-1 bg-[#FFC928] mt-3 mb-6" />
            <p className="text-[#444] text-base leading-relaxed">
              Living and commuting in Dera Ghazi Khan involves frequent exposure to airborne dust, street debris, and road residue. Routine washing is an essential preventive habit:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#FFC928]/20 flex items-center justify-center text-[#8E7019] mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Clears Grime &amp; Dust
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                Removes settled dirt before it hardens or scratches your clear coat during daily wipe-downs.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#FFC928]/20 flex items-center justify-center text-[#8E7019] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Improves Road Visibility
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                Cleans windshields, side mirrors, and lamp lenses so night driving and glare remain safe and manageable.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#FFC928]/20 flex items-center justify-center text-[#8E7019] mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Maintains Vehicle Appearance
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                A clean exterior looks respectable for family use, daily office commutes, and long-distance travel.
              </p>
            </div>
          </div>

          {/* Service Availability Advisory */}
          <div className="mt-10 p-6 bg-white rounded-xl border border-black/10 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#8E7019] shrink-0 mt-0.5" />
            <div className="text-sm text-[#444] leading-relaxed">
              <span className="font-bold text-[#101010] block mb-1">Enquire for Current Washing Options</span>
              Please contact Men &amp; Motors directly to confirm the washing options currently available at our facility and get an accurate price quote for your specific car model.
            </div>
          </div>

        </div>
      </section>

      {/* Car Wash FAQs */}
      <section className="py-20 bg-[#101010] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
              Service Details
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight">
              Car Wash Questions &amp; Answers
            </h2>
          </div>

          <div className="space-y-3">
            {carWashFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-white/10 rounded-xl bg-[#141414] overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928]"
                  >
                    <span className="font-display font-bold text-base text-white uppercase tracking-wide">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FFC928] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-[#A6A6A6] leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-12 text-center p-8 bg-[#191919] border border-white/10 rounded-2xl">
            <h3 className="font-display font-extrabold text-2xl uppercase tracking-wide text-white">
              Ready for a Clean Drive?
            </h3>
            <p className="text-sm text-[#A6A6A6] mt-2 mb-6 max-w-md mx-auto">
              Call Men &amp; Motors or send a quick WhatsApp message to confirm wash bay availability on Jampur Road.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+923364336666"
                className="px-6 py-3 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call +92 336 4336666</span>
              </a>
              <a
                href="https://wa.me/923364336666?text=Hello%20Men%20%26%20Motors,%20I%20am%20enquiring%20about%20a%20car%20wash."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#101010] hover:bg-black border border-[#25D366]/40 text-white font-display font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
