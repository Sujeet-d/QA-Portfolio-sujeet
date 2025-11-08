import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sujeetds90@gmail.com',
      href: 'mailto:sujeetds90@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 76038 47076',
      href: 'tel:+917603847076',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu',
      href: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/sujeet-d-04ma05',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg border-border hover:shadow-xl transition-all duration-300">
            <p className="text-center text-lg text-muted-foreground mb-8">
              I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors animate-in fade-in slide-in-from-bottom"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg"
                onClick={() => window.location.href = 'mailto:sujeetds90@gmail.com'}
              >
                Send Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
