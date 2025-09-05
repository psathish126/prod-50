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
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Golden Jubilee Celebration"
          className="w-full h-full object-cover opacity-25 scale-105 animate-slow-zoom"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Golden Jubilee Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-8 py-3 mb-10 border border-primary/40 shadow-lg animate-fade-in-scale">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold tracking-wide uppercase">
              Golden Jubilee Celebration
            </span>
            <Award className="w-5 h-5 text-yellow-400" />
          </div>

          {/* Main Headlines */}
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold mb-2 animate-fade-in-up leading-tight">
            <span className="block text-secondary drop-shadow-md">
              PSG College of Technology 
            </span>
          </h1>

          {/* Department Title */}
          <div
            className="mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary drop-shadow-sm mb-3 block ">
              Golden Jubilee
            </h2>
            <p className="text-lg md:text-2xl text-foreground/80 font-bold tracking-wide ">
              Department of Production Engineering
            </p>
          </div>

          {/* Slogan */}
          <div
            className="mb-14 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed italic">
              Celebrating 50 Years of Excellence in Engineering Innovation,
              <br />
              Shaping Tomorrow's Manufacturing Leaders
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            {[
              { value: '50', label: 'Years of Excellence' },
              { value: '5000+', label: 'Alumni Worldwide' },
              { value: '100+', label: 'Industry Partners' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-md mb-3">
                  {stat.value}
                </div>
                <div className="text-foreground/70 text-lg font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              variant="jubilee"
              size="xl"
              className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-primary/50 hover:scale-105 transition-transform"
              onClick={() => scrollToSection('#events')}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Events
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="px-8 py-4 text-lg font-semibold rounded-full shadow-md hover:shadow-primary/40 hover:scale-105 transition-transform"
              onClick={() => scrollToSection('#about')}
            >
              <Users className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            <button
              onClick={() => scrollToSection('#about')}
              className="animate-bounce text-yellow-400 hover:text-yellow-500 transition-smooth"
            >
              <ChevronDown className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-golden-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-golden-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
    </section>
  );
};

export default Hero;
