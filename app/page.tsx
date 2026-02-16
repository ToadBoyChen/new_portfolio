import Menu from "@/components/Menu";
import IntroText from "@/components/IntoText";

export default function Home() {
    return (
        <main className="flex flex-col relative h-screen w-screen items-center overflow-hidden">
            <div className="absolute top-0 text-[15vh] md:text-[20vh] font-black leading-none text-stone-200 tracking-widest md:tracking-[5vw] lg:tracking-[10vw] justify-center">
                <IntroText
                    text="TOBY"
                    direction="right"
                />

            </div>

            <div className="my-auto">
                <Menu />
            </div>

            <div className="absolute bottom-0 text-[15vh] md:text-[20vh] font-black leading-none text-stone-200 tracking-widest md:tracking-[5vw] lg:tracking-[10vw] justify-center">
                <IntroText
                    text="CHEN"
                    direction="left"
                />
            </div>
        </main>
    );
}