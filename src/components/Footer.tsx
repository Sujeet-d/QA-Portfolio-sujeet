export const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sujeet D. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Quality Assurance Engineer | Cloud & API Testing Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};
