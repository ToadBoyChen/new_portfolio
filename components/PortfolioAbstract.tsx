"use client";

import Link from "next/link";
import IntroText from "./IntoText";
import { animated, to, useInView, useSpring, useSprings } from "@react-spring/web";
import { useState, useRef, useCallback } from "react";
import { useCursor } from "@/context/CursorContext";
import PortfolioAbstractEntry from "./PortfolioAbstractEntry";
import CustomDiv from "./CustomDiv";

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
    const width = 400;
    const gap = 40;

    const { getHoverProps } = useCursor();

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const photoAlbumLength = Object.entries(props.content).length;

    const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(photoAlbumLength / 2));

    const calculateSprings = useCallback((i: number, activeIndex: number) => {
        const offset = i - activeIndex;
        const absOffset = Math.abs(offset);

        return {
            x: offset * (width + gap),
            scale: 1 - absOffset * 0.3,
            zIndex: photoAlbumLength - absOffset,
            opacity: absOffset === 0 ? 1 : 0.7,
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
                <p className="absolute bottom-2 left-2 tracking-wider bg-black/10 px-4 py-2 rounded-4xl backdrop-blur-sm text-xs">
                    <span className="text-white mix-blend-difference">{props.date}</span>
                </p>
            </div>

            <div className="mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl fle flex-col items-center">

                <div className="mt-32" />
                <CustomDiv label="Abstract" align="left" />

                <div className="mt-16" />
                <CustomDiv label="Description" align="right" />
                <div className="space-y-4">
                    {props.description.map((para, i) => (
                        <p key={i} className="text-stone-500 text-3xl leading-none text-justify">
                            {para}
                        </p>
                    ))}
                </div>

                <div className="mt-16" />
                <CustomDiv label="Roles" align="right" />
                <ul className="flex flex-col gap-8 mt-10">
                    {Object.entries(props.roles).map(([role, percent]) => (
                        <RoleBar key={role} role={role} percent={percent} color={props.color} />
                    ))}
                </ul>

                <div className="mt-16" />
                <CustomDiv label="Technical Stack" align="right" />
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    {props.stack.map((tech, i) => (
                        <li key={i} className="flex items-baseline gap-2 border-b border-stone-200">
                            <span className="text-xs text-stone-400">{(i + 1).toString()}</span>
                            <span className="text-stone-800 tracking-tight text-xl md:text-2xl">{tech}</span>
                        </li>
                    ))}
                </ul>

                <div className="w-full relative flex flex-col items-center mt-32">
                    <CustomDiv label={"Images"} align="left" />
                    <div
                        className="relative w-screen h-100 flex justify-center items-center cursor-none touch-pan-y select-none"

                        onClick={handleContainerClick}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className="w-1/2 absolute left-0 top-0 h-full"
                            {...getHoverProps("Prev", props.color)}
                        />
                        <div
                            className="w-1/2 absolute right-0 top-0 h-full"
                            {...getHoverProps("Next", props.color)}
                        />
                        {springs.map(({ x, scale, zIndex, opacity }, i) => (
                            <animated.div
                                key={i}
                                className="absolute pointer-events-none"
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
                    <div className="relative w-full flex justify-center">
                        {textSprings.map(({ opacity, y }, i) => (
                            <animated.p
                                key={i}
                                className="absolute tracking-tighter text-justify text-lg text-stone-800 md:text-xl"
                                style={{
                                    opacity,
                                    transform: y.to(v => `translate3d(0, ${v}px, 0)`),
                                }}
                            >
                                <span className="mr-2 text-xs text-stone-400">{i}</span>
                                {Object.entries(props.content)[i][0]}
                            </animated.p>
                        ))}
                    </div>
                </div>

                <div className="mt-64 mb-16" />
                <ul className="gap-6 flex flex-col absolute w-[80vw] left-1/2 -translate-x-1/2">
                    <CustomDiv label={"Links"} align="left" />
                    {Object.entries(props.links).map(([label, url]) => (
                        <li
                            key={label}
                            {...getHoverProps("Go To", props.color)}
                        >
                            <PortfolioAbstractEntry
                                link={url}
                                text={label}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function RoleBar({ role, percent, color }: { role: string; percent: number; color: string }) {
    const [ref, inView] = useInView({ once: true });
    const spring = useSpring({
        width: inView ? `${percent}%` : "0%",
        config: { tension: 60, friction: 25 }
    });

    return (
        <div ref={ref} className="w-full">
            <div className="flex justify-between items-end mb-3">
                <p className="text-sm tracking-widest text-stone-600">
                    {role}
                </p>
                <p className="text-md text-stone-600">
                    {percent} <span className="text-xs text-stone-400">%</span>
                </p>
            </div>
            <div className="h-1 w-full bg-stone-200 relative">
                <animated.div style={spring} className={`absolute top-0 left-0 h-full ${color}`} />
            </div>
        </div>
    );
}