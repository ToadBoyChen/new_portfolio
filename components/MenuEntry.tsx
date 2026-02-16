"use client";

import Link from "next/link";
import { useSpring, animated, to } from "@react-spring/web";

interface MenuEntryProps {
    text: string;
    link: string;
}

export default function MenuEntry(props: MenuEntryProps) {
    const [{ x, y }, underlineApi] = useSpring(() => ({
        x: 50,
        y: 10,
        config: { tension: 200, friction: 20 }
    }))

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        
        const xPos = ((e.clientX - rect.left) / rect.width) * 100;
        const yPos = 5 + ((e.clientY - rect.top) / rect.height) * 5;

        underlineApi.start({ x: xPos, y: yPos });
    };

    const handleLeave = () => {
        underlineApi.start({ x: 50, y: 10 });
    };

    return (
        <animated.div
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="relative inline-block w-full group"
        >
            <Link
                href={props.link}
                className="text-5xl font-black tracking-wide"
            >
                {props.text}
            </Link>
            <svg
                className="w-full pointer-events-none overflow-visible -translate-y-8 sm:-translate-y-12"
                viewBox="0 0 100 10"
            >
                <animated.path
                    fill="none"
                    stroke="black"
                    strokeWidth="0.5"
                    d={to([x,y], (mx, my) => `M 0 10 Q ${mx} ${my} 100 10`)}
                />
            </svg>
        </animated.div>
    );
}