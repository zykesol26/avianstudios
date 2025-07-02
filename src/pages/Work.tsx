import { useState } from 'react';
import Navigation from '@/components/Navigation';
import LiquidBackground from '@/components/LiquidBackground';
import ImageReelModal from '@/components/ImageReelModal';
import CursorGlow from '@/components/CursorGlow';
import { ExternalLink, Eye } from 'lucide-react';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    images: string[];
  }>(null);

  const projects = [
    {
      id: 1,
      title: "TechFlow Branding",
      category: "Brand Identity",
      description: "Complete brand identity redesign for a cutting-edge tech startup, including logo, colors, and visual guidelines.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      tags: ["Branding", "Logo Design", "Guidelines"],
      images: [
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "EcoVibe Packaging",
      category: "Package Design",
      description: "Sustainable packaging design that reflects environmental consciousness while maintaining premium appeal.",
      image: "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=600&h=400&fit=crop",
      tags: ["Packaging", "Sustainability", "Print"],
      images: [
        "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Nexus Web Platform",
      category: "Digital Design",
      description: "Modern web interface design for a SaaS platform, focusing on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["Web Design", "UI/UX", "Digital"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Artisan Coffee Brand",
      category: "Brand Identity",
      description: "Artisanal coffee brand identity capturing the essence of craftsmanship and quality in every detail.",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&h=400&fit=crop",
      tags: ["Branding", "Coffee", "Artisan"],
      images: [
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "FinTech Mobile App",
      category: "Mobile Design",
      description: "Intuitive mobile banking app design prioritizing security, accessibility, and seamless user experience.",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=400&fit=crop",
      tags: ["Mobile", "FinTech", "App Design"],
      images: [
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Luxury Resort Campaign",
      category: "Marketing Design",
      description: "Comprehensive marketing campaign for a luxury resort, including print ads, digital banners, and social media.",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=400&fit=crop",
      tags: ["Campaign", "Luxury", "Marketing"],
      images: [
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop"
      ]
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
              Our Work
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio.
            </p>
          </section>

          {/* Portfolio Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="glass-card group cursor-pointer hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.6)] transition-all duration-300"
                onClick={() => setSelectedProject({ title: project.title, images: project.images })}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="btn-glass p-3">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* CTA Section */}
          <section className="text-center mt-20 glass-card max-w-4xl mx-auto animate-fade-scale">
            <h2 className="text-3xl font-bold mb-6 text-accent">Elevate with Avian.</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contact us to create a fresh personality for your brand.
            </p>
            <button className="btn-primary">
              Get Started Today
            </button>
          </section>
        </div>
      </main>

      {/* Image Reel Modal */}
      <ImageReelModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        projectTitle={selectedProject?.title || ''}
        images={selectedProject?.images || []}
      />
    </div>
  );
};

export default Work;