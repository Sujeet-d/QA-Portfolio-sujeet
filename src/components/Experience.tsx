import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const achievements = [
    'Spearheaded the setup and configuration of AWS environments (Lambda, CloudWatch, Connect, Lex, S3, SES) specifically tailored for comprehensive quality assurance and testing purposes.',
    'Authored a comprehensive AWS Connect onboarding wiki, decreasing new-hire ramp-up time by an estimated 40%.',
    'Developed and executed Postman-based API testing frameworks for AWS Connect, automating the setup of dependent AWS services using Lambda, S3 and CloudWatch, reducing test setup time by over 50% and improving cloud resource provisioning efficiency.',
    'Executed comprehensive testing suites (functional, regression, integration) for cloud-native applications to guarantee seamless functionality and scalability.',
    'Utilized Jira and internal tools to meticulously track, manage, and report defects affecting cloud services, facilitating rapid resolution within an Agile/Scrum framework.',
    'Contributed to process improvements that led to a 15% reduction in defect detection time for cloud-hosted applications.',
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg border-border hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Briefcase className="text-primary" size={24} />
                  AWS Quality Assurance Associate
                </h3>
                <p className="text-lg text-muted-foreground mt-1">Amazon, Chennai</p>
              </div>
              <Badge className="bg-gradient-to-r from-primary to-accent text-white w-fit">
                <Calendar size={16} className="mr-1" />
                March 2024 - Present
              </Badge>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex gap-3 animate-in fade-in slide-in-from-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
