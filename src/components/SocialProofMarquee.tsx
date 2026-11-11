import React from 'react';

export const SocialProofMarquee: React.FC = () => {
  const routesAndHubs = [
    'IKEJA & MARYLAND HUB',
    'VICTORIA ISLAND & IKOYI',
    'LEKKI PHASE 1 TO AJAH',
    'SURULERE & YABA EXPRESS',
    'ABUJA & PH DOORSTEP WAYBILL',
    '6 PM PAY-ON-DELIVERY PAYOUT',
    'INSTAGRAM & WHATSAPP VENDORS',
    'AIR-CONDITIONED CAKE & FOOD VANS',
    'DHL & UK/US EXPORT CARGO',
    '200CC TRACKED DISPATCH BIKES',
  ];

  const marqueeItems = [...routesAndHubs, ...routesAndHubs];

  return (
    <div className="w-full bg-[#171e19] border-b-2 border-black py-5 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#b7c6c2]/80 font-bold">
          Active Daily Routes Across Lagos & All 36 Nigerian States
        </span>
        <span className="hidden sm:inline-block text-[11px] font-mono tracking-wider uppercase text-[#ffe17c] font-bold">
          1,800+ Nigerian Vendors Served
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="flex items-center space-x-12"
            >
              <span className="font-cabinet text-xl md:text-2xl font-extrabold tracking-tight text-[#b7c6c2] opacity-75 hover:opacity-100 hover:text-[#ffe17c] transition-all cursor-default uppercase">
                {item}
              </span>
              <span className="text-[#ffe17c] font-mono font-bold" aria-hidden="true">
                /
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
