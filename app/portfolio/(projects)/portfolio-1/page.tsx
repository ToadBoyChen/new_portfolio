import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="Portfolio V1"
                
                description={[
                    "This is the first ever website I created. I made it to try and get a job at my university, lets just say we all start somewhere.", 
                
                    "This website is pure vibecoding, using jQuery."
                ]}
                
                date="February 2024"
                
                bannerImage="/portfolio-v1/portfolio-v1_banner.png"

                roles={{
                    "Vibe Coding": 90, 
                    "Thinking": 5, 
                    "Trying to make money": 5
                }}
                
                stack={[
                    "jQuery", 
                    "HTML",
                    "JavaScript",
                    "CSS",
                ]}
                
                links={{
                    "Website": "https://old-website-eight.vercel.app/",
                    "GitHub": "https://github.com/ToadBoyChen/Old-Website"
                }}

                color="bg-purple-400"
                
                content={{
                    "This is the welcome page. There isn't much to say other than I thought the blur effect was awesome - it kind of it.": "/portfolio-v1/portfolio2.png", 
                    "The supposed selling point of my website. These are pure, vibe coded bubbles which expand to show extra information. Not only don't they work well, but they are also a terrible UX.": "/portfolio-v1/portfolio1.png",
                }}
            />
        </section>
    );
}