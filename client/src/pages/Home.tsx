import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      
      <footer className="border-t border-border bg-card py-8">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center text-sm text-muted-foreground">
            <p data-testid="text-footer-copyright">
              © {new Date().getFullYear()} CODEWITHKAYLA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
