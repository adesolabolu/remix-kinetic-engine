import React, { useState } from 'react';
import { ArrowRight, Calculator, CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onScrollToDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const [activeZone, setActiveZone] = useState<'mainland' | 'island' | 'interstate'>('mainland');
  const [imgError, setImgError] = useState(false);

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const zoneData = {
    mainland: {
      label: 'Mainland ↔ Mainland',
      rate: '₦2,500 – ₦3,500',
      eta: '45–90 Mins Pickup',
      coverage: 'Ikeja, Yaba, Surulere, Maryland, Magodo, Gbagada, Egbeda, Festac',
      guarantee: 'Fixed Naira rate locked before pickup · No Third Mainland stories',
    },
    island: {
      label: 'Mainland ↔ Island',
      rate: '₦3,500 – ₦5,000',
      eta: 'Same-Day Express',
      coverage: 'Victoria Island, Ikoyi, Lekki Phase 1, Chevron, VGC, Ajah, Sangotedo',
      guarantee: 'Morning & afternoon batch pickups or instant direct rider dispatch',
    },
    interstate: {
      label: 'Nationwide Waybill',
      rate: 'From ₦6,500',
      eta: '24–48 Hrs Doorstep',
      coverage: 'Abuja, Port Harcourt, Ibadan, Benin, Asaba, Enugu, Kano & all 36 States',
      guarantee: 'Picked up from your shop & delivered to your buyer’s door—no motor-park stress',
    },
  };

  const currentZone = zoneData[activeZone];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-neo-dots border-b-2 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Clear Lagos Logistics Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start space-y-6">
            
            {/* Unboxed Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-black">
              <span>Lagos Same-Day Dispatch</span>
              <span aria-hidden="true">·</span>
              <span>Interstate Waybill</span>
              <span aria-hidden="true">·</span>
              <span>Vendor Fulfillment</span>
            </div>

            {/* Headline */}
            <h1
              className="font-cabinet text-4xl sm:text-6xl lg:text-[4.25rem] leading-[0.98] font-extrabold tracking-tighter text-black"
              style={{ textWrap: 'balance' }}
            >
              Same-Day Lagos Delivery Without Rider{' '}
              <span className="stroke-black-fill-transparent uppercase inline-block">
                WAHALA.
              </span>
            </h1>

            {/* Plain-English Subtitle */}
            <p className="font-satoshi text-lg sm:text-xl text-black font-medium leading-relaxed max-w-xl">
              Stop losing customers to riders who switch off their phones or hold onto your cash. We deliver for Instagram vendors, online stores, and businesses across Lagos and all 36 states.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenTrial}
                className="neo-btn-primary px-8 py-4 text-base sm:text-lg flex items-center justify-center gap-3 tracking-tight group whitespace-nowrap shrink-0"
              >
                <span>Book a Dispatch Rider</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToCalculator}
                className="neo-btn-secondary px-6 py-4 text-base sm:text-lg flex items-center justify-center gap-2 tracking-tight whitespace-nowrap shrink-0"
              >
                <Calculator className="w-4 h-4" />
                <span>Check Naira Rates</span>
              </button>
            </div>

            {/* Trust Proofs */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-bold text-black/85 font-satoshi">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Live WhatsApp & GPS tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>6 PM daily POD remittance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                <span>Goods insured up to ₦500k</span>
              </div>
            </div>

          </div>

          {/* Right Column: Lagos Dispatch Rider & Live Zone Rate Preview */}
          <div className="lg:col-span-6 w-full flex flex-col">
            <div className="bg-white border-2 border-black rounded-2xl neo-shadow-xl overflow-hidden flex-1 flex flex-col justify-between">
              
              {/* Top Window Header */}
              <div className="bg-black px-4 py-3 border-b-2 border-black flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black inline-block"></span>
                </div>
                <span className="text-[#b7c6c2] text-xs font-mono truncate">
                  Kinetic Express · Lagos & Nationwide Fleet
                </span>
                <span className="text-[#ffe17c] text-xs font-mono font-bold">
                  150+ Active Bikes
                </span>
              </div>

              {/* Lagos Dispatch Rider Image */}
              <div className="relative h-56 sm:h-64 w-full border-b-2 border-black bg-[#171e19] overflow-hidden">
                {!imgError ? (
                  <img
                    src="/src/assets/images/lagos_dispatch_hero_1794235348044.jpg"
                    alt="Kinetic Express dispatch rider in Victoria Island Lagos with 200cc delivery motorcycle"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full bg-[#171e19] flex items-center justify-center p-6 text-center">
                    <span className="font-cabinet text-xl text-[#ffe17c] font-bold">
                      Kinetic Express 200cc Lagos Dispatch Fleet
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="text-xs font-mono text-[#ffe17c] uppercase tracking-wider">
                      Company-Owned 200cc Bikes & Cooling Vans
                    </div>
                    <div className="font-cabinet text-lg sm:text-xl font-bold leading-snug">
                      Ikeja Hub · Victoria Island Hub · Lekki Phase 1 Hub
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Route Zone Switcher */}
              <div className="p-4 sm:p-6 bg-white space-y-4">
                
                {/* Segmented Route Tabs */}
                <div className="flex flex-wrap items-center gap-2 border-b-2 border-black pb-3">
                  <button
                    type="button"
                    onClick={() => setActiveZone('mainland')}
                    className={`px-3 py-1.5 text-xs font-bold font-cabinet uppercase border-2 border-black transition-all whitespace-nowrap shrink-0 ${
                      activeZone === 'mainland' ? 'bg-[#ffe17c] neo-shadow-sm' : 'bg-white hover:bg-neutral-100'
                    }`}
                  >
                    Mainland Zones
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveZone('island')}
                    className={`px-3 py-1.5 text-xs font-bold font-cabinet uppercase border-2 border-black transition-all whitespace-nowrap shrink-0 ${
                      activeZone === 'island' ? 'bg-[#ffe17c] neo-shadow-sm' : 'bg-white hover:bg-neutral-100'
                    }`}
                  >
                    Island & Lekki
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveZone('interstate')}
                    className={`px-3 py-1.5 text-xs font-bold font-cabinet uppercase border-2 border-black transition-all whitespace-nowrap shrink-0 ${
                      activeZone === 'interstate' ? 'bg-[#ffe17c] neo-shadow-sm' : 'bg-white hover:bg-neutral-100'
                    }`}
                  >
                    Interstate Waybill
                  </button>
                </div>

                {/* 3 Clear Understandable Route Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#171e19] text-white p-3.5 border-2 border-black rounded-lg">
                    <div className="text-[11px] font-mono text-[#b7c6c2] uppercase flex items-center justify-between">
                      <span>Standard Fare</span>
                      <MapPin className="w-3.5 h-3.5 text-[#ffe17c]" />
                    </div>
                    <div className="font-cabinet text-xl font-extrabold text-[#ffe17c] mt-1 tabular-nums">
                      {currentZone.rate}
                    </div>
                    <div className="text-[11px] text-[#b7c6c2] font-satoshi mt-0.5">
                      {currentZone.label}
                    </div>
                  </div>

                  <div className="bg-[#b7c6c2] text-black p-3.5 border-2 border-black rounded-lg">
                    <div className="text-[11px] font-mono text-black font-bold uppercase flex items-center justify-between">
                      <span>Pickup & Speed</span>
                      <Clock className="w-3.5 h-3.5 text-black" />
                    </div>
                    <div className="font-cabinet text-lg font-extrabold text-black mt-1 tabular-nums">
                      {currentZone.eta}
                    </div>
                    <div className="text-[11px] text-black font-bold font-satoshi mt-0.5">
                      Backup bike on standby
                    </div>
                  </div>

                  <div className="bg-[#ffe17c] text-black p-3.5 border-2 border-black rounded-lg">
                    <div className="text-[11px] font-mono text-black font-bold uppercase flex items-center justify-between">
                      <span>Coverage Areas</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-black" />
                    </div>
                    <div className="font-satoshi text-xs font-bold text-black mt-1 leading-snug">
                      {currentZone.coverage}
                    </div>
                  </div>
                </div>

                {/* Bottom Guarantee Strip */}
                <div className="bg-neutral-100 border-2 border-black rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-satoshi font-bold text-black">
                  <span>{currentZone.guarantee}</span>
                  <button
                    type="button"
                    onClick={onOpenTrial}
                    className="font-mono text-[11px] uppercase underline shrink-0 text-left sm:text-right cursor-pointer"
                  >
                    Book This Route →
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
