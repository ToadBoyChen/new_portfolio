import type { Metadata } from "next";
import { IBM_Plex_Sans } from 'next/font/google';
import TransitionWrapper from "@/components/TransitionWrapper";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import { CursorProvider } from "@/context/CursorContext";

const montserrat = IBM_Plex_Sans({
    subsets: ['latin'],
    variable: '--font-IBM_Plex_Sans',
    weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
    title: "Toby Chen",
    description: "Toby Chen's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} antialiased  selection:bg-stone-900 selection:text-stone-50 mx-8`}
            >
                <CursorProvider>
                    <CustomCursor />
                    <TransitionWrapper>
                        {children}
                    </TransitionWrapper>
                </CursorProvider>
            </body>
        </html>
    );
}
