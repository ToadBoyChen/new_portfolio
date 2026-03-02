"use client";

import Image from "next/image";
import IntroText from "@/components/IntoText";
import { animated, useInView, useTrail } from "@react-spring/web";
import { useMemo } from "react";

const bioParagraphs = [
    "I am a software engineer focused on building robust, scalable, and visually compelling digital experiences. My approach bridges the gap between complex technical requirements and intuitive user design.",
    "With a foundation in modern web technologies, I specialize in creating fluid architectures that prioritize performance without sacrificing aesthetic integrity.",
    "When I'm not writing code, I'm exploring new frameworks, optimizing build pipelines, or dissecting the mechanics of well-designed interactive media."
];

export default function AboutMe() {
    const observerOptions = useMemo(() => ({ rootMargin: "-10% 0px", once: true }), []);
    const [ref, inView] = useInView(observerOptions);
    
    const [trail] = useTrail(bioParagraphs.length, () => ({
        from: { opacity: 0, transform: "translateY(40px)" },
        to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0px)" : "translateY(40px)" },
        config: { mass: 1, tension: 120, friction: 35 },
        delay: 200
    }), [inView]); 

    return (
        // FIX 1: Removed 'flex flex-col items-center' to let the inner max-w containers strictly center themselves
        <main className="bg-stone-50 min-h-screen text-stone-900 selection:bg-stone-900 selection:text-stone-50 overflow-hidden block">
            
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 pt-32 pb-16">
                <div className="py-8 text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter break-words max-w-full">
                    <IntroText
                        text="About Me"
                        direction="left"
                        spacing={false}
                    />
                </div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 pb-32">
                {/* FIX 2: Re-spaced the grid columns so the left and right visually balance out */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-start">
                    
                    <div className="lg:col-span-5 w-full relative aspect-[3/4] bg-stone-200 overflow-hidden">
                        <Image
                            src="/me/me.jpg"
                            alt="Portrait"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover grayscale"
                        />
                    </div>

                    <div ref={ref} className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10 lg:pt-12">
                        {trail.map((style, i) => (
                            <animated.div key={i} style={style} className="w-full py-2">
                                <p className="text-stone-800 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight font-normal break-words">
                                    {bioParagraphs[i]}
                                </p>
                            </animated.div>
                        ))}

                        <div className="pt-16 border-t border-stone-300 mt-8 flex flex-col sm:flex-row gap-16">
                            <div className="flex flex-col gap-4">
                                <span className="text-sm font-mono font-bold tracking-widest text-stone-500 uppercase">
                                    Location
                                </span>
                                <span className="text-2xl font-bold tracking-tight text-stone-900">
                                    London, UK
                                </span>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="text-sm font-mono font-bold tracking-widest text-stone-500 uppercase">
                                    Contact
                                </span>
                                <a 
                                    href="mailto:hello@example.com" 
                                    className="text-2xl font-bold tracking-tight text-stone-900 hover:text-stone-500 transition-colors"
                                >
                                    hello@example.com
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}