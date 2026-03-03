import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="Portfolio V2"
                
                description={[
                    "After portfolio V1 I became hooked with web development.", 
                
                    "I consider this website still pretty terrible but a step in the right direction.",

                    "It's still vibe coded, but much less so."
                ]}
                
                date="April 2024"
                
                bannerImage="/portfolio-v2/portfolio-v2_banner.png"

                roles={{
                    "Vibe Coding": 60, 
                    "Thinking": 15, 
                    "Making Huge CSS Files": 25,
                }}
                
                stack={[
                    "HTML", 
                    "CSS", 
                    "JavaScript", 
                    "Bootstrap", 
                    "GitHub Hosting"
                ]}
                
                links={{
                    "Website": "https://toadboychen.github.io/",
                    "GitHub": "https://github.com/ToadBoyChen/ToadBoyChen.github.io"
                }}

                color="bg-fuchsia-400"
                
                content={{
                    "An animated welcome page to this website. ": "/portfolio-v2/portfolio1.png",
                    "A view of content that is being fetched from my GitHub account. This was my first backend ish thing.": "/portfolio-v2/portfolio2.png",
                    "A close up of a section. All code was written into a html file without tailwind - I'm not even sure if I could do that any more.": "/portfolio-v2/portfolio4.png",
                }}
            />
        </section>
    );
}