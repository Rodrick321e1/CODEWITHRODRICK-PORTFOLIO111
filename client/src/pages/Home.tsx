import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="font-display text-xl font-bold text-primary mb-2">
              CODEWITHKAYLA
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © {new Date().getFullYear()} CODEWITHKAYLA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
