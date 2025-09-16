import React, { useRef, useEffect, useState } from "react";

const CommingSoon_Background = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      });
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, []);

  const generateDiagonalLines = () => {
    const lines = [];
    if (!dimensions.width || !dimensions.height) return lines;

    const { width, height } = dimensions;

    // number of diagonal lines needed
    const lineCount = Math.ceil(height / 20) + 5; // spacing ~20px
    // repeat text enough times to overflow diagonal
    const repeatCount = Math.ceil((width * 2) / 200); 
    const textContent = ("coming soon • ".repeat(repeatCount)).trim();

    for (let i = 0; i < lineCount; i++) {
      lines.push(
        <div
          key={i}
          className="absolute whitespace-nowrap text-gray-400 select-none pointer-events-none"
          style={{
            fontSize: "10px",
            transform: "rotate(-45deg)",
            transformOrigin: "left center",
            left: -width / 2 + i * 30, // staggered start
            top: -50 + i * 20,
            opacity: 0.6,
            zIndex: 1,
          }}
        >
          {textContent}
        </div>
      );
    }
    return lines;
  };

  return (
    <div
      ref={containerRef}
      className={`relative border-2 border-dashed border-gray-400 bg-gray-50 overflow-hidden ${className}`}
    >
      {/* Background pattern of diagonal "coming soon" text */}
      <div className="absolute inset-0">{generateDiagonalLines()}</div>

      {/* Content area - centered */}
      <div className="relative z-10 flex items-center justify-center min-h-[200px] p-8 bg-white bg-opacity-80">
        {children}
      </div>
    </div>
  );
};

export default CommingSoon_Background;
