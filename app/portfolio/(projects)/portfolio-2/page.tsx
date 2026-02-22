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
                    "Landing Page": "https://capycalmweb.appwrite.network/", 
                    "Instagram": "https://www.instagram.com/capycalmapp/", 
                    "Tiktok": "https://www.tiktok.com/@capycalmapp"
                }}

                color="bg-fuchsia-200"
                
                content={{
                    "Figure One: This is the landing page displaying an informational page explaining why mindfulness and meditation is good.": "/capycalm-1.png", 
                    "Figure Two: Figma file showing the account management and profile page. This is not yet the app yet.": "/capycalm-2.png", 
                    "Figure Three: Figma file showing the home page which has a streaks page. We are aiming to add customisation to the capybara.": "/capycalm-3.png",
                    "Figure Four: This is the landing page where we obtain facts from the user. This increases engagement and gives us actionable data that we can use to customise the app experience.": "/capycalm-4.png",
                    "Figure Five: This is the ladning page sign up form. This data is put into a database where we can contact the users to let them know when the app launches.": "/capycalm-5.png",
                }}
            />
        </section>
    );
}