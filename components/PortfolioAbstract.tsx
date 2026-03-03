"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo } from "react";
import { animated, useInView, useSpring, useTrail } from "@react-spring/web";
import { useCursor } from "@/context/CursorContext";
import PortfolioAbstractEntry from "./PortfolioAbstractEntry";
import CustomDiv from "./CustomDiv";
import IntroText from "./IntoText";

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
    const { getHoverProps } = useCursor();

    const contentEntries = useMemo(() => Object.entries(props.content), [props.content]);
    const rolesEntries = useMemo(() => Object.entries(props.roles), [props.roles]);
    const linksEntries = useMemo(() => Object.entries(props.links), [props.links]);

    const headerSpring = useSpring({
        from: { opacity: 0, transform: "translateY(40px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { mass: 1.2, tension: 90, friction: 35 },
        delay: 150
    });

    const [descRef, descInView] = useInView({ rootMargin: "-10% 0px", once: true });
    const descTrail = useTrail(props.description.length, {
        from: { transform: "translateY(110%)" },
        to: { transform: descInView ? "translateY(0%)" : "translateY(110%)" },
        config: { mass: 1, tension: 120, friction: 35, clamp: true },
    });

    return (
        <section className="bg-stone-100 w-full flex flex-col items-center">
            <div className="relative h-[80vh] min-h-150 w-full border-b border-stone-300 overflow-hidden flex items-end bg-stone-900">
                <div className="absolute inset-0 z-0">
                    {props.bannerImage.endsWith('.mp4') || props.bannerImage.endsWith('.webm') ? (
                        <video
                            src={props.bannerImage}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover object-top opacity-60"
                        />
                    ) : (
                        <Image
                            src={props.bannerImage}
                            alt={`${props.name} banner`}
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-top opacity-60"
                        />
                    )}
                </div>

                <div className="relative z-20 w-full max-w-screen-2xl mx-auto px-6 md:px-12 pb-12 md:pb-16 pointer-events-none">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-white/20 pb-8">
                        <div className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-wide">
                            <IntroText text={props.name} spacing={false} color="text-white" />
                        </div>
                        <div className="flex flex-col gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/60 w-full md:w-auto md:min-w-62.5">
                            <div className="flex justify-between items-center text-white font-semibold text-right">
                                {props.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 py-24 lg:py-40">
                    <div className="lg:col-span-5 flex flex-col gap-24">
                        <div>
                            <CustomDiv label="Roles" align="left" />
                            <ul className="flex flex-col gap-8 mt-10">
                                {rolesEntries.map(([role, percent]) => (
                                    <div key={role} className="w-full pb-1">
                                        <RoleBar role={role} percent={percent} color={props.color} />
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <CustomDiv label="Technical Stack" align="left" />
                            <ul className="flex flex-col gap-0 mt-8 border-t border-stone-200">
                                {props.stack.map((tech, i) => (
                                    <div key={i} className="w-full">
                                        <TechStackItem tech={tech} index={i} />
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Re-aligned to col-start-7 for balance */}
                    <div className="lg:col-span-6 lg:col-start-7">
                        <CustomDiv label="Abstract" align="left" />
                        <div ref={descRef} className="mt-12 space-y-8">
                            {descTrail.map((style, i) => (
                                <div key={i} className="overflow-hidden w-full pb-1">
                                    <animated.p style={style} className="text-stone-700 text-2xl md:text-3xl leading-snug tracking-tight font-semibold wrap-break-word">
                                        {props.description[i]}
                                    </animated.p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Documentation - Already max-w-screen-2xl mx-auto */}
            <div className="w-full relative flex flex-col items-center py-24 md:py-40 bg-white border-y border-stone-200">
                <div className="max-w-screen-2xl w-full px-6 md:px-12 mb-24 md:mb-32">
                    <CustomDiv label="Visual Documentation" align="center" />
                </div>

                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
                    <div className="flex flex-col gap-y-32 md:gap-y-48 w-full">
                        {contentEntries.map(([caption, url], i) => (
                            <AnimatedFigure
                                key={i}
                                index={i}
                                url={url}
                                caption={caption}
                                name={props.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48">
                <CustomDiv label="External Links" align="left" />
                <ul className="flex flex-col gap-6 mt-12">
                    {linksEntries.map(([label, url]) => (
                        <li
                            key={label}
                            {...getHoverProps("Go To", props.color)}
                            className="group cursor-none"
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

const TechStackItem = React.memo(({ tech, index }: { tech: string, index: number }) => {
    return (
        <li className="flex items-center justify-between py-4 border-b border-stone-200 group">
            <span className="text-xs text-stone-500 pointer-events-none">
                {(index + 1).toString()}
            </span>
            <span className="tracking-wider text-lg md:text-xl font-medium transition-transform group-hover:-translate-x-2 pointer-events-none">
                <IntroText text={tech} spacing={false} />
            </span>
        </li>
    );
});
TechStackItem.displayName = "TechStackItem";

const AnimatedFigure = React.memo(({ index, url, caption, name }: { index: number, url: string, caption: string, name: string }) => {
    const [ref, inView] = useInView({ rootMargin: "-15% 0px", once: true });

    const containerSpring = useSpring({
        from: { clipPath: "inset(0 0 100% 0)" },
        to: { clipPath: inView ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" },
        config: { mass: 1.2, tension: 90, friction: 40, clamp: true },
    });

    const imageSpring = useSpring({
        from: { transform: "scale(1.08) translateY(5%)" },
        to: { transform: inView ? "scale(1) translateY(0%)" : "scale(1.08) translateY(5%)" },
        config: { mass: 1, tension: 70, friction: 50, clamp: true },
        delay: 50,
    });

    const cleanCaption = caption.replace(/Figure [a-zA-Z]+:/i, '').trim();
    const figNumber = (index + 1).toString().padStart(2, '0');
    const layoutPhase = index % 3;

    const containerClasses = "overflow-hidden bg-stone-100 ring-1 ring-stone-200/60 shadow-sm relative";

    return (
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 w-full items-center">

            {layoutPhase === 0 && (
                <>
                    <animated.div
                        style={containerSpring}
                        className={`md:col-span-12 ${containerClasses}`}
                    >
                        <animated.div style={imageSpring} className="relative w-full h-auto">
                            <Image
                                src={url}
                                alt={`${name} Fig ${figNumber}`}
                                width={1600}
                                height={900}
                                sizes="(max-width: 768px) 100vw, 90vw"
                                className="w-full h-auto max-h-[85vh] object-cover object-top"
                            />
                        </animated.div>
                    </animated.div>
                    <div className="md:col-span-8 md:col-start-3 md:text-center mt-2">
                        <FigureCaption figNumber={figNumber} text={cleanCaption} align="center" inView={inView} />
                    </div>
                </>
            )}

            {layoutPhase === 1 && (
                <>
                    <animated.div
                        style={containerSpring}
                        className={`md:col-span-7 ${containerClasses}`}
                    >
                        <animated.div style={imageSpring} className="relative w-full h-auto">
                            <Image
                                src={url}
                                alt={`${name} Fig ${figNumber}`}
                                width={1200}
                                height={800}
                                sizes="(max-width: 768px) 100vw, 60vw"
                                className="w-full h-auto object-cover object-top"
                            />
                        </animated.div>
                    </animated.div>
                    <div className="md:col-span-4 md:col-start-9">
                        <FigureCaption figNumber={figNumber} text={cleanCaption} align="left" inView={inView} />
                    </div>
                </>
            )}

            {layoutPhase === 2 && (
                <>
                    <div className="md:col-span-4 md:col-start-1 order-2 md:order-1">
                        <FigureCaption figNumber={figNumber} text={cleanCaption} align="left" inView={inView} />
                    </div>
                    <animated.div
                        style={containerSpring}
                        className={`md:col-span-7 md:col-start-6 order-1 md:order-2 ${containerClasses}`}
                    >
                        <animated.div style={imageSpring} className="relative w-full h-auto">
                            <Image
                                src={url}
                                alt={`${name} Fig ${figNumber}`}
                                width={1200}
                                height={800}
                                sizes="(max-width: 768px) 100vw, 60vw"
                                className="w-full h-auto object-cover object-top"
                            />
                        </animated.div>
                    </animated.div>
                </>
            )}

        </div>
    );
});
AnimatedFigure.displayName = "AnimatedFigure";

const FigureCaption = React.memo(({ figNumber, text, align, inView }: { figNumber: string, text: string, align: 'left' | 'center', inView: boolean }) => {
    const lineSpring = useSpring({
        from: { width: "0%" },
        to: { width: inView ? "100%" : "0%" },
        delay: 300,
        config: { mass: 1, tension: 120, friction: 35, clamp: true },
    });

    const textSpring = useSpring({
        from: { opacity: 0, transform: "translateY(10px)" },
        to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0px)" : "translateY(10px)" },
        delay: 450,
        config: { mass: 1, tension: 140, friction: 35, clamp: true },
    });

    return (
        <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
            <div className={`relative inline-block ${align === 'center' ? 'w-16' : 'w-full max-w-16'}`}>
                <h2 className="text-xs md:text-sm pb-2 block text-left text-nowrap font-medium">
                    Figure: <span className="text-xl text-stone-500">{figNumber}</span>
                </h2>
                <animated.div
                    style={lineSpring}
                    className={`absolute bottom-0 h-px bg-stone-400 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'}`}
                />
            </div>
            <animated.p style={textSpring} className="text-stone-800 text-xl">
                {text}
            </animated.p>
        </div>
    );
});
FigureCaption.displayName = "FigureCaption";

const RoleBar = React.memo(({ role, percent, color }: { role: string; percent: number; color: string }) => {
    const [ref, inView] = useInView({ once: true, rootMargin: "-10% 0px" });
    const spring = useSpring({
        width: inView ? `${percent}%` : "0%",
        config: { mass: 1, tension: 120, friction: 40, clamp: true }
    });

    return (
        <div ref={ref} className="w-full">
            <div className="flex justify-between items-end mb-2">
                <p className="text-sm tracking-widest font-medium">
                    {role}
                </p>
                <p className="text-md text-stone-600 tabular-nums">
                    {percent} <span className="text-xs text-stone-400"> % </span>
                </p>
            </div>
            <div className="h-1 w-full bg-stone-300 relative overflow-hidden">
                <animated.div style={spring} className={`absolute top-0 left-0 h-full ${color}`} />
            </div>
        </div>
    );
});
RoleBar.displayName = "RoleBar";