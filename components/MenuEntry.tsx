"use client";

import Link from "next/link";
import { useSpring, animated } from "@react-spring/web";

interface MenuEntryProps {
    text: string;
    link: string;
}

export default function MenuEntry(props: MenuEntryProps) {
    const [springs, api] = useSpring(() => ({
        x: 0,
        config: { tension: 300, friction: 20 },
    }))

    const menuEntry_enter = () => {
        api.start({ x: 20 });
    };

    const menuEntry_leave = () => {
        api.start({ x: 0 });
    };

    return (
        <div
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[150px] border-b-2 font-black tracking-wide"
        >
            <animated.div
                onMouseEnter={menuEntry_enter}
                onMouseLeave={menuEntry_leave}
                style={springs}>
                <Link
                    href={props.link}
                >
                    {props.text}
                </Link>
            </animated.div>
        </div>
    );
}