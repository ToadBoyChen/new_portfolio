import PortfolioEntry from "./PortfolioEntry";


export default function PortfolioMenu() {
    return (
        <div className="min-w-sm sm:min-w-md md:min-w-xl lg:min-w-3xl h-[60vh] flex flex-col justify-center">
            <p className="text-sm border-b-2 font-semibold tracking-widest text-center">
                {"Apps"}
            </p>
            <ul className="flex flex-col gap-8">
                <li>
                    <PortfolioEntry
                        text="CapyCalm"
                        image="capy"
                        colour="oklch(63.7% 0.237 25.331)"
                        link="/portfolio/capycalm"
                    />
                </li>
            </ul>
            {/* <p className="text-sm border-b-2 font-semibold tracking-widest text-center mt-32">
                {"Websites"}
            </p>
            <ul>
                <li>
                    <PortfolioEntry
                        text="Inventory Game"
                        image="capy"
                        colour="oklch(70.5% 0.213 47.604)"
                        link="/portfolio/inventory-game"
                    />
                </li>
            </ul> */}
            <p className="text-sm border-b-2 font-semibold tracking-widest text-center mt-32">
                {"Old Portfolios"}
            </p>
            <ul>
                <li>
                    <PortfolioEntry
                        text="Current Portfolio"
                        image="capy"
                        colour="oklch(76.9% 0.188 70.08)"
                        link="/portfolio/portfolio-4"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V3"
                        image="capy"
                        colour="oklch(76.9% 0.188 70.08)"
                        link="/portfolio/portfolio-3"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V2"
                        image="capy"
                        colour="oklch(79.5% 0.184 86.047)"
                        link="/portfolio/portfolio-2"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V1"
                        image="capy"
                        colour="oklch(76.8% 0.233 130.85)"
                        link="/portfolio/portfolio-1"
                    />
                </li>
            </ul>
        </div>
    );
}