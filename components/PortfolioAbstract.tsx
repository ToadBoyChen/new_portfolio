import Link from "next/link";
import IntroText from "./IntoText";

interface PortfolioAbstractProps {
    name: string;
    description: string[];
    date: string;
    roles: string[];
    stack: string[];
    links: Record<string, string>;
    bannerImage: string;
    color: string;
}

export default function PortfolioAbstract(props: PortfolioAbstractProps) {
    return (
        <section>
            <div className="relative border-b">
                <div className="text-7xl md:text-8xl font-black leading-none justify-center tracking-normal sm:tracking-wide md:tracking-widest absolute top-0 left-1/2 -translate-x-1/2">
                    <IntroText
                        text="CapyCalm"
                        direction="left"
                        spacing={false}
                    />
                </div>
                <img
                    src={props.bannerImage}
                    alt={`${props.name} banner`}
                    className="w-full object-cover"
                />
                <p className="absolute bottom-2 left-8 tracking-wider">
                    {props.date}
                </p>
            </div>
            <div className="mx-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl flex flex-col items-center">
                <div className="">
                    {props.description.map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>

                <div className="w-full">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center">
                        {"Roles"}
                    </p>

                    <ul>
                        {props.roles.map((role) => (
                            <li key={role}>
                                {role}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center">
                        {"Tech + Skill Stack"}
                    </p>

                    <ul>
                        {props.stack.map((tech) => (
                            <li key={tech}>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links */}
                <div className="w-full pb-32">
                    <p className="pt-16 w-full text-sm border-b-2 font-semibold tracking-widest text-center">
                        {"Links"}
                    </p>
                    <ul>
                        {Object.entries(props.links).map(([label, url]) => (
                            <li key={label}>
                                <Link href={url} target="_blank" rel="noreferrer">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}