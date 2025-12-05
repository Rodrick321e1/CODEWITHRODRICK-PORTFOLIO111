import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";

import carouselImg1 from "@assets/stock_images/professional_person__8a150da6.jpg";
import carouselImg2 from "@assets/stock_images/professional_person__e1111a2a.jpg";
import carouselImg3 from "@assets/stock_images/professional_person__6e5687f0.jpg";
import carouselImg4 from "@assets/stock_images/professional_person__bb1a329b.jpg";

const carouselImages = [
  { src: carouselImg1, alt: "Happy client using website on laptop" },
  { src: carouselImg2, alt: "Professional reviewing web design" },
  { src: carouselImg3, alt: "Team collaborating on digital project" },
  { src: carouselImg4, alt: "Client satisfied with website results" },
];

const WHATSAPP_NUMBER = "+2349046490562";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden animated-gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/3 -right-1/4 h-[900px] w-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60% / 0.15), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/3 -left-1/4 h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(190 95% 55% / 0.12), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(270 91% 65% / 0.08), transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(220_20%_4%/0.8)_100%)]" />
        
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(217 91% 60% / 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(217 91% 60% / 0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center pt-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-primary/30 bg-primary/10 backdrop-blur-sm neon-glow-sm">
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-primary" data-testid="badge-projects-metric">50+ Projects Delivered</span>
                </div>
              </motion.div>

              <motion.h1
                className="mb-8 font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="block text-foreground mb-2" data-testid="text-hero-title">CODEWITHRODRICK</span>
                <motion.span
                  className="block gradient-text"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  data-testid="text-hero-tagline"
                >
                  Web Developer & Designer
                </motion.span>
              </motion.h1>

              <motion.p
                className="mb-10 text-lg text-muted-foreground lg:text-xl max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                data-testid="text-hero-description"
              >
                Creating beautiful, modern websites and applications that bring your vision to life with cutting-edge technology and stunning design
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("portfolio")}
                  className="group relative overflow-hidden bg-primary hover:bg-primary/90 neon-glow transition-all duration-300"
                  data-testid="button-view-projects"
                >
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      &rarr;
                    </motion.span>
                  </span>
                </Button>
                
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden border-2 border-[hsl(142,70%,45%)] bg-[hsl(142,70%,45%)]/10 text-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,45%)]/20 neon-glow-whatsapp transition-all duration-300"
                    data-testid="button-whatsapp"
                  >
                    <SiWhatsapp className="mr-2 h-5 w-5" />
                    Let's Chat on WhatsApp
                  </Button>
                </a>
              </motion.div>
            </div>

            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <motion.div
                  className="absolute -inset-4 rounded-3xl opacity-50"
                  style={{
                    background: "linear-gradient(135deg, hsl(217 91% 60% / 0.3), hsl(190 95% 55% / 0.2), hsl(270 91% 65% / 0.2))",
                    filter: "blur(40px)",
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm p-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide}
                        src={carouselImages[currentSlide].src}
                        alt={carouselImages[currentSlide].alt}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                              ? "w-8 bg-primary neon-glow-sm" 
                              : "w-2 bg-white/50 hover:bg-white/80"
                          }`}
                          data-testid={`button-carousel-dot-${index}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-primary/30 bg-card/80 backdrop-blur-sm flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.button
          className="p-3 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm cursor-pointer neon-glow-sm"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => scrollToSection("portfolio")}
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.button>
      </motion.div>
    </section>
  );
}
