import { ExternalLink } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    { 
      name: "TESA", 
      logo: "🎓"
    },
    { 
      name: "EDS", 
      logo: "⚙️"
    },
    { 
      name: "JANATICS", 
      logo: "🔩"
    }
  ];

  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our <span className="text-primary">Sponsors</span>
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}
          >
            We proudly thank our sponsors for their support in making this Golden Jubilee 
            celebration a success.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="gradient-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10 text-center group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
                {sponsor.logo}
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{sponsor.name}</h4>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-smooth">
                <ExternalLink className="w-4 h-4 mx-auto text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
