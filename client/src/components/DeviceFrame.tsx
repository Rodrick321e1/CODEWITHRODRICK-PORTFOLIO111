interface DeviceFrameProps {
  imageUrl: string;
  deviceType: "monitor" | "phone" | "tablet";
  alt: string;
}

export default function DeviceFrame({ imageUrl, deviceType, alt }: DeviceFrameProps) {
  if (deviceType === "phone") {
    return (
      <div className="relative mx-auto" style={{ width: "280px" }}>
        <div className="relative bg-card border-[14px] border-foreground/90 rounded-[3rem] shadow-xl overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-foreground/90 rounded-b-3xl z-10"></div>
          <div className="aspect-[9/16] bg-background overflow-hidden">
            <img
              src={imageUrl}
              alt={alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    );
  }

  if (deviceType === "tablet") {
    return (
      <div className="relative mx-auto" style={{ width: "420px" }}>
        <div className="relative bg-card border-[12px] border-foreground/90 rounded-[2rem] shadow-xl overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground/40 rounded-full z-10"></div>
          <div className="aspect-[3/4] bg-background overflow-hidden">
            <img
              src={imageUrl}
              alt={alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-foreground/40 z-10"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative" style={{ paddingBottom: "62.5%" }}>
      <div className="absolute inset-0 bg-foreground/90 rounded-t-2xl p-3 shadow-2xl">
        <div className="h-full bg-background rounded-t-lg overflow-hidden border-2 border-border">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-foreground/70 rounded-b-2xl"></div>
    </div>
  );
}
