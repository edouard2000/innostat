import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    {
      href: "/services",
      text: "Services",
      submenu: [
        { href: "/services/1", text: "Data Analysis" },
        { href: "/services/2", text: "Graphic Design and Branding" },
        { href: "/services/3", text: "Short Courses and Professional Training" },
        { href: "/services/4", text: "Data Management Services" },
        { href: "/services/5", text: "Web Design and Development" },
      ],
    },
    { href: "#team", text: "Team", onClick: () => scrollToSection("team") },
    { href: "/faq", text: "FAQ" },
  ];

  const NavLink = ({ link }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
      >
        {link.submenu ? (
          <button
            className={`flex items-center text-white hover:bg-white/10 px-4 py-2 mx-1 rounded-md text-sm ${
              isSubMenuOpen ? "bg-white/20" : ""
            }`}
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
            {link.text}
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        ) : link.href.startsWith("#") ? (
          <button
            onClick={link.onClick}
            className="text-white hover:bg-white/10 px-4 py-2 mx-1 rounded-md text-sm"
          >
            {link.text}
          </button>
        ) : (
          <Link
            to={link.href}
            className="text-white hover:bg-white/10 px-4 py-2 mx-1 rounded-md text-sm"
          >
            {link.text}
          </Link>
        )}

        {link.submenu && isSubMenuOpen && (
          <div className="fixed left-0 right-0 bg-black py-8 z-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between">
                {link.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    to={subItem.href}
                    className="text-white hover:underline text-sm whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {subItem.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Increased the height from h-16 to h-20 */}
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/My logo white.png"
                alt="InnoStat Logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            {links.map((link) => (
              <NavLink key={link.text} link={link} />
            ))}
            <Link
              to="/contact"
              className="ml-6 bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            {links.map((link) => (
              <div key={link.text}>
                {link.submenu ? (
                  <button
                    onClick={() =>
                      setActiveItem(activeItem === link.text ? "" : link.text)
                    }
                    className="block w-full text-left text-white hover:bg-white/10 px-3 py-2 text-sm"
                  >
                    {link.text}
                  </button>
                ) : link.href.startsWith("#") ? (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      link.onClick();
                    }}
                    className="block w-full text-left text-white hover:bg-white/10 px-3 py-2 text-sm"
                  >
                    {link.text}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="block w-full text-left text-white hover:bg-white/10 px-3 py-2 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                )}

                {link.submenu && activeItem === link.text && (
                  <div className="pl-4 bg-white/5">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block text-white/90 hover:bg-white/10 px-3 py-2 text-sm"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveItem("");
                        }}
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block text-white bg-white/20 hover:bg-white/30 px-3 py-2 text-sm mt-2"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
