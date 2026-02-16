// My components
import Menu from "@/components/Menu";
import IntroText from "@/components/IntoText";

export default function Home() {
    return (
        <main className="flex flex-col relative h-screen w-screen items-center overflow-hidden">
            <div className="absolute top-0">
                <IntroText
                    text="TOBY"
                    direction="right"
                />

            </div>

            <div className="my-auto">
                <Menu />
            </div>

            <div className="absolute bottom-0">
                <IntroText
                    text="CHEN"
                    direction="left"
                />
            </div>
        </main>
    );
}