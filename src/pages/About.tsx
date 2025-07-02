import Navigation from '@/components/Navigation';
import LiquidBackground from '@/components/LiquidBackground';
import CursorGlow from '@/components/CursorGlow';
import { Users, Award, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Passionate designers and creative professionals bringing your vision to life with cutting-edge solutions."
    },
    {
      icon: <Award size={32} />,
      title: "Award Winning",
      description: "Recognized for excellence in design innovation and client satisfaction across multiple industry awards."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Creative Innovation",
      description: "We push boundaries with fresh perspectives and innovative approaches to visual storytelling."
    },
    {
      icon: <Target size={32} />,
      title: "Results Driven",
      description: "Every design serves a purpose, driving engagement and delivering measurable business outcomes."
    }
  ];

  return (
    <div className="min-h-screen relative">
      <LiquidBackground />
      <CursorGlow />
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <section className="text-center mb-20 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              About Avian
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a creative design studio that transforms ideas into visual experiences. 
              With a passion for innovation and an eye for detail, we soar above the ordinary.
            </p>
          </section>

          {/* Story Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="glass-card animate-fade-scale">
              <h2 className="text-3xl font-bold mb-6 text-accent">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded with the vision to elevate brands through exceptional design, 
                Avian has grown from a small creative collective to a trusted partner 
                for businesses worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Like birds in flight, we believe in freedom of expression, agility in 
                problem-solving, and the power of perspective. Every project is an 
                opportunity to reach new heights together.
              </p>
            </div>
            <div className="glass-card p-8 text-center float">
              <div className="text-6xl font-bold text-primary mb-4">5+</div>
              <p className="text-xl text-muted-foreground mb-6">Years of Excellence</p>
              <div className="text-6xl font-bold text-accent mb-4">200+</div>
              <p className="text-xl text-muted-foreground mb-6">Projects Completed</p>
              <div className="text-6xl font-bold text-primary-light mb-4">50+</div>
              <p className="text-xl text-muted-foreground">Happy Clients</p>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-glow">
              Why Choose Avian
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="glass-card text-center hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.6)] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-accent mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className="text-center glass-card max-w-4xl mx-auto animate-fade-scale">
            <h2 className="text-3xl font-bold mb-6 text-accent">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower brands with visual storytelling that captivates, inspires, and drives action. 
              We believe great design has the power to transform businesses and connect people in meaningful ways.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;