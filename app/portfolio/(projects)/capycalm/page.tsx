import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="CapyCalm"
                
                description={[
                    "CapyCalm is a gamified mindfulness ecosystem built around the serene nature of the capybara. Working within a small, agile team, I am spearheading the visual identity and web presence, ensuring the 'calm' ethos translates seamlessly from the brand marketing to the functional user interface.", 
                
                    "Transitioning from pure web to mobile-first design, I’ve leveraged my background in TypeScript and React to architect a responsive landing environment. By focusing on the web-based acquisition funnel and high-fidelity Figma prototyping, I’ve maintained a high development velocity despite local hardware constraints, ensuring the design system is production-ready for the React Native implementation."
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
                    "React Native", 
                    "Next.js", 
                    "Tailwind CSS",
                    "Appwrite"
                ]}
                
                links={{
                    "Live Preview": "https://capycalmweb.appwrite.network/", 
                    "Instagram": "https://www.instagram.com/capycalmapp/", 
                    "TikTok": "https://www.tiktok.com/@capycalmapp"
                }}

                color="bg-indigo-400"
                
                content={{
                    "Educational funnel designed to convert casual visitors into waitlist subscribers by highlighting the clinical benefits of mindfulness.": "/capycalm/capycalm-1.png", 
                    "Interface design for the 'User Sanctuary'—mapping out account management and profile progression within Figma.": "/capycalm/capycalm-2.png", 
                    "The core 'Habit Loop'—designing a streak-based home screen with a focus on future character-driven rewards and customisation.": "/capycalm/capycalm-3.png",
                    "Interactive data collection layer. We use this onboarding flow to gather user intent, allowing for a personalized app experience post-launch.": "/capycalm/capycalm-4.png",
                    "The acquisition finale. A streamlined lead-capture form integrated with a backend database to facilitate our Day-One launch notification.": "/capycalm/capycalm-5.png",
                }}
            />
        </section>
    );
}