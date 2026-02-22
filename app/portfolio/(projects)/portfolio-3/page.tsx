import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="Portfolio V3"
                
                description={[
                    "", 
                
                    ""
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