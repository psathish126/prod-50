import { Heart, Mail, Phone, MapPin, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-jubilee rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">50</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Golden Jubilee</h3>
                <p className="text-xs text-secondary-foreground/70">Production Engineering</p>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Celebrating 50 years of excellence in engineering education and innovation at 
              PSG College of Technology's Department of Production Engineering.
            </p>
            <div className="flex space-x-3">
              <button className="w-8 h-8 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg flex items-center justify-center transition-smooth group">
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-smooth" />
              </button>
              <button className="w-8 h-8 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-smooth group">
                <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-smooth" />
              </button>
              <button className="w-8 h-8 bg-primary/20 hover:bg-primary/30 rounded-lg flex items-center justify-center transition-smooth group">
                <Globe className="w-4 h-4 text-primary-glow group-hover:scale-110 transition-smooth" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  About College
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  About Department
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Event Schedule
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Workshop Registration
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Alumni Network
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Industry Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Events & Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Events & Programs</h4>
            <ul className="space-y-3">
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Inauguration Ceremony
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Technical Workshops
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Industry Conference
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Alumni Meet
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Innovation Showcase
                </button>
              </li>
              <li>
                <button className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm">
                  Cultural Evening
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-secondary-foreground/70">
                    Department of Production Engineering<br />
                    PSG College of Technology<br />
                    Coimbatore - 641004, Tamil Nadu
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground/70">+91 422-2572177</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground/70">jubilee@psgtech.edu</span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-xs font-medium text-primary mb-1">24/7 Event Helpline</p>
              <p className="text-sm font-semibold text-secondary-foreground">+91 98765 99999</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-secondary-foreground/70">
                © 2024 PSG College of Technology, Department of Production Engineering. All rights reserved.
              </p>
              <p className="text-xs text-secondary-foreground/60 mt-1">
                Designed and developed with excellence for our Golden Jubilee celebration.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-secondary-foreground/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>by PSG Tech Team</span>
            </div>
          </div>
        </div>

        {/* Additional Footer Links */}
        <div className="mt-6 pt-6 border-t border-secondary-foreground/10">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs">
            <button className="text-secondary-foreground/60 hover:text-primary transition-smooth">
              Privacy Policy
            </button>
            <button className="text-secondary-foreground/60 hover:text-primary transition-smooth">
              Terms of Service
            </button>
            <button className="text-secondary-foreground/60 hover:text-primary transition-smooth">
              Event Guidelines
            </button>
            <button className="text-secondary-foreground/60 hover:text-primary transition-smooth">
              Code of Conduct
            </button>
            <button className="text-secondary-foreground/60 hover:text-primary transition-smooth">
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;