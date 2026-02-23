import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="Inventory Game"
                
                description={[
                    "WIP",
                ]}
                
                date="March 2026"
                
                bannerImage="/portfolio-v1/portfolio-v1_banner.png"

                roles={{
                    "Coding": 100,
                }}
                
                stack={[
                    "Next.js",
                ]}
                
                links={{
                    "Website": "",
                }}

                color="bg-green-200"
                
                content={{
                    "Figure One: this is the welcome page. There isn't much to say other than I thought the blur effect was awesome. It couldn't fix this either way.": "/portfolio-v1/portfolio-v1-1.png",
                }}
            />
        </section>
    );
}