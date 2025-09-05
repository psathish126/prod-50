import { ExternalLink, Award, Star } from 'lucide-react';

const Sponsors = () => {
  const sponsors = {
    platinum: [
      { 
        name: "Tata Steel", 
        logo: "🏭", 
        tier: "Platinum Partner",
        description: "Leading steel manufacturer"
      },
      { 
        name: "Mahindra Group", 
        logo: "🚗", 
        tier: "Platinum Partner",
        description: "Automotive & technology leader"
      }
    ],
    gold: [
      { 
        name: "L&T Construction", 
        logo: "🏗️", 
        tier: "Gold Sponsor",
        description: "Infrastructure excellence"
      },
      { 
        name: "Siemens India", 
        logo: "⚡", 
        tier: "Gold Sponsor", 
        description: "Industrial automation"
      },
      { 
        name: "Bosch India", 
        logo: "🔧", 
        tier: "Gold Sponsor",
        description: "Engineering solutions"
      },
      { 
        name: "Bajaj Auto", 
        logo: "🏍️", 
        tier: "Gold Sponsor",
        description: "Automotive innovation"
      }
    ],
    silver: [
      { 
        name: "Ashok Leyland", 
        logo: "🚛", 
        tier: "Silver Supporter",
        description: "Commercial vehicles"
      },
      { 
        name: "TVS Motors", 
        logo: "🏍️", 
        tier: "Silver Supporter",
        description: "Two-wheeler leader"
      },
      { 
        name: "Hindustan Unilever", 
        logo: "🧴", 
        tier: "Silver Supporter",
        description: "Consumer goods"
      },
      { 
        name: "Wipro Limited", 
        logo: "💻", 
        tier: "Silver Supporter",
        description: "IT services & consulting"
      },
      { 
        name: "Infosys", 
        logo: "💼", 
        tier: "Silver Supporter",
        description: "Digital transformation"
      },
      { 
        name: "Tech Mahindra", 
        logo: "📱", 
        tier: "Silver Supporter",
        description: "Technology solutions"
      }
    ],
    bronze: [
      { 
        name: "Godrej Industries", 
        logo: "🏢", 
        tier: "Bronze Partner",
        description: "Diversified conglomerate"
      },
      { 
        name: "ITC Limited", 
        logo: "📦", 
        tier: "Bronze Partner",
        description: "Multi-business corporation"
      },
      { 
        name: "Reliance Industries", 
        logo: "🛢️", 
        tier: "Bronze Partner",
        description: "Energy & petrochemicals"
      },
      { 
        name: "HDFC Bank", 
        logo: "🏦", 
        tier: "Bronze Partner",
        description: "Banking & financial services"
      }
    ]
  };

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Platinum Partner': return 'gradient-jubilee text-white';
      case 'Gold Sponsor': return 'bg-primary text-primary-foreground';
      case 'Silver Supporter': return 'bg-secondary text-secondary-foreground';
      case 'Bronze Partner': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTierIcon = (tier: string) => {
    switch(tier) {
      case 'Platinum Partner': return <Award className="w-4 h-4" />;
      case 'Gold Sponsor': return <Star className="w-4 h-4" />;
      case 'Silver Supporter': return <Star className="w-4 h-4" />;
      case 'Bronze Partner': return <Star className="w-4 h-4" />;
      default: return null;
    }
  };

  const getSponsorCardSize = (tier: string) => {
    switch(tier) {
      case 'Platinum Partner': return 'md:col-span-2 lg:col-span-3';
      case 'Gold Sponsor': return 'md:col-span-1';
      default: return 'col-span-1';
    }
  };

  const renderSponsorTier = (title: string, sponsors: any[], delay: number) => (
    <div className="mb-16 animate-fade-in-up" style={{ animationDelay: `${delay}s` }}>
      <h3 className="text-2xl font-bold text-foreground text-center mb-8">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <div 
            key={index}
            className={`gradient-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10 text-center group cursor-pointer ${getSponsorCardSize(sponsor.tier)}`}
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
              {sponsor.logo}
            </div>
            <h4 className="text-lg font-bold text-foreground mb-2">{sponsor.name}</h4>
            <p className="text-sm text-foreground/60 mb-4">{sponsor.description}</p>
            
            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${getTierColor(sponsor.tier)}`}>
              {getTierIcon(sponsor.tier)}
              <span>{sponsor.tier}</span>
            </div>
            
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-smooth">
              <ExternalLink className="w-4 h-4 mx-auto text-primary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We are grateful to our esteemed partners and sponsors who make this Golden Jubilee 
            celebration possible. Together, we continue to advance engineering excellence.
          </p>
        </div>

        {/* Platinum Sponsors */}
        {renderSponsorTier("Platinum Partners", sponsors.platinum, 0.4)}

        {/* Gold Sponsors */}
        {renderSponsorTier("Gold Sponsors", sponsors.gold, 0.6)}

        {/* Silver Sponsors */}
        {renderSponsorTier("Silver Supporters", sponsors.silver, 0.8)}

        {/* Bronze Sponsors */}
        {renderSponsorTier("Bronze Partners", sponsors.bronze, 1.0)}

        {/* Partnership CTA */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="gradient-card p-8 rounded-2xl shadow-card border border-primary/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Become a Partner</h3>
            <p className="text-foreground/70 mb-6">
              Join our prestigious community of industry leaders and support the next generation 
              of production engineers. Various partnership opportunities available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 gradient-jubilee text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-smooth shadow-jubilee">
                <Award className="w-5 h-5 mr-2" />
                Partnership Opportunities
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-primary bg-background text-primary rounded-lg font-semibold hover:bg-card-hover transition-smooth">
                <ExternalLink className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Sponsor Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-foreground/60">Platinum Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-foreground/60">Gold Sponsors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-foreground/60">Silver Supporters</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-foreground/60">Bronze Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;