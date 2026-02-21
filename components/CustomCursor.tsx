"use client";

import { useEffect, useState } from "react";
import { useSpring, animated, to, config } from "@react-spring/web";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorText, cursorVariant, cursorColor } = useCursor();
  const isText = cursorVariant === "text";

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const [{ x, y, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { mass: 1, tension: 1200, friction: 50 },
  }));

  const visualStyles = useSpring({
    width: isText ? 100 : 16,
    height: isText ? 100 : 16,
    backgroundColor: isText ? cursorColor : "#ffffff",
    config: { tension: 300, friction: 30 },
  });

  useEffect(() => {
    const handleTouchStart = () => {
      setIsTouchDevice(true);
    };

    const handleMove = (e: MouseEvent) => {
      if (isTouchDevice) {
        setIsTouchDevice(false);
      }

      if (typeof e.clientX !== 'number' || typeof e.clientY !== 'number') return;
      api.start({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      api.start({
        to: async (next) => {
          await next({ scale: 0.8, config: { duration: 100 } });
          await next({ scale: 1, config: config.wobbly });
        },
      });
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [api, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <animated.div
      className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-9999 opacity-100"
      style={{
        ...visualStyles,
        mixBlendMode: isText ? "normal" : "difference",
        transform: to(
          [x, y, scale],
          (x, y, s) => `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${s})`
        ),
      }}
    >
      {isText && (
        <animated.span
          className="text-[12px] uppercase font-black text-center leading-none select-none text-black"
        >
          {cursorText}
        </animated.span>
      )}
    </animated.div>
  );
}