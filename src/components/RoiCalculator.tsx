import React, { useState } from 'react';
import { Calculator, ArrowRight, Bike, Wallet } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenTrial: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenTrial }) => {
  const [routeZone, setRouteZone] = useState<'mainland' | 'island' | 'cross' | 'interstate'>('cross');
  const [weeklyParcels, setWeeklyParcels] = useState<number>(20);
  const [vehicleType, setVehicleType] = useState<'bike' | 'van'>('bike');

  const routeBaseRates = {
    mainland: { label: 'Mainland ↔ Mainland (Ikeja, Yaba, Surulere)', rate: 2500 },
    island: { label: 'Island ↔ Island (VI, Ikoyi, Lekki, Ajah)', rate: 3000 },
    cross: { label: 'Mainland ↔ Island Cross-Zone', rate: 4000 },
    interstate: { label: 'Interstate Doorstep Waybill (Abuja, PH, Ibadan)', rate: 7500 },
  };

  const baseFare = routeBaseRates[routeZone].rate + (vehicleType === 'van' ? 6500 : 0);
  // Apply 20% Vendor Wallet discount when shipping 15+ parcels/week
  const hasVendorDiscount = weeklyParcels >= 15;
  const discountedFare = hasVendorDiscount ? Math.round(baseFare * 0.8) : baseFare;

  const weeklyStandardCost = baseFare * weeklyParcels;
  const weeklyDiscountedCost = discountedFare * weeklyParcels;
  const monthlySavings = (weeklyStandardCost - weeklyDiscountedCost) * 4;

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase font-bold tracking-wider text-neutral-600 mb-3">
            Instant Naira Rate Calculator · Zero Hidden Charges
          </div>
          <h2
            className="font-cabinet text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-black"
            style={{ textWrap: 'balance' }}
          >
            Calculate Your Delivery Rate & Vendor Discount in Seconds.
          </h2>
          <p className="font-satoshi text-lg sm:text-xl text-neutral-700 font-medium mt-4">
            Pick your Lagos or interstate route and slide your weekly parcel volume to see your exact cost per trip in Naira (₦).
          </p>
        </div>

        {/* Interactive Dual-Column Bento Card */}
        <div className="bg-[#f4f4f5] border-2 border-black rounded-3xl p-6 sm:p-10 neo-shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* Control 1: Route Zone Selector */}
            <div className="bg-white border-2 border-black rounded-2xl p-5 neo-shadow-sm">
              <label className="block font-cabinet text-base font-extrabold text-black mb-3">
                1. Select Pickup & Drop-Off Zone
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Object.keys(routeBaseRates) as Array<keyof typeof routeBaseRates>).map((key) => (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setRouteZone(key)}
                    className={`p-3 border-2 border-black rounded-xl text-left transition-all ${
                      routeZone === key
                        ? 'bg-[#ffe17c] neo-shadow-sm font-bold'
                        : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    <div className="font-satoshi text-xs font-bold text-black leading-snug">
                      {routeBaseRates[key].label}
                    </div>
                    <div className="font-mono text-xs text-neutral-700 mt-1 tabular-nums">
                      Base: ₦{routeBaseRates[key].rate.toLocaleString()}/trip
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Weekly Deliveries Slider */}
            <div className="bg-white border-2 border-black rounded-2xl p-5 neo-shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <label className="font-cabinet text-base font-extrabold text-black">
                  2. How Many Packages Do You Send Per Week?
                </label>
                <span className="font-mono text-lg font-bold bg-[#b7c6c2] px-3 py-0.5 border-2 border-black rounded-md tabular-nums">
                  {weeklyParcels} {weeklyParcels === 1 ? 'parcel' : 'parcels'}/wk
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={weeklyParcels}
                onChange={(e) => setWeeklyParcels(Number(e.target.value))}
                className="w-full h-3 bg-neutral-200 accent-black rounded-lg cursor-pointer border border-black"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-500 mt-2 font-bold tabular-nums">
                <span>1 trip (Single)</span>
                <span>15+ trips (20% Vendor Discount)</span>
                <span>100 trips/wk</span>
              </div>
            </div>

            {/* Control 3: Vehicle Class */}
            <div className="bg-white border-2 border-black rounded-2xl p-5 neo-shadow-sm">
              <label className="block font-cabinet text-base font-extrabold text-black mb-3">
                3. Select Vehicle Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setVehicleType('bike')}
                  className={`p-3 border-2 border-black rounded-xl text-left transition-all ${
                    vehicleType === 'bike'
                      ? 'bg-[#ffe17c] neo-shadow-sm font-bold'
                      : 'bg-neutral-50 hover:bg-neutral-100'
                  }`}
                >
                  <div className="font-cabinet text-sm font-extrabold text-black">
                    200cc Dispatch Bike
                  </div>
                  <div className="text-xs font-satoshi text-neutral-700 mt-0.5">
                    Fashion, shoes, hair, skincare, gadgets (up to 15kg)
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setVehicleType('van')}
                  className={`p-3 border-2 border-black rounded-xl text-left transition-all ${
                    vehicleType === 'van'
                      ? 'bg-[#ffe17c] neo-shadow-sm font-bold'
                      : 'bg-neutral-50 hover:bg-neutral-100'
                  }`}
                >
                  <div className="font-cabinet text-sm font-extrabold text-black">
                    AC Cooling Mini-Van (+₦6,500)
                  </div>
                  <div className="text-xs font-satoshi text-neutral-700 mt-0.5">
                    Cakes, catering trays, fragile hampers & cartons
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 bg-[#ffe17c] border-2 border-black rounded-2xl p-6 sm:p-8 neo-shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase text-black tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  Your Instant Naira Quote
                </span>
                <span className="text-xs font-mono uppercase text-black font-bold underline">
                  {hasVendorDiscount ? '20% Vendor Discount Applied' : 'Standard Rate'}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-black">
                    Your Rate Per Delivery:
                  </div>
                  <div className="font-cabinet text-4xl sm:text-5xl font-extrabold text-black mt-1 tabular-nums">
                    ₦{discountedFare.toLocaleString()} <span className="text-xl font-satoshi">/ trip</span>
                  </div>
                  <div className="text-xs font-satoshi font-bold text-neutral-800 mt-1">
                    {hasVendorDiscount
                      ? `Discounted from ₦${baseFare.toLocaleString()}/trip because you send 15+ parcels a week.`
                      : 'Tip: Slide to 15+ parcels/week to unlock our 20% Vendor Wallet discount.'}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t-2 border-black/20">
                  <div className="bg-white border-2 border-black rounded-xl p-3.5 neo-shadow-sm">
                    <div className="flex items-center gap-1 text-[11px] font-mono uppercase font-bold text-neutral-600">
                      <Bike className="w-3.5 h-3.5 text-black" />
                      Weekly Total
                    </div>
                    <div className="font-cabinet text-xl sm:text-2xl font-extrabold text-black mt-1 tabular-nums">
                      ₦{weeklyDiscountedCost.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-satoshi text-neutral-700 font-bold tabular-nums">
                      For {weeklyParcels} {weeklyParcels === 1 ? 'delivery' : 'deliveries'}
                    </div>
                  </div>

                  <div className="bg-white border-2 border-black rounded-xl p-3.5 neo-shadow-sm">
                    <div className="flex items-center gap-1 text-[11px] font-mono uppercase font-bold text-neutral-600">
                      <Wallet className="w-3.5 h-3.5 text-black" />
                      Monthly Saved
                    </div>
                    <div className="font-cabinet text-xl sm:text-2xl font-extrabold text-black mt-1 tabular-nums">
                      ₦{monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-satoshi text-neutral-700 font-bold">
                      Vendor wallet savings
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-black">
              <button
                onClick={onOpenTrial}
                className="w-full neo-btn-primary py-3.5 text-sm uppercase tracking-tight flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>Lock In This Rate & Book Rider</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
