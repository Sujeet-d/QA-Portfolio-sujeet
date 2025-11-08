import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TestTube, Cloud, Code, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'QA & Test Automation',
    icon: TestTube,
    skills: [
      'Manual Testing',
      'API Testing (Postman)',
      'Test Case Design',
      'Functional Testing',
      'Regression Testing',
      'Integration Testing',
      'Exploratory Testing',
      'Defect Life Cycle Management',
    ],
  },
  {
    title: 'Cloud Computing (AWS)',
    icon: Cloud,
    skills: ['EC2', 'S3', 'Lambda', 'Lex', 'Connect', 'IAM', 'CloudWatch', 'VPC', 'Load Balancer'],
  },
  {
    title: 'Programming & Databases',
    icon: Code,
    skills: ['Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Testing & Automation',
    icon: Wrench,
    skills: ['Selenium', 'Postman', 'Jira', 'TestRail'],
  },
];

const methodologies = [
  'Git',
  'GitHub',
  'Agile/Scrum',
  'CI/CD Concepts',
  'Debugging',
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 hover:shadow-lg transition-all duration-300 border-border animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        <Card className="p-6 max-w-6xl mx-auto hover:shadow-lg transition-all duration-300 border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="text-primary" size={24} />
            Developer Tools & Methodologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {methodologies.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
