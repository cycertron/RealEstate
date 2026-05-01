import { FaBuilding, FaChartLine, FaGlobe } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-200">
      
      {/* Page Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#100D08]/90 via-[#100D08]/60 to-[#100D08]" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a96e] font-bold mb-4">The Estatly Standard</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About Our Agency
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mx-auto"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Mission Split */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Redefining Luxury Real Estate Management
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              We built Estatly because we believed the real estate industry deserved better tools. Our platform bridges the gap between high-end agencies and discerning buyers, providing a seamless, elegant digital experience that matches the prestige of the properties we represent.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              From automated deal tracking to stunning client-facing mobile applications, we equip agencies with the operational power needed to dominate modern markets.
            </p>
            <div className="pt-4">
              <a href="/register" className="inline-block border border-[#c9a96e]/30 hover:border-[#c9a96e] text-[#c9a96e] font-semibold px-8 py-4 rounded-none transition duration-300 tracking-wider uppercase text-sm">
                Join The Network
              </a>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="relative p-4 border border-white/5 bg-white/5 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                alt="Executive Team"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-700"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-[#c9a96e]"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-[#c9a96e]"></div>
            </div>
          </div>
        </div>

        {/* Value Pillars */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Pillars</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">The foundational principles that make Estatly the preferred choice for elite brokerages globally.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: FaBuilding,  title: 'Exclusive Listings',       desc: 'A curated environment where high-value properties receive the presentation they deserve.' },
              { Icon: FaChartLine, title: 'Precision Analytics',       desc: 'Data-driven insights that empower brokers to close deals faster and forecast market trends.' },
              { Icon: FaGlobe,     title: 'Global Connectivity',            desc: 'Connecting local agencies with an international network of verified, high-net-worth investors.' },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="group border border-white/5 bg-[#16120b] p-10 hover:border-[#c9a96e]/40 transition duration-500 text-center">
                <Icon className="text-4xl text-[#c9a96e] mb-6 mx-auto group-hover:scale-110 transition duration-500" />
                <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;