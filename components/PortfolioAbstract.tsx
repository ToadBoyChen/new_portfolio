"use client"

import Link from "next/link";
import IntroText from "./IntoText";
import { animated, to, useSprings } from "@react-spring/web";
import { useEffect, useState } from "react";
import { off } from "process";

interface PortfolioAbstractProps {
    name: string;
    description: string[];
    date: string;
    roles: string[];
    stack: string[];
    links: Record<string, string>;
    bannerImage: string;
    content: string[];
    color: string;
}

export default function PortfolioAbstract(props: PortfolioAbstractProps) {
    const width = 300;
    const gap = 40;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const getSprings = (i: number) => {
        const offset = i - currentImageIndex;
        const absOffset = Math.abs(offset);

        return {
            x: offset * (width + gap),
            scale: 1 - absOffset * 0.2,
            zIndex: props.content.length - absOffset,
            opacity: absOffset === 0 ? 1 : 0.8,
            display: 'block',
            immediate: (key: string) => key === "zIndex",
        };
    };

    const [springs, api] = useSprings(props.content.length, (i) => getSprings(i));

    useEffect(() => {
        api.start((i) => getSprings(i));
    }, [currentImageIndex, api]);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? props.content.length - 1 : currentImageIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex(
            (currentImageIndex + 1) % props.content.length
        );
    };

    return (
        <section>
            <div className="relative border-b">
                <div className="text-7xl md:text-8xl font-black leading-none justify-center tracking-normal sm:tracking-wide md:tracking-widest absolute top-0 lg:top-1/2 lg:-translate-y-1/2 left-1/2 -translate-x-1/2">
                    <IntroText
                        text={props.name}
                        direction="left"
                        spacing={false}
                    />
                </div>
                <img
                    src={props.bannerImage}
                    alt={`${props.name} banner`}
                    className="w-full object-cover object-top max-h-100 lg:max-h-70"
                />
                <p className="absolute bottom-2 left-8 tracking-wider">
                    {props.date}
                </p>
            </div>
            <div className="mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl flex flex-col items-center leading-relaxed text-lg">

                <div className="w-full">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center">
                        {"Description"}
                    </p>
                    {props.description.map((para, i) => (
                        <p
                            key={i}
                        >
                            {para}
                        </p>
                    ))}
                </div>

                <div className="w-full h-full relative">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center">
                        {`Content from ${props.name}`}
                    </p>
                    <div className="flex flex-row justify-center gap-16 py-8">
                        {springs.map(({ x, scale, zIndex, opacity }, i) => (
                            <animated.div
                                key={i}
                                className="absolute shadow-2xl rounded-lg bg-white"
                                style={{
                                    zIndex,
                                    opacity,
                                    width: '350px',
                                    height: '350px',
                                    transform: to([x, scale], (x, s) => `translate3d(${x}px,0,0) scale(${s})`),
                                }}
                            >
                                <img
                                    src={props.content[i]}
                                    alt={`${props.name} photo ${i}`}
                                    className="w-full h-full object-cover rounded-lg pointer-events-none"
                                />
                            </animated.div>
                        ))}
                    </div>
                    <div className="w-full absolute top-3/4 flex flex-row justify-between text-5xl font-black">
                        <button
                            onClick={handlePreviousClick}
                            className="bg-white"
                        >
                            {`<`}
                        </button>

                        <button
                            onClick={handleNextClick}
                            className="bg-white"
                        >
                            {`>`}
                        </button>
                    </div>
                </div>

                <div className="w-full">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center">
                        {"Roles"}
                    </p>

                    <ul>
                        {props.roles.map((role) => (
                            <li key={role}>
                                {role}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center">
                        {"Tech + Skill Stack"}
                    </p>

                    <ul>
                        {props.stack.map((tech) => (
                            <li key={tech}>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links */}
                <div className="w-full pb-32">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center">
                        {"Links"}
                    </p>
                    <ul>
                        {Object.entries(props.links).map(([label, url]) => (
                            <li key={label}>
                                <Link href={url} target="_blank" rel="noreferrer">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}