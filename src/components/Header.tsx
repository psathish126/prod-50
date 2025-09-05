import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <div className="h-12 w-32 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
              <span className="text-primary font-bold text-sm">PSG TECH</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-smooth font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Logos */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center border border-secondary/20">
              <span className="text-secondary font-bold text-xs">DEPT</span>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
              <span className="text-primary font-bold text-xs">50</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-primary/10">
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center border border-secondary/20">
                <span className="text-secondary font-bold text-xs">DEPT</span>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold text-xs">50</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;