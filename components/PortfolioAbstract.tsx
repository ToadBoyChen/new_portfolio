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
            y: i === currentImageIndex ? 0 : 20,
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
        <section className="bg-stone-50 min-h-screen text-stone-900 selection:bg-stone-900 selection:text-stone-50">
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[500px] w-full border-b border-stone-200 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src={props.bannerImage}
                        alt={`${props.name} banner`}
                        className="w-full h-full object-cover object-top opacity-90"
                    />
                </div>
                <div className="relative z-10 w-full text-center text-white mix-blend-difference text-7xl md:text-9xl font-black leading-none tracking-tighter">
                    <IntroText
                        text={props.name}
                        direction="left"
                        spacing={false}
                    />
                </div>
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                    <p className="tracking-widest bg-black/10 px-5 py-2.5 rounded-full backdrop-blur-md text-xs font-mono uppercase border border-white/10">
                        <span className="text-white drop-shadow-sm">{props.date}</span>
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 py-24 lg:py-40">
                    
                    {/* Left Column: Metadata (Roles & Stack) */}
                    <div className="lg:col-span-4 flex flex-col gap-24">
                        <div>
                            <CustomDiv label="Roles" align="left" />
                            <ul className="flex flex-col gap-8 mt-10">
                                {Object.entries(props.roles).map(([role, percent]) => (
                                    <RoleBar key={role} role={role} percent={percent} color={props.color} />
                                ))}
                            </ul>
                        </div>

                        <div>
                            <CustomDiv label="Technical Stack" align="left" />
                            <ul className="flex flex-col gap-0 mt-8 border-t border-stone-200">
                                {props.stack.map((tech, i) => (
                                    <li key={i} className="flex items-center justify-between py-4 border-b border-stone-200 group">
                                        <span className="text-xs text-stone-400 font-mono tracking-widest">
                                            {(i + 1).toString().padStart(2, '0')}
                                        </span>
                                        <span className="text-stone-800 tracking-tight text-lg md:text-xl font-medium transition-transform group-hover:-translate-x-2">
                                            {tech}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="lg:col-span-7 lg:col-start-6">
                        <CustomDiv label="Abstract" align="left" />
                        <div className="mt-12 space-y-8">
                            {props.description.map((para, i) => (
                                <p key={i} className="text-stone-600 text-2xl md:text-3xl leading-snug tracking-tight text-justify font-light">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Immersive Gallery Section */}
            <div className="w-full relative flex flex-col items-center py-24 bg-stone-100 overflow-hidden border-y border-stone-200">
                <div className="max-w-screen-2xl w-full px-6 md:px-12 mb-16">
                    <CustomDiv label="Visual Documentation" align="center" />
                </div>
                
                <div
                    className="relative w-screen h-[500px] flex justify-center items-center cursor-none touch-pan-y select-none"
                    onClick={handleContainerClick}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Invisible Hitboxes for Hover Cursor */}
                    <div className="w-1/2 absolute left-0 top-0 h-full z-40" {...getHoverProps("Prev", props.color)} />
                    <div className="w-1/2 absolute right-0 top-0 h-full z-40" {...getHoverProps("Next", props.color)} />
                    
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
                                alt={`${props.name} documentation ${i}`}
                                className="w-full h-full object-cover rounded-xl shadow-2xl"
                            />
                        </animated.div>
                    ))}
                </div>

                {/* Caption Container */}
                <div className="relative w-full max-w-3xl px-6 h-32 mt-12 flex justify-center">
                    {textSprings.map(({ opacity, y }, i) => (
                        <animated.p
                            key={i}
                            className="absolute inset-x-0 mx-auto text-center tracking-tight text-stone-600 md:text-lg font-light leading-relaxed"
                            style={{
                                opacity,
                                transform: y.to(v => `translate3d(0, ${v}px, 0)`),
                            }}
                        >
                            <span className="block text-xs text-stone-400 font-mono mb-2 uppercase tracking-widest">
                                Fig. {(i + 1).toString().padStart(2, '0')}
                            </span>
                            {Object.entries(props.content)[i][0].replace(/Figure [a-zA-Z]+:/, '')}
                        </animated.p>
                    ))}
                </div>
            </div>

            {/* Links Footer */}
            <div className="max-w-4xl mx-auto px-6 w-full py-32 md:py-48">
                <CustomDiv label="External Links" align="left" />
                <ul className="flex flex-col gap-6 mt-12">
                    {Object.entries(props.links).map(([label, url]) => (
                        <li
                            key={label}
                            {...getHoverProps("Go To", props.color)}
                            className="group"
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
                <p className="text-sm tracking-widest text-stone-800 uppercase font-medium">
                    {role}
                </p>
                <p className="text-sm font-mono text-stone-500 tabular-nums">
                    {percent}%
                </p>
            </div>
            <div className="h-[2px] w-full bg-stone-200 relative overflow-hidden">
                <animated.div style={spring} className={`absolute top-0 left-0 h-full ${color}`} />
            </div>
        </div>
    );
}