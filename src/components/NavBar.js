// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NavBar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileParent, setMobileParent] = useState("");
  const [focused, setFocused] = useState(-1);

  const menuRef   = useRef(null);
  const burgerRef = useRef(null);
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        mobileOpen &&
        burgerRef.current && !burgerRef.current.contains(e.target) &&
        menuRef.current   && !menuRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [mobileOpen]);

  useEffect(() => setMobileOpen(false), [location]);

  const links = [
    { href: "/", text: "Home" },
    {
      href: "/services",
      text: "Services",
      submenu: [
        { href: "/services/1", text: "Data Analysis & Reporting" },
        { href: "/services/2", text: "Graphic Design & Branding" },
        { href: "/services/3", text: "Short Courses & Training" },
        { href: "/services/4", text: "Data Management Services" },
        { href: "/services/5", text: "Web Design & Development" },
        { href: "/services/6", text: "Research & Consultancy" },
      ],
    },
    { href: "/team", text: "Team" },
    { href: "/faq", text: "FAQ" },
  ];

  const onKey = (e, idx) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocused((p) => (p + 1) % links.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocused((p) => (p - 1 + links.length) % links.length);
        break;
      case "Escape":
        setMobileOpen(false);
        break;
      default:
        break;
    }
  };
  const NavLink = ({ link, index }) => {
    const [open, setOpen] = useState(false);
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    const navLinkRef = useRef(null);
    const submenuRef = useRef(null);
    const closeTimerRef = useRef(null);
    const handleMouseEnter = () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setOpen(true);
    };
    
    const handleMouseLeave = () => {
      closeTimerRef.current = setTimeout(() => {
        setOpen(false);
      }, 300); 
    };
    useEffect(() => {
      return () => {
        if (closeTimerRef.current) {
          clearTimeout(closeTimerRef.current);
        }
      };
    }, []);
    
    return (
      <div
        ref={navLinkRef}
        className="relative static md:relative"
        onMouseEnter={desktop && link.submenu ? handleMouseEnter : undefined}
        onMouseLeave={desktop && link.submenu ? handleMouseLeave : undefined}
      >
        {link.submenu ? (
          <button
            className={`flex items-center text-[#0e68b1] hover:bg-[#0e68b1]/10 px-4 py-2 mx-1 rounded-md text-sm ${
              open ? "bg-[#0e68b1]/20" : ""
            } ${
              focused === index ? "ring-2 ring-[#0e68b1] ring-offset-2" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (!desktop) setOpen((o) => !o);
            }}
            onKeyDown={(e) => onKey(e, index)}
            aria-expanded={open}
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
              focused === index ? "ring-2 ring-[#0e68b1] ring-offset-2" : ""
            }`}
            onKeyDown={(e) => onKey(e, index)}
          >
            {link.text}
          </Link>
        )}
        {link.submenu && open && (
          <div
            ref={submenuRef}
            id={`submenu-${index}`}
            role="menu"
            aria-label={`${link.text} submenu`}
            className="fixed left-0 right-0 top-20 hidden md:block bg-white py-8 shadow-lg z-50"
            onMouseEnter={desktop ? handleMouseEnter : undefined}
            onMouseLeave={desktop ? handleMouseLeave : undefined}
          >
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4 text-left">
                {link.submenu.map((sub) => (
                  <Link
                    key={sub.href}
                    to={sub.href}
                    className="block text-[#0e68b1] hover:underline text-sm p-2 rounded-md hover:bg-[#0e68b1]/5"
                    role="menuitem"
                  >
                    {sub.text}
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
          <Link
            to="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2 rounded-md"
            aria-label="Home"
          >
            <img src="/logo.PNG" alt="InnoStat Logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center justify-center flex-1">
            {links.map((l, i) => (
              <NavLink key={l.text} link={l} index={i} />
            ))}
            <Link
              to="/contact"
              className="ml-6 bg-[#0e68b1] text-white hover:bg-[#0e68b1]/90 px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
            >
              Contact&nbsp;Us
            </Link>
          </div>
          <button
            ref={burgerRef}
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((o) => !o);
            }}
            className="md:hidden text-[#0e68b1] p-2 hover:bg-[#0e68b1]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileOpen && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4"
            role="menu"
            aria-label="Mobile menu"
          >
            {links.map((l, i) => (
              <div key={l.text}>
                {l.submenu ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMobileParent((cur) => (cur === l.text ? "" : l.text));
                      }}
                      className="block w-full text-left text-[#0e68b1] hover:bg-[#0e68b1]/10 px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e68b1] focus:ring-offset-2"
                      aria-expanded={mobileParent === l.text}
                      aria-controls={`mobile-sub-${i}`}
                    >
                      {l.text}
                    </button>
                    {mobileParent === l.text && (
                      <div
                        id={`mobile-sub-${i}`}
                        className="pl-4 bg-[#0e68b1]/5 rounded-md mt-1"
                        role="menu"
                      >
                        {l.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block text-[#0e68b1]/90 hover:bg-[#0e68b1]/10 px-3 py-2 text-sm rounded-md"
                            role="menuitem"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={l.href}
                    className="block w-full text-left text-[#0e68b1] hover:bg-[#0e68b1]/10 px-3 py-2 text-sm rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.text}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block text-[#0e68b1] bg-[#0e68b1]/20 hover:bg-[#0e68b1]/30 px-3 py-2 text-sm mt-2 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Contact&nbsp;Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;