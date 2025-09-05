import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-jubilee.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Golden Jubilee Celebration" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Golden Jubilee Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-primary/20 animate-fade-in-scale">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Golden Jubilee Celebration</span>
            <Award className="w-5 h-5 text-primary" />
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            <span className="block text-secondary mb-2">PSG College</span>
            <span className="block text-foreground mb-2">of Technology</span>
          </h1>

          {/* Department Title */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary mb-2">
              Golden Jubilee
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80">
              Department of Production Engineering
            </p>
          </div>

          {/* Slogan */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              "Celebrating 50 Years of Excellence in Engineering Innovation, 
              Shaping Tomorrow's Manufacturing Leaders"
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50</div>
              <div className="text-foreground/60 font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
              <div className="text-foreground/60 font-medium">Alumni Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <div className="text-foreground/60 font-medium">Industry Partners</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="jubilee" 
              size="xl"
              onClick={() => scrollToSection('#events')}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Events
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection('#about')}
            >
              <Users className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <button 
              onClick={() => scrollToSection('#about')}
              className="animate-bounce text-primary hover:text-primary-hover transition-smooth"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-golden-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-golden-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;