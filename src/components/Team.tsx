import { Linkedin, Mail, Phone, Award, GraduationCap, Users } from 'lucide-react';

const Team = () => {
  const team = {
    faculty: [
      {
        name: "Dr. Rajesh Kumar",
        role: "Head of Department",
        specialization: "Advanced Manufacturing Systems",
        experience: "25+ Years",
        email: "rajesh.kumar@psgtech.edu",
        phone: "+91 98765 43210",
        linkedin: "rajesh-kumar-psg",
        image: "👨‍🏫",
        achievements: ["50+ Publications", "Industry Consultant", "Research Leader"]
      },
      {
        name: "Prof. Priya Sharma", 
        role: "Professor & Event Coordinator",
        specialization: "Industry 4.0 & IoT",
        experience: "18+ Years",
        email: "priya.sharma@psgtech.edu",
        phone: "+91 98765 43211",
        linkedin: "priya-sharma-psg",
        image: "👩‍🏫",
        achievements: ["Tech Innovation Award", "30+ Patents", "Startup Mentor"]
      },
      {
        name: "Dr. Ananya Patel",
        role: "Associate Professor",
        specialization: "Sustainable Manufacturing",
        experience: "15+ Years", 
        email: "ananya.patel@psgtech.edu",
        phone: "+91 98765 43212",
        linkedin: "ananya-patel-psg",
        image: "👩‍💼",
        achievements: ["Green Tech Pioneer", "40+ Research Papers", "UN Consultant"]
      },
      {
        name: "Dr. Vikram Singh",
        role: "Assistant Professor",
        specialization: "Robotics & Automation",
        experience: "12+ Years",
        email: "vikram.singh@psgtech.edu", 
        phone: "+91 98765 43213",
        linkedin: "vikram-singh-psg",
        image: "👨‍💼",
        achievements: ["Robotics Expert", "Industry 4.0 Specialist", "Innovation Award"]
      }
    ],
    students: [
      {
        name: "Arjun Menon",
        role: "Student Secretary",
        year: "Final Year B.E.",
        specialization: "Event Management Lead",
        email: "arjun.menon@student.psgtech.edu",
        phone: "+91 98765 43214",
        linkedin: "arjun-menon-psg", 
        image: "👨‍🎓",
        achievements: ["Student Leader", "Technical Coordinator", "Innovation Club President"]
      },
      {
        name: "Meera Krishnan",
        role: "Cultural Coordinator",
        year: "Third Year B.E.",
        specialization: "Cultural Events & PR",
        email: "meera.krishnan@student.psgtech.edu",
        phone: "+91 98765 43215",
        linkedin: "meera-krishnan-psg",
        image: "👩‍🎓", 
        achievements: ["Cultural Ambassador", "Media Coordinator", "Creative Director"]
      },
      {
        name: "Deepak Reddy",
        role: "Technical Coordinator", 
        year: "Final Year B.E.",
        specialization: "Workshops & Competitions",
        email: "deepak.reddy@student.psgtech.edu",
        phone: "+91 98765 43216",
        linkedin: "deepak-reddy-psg",
        image: "👨‍🔧",
        achievements: ["Tech Innovator", "Workshop Leader", "Competition Winner"]
      },
      {
        name: "Kavya Nair",
        role: "Logistics Coordinator",
        year: "Third Year B.E.", 
        specialization: "Operations & Hospitality",
        email: "kavya.nair@student.psgtech.edu",
        phone: "+91 98765 43217",
        linkedin: "kavya-nair-psg",
        image: "👩‍💻",
        achievements: ["Operations Expert", "Team Leader", "Excellence Award"]
      }
    ]
  };

  const renderTeamCard = (member: any, index: number, delay: number) => (
    <div 
      key={index}
      className="gradient-card p-6 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10 text-center group animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Profile Image */}
      <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
        {member.image}
      </div>

      {/* Name & Role */}
      <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
      <p className="text-primary font-semibold mb-2">{member.role}</p>
      
      {/* Specialization/Year */}
      <p className="text-sm text-foreground/70 mb-1">{member.specialization}</p>
      {member.year && (
        <p className="text-xs text-foreground/60 mb-4">{member.year}</p>
      )}
      {member.experience && (
        <p className="text-xs text-secondary font-medium mb-4">{member.experience}</p>
      )}

      {/* Achievements */}
      <div className="mb-6">
        <div className="flex flex-wrap justify-center gap-1 mb-3">
          {member.achievements.map((achievement: string, idx: number) => (
            <span 
              key={idx}
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-6 text-sm">
        <div className="flex items-center justify-center space-x-2 text-foreground/70">
          <Mail className="w-4 h-4" />
          <span className="text-xs">{member.email}</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-foreground/70">
          <Phone className="w-4 h-4" />
          <span className="text-xs">{member.phone}</span>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="opacity-0 group-hover:opacity-100 transition-smooth">
        <button className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary-hover transition-smooth">
          <Linkedin className="w-4 h-4" />
          <span>Connect</span>
        </button>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Meet the dedicated faculty and enthusiastic students who are making this Golden Jubilee 
            celebration a memorable and successful event.
          </p>
        </div>

        {/* Faculty Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 gradient-institutional rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Faculty Members</h3>
            </div>
            <p className="text-foreground/70">Experienced educators and researchers leading our celebration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.faculty.map((member, index) => 
              renderTeamCard(member, index, 0.1 * index + 0.6)
            )}
          </div>
        </div>

        {/* Students Section */}
        <div className="mb-12">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 gradient-jubilee rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">Student Committee</h3>
            </div>
            <p className="text-foreground/70">Passionate students organizing and coordinating all events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.students.map((member, index) => 
              renderTeamCard(member, index, 0.1 * index + 1.2)
            )}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-foreground/60">Faculty Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-foreground/60">Student Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-foreground/60">Event Coordinators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-foreground/60">Dedication</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
          <div className="gradient-card p-8 rounded-2xl shadow-card border border-primary/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Network</h3>
            <p className="text-foreground/70 mb-6">
              Connect with our faculty and students on LinkedIn to stay updated on the latest 
              developments in production engineering and our ongoing research initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 gradient-jubilee text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-smooth shadow-jubilee">
                <Award className="w-5 h-5 mr-2" />
                Faculty Directory
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-primary bg-background text-primary rounded-lg font-semibold hover:bg-card-hover transition-smooth">
                <Linkedin className="w-5 h-5 mr-2" />
                Department LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;