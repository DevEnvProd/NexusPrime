import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Wallet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { 
    name: "Roadmap", 
    href: "/roadmap",
    isDropdown: true,
    items: ["Overview", "Released", "Final Testing", "Development", "To Come"]
  },
  { name: "Earn", href: "/earn" },
  { name: "Play", href: "#" },
  { name: "$NEXUS", href: "/nexus" },
  { name: "DAO", href: "/dao" },
  { name: "NFTs", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-black tracking-tighter uppercase">
            Nexus<span className="text-[#F5009F]">Prime</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.isDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.isDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="text-sm font-bold uppercase tracking-wider hover:text-[#F5009F] transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.isDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.isDropdown && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-black border border-white/10 rounded-xl p-2 w-48 shadow-2xl">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`${item.href}?tab=${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <button className="flex items-center gap-2 bg-[#F5009F] hover:bg-[#d00086] text-white px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_20px_rgba(245,0,159,0.3)] hover:shadow-[0_0_30px_rgba(245,0,159,0.5)]">
              <Wallet className="w-4 h-4" />
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block text-lg font-bold uppercase tracking-wider hover:text-[#F5009F]"
                    onClick={() => !item.isDropdown && setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.isDropdown && (
                    <div className="pl-4 mt-4 space-y-3 border-l border-white/10 ml-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem}
                          to={`${item.href}?tab=${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-sm text-gray-400 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full flex justify-center items-center gap-2 bg-[#F5009F] text-white px-6 py-4 rounded-full font-bold uppercase text-sm tracking-widest">
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
