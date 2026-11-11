import React, { useState } from 'react';
import { 
  Bike, 
  Truck, 
  MapPin, 
  CreditCard, 
  PackageCheck, 
  Plane, 
  ArrowUpRight,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface FeatureGridProps {
  onOpenTrial: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ onOpenTrial }) => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);
  const [caseImgError1, setCaseImgError1] = useState(false);
  const [caseImgError2, setCaseImgError2] = useState(false);

  const services = [
    {
      id: 0,
      icon: Bike,
      title: '01. Same-Day Lagos Bike Dispatch',
      description: 'Fast 200cc dispatch motorcycles covering every zone on the Mainland and Island. Ideal for fashion packages, hair, skincare, gadgets, and urgent office documents.',
      metric: '₦2,500 – ₦5,000 / trip',
      deliverables: '45-min pickup window · Waterproof insulated box · Live WhatsApp GPS link',
      sampleDeliverable: 'Book single pickups or batch 10+ customer orders at once. Both you and your buyer receive a live tracking link and rider phone number.',
    },
    {
      id: 1,
      icon: Truck,
      title: '02. Cooling Vans & Fragile Delivery',
      description: 'Air-conditioned mini-vans and careful handlers for celebration cakes, small chops platters, flower bouquets, fragile hampers, and wholesale carton stock.',
      metric: 'From ₦12,000 / trip',
      deliverables: 'Full AC cooling cabin · Flat-floor cake straps · Door-to-door careful carrying',
      sampleDeliverable: 'No more melted buttercream or tilted cakes in Lagos traffic. Our van drivers are trained specifically for event bakers and caterers.',
    },
    {
      id: 2,
      icon: MapPin,
      title: '03. Doorstep Interstate Waybill',
      description: 'Send parcels from Lagos to Abuja, Port Harcourt, Ibadan, Benin, Enugu, Asaba, and all 36 states without stepping foot inside Jibowu or Ojota motor park.',
      metric: '24–48 Hrs Delivery',
      deliverables: 'Free shop pickup in Lagos · Doorstep delivery in destination city · Digital waybill number',
      sampleDeliverable: 'We pick up from your Lagos store, fly or road-haul via our partner network, and deliver straight to your customer’s house in Abuja or PH.',
    },
    {
      id: 3,
      icon: CreditCard,
      title: '04. Pay-on-Delivery (POD) Collection',
      description: 'Your buyer wants to pay when they see the item? Our riders carry POS terminals and verified virtual transfer accounts to collect payment safely at the door.',
      metric: '6:00 PM Daily Payout',
      deliverables: 'Rider POS & instant transfer verification · Zero cash tampering · Automated bank settlement',
      sampleDeliverable: 'Every single kobo collected for your business is remitted automatically to your Nigerian bank account by 6:00 PM the same day.',
    },
    {
      id: 4,
      icon: PackageCheck,
      title: '05. Ikeja & Lekki Vendor Storage Hub',
      description: 'Live outside Lagos or tired of packing orders in your living room? Store your stock at our Ikeja or Lekki Phase 1 hub and we pack & dispatch as orders come in.',
      metric: '15-Min Order Dispatch',
      deliverables: 'CCTV-monitored shelving · Barcode inventory count · Custom branded packaging',
      sampleDeliverable: 'Perfect for Abuja/Ibadan vendors selling to Lagos buyers. Your Lagos customers get their order within 2 hours of paying you.',
    },
    {
      id: 5,
      icon: Plane,
      title: '06. UK, USA & Canada Export Cargo',
      description: 'Selling Nigerian fashion,aso-ebi, wigs, or NAFDAC-approved food items to diaspora buyers abroad? Get up to 40% off standard DHL & FedEx export tariffs.',
      metric: '3–5 Business Days',
      deliverables: 'Free pickup in Lagos · Customs documentation support · Doorstep UK/US/Canada tracking',
      sampleDeliverable: 'Ship to London, Houston, Toronto, or Dublin at merchant-discounted per-kg rates without queuing at an international courier office.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-neo-dots border-y-2 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase font-bold tracking-wider text-black mb-3">
              Our Logistics Services · Lagos & Nationwide
            </div>
            <h2
              className="font-cabinet text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-black"
              style={{ textWrap: 'balance' }}
            >
              Built for Nigerian Vendors, Online Stores & Busy Offices.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="font-satoshi text-base text-black font-bold">
              Click any service below to see how we handle pickup, tracking, and delivery for your business.
            </p>
          </div>
        </div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isSelected = selectedFeature === idx;

            return (
              <div
                key={service.id}
                onClick={() => setSelectedFeature(idx)}
                className={`bg-white border-2 border-black rounded-xl p-8 cursor-pointer transition-all duration-200 group flex flex-col justify-between ${
                  isSelected
                    ? 'neo-shadow-lg -translate-x-1 -translate-y-1 bg-neutral-50 ring-2 ring-black'
                    : 'neo-shadow-md hover:translate-x-0.5 hover:translate-y-0.5'
                }`}
              >
                <div>
                  <div className="w-16 h-16 bg-[#b7c6c2] group-hover:bg-[#ffe17c] border-2 border-black rounded-lg flex items-center justify-center neo-shadow-sm transition-colors duration-200 mb-6">
                    <IconComponent className="w-8 h-8 text-black stroke-[2.5]" />
                  </div>

                  <h3 className="font-cabinet text-2xl font-extrabold text-black mb-3 leading-tight tracking-tight">
                    {service.title}
                  </h3>

                  <p className="font-satoshi text-neutral-700 text-sm sm:text-base font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black/10">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-black">
                    <span className="tabular-nums">{service.metric}</span>
                    <span className="flex items-center gap-1 text-black group-hover:underline">
                      <span>View Service Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Service Breakdown Panel */}
        <div className="mt-12 bg-white border-2 border-black rounded-2xl p-6 sm:p-8 neo-shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b-2 border-black">
            <div>
              <div className="text-xs font-mono uppercase font-bold text-neutral-600">
                Service Breakdown & Guarantee
              </div>
              <h4 className="font-cabinet text-2xl sm:text-3xl font-extrabold text-black mt-1">
                {services[selectedFeature].title}
              </h4>
              <p className="font-satoshi text-sm font-bold text-neutral-700 mt-1">
                {services[selectedFeature].deliverables}
              </p>
            </div>

            <button
              onClick={onOpenTrial}
              className="neo-btn-primary px-6 py-3 text-xs uppercase flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>Book This Delivery Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-6 bg-[#171e19] text-white p-5 sm:p-6 rounded-xl border-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase text-[#ffe17c] font-bold block">
                How It Works For Your Store:
              </span>
              <p className="font-satoshi text-sm sm:text-base font-medium text-white leading-relaxed">
                {services[selectedFeature].sampleDeliverable}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-mono text-[#ffe17c] font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#ffe17c] shrink-0" />
              <span>Goods Insured Up to ₦500k</span>
            </div>
          </div>
        </div>

        {/* Merchant Case Studies Adjacency Block */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Merchant Spotlight 1 */}
          <div className="bg-white border-2 border-black rounded-2xl overflow-hidden neo-shadow-lg flex flex-col justify-between">
            <div className="h-56 w-full bg-[#171e19] border-b-2 border-black relative overflow-hidden">
              {!caseImgError1 ? (
                <img
                  src="/src/assets/images/case_study_ecommerce_1794226723475.jpg"
                  alt="Skincare and beauty vendor parcels fulfilled across Lagos Mainland and Island"
                  referrerPolicy="no-referrer"
                  onError={() => setCaseImgError1(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-6 text-[#ffe17c] font-cabinet font-bold">
                  Skincare & Fashion Vendor Fulfillment
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-mono text-[#ffe17c] uppercase">
                    Vendor Spotlight · Beauty & Fashion E-Commerce (Lekki & Ikeja)
                  </div>
                  <h4 className="font-cabinet text-2xl font-extrabold">
                    1,200+ Monthly Orders Dispatched With Zero Missing Parcels
                  </h4>
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="font-satoshi text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                By storing their best-selling skincare kits in our Ikeja and Lekki hubs, customer orders placed on Instagram and WhatsApp before 2 PM are delivered anywhere in Lagos the exact same day.
              </p>
              <div className="pt-4 border-t-2 border-black/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold text-black">
                <span className="tabular-nums">99.4% Same-Day Success Rate</span>
                <span className="tabular-nums">6:00 PM Daily POD Settlement</span>
              </div>
            </div>
          </div>

          {/* Merchant Spotlight 2 */}
          <div className="bg-white border-2 border-black rounded-2xl overflow-hidden neo-shadow-lg flex flex-col justify-between">
            <div className="h-56 w-full bg-[#171e19] border-b-2 border-black relative overflow-hidden">
              {!caseImgError2 ? (
                <img
                  src="/src/assets/images/case_study_local_brand_1794226724889.jpg"
                  alt="Food, bakery and special handling deliveries across Victoria Island and Surulere"
                  referrerPolicy="no-referrer"
                  onError={() => setCaseImgError2(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-6 text-[#ffe17c] font-cabinet font-bold">
                  Bakery, Food & Special Handling Fleet
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-mono text-[#ffe17c] uppercase">
                    Vendor Spotlight · Food, Pastries & Fresh Roasts (VI & Yaba)
                  </div>
                  <h4 className="font-cabinet text-2xl font-extrabold">
                    Insulated Boxes & Cooling Vans for Delicate Deliveries
                  </h4>
                </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="font-satoshi text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                Dedicated morning and afternoon runs for cafes, bakeries, and food vendors using shock-absorbent thermal boxes and AC vans—keeping hot items hot and chilled items intact.
              </p>
              <div className="pt-4 border-t-2 border-black/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold text-black">
                <span className="tabular-nums">Under 45 Mins Express Drop-Off</span>
                <span className="tabular-nums">0% Damaged Goods Claim</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
