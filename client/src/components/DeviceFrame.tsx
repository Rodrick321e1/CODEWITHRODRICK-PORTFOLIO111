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
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all duration-200 backdrop-blur-sm"
          data-testid="button-device-prev"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all duration-200 backdrop-blur-sm"
          data-testid="button-device-next"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-20">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-all duration-200 ${
                idx === currentIndex ? "bg-white w-2 sm:w-3" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </>
    );
  };

  if (deviceType === "phone") {
    return (
      <div className="relative mx-auto w-[120px] sm:w-[180px] md:w-[240px] px-1">
        {/* Side buttons - volume (outside overflow container) */}
        <div className="absolute left-0 top-[20%] w-[3px] h-4 sm:h-5 md:h-6 rounded-l-sm z-10" style={{ background: "linear-gradient(180deg, #4a4a4e, #3a3a3e)" }} />
        <div className="absolute left-0 top-[28%] w-[3px] h-4 sm:h-5 md:h-6 rounded-l-sm z-10" style={{ background: "linear-gradient(180deg, #4a4a4e, #3a3a3e)" }} />
        
        {/* Side button - power (outside overflow container) */}
        <div className="absolute right-0 top-[25%] w-[3px] h-6 sm:h-8 md:h-10 rounded-r-sm z-10" style={{ background: "linear-gradient(180deg, #4a4a4e, #3a3a3e)" }} />

        {/* Phone frame with titanium/steel look */}
        <div 
          className="relative rounded-[1.2rem] sm:rounded-[1.8rem] md:rounded-[2.5rem]"
          style={{
            background: "linear-gradient(145deg, #2a2a2e 0%, #1a1a1e 50%, #0f0f12 100%)",
            padding: "6px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)"
          }}
        >
          {/* Inner bezel */}
          <div 
            className="relative rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2.2rem] overflow-hidden"
            style={{
              background: "#000",
              border: "2px solid #1a1a1e"
            }}
          >
            {/* Dynamic Island */}
            <div className="absolute top-1 sm:top-1.5 md:top-2 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
              <div 
                className="w-12 sm:w-16 md:w-20 h-3 sm:h-4 md:h-5 rounded-full flex items-center justify-center gap-1 sm:gap-1.5"
                style={{ background: "#000" }}
              >
                {/* Front camera */}
                <div className="w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 rounded-full bg-neutral-800 ring-1 ring-neutral-700" />
                {/* Speaker grille */}
                <div className="w-4 sm:w-5 md:w-6 h-0.5 sm:h-1 rounded-full bg-neutral-800" />
              </div>
            </div>

            {/* Screen */}
            <div className="aspect-[9/19.5] overflow-hidden relative bg-black">
              <img
                src={images[currentIndex]}
                alt={alt}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
              {/* Screen glass reflection */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(255,255,255,0.01) 100%)"
                }}
              />
              <NavigationArrows />
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 rounded-full bg-white/20 z-20" />
          </div>
        </div>
      </div>
    );
  }

  if (deviceType === "tablet") {
    return (
      <div className="relative mx-auto w-[160px] sm:w-[240px] md:w-[360px]">
        {/* iPad-style frame */}
        <div 
          className="relative rounded-[0.8rem] sm:rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #e8e8ed 0%, #d1d1d6 50%, #b8b8bd 100%)",
            padding: "6px 6px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.1)"
          }}
        >
          {/* Dark variant frame */}
          <div 
            className="relative rounded-[0.6rem] sm:rounded-[1rem] md:rounded-[1.2rem] overflow-hidden"
            style={{
              background: "#000",
              border: "1px solid #2a2a2e"
            }}
          >
            {/* Front camera (centered at top) */}
            <div className="absolute top-1.5 sm:top-2 md:top-3 left-1/2 -translate-x-1/2 z-20">
              <div className="w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 rounded-full bg-neutral-900 ring-1 ring-neutral-800">
                <div className="absolute inset-0.5 rounded-full bg-neutral-950 ring-1 ring-blue-500/20" />
              </div>
            </div>

            {/* Screen */}
            <div className="aspect-[3/4] overflow-hidden relative bg-black">
              <img
                src={images[currentIndex]}
                alt={alt}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
              />
              {/* Screen glass reflection */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 40%, rgba(255,255,255,0.01) 100%)"
                }}
              />
              <NavigationArrows />
            </div>

            {/* Home indicator bar */}
            <div className="absolute bottom-1 sm:bottom-1.5 md:bottom-2 left-1/2 -translate-x-1/2 w-10 sm:w-14 md:w-20 h-0.5 sm:h-1 rounded-full bg-white/15 z-20" />
          </div>
        </div>

        {/* Apple Pencil magnetic attachment indicator (subtle line on side) */}
        <div 
          className="absolute top-[15%] -right-[2px] w-[2px] h-[30%] rounded-full hidden md:block"
          style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)" }}
        />
      </div>
    );
  }

  // Monitor
  return (
    <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[360px] md:max-w-[520px]">
      {/* Monitor screen housing */}
      <div 
        className="relative rounded-md sm:rounded-lg overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #1f1f23 0%, #18181b 50%, #0f0f12 100%)",
          padding: "4px 4px 12px 4px",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
        }}
      >
        {/* Top bezel with webcam */}
        <div className="flex items-center justify-center py-1 sm:py-1.5 md:py-2 relative">
          {/* Webcam housing */}
          <div className="flex items-center gap-1">
            {/* Camera lens */}
            <div className="w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 rounded-full bg-neutral-900 ring-1 ring-neutral-700">
              <div className="absolute inset-0.5 rounded-full bg-neutral-950">
                <div className="absolute inset-[2px] rounded-full bg-blue-950/50" />
              </div>
            </div>
            {/* Recording indicator (off) */}
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-neutral-800" />
          </div>
        </div>

        {/* Screen */}
        <div 
          className="aspect-[16/9] overflow-hidden relative rounded-sm"
          style={{ background: "#000", border: "1px solid #0a0a0a" }}
        >
          <img
            src={images[currentIndex]}
            alt={alt}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
          />
          {/* Screen glass reflection */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.01) 100%)"
            }}
          />
          <NavigationArrows />
        </div>

        {/* Bottom bezel with brand area */}
        <div className="flex items-center justify-center py-1 sm:py-1.5 md:py-2">
          {/* Brand logo placeholder (subtle) */}
          <div className="w-6 sm:w-8 md:w-10 h-0.5 sm:h-1 rounded-full bg-neutral-700/50" />
        </div>
      </div>

      {/* Monitor stand neck */}
      <div className="relative mx-auto flex flex-col items-center">
        {/* Neck - tapered design */}
        <div 
          className="w-6 sm:w-8 md:w-12 h-8 sm:h-12 md:h-16 relative"
          style={{
            background: "linear-gradient(90deg, #2a2a2e 0%, #3a3a3e 20%, #4a4a4e 50%, #3a3a3e 80%, #2a2a2e 100%)"
          }}
        >
          {/* Highlight on neck */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        
        {/* Base - oval shaped */}
        <div 
          className="w-20 sm:w-28 md:w-40 h-2 sm:h-3 md:h-4 rounded-full relative"
          style={{
            background: "linear-gradient(180deg, #3a3a3e 0%, #2a2a2e 50%, #1a1a1e 100%)",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
          }}
        >
          {/* Base highlight */}
          <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full" />
        </div>
        
        {/* Base shadow */}
        <div 
          className="w-24 sm:w-32 md:w-44 h-1 sm:h-1.5 md:h-2 rounded-full mt-0.5 opacity-30"
          style={{
            background: "radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)"
          }}
        />
      </div>
    </div>
  );
}
