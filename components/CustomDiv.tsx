"use client";
import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
    label: string;
    lineColor?: string;
    textColor?: string;
}

export default function SectionHeader({
    label,
    lineColor = "bg-zinc-900",
}: SectionHeaderProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="flex items-center gap-4 w-full overflow-visible isolate my-8"
        >
            <div
                className={`h-[0.75px] rounded-full flex-1 origin-right transition-transform duration-1000 ${lineColor} ${inView ? "scale-x-100" : "scale-x-0"}`}
            />
            <div
                className={`
          transition-opacity duration-700 delay-300 z-10
          flex items-center justify-center
          ${inView ? "opacity-100" : "opacity-0"}
        `}
            >
                <span className="relative z-10 pointer-events-none">
                    {label}
                </span>
            </div>
            <div
                className={`h-[0.75px] rounded-full flex-1 origin-left transition-transform duration-1000 ${lineColor} ${inView ? "scale-x-100" : "scale-x-0"}`}
            />
        </div>
    );
}