import { useEffect, useState } from "react";

export default function Mascot({ firstSrc, secondSrc, alt = "", className = "" }) {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const fadeFirst = setTimeout(() => setShowFirst(true), 100);
    const fadeSecond = setTimeout(() => setShowSecond(true), 1000);
    return () => {
      clearTimeout(fadeFirst);
      clearTimeout(fadeSecond);
    };
  }, []);

  return (
    <div className={`relative ${className} m-[-40px] overflow-hidden`}>
      <img
        src={firstSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
          showFirst && !showSecond ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src={secondSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
          showSecond
            ? "opacity-100 animate-glow"
            : "opacity-0"
        }`}
      />
    </div>
  );
}
