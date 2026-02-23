import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="Portfolio V3"
                
                description={[
                    "This portfolio was a lot of fun to make. I wanted to display all my stuff in a game like world, with various different items that I have collected along the way representing life achievements.", 
                
                    "This was the first time that I used a major framework like Vite with typeScript. The learning curve was big, but it led to a cool-ish final product.", 

                    "The main downfall with this portfolio, like most others, is that its vibe coded. There is little continuity and I don't really understand how it works.", 

                    "After this project, I vowed to vibe code less. "
                ]}
                
                date="June 2025"
                
                bannerImage="/capycalm_banner.png"

                roles={{
                    "Vibe Coding": 50,
                    "Pixel Art": 15,
                    "Designing UX": 10,
                    "Optimising": 5,
                    "Creating the Coffee Man": 20
                }}
                
                stack={[
                    "Vite", 
                    "Vercel", 
                    "TypeScript", 
                    "TailwindCSS", 
                    "Motion Framer",
                    "Pixel Art",
                    "Animation"
                ]}
                
                links={{
                    "Website": "https://portfolio-iota-ten-htjy731lfw.vercel.app/",
                    "GitHub": "https://github.com/ToadBoyChen/portfolio"
                }}

                color="bg-rose-300"
                
                content={{
                    "Figure One: This is the landing page displaying an informational page explaining why mindfulness and meditation is good.": "/capycalm-1.png",
                }}
            />
        </section>
    );
}