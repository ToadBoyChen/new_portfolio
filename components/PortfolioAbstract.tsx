"use client"

import Link from "next/link";
import IntroText from "./IntoText";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

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
    const [imageFocus, imageFocusApi] = useSpring(() => ({
        x: 10,
        y: 10,
        opacity: 1,
        scale: 1.05,
    }));

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentImageIndex(
            currentImageIndex === 0 ? props.content.length -1 : currentImageIndex - 1
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
                        {props.content.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                width={400}
                                height={400}
                                alt={`${props.name} photo`}
                                className={currentImageIndex === index ? 'block' : 'hidden'}
                            />
                        ))}
                    </div>
                    <div className="w-full absolute top-3/4 flex flex-row justify-between text-5xl font-black">
                        <button
                            onClick={handlePreviousClick}    
                        >
                            {`<`}
                        </button>

                        <button
                            onClick={handleNextClick}
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