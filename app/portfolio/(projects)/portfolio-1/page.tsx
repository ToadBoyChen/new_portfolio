import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="Portfolio V1"
                
                description={[
                    "This is the first ever website I made! I created it to try and get a job at my university - in hindsight i'm quite embarrassed about submitting it (we all start somewhere).", 
                
                    "This website is pure vibecoding, using jQuery - which was for some reason a requirement for the job. I will never know why especially when we have other powerful frameworks."
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

                color="bg-green-200"
                
                content={{
                    "Figure One: this is the welcome page. There isn't much to say other than I thought the blur effect was awesome. It couldn't fix this either way.": "/portfolio-v1/portfolio-v1-1.png", 
                    "Figure Two: footer - again don't have much to say.": "/portfolio-v1/portfolio-v1-2.png",
                    "Figure Three: this was supposed to be the 'selling point' of this website. These are animated bubbles that expand to give facts - nothing is centred.": "/portfolio-v1/portfolio-v1-3.png",
                    "Figure Four: some fact cards.": "/portfolio-v1/portfolio-v1-4.png",
                }}
            />
        </section>
    );
}