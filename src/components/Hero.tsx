import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom duration-1000 delay-100">
            SUJEET D
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground font-semibold animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            Quality Assurance Engineer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            Cloud & API Testing | Java | AWS
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base text-muted-foreground animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>Chennai, TN</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              <span>+91 76038 47076</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <a href="mailto:sujeetds90@gmail.com" className="hover:text-primary transition-colors">
                sujeetds90@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={18} className="text-primary" />
              <a
                href="https://www.linkedin.com/in/sujeet-d-04ma05"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
