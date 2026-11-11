import React from 'react';
import { Twitter, Instagram, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const columns = [
    {
      title: 'Dispatch Services',
      links: [
        { label: 'Same-Day Lagos Bike Dispatch', href: '#features' },
        { label: 'AC Cooling Vans (Cakes & Food)', href: '#features' },
        { label: 'Doorstep Interstate Waybill', href: '#features' },
        { label: 'Pay-on-Delivery (POD) Collection', href: '#features' },
        { label: 'UK, USA & Canada Export Cargo', href: '#features' },
      ],
    },
    {
      title: 'Vendor Plans',
      links: [
        { label: 'Pay-As-You-Go (From ₦2,500)', href: '#personas' },
        { label: '20-Trip Vendor Bundle (₦65,000)', href: '#personas' },
        { label: 'Dedicated Monthly Rider (₦280,000)', href: '#personas' },
        { label: 'Ikeja & Lekki Storage Hub', href: '#features' },
      ],
    },
    {
      title: 'Lagos Hubs',
      links: [
        { label: 'Mainland Hub: Allen Ave, Ikeja', href: '#how-it-works' },
        { label: 'Central Hub: Herbert Macaulay, Yaba', href: '#how-it-works' },
        { label: 'Island Hub: Admiralty Way, Lekki Ph 1', href: '#how-it-works' },
        { label: 'Abuja Hub: Wuse 2 & Gwarinpa', href: '#how-it-works' },
      ],
    },
    {
      title: 'Dispatch Desk',
      links: [
        { label: 'Naira Rate Calculator', href: '#calculator' },
        { label: 'Merchant Reviews', href: '#testimonials' },
        { label: 'WhatsApp Desk: +234 809 555 0192', href: '#final-cta' },
        { label: 'Mon–Sat · 7:30 AM – 7:00 PM WAT', href: '#final-cta' },
      ],
    },
  ];

  return (
    <footer className="bg-[#171e19] text-white border-t-2 border-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Socials */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-12 border-b-2 border-neutral-800 gap-8">
          
          <div>
            <span className="font-cabinet text-2xl font-extrabold tracking-tighter text-white uppercase block">
              Kinetic Express Logistics
            </span>
            <span className="text-xs font-mono text-[#b7c6c2] tracking-wider block mt-1">
              Same-Day Lagos Dispatch, Cooling Vans & Nationwide Doorstep Waybill
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#final-cta"
              aria-label="Instagram"
              className="w-10 h-10 bg-[#272727] text-white border-2 border-neutral-700 flex items-center justify-center neo-shadow-sm hover:bg-[#ffe17c] hover:text-black hover:border-black transition-all cursor-pointer"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="#final-cta"
              aria-label="X / Twitter"
              className="w-10 h-10 bg-[#272727] text-white border-2 border-neutral-700 flex items-center justify-center neo-shadow-sm hover:bg-[#ffe17c] hover:text-black hover:border-black transition-all cursor-pointer"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="#final-cta"
              aria-label="Dispatch Phone Line"
              className="w-10 h-10 bg-[#272727] text-white border-2 border-neutral-700 flex items-center justify-center neo-shadow-sm hover:bg-[#ffe17c] hover:text-black hover:border-black transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href="#how-it-works"
              aria-label="Lagos Hub Locations"
              className="w-10 h-10 bg-[#272727] text-white border-2 border-neutral-700 flex items-center justify-center neo-shadow-sm hover:bg-[#ffe17c] hover:text-black hover:border-black transition-all cursor-pointer"
            >
              <MapPin className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 bg-[#272727] text-white border-2 border-neutral-700 flex items-center justify-center neo-shadow-sm hover:bg-[#ffe17c] hover:text-black hover:border-black transition-all cursor-pointer ml-2"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b-2 border-neutral-800">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-cabinet text-base font-extrabold uppercase text-[#ffe17c] tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-satoshi text-sm text-[#b7c6c2] hover:text-white hover:underline transition-colors block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quiet Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-400 gap-4">
          <div>
            © {new Date().getFullYear()} Kinetic Express Logistics Nigeria Ltd (RC 1948201). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#personas" className="hover:text-white transition-colors">Vendor Plans</a>
            <a href="#calculator" className="hover:text-white transition-colors">Naira Rate Calculator</a>
            <a href="#final-cta" className="hover:text-white transition-colors">Goods-in-Transit Insurance</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
