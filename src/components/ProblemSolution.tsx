import React, { useState } from 'react';
import { X, Check, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ProblemSolutionProps {
  onOpenTrial: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenTrial }) => {
  const [highlightedComparison, setHighlightedComparison] = useState<number | null>(null);

  const comparisons = [
    {
      problem: 'Rider claims "I dey Third Mainland Bridge" when he hasn’t even left Obalende—making your buyer cancel the order',
      solution: 'Live GPS tracking link sent to both you and your buyer on WhatsApp the moment our rider picks up your parcel',
      tag: 'Live Tracking',
    },
    {
      problem: 'Rider switches off his phone or says "bike spoil / Police stop me" in the middle of an urgent customer delivery',
      solution: 'Company-owned 200cc bikes maintained daily, with a standby rescue rider deployed within 20 minutes if anything happens',
      tag: 'Zero Stories',
    },
    {
      problem: 'Chasing a dispatch rider for 4 days to remit your customer’s Pay-on-Delivery (POD) cash',
      solution: 'Guaranteed same-day POD settlement straight into your GTB, Zenith, OPay, or Moniepoint account by 6:00 PM daily',
      tag: 'Fast Cash Payout',
    },
    {
      problem: 'Rude riders shouting at your customers at the estate gate or squashing delicate cakes, food, and luxury boxes',
      solution: 'Trained, uniformed riders equipped with clean insulated cargo boxes and air-conditioned vans for fragile items',
      tag: 'Customer Experience',
    },
    {
      problem: 'Sudden price hike after pickup ("Madam, hold-up plenty for Lekki, add ₦3,000 before I move")',
      solution: 'Upfront Naira zone rates locked in before pickup—what you see on the calculator is exactly what you pay',
      tag: 'Transparent Pricing',
    },
  ];

  return (
    <section id="problem-solution" className="py-20 md:py-28 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase font-bold tracking-wider text-neutral-600 mb-3">
            Why Lagos Vendors Switch To Us · Roadside Riders vs. Kinetic Express
          </div>
          <h2
            className="font-cabinet text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-black"
            style={{ textWrap: 'balance' }}
          >
            Stop Losing Paying Customers Because of Unreliable Dispatch Riders.
          </h2>
          <p className="font-satoshi text-lg sm:text-xl text-neutral-700 font-medium mt-4">
            You worked hard to close the sale on Instagram or WhatsApp. Don&apos;t let an unverified rider ruin your business reputation at the last mile.
          </p>
        </div>

        {/* Two Large 3xl-rounded Cards Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card A (Problem): Roadside Riders */}
          <div className="bg-[#f4f4f5] border-2 border-dashed border-neutral-400 rounded-3xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b-2 border-neutral-300 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-red-700 tracking-wider">
                    The Daily Headache
                  </span>
                  <h3 className="font-cabinet text-2xl sm:text-3xl font-extrabold text-neutral-800 mt-1">
                    Random Unverified Dispatch Riders
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-200 border-2 border-neutral-400 flex items-center justify-center text-red-700 shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
              </div>

              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHighlightedComparison(index)}
                    onMouseLeave={() => setHighlightedComparison(null)}
                    className={`flex items-start gap-4 p-3 rounded-xl transition-all cursor-pointer ${
                      highlightedComparison === index ? 'bg-red-50 border-2 border-red-300' : 'border-2 border-transparent'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-red-100 border-2 border-red-600 text-red-700 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <p className="font-satoshi text-base font-bold text-neutral-800 leading-snug">
                        {item.problem}
                      </p>
                      <span className="text-xs font-mono text-neutral-500 mt-1 inline-block">
                        {item.tag}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-neutral-300 flex items-center justify-between text-xs font-mono text-neutral-600">
              <span>Result: Angry buyers & cancelled orders</span>
              <span className="font-bold text-red-700">High Stress</span>
            </div>
          </div>

          {/* Card B (Solution): Kinetic Express Fleet */}
          <div className="bg-[#ffe17c] border-2 border-black rounded-3xl p-8 sm:p-10 neo-shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-6 border-b-2 border-black mb-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-black tracking-wider">
                    The Peace-of-Mind System
                  </span>
                  <h3 className="font-cabinet text-2xl sm:text-3xl font-extrabold text-black mt-1">
                    Kinetic Express Managed Fleet
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-black border-2 border-black flex items-center justify-center text-[#ffe17c] neo-shadow-sm shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => setHighlightedComparison(index)}
                    onMouseLeave={() => setHighlightedComparison(null)}
                    className={`flex items-start gap-4 p-3 rounded-xl transition-all cursor-pointer ${
                      highlightedComparison === index ? 'bg-white border-2 border-black neo-shadow-sm' : 'border-2 border-transparent'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-black border-2 border-black text-[#ffe17c] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <p className="font-satoshi text-base font-bold text-black leading-snug">
                        {item.solution}
                      </p>
                      <span className="text-xs font-mono text-black/75 font-semibold mt-1 inline-block">
                        Guaranteed on every trip · {item.tag}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-black font-bold">
                On-time delivery rate: <span className="underline">99.2% across Lagos</span>
              </div>
              <button
                onClick={onOpenTrial}
                className="neo-btn-primary px-6 py-2.5 text-xs uppercase tracking-tight flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <span>Book a Rider Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
