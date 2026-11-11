import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onOpenTrial: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTrial }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneOrEmail.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="final-cta" className="py-24 md:py-36 bg-neo-dots border-b-2 border-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Clean Unboxed Kicker */}
        <div className="text-xs sm:text-sm font-mono uppercase font-bold tracking-wider text-black mb-4">
          Ikeja Hub · Victoria Island Hub · Lekki Phase 1 Hub · 36 States Waybill
        </div>

        {/* Large Centered Heading in Cabinet Grotesk */}
        <h2
          className="font-cabinet text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-black leading-[0.98] max-w-4xl mx-auto"
          style={{ textWrap: 'balance' }}
        >
          Ready to Send Your Packages Without Rider Stories?
        </h2>

        {/* Subtitle in Satoshi */}
        <p className="font-satoshi text-lg sm:text-2xl text-black font-medium max-w-2xl mx-auto mt-6 leading-relaxed">
          Drop your WhatsApp phone number below to get our instant Lagos & Interstate Rate Card and ₦1,000 off your first pickup today.
        </p>

        {/* Interactive WhatsApp / Rate Card Claim Box */}
        <div className="mt-10 max-w-xl mx-auto">
          {submitted ? (
            <div className="bg-white border-2 border-black rounded-2xl p-6 neo-shadow-lg flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-black shrink-0" />
              <div className="text-left">
                <h4 className="font-cabinet font-extrabold text-base text-black">
                  Rate Card & Rider Dispatch Link Sent!
                </h4>
                <p className="font-satoshi text-xs font-bold text-neutral-600">
                  Our dispatch desk has sent your ₦1,000 first-trip voucher and rider booking link to{' '}
                  <span className="text-black font-mono">{phoneOrEmail}</span>.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                type="text"
                required
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                placeholder="Enter your WhatsApp number (e.g. 0803 123 4567)..."
                className="flex-1 px-5 py-4 bg-white border-2 border-black rounded-xl text-base font-satoshi font-bold placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-black neo-shadow-sm"
              />
              <button
                type="submit"
                className="neo-btn-primary px-8 py-4 text-base font-extrabold uppercase tracking-tight flex items-center justify-center gap-2 group whitespace-nowrap shrink-0"
              >
                <span>Get Rate Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold text-black/80">
            <span>✓ 45-min pickup across Lagos</span>
            <span>✓ 6:00 PM daily POD payout</span>
            <button
              type="button"
              onClick={onOpenTrial}
              className="underline hover:text-black cursor-pointer"
            >
              Or click here to book a dispatch rider right now →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
