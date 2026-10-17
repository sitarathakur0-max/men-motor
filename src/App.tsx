/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useRouter, PageRoute } from './utils/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CarWashPage } from './pages/CarWashPage';
import { OilChangePage } from './pages/OilChangePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const { currentRoute, navigate } = useRouter();

  // Dynamic SEO meta updates on route transition
  useEffect(() => {
    let title = 'Men & Motors | Car Wash & Oil Change in DG Khan';
    let description =
      'Contact Men & Motors in Dera Ghazi Khan for car wash and oil change enquiries. Find our location on Jampur Road and ask about current service availability and prices.';

    switch (currentRoute) {
      case 'about':
        title = 'About Us | Men & Motors — Car Wash & Oil Change DG Khan';
        description =
          'Learn about Men & Motors, a dedicated automotive care business located on Jampur Road in Dera Ghazi Khan specializing in car washing and routine oil changes.';
        break;
      case 'car-wash':
        title = 'Car Wash in Dera Ghazi Khan | Men & Motors';
        description =
          'Exterior car wash services on Jampur Road, Dera Ghazi Khan. Regular washing to clear road grime, dust, and maintain your vehicle exterior.';
        break;
      case 'oil-change':
        title = 'Routine Oil Change in DG Khan | Men & Motors';
        description =
          'Routine engine oil changes in Dera Ghazi Khan based on vehicle manufacturer recommendations. Enquire with your vehicle details for compatibility and pricing.';
        break;
      case 'contact':
        title = 'Contact Men & Motors | Jampur Road, Dera Ghazi Khan';
        description =
          'Contact Men & Motors on Jampur Road, DG Khan. Call +92 336 4336666, chat on WhatsApp, or connect on Facebook and Instagram for car care enquiries.';
        break;
      default:
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [currentRoute]);

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'car-wash':
        return <CarWashPage onNavigate={navigate} />;
      case 'oil-change':
        return <OilChangePage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101010] text-[#F7F7F5] selection:bg-[#FFC928] selection:text-black font-body">
      {/* Top Bar Navigation */}
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Mandatory Floating WhatsApp Button on LEFT */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
