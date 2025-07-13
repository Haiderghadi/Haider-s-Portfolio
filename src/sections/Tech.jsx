import React, { useEffect, useState } from "react";

// Using the provided marquee text with proper spacing
const MARQUEE_TEXT =
  "React • Next.js • Flutter • Php • Node • MongoDb • Tailwind • MySql • Javascript • Framer • Git • Typescript •";

const Tech = () => {
  const [width, setWidth] = useState(0);
  const [duration, setDuration] = useState(30);

  // This effect measures the element width to calculate proper animation timing
  useEffect(() => {
    // Set a base duration for animation
    setDuration(30);
  }, []);

  return (
    <div className="mt-4 w-full h-32 bg-lime-300 text-black py-4 lg:py-6 overflow-hidden">
      <div className="relative whitespace-nowrap">
        {/* First copy - animates from right edge to left edge */}
        <div className="absolute animate-marquee inline-block">
          <h1 className="text-3xl lg:text-7xl font-bold tracking-tighter">
            {MARQUEE_TEXT}
          </h1>
        </div>

        {/* Second copy - follows the first copy */}
        <div className="absolute animate-marquee2 inline-block">
          <h1 className="text-3xl lg:text-7xl font-bold tracking-tighter">
            {MARQUEE_TEXT}
          </h1>
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS or tailwind.config.js
// For demo purposes, I'm using direct styles below
const styles = `
  @keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  @keyframes marquee2 {
    0% { transform: translateX(0); }
    100% { transform: translateX(-200%); }
  }
  .animate-marquee {
    animation: marquee 50s linear infinite;
  }
  .animate-marquee2 {
    animation: marquee2 50s linear infinite;
  }
`;

export default () => (
  <div className="w-full">
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <Tech />
  </div>
);
