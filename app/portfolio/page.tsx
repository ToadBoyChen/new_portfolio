import IntroText from "@/components/IntoText";
import PortfolioMenu from "@/components/PortfolioMenu";

export default function Portfolio() {
    return (
        <main className="w-full flex flex-col items-center">
            <div className="py-8 text-8xl md:text-9xl font-black leading-none justify-center tracking-normal sm:tracking-wide md:tracking-widest">
                <IntroText
                    text="Portfolio"
                    spacing={false}
                />
            </div>
            <div className="mt-48 mb-72">
                <PortfolioMenu />
            </div>
        </main>
    );
}