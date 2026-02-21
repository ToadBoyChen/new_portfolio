"use client";

import Link from "next/link";
import IntroText from "./IntoText";
import { animated, to, useSprings } from "@react-spring/web";
import { useState, useRef, useCallback } from "react";
import { useCursor } from "@/context/CursorContext";
import PortfolioAbstractEntry from "./PortfolioAbstractEntry";

interface PortfolioAbstractProps {
    name: string;
    description: string[];
    date: string;
    roles: Record<string, number>;
    stack: string[];
    links: Record<string, string>;
    bannerImage: string;
    content: Record<string, string>;
    color: string;
}

export default function PortfolioAbstract(props: PortfolioAbstractProps) {
    const width = 300;
    const gap = 40;

    const { getHoverProps } = useCursor();

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const photoAlbumLength = Object.entries(props.content).length;

    const calculateSprings = useCallback((i: number, activeIndex: number) => {
        const offset = i - activeIndex;
        const absOffset = Math.abs(offset);

        return {
            x: offset * (width + gap),
            scale: 1 - absOffset * 0.2,
            zIndex: photoAlbumLength - absOffset,
            opacity: absOffset === 0 ? 1 : 0.8,
            display: 'block',
        };
    }, [photoAlbumLength]);

    const [textSprings] = useSprings(
        photoAlbumLength,
        (i) => ({
            opacity: i === currentImageIndex ? 1 : 0,
            y: i === currentImageIndex ? 0 : 80,
        }),
        [currentImageIndex]
    );

    const [springs] = useSprings(
        photoAlbumLength,
        (i) => ({
            ...calculateSprings(i, currentImageIndex),
        }),
        [currentImageIndex, calculateSprings]
    );

    const handlePreviousClick = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? photoAlbumLength - 1 : prev - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prev) =>
            (prev + 1) % photoAlbumLength
        );
    };

    const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const isLeft = x < rect.width / 2;

        if (isLeft) {
            handlePreviousClick();
        } else {
            handleNextClick();
        }
    };

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleNextClick();
        } else if (isRightSwipe) {
            handlePreviousClick();
        }
    };

    return (
        <section>
            <div className="relative border-b">
                <div className="z-10 text-white mix-blend-difference text-7xl md:text-8xl font-black leading-none justify-center tracking-normal sm:tracking-wide md:tracking-widest absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
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
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center mb-8">
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

                <div className="w-full relative flex flex-col items-center">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center mb-8">
                        {`Content from ${props.name}`}
                    </p>
                    <div
                        className="relative w-screen h-115 flex justify-center items-center cursor-none touch-pan-y select-none"

                        // Desktop Interaction
                        onClick={handleContainerClick}

                        // Mobile Interaction
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className="w-1/2 absolute left-0 top-0 h-full"
                            {...getHoverProps("Prev")}
                        />
                        <div
                            className="w-1/2 absolute right-0 top-0 h-full"
                            {...getHoverProps("Next")}
                        />
                        {springs.map(({ x, scale, zIndex, opacity }, i) => (
                            <animated.div
                                key={i}
                                className="absolute shadow-2xl rounded-lg pointer-events-none"
                                style={{
                                    zIndex,
                                    opacity,
                                    width: '350px',
                                    height: '350px',
                                    transform: to([x, scale], (x, s) => `translate3d(${x}px,0,0) scale(${s})`),
                                }}
                            >
                                <img
                                    src={Object.entries(props.content)[i][1]}
                                    alt={`${props.name} photo ${i}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </animated.div>
                        ))}
                    </div>
                    <div className="mb-32 relative w-full flex justify-center">
                        {textSprings.map(({ opacity, y }, i) => (
                            <animated.p
                                key={i}
                                className="absolute text-center text-xs tracking-wider"
                                style={{
                                    opacity,
                                    transform: y.to(v => `translate3d(0, ${v}px, 0)`),
                                }}
                            >
                                {Object.entries(props.content)[i][0]}
                            </animated.p>
                        ))}
                    </div>
                    <div className="w-full text-center mt-4 text-xs text-gray-400 uppercase tracking-widest md:hidden">
                        Swipe to navigate
                    </div>
                </div>

                <div className="w-full">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center mb-8">
                        {"Roles"}
                    </p>
                    <ul className="flex flex-col gap-4 w-full">
                        {Object.entries(props.roles).map(([role, percent]) => (
                            <li
                                key={role}
                                className="relative w-full h-12 border rounded overflow-hidden"
                            >
                                <div
                                    className=
                                    {`absolute top-0 left-0 h-full transition-all duration-1000 ease-out z-0 ${props.color}`}
                                    style={{
                                        width: `${percent}%`
                                    }}
                                />
                                <div className="relative z-10 w-full h-full flex justify-between items-center px-4">
                                    <span className="uppercase tracking-wider text-sm font-bold">
                                        {role}
                                    </span>
                                    <span className="font-mono text-sm">
                                        {percent}%
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center mb-8">
                        {"Tech + Skill Stack"}
                    </p>
                    <ul className="grid grid-cols-3 gap-6">
                        {props.stack.map((tech, i) => (
                            <li
                                key={i}
                                className="tracking-tighter sm:tracking-tight md:tracking-normal lg:tracking-wider"
                            >
                                <span className="text-xs">{i + 1}.</span> {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full pb-32">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center mb-8">
                        {"Links"}
                    </p>
                    <ul className="flex flex-col gap-6">
                        {Object.entries(props.links).map(([label, url]) => (
                            <li
                                key={label}
                                {...getHoverProps("GO TO")}
                            >
                                <PortfolioAbstractEntry 
                                    link={url}
                                    text={label}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}