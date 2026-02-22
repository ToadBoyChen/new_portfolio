"use client";

import Link from "next/link";

interface MenuEntryProps {
    text: string;
    link: string;
}

export default function MenuEntry(props: MenuEntryProps) {


    return (
        <div className="text-right">
            <Link
                href={props.link}
                className="text-3xl font-black tracking-wide"
                target="_blank"
            >
                {props.text}
            </Link>
            <div className="border-b -translate-y-2" />
        </div>
    );
}