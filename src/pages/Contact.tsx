import { useState } from 'react';
import Navigation from '@/components/Navigation';
import LiquidBackground from '@/components/LiquidBackground';
import CursorGlow from '@/components/CursorGlow';
import { Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Show success notification
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "avianstudiocontact@gmail.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      title: "Follow Us",
      details: "@AvianStudio_",
      subtitle: "Connect with us on Twitter"
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to give your brand a makeover? Let's discuss how we can bring your vision to life with exceptional design.
            </p>
          </section>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="glass-card animate-fade-scale">
              <h2 className="text-3xl font-bold mb-8 text-accent">Let's Start Something Amazing</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-glass/30 border border-glass-border/30 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300
                               backdrop-blur-sm text-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-glass/30 border border-glass-border/30 rounded-lg 
                               focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300
                               backdrop-blur-sm text-foreground"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-glass/30 border border-glass-border/30 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300
                             backdrop-blur-sm text-foreground"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-glass/30 border border-glass-border/30 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300
                             backdrop-blur-sm text-foreground resize-none"
                    placeholder="Tell us about your project, goals, and how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title}
                  className="glass-card hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.6)] transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-accent p-3 bg-primary/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                      <p className="text-lg text-foreground font-medium mb-1">{info.details}</p>
                      <p className="text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;