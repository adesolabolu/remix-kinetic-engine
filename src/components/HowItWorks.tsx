import React, { useState } from 'react';
import { Smartphone, Navigation, Banknote, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrial }) => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: '01',
      title: 'Book on Web or WhatsApp in 60s',
      subtitle: 'Instant Dispatch Order',
      borderColor: 'border-[#b7c6c2]',
      colorHex: '#b7c6c2',
      glowStyle: 'shadow-[0_0_20px_rgba(183,198,194,0.35)]',
      icon: Smartphone,
      description:
        'Enter your pickup location, customer drop-off address, and whether it is prepaid or Pay-on-Delivery (POD). You get your fixed Naira price immediately.',
      deliverables: [
        'Book single pickup or upload 20 addresses at once',
        'Fixed zone rate locked before rider moves',
        'Instant rider assignment from nearest Lagos hub',
      ],
    },
    {
      num: '02',
      title: 'Rider Arrives & Live Tracking Starts',
      subtitle: 'Fast Pickup & Transit',
      borderColor: 'border-[#ffe17c]',
      colorHex: '#ffe17c',
      glowStyle: 'shadow-[0_0_20px_rgba(255,225,124,0.35)]',
      icon: Navigation,
      description:
        'Our uniformed rider arrives within 45 minutes, scans your parcel into a waterproof cargo box, and sends a live GPS tracking link to you and your customer.',
      deliverables: [
        'Real-time map tracking link on WhatsApp & SMS',
        'Standby backup bike if any road issue occurs',
        'Polite, trained call before reaching buyer’s gate',
      ],
    },
    {
      num: '03',
      title: 'Delivery Confirmed & 6 PM POD Alert',
      subtitle: 'Safe Drop-Off & Payout',
      borderColor: 'border-white',
      colorHex: '#ffffff',
      glowStyle: 'shadow-[0_0_20px_rgba(255,255,255,0.3)]',
      icon: Banknote,
      description:
        'Your buyer receives their package and confirms with a delivery code. If we collected Pay-on-Delivery cash or POS payment, it hits your bank account by 6:00 PM sharp.',
      deliverables: [
        'Digital proof of delivery & recipient confirmation',
        'Same-day 6 PM remittance for all POD orders',
        'Full trip summary on your vendor dashboard',
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#171e19] text-white border-b-2 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs font-mono uppercase font-bold tracking-wider text-[#ffe17c] mb-3">
            How It Works · Simple 3-Step Dispatch Flow
          </div>
          <h2
            className="font-cabinet text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-white"
            style={{ textWrap: 'balance' }}
          >
            From Your Shop to Your Buyer&apos;s Doorstep Without Stress.
          </h2>
          <p className="font-satoshi text-lg sm:text-xl text-[#b7c6c2] font-medium mt-4">
            No long phone calls explaining directions or begging riders to move. Everything is tracked from pickup to drop-off.
          </p>
        </div>

        {/* 3-Step Horizontal Flow */}
        <div className="relative mb-16">
          
          <div className="hidden lg:block absolute top-12 left-24 right-24 h-1 bg-[#272727] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isSelected = activeStep === idx + 1;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx + 1)}
                  className={`flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition-all duration-200 border-2 ${
                    isSelected
                      ? 'bg-[#272727]/90 border-[#ffe17c] neo-shadow-lg'
                      : 'bg-[#171e19] border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  <div
                    className={`w-24 h-24 rounded-full bg-black border-4 ${step.borderColor} ${step.glowStyle} flex flex-col items-center justify-center transition-all duration-200 relative group mb-6`}
                  >
                    <IconComp className="w-8 h-8 mb-1" style={{ color: step.colorHex }} />
                    <span className="font-cabinet text-xs font-extrabold tracking-wider" style={{ color: step.colorHex }}>
                      {step.num}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-[#b7c6c2] mb-1">
                    Step {step.num} · {step.subtitle}
                  </span>
                  <h3 className="font-cabinet text-2xl font-extrabold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="font-satoshi text-neutral-300 text-sm sm:text-base font-medium leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="w-full text-left bg-black/60 border border-neutral-700 rounded-xl p-4 mt-auto">
                    <span className="text-[11px] font-mono uppercase text-[#ffe17c] font-bold block mb-2">
                      What Happens in Step {step.num}:
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {step.deliverables.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ffe17c] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="bg-[#272727] border-2 border-black rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 neo-shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ffe17c] text-black border-2 border-black flex items-center justify-center shrink-0">
              <span className="font-cabinet font-extrabold text-lg">45m</span>
            </div>
            <div>
              <h4 className="font-cabinet text-xl font-bold text-white">
                Have packages ready to go out today?
              </h4>
              <p className="font-satoshi text-sm text-[#b7c6c2]">
                Request an instant rider pickup from our Ikeja, Yaba, Victoria Island, or Lekki hub right now.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTrial}
            className="neo-btn-primary bg-[#ffe17c] text-black border-2 border-black px-6 py-3 text-sm uppercase tracking-tight flex items-center gap-2 shrink-0 hover:bg-white whitespace-nowrap"
          >
            <span>Request Pickup Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
