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
    colour: string,
    link: string,
}

export default function PortfolioEntry(props: PortfolioEntryProps) {
    const peekAmount = "calc(100% - 15px)";

    const [{ svgY, bgY }, svgApi] = useSpring(() => ({
        svgY: "100%",
        bgY: peekAmount,
    }));

    // Calculates random rotations and x displacements based on the portfolio entry text
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
            className="relative border-b-3 overflow-hidden my-4 hover:text-white hover:border-black transition-colors duration-300"

            onMouseEnter={() => svgApi.start({ svgY: "0%", bgY: "calc(0% - 0px)" })}
            onMouseLeave={() => svgApi.start({ svgY: "100%", bgY: peekAmount })}
        >
            <animated.div 
                className={`absolute left-0 top-0 w-full h-full rounded-t-4xl z-0 border-t-3 border-r-3 border-l-3 border-b-0 border-black ${props.colour}`}
                style={{ 
                    y: bgY,
                }}
            />
            <div 
                className="flex flex-row justify-around z-10 relative items-center"  
            >
                <Link
                    className=" px-8 py-4 text-xl md:text-3xl font-semibold tracking-wider w-2/3"
                    href={props.link}
                >
                    {props.text}
                </Link>

                <animated.div
                    className="translate-y-0 w-1/3"
                    style={{ y: svgY}}
                >
                    <SvgComponent
                        className="w-20 h-20 md:w-25 md:h-25"
                        style={{ transform: `rotate(${rotateVal}deg) translateX(${moveXVal}px)` }}
                    />
                </animated.div>
            </div>
        </div>
    );
}