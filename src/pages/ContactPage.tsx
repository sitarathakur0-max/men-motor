import React, { useState } from 'react';
import { PageRoute } from '../utils/navigation';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageSquare, 
  ExternalLink, 
  Check, 
  Send
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Car Wash');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [message, setMessage] = useState('');

  // Handle WhatsApp submission with pre-filled content
  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello Men & Motors,\nMy name is ${name || 'a customer'}.`;
    if (phone) text += `\nPhone: ${phone}`;
    text += `\nEnquiry Type: ${serviceType}`;
    if (vehicleDetails) text += `\nVehicle: ${vehicleDetails}`;
    if (message) text += `\nMessage: ${message}`;
    text += `\nPlease let me know availability and pricing on Jampur Road.`;

    const url = `https://wa.me/923364336666?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Contact Hero */}
      <section className="bg-[#101010] border-b border-white/10 py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-3">
            Contact Men &amp; Motors
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
            Get in Touch With Our Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#A6A6A6] max-w-xl mx-auto leading-relaxed">
            Have questions regarding car wash availability or oil compatibility? Reach out directly by phone, WhatsApp, or connect on our social channels.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#141414] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Info & Socials */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
                  Business Information
                </span>
                <h2 className="font-display font-extrabold text-3xl text-white uppercase tracking-tight mb-6">
                  Men &amp; Motors
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 bg-[#191919] border border-white/10 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#FFC928]/10 text-[#FFC928] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#A6A6A6] block">
                        Telephone &amp; WhatsApp
                      </span>
                      <a
                        href="tel:+923364336666"
                        className="font-display font-bold text-xl text-white hover:text-[#FFC928] transition-colors block mt-0.5"
                      >
                        +92 336 4336666
                      </a>
                      <span className="text-xs text-[#A6A6A6] mt-1 block">
                        Click to call directly or message on WhatsApp
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 bg-[#191919] border border-white/10 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#FFC928]/10 text-[#FFC928] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#A6A6A6] block">
                        Physical Location
                      </span>
                      <span className="font-display font-bold text-lg text-white block mt-0.5">
                        Jampur Road
                      </span>
                      <span className="text-sm text-[#A6A6A6] block">
                        Dera Ghazi Khan, Pakistan
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-4 bg-[#191919] border border-white/10 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#FFC928]/10 text-[#FFC928] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#A6A6A6] block">
                        Service Hours
                      </span>
                      <span className="font-display font-bold text-lg text-white block mt-0.5">
                        Open Daily (Closes 12 AM)
                      </span>
                      <span className="text-xs text-[#A6A6A6] mt-1 block">
                        Confirm current bay availability before traveling
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-xs font-semibold text-[#A6A6A6] uppercase tracking-wider block mb-3">
                    Follow Official Social Pages
                  </span>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://www.facebook.com/MenAndMotorsDGKhan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#191919] hover:bg-[#222] border border-white/10 hover:border-[#FFC928] rounded-xl flex items-center gap-3 transition-colors flex-1"
                    >
                      <Facebook className="w-5 h-5 text-[#FFC928]" />
                      <div className="text-left">
                        <span className="text-xs text-white font-semibold block">Facebook</span>
                        <span className="text-[11px] text-[#A6A6A6]">@MenAndMotorsDGKhan</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#555] ml-auto" />
                    </a>

                    <a
                      href="https://www.instagram.com/menandmotors.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#191919] hover:bg-[#222] border border-white/10 hover:border-[#FFC928] rounded-xl flex items-center gap-3 transition-colors flex-1"
                    >
                      <Instagram className="w-5 h-5 text-[#FFC928]" />
                      <div className="text-left">
                        <span className="text-xs text-white font-semibold block">Instagram</span>
                        <span className="text-[11px] text-[#A6A6A6]">@menandmotors.pk</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#555] ml-auto" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Direct Quick WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/923364336666"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-display font-extrabold text-sm uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/10"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp (+92 336 4336666)</span>
                </a>
              </div>

            </div>

            {/* Right Column: Clean Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#191919] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
                
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[#FFC928] block mb-2">
                  Direct Enquiry
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                  Send Your Vehicle Enquiry
                </h3>
                <p className="text-xs text-[#A6A6A6] mb-6 leading-relaxed">
                  Fill in your enquiry below. Since we communicate directly via phone and WhatsApp, clicking "Send via WhatsApp" will open a pre-formatted message directly to our staff.
                </p>

                <form onSubmit={handleWhatsAppSend} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFC928]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0300 1234567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFC928]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                        Enquiry Type
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-[#FFC928]"
                      >
                        <option value="Car Wash">Car Wash Service</option>
                        <option value="Oil Change">Oil Change Service</option>
                        <option value="Both Car Wash & Oil Change">Both Car Wash &amp; Oil Change</option>
                        <option value="General Enquiry">General Information</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                        Vehicle Details (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Toyota Corolla 2020"
                        value={vehicleDetails}
                        onChange={(e) => setVehicleDetails(e.target.value)}
                        className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFC928]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A6A6A6] mb-1.5">
                      Your Message or Question
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specify your question or preferred service time..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#101010] border border-white/10 rounded-lg text-sm text-white placeholder:text-[#555] focus:outline-none focus:border-[#FFC928] resize-none"
                    />
                  </div>

                  {/* Submission Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-display font-extrabold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                    
                    <a
                      href="tel:+923364336666"
                      className="flex-1 py-3.5 bg-[#FFC928] hover:bg-[#E5B21D] text-black font-display font-extrabold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Us Directly</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-[#A6A6A6] text-center pt-2">
                    Direct communication ensures immediate response without delayed form processing.
                  </p>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
