"use client";

import { useEffect } from "react";
import { useSpring, animated, to, config } from "@react-spring/web";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { cursorText, cursorVariant, cursorColor } = useCursor();
  const isText = cursorVariant === "text";

  const [{ x, y }, posApi] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { tension: 1200, friction: 50 },
  }));

  const [{ scale }, scaleApi] = useSpring(() => ({
    scale: 1,
  }));

  const styles = useSpring({
    width: isText ? 100 : 16,
    height: isText ? 100 : 16,
    backgroundColor: isText ? cursorColor : "#ffffff",
    textOpacity: isText ? 1 : 0,
    textScale: isText ? 1 : 0.5,
    config: { tension: 300, friction: 30 },
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      posApi.start({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      scaleApi.start({
        to: async (next) => {
          await next({ scale: 0.7, config: { duration: 100 } });
          await next({ scale: 1, config: config.wobbly });
        },
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [posApi, scaleApi]);

  return (
    <animated.div
      className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-9999 will-change-transform"
      style={{
        width: styles.width,
        height: styles.height,
        backgroundColor: styles.backgroundColor,
        mixBlendMode: isText ? "normal" : "difference",
        transform: to(
          [x, y, scale],
          (x, y, s) => `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${s})`
        ),
      }}
    >
      <animated.span
        className="text-[12px] uppercase font-black text-center leading-none select-none text-black"
        style={{
          opacity: styles.textOpacity,
          transform: styles.textScale.to((s) => `scale(${s})`),
        }}
      >
        {cursorText}
      </animated.span>
    </animated.div>
  );
}