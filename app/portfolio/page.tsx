import IntroText from "@/components/IntoText";
import PortfolioMenu from "@/components/PortfolioMenu";

export default function Portfolio() {
    return (
        <main className="w-full h-full flex flex-col items-center">
            <div className="py-8 absolute top-0 text-8xl md:text-9xl font-black leading-none justify-center tracking-normal sm:tracking-wide md:tracking-widest">
                <IntroText
                    text="Portfolio"
                    direction="right"
                    spacing={false}
                />
            </div>
            <div className="my-auto">
                <PortfolioMenu />
            </div>
        </main>
    );
}