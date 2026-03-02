"use client";

import React, { useMemo, useState } from "react";
import { animated, useInView, useSpring, useTrail } from "@react-spring/web";
import CustomDiv from "@/components/CustomDiv";
// Import your server action here (adjust the path if you put it somewhere else)
import { sendEmail } from "@/app/actions/sendEmail"; 

const contactLinks = [
    { label: "Email", value: "toby.chen1337@outlook.com", href: "mailto:toby.chen1337@outlook.com" },
    { label: "LinkedIn", value: "linkedin.com/in/toby-chen", href: "https://www.linkedin.com/in/toby-chen-167519298/" },
    { label: "GitHub", value: "github.com/ToadBoyChen", href: "https://github.com/ToadBoyChen" },
    { label: "Curriculum Vitae", value: "Download PDF", href: "/resume.pdf", download: true }
];

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false); // New state to track success

    const headerSpring = useSpring({
        from: { opacity: 0, transform: "translateY(40px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
        config: { mass: 1.2, tension: 90, friction: 35 },
        delay: 150
    });

    const observerOptions = useMemo(() => ({ rootMargin: "-10% 0px", once: true }), []);
    const [infoRef, infoInView] = useInView(observerOptions);
    const [infoTrail] = useTrail(contactLinks.length, () => ({
        from: { opacity: 0, transform: "translateX(-20px)" },
        to: { opacity: infoInView ? 1 : 0, transform: infoInView ? "translateX(0px)" : "translateX(-20px)" },
        config: { mass: 1, tension: 120, friction: 35 },
        delay: 200
    }), [infoInView]);

    const [formRef, formInView] = useInView(observerOptions);
    const formSpring = useSpring({
        from: { opacity: 0, transform: "translateY(40px)" },
        to: { opacity: formInView ? 1 : 0, transform: formInView ? "translateY(0px)" : "translateY(40px)" },
        config: { mass: 1, tension: 100, friction: 40 },
        delay: 300
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        if (result.success) {
            setIsSent(true);
        } else {
            alert("Something went wrong. Please try emailing me directly.");
        }

        setIsSubmitting(false);
    };

    return (
        <main className="bg-stone-50 min-h-screen text-stone-900 overflow-x-hidden w-full block">
            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-32 pb-16 md:pb-32 border-b border-stone-300">
                <animated.h1 style={headerSpring} className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter wrap-break-word max-w-full uppercase">
                    Get In <br className="hidden md:block" /> Touch
                </animated.h1>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24 lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-0 items-start">
                    
                    {/* Left Column: Directory */}
                    <div className="lg:col-span-5 flex flex-col gap-16">
                        <CustomDiv label="Directory" align="left" />
                        
                        <ul ref={infoRef} className="flex flex-col gap-0 border-t border-stone-200">
                            {infoTrail.map((style, i) => {
                                const link = contactLinks[i];
                                return (
                                    <animated.li key={link.label} style={style} className="flex flex-col py-8 border-b border-stone-200 group">
                                        <span className="text-xs sm:text-sm text-stone-500 font-mono font-bold tracking-widest uppercase mb-2">
                                            {link.label}
                                        </span>
                                        <a 
                                            href={link.href}
                                            download={link.download}
                                            target={link.href.startsWith('http') ? "_blank" : "_self"}
                                            rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
                                            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 hover:text-stone-500 transition-colors wrap-break-word"
                                        >
                                            {link.value}
                                        </a>
                                    </animated.li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Right Column: Contact Form or Success Message */}
                    <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-16 lg:pt-0">
                        <CustomDiv label="Direct Message" align="left" />
                        
                        <animated.div ref={formRef} style={formSpring}>
                            {isSent ? (
                                // SUCCESS STATE UI
                                <div className="flex flex-col gap-6 w-full py-12 border-t border-stone-200">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900">
                                        Message Received.
                                    </h3>
                                    <p className="text-xl md:text-2xl text-stone-600 font-medium leading-relaxed">
                                        Thanks for reaching out. I'll get back to you as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                // FORM UI
                                <form onSubmit={handleSubmit} className="flex flex-col gap-12 w-full">
                                    <div className="flex flex-col gap-2 group">
                                        <label htmlFor="name" className="text-xs sm:text-sm text-stone-500 font-mono font-bold tracking-widest uppercase">Name</label>
                                        <input type="text" id="name" name="name" required className="w-full bg-transparent border-b-2 border-stone-300 py-4 text-xl md:text-3xl font-medium focus:outline-none focus:border-stone-900 transition-colors rounded-none" />
                                    </div>

                                    <div className="flex flex-col gap-2 group">
                                        <label htmlFor="email" className="text-xs sm:text-sm text-stone-500 font-mono font-bold tracking-widest uppercase">Email</label>
                                        <input type="email" id="email" name="email" required className="w-full bg-transparent border-b-2 border-stone-300 py-4 text-xl md:text-3xl font-medium focus:outline-none focus:border-stone-900 transition-colors rounded-none" />
                                    </div>

                                    <div className="flex flex-col gap-2 group">
                                        <label htmlFor="message" className="text-xs sm:text-sm text-stone-500 font-mono font-bold tracking-widest uppercase">Message</label>
                                        <textarea id="message" name="message" rows={4} required className="w-full bg-transparent border-b-2 border-stone-300 py-4 text-xl md:text-3xl font-medium focus:outline-none focus:border-stone-900 transition-colors resize-none rounded-none" />
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="mt-8 self-start px-12 py-6 bg-stone-900 text-stone-50 font-mono font-bold tracking-widest uppercase text-sm md:text-base hover:bg-stone-700 active:scale-95 transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </animated.div>
                    </div>

                </div>
            </div>
        </main>
    );
}