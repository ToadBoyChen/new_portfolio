import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="CapyCalm"
                
                description={[
                    "CapyCalm is a gamified mindfulness app built around the calming presence of a capybara. Working within my friend, I developed the visual identity and web presence, ensuring the 'calm' ethos translates seamlessly from the brand marketing to the UI. We wanted the UX to calm the user but also create a sense of achievement.", 
                
                    "Using Figma, I was able to rapidly design the identity, with a careful set of colours and bold borders. I was able to implement the design in our landing page.", 

                    "I designed vector based graphics for the capybara which really creates a strong vibe that fits the name, 'CapyCalm'. This is a fantastic marketable point, however we chose to focus on teh startup vibe."
                ]}
                
                date="Jan 2026 — Present"
                
                bannerImage="/capycalm/capycalm_banner.png"

                roles={{ 
                    "UI/UX Design": 60, 
                    "Brand Strategy": 10,
                    "Marketing": 10,
                    "Lead Web Development": 20
                }}
                
                stack={[
                    "Figma",
                    "Next.js", 
                    "Tailwind CSS",
                    "Appwrite",
                ]}
                
                links={{
                    "Landing Page": "https://capycalmweb.appwrite.network/", 
                    "Instagram": "https://www.instagram.com/capycalmapp/", 
                    "TikTok": "https://www.tiktok.com/@capycalmapp"
                }}

                color="bg-indigo-400"
                
                content={{
                    "This is the onboarding page. It's designed to excite and entice, whilst also getting them to softly commit to the habit. Importantly, we only show one thing per page.": "/capycalm/Onboarding.png", 
                    "The home page shows the user the daily streak, minutes meditated and various playlists they may want to interact with.": "/capycalm/Home.png", 
                    "This is a screenshot from the landing page which displays an academic backing as to why the app works.": "/capycalm/Web.png",
                    "This is the Figma design for the profile page. This lets the user manage subscriptions, change choices and permissions and various other things. It provides a solid base for an MVP.": "/capycalm/Profile.png",
                }}
            />
        </section>
    );
}