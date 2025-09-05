import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-golden-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-xl animate-golden-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        {/* 404 Number */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4 animate-golden-pulse">404</h1>
          <div className="w-24 h-1 gradient-jubilee mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-foreground/70 mb-2">
            Oops! The page you're looking for seems to have wandered off during our Golden Jubilee preparations.
          </p>
          <p className="text-foreground/60">
            Let's get you back to celebrating 50 years of engineering excellence!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="jubilee" 
            size="lg"
            onClick={() => window.location.href = '/'}
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-foreground/60 mb-4">Looking for something specific? Try these links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button 
              onClick={() => window.location.href = '/#events'}
              className="text-primary hover:text-primary-hover transition-smooth font-medium"
            >
              Events
            </button>
            <span className="text-foreground/30">•</span>
            <button 
              onClick={() => window.location.href = '/#workshops'}
              className="text-primary hover:text-primary-hover transition-smooth font-medium"
            >
              Workshops
            </button>
            <span className="text-foreground/30">•</span>
            <button 
              onClick={() => window.location.href = '/#about'}
              className="text-primary hover:text-primary-hover transition-smooth font-medium"
            >
              About Us
            </button>
            <span className="text-foreground/30">•</span>
            <button 
              onClick={() => window.location.href = '/#contact'}
              className="text-primary hover:text-primary-hover transition-smooth font-medium"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Error Code for Debugging */}
        <div className="mt-12 p-4 bg-muted/50 rounded-lg border border-primary/10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-xs text-foreground/50 mb-1">Error Details:</p>
          <p className="text-sm font-mono text-foreground/70">
            Requested Path: {location.pathname}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
