import { useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiMail,
  FiBriefcase,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <FiHome />,
    },
    {
      name: "About",
      path: "/about",
      icon: <FiUser />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FiBriefcase />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FiMail />,
    },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-[#c89116]/10 text-[#c89116]"
        : darkMode
        ? "text-gray-300 hover:bg-white/5 hover:text-[#c89116]"
        : "text-gray-700 hover:bg-black/5 hover:text-[#c89116]"
    }`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full"
    >
      {/* Full Width Navbar */}
      <nav
        className={`relative w-full border-b px-4 py-3 shadow-2xl backdrop-blur-xl transition-colors duration-300 sm:px-6 lg:px-10 ${
          darkMode
            ? "border-white/10 bg-black/90"
            : "border-black/10 bg-white/90"
        }`}
      >
        <div className="flex w-full items-center justify-between">
          {/* ================= LOGO ================= */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#c89116] to-[#8f650c] text-lg font-bold text-black shadow-lg shadow-[#c89116]/20"
            >
              T
            </motion.div>

            <div className="hidden sm:block">
              <h1
                className={`text-base font-bold tracking-wide transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Md Toufique Alam
              </h1>

              <p className="text-[11px] tracking-[0.18em] text-gray-400">
                MERN STACK DEVELOPER
              </p>
            </div>
          </NavLink>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={navLinkClass}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}

            {/* Dark / Light Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`ml-2 flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                darkMode
                  ? "border-white/10 bg-white/5 text-[#c89116] hover:border-[#c89116]/40"
                  : "border-black/10 bg-black/5 text-[#c89116] hover:border-[#c89116]/40"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </motion.button>

            {/* Hire Me */}
            <motion.a
              href="mailto:toufiquealam0200@gmail.com"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="ml-3 rounded-xl bg-gradient-to-r from-[#c89116] to-[#a6750e] px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-[#c89116]/20 transition-all duration-300 hover:shadow-[#c89116]/40"
            >
              Hire Me
            </motion.a>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border text-xl transition-all duration-300 ${
                darkMode
                  ? "border-white/10 bg-white/5 text-[#c89116]"
                  : "border-black/10 bg-black/5 text-[#c89116]"
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </motion.button>

            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setIsOpen(!isOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border text-xl transition-all duration-300 ${
                darkMode
                  ? "border-white/10 bg-white/5 text-white hover:border-[#c89116]/40 hover:text-[#c89116]"
                  : "border-black/10 bg-black/5 text-black hover:border-[#c89116]/40 hover:text-[#c89116]"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className={`absolute left-0 right-0 top-full overflow-hidden border-b border-x p-4 shadow-2xl backdrop-blur-xl md:hidden ${
                darkMode
                  ? "border-white/10 bg-[#080808]/98"
                  : "border-black/10 bg-white/98"
              }`}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={navLinkClass}
                    >
                      <span className="text-base">{item.icon}</span>

                      <span>{item.name}</span>
                    </NavLink>
                  </motion.div>
                ))}

                {/* Mobile Hire Me */}
                <motion.a
                  href="mailto:toufiquealam0200@gmail.com"
                  onClick={() => setIsOpen(false)}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-3 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#c89116] to-[#a6750e] px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-[#c89116]/20"
                >
                  <FiMail className="mr-2" />
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;