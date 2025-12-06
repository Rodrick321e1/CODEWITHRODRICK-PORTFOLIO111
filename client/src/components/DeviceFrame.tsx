import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DeviceFrameProps {
  imageUrl: string;
  imageUrls?: string[];
  deviceType: "monitor" | "phone" | "tablet";
  alt: string;
}

export default function DeviceFrame({ imageUrl, imageUrls, deviceType, alt }: DeviceFrameProps) {
  const images = imageUrls && imageUrls.length > 0 ? imageUrls : [imageUrl];
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const NavigationArrows = () => {
    if (!hasMultipleImages) return null;
    return (
      <>
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white/90 hover:text-white transition-all duration-200 backdrop-blur-sm shadow-lg"
          data-testid="button-device-prev"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white/90 hover:text-white transition-all duration-200 backdrop-blur-sm shadow-lg"
          data-testid="button-device-next"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`rounded-full transition-all duration-200 shadow-sm ${
                idx === currentIndex 
                  ? "bg-white w-2.5 h-1.5 sm:w-3 sm:h-2" 
                  : "bg-white/50 w-1.5 h-1.5 sm:w-2 sm:h-2"
              }`}
            />
          ))}
        </div>
      </>
    );
  };

  if (deviceType === "phone") {
    return (
      <div className="relative mx-auto w-[140px] sm:w-[200px] md:w-[260px]">
        {/* Outer glow/shadow for depth */}
        <div 
          className="absolute -inset-4 rounded-[2.5rem] sm:rounded-[3rem] md:rounded-[3.5rem] opacity-40 blur-xl"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5), transparent 70%)"
          }}
        />
        
        {/* Main phone body - realistic titanium/aluminum frame */}
        <div 
          className="relative rounded-[1.8rem] sm:rounded-[2.4rem] md:rounded-[3rem]"
          style={{
            background: "linear-gradient(135deg, #4a4a50 0%, #3a3a40 15%, #2d2d32 30%, #1f1f24 50%, #2d2d32 70%, #3a3a40 85%, #4a4a50 100%)",
            padding: "8px",
            boxShadow: `
              0 50px 100px -20px rgba(0,0,0,0.6),
              0 30px 60px -30px rgba(0,0,0,0.5),
              inset 0 2px 4px rgba(255,255,255,0.15),
              inset 0 -2px 4px rgba(0,0,0,0.3),
              0 0 0 1px rgba(255,255,255,0.05)
            `
          }}
        >
          {/* Side buttons - volume */}
          <div 
            className="absolute -left-[3px] top-[18%] w-[4px] h-5 sm:h-6 md:h-8 rounded-l-sm"
            style={{ 
              background: "linear-gradient(90deg, #2a2a30 0%, #3a3a40 50%, #4a4a50 100%)",
              boxShadow: "-2px 0 4px rgba(0,0,0,0.3)"
            }} 
          />
          <div 
            className="absolute -left-[3px] top-[28%] w-[4px] h-5 sm:h-6 md:h-8 rounded-l-sm"
            style={{ 
              background: "linear-gradient(90deg, #2a2a30 0%, #3a3a40 50%, #4a4a50 100%)",
              boxShadow: "-2px 0 4px rgba(0,0,0,0.3)"
            }} 
          />
          {/* Power button */}
          <div 
            className="absolute -right-[3px] top-[22%] w-[4px] h-8 sm:h-10 md:h-12 rounded-r-sm"
            style={{ 
              background: "linear-gradient(90deg, #4a4a50 0%, #3a3a40 50%, #2a2a30 100%)",
              boxShadow: "2px 0 4px rgba(0,0,0,0.3)"
            }} 
          />

          {/* Inner bezel - the actual screen area */}
          <div 
            className="relative rounded-[1.4rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden"
            style={{
              background: "#000",
              boxShadow: "inset 0 0 20px rgba(0,0,0,0.8)"
            }}
          >
            {/* Dynamic Island - realistic pill shape */}
            <div className="absolute top-2 sm:top-2.5 md:top-3 left-1/2 -translate-x-1/2 z-30">
              <div 
                className="w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 rounded-full flex items-center justify-center gap-2"
                style={{ 
                  background: "#000",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.5)"
                }}
              >
                {/* Camera */}
                <div className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full relative overflow-hidden"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, #3a3a45, #1a1a20)",
                    boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1)"
                  }}
                >
                  <div 
                    className="absolute inset-[2px] rounded-full"
                    style={{ background: "radial-gradient(circle at 40% 40%, #1e3a5f, #0a1525)" }}
                  />
                </div>
              </div>
            </div>

            {/* Screen with project image */}
            <div className="aspect-[9/19.5] overflow-hidden relative bg-black">
              <img
                src={images[currentIndex]}
                alt={alt}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
              
              {/* Realistic glass reflection overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(
                      115deg, 
                      rgba(255,255,255,0.12) 0%, 
                      rgba(255,255,255,0.05) 20%,
                      transparent 40%,
                      transparent 100%
                    )
                  `
                }}
              />
              
              <NavigationArrows />
            </div>

            {/* Home indicator bar */}
            <div 
              className="absolute bottom-1.5 sm:bottom-2 md:bottom-2.5 left-1/2 -translate-x-1/2 w-10 sm:w-12 md:w-16 h-1 sm:h-1.5 rounded-full z-20"
              style={{
                background: "rgba(255,255,255,0.25)",
                boxShadow: "0 0 4px rgba(255,255,255,0.1)"
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (deviceType === "tablet") {
    return (
      <div className="relative mx-auto w-[180px] sm:w-[280px] md:w-[400px]">
        {/* Outer shadow for depth */}
        <div 
          className="absolute -inset-6 rounded-[2rem] opacity-30 blur-2xl"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 70%)"
          }}
        />
        
        {/* iPad-style aluminum frame */}
        <div 
          className="relative rounded-[1.2rem] sm:rounded-[1.6rem] md:rounded-[2rem]"
          style={{
            background: "linear-gradient(135deg, #d8d8dc 0%, #c8c8cc 15%, #b8b8bc 30%, #a8a8ac 50%, #b8b8bc 70%, #c8c8cc 85%, #d8d8dc 100%)",
            padding: "6px",
            boxShadow: `
              0 50px 100px -20px rgba(0,0,0,0.4),
              0 30px 60px -30px rgba(0,0,0,0.3),
              inset 0 2px 4px rgba(255,255,255,0.8),
              inset 0 -2px 4px rgba(0,0,0,0.15),
              0 0 0 1px rgba(255,255,255,0.3)
            `
          }}
        >
          {/* Inner screen bezel */}
          <div 
            className="relative rounded-[0.9rem] sm:rounded-[1.3rem] md:rounded-[1.6rem] overflow-hidden"
            style={{
              background: "#000",
              boxShadow: "inset 0 0 15px rgba(0,0,0,0.5)"
            }}
          >
            {/* Front camera */}
            <div className="absolute top-2 sm:top-2.5 md:top-3 left-1/2 -translate-x-1/2 z-20">
              <div 
                className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #3a3a45, #1a1a20)",
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1), 0 1px 3px rgba(0,0,0,0.3)"
                }}
              />
            </div>

            {/* Screen */}
            <div className="aspect-[3/4] overflow-hidden relative bg-black">
              <img
                src={images[currentIndex]}
                alt={alt}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
              
              {/* Glass reflection */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(
                      120deg, 
                      rgba(255,255,255,0.08) 0%, 
                      rgba(255,255,255,0.03) 25%,
                      transparent 50%
                    )
                  `
                }}
              />
              
              <NavigationArrows />
            </div>

            {/* Home indicator */}
            <div 
              className="absolute bottom-1.5 sm:bottom-2 md:bottom-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-16 md:w-24 h-1 sm:h-1.5 rounded-full z-20"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Monitor - Professional desktop display
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[420px] md:max-w-[580px]">
      {/* Large ambient shadow */}
      <div 
        className="absolute -inset-8 opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(0,0,0,0.7), transparent 70%)"
        }}
      />
      
      {/* Monitor housing - premium slim bezel design */}
      <div 
        className="relative rounded-lg sm:rounded-xl overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #2a2a30 0%, #1f1f25 30%, #18181d 70%, #101015 100%)",
          padding: "6px 6px 10px 6px",
          boxShadow: `
            0 60px 120px -20px rgba(0,0,0,0.5),
            0 30px 60px -10px rgba(0,0,0,0.4),
            inset 0 1px 2px rgba(255,255,255,0.08),
            inset 0 -1px 2px rgba(0,0,0,0.3),
            0 0 0 1px rgba(255,255,255,0.03)
          `
        }}
      >
        {/* Top bezel with centered webcam */}
        <div 
          className="flex items-center justify-center py-1.5 sm:py-2 md:py-2.5 relative"
          style={{
            background: "linear-gradient(180deg, #1a1a20 0%, #151518 100%)"
          }}
        >
          {/* Webcam module */}
          <div className="flex items-center gap-1.5">
            {/* Camera lens with realistic glass effect */}
            <div 
              className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full relative overflow-hidden"
              style={{
                background: "radial-gradient(circle at 30% 30%, #3a3a45, #1a1a20)",
                boxShadow: "inset 0 1px 2px rgba(255,255,255,0.15), 0 1px 2px rgba(0,0,0,0.5)"
              }}
            >
              <div 
                className="absolute inset-[2px] rounded-full"
                style={{ background: "radial-gradient(circle at 35% 35%, #1e3a5f, #0a1525)" }}
              />
            </div>
            {/* LED indicator */}
            <div 
              className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full"
              style={{ background: "#1a1a20" }}
            />
          </div>
        </div>

        {/* Screen panel */}
        <div 
          className="aspect-[16/9] overflow-hidden relative rounded-sm"
          style={{ 
            background: "#000",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.8)"
          }}
        >
          <img
            src={images[currentIndex]}
            alt={alt}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
          />
          
          {/* Realistic screen glass reflection */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  125deg, 
                  rgba(255,255,255,0.06) 0%, 
                  rgba(255,255,255,0.02) 30%,
                  transparent 50%,
                  transparent 100%
                )
              `
            }}
          />
          
          <NavigationArrows />
        </div>

        {/* Bottom bezel with brand indicator */}
        <div 
          className="flex items-center justify-center py-1.5 sm:py-2 md:py-2.5"
          style={{
            background: "linear-gradient(180deg, #151518 0%, #1a1a20 100%)"
          }}
        >
          {/* Subtle brand logo placeholder */}
          <div 
            className="w-8 sm:w-10 md:w-12 h-1 rounded-full"
            style={{ 
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" 
            }}
          />
        </div>
      </div>

      {/* Monitor stand - modern slim design */}
      <div className="relative flex flex-col items-center">
        {/* Neck/arm - tapered aluminum look */}
        <div 
          className="w-4 sm:w-5 md:w-6 h-10 sm:h-14 md:h-20 relative"
          style={{
            background: "linear-gradient(90deg, #28282d 0%, #38383d 30%, #48484d 50%, #38383d 70%, #28282d 100%)",
            boxShadow: "0 0 10px rgba(0,0,0,0.3), inset 0 0 5px rgba(255,255,255,0.05)"
          }}
        >
          {/* Subtle highlight on neck */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)"
            }}
          />
        </div>
        
        {/* Base - oval shaped with proper depth */}
        <div 
          className="w-24 sm:w-36 md:w-48 h-2.5 sm:h-3.5 md:h-5 rounded-full relative"
          style={{
            background: "linear-gradient(180deg, #3a3a40 0%, #2a2a30 40%, #1a1a20 100%)",
            boxShadow: `
              0 8px 16px -4px rgba(0,0,0,0.4),
              0 4px 8px -2px rgba(0,0,0,0.3),
              inset 0 1px 2px rgba(255,255,255,0.1),
              inset 0 -1px 2px rgba(0,0,0,0.2)
            `
          }}
        >
          {/* Top highlight */}
          <div 
            className="absolute inset-x-6 top-0 h-px rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
          />
        </div>
        
        {/* Base shadow on surface */}
        <div 
          className="w-28 sm:w-40 md:w-56 h-1.5 sm:h-2 md:h-3 rounded-full mt-1 opacity-40"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)"
          }}
        />
      </div>
    </div>
  );
}
