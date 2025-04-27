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
    { href: "/", text: "Home" },
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
    { href: "/team", text: "Team"},
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
            className={`flex items-center text-[#0e68b1] hover:bg-[#0e68b1]/10 px-4 py-2 mx-1 rounded-md text-sm ${
              isSubMenuOpen ? "bg-[#0e68b1]/20" : ""
            }`}
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
          >
            {link.text}
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        ) : link.href.startsWith("#") ? (
          <button
            onClick={link.onClick}
            className="text-[#0e68b1] hover:bg-[#0e68b1]/10 px-4 py-2 mx-1 rounded-md text-sm"
          >
            {link.text}
          </button>
        ) : (
          <Link
            to={link.href}
            className="text-[#0e68b1] hover:bg-[#0e68b1]/10 px-4 py-2 mx-1 rounded-md text-sm"
          >
            {link.text}
          </Link>
        )}

        {link.submenu && isSubMenuOpen && (
          <div className="fixed left-0 right-0 bg-white py-8 z-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between">
                {link.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    to={subItem.href}
                    className="text-[#0e68b1] hover:underline text-sm whitespace-nowrap"
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
        scrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/logo.PNG"
                alt="InnoStat Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            {links.map((link) => (
              <NavLink key={link.text} link={link} />
            ))}
            <Link
              to="/contact"
              className="ml-6 bg-[#0e68b1] text-white hover:bg-[#0e68b1]/90 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0e68b1] p-2 hover:bg-[#0e68b1]/10 rounded-md"
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
                    className="block w-full text-left text-[#0e68b1] hover:bg-[#0e68b1]/10 px-3 py-2 text-sm"
                  >
                    {link.text}
                  </button>
                ) : link.href.startsWith("#") ? (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      link.onClick();
                    }}
                    className="block w-full text-left text-[#0e68b1] hover:bg-[#0e68b1]/10 px-3 py-2 text-sm"
                  >
                    {link.text}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="block w-full text-left text-[#0e68b1] hover:bg-[#0e68b1]/10 px-3 py-2 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                )}

                {link.submenu && activeItem === link.text && (
                  <div className="pl-4 bg-[#0e68b1]/5">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block text-[#0e68b1]/90 hover:bg-[#0e68b1]/10 px-3 py-2 text-sm"
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
              className="block text-[#0e68b1] bg-[#0e68b1]/20 hover:bg-[#0e68b1]/30 px-3 py-2 text-sm mt-2"
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
