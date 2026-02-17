"use client"

import { useSpring, animated } from "@react-spring/web"
import Link from "next/link";

import Capy from "./svgs/Capy";

const svgs: { [key: string]: React.ElementType } = {
    capy: Capy,
}

interface PortfolioEntryProps {
    text: string,
    image: string,
    link: string
}

export default function PortfolioEntry(props: PortfolioEntryProps) {
    const [y, svgApi] = useSpring(() => ({
        y: "100%",
    }));

    // Calculates random rotations based on the portfolio entry text
    let hash = 5381;
    for (let i = 0; i < props.text.length; i++) {
        hash = (hash * 33) ^ props.text.charCodeAt(i);
    }
    hash = Math.sin(hash) * 10000;

    const randomSeed = hash - Math.floor(hash);
    const rotateVal = ((randomSeed * 40) - 20).toFixed(2);
    const moveXVal = ((randomSeed * 60) - 20).toFixed(2);

    const SvgComponent = svgs[props.image]

    return (
        <div 
            className="relative flex flex-row justify-around border-b overflow-hidden"

            onMouseEnter={() => svgApi.start({ y: "0%" })}    
            onMouseLeave={() => svgApi.start({ y: "100%" })}
        >
            <Link
                className="text-xl tracking-wider w-2/3"
                href={props.link}
            >
                {props.text}
            </Link>

            {/* SVG container starts translate below its div (overflow is hidden) */}
            <animated.div 
                className="translate-y-0 w-1/3"
                style={y}
            >
                <SvgComponent
                    className="w-15 h-15"
                    style={{ transform: `rotate(${rotateVal}deg) translateX(${moveXVal}px)` }}
                />
            </animated.div>
        </div>
    );
}