import PortfolioEntry from "./PortfolioEntry";


export default function PortfolioMenu() {
    return (
        <div className="min-w-sm sm:min-w-md md:min-w-xl lg:min-w-3xl h-[60vh] flex flex-col justify-center">
            <p className="text-sm border-b tracking-widest mb-8 text-center">
                {"Begin Contents"}
            </p>
            <ul className="flex flex-col gap-8">
                <li>
                    <PortfolioEntry
                        text="CapyCalm"
                        image="capy"
                        link="/thing-one"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Inventory Game"
                        image="capy"
                        link="/thing-one"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V1"
                        image="capy"
                        link="/thing-one"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V2"
                        image="capy"
                        link="/thing-one"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio V3"
                        image="capy"
                        link="/thing-one"
                    />
                </li>
            </ul>
            <p className="text-sm tracking-widest text-center">
                {"End Contents"}
            </p>
        </div>
    );
}