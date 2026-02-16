import MenuEntry from "./MenuEntry";

export default function Menu() {
    return (
        <div className="min-w-sm sm:min-w-md">
            <p className="-translate-y-5 sm:translate-y-0 text-md border-b tracking-widest">Menu.tsx</p>
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