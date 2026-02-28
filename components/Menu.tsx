import CustomDiv from "./CustomDiv";
import MenuEntry from "./MenuEntry";

export default function Menu() {
    return (
        <div className="w-sm sm:w-md md:w-xl lg:w-3xl h-[60vh] flex flex-col justify-center">
            <CustomDiv
                label={"Navigation"}
            />
            <ul className="flex flex-col gap-8">
                <li>
                    <MenuEntry
                        text="Portfolio"
                        link="/portfolio"
                    />
                </li>
                <li>
                    <MenuEntry
                        text="About Me"
                        link="/about"
                    />
                </li>
                <li>
                    <MenuEntry
                        text="Contact"
                        link="/contact"
                    />
                </li>
            </ul>
        </div>
    );
}