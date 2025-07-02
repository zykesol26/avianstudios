import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import LiquidBackground from '@/components/LiquidBackground';
import { ArrowRight, Palette, Zap, Star } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Index = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: "Brand Identity",
      description: "Crafting memorable brand identities that resonate with your audience and stand the test of time."
    },
    {
      icon: <Zap size={40} />,
      title: "Digital Design",
      description: "Modern web and mobile interfaces that engage users and drive conversions through exceptional UX."
    },
    {
      icon: <Star size={40} />,
      title: "Creative Solutions",
      description: "Innovative design approaches that push boundaries and deliver extraordinary visual experiences."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <LiquidBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow leading-tight">
            Design That
            <span className="block text-accent">Takes Flight</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Elevate your brand with stunning visual experiences. We create designs that 
            soar above the competition and connect with your audience on a deeper level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/work" className="btn-primary inline-flex items-center space-x-2">
              <span>View Our Work</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-glass inline-flex items-center space-x-2">
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full animate-pulse float" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary-light rounded-full animate-pulse float-delayed" />
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-accent rounded-full animate-pulse float" />
      </section>

      {/* Services Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-scale">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we provide comprehensive design solutions 
              that elevate your brand and captivate your audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="glass-card text-center hover:glow-blue transition-all duration-500 float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-accent mb-6 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="glass-card animate-fade-scale">
            <h2 className="text-4xl font-bold mb-6 text-accent">
              Ready to Soar Higher?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's collaborate to create something extraordinary that will take your brand to new heights.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
