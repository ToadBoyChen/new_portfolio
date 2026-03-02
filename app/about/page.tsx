"use client";

import Image from "next/image";
import IntroText from "@/components/IntoText";
import { animated, useInView, useTrail } from "@react-spring/web";
import { useMemo } from "react";

const bioParagraphs = [
    "I am a Mathematics student in London whose looking to break into the tech space and become a professional fighter.",
    "I am interested in web and app development, hence I am currently freelancing to build up a reputable portfolio.",
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
        <main className="bg-stone-50 min-h-screen text-stone-900 overflow-hidden block">

            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 pt-32 pb-16">
                <div className="w-full flex text-[10vh] sm:text-[14vh] md:text-[18vh] lg:text-[20vh] font-black leading-none">
                    <IntroText
                        text="About Me"
                        direction="right"
                        spacing={false}
                    />

                </div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-start">

                    <div className="lg:col-span-5 w-full relative aspect-3/4 bg-stone-200 overflow-hidden">
                        <Image
                            src="/me/me.jpg"
                            alt="Portrait"
                            fill
                            priority
                            sizes="(max-width: 824px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div ref={ref} className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10 lg:pt-12">
                        {trail.map((style, i) => (
                            <animated.div key={i} style={style} className="w-full py-2">
                                <p className="text-stone-800 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight font-normal wrap-break-word">
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
                                <span
                                    className="text-2xl font-bold tracking-tight text-stone-900 hover:text-stone-500 transition-colors"
                                >
                                    toby.chen1337@outlook.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}