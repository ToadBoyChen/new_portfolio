"use client";

import { useTrail, animated } from "@react-spring/web"

interface IntroTextProps {
    text: string;
    direction: "left" | "right";
    spacing: boolean;
}

export default function IntroText(props: IntroTextProps) {
    const isLeft = props.direction === "left";
    const text = isLeft ? props.text.split("").reverse() : props.text.split("");
    const direction = isLeft ? 1000 : -1000;
    const flexType = isLeft ? "flex-row-reverse" : "flex-row";
    const space = props.spacing ? "gap-4 sm:gap-12 md:gap-20 lg:gap-42" : "gap-0";

    const trail = useTrail(text.length, {
        from: { x: direction },
        to: { x: 0 },
        config: { friction: 60, tension: 380, mass: 2 },
    });

    return (
        <div className="w-full pointer-events-none">
            <h1 className={`${flexType} ${space} w-full flex justify-center`}>
                {trail.map((style, index) => (
                    <animated.span
                        className=""
                        style={style}
                        key={index}
                    >
                        {text[index]}
                    </animated.span>
                ))}
            </h1>
        </div>
    );
}