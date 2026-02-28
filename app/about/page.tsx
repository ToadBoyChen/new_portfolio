import IntroText from "@/components/IntoText";

export default function AboutMe() {
    return (
        <main className="w-full flex flex-col items-center">
            <div className="py-8 text-8xl md:text-9xl font-black leading-none justify-center tracking-normal sm:tracking-wide md:tracking-widest">
                <IntroText
                    text="About Me"
                    direction="left"
                    spacing={false}
                />
            </div>
            <div>
                
            </div>
        </main>
    );
}