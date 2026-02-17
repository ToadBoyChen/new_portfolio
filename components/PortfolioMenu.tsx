import PortfolioEntry from "./PortfolioEntry";


export default function PortfolioMenu() {
    return (
        <div className="min-w-sm sm:min-w-md md:min-w-xl lg:min-w-3xl h-[60vh] flex flex-col justify-center">
            <p className="text-sm border-b tracking-widest mb-8 text-center">
                {"Apps"}
            </p>
            <ul className="flex flex-col gap-8">
                <li>
                    <PortfolioEntry
                        text="CapyCalm"
                        image="capy"
                        colour="hover:bg-red-500"
                        link="/thing-one"
                    />
                </li>
            </ul>
            <p className="text-sm border-b tracking-widest mt-32 mb-8 text-center">
                {"Websites"}
            </p>
            <ul>
                <li>
                    <PortfolioEntry
                        text="Inventory Game"
                        image="capy"
                        colour="hover:bg-green-500"
                        link="/thing-one"
                    />
                </li>
            </ul>
            <p className="text-sm border-b tracking-widest mt-32 mb-8 text-center">
                {"Old Portfolios"}
            </p>
            <ul>
                <li>
                    <PortfolioEntry
                        text="Portfolio V3"
                        image="capy"
                        colour="hover:bg-blue-500"
                        link="/thing-one"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V2"
                        image="capy"
                        colour="hover:bg-purple-500"
                        link="/thing-one"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V1"
                        image="capy"
                        colour="hover:bg-yellow-500"
                        link="/thing-one"
                    />
                </li>
            </ul>
        </div>
    );
}