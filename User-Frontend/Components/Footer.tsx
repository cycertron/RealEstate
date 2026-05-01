import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#100D08] border-t border-[#c9a96e]/20 text-gray-200 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">

        {/* Logo / Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">Estatly</h2>
          <p className="text-gray-300 text-sm">
            Connecting real estate agencies with buyers, sellers and investors. Manage your listings, close more deals, and grow your agency.
          </p>
        </div>

        {/* Social / Contact */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            <FaFacebookF className="hover:text-amber-500 cursor-pointer transition transform hover:scale-110" />
            <FaInstagram className="hover:text-amber-500 cursor-pointer transition transform hover:scale-110" />
            <FaLinkedinIn className="hover:text-amber-500 cursor-pointer transition transform hover:scale-110" />
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2026 Estatly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;