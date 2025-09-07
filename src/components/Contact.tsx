import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Globe, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p
            className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Have questions about our Golden Jubilee celebration? Need more information about
            events or registration? We’re here to help you be part of this historic milestone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="gradient-card p-8 rounded-2xl shadow-card border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-12 h-12 gradient-institutional rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-foreground/70 leading-relaxed">
                    PSG College of Technology <br />
                    Avinashi Rd, Peelamedu <br />
                    Coimbatore, Tamil Nadu 641004
                  </p>
                </div>
              </div>

              {/* Primary Coordinators */}
              <div className="bg-background/50 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-8 h-8 gradient-jubilee rounded-full flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  Students Coordinators
                </h4>
                <div className="space-y-5">
                  <div>
                    <p className="font-medium text-foreground">
                      Mr. Lakshman Raghav V G
                    </p>
                    <p className="text-sm text-foreground/60">Final Year B.E. Production SW</p>
                    <a
                      href="https://wa.me/919843306391"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline mt-2"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +91 98433 06391
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Mr. Balaji C</p>
                    <p className="text-sm text-foreground/60">Final Year B.E. Production</p>
                    <a
                      href="https://wa.me/918838892817"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline mt-2"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +91 88388 92817
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/pea_sme"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-smooth group"
                  >
                    <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-smooth" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/pea-sme-psg-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-smooth group"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-smooth" />
                  </a>
                  <a
                    href="mailto:pea.prod@psgtech.ac.in"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-smooth group"
                  >
                    <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-smooth" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div
            className="gradient-card rounded-2xl shadow-card border border-primary/10 overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.4465268784312!2d77.0024857092735!3d11.024410860149828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e1!3m2!1sen!2sin!4v1757101505815!5m2!1sen!2sin"
              width="100%"
              height="670"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Additional Contact Cards */}
        <div
          className="grid md:grid-cols-2 gap-8 mt-16 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="text-center gradient-card p-6 rounded-2xl shadow-card border border-primary/10">
            <div className="w-16 h-16 gradient-jubilee rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Email Support</h4>
            <p className="text-foreground/60 text-sm mb-4">Get detailed information via email</p>
            <p className="text-primary font-medium">pea.prod@psgtech.ac.in</p>
          </div>

          <div className="text-center gradient-card p-6 rounded-2xl shadow-card border border-primary/10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Website</h4>
            <p className="text-foreground/60 text-sm mb-4">Visit our official website</p>
            <a
              href="https://www.psgtech.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              www.psgtech.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
