import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TransitionWrapper from "@/components/TransitionWrapper";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import { CursorProvider } from "@/context/CursorContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
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
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
