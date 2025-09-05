import { Button } from '@/components/ui/button';
import { Clock, Users, BookOpen, Award, Star, ChevronRight } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: "Advanced CAD/CAM Technologies",
      description: "Hands-on workshop covering latest CAD/CAM software, CNC programming, and digital manufacturing techniques. Participants will work on real industry projects.",
      instructor: "Dr. Ramesh Patel",
      credentials: "25+ Years Industry Experience",
      duration: "2 Days",
      participants: "30",
      skillLevel: "Intermediate",
      prerequisites: "Basic CAD knowledge",
      materials: "Laptops, Software licenses provided",
      image: "⚙️",
      category: "technical",
      highlights: ["SolidWorks Mastery", "CNC Programming", "Industry Projects", "Certification"]
    },
    {
      id: 2,
      title: "Lean Manufacturing & Six Sigma",
      description: "Comprehensive training on lean principles, waste reduction strategies, and Six Sigma methodologies. Includes case studies from leading manufacturing companies.",
      instructor: "Prof. Sunita Desai",
      credentials: "Certified Black Belt, Industry Consultant", 
      duration: "3 Days",
      participants: "25",
      skillLevel: "Beginner to Advanced",
      prerequisites: "None",
      materials: "Workbooks, Templates provided",
      image: "📊",
      category: "management",
      highlights: ["Lean Tools", "DMAIC Process", "Case Studies", "Green Belt Cert"]
    },
    {
      id: 3,
      title: "Additive Manufacturing & 3D Printing",
      description: "Explore the revolutionary world of 3D printing, materials science, and rapid prototyping. Hands-on experience with various 3D printing technologies.",
      instructor: "Dr. Kiran Mohan",
      credentials: "Research Expert, 50+ Publications",
      duration: "2 Days", 
      participants: "20",
      skillLevel: "Intermediate",
      prerequisites: "Basic materials knowledge",
      materials: "3D Printers, Materials provided",
      image: "🖨️",
      category: "innovation",
      highlights: ["Multi-technology", "Material Science", "Prototyping", "Future Trends"]
    },
    {
      id: 4,
      title: "IoT in Manufacturing",
      description: "Industrial Internet of Things implementation, sensor networks, and smart factory concepts. Build your own IoT-enabled manufacturing monitoring system.",
      instructor: "Prof. Arjun Reddy",
      credentials: "IoT Specialist, Startup Founder",
      duration: "2 Days",
      participants: "25",
      skillLevel: "Advanced",
      prerequisites: "Programming basics",
      materials: "IoT kits, Sensors provided",
      image: "📡",
      category: "technology",
      highlights: ["Hands-on IoT", "Smart Sensors", "Data Analytics", "Live Project"]
    },
    {
      id: 5,
      title: "Supply Chain Optimization",
      description: "Strategic supply chain management, logistics optimization, and digital transformation in supply chains. Includes simulation games and real-world scenarios.",
      instructor: "Dr. Maya Krishnan",
      credentials: "Supply Chain Expert, Author",
      duration: "2 Days",
      participants: "35",
      skillLevel: "Intermediate",
      prerequisites: "Basic management knowledge",
      materials: "Simulation software access",
      image: "🚛",
      category: "management", 
      highlights: ["Strategic Planning", "Digital Tools", "Simulations", "Best Practices"]
    },
    {
      id: 6,
      title: "Robotics & Automation",
      description: "Introduction to industrial robotics, automation systems, and human-robot collaboration. Program and operate various types of industrial robots.",
      instructor: "Prof. Vijay Kumar",
      credentials: "Robotics Engineer, 20+ Years",
      duration: "3 Days",
      participants: "15",
      skillLevel: "Beginner",
      prerequisites: "None",
      materials: "Robot simulators, Hardware access",
      image: "🤖",
      category: "technology",
      highlights: ["Robot Programming", "Automation Design", "Safety Systems", "Future Tech"]
    }
  ];

  const getSkillLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'bg-success/10 text-success border-success/20';
      case 'Intermediate': return 'bg-primary/10 text-primary border-primary/20';
      case 'Advanced': return 'bg-destructive/10 text-destructive border-destructive/20';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'technical': return 'border-primary bg-primary/5';
      case 'management': return 'border-secondary bg-secondary/5';
      case 'innovation': return 'border-accent-gold bg-accent-gold/5';
      case 'technology': return 'border-primary bg-primary/5';
      default: return 'border-muted bg-muted/5';
    }
  };

  return (
    <section id="workshops" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Expert <span className="text-primary">Workshops</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Enhance your skills with hands-on workshops led by industry experts and renowned faculty. 
            Gain practical knowledge in cutting-edge manufacturing technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {workshops.map((workshop, index) => (
            <div 
              key={workshop.id}
              className="gradient-card rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Workshop Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getCategoryColor(workshop.category)}`}>
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-medium capitalize">{workshop.category}</span>
                  </div>
                  <div className="text-4xl">{workshop.image}</div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{workshop.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">{workshop.description}</p>
              </div>

              {/* Workshop Details */}
              <div className="px-6 pb-4">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{workshop.duration}</div>
                      <div className="text-xs text-foreground/60">Duration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{workshop.participants} Max</div>
                      <div className="text-xs text-foreground/60">Participants</div>
                    </div>
                  </div>
                </div>

                {/* Instructor */}
                <div className="bg-background/50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-accent-gold/10 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-accent-gold" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-foreground">{workshop.instructor}</div>
                      <div className="text-xs text-foreground/60">{workshop.credentials}</div>
                    </div>
                  </div>
                </div>

                {/* Skill Level */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-foreground/60">Skill Level:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSkillLevelColor(workshop.skillLevel)}`}>
                    {workshop.skillLevel}
                  </span>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {workshop.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-primary fill-current" />
                        <span className="text-xs text-foreground/70">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prerequisites & Materials */}
                <div className="space-y-3 mb-6 text-xs">
                  <div>
                    <span className="font-medium text-foreground/60">Prerequisites: </span>
                    <span className="text-foreground/70">{workshop.prerequisites}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground/60">Materials: </span>
                    <span className="text-foreground/70">{workshop.materials}</span>
                  </div>
                </div>
              </div>

              {/* Workshop Actions */}
              <div className="px-6 pb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="premium" className="flex-1">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Register Workshop
                  </Button>
                  <Button variant="outline" size="default">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="gradient-card p-8 rounded-2xl shadow-card border border-primary/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Skill Development Package</h3>
            <p className="text-foreground/70 mb-6">
              Register for 3 or more workshops and get a 25% discount plus exclusive access to 
              our digital resource library and networking events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="jubilee" size="lg">
                <Award className="w-5 h-5 mr-2" />
                View All Workshops
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;