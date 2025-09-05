import { Button } from '@/components/ui/button';
import { Calendar, MapPin, User, Clock, ExternalLink, Trophy, Zap, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Golden Jubilee Inauguration Ceremony",
      description: "Grand opening ceremony featuring distinguished alumni, industry leaders, and academic luminaries celebrating 50 years of excellence in production engineering.",
      date: "March 15, 2024",
      time: "10:00 AM - 12:00 PM",
      venue: "PSG Tech Auditorium",
      coordinator: "Dr. Rajesh Kumar",
      contact: "+91 98765 43210",
      image: "🎉",
      category: "ceremony"
    },
    {
      id: 2,
      title: "Industry 4.0 & Smart Manufacturing",
      description: "Cutting-edge conference on IoT, AI, and automation in manufacturing. Features keynotes from leading industrialists and hands-on technology demonstrations.",
      date: "March 16, 2024", 
      time: "9:00 AM - 5:00 PM",
      venue: "Convention Center",
      coordinator: "Prof. Priya Sharma",
      contact: "+91 98765 43211",
      image: "🏭",
      category: "conference"
    },
    {
      id: 3,
      title: "Alumni Meet & Awards Gala",
      description: "Prestigious gathering of alumni from 5 decades, featuring achievement awards, networking sessions, and a grand dinner celebrating our production engineering legacy.",
      date: "March 17, 2024",
      time: "6:00 PM - 11:00 PM", 
      venue: "Grand Ballroom",
      coordinator: "Dr. Ananya Patel",
      contact: "+91 98765 43212",
      image: "🏆",
      category: "networking"
    },
    {
      id: 4,
      title: "Student Innovation Showcase",
      description: "Platform for current students to present innovative projects, compete for prizes, and interact with industry experts. Features live demonstrations and poster presentations.",
      date: "March 18, 2024",
      time: "1:00 PM - 6:00 PM",
      venue: "Innovation Lab",
      coordinator: "Dr. Vikram Singh",
      contact: "+91 98765 43213", 
      image: "💡",
      category: "competition"
    },
    {
      id: 5,
      title: "Future of Manufacturing Symposium",
      description: "Forward-looking discussions on sustainable manufacturing, green technology, and the role of production engineering in addressing global challenges.",
      date: "March 19, 2024",
      time: "10:00 AM - 4:00 PM",
      venue: "Seminar Hall",
      coordinator: "Prof. Deepak Menon",
      contact: "+91 98765 43214",
      image: "🌱",
      category: "symposium"
    },
    {
      id: 6,
      title: "Cultural Evening & Farewell",
      description: "Spectacular cultural performances, entertainment programs, and closing ceremony marking the end of our golden jubilee celebrations with memorable moments.",
      date: "March 20, 2024",
      time: "7:00 PM - 10:00 PM",
      venue: "Open Air Theatre",
      coordinator: "Dr. Meera Krishnan",
      contact: "+91 98765 43215",
      image: "🎭",
      category: "cultural"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'ceremony': return <Trophy className="w-5 h-5" />;
      case 'conference': return <Zap className="w-5 h-5" />;
      case 'networking': return <Users className="w-5 h-5" />;
      case 'competition': return <Trophy className="w-5 h-5" />;
      case 'symposium': return <Zap className="w-5 h-5" />;
      case 'cultural': return <Users className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'ceremony': return 'border-primary bg-primary/5';
      case 'conference': return 'border-secondary bg-secondary/5';
      case 'networking': return 'border-accent-gold bg-accent-gold/5';
      case 'competition': return 'border-primary bg-primary/5';
      case 'symposium': return 'border-secondary bg-secondary/5';
      case 'cultural': return 'border-accent-gold bg-accent-gold/5';
      default: return 'border-muted bg-muted/5';
    }
  };

  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Jubilee <span className="text-primary">Events</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join us for an unforgettable week of celebrations, learning, and networking as we commemorate 
            50 years of excellence in production engineering.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.id}
              className="gradient-card rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Event Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getCategoryColor(event.category)}`}>
                    {getCategoryIcon(event.category)}
                    <span className="text-sm font-medium capitalize">{event.category}</span>
                  </div>
                  <div className="text-4xl">{event.image}</div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{event.description}</p>
              </div>

              {/* Event Details */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{event.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{event.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-gold/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{event.venue}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{event.coordinator}</div>
                      <div className="text-xs text-foreground/60">{event.contact}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Actions */}
              <div className="px-6 pb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="premium" className="flex-1">
                    Register Now
                  </Button>
                  <Button variant="outline" size="default">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="gradient-card p-8 rounded-2xl shadow-card border border-primary/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Don't Miss Out!</h3>
            <p className="text-foreground/70 mb-6">
              Register for multiple events and be part of this historic celebration. 
              Special discounts available for alumni and students.
            </p>
            <Button variant="jubilee" size="lg">
              <Trophy className="w-5 h-5 mr-2" />
              View All Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;