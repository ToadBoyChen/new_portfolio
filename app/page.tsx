
// My components
import Menu from "@/components/Menu";
import IntroText from "@/components/IntoText";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center overflow-hidden">
            <IntroText
                text="TOBY"
                direction="right"
            />

            <Menu />

            <IntroText
                text="CHEN"
                direction="left"
            />
        </main>
    );
}
