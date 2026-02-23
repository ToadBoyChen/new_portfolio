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
                    "Figure One: maybe the one thing I'm proud of from this website - the welcome page. It uses a LaTeX js script to inject LaTeX syntax.": "/portfolio-v2/portfolio-v2-1.png",
                    "Figure Two: this is the about me section. One can see that there is a scroll tracker on the side and the active nav highlights itself. There is quite a lot of content in this website as one can see. ": "/portfolio-v2/portfolio-v2-2.png",
                    "Figure Three: this is a git repo fetcher section to grabs some statistics from my repos.": "/portfolio-v2/portfolio-v2-3.png",
                    "Figure Four: this section is a predicted timeline of what my life might look like. I think I have been very wrong so far. ": "/portfolio-v2/portfolio-v2-4.png",
                    "Figure Five: an ACTUAL contact form that ACTUALLY sends me (or used to) an email.": "/portfolio-v2/portfolio-v2-5.png",
                }}
            />
        </section>
    );
}