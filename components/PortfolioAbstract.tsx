"use client";

import Link from "next/link";
import IntroText from "./IntoText";
import { animated, useInView, useSpring } from "@react-spring/web";
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
    const { getHoverProps } = useCursor();
    const contentEntries = Object.entries(props.content);

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
                                    <TechStackItem key={i} tech={tech} index={i} />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="lg:col-span-7 lg:col-start-6">
                        <CustomDiv label="Abstract" align="left" />
                        <div className="mt-12 space-y-8">
                            {props.description.map((para, i) => (
                                <MaskReveal key={i} delay={i * 150}>
                                    <p className="text-stone-600 text-2xl md:text-3xl leading-snug tracking-tight text-justify font-light">
                                        {para}
                                    </p>
                                </MaskReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Rigid Grid Gallery Section */}
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

// --- Sub-components ---

// 1. Text Mask Reveal (Slides up from invisible clipping box)
function MaskReveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    const [ref, inView] = useInView({ rootMargin: "-10% 0px", once: true });
    const spring = useSpring({
        from: { transform: "translateY(110%)" },
        to: { transform: inView ? "translateY(0%)" : "translateY(110%)" },
        delay,
        config: { mass: 1, tension: 120, friction: 35, clamp: true },
    });

    return (
        <div ref={ref} className="overflow-hidden w-full pb-1">
            <animated.div style={spring}>
                {children}
            </animated.div>
        </div>
    );
}

// 2. Sequential Tech Stack List Items
function TechStackItem({ tech, index }: { tech: string, index: number }) {
    const [ref, inView] = useInView({ rootMargin: "-5% 0px", once: true });
    const spring = useSpring({
        from: { opacity: 0, transform: "translateX(-20px)" },
        to: { opacity: inView ? 1 : 0, transform: inView ? "translateX(0px)" : "translateX(-20px)" },
        delay: index * 100, // Cascading stagger
        config: { mass: 1, tension: 140, friction: 35, clamp: true },
    });

    return (
        <animated.li 
            ref={ref} 
            style={spring} 
            className="flex items-center justify-between py-4 border-b border-stone-200 group"
        >
            <span className="text-xs text-stone-400 font-mono tracking-widest">
                {(index + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-stone-800 tracking-tight text-lg md:text-xl font-medium transition-transform group-hover:-translate-x-2">
                {tech}
            </span>
        </animated.li>
    );
}

// 3. Technical Image Reveal (Clip Path + Parallax)
function AnimatedFigure({ index, url, caption, name }: { index: number, url: string, caption: string, name: string }) {
    const [ref, inView] = useInView({ rootMargin: "-15% 0px", once: true });
    
    // The "Shutter" effect: Mask reveals image from top to bottom
    const containerSpring = useSpring({
        from: { clipPath: "inset(0 0 100% 0)" },
        to: { clipPath: inView ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" },
        config: { mass: 1.2, tension: 90, friction: 40, clamp: true },
    });

    // Inner Parallax: Image scales down and pushes up slightly against the unrolling mask
    const imageSpring = useSpring({
        from: { transform: "scale(1.08) translateY(5%)" },
        to: { transform: inView ? "scale(1) translateY(0%)" : "scale(1.08) translateY(5%)" },
        config: { mass: 1, tension: 70, friction: 50, clamp: true },
        delay: 50, 
    });

    const cleanCaption = caption.replace(/Figure [a-zA-Z]+:/i, '').trim();
    const figNumber = (index + 1).toString().padStart(2, '0');
    const layoutPhase = index % 3;

    return (
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 w-full items-center">
            
            {layoutPhase === 0 && (
                <>
                    <animated.div style={containerSpring} className="md:col-span-12 overflow-hidden bg-stone-100 ring-1 ring-stone-200/60 shadow-sm relative">
                        <animated.img
                            style={imageSpring}
                            src={url}
                            alt={`${name} Fig ${figNumber}`}
                            className="w-full h-auto max-h-[85vh] object-cover object-top"
                        />
                    </animated.div>
                    <div className="md:col-span-8 md:col-start-3 md:text-center mt-2">
                        <FigureCaption figNumber={figNumber} text={cleanCaption} align="center" inView={inView} />
                    </div>
                </>
            )}

            {layoutPhase === 1 && (
                <>
                    <animated.div style={containerSpring} className="md:col-span-7 overflow-hidden bg-stone-100 ring-1 ring-stone-200/60 shadow-sm relative">
                        <animated.img
                            style={imageSpring}
                            src={url}
                            alt={`${name} Fig ${figNumber}`}
                            className="w-full h-auto object-cover object-top"
                        />
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
                    <animated.div style={containerSpring} className="md:col-span-7 md:col-start-6 overflow-hidden bg-stone-100 ring-1 ring-stone-200/60 shadow-sm relative order-1 md:order-2">
                        <animated.img
                            style={imageSpring}
                            src={url}
                            alt={`${name} Fig ${figNumber}`}
                            className="w-full h-auto object-cover object-top"
                        />
                    </animated.div>
                </>
            )}
            
        </div>
    );
}

// 4. Plotter Line Caption
function FigureCaption({ figNumber, text, align, inView }: { figNumber: string, text: string, align: 'left' | 'center', inView: boolean }) {
    // Draws the horizontal rule above the caption
    const lineSpring = useSpring({
        from: { width: "0%" },
        to: { width: inView ? "100%" : "0%" },
        delay: 300,
        config: { mass: 1, tension: 120, friction: 35, clamp: true },
    });

    // Snaps text into place
    const textSpring = useSpring({
        from: { opacity: 0, transform: "translateY(10px)" },
        to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0px)" : "translateY(10px)" },
        delay: 450,
        config: { mass: 1, tension: 140, friction: 35, clamp: true },
    });

    return (
        <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
            <div className={`relative inline-block ${align === 'center' ? 'w-16' : 'w-full max-w-[4rem]'}`}>
                <span className="text-[10px] text-stone-400 font-mono uppercase tracking-[0.2em] pb-2 block text-left">
                    Fig. {figNumber}
                </span>
                <animated.div 
                    style={lineSpring} 
                    className={`absolute bottom-0 h-[1px] bg-stone-300 ${align === 'center' ? 'left-1/2 -translate-x-1/2' : 'left-0'}`} 
                />
            </div>
            <animated.p style={textSpring} className="text-stone-600 md:text-xl font-light leading-relaxed tracking-tight">
                {text}
            </animated.p>
        </div>
    );
}

// 5. Hardened Role Bar Easing
function RoleBar({ role, percent, color }: { role: string; percent: number; color: string }) {
    const [ref, inView] = useInView({ once: true, rootMargin: "-10% 0px" });
    const spring = useSpring({
        width: inView ? `${percent}%` : "0%",
        config: { mass: 1, tension: 120, friction: 40, clamp: true } // Removed bounce, plotter-like stop
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