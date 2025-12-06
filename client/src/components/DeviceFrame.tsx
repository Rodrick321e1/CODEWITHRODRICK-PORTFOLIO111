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
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition-all duration-200"
          data-testid="button-device-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white/80 hover:text-white transition-all duration-200"
          data-testid="button-device-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                idx === currentIndex ? "bg-white w-3" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </>
    );
  };

  if (deviceType === "phone") {
    return (
      <div className="relative mx-auto w-[140px] sm:w-[200px] md:w-[280px]">
        <div className="relative bg-neutral-800 border-[8px] sm:border-[10px] md:border-[14px] border-neutral-900 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 md:w-40 h-3 sm:h-4 md:h-6 bg-neutral-900 rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl z-10"></div>
          <div className="aspect-[9/16] bg-neutral-950 overflow-hidden relative">
            <img
              src={images[currentIndex]}
              alt={alt}
              className="w-full h-full object-cover object-top transition-opacity duration-300"
            />
            <NavigationArrows />
          </div>
        </div>
      </div>
    );
  }

  if (deviceType === "tablet") {
    return (
      <div className="relative mx-auto w-[180px] sm:w-[280px] md:w-[420px]">
        <div className="relative bg-neutral-800 border-[6px] sm:border-[8px] md:border-[12px] border-neutral-900 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] shadow-xl overflow-hidden">
          <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neutral-700 rounded-full z-10"></div>
          <div className="aspect-[3/4] bg-neutral-950 overflow-hidden relative">
            <img
              src={images[currentIndex]}
              alt={alt}
              className="w-full h-full object-cover object-top transition-opacity duration-300"
            />
            <NavigationArrows />
          </div>
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-neutral-700 z-10"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px]">
      <div className="relative bg-neutral-900 rounded-sm p-[2px] sm:p-[3px] shadow-2xl">
        <div className="aspect-[16/9] bg-neutral-950 rounded-sm overflow-hidden relative">
          <img
            src={images[currentIndex]}
            alt={alt}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
          />
          <NavigationArrows />
        </div>
        <div className="absolute bottom-[2px] sm:bottom-[3px] left-1/2 -translate-x-1/2 w-10 sm:w-12 md:w-16 h-[1px] sm:h-[2px] bg-neutral-700 rounded-full"></div>
      </div>
      <div className="relative mx-auto flex flex-col items-center">
        <div className="w-2 sm:w-3 md:w-4 h-6 sm:h-8 md:h-12 bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 rounded-sm"></div>
        <div className="w-16 sm:w-24 md:w-32 h-2 sm:h-2.5 md:h-3 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-sm shadow-lg"></div>
      </div>
    </div>
  );
}
