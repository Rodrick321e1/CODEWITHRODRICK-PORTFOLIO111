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
      <div className="relative mx-auto" style={{ width: "280px" }}>
        <div className="relative bg-neutral-800 border-[14px] border-neutral-900 rounded-[3rem] shadow-xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-neutral-900 rounded-b-3xl z-10"></div>
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
      <div className="relative mx-auto" style={{ width: "420px" }}>
        <div className="relative bg-neutral-800 border-[12px] border-neutral-900 rounded-[2rem] shadow-xl overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-700 rounded-full z-10"></div>
          <div className="aspect-[3/4] bg-neutral-950 overflow-hidden relative">
            <img
              src={images[currentIndex]}
              alt={alt}
              className="w-full h-full object-cover object-top transition-opacity duration-300"
            />
            <NavigationArrows />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-neutral-700 z-10"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto" style={{ maxWidth: "600px" }}>
      <div className="relative bg-neutral-800 rounded-t-xl p-2 shadow-2xl border-4 border-neutral-900">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-600 rounded-full"></div>
        <div className="aspect-[16/10] bg-neutral-950 rounded-md overflow-hidden relative mt-2">
          <img
            src={images[currentIndex]}
            alt={alt}
            className="w-full h-full object-cover object-top transition-opacity duration-300"
          />
          <NavigationArrows />
        </div>
      </div>
      <div className="relative mx-auto" style={{ width: "40%" }}>
        <div className="h-6 bg-gradient-to-b from-neutral-800 to-neutral-700 rounded-b-sm"></div>
        <div className="h-3 bg-gradient-to-b from-neutral-700 to-neutral-600 mx-auto" style={{ width: "80%" }}></div>
        <div className="h-2 bg-neutral-800 rounded-b-lg shadow-lg mx-auto" style={{ width: "120%" , marginLeft: "-10%" }}></div>
      </div>
    </div>
  );
}
