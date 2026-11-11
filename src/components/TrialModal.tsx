import React, { useState } from 'react';
import { X, Check, Bike, ArrowRight } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<'single' | 'bundle' | 'dedicated'>('bundle');
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [parcelTypes, setParcelTypes] = useState<string[]>([
    'Fashion / Wigs / Skincare',
    'Pay-on-Delivery (POD)',
  ]);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleParcelType = (item: string) => {
    if (parcelTypes.includes(item)) {
      setParcelTypes(parcelTypes.filter((i) => i !== item));
    } else {
      setParcelTypes([...parcelTypes, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappNumber || !fullName) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const planNames = {
    single: 'Single / Multi-Drop Pickup (From ₦2,500)',
    bundle: '20-Trip Vendor Bundle (₦65,000 · Flat ₦3,250/trip)',
    dedicated: 'Dedicated Monthly Bike & Rider (₦280,000/mo)',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-white border-2 border-black rounded-2xl neo-shadow-xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header Bar */}
        <div className="bg-[#ffe17c] px-6 py-4 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-black text-[#ffe17c] flex items-center justify-center border-2 border-black rounded">
              <Bike className="w-4 h-4" />
            </div>
            <span className="font-cabinet text-xl font-extrabold uppercase tracking-tight text-black">
              Book a Dispatch Rider / Open Vendor Wallet
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-black text-white hover:bg-neutral-800 border-2 border-black rounded flex items-center justify-center neo-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#ffe17c] border-2 border-black rounded-full flex items-center justify-center mx-auto neo-shadow-md">
                <Check className="w-9 h-9 text-black stroke-[3]" />
              </div>
              <h3 className="font-cabinet text-3xl font-extrabold text-black">
                Dispatch Request Confirmed, {fullName}!
              </h3>
              <p className="font-satoshi text-base text-neutral-700 max-w-md mx-auto">
                Our nearest Lagos hub coordinator has received your request for{' '}
                <strong className="text-black">{planNames[selectedPlan]}</strong> from{' '}
                <strong className="text-black">{pickupLocation || 'your pickup address'}</strong>. We have sent your rider assignment and tracking link to WhatsApp number{' '}
                <span className="font-mono text-black font-bold">{whatsappNumber}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="neo-btn-primary px-8 py-3 text-sm uppercase font-bold"
                >
                  Back to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Plan Picker */}
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-black mb-2">
                  1. Choose Your Dispatch Option
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'single', name: 'Single Pickup', desc: 'From ₦2,500 · Pay per trip' },
                    { id: 'bundle', name: '20-Trip Bundle', desc: '₦65,000 · Flat ₦3,250/trip' },
                    { id: 'dedicated', name: 'Dedicated Bike', desc: '₦280,000/mo · Full-Time' },
                  ].map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => setSelectedPlan(p.id as any)}
                      className={`p-3 border-2 border-black rounded-xl text-left transition-all ${
                        selectedPlan === p.id
                          ? 'bg-[#ffe17c] neo-shadow-sm font-bold ring-2 ring-black'
                          : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800'
                      }`}
                    >
                      <div className="font-cabinet text-sm font-extrabold text-black">{p.name}</div>
                      <div className="text-[11px] font-mono text-neutral-700 mt-0.5 tabular-nums">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-black mb-1">
                    Your Name / Store Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Tolu / LuxeHair Lekki"
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-black rounded-lg text-sm font-satoshi font-bold focus:outline-none focus:ring-2 focus:ring-black neo-shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-black mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="e.g. 0803 123 4567"
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-black rounded-lg text-sm font-satoshi font-bold focus:outline-none focus:ring-2 focus:ring-black neo-shadow-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-mono uppercase font-bold text-black mb-1">
                    Pickup Area in Lagos (and Drop-off Zone) *
                  </label>
                  <input
                    type="text"
                    required
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="e.g. Pickup at Allen Ikeja → Delivering to Admiralty Way Lekki Phase 1"
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-black rounded-lg text-sm font-satoshi font-bold focus:outline-none focus:ring-2 focus:ring-black neo-shadow-sm"
                  />
                </div>
              </div>

              {/* Parcel Category */}
              <div>
                <label className="block text-xs font-mono uppercase font-bold text-black mb-2">
                  2. What Are We Delivering? (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Fashion / Wigs / Skincare',
                    'Pay-on-Delivery (POD)',
                    'Cakes / Food (Cooling Van)',
                    'Phones / Gadgets',
                    'Interstate Waybill (Abuja/PH)',
                    'Office Documents',
                  ].map((item) => {
                    const isChecked = parcelTypes.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleParcelType(item)}
                        className={`px-3 py-1.5 text-xs font-bold font-satoshi border-2 border-black rounded-lg transition-all whitespace-nowrap ${
                          isChecked
                            ? 'bg-[#b7c6c2] text-black neo-shadow-sm'
                            : 'bg-white text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        {isChecked ? '✓ ' : '+ '}
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full neo-btn-primary py-3.5 text-sm uppercase tracking-tight font-extrabold flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <span>Confirm Rider & Get Tracking Link</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-[11px] font-mono text-neutral-500 mt-3 font-bold">
                  45-minute Lagos pickup · Goods insured up to ₦500,000 · 6 PM daily POD payout
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
