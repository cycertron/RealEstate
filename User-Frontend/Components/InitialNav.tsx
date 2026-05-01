import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const InitialNav = () => {
  const links = [
    { name: "Home", to: "/initialhome/herosection" },
    { name: "About Us", to: "aboutus" },
    { name: "Our Services", to: "services" },
    { name: "Contact Us", to: "contactus" },
  ];

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 600, color: '#c9a96e', letterSpacing: '1px' }}>
          Estatly
        </div>

        <nav>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.to} className="relative">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-2 py-1 ${
                      isActive
                        ? "text-amber-400"
                        : "text-gray-300 hover:text-amber-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default InitialNav;