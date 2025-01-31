import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const links = [
    {
      href: '/services',
      text: 'Services',
      submenu: [
        { href: '/services/data-analysis', text: 'Data Analysis' },
        { href: '/services/design', text: 'Design' },
        { href: '/services/training', text: 'Training Courses' },
        { href: '/services/data-management', text: 'Data Management' },
        { href: '/services/web-development', text: 'Web Development' },
      ],
    },
    { href: '/team', text: 'Team' },
    { href: '/faq', text: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ link }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsSubMenuOpen(true)}
        onMouseLeave={() => setIsSubMenuOpen(false)}
      >
        <button
          className={`flex items-center text-white hover:bg-white/10 px-4 py-2 mx-1 rounded-md text-sm
            ${activeItem === link.text ? 'bg-white/20' : ''}`}
          onClick={() => {
            setActiveItem(link.text);
            if (link.submenu) setIsSubMenuOpen(!isSubMenuOpen);
            else window.location.href = link.href;
          }}
        >
          {link.text}
          {link.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
        </button>

        {link.submenu && isSubMenuOpen && (
          <div className="fixed left-0 right-0 bg-[#0f5d9a] py-8 z-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between">
                {link.submenu.map((subItem) => (
                  <a
                    key={subItem.href}
                    href={subItem.href}
                    className="text-white hover:underline text-sm whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {subItem.text}
                  </a>
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-[#0f5d9a]/95 shadow-lg' : 'bg-[#0f5d9a]'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <img
                src="/INNO3.png"
                alt="InnoStat Logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            {links.map((link) => (
              <NavLink key={link.href} link={link} />
            ))}
            <a
              href="/contact"
              className="ml-6 bg-white text-[#0f5d9a] hover:bg-white/90 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
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
              <div key={link.href}>
                <button
                  onClick={() => {
                    if (!link.submenu) window.location.href = link.href;
                    else setActiveItem(link.text === activeItem ? '' : link.text);
                  }}
                  className="block w-full text-left text-white hover:bg-white/10 px-3 py-2 text-sm"
                >
                  {link.text}
                </button>
                {link.submenu && activeItem === link.text && (
                  <div className="pl-4 bg-white/5">
                    {link.submenu.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="block text-white/90 hover:bg-white/10 px-3 py-2 text-sm"
                      >
                        {subItem.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="/contact"
              className="block text-white bg-white/20 hover:bg-white/30 px-3 py-2 text-sm mt-2"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;