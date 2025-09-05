import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Workshops from '@/components/Workshops';
import Sponsors from '@/components/Sponsors';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Workshops />
        <Sponsors />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
