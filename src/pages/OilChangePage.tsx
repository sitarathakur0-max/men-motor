import React, { useState } from 'react';
import { PageRoute } from '../utils/navigation';
import { Wrench, Phone, MessageSquare, AlertCircle, ChevronDown, CheckCircle2, BookOpen, Clock } from 'lucide-react';

interface OilChangePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const OilChangePage: React.FC<OilChangePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Vehicle enquiry helper state
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [notes, setNotes] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const oilFaqs = [
    {
      q: "Why is following the manufacturer's oil interval important?",
      a: "Engine oil breaks down over time due to heat, friction, and combustion byproducts. Replacing it as specified in your owner's manual maintains proper internal lubrication and protects engine components from premature wear."
    },
    {
      q: "How do I know which oil grade my car requires?",
      a: "Your vehicle's exact recommended oil specification (such as viscosity grade and standard) is listed in the owner's manual or under the engine oil cap. When you contact Men & Motors, mention your vehicle details so we can verify compatibility."
    },
    {
      q: "How can I check oil availability and current charges?",
      a: "Contact our team directly at +92 336 4336666 or via WhatsApp. Let us know your vehicle make and model, and we will confirm currently available oil options and exact service charges."
    },
    {
      q: "Can I bring my vehicle in today for an oil change?",
      a: "Yes, our service bays are open daily until 12 AM. We recommend calling before you visit so we can confirm current bay availability and prepare for your vehicle."
    },
    {
      q: "Do you inspect oil levels before and after service?",
      a: "Yes. Proper fluid inspection is standard procedure to ensure your engine is filled to the correct manufacturer dipstick marker."
    }
  ];

  // Helper to construct WhatsApp enquiry URL with pre-filled vehicle details
  const getWhatsAppEnquiryUrl = () => {
    let msg = "Hello Men & Motors, I would like to enquire about an oil change service for my vehicle.";
    if (vehicleMake || vehicleModel || vehicleYear) {
      msg += `\nVehicle Details: ${vehicleMake} ${vehicleModel} ${vehicleYear}`.trim();
    }
    if (notes) {
      msg += `\nNotes: ${notes}`;
    }
    msg += "\nPlease let me know compatible oil options, bay availability, and current pricing.";
    return `https://wa.me/923364336666?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Oil Change Hero */}
      <section className="bg-[#101010] border-b border-white/10 py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFC928]/10 text-[#FFC928] rounded-full text-xs font-semibold mb-4">
                <Wrench className="w-3.5 h-3.5" />
                <span>Routine Maintenance Bay · Jampur Road</span>
              </div>
              
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.95]">
                Routine Oil Changes in DG Khan
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#A6A6A6] leading-relaxed max-w-xl">
                Protect your vehicle's engine through regular, on-time oil servicing. Contact Men &amp; Motors on Jampur Road to enquire about compatible oil options and current service charges.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+923364336666"
                  className="px-7 py-3.5 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-[#FFC928]/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Enquire</span>
                </a>
                <a
                  href="#enquiry-helper"
                  className="px-6 py-3.5 bg-[#191919] hover:bg-[#252525] border border-white/15 text-white font-display font-bold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#FFC928]" />
                  <span>Vehicle Oil Enquiry Helper</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#191919] shadow-2xl">
                <img
                  src="/src/assets/images/oil_change_detail_1792222239742.jpg"
                  alt="Mechanic inspecting vehicle dipstick with engine oil"
                  className="w-full h-72 sm:h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-[#141414] border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#A6A6A6]">
                    <span className="font-semibold text-white">Engine Oil Maintenance</span>
                    <span className="text-[#FFC928]">Jampur Road, DG Khan</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Routine Oil Change Guidance Section */}
      <section className="py-20 bg-[#F0F0EE] text-[#191919]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8E7019] block mb-2">
              Manufacturer Guidelines
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#101010] uppercase tracking-tight">
              Why Regular Oil Changes Matter
            </h2>
            <div className="w-16 h-1 bg-[#FFC928] mt-3 mb-6" />
            <p className="text-[#444] text-base leading-relaxed">
              Engine oil performs multiple vital roles: lubricating pistons and crankshafts, dissipating heat, and capturing combustion particulates. Over mileage and time, oil degrades and requires replacement according to your vehicle's specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#FFC928]/20 flex items-center justify-center text-[#8E7019] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Check Your Manual
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                Always verify the exact oil viscosity grade and service interval specified in your car manufacturer's handbook.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#FFC928]/20 flex items-center justify-center text-[#8E7019] mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Routine Lubrication
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                Fresh, clean oil ensures that friction and wear between moving metallic engine surfaces are minimized.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-black/5 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-[#FFC928]/20 flex items-center justify-center text-[#8E7019] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Stay on Schedule
              </h3>
              <p className="mt-2 text-xs text-[#666] leading-relaxed">
                Don't postpone oil changes beyond manufacturer limits, particularly in hot or dusty local driving conditions.
              </p>
            </div>
          </div>

          {/* Oil Specification Disclaimer */}
          <div className="mt-10 p-6 bg-white rounded-xl border border-black/10 flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-[#8E7019] shrink-0 mt-0.5" />
            <div className="text-sm text-[#444] leading-relaxed">
              <span className="font-bold text-[#101010] block mb-1">
                Vehicle-Specific Specification Required
              </span>
              Engine oil compatibility depends strictly on your engine type, fuel system, and manufacturer recommendations. We do not prescribe a universal oil grade without knowing your vehicle's exact requirements. Please enquire with your vehicle details.
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Vehicle Oil Enquiry Helper */}
      <section id="enquiry-helper" className="py-20 bg-[#141414] text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
              Direct Enquiry Helper
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight">
              Ask About Oil Options For Your Car
            </h2>
            <p className="text-sm text-[#A6A6A6] mt-2">
              Fill in your vehicle details below to quickly format a direct WhatsApp enquiry or have details ready when you call us.
            </p>
          </div>

          <div className="bg-[#191919] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                  Vehicle Make
                </label>
                <input
                  type="text"
                  placeholder="e.g. Toyota, Honda, Suzuki"
                  value={vehicleMake}
                  onChange={(e) => setVehicleMake(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFC928]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                  Model
                </label>
                <input
                  type="text"
                  placeholder="e.g. Corolla, Civic, Cultus"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFC928]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                  Model Year
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2021"
                  value={vehicleYear}
                  onChange={(e) => setVehicleYear(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFC928]"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                Additional Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Asking for 5W-30 synthetic, current mileage, filter change enquiry"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFC928]"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-[#A6A6A6]">
                Instant connection to Men &amp; Motors team in DG Khan.
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-display font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href="tel:+923364336666"
                  className="px-6 py-3 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Oil Change FAQs */}
      <section className="py-20 bg-[#101010] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
              Common Questions
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight">
              Oil Change FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {oilFaqs.map((faq, idx) => {
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

        </div>
      </section>

    </div>
  );
};
