import Menu from "@/components/Menu";
import IntroText from "@/components/IntoText";

export default function Home() {

    return (
        <main 
            className="flex flex-col relative h-screen w-screen items-center overflow-x-hidden">
            <div className="w-full flex text-[15vh] md:text-[20vh] font-black leading-none text-stone-200">
                <IntroText
                    text="TOBY"
                    direction="right"
                    spacing={true}
                />

            </div>

            <div className="my-auto">
                <Menu />
            </div>

            <div className="w-full mb-32 sm:mb-16 text-[15vh] md:text-[20vh] font-black leading-none text-stone-200">
                <IntroText
                    text="CHEN"
                    direction="left"
                    spacing={true}
                />
            </div>
        </main>
    );
}