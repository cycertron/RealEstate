const ContactUs = () => {
  return (
    <div className="font-sans text-gray-200">
      
      {/* Page Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1577960682490-48e02d6b2c28?q=80&w=2070" 
            alt="Luxury Office Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#100D08]/90 via-[#100D08]/70 to-[#100D08]" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c9a96e] font-bold mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Contact Estatly
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent mx-auto"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Details */}
          <div className="w-full lg:w-5/12 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Let's Discuss Your Real Estate Goals</h2>
              <p className="text-gray-400 leading-relaxed font-light text-lg">
                Whether you are a boutique agency or a large brokerage, our dedicated team is here to help you integrate Estatly into your operations. Reach out to schedule a private consultation.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: '📍', title: 'Global Headquarters', lines: ['Durbar Marg, Kathmandu', 'Nepal, 44600'] },
                { icon: '📞', title: 'Direct Line', lines: ['+977-1-4XXXXXXX', '+977-98XXXXXXXX'] },
                { icon: '✉️', title: 'Private Enquiries', lines: ['hello@estatly.com', 'partners@estatly.com'] },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-6 group">
                  <div className="text-3xl bg-[#16120b] border border-white/5 p-4 group-hover:border-[#c9a96e]/40 transition duration-500">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-2">{c.title}</h3>
                    {c.lines.map((l) => <p key={l} className="text-gray-400 font-light">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Luxury Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#16120b] border border-white/5 p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#c9a96e]/20 m-4"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#c9a96e]/20 m-4"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-[#0a0805] border border-white/10 px-5 py-4 text-white outline-none focus:border-[#c9a96e] transition placeholder-gray-700" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input type="email" placeholder="john@agency.com" className="w-full bg-[#0a0805] border border-white/10 px-5 py-4 text-white outline-none focus:border-[#c9a96e] transition placeholder-gray-700" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                  <input type="text" placeholder="Agency Registration Enquiry" className="w-full bg-[#0a0805] border border-white/10 px-5 py-4 text-white outline-none focus:border-[#c9a96e] transition placeholder-gray-700" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea rows={5} placeholder="Tell us about your agency's needs..." className="w-full bg-[#0a0805] border border-white/10 px-5 py-4 text-white outline-none focus:border-[#c9a96e] transition resize-none placeholder-gray-700" />
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full border border-[#c9a96e]/30 bg-transparent hover:bg-[#c9a96e] hover:text-black text-[#c9a96e] font-semibold px-8 py-5 transition duration-300 tracking-wider uppercase text-sm">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;