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
                
                bannerImage="/capycalm_banner.png"

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