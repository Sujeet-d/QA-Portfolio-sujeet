import { Card } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (M.C.A)',
      institution: 'Sikkim Manipal University',
      status: 'Pursuing, Expected 2026',
    },
    {
      degree: 'B.Sc. Computer Science',
      institution: 'K.C.S Kasi Nadar College of Arts & Science',
      year: '2023',
    },
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner Essentials',
      issuer: 'AWS Skill Builder',
      year: '2025',
    },
    {
      name: 'AWS Cloud Technical Essentials',
      issuer: 'Coursera (Authorized by AWS)',
      year: '2025',
    },
    {
      name: 'Frontend Development Certified Trainee',
      issuer: 'Besant Technologies',
      year: '2023',
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Education & Certifications
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-primary font-medium mt-1">
                    {edu.year || edu.status}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="text-primary" size={28} />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                  <p className="text-sm text-primary font-medium mt-1">{cert.year}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
