import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % links.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + links.length) % links.length);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (links[index].submenu) {
          setActiveItem(activeItem === links[index].text ? "" : links[index].text);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
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
    { href: "/team", text: "Team" },
    { href: "/faq", text: "FAQ" },
  ];

  const NavLink = ({ link, index }) => {
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
            } ${focusedIndex === index ? "ring-2 ring-[#0e68b1] ring-offset-2" : ""}`}
            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            aria-expanded={isSubMenuOpen}
            aria-haspopup="true"
            aria-controls={`submenu-${index}`}
          >
            {link.text}
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        ) : (
          <Link
            to={link.href}
            className={`text-[#0e68b1] hover:bg-[#0e68b1]/10 px-4 py-2 mx-1 rounded-md text-sm ${
              focusedIndex === index ? "ring-2 ring-[#0e68b1] ring-offset-2" : ""
            }`}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {link.text}
          </Link>
        )}

        {link.submenu && isSubMenuOpen && (
          <div
            id={`submenu-${index}`}
            className="fixed left-0 right-0 bg-white py-8 z-50 shadow-lg"
            role="menu"
            aria-label={`${link.text} submenu`}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {link.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    to={subItem.href}
                    className="text-[#0e68b1] hover:underline text-sm p-2 rounded-md hover:bg-[#0e68b1]/5"
                    onClick={(e) => e.stopPropagation()}
                    role="menuitem"
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
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2 rounded-md"
              aria-label="Home"
            >
              <img
                src="/logo.PNG"
                alt="InnoStat Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            {links.map((link, index) => (
              <NavLink key={link.text} link={link} index={index} />
            ))}
            <Link
              to="/contact"
              className="ml-6 bg-[#0e68b1] text-white hover:bg-[#0e68b1]/90 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
              aria-label="Contact Us"
            >
              Contact Us
            </Link>
          </div>

          <button
            ref={menuRef}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0e68b1] p-2 hover:bg-[#0e68b1]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4"
            role="menu"
            aria-label="Mobile menu"
          >
            {links.map((link, index) => (
              <div key={link.text}>
                {link.submenu ? (
                  <button
                    onClick={() =>
                      setActiveItem(activeItem === link.text ? "" : link.text)
                    }
                    className="block w-full text-left text-[#0e68b1] hover:bg-[#0e68b1]/10 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
                    aria-expanded={activeItem === link.text}
                    aria-controls={`mobile-submenu-${index}`}
                  >
                    {link.text}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="block w-full text-left text-[#0e68b1] hover:bg-[#0e68b1]/10 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                )}

                {link.submenu && activeItem === link.text && (
                  <div
                    id={`mobile-submenu-${index}`}
                    className="pl-4 bg-[#0e68b1]/5 rounded-md mt-1"
                    role="menu"
                  >
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className="block text-[#0e68b1]/90 hover:bg-[#0e68b1]/10 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
                        onClick={() => {
                          setIsOpen(false);
                          setActiveItem("");
                        }}
                        role="menuitem"
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
              className="block text-[#0e68b1] bg-[#0e68b1]/20 hover:bg-[#0e68b1]/30 px-3 py-2 text-sm mt-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
              onClick={() => setIsOpen(false)}
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
