import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Globe, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Have questions about our Golden Jubilee celebration? Need more information about events or registration? 
            We're here to help you be part of this historic milestone.
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
                    Department of Production Engineering<br />
                    PSG College of Technology<br />
                    Peelamedu, Coimbatore - 641004<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Primary Coordinator */}
              <div className="bg-background/50 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-8 h-8 gradient-jubilee rounded-full flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  Primary Coordinator
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">Dr. Rajesh Kumar</p>
                    <p className="text-sm text-foreground/60">Head of Department</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-foreground/80">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-foreground/80">jubilee@psgtech.edu</span>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Office Hours</h4>
                  <div className="space-y-1 text-foreground/70">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <button className="w-12 h-12 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-smooth group">
                    <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-smooth" />
                  </button>
                  <button className="w-12 h-12 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-smooth group">
                    <Linkedin className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-smooth" />
                  </button>
                  <button className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-smooth group">
                    <Globe className="w-5 h-5 text-primary group-hover:scale-110 transition-smooth" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map & Quick Contact */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {/* Google Maps Embed */}
            <div className="gradient-card rounded-2xl shadow-card border border-primary/10 overflow-hidden">
              <div className="h-80 bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h4>
                  <p className="text-foreground/60 max-w-xs">
                    Click to view our location on Google Maps and get directions to PSG College of Technology
                  </p>
                  <Button variant="outline" className="mt-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    View on Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="gradient-card p-8 rounded-2xl shadow-card border border-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Inquiry</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/70 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth">
                    <option>Event Registration</option>
                    <option>Workshop Information</option>
                    <option>Sponsorship Inquiry</option>
                    <option>Alumni Relations</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <Button variant="jubilee" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Emergency Contact */}
            <div className="gradient-card p-6 rounded-2xl shadow-card border border-destructive/20 bg-destructive/5">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center mr-3">
                  <Phone className="w-4 h-4 text-destructive" />
                </div>
                24/7 Event Helpline
              </h4>
              <p className="text-foreground/70 mb-3">For urgent event-related queries during the celebration week</p>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-destructive" />
                <span className="font-semibold text-foreground">+91 98765 99999</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center gradient-card p-6 rounded-2xl shadow-card border border-primary/10">
            <div className="w-16 h-16 gradient-jubilee rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Email Support</h4>
            <p className="text-foreground/60 text-sm mb-4">Get detailed information via email</p>
            <p className="text-primary font-medium">jubilee@psgtech.edu</p>
          </div>

          <div className="text-center gradient-card p-6 rounded-2xl shadow-card border border-primary/10">
            <div className="w-16 h-16 gradient-institutional rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Phone Support</h4>
            <p className="text-foreground/60 text-sm mb-4">Speak directly with our team</p>
            <p className="text-primary font-medium">+91 422-2572177</p>
          </div>

          <div className="text-center gradient-card p-6 rounded-2xl shadow-card border border-primary/10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Website</h4>
            <p className="text-foreground/60 text-sm mb-4">Visit our official website</p>
            <p className="text-primary font-medium">www.psgtech.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;