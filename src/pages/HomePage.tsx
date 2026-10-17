import React, { useState } from 'react';
import { PageRoute } from '../utils/navigation';
import { BrandLogo, GoldEmblem } from '../components/BrandLogo';
import { 
  Phone, 
  MapPin, 
  ChevronDown, 
  Clock, 
  Sparkles, 
  Droplets, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Where is Men & Motors located?",
      a: "Men & Motors is located on Jampur Road in Dera Ghazi Khan, Pakistan. You can easily find us along Jampur Road or call us directly for local directions."
    },
    {
      q: "What services does Men & Motors provide?",
      a: "Our core services are exterior vehicle washing and routine engine oil changes. We focus specifically on providing practical cleaning and routine lubrication maintenance."
    },
    {
      q: "How can I enquire about car washing?",
      a: "You can enquire about our car washing service by calling us at +92 336 4336666 or messaging us directly on WhatsApp. Our staff can advise you on current bay availability and wait times."
    },
    {
      q: "Can I ask about oil options for my vehicle?",
      a: "Yes. We encourage drivers to contact us with their vehicle make, model, and year so we can discuss suitable oil options matching your manufacturer recommendations and confirm current service charges."
    },
    {
      q: "How can I confirm current prices?",
      a: "Because pricing depends on service requirements and vehicle specifications, please contact Men & Motors via phone or WhatsApp for accurate, up-to-date pricing."
    },
    {
      q: "Should I call before visiting?",
      a: "Calling ahead is recommended. While you are welcome to visit our facility on Jampur Road during operating hours, a quick call allows you to confirm bay availability and minimize your waiting time."
    },
    {
      q: "How can I contact Men & Motors?",
      a: "You can reach us by phone at +92 336 4336666, send a message on WhatsApp, or connect with us through our official Facebook and Instagram pages."
    },
    {
      q: "How can I find the business on social media?",
      a: "You can find us on Facebook at facebook.com/MenAndMotorsDGKhan/ and on Instagram at instagram.com/menandmotors.pk/."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* SECTION A: HERO */}
      <section className="relative bg-[#101010] border-b border-white/10 overflow-hidden">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FFC928_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Meta, Value, CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              
              {/* Brand Logo Lockup & Location Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#191919] border border-[#FFC928]/30 rounded-full text-xs font-semibold text-[#FFC928]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Jampur Road, Dera Ghazi Khan</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#A6A6A6]">
                  <Clock className="w-3.5 h-3.5 text-[#FFC928]" />
                  <span>Open Daily · Closes 12 AM</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95] text-balance">
                Give Your Car the Care It Deserves
              </h1>

              {/* Secondary Heading */}
              <p className="font-display font-bold text-xl sm:text-2xl text-[#FFC928] uppercase tracking-wide mt-4">
                Car Wash &amp; Oil Change in Dera Ghazi Khan
              </p>

              {/* Supporting Text */}
              <p className="mt-5 text-base sm:text-lg text-[#A6A6A6] leading-relaxed max-w-xl">
                Keep your vehicle looking clean and stay on top of routine oil changes with Men &amp; Motors. Visit or contact us in Dera Ghazi Khan to enquire about available services and current pricing.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="tel:+923364336666"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-base uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-[#FFC928]/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href="#services-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#191919] hover:bg-[#252525] border border-white/15 text-[#F7F7F5] font-display font-bold text-base uppercase tracking-wider rounded-lg transition-all"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#FFC928]" />
                </a>
              </div>

              {/* Verified Key Commitments */}
              <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs text-[#A6A6A6]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC928] shrink-0" />
                  <span>Exterior Washing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC928] shrink-0" />
                  <span>Routine Oil Changes</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC928] shrink-0" />
                  <span>Jampur Road Facility</span>
                </div>
              </div>

            </div>

            {/* Right Column: Prominent Official Brand Logo & Illustrative Automotive Visual */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Prominent Official Brand Asset Card */}
              <div className="bg-[#191919] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC928]/5 rounded-full blur-2xl pointer-events-none" />
                <BrandLogo variant="full" size="xl" />
                <div className="mt-6 pt-5 border-t border-white/10 w-full flex items-center justify-between text-xs text-[#A6A6A6]">
                  <span>Dera Ghazi Khan</span>
                  <span className="text-[#FFC928] font-bold">Automotive Care</span>
                </div>
              </div>

              {/* Illustrative Automotive Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#191919] group">
                <img
                  src="/src/assets/images/car_wash_detail_1792222239349.jpg"
                  alt="Illustrative visual of car exterior water rinse and cleaning"
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <p className="text-xs text-[#F7F7F5] font-medium">
                    Illustrative automotive visual · Thorough exterior washing on Jampur Road
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: INTRODUCTION */}
      <section className="py-20 bg-[#F0F0EE] text-[#191919]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8E7019] block mb-2">
              Automotive Care in DG Khan
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#101010] uppercase tracking-tight">
              Practical Care for Your Everyday Drive
            </h2>
            <div className="w-16 h-1 bg-[#FFC928] mt-3 mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#191919] leading-relaxed text-base">
            <p>
              Men &amp; Motors operates as a dedicated automotive care business located on Jampur Road in Dera Ghazi Khan. We keep things straightforward: focusing specifically on the two most essential aspects of routine vehicle upkeep—exterior car washing and routine engine oil changes.
            </p>
            <p>
              Whether you need to wash off everyday dust and road grime or need to replace your engine oil as scheduled, our facility is equipped to assist you. Visitors are encouraged to contact our team to confirm current bay availability, enquire about compatible oil options, and ask about current charges.
            </p>
          </div>

          <div className="mt-10 p-6 bg-white rounded-xl border border-black/5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-lg uppercase text-[#101010]">
                Planning a Visit Today?
              </h3>
              <p className="text-sm text-[#555] mt-0.5">
                Call us before heading over to confirm current bay wait times on Jampur Road.
              </p>
            </div>
            <a
              href="tel:+923364336666"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#101010] hover:bg-black text-[#FFC928] font-display font-bold text-sm uppercase tracking-wider rounded-lg transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>+92 336 4336666</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION C: MAIN SERVICES (Two visually distinct sections) */}
      <section id="services-section" className="py-24 bg-[#101010] text-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
              Our Core Services
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              Focused On What Your Car Needs
            </h2>
            <p className="text-[#A6A6A6] text-sm sm:text-base mt-3">
              We specialize strictly in car washing and oil changes—delivering practical, routine care without unnecessary complexity.
            </p>
          </div>

          {/* Service 1: Car Wash */}
          <div className="bg-[#191919] border border-white/10 rounded-2xl p-8 sm:p-12 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFC928]/10 text-[#FFC928] rounded-md text-xs font-bold uppercase tracking-wider mb-4">
                <Droplets className="w-4 h-4" />
                <span>Service Category 01</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                A Cleaner Look for Your Vehicle
              </h3>
              <p className="mt-4 text-[#A6A6A6] text-base leading-relaxed">
                Driving on local roads exposes your car to road dust, mud, and everyday dirt. Regular car washing helps protect your vehicle's exterior surfaces, preserves clear visibility through your windshield and mirrors, and keeps your car looking sharp and presentable.
              </p>
              
              <div className="mt-6 space-y-2.5 text-sm text-[#F7F7F5]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  <span>Helps remove accumulated dust and everyday road dirt</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  <span>Maintains clean bodywork appearance for daily driving</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  <span>Dedicated wash bay facility on Jampur Road</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('car-wash')}
                  className="px-6 py-3 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-sm uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Enquire About Car Wash
                </button>
                <a
                  href="https://wa.me/923364336666?text=Hello%20Men%20%26%20Motors,%20I%20am%20enquiring%20about%20car%20washing%20options%20and%20bay%20availability."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#101010] hover:bg-black border border-white/15 text-white font-display font-bold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>WhatsApp Enquiry</span>
                  <ExternalLink className="w-4 h-4 text-[#25D366]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#101010]">
                <img
                  src="/src/assets/images/car_wash_detail_1792222239349.jpg"
                  alt="Car wash water rinse process"
                  className="w-full h-64 sm:h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#141414] border-t border-white/10 text-xs text-[#A6A6A6]">
                  Clean exterior rinsing for everyday vehicle care.
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Oil Change */}
          <div className="bg-[#191919] border border-white/10 rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#101010]">
                <img
                  src="/src/assets/images/oil_change_detail_1792222239742.jpg"
                  alt="Automotive routine oil change inspection"
                  className="w-full h-64 sm:h-72 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#141414] border-t border-white/10 text-xs text-[#A6A6A6]">
                  Routine engine lubrication checks according to vehicle manufacturer manuals.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFC928]/10 text-[#FFC928] rounded-md text-xs font-bold uppercase tracking-wider mb-4">
                <Wrench className="w-4 h-4" />
                <span>Service Category 02</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
                Stay on Top of Routine Oil Changes
              </h3>
              <p className="mt-4 text-[#A6A6A6] text-base leading-relaxed">
                Following your vehicle manufacturer's recommended oil-change interval is fundamental to keeping internal engine components properly lubricated and running smoothly. Regular oil replacement helps remove contaminants and ensures proper engine protection.
              </p>
              
              <div className="mt-6 space-y-2.5 text-sm text-[#F7F7F5]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  <span>Routine oil replacement based on manufacturer specifications</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  <span>Enquire for vehicle-specific compatibility and current oil options</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  <span>Convenient service location on Jampur Road, DG Khan</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('oil-change')}
                  className="px-6 py-3 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-sm uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                >
                  Enquire About Oil Change
                </button>
                <a
                  href="https://wa.me/923364336666?text=Hello%20Men%20%26%20Motors,%20I%20would%20like%20to%20ask%20about%20oil%20options%20and%20pricing%20for%20my%20vehicle."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#101010] hover:bg-black border border-white/15 text-white font-display font-bold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>WhatsApp Enquiry</span>
                  <ExternalLink className="w-4 h-4 text-[#25D366]" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION D: WHY ROUTINE VEHICLE CARE MATTERS */}
      <section className="py-20 bg-[#141414] border-y border-white/10 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
              Vehicle Maintenance Fundamentals
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-white">
              Small Maintenance Habits Make a Difference
            </h2>
            <div className="w-16 h-1 bg-[#FFC928] mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#191919] border border-white/10 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#FFC928]/10 text-[#FFC928] flex items-center justify-center font-display font-bold text-base mb-4">
                01
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white">
                Regular washing helps remove road dirt and grime
              </h3>
              <p className="mt-2.5 text-sm text-[#A6A6A6] leading-relaxed">
                Everyday driving in Dera Ghazi Khan exposes vehicles to dust, fine sand, and road grime. Timely washing prevents buildup on exterior paint, windshield glass, and underbody areas.
              </p>
            </div>

            <div className="p-6 bg-[#191919] border border-white/10 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#FFC928]/10 text-[#FFC928] flex items-center justify-center font-display font-bold text-base mb-4">
                02
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white">
                Following the manufacturer's schedule supports proper care
              </h3>
              <p className="mt-2.5 text-sm text-[#A6A6A6] leading-relaxed">
                Vehicle manufacturers establish specific mileage and time intervals for oil servicing. Adhering to these intervals helps keep internal engine parts lubricated and clean.
              </p>
            </div>

            <div className="p-6 bg-[#191919] border border-white/10 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#FFC928]/10 text-[#FFC928] flex items-center justify-center font-display font-bold text-base mb-4">
                03
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white">
                Using oil suitable for the vehicle is important
              </h3>
              <p className="mt-2.5 text-sm text-[#A6A6A6] leading-relaxed">
                Different engines require specific oil viscosities and formulations. Matching the correct specification to your car is essential for optimal engine health and performance.
              </p>
            </div>

            <div className="p-6 bg-[#191919] border border-white/10 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#FFC928]/10 text-[#FFC928] flex items-center justify-center font-display font-bold text-base mb-4">
                04
              </div>
              <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white">
                Tracking routine maintenance helps drivers plan ahead
              </h3>
              <p className="mt-2.5 text-sm text-[#A6A6A6] leading-relaxed">
                Keeping track of your last wash and oil replacement date makes vehicle ownership simpler, helping prevent missed service intervals and unexpected maintenance downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: HOW TO VISIT */}
      <section className="py-20 bg-[#F0F0EE] text-[#191919]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8E7019] block mb-2">
                Visit Men &amp; Motors
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#101010] uppercase tracking-tight">
                Find Men &amp; Motors on Jampur Road
              </h2>
              <div className="w-16 h-1 bg-[#FFC928] mt-3 mb-6" />

              <div className="p-5 bg-white rounded-xl border border-black/5 shadow-sm mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8E7019] shrink-0 mt-1" />
                  <div>
                    <span className="font-display font-bold text-base uppercase text-[#101010] block">
                      Physical Location
                    </span>
                    <span className="text-sm font-semibold text-[#333] block mt-0.5">
                      Jampur Road, Dera Ghazi Khan, Pakistan
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-base text-[#444] leading-relaxed mb-6">
                We are conveniently located directly on Jampur Road in DG Khan. Customers are welcome to contact our team before visiting to confirm bay availability, ask about expected waiting times, and check available oil specifications.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="tel:+923364336666"
                  className="px-6 py-3 bg-[#101010] hover:bg-black text-[#FFC928] font-display font-extrabold text-sm uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Men &amp; Motors</span>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Men+and+Motors+Jampur+Road+Dera+Ghazi+Khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-neutral-100 border border-black/10 text-[#101010] font-display font-bold text-sm uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#8E7019]" />
                  <span>Get Location Information</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#101010] text-white p-8 rounded-2xl border border-black/10 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <GoldEmblem size={40} />
                  <div>
                    <h3 className="font-display font-bold text-lg uppercase text-white leading-tight">
                      Service Bays
                    </h3>
                    <span className="text-xs text-[#FFC928]">Jampur Road, DG Khan</span>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-[#A6A6A6] border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white font-medium">Car Wash Bay</span>
                    <span className="text-[#FFC928]">Exterior Cleaning</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white font-medium">Oil Service Bay</span>
                    <span className="text-[#FFC928]">Engine Lubrication</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white font-medium">Daily Schedule</span>
                    <span className="text-[#F7F7F5]">Closes 12 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white font-medium">Enquiries</span>
                    <span className="text-[#F7F7F5]">+92 336 4336666</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <span className="text-[11px] text-[#A6A6A6] block">
                    Please call ahead to confirm current queue and availability.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION F: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 bg-[#101010] text-[#F7F7F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
              Common Questions
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#A6A6A6] text-sm mt-3">
              Clear, factual answers regarding Men &amp; Motors car washing and oil change services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-white/10 rounded-xl bg-[#141414] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC928] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                      {idx + 1}. {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FFC928] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#A6A6A6] leading-relaxed border-t border-white/5 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-xs text-[#A6A6A6]">
            Have a different question? Feel free to call us at{' '}
            <a href="tel:+923364336666" className="text-[#FFC928] underline font-semibold">
              +92 336 4336666
            </a>{' '}
            for direct assistance.
          </div>
        </div>
      </section>

      {/* SECTION G: FINAL CTA */}
      <section className="py-20 bg-[#141414] border-t border-[#FFC928]/20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          <GoldEmblem size={64} className="mb-4" />
          
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            Ready to Give Your Car Some Care?
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#A6A6A6] max-w-xl leading-relaxed">
            Contact Men &amp; Motors in Dera Ghazi Khan for information about car washing, oil changes, available services, and current pricing.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+923364336666"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-base uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-[#FFC928]/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/923364336666?text=Hello%20Men%20%26%20Motors,%20I%20would%20like%20to%20enquire%20about%20car%20wash%20and%20oil%20change%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#191919] hover:bg-[#222] border border-[#25D366]/40 hover:border-[#25D366] text-white font-display font-bold text-base uppercase tracking-wider rounded-lg transition-all"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-[#A6A6A6]">
            <span>Jampur Road, Dera Ghazi Khan</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>A Project of Munro Cafe</span>
          </div>
        </div>
      </section>

    </div>
  );
};
