import CustomDiv from "./CustomDiv";
import PortfolioEntry from "./PortfolioEntry";


export default function PortfolioMenu() {
    return (
        <div className="w-sm sm:w-md md:w-xl lg:w-3xl flex flex-col justify-center">
            <CustomDiv
                label={"Apps"}
            />
            <ul className="flex flex-col gap-8">
                <li>
                    <PortfolioEntry
                        text="CapyCalm"
                        image="capy"
                        colour="bg-violet-400"
                        link="/portfolio/capycalm"
                    />
                </li>
            </ul>
            <div className="mt-32" />
            <CustomDiv
                label={"Old Portfolios"}
            />
            <ul className="flex flex-col gap-8">
                <li>
                    <PortfolioEntry
                        text="Portfolio 1"
                        colour="bg-purple-400"
                        link="/portfolio/portfolio-1"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio 2"
                        colour="bg-fuchsia-400"
                        link="/portfolio/portfolio-2"
                    />
                </li>
                <li>
                    <PortfolioEntry
                        text="Portfolio 3"
                        colour="bg-pink-400"
                        link="/portfolio/portfolio-3"
                    />
                </li>
            </ul>
        </div>
    );
}