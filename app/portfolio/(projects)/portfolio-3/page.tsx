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

                color="bg-rose-300"
                
                content={{
                    "Figure One: the main section of the website. This is supposed to act as a character sheet, displaying the statistics, classes, guilds and groups, items and so fourth. ": "/portfolio-v3/portfolio-v3-1.png",
                    "Figure Two: linking users to other platforms where I have a presence.": "/portfolio-v3/portfolio-v3-2.png",
                    "Figure Three: another working contact form. ": "/portfolio-v3/portfolio-v3-3.png",
                    "Figure Four: statistics section displaying character statistics, underneath the character sheet.": "/portfolio-v3/portfolio-v3-4.png",
                    "Figure Five: The quest database. Data is stored in a flat file and each question has various properties. Each quest has a quest line, for example, 'The Scholar's Path' refers to my studies.": "/portfolio-v3/portfolio-v3-5.png",
                    "Figure Six: an example of if you click on a specific quest line.": "/portfolio-v3/portfolio-v3-6.png",
                    "Figure Seven: an example of if you click a specific quest.": "/portfolio-v3/portfolio-v3-7.png",
                }}
            />
        </section>
    );
}