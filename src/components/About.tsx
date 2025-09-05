import { Button } from '@/components/ui/button';
import { GraduationCap, Building, Trophy, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            About Our <span className="text-primary">Legacy</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the remarkable journey of excellence that has shaped engineering education 
            and innovation for five decades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About College */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-institutional rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">PSG College of Technology</h3>
              </div>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Established in 1951, PSG College of Technology stands as a beacon of engineering excellence 
                in South India. With over seven decades of commitment to quality education, we have 
                consistently ranked among the top engineering institutions in the country.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">70+</div>
                  <div className="text-sm text-foreground/60">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">15</div>
                  <div className="text-sm text-foreground/60">Departments</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Trophy className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground/70">NIRF Ranked | NAAC A+ Accredited</span>
              </div>
            </div>
          </div>

          {/* About Department */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="gradient-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-smooth border border-primary/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-jubilee rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Production Engineering</h3>
              </div>
              
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Since 1974, the Department of Production Engineering has been at the forefront of 
                manufacturing innovation. Our Golden Jubilee celebrates 50 years of producing 
                industry-ready engineers who have revolutionized manufacturing across the globe.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">2500+</div>
                  <div className="text-sm text-foreground/60">Alumni</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-foreground/60">Industry Placement</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground/70">Innovation | Excellence | Leadership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 gradient-jubilee rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Our Vision</h4>
              <p className="text-foreground/70 leading-relaxed">
                To be a globally recognized center of excellence in production engineering, 
                fostering innovation and sustainable manufacturing practices for the future.
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 gradient-institutional rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Our Mission</h4>
              <p className="text-foreground/70 leading-relaxed">
                To provide world-class education, conduct cutting-edge research, and develop 
                ethical leaders who will shape the future of manufacturing and technology.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Button variant="jubilee" size="lg">
            <Trophy className="w-5 h-5 mr-2" />
            Celebrate with Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;