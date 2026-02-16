import MenuEntry from "./MenuEntry";

export default function Menu() {
    return (
        <div className="min-w-sm sm:min-w-md md:min-w-xl lg:min-w-3xl h-[60vh] flex flex-col justify-center">
            <p className="text-sm border-b tracking-widest mb-8 text-center">{"Navigation"}</p>
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