import { Card } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <Card className="p-8 md:p-12 shadow-lg border-border hover:shadow-xl transition-all duration-300">
            <p className="text-lg leading-relaxed text-foreground">
              Detail-oriented Quality Assurance Engineer with hands-on experience in manual testing of cloud-native applications on AWS infrastructure. Proven expertise in developing API testing frameworks with Postman, executing comprehensive test suites (functional, regression, integration), and identifying critical defects in fast-paced Agile/Scrum environments. Skilled in Java, Selenium, and AWS services, with a strong focus on ensuring the reliability, scalability, and performance of complex, distributed systems.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
