"use client";

import { useTrail, animated } from "@react-spring/web"

interface IntroTextProps {
    text: string;
    direction: "left" | "right";
}

export default function IntroText(props: IntroTextProps) {
    const isLeft = props.direction === "left";
    const text = isLeft ? props.text.split("").reverse() : props.text.split("");
    const direction = isLeft ? 1000 : -1000;
    const flexType = isLeft ? "flex-row-reverse" : "flex-row";

    const trail = useTrail(text.length, {
        from: { x: direction },
        to: { x: 0 },
    })

    return (
        <div className="w-full">
            <h1 className={`${flexType} w-full flex text-[35vw] font-black leading-none text-stone-200 tracking-normal lg:text-[25vw] lg:tracking-[5vw] justify-center`}>
                {trail.map((style, index) => (
                    <animated.span
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