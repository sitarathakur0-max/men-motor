import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed left-5 sm:left-6 bottom-6 z-50">
      <a
        href="https://wa.me/923364336666?text=Hello%20Men%20%26%20Motors,%20I%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Men & Motors on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg shadow-black/40 hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC928]"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.01 2.002c-7.72 0-14 6.279-14 14 0 2.47.643 4.88 1.865 7.001L2 30l7.21-1.84a13.94 13.94 0 0 0 6.8 1.761c7.72 0 14-6.28 14-14s-6.28-13.919-14-13.919zm0 25.599c-2.17 0-4.3-.58-6.16-1.68l-.44-.26-4.57 1.17 1.22-4.45-.29-.46a11.58 11.58 0 0 1-1.76-6.32c0-6.4 5.2-11.6 11.6-11.6 6.4 0 11.6 5.2 11.6 11.6s-5.2 11.6-11.6 11.6zm6.36-8.71c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.78.18-.23.35-.89 1.14-1.09 1.37-.2.23-.41.26-.76.09-.35-.18-1.48-.55-2.82-1.74-1.04-.93-1.74-2.08-1.94-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.61.18-.2.23-.35.35-.59.12-.23.06-.44-.03-.61-.09-.18-.78-1.89-1.07-2.58-.28-.68-.57-.59-.78-.6-.2-.01-.44-.01-.67-.01s-.61.09-.93.44c-.32.35-1.23 1.2-1.23 2.93s1.26 3.4 1.44 3.63c.18.23 2.48 3.79 6.01 5.31.84.36 1.5.58 2.01.74.84.27 1.61.23 2.22.14.68-.1 2.07-.85 2.36-1.66.29-.82.29-1.52.2-1.66-.08-.15-.31-.24-.66-.42z"/>
        </svg>

        {/* Desktop Tooltip - Appears to the right of the button since button is on the LEFT */}
        <span className="hidden md:block absolute left-full ml-3 px-3 py-1.5 bg-[#191919] border border-white/10 text-white text-xs font-semibold rounded-md shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
