import PortfolioEntry from "./PortfolioEntry";


export default function PortfolioMenu() {
    return (
        <div className="w-sm sm:w-md md:w-xl lg:w-3xl flex flex-col justify-center">
            <p className="text-sm border-b tracking-widest text-center">
                {"Apps"}
            </p>
            <ul className="flex flex-col gap-8">
                <li>
                    <PortfolioEntry
                        text="CapyCalm"
                        image="capy"
                        colour="bg-indigo-400"
                        link="/portfolio/capycalm"
                    />
                </li>
            </ul>
            <p className="text-sm border-b tracking-widest text-center mt-32">
                {"Websites"}
            </p>
            <ul>
                <li>
                    <PortfolioEntry
                        text="Inventory Game"
                        image="capy"
                        colour="bg-violet-400"
                        link="/portfolio/inventory-game"
                    />
                </li>
            </ul>
            <p className="text-sm border-b tracking-widest text-center mt-32">
                {"Old Portfolios"}
            </p>
            <ul>
                <li>
                    <PortfolioEntry
                        text="Portfolio V4"
                        image="capy"
                        colour="bg-purple-400"
                        link="/portfolio/portfolio-4"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V3"
                        image="capy"
                        colour="bg-fuchsia-400"
                        link="/portfolio/portfolio-3"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V2"
                        image="capy"
                        colour="bg-pink-400"
                        link="/portfolio/portfolio-2"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V1"
                        image="capy"
                        colour="bg-rose-400"
                        link="/portfolio/portfolio-1"
                    />
                </li>
            </ul>
        </div>
    );
}