"use client";

import Link from "next/link";
import IntoText from "./IntoText";

interface MenuEntryProps {
    text: string;
    link: string;
}

export default function MenuEntry(props: MenuEntryProps) {


    return (
        <div className="text-right">
            <Link
                href={props.link}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wide"
                target="_blank"
            >
                <IntoText text={props.text} spacing={false}/>
            </Link>
            <div className="border-b -translate-y-2" />
        </div>
    );
}