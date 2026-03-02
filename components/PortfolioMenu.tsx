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
                        colour="bg-indigo-400"
                        link="/portfolio/capycalm"
                    />
                </li>
            </ul>
        </div>
    );
}