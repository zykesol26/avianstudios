import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import LiquidBackground from '@/components/LiquidBackground';
import ImageReelModal from '@/components/ImageReelModal';
import CursorGlow from '@/components/CursorGlow';
import { ExternalLink, Eye } from 'lucide-react';

const Work = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    images: string[];
  }>(null);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      category: "",
      description: "",
      image: "/lovable-uploads/74cacb62-c394-4087-ae00-40a76b81e108.png",
      tags: [],
      images: [
        "/lovable-uploads/74cacb62-c394-4087-ae00-40a76b81e108.png",
        "/lovable-uploads/def64a26-82e6-440f-a493-72f718347c6b.png",
        "/lovable-uploads/31b938dd-9792-434f-b2d0-69011d85c594.png",
        "/lovable-uploads/e7521e2d-b950-4355-90b9-e8f37d155200.png"
      ]
    },
    {
      id: 2,
      title: "EcoVibe Packaging",
      category: "Package Design",
      description: "Sustainable packaging design that reflects environmental consciousness while maintaining premium appeal.",
      image: "/lovable-uploads/d1d021b0-bd02-4a75-9ae2-ccd9397d98e7.png",
      tags: ["Packaging", "Sustainability", "Print"],
      images: [
        "/lovable-uploads/d1d021b0-bd02-4a75-9ae2-ccd9397d98e7.png",
        "/lovable-uploads/6b3e5c3f-ca9d-433b-add6-a2e15da7cde2.png"
      ]
    },
    {
      id: 3,
      title: "Nexus Web Platform",
      category: "Digital Design",
      description: "Modern web interface design for a SaaS platform, focusing on user experience and conversion optimization.",
      image: "/lovable-uploads/4cfabe2c-d219-4a81-9c77-a47ee445a16f.png",
      tags: ["Web Design", "UI/UX", "Digital"],
      images: [
        "/lovable-uploads/4cfabe2c-d219-4a81-9c77-a47ee445a16f.png",
        "/lovable-uploads/20690ecd-769d-4381-921f-cc1b2278bf90.png",
        "/lovable-uploads/29add7b5-351e-4671-9402-2dda7f42d149.png",
        "/lovable-uploads/b9ab8564-5401-4a61-b52c-30c82568c424.png"
      ]
    },
    {
      id: 4,
      title: "Artisan Coffee Brand",
      category: "Brand Identity",
      description: "Artisanal coffee brand identity capturing the essence of craftsmanship and quality in every detail.",
      image: "/lovable-uploads/597e8638-d763-4d1a-a5df-89589a1e1dca.png",
      tags: ["Branding", "Coffee", "Artisan"],
      images: [
        "/lovable-uploads/597e8638-d763-4d1a-a5df-89589a1e1dca.png",
        "/lovable-uploads/f3e38a78-10dc-4aa9-80cb-54205cbb43b9.png",
        "/lovable-uploads/13687c81-a0f0-429d-89de-0ae09253b7fb.png",
        "/lovable-uploads/bc842594-8bbb-479b-9e1b-430256002378.png"
      ]
    },
    {
      id: 5,
      title: "FinTech Mobile App",
      category: "Mobile Design",
      description: "Intuitive mobile banking app design prioritizing security, accessibility, and seamless user experience.",
      image: "/lovable-uploads/a8a9c709-8113-47a0-8817-c5f88aa73db1.png",
      tags: ["Mobile", "FinTech", "App Design"],
      images: [
        "/lovable-uploads/a8a9c709-8113-47a0-8817-c5f88aa73db1.png"
      ]
    },
    {
      id: 6,
      title: "Luxury Resort Campaign",
      category: "Marketing Design",
      description: "Comprehensive marketing campaign for a luxury resort, including print ads, digital banners, and social media.",
      image: "/lovable-uploads/d3d6039d-06ff-4cbd-bb0d-bffae5759bd1.png",
      tags: ["Campaign", "Luxury", "Marketing"],
      images: [
        "/lovable-uploads/d3d6039d-06ff-4cbd-bb0d-bffae5759bd1.png",
        "/lovable-uploads/ea267de5-83e1-4ebd-beca-26a13161d17a.png"
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

              </div>
            ))}
          </section>

          {/* More Text */}
          <section className="text-center mt-16 mb-8">
            <p className="text-2xl text-muted-foreground">+ More</p>
          </section>

          {/* CTA Section */}
          <section className="text-center mt-20 glass-card max-w-4xl mx-auto animate-fade-scale">
            <h2 className="text-3xl font-bold mb-6 text-accent">Elevate with Avian.</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Contact us to create a fresh personality for your brand.
            </p>
            <button className="btn-primary" onClick={() => navigate('/contact')}>
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