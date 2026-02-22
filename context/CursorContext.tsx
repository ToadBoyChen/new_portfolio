"use client";
import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

type CursorVariant = "default" | "text";

type CursorContextType = {
  cursorText: string;
  cursorVariant: CursorVariant;
  cursorColor: string;
  getHoverProps: (text: string, color?: string) => {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
  resetCursor: () => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>("default");
  const [cursorColor, setCursorColor] = useState("bg-lime-400"); 

  const resetCursor = useCallback(() => {
    setCursorVariant("default");
    setCursorText("");
    setCursorColor("#7FE964");
  }, []);

  const getHoverProps = useCallback(
    (text: string, color?: string) => ({
      onMouseEnter: () => {
        setCursorText(text);
        setCursorVariant("text");
        if (color) setCursorColor(color);
      },
      onMouseLeave: resetCursor,
    }),
    [resetCursor]
  );

  const value = useMemo(() => ({
    cursorText,
    cursorVariant,
    cursorColor,
    getHoverProps,
    resetCursor
  }), [cursorText, cursorVariant, cursorColor, getHoverProps, resetCursor]);

  return (
    <CursorContext.Provider value={value}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) throw new Error("useCursor must be used within CursorProvider");
  return context;
}