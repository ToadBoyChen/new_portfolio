"use client";

import { useEffect, useRef, useState } from "react";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorText, cursorVariant, cursorColor } = useCursor();
  const isText = cursorVariant === "text";

  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => setIsTouchDevice(true);

    const handleMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-9999"
      style={{ 
        opacity: isVisible ? 1 : 0,
        mixBlendMode: isText ? "normal" : "difference" 
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ease-out ${
          isText ? cursorColor : "bg-white"
        }`}
        style={{
          width: isText ? "100px" : "16px",
          height: isText ? "100px" : "16px",
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.75 : 1})`,
        }}
      >
        {isText && (
          <span className="text-[12px] uppercase font-black text-center leading-none select-none text-white mix-blend-difference">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}