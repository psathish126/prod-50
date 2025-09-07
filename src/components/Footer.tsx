import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import PSGCTLogo from "@/assets/PSGCT-Logo.png";
import PSGCT75Logo from "@/assets/PSGCT-75-logo.png";
import PSGCT100Logo from "@/assets/PSGCT-100-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 gradient-jubilee rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">50</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Golden Jubilee</h3>
                <p className="text-xs text-secondary-foreground/70">
                  Production Engineering
                </p>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-4">
              Celebrating 50 years of excellence in engineering education and
              innovation at PSG College of Technology's Department of Production
              Engineering.
            </p>

            {/* Logos Row */}
            <div className="flex items-center space-x-4 mb-4 ">
              <img src={PSGCTLogo} alt="PSGCT Logo" className="h-20 w-auto bg-white" />
              <img src={PSGCT75Logo} alt="PSGCT 75 Logo" className="h-20 w-auto bg-white" />
              <img src={PSGCT100Logo} alt="PSGCT 100 Logo" className="h-20 w-auto bg-white" />
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/pea_sme"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-500/20 hover:bg-pink-500/30 rounded-lg flex items-center justify-center transition-smooth group"
              >
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-smooth" />
              </a>
              <a
                href="https://www.linkedin.com/company/pea-sme-psg-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg flex items-center justify-center transition-smooth group"
              >
                <Linkedin className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-smooth" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["home", "about", "events", "workshops", "sponsors", "team", "contact"].map(
                (id) => (
                  <li key={id}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(id);
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-secondary-foreground/70 hover:text-primary transition-smooth text-sm"
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/70">
                  Department of Production Engineering <br />
                  PSG College of Technology <br />
                  Coimbatore - 641004, Tamil Nadu
                </p>
              </div>

              {/* Coordinators */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary-foreground/70 font-medium">
                      Mr. Lakshman Raghav V G
                    </p>
                    <p className="text-xs text-secondary-foreground/60">
                      Final Year B.E. Production SW
                    </p>
                    <a
                      href="tel:+919843306391"
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-smooth"
                    >
                      +91 98433 06391
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary-foreground/70 font-medium">
                      Mr. Balaji C
                    </p>
                    <p className="text-xs text-secondary-foreground/60">
                      Final Year B.E. Production
                    </p>
                    <a
                      href="tel:+918838892817"
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-smooth"
                    >
                      +91 88388 92817
                    </a>
                  </div>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground/70">
                  pea.prod@psgtech.ac.in
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-1xl text-secondary-foreground/70">
                © 2025 All rights reserved.
              </p>
             <p className="text-1xl text-secondary-foreground/60 mt-1">
  Designed and developed by{" "}
  <a
    href="https://in.linkedin.com/in/sathishkumarp126"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-primary hover:underline"
  >
    Sathish Kumar P
  </a>{" "}
  (Final Year B.E. Production Engineering) <br />
  <span className="text-sm text-secondary-foreground/70">
    Full Stack Developer | DM for your work
  </span>
</p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
