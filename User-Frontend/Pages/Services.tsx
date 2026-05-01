import { FaBuilding, FaMobileAlt, FaChartLine, FaCalendarCheck, FaImage, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaBuilding className="text-4xl text-amber-500 mb-4" />,
    title: "Property Listing",
    text: "Register your agency and showcase all your properties with full specs, photos, pricing, and availability to buyers and investors searching across Nepal.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-amber-500 mb-4" />,
    title: "Mobile App Visibility",
    text: "Your property listings appear to buyers and investors browsing the Estatly mobile application, maximising your reach beyond your existing network.",
  },
  {
    icon: <FaCalendarCheck className="text-4xl text-amber-500 mb-4" />,
    title: "Deal Pipeline CRM",
    text: "Manage every deal from new lead to closing in a visual Kanban board. Schedule viewings, log offers, and track deal status in real time.",
  },
  {
    icon: <FaChartLine className="text-4xl text-amber-500 mb-4" />,
    title: "Commission Tracking",
    text: "Automatically calculate commissions per transaction, track pending payouts, and export detailed financial reports for your accounting team.",
  },
  {
    icon: <FaImage className="text-4xl text-amber-500 mb-4" />,
    title: "Rich Property Profiles",
    text: "Upload high-quality photos, floor plans, location maps, property specs, and amenity lists to attract serious buyers and investors.",
  },
  {
    icon: <FaUsers className="text-4xl text-amber-500 mb-4" />,
    title: "Client Intelligence",
    text: "Maintain detailed profiles for every buyer, seller, investor and tenant — including budget ranges, preferred areas, and complete deal history.",
  },
];

const Services = () => {
  return (
    <div className="font-sans text-gray-200">
      
      {/* Page Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070" 
            alt="Real estate architectural lines" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#100D08]/90 via-[#100D08]/70 to-[#100D08]" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a96e] font-bold mb-4">Estatly Platform</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Agency Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mx-auto"></div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
          Everything you need to manage your agency online, reach high-net-worth buyers, and execute transactions flawlessly through the Estatly digital ecosystem.
        </p>
      </div>

      {/* Services List - Premium Layout */}
      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((s) => (
            <div key={s.title} className="group relative border border-white/5 bg-[#16120b] p-10 hover:border-[#c9a96e]/40 transition duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition duration-500 transform group-hover:scale-110">
                {/* Clone the icon just for background texture */}
                <div className="text-9xl text-white pointer-events-none">
                  {s.icon.type({className: ""})}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">{s.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                  {s.text}
                </p>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#c9a96e] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="border-t border-white/5 bg-[#0a0805] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a96e] font-bold mb-6">Elevate Your Business</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Start Listing Properties Today</h2>
          <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto">
            Join the most exclusive real estate network. Let Estatly transform the way you close deals and manage your property portfolio.
          </p>
          <div className="flex gap-6 justify-center flex-col sm:flex-row">
            <a href="/register" className="border border-[#c9a96e]/30 bg-transparent hover:bg-[#c9a96e] hover:text-black text-[#c9a96e] font-semibold px-8 py-4 rounded-none transition duration-300 tracking-wider uppercase text-sm">
              Register Agency
            </a>
            <a href="/contactus" className="border border-white/10 hover:border-white/30 text-gray-300 font-semibold px-8 py-4 rounded-none transition duration-300 tracking-wider uppercase text-sm">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;