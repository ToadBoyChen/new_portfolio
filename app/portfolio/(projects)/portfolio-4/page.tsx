import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="Portfolio V4"
                
                description={[
                    "This is my current portfolio and hopefully my last one for a while. My goal with this one was to NOT vibe code any of it, which has mostly held true.", 
                
                    "It aims to take a very simple structure but fill it with 'fun', as opposed to doing something I don't actually know how to code yet (easy trap to fall into when AIs exist).", 

                    "Its by far, the most responsive, performant and thought about portfolio I have made - hopefully its somewhat impressive!"
                ]}
                
                date="February 2026"
                
                bannerImage="/portfolio-v4/portfolio-v4_banner.jpg"

                roles={{
                    "Vibe Coding": 10, 
                    "Designing": 60, 
                    "Coding": 20,
                    "Animating": 10
                }}
                
                stack={[
                    "Figma",
                    "Next.js", 
                    "TailwindCSS", 
                    "React spring"
                ]}
                
                links={{
                    "You're Already Here": "",
                    "GitHub": "https://github.com/ToadBoyChen/new_portfolio",
                }}

                color="bg-yellow-200"
                
                content={{
                    "Figure One: example piece of content that I have created and put on this website": "/portfolio-v4/capy.png",
                    "Figure Two: the banner image of this page. The photo is by Martin Bennie.": "/portfolio-v4/portfolio-v4_banner.jpg", 
                }}
            />
        </section>
    );
}