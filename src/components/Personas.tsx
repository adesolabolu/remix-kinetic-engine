import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface PersonasProps {
  onOpenTrial: () => void;
}

export const Personas: React.FC<PersonasProps> = ({ onOpenTrial }) => {
  return (
    <section id="personas" className="py-20 md:py-28 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase font-bold tracking-wider text-neutral-600 mb-3">
            Flexible Naira Pricing · Single Trips or Vendor Bundles
          </div>
          <h2
            className="font-cabinet text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-black"
            style={{ textWrap: 'balance' }}
          >
            Delivery Plans Built for Every Nigerian Seller & Business.
          </h2>
          <p className="font-satoshi text-lg sm:text-xl text-neutral-700 font-medium mt-4">
            Send a single parcel today, save 25% with a Vendor Wallet bundle, or lease a dedicated rider and bike for your store.
          </p>
        </div>

        {/* 3-Column Bento Plan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Sage (#b7c6c2) - Pay-As-You-Go */}
          <div className="bg-[#b7c6c2] border-2 border-black rounded-2xl p-8 neo-shadow-md flex flex-col justify-between transition-all hover:translate-x-0.5 hover:translate-y-0.5">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-black mb-2">
                01 · Pay-As-You-Go
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-cabinet text-4xl sm:text-5xl font-extrabold text-black tabular-nums">
                  ₦2,500
                </span>
                <span className="font-satoshi text-sm font-bold text-black/80">
                  base fare / trip
                </span>
              </div>

              <h3 className="font-cabinet text-xl font-extrabold text-black mb-3">
                Instant Single or Multi-Drop Deliveries Anytime.
              </h3>

              <p className="font-satoshi text-neutral-900 text-sm sm:text-base font-medium leading-relaxed mb-6">
                Best for individuals, offices, and growing vendors sending 1 to 10 packages a week across Lagos or interstate.
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-black/15">
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-black">
                  <div className="w-5 h-5 rounded bg-black text-[#ffe17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Mainland ↔ Mainland: ₦2,500 – ₦3,500</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-black">
                  <div className="w-5 h-5 rounded bg-black text-[#ffe17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Mainland ↔ Island (Lekki/VI/Ajah): ₦3,500 – ₦5,000</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-black">
                  <div className="w-5 h-5 rounded bg-black text-[#ffe17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Live WhatsApp GPS tracking for you & buyer</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-black">
                  <div className="w-5 h-5 rounded bg-black text-[#ffe17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>No subscription required · Pay per pickup</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-black">
              <button
                onClick={onOpenTrial}
                className="w-full neo-btn-secondary bg-white text-black py-3 text-xs uppercase tracking-tight font-bold flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Book Single Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Yellow (#ffe17c) - 20-Trip Vendor Bundle */}
          <div className="bg-[#ffe17c] border-2 border-black rounded-2xl p-8 neo-shadow-lg flex flex-col justify-between transition-all hover:translate-x-0.5 hover:translate-y-0.5 relative">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-black">
                  02 · Vendor 20-Trip Bundle
                </span>
                <span className="font-mono text-[11px] font-bold uppercase text-black underline">
                  Most Popular · Save 25%
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-cabinet text-4xl sm:text-5xl font-extrabold text-black tabular-nums">
                  ₦65,000
                </span>
                <span className="font-satoshi text-sm font-bold text-black/80">
                  / 20 Lagos deliveries
                </span>
              </div>

              <h3 className="font-cabinet text-xl font-extrabold text-black mb-3">
                Flat ₦3,250 Per Trip Anywhere in Lagos (Mainland or Island).
              </h3>

              <p className="font-satoshi text-black text-sm sm:text-base font-medium leading-relaxed mb-6">
                Built for active Instagram, TikTok, and WhatsApp vendors who want one flat, predictable delivery fee for their customers.
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-black/20">
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-black">
                  <div className="w-5 h-5 rounded bg-black text-[#ffe17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>20 Deliveries across Mainland, VI, Ikoyi, Lekki & Ajah</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-black">
                  <div className="w-5 h-5 rounded bg-black text-[#ffe17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Wallet credits never expire—use at your own pace</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-black">
                  <div className="w-5 h-5 rounded bg-black text-[#ffe17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Free Pay-on-Delivery (POD) POS collection & 6 PM payout</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-black">
                  <div className="w-5 h-5 rounded bg-black text-[#ffe17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Priority morning batch pickup from your shop</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-black">
              <button
                onClick={onOpenTrial}
                className="w-full neo-btn-primary py-3 text-xs uppercase tracking-tight font-bold flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Get 20-Trip Vendor Bundle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Dark Gray (#272727) - Dedicated Rider & Bike */}
          <div className="bg-[#272727] text-white border-2 border-black rounded-2xl p-8 neo-shadow-md flex flex-col justify-between transition-all hover:translate-x-0.5 hover:translate-y-0.5">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#ffe17c] mb-2">
                03 · Dedicated Rider & Bike
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-cabinet text-4xl sm:text-5xl font-extrabold text-white tabular-nums">
                  ₦280,000
                </span>
                <span className="font-satoshi text-sm font-bold text-neutral-300">
                  / month
                </span>
              </div>

              <h3 className="font-cabinet text-xl font-extrabold text-white mb-3">
                Your Own Full-Time Dispatch Bike & Rider (Mon–Sat).
              </h3>

              <p className="font-satoshi text-neutral-300 text-sm sm:text-base font-medium leading-relaxed mb-6">
                For restaurants, pharmacies, supermarkets, and high-volume brands that want a dedicated rider stationed at their store daily.
              </p>

              <div className="space-y-3 pt-4 border-t-2 border-neutral-700">
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-white">
                  <div className="w-5 h-5 rounded bg-[#ffe17c] text-black flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>1 Dedicated 200cc Bike + Vetted Rider (8 AM – 6 PM)</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-white">
                  <div className="w-5 h-5 rounded bg-[#ffe17c] text-black flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Bike maintenance, LASSRA/hackney permits & insurance covered</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-white">
                  <div className="w-5 h-5 rounded bg-[#ffe17c] text-black flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Instant replacement rider & bike if rider is ever absent</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-satoshi font-bold text-white">
                  <div className="w-5 h-5 rounded bg-[#ffe17c] text-black flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Free 30-day storage shelf space at our Ikeja or Lekki hub</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-neutral-700">
              <button
                onClick={onOpenTrial}
                className="w-full neo-btn-secondary bg-[#b7c6c2] text-black py-3 text-xs uppercase tracking-tight font-bold flex items-center justify-center gap-2 hover:bg-white whitespace-nowrap"
              >
                <span>Reserve Dedicated Rider</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
