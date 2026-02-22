import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="Portfolio V2"
                
                description={[
                    "After portfolio V1 I became hooked with web development - hence leading to portfolio number two. This website is still coded with simple html, js and css files.", 
                
                    "Here is where I started to grasp to ideas of a responsiveness (used Bootstrap) and learnt what one should properly include on a portfolio, however its very text heavy, vibe coded to the max and deeply inefficient.", 

                    "Still, this was a necessary development in my journey, and a step in the right direction (portfolio v2 is less vibe-coded as opposed to portfolio v1 - this pattern continues)."
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

                color="bg-fuchsia-200"
                
                content={{
                    "Figure One: This is the landing page displaying an informational page explaining why mindfulness and meditation is good.": "/capycalm-1.png",
                }}
            />
        </section>
    );
}