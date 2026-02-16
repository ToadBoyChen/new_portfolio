"use client"

import { useTransition, animated } from "@react-spring/web";
import { usePathname } from "next/navigation";

export default function TransitionWrapper( { children }: { children: React.ReactNode } ) {
    const pathname = usePathname();

    const transitions = useTransition(children, {
        keys: pathname,
        from: { opacity: 0, y: '50%' },
        enter: { opacity: 1, y: '0%' },
        leave: { opacity: 0, y: '-50%' },
        config: { tension: 200, friction: 20 },
    });

    return (
        <>
            {transitions((style, item) => (
                <animated.div
                    style={style}
                    className="fixed inset-0 w-screen h-screen overflow-hidden z-10"
                >
                    {item}
                </animated.div>
            ))}
        </>
    );
}