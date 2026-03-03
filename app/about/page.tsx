"use client";

import Image from "next/image";
import IntroText from "@/components/IntoText";
import { animated, useInView, useTrail, useSpring } from "@react-spring/web";
import { useMemo, useEffect, useState } from "react";
import CustomDiv from "@/components/CustomDiv";

const bioParagraphs = [
    "I am a Mathematics student in London who is looking to break into the tech space and become a professional fighter.",
    "I am interested in web and app development, hence I am currently freelancing to build up a reputable portfolio.",
];

const currentGoals = [
    {
        category: "Travel",
        title: "Going to Australia",
        dueDate: "2026-10-30",
        progress: 23,
    },
    {
        category: "Freelance",
        title: "Building up my portfolio",
        dueDate: "2026-06-27",
        progress: 30,
    },
    {
        category: "University",
        title: "Getting a first in Mathematics",
        dueDate: "2026-06-01",
        progress: 67,
    },
    {
        category: "Travel",
        title: "Going to Thailand",
        dueDate: "2027-05-01",
        progress: 5,
    },
    {
        category: "Socials",
        title: "Make a YT video",
        dueDate: "2026-04-15",
        progress: 30,
    }
];

export default function AboutMe() {
    const observerOptions = useMemo(() => ({ rootMargin: "-10% 0px", once: true }), []);
    const [ref, inView] = useInView(observerOptions);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const [trail] = useTrail(bioParagraphs.length, () => ({
        from: { opacity: 0, transform: "translateY(40px)" },
        to: { opacity: inView ? 1 : 0, transform: inView ? "translateY(0px)" : "translateY(40px)" },
        config: { mass: 1, tension: 120, friction: 35 },
        delay: 200
    }), [inView]);

    const marqueeStyles = useSpring({
        from: { transform: "translateX(0%)" },
        to: { transform: "translateX(-50%)" },
        loop: true,
        config: { duration: 20000 },
    });

    const getStatus = (dateString: string) => {
        if (!isMounted) return { text: "Loading...", color: "bg-stone-300", textColor: "text-stone-500" };

        const due = new Date(dateString);
        const now = new Date();
        const diffTime = due.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) {
            return {
                text: `${Math.abs(diffDays)} Days Overdue`,
                color: "bg-rose-500",
                textColor: "text-rose-500"
            };
        } else if (diffDays <= 7) {
            return {
                text: `${diffDays} Days Left!`,
                color: "bg-amber-500",
                textColor: "text-amber-600"
            };
        } else {
            return {
                text: `${diffDays} Days Left`,
                color: "bg-emerald-500",
                textColor: "text-emerald-600"
            };
        }
    };

    return (
        <main className="bg-stone-50 min-h-screen text-stone-900">
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 pt-32 pb-16 flex flex-col items-center">
                <div className="text-[10vh] sm:text-[14vh] md:text-[18vh] lg:text-[20vh] font-black leading-none">
                    <IntroText text="About Me" spacing={false} />
                </div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-start">

                    <div className="lg:col-span-5 relative aspect-square overflow-hidden w-full max-w-xl mx-auto bg-stone-200">
                        <Image src="/me/me.jpg" alt="Portrait" fill priority className="object-cover" />
                        <div className="absolute bottom-0 left-0 w-full bg-stone-900/80 backdrop-blur-sm text-stone-50 py-3 overflow-hidden flex">
                            <animated.div style={marqueeStyles} className="flex whitespace-nowrap w-max">
                                <span className="font-mono text-sm tracking-widest uppercase px-4">
                                    Next.js • React • Freelance • Mathematics • Muay Thai • Jiu Jitsu •
                                </span>
                                <span className="font-mono text-sm tracking-widest uppercase px-4">
                                    Next.js • React • Freelance • Mathematics • Muay Thai • Jiu Jitsu •
                                </span>
                            </animated.div>
                        </div>
                    </div>

                    <div ref={ref} className="lg:col-span-6 lg:col-start-7 flex flex-col">
                        <div>
                            {trail.map((style, i) => (
                                <animated.div key={i} style={style} className="w-full py-2">
                                    <p className="text-stone-800 text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight font-normal wrap-break-word">
                                        {bioParagraphs[i]}
                                    </p>
                                </animated.div>
                            ))}
                        </div>
                        <div className="mt-8" />
                        <CustomDiv label={"Little Details"} align="right" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 w-full">

                            <div className="flex flex-col gap-2 min-w-0">
                                <span className="text-sm font-mono tracking-widest text-stone-500">
                                    Location
                                </span>
                                <span className="text-xl lg:text-2xl font-bold tracking-wide text-stone-900">
                                    <IntroText text={"London, UK"} spacing={false} />
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 min-w-0">
                                <span className="text-sm font-mono tracking-widest text-stone-500 ">
                                    Degree
                                </span>
                                <span className="text-xl lg:text-2xl font-bold tracking-wide text-stone-900 hover:text-stone-500 transition-colors truncate">
                                    <IntroText text={"Pure Mathematics"} spacing={false} />
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 min-w-0">
                                <span className="text-sm font-mono tracking-widest text-stone-500 ">
                                    Zodiac Animal
                                </span>
                                <span className="text-xl lg:text-2xl font-bold tracking-wide text-stone-900 hover:text-stone-500 transition-colors truncate">
                                    <IntroText text={"Wood Monkey"} spacing={false} />
                                </span>
                            </div>

                            <div className="flex flex-col gap-2 min-w-0">
                                <span className="text-sm font-mono tracking-widest text-stone-500 ">
                                    Favourite Band
                                </span>
                                <span className="text-xl lg:text-2xl font-bold tracking-wide text-stone-900 hover:text-stone-500 transition-colors truncate">
                                    <IntroText text={"Loathe"} spacing={false} />
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-32 flex flex-col gap-8">
                    <CustomDiv label={"Active Goals"} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentGoals.map((goal, idx) => {
                            const status = getStatus(goal.dueDate);
                            return (
                                <div key={idx} className="flex flex-col gap-3 group">
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${status.color}`}></span>
                                                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${status.color}`}></span>
                                            </span>
                                            <span className="text-xs tracking-widest text-stone-600">
                                                {goal.category}
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold tracking-tight shrink-0">
                                            <IntroText text={status.text} spacing={false} color={status.textColor} />
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <span className="text-xl font-medium text-stone-800 leading-none">
                                        {goal.title}
                                    </span>

                                    {/* Progress Bar */}
                                    <div className="mt-auto pt-2 flex items-center gap-3">
                                        <div className="h-1 w-full bg-stone-200 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${status.color} transition-all duration-1000 ease-out`}
                                                style={{ width: inView ? `${goal.progress}%` : '0%' }}
                                            />
                                        </div>
                                        <span className="text-xs font-mono text-stone-400 font-medium w-8 text-right">
                                            {goal.progress}%
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}