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
                
                bannerImage="/portfolio-v3/portfolio-v3_banner.png"

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

                color="bg-pink-400"
                
                content={{
                    "This is the character sheet section. You can see all the items I have collected, encounters and the rarities + my character design. Its all animated - you should check it out.": "/portfolio-v3/portfolio1.png",
                    "The users can access some of the socials here. You can see the pastel, cute glassmorphism effect.": "/portfolio-v3/portfolio2.png",
                    "This is the quest modal, where the user interact with some of the stuff I have done in my life in a RPG-like way.": "/portfolio-v3/portfolio4.png",
                    "A call to action to interact with my contact form.": "/portfolio-v3/portfolio3.png",
                }}
            />
        </section>
    );
}