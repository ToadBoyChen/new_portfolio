import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="CapyCalm"
                
                description={[
                    "CapyCalm is a capybara-themed meditation app that I'm working on with my friends! I am focused on design, websites and some of the marketing content, as currently my PC is too s##t to run an Android emulator :(", 
                
                    "This is my first experience with apps, however, I already know react, type script and other quirks of app/web development, so the jump hasn't been crazy."
                ]}
                
                date="January 2026 - Present"
                
                bannerImage="/capycalm_banner.png"

                roles={{
                    "Frontend Developer": 20, 
                    "Designer": 45, 
                    "Marketing": 35
                }}
                
                stack={[
                    "Figma", 
                    "Social Media", 
                    "React native", 
                    "TailwindCSS", 
                    "React spring"
                ]}
                
                links={{
                    "Landing Page": "https://capycalmweb.appwrite.network/", 
                    "Instagram": "https://www.instagram.com/capycalmapp/", 
                    "Tiktok": "https://www.tiktok.com/@capycalmapp"
                }}

                color="bg-rose-300"
                
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