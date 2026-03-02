"use client";

import { useState, useEffect } from "react";
import { useSpring, animated, useInView } from "@react-spring/web";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Capy from "./svgs/Capy";

const svgs: { [key: string]: React.ElementType } = {
    capy: Capy,
};

interface PortfolioEntryProps {
    text: string;
    image: string;
    colour: string;
    link: string;
}

export default function PortfolioEntry(props: PortfolioEntryProps) {
    const router = useRouter();
    const peekAmount = "calc(100% - 15px)";

    const [ref, inViewSprings] = useInView(
        () => ({
            from: { opacity: 0, y: 40 },
            to: { opacity: 1, y: 0 },
            config: { mass: 1, tension: 100, friction: 15 },
        }),
        {
            rootMargin: "-10% 0%",
            once: true,
        }
    );

    // Safely get initial mobile state during hydration
    const getInitialMobile = () => 
        typeof window !== "undefined" ? window.innerWidth < 768 : false;

    const [isMobile, setIsMobile] = useState(getInitialMobile);

    // Initialize the spring to the correct visual state instantly on the client
    const [{ svgY, bgY }, svgApi] = useSpring(() => ({
        svgY: getInitialMobile() ? "0%" : "100%",
        bgY: getInitialMobile() ? "calc(0% - 0px)" : peekAmount,
    }));

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            
            if (mobile) {
                // .set() forces the values instantly without touching the animation queue
                svgApi.set({ svgY: "0%", bgY: "calc(0% - 0px)" });
            } else {
                // .start() allows it to animate smoothly if the user manually resizes
                svgApi.start({ svgY: "100%", bgY: peekAmount });
            }
        };

        // Run once on mount to guarantee the component locks into place
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [svgApi, peekAmount]);

    let hash = 5381;
    for (let i = 0; i < props.text.length; i++) {
        hash = (hash * 33) ^ props.text.charCodeAt(i);
    }
    hash = Math.sin(hash) * 10000;

    const randomSeed = hash - Math.floor(hash);
    const rotateVal = ((randomSeed * 40) - 20).toFixed(2);
    const moveXVal = ((randomSeed * 60) - 20).toFixed(2);

    const SvgComponent = svgs[props.image];

    const handleMouseEnter = () => {
        // Direct window check is safer here to prevent touch-screen glitches
        if (window.innerWidth >= 768) {
            svgApi.start({ svgY: "0%", bgY: "calc(0% - 0px)" });
        }
        router.prefetch(props.link);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 768) {
            svgApi.start({ svgY: "100%", bgY: peekAmount });
        }
    };

    return (
        <animated.div
            ref={ref}
            style={inViewSprings}
            className="relative border-b-3 overflow-hidden my-4 border-black transition-colors duration-300 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => router.push(props.link)}
        >
            <animated.div 
                className={`absolute left-0 top-0 w-full h-full rounded-t-4xl z-0 border-t-3 border-r-3 border-l-3 border-b-0 border-black ${props.colour}`}
                style={{ y: bgY }}
            />
            <div className="flex flex-row justify-between z-10 relative items-center pointer-events-none">
                <Link
                    className="px-8 py-4 text-xl md:text-3xl font-semibold tracking-wider w-2/3 flex items-center gap-4 pointer-events-auto"
                    href={props.link}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className="mix-blend-difference">{props.text}</span>
                    <span className="md:hidden flex items-center justify-center w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full transition-colors">
                        <FaArrowRight className="w-4 h-4" />
                    </span>
                </Link>

                <animated.div
                    className="translate-y-0 w-1/3 flex justify-end pr-8"
                    style={{ y: svgY }}
                >
                    <SvgComponent
                        className="w-20 h-20 md:w-25 md:h-25"
                        style={{ transform: `rotate(${rotateVal}deg) translateX(${moveXVal}px)` }}
                    />
                </animated.div>
            </div>
        </animated.div>
    );
}