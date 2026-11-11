import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Tolu Adeleke',
      role: 'Founder',
      company: 'LuxeHair & Beauty Studio, Lekki Phase 1',
      metric: '450+ Same-Day Deliveries / Month',
      quote:
        'Before Kinetic Express, roadside riders were my biggest headache in business. A customer in Ikeja would pay for hair in the morning and the rider wouldn’t show up till the next day. Now my buyers get a live WhatsApp tracking link and same-day delivery without fail.',
      avatarInitial: 'TA',
      avatarBg: 'bg-black text-[#ffe17c]',
    },
    {
      name: 'Chinedu Okafor',
      role: 'Managing Director',
      company: 'PrimeGadgets Hub, Ikeja Computer Village',
      metric: '₦18.5M+ POD Cash Remitted Safely',
      quote:
        'When you ship iPhones and MacBooks across Lagos on Pay-on-Delivery, you need riders you can trust with your life. Kinetic’s riders verify transfers properly at the customer’s door, and our money enters our Moniepoint account before 6 PM every single evening.',
      avatarInitial: 'CO',
      avatarBg: 'bg-[#171e19] text-[#b7c6c2]',
    },
    {
      name: 'Zainab Ibrahim',
      role: 'Head Baker & Owner',
      company: 'Crème & Crust Cakes, Victoria Island',
      metric: '0 Damaged Cakes in 8 Months',
      quote:
        'Sending whipped-cream birthday cakes from VI to Surulere or Magodo used to give me high blood pressure. Kinetic’s air-conditioned vans and careful drivers have delivered over 300 cakes for us without a single smudged frosting.',
      avatarInitial: 'ZI',
      avatarBg: 'bg-[#272727] text-white',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#b7c6c2] border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase font-bold tracking-wider text-black mb-3">
            Merchant Reviews · Trusted Across Lagos & Nigeria
          </div>
          <h2
            className="font-cabinet text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-black"
            style={{ textWrap: 'balance' }}
          >
            Why 1,800+ Nigerian Vendors Trust Us With Their Deliveries.
          </h2>
          <p className="font-satoshi text-lg sm:text-xl text-black font-bold mt-4">
            Real feedback from fashion brands, gadget stores, and bakeries across Mainland and Island.
          </p>
        </div>

        {/* Grid of 3 White Cards with Asymmetric Corner Rounding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black rounded-tr-3xl rounded-bl-3xl rounded-tl-[2px] rounded-br-[2px] p-8 neo-shadow-lg flex flex-col justify-between transition-all hover:translate-x-0.5 hover:translate-y-0.5 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-black/10">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#ffbc2e] text-[#ffbc2e] stroke-[1.5]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-black opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Unboxed Quantitative Outcome Metadata */}
                <div className="mb-4 text-xs font-mono uppercase font-bold text-black underline decoration-2 decoration-[#ffe17c] underline-offset-4">
                  {rev.metric}
                </div>

                {/* Testimonial Quote */}
                <p className="font-satoshi text-neutral-800 text-sm sm:text-base font-medium leading-relaxed mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="pt-4 border-t-2 border-black/10 flex items-center gap-3">
                <div className={`w-11 h-11 ${rev.avatarBg} border-2 border-black rounded-tr-xl rounded-bl-xl rounded-tl-[2px] rounded-br-[2px] flex items-center justify-center font-cabinet font-extrabold text-sm neo-shadow-sm shrink-0`}>
                  {rev.avatarInitial}
                </div>
                <div className="min-w-0">
                  <h4 className="font-cabinet text-base font-extrabold text-black leading-tight truncate">
                    {rev.name}
                  </h4>
                  <p className="font-satoshi text-xs text-neutral-600 font-bold truncate">
                    {rev.role} · <span className="text-black">{rev.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Summary Banner */}
        <div className="mt-12 bg-white border-2 border-black rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 neo-shadow-md">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full text-center">
            <div>
              <div className="font-cabinet text-3xl font-extrabold text-black tabular-nums">
                99.2%
              </div>
              <div className="text-xs font-mono font-bold text-neutral-600 mt-1 uppercase">
                Same-Day Delivery Rate
              </div>
            </div>
            <div>
              <div className="font-cabinet text-3xl font-extrabold text-black tabular-nums">
                150+
              </div>
              <div className="text-xs font-mono font-bold text-neutral-600 mt-1 uppercase">
                200cc Bikes & Cooling Vans
              </div>
            </div>
            <div>
              <div className="font-cabinet text-3xl font-extrabold text-black tabular-nums">
                6:00 PM
              </div>
              <div className="text-xs font-mono font-bold text-neutral-600 mt-1 uppercase">
                Daily POD Bank Settlement
              </div>
            </div>
            <div>
              <div className="font-cabinet text-3xl font-extrabold text-black tabular-nums">
                36 States
              </div>
              <div className="text-xs font-mono font-bold text-neutral-600 mt-1 uppercase">
                Doorstep Waybill Network
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
