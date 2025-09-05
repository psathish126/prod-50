import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

// Import logos
import PSGCTLogo from '@/assets/PSGCT-Logo.png';
import PSGCT100Logo from '@/assets/PSGCT-100-logo.png';
import PSGCT75Logo from '@/assets/PSGCT-75-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EVENTS', href: '#events' },
    { name: 'WORKSHOPS', href: '#events' },
    { name: 'SPONSORS', href: '#sponsors' },
    { name: 'TEAM', href: '#team' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/30 shadow-md transition-all">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <img
              src={PSGCTLogo}
              alt="PSGCT Logo"
              className="h-20 w-auto object-contain hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-10 font-poppins font-semibold text-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative text-foreground hover:text-primary transition-colors duration-300 group"
              >
                {item.name}
                {/* Underline Animation */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Logos */}
          <div className="hidden lg:flex items-center space-x-6">
            <img
              src={PSGCT100Logo}
              alt="PSGCT 100 Years Logo"
              className="h-20 w-auto object-contain hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
            />
            <img
              src={PSGCT75Logo}
              alt="PSGCT 75 Years Logo"
              className="h-20 w-auto object-contain hover:scale-110 hover:drop-shadow-lg transition-transform duration-300"
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-primary/30 animate-slideDown">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4 font-poppins font-medium text-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Logos in Mobile Menu */}
            <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-primary/20">
              <img
                src={PSGCTLogo}
                alt="PSGCT Logo"
                className="h-16 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src={PSGCT100Logo}
                alt="PSGCT 100 Years Logo"
                className="h-16 w-auto object-contain hover:scale-110 transition-transform"
              />
              <img
                src={PSGCT75Logo}
                alt="PSGCT 75 Years Logo"
                className="h-16 w-auto object-contain hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
