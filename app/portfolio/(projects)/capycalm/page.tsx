import PortfolioAbstract from "@/components/PortfolioAbstract";

export default function Page() {
    return (
        <section className="overflow-x-hidden">
            <PortfolioAbstract
                name="CapyCalm"
                description={["CapyCalm is a capybara-themed meditation app that I'm working on with my friends! I am focused on design, websites and some of the marketing content, as currently my PC is too s##t to run an Android emulator :(", "This is my first experience with apps, however, I already know react, type script and other quirks of app/web development, so the jump hasn't been crazy."]}
                date="January 2026 - Present"
                bannerImage="/capycalm_banner.png"
                roles={["Frontend Developer", "Designer", "Marketing"]}
                stack={["Figma", "Social Media", "React Native"]}
                links={{"Landing Page": "https://capycalmweb.appwrite.network/", "Landing Page 2": "https://capycalmweb.appwrite.network/"}}
                color="oklch(63.7% 0.237 25.331)"
                content={["/capycalm_banner.png", "/pfp.jpeg"]}
            />
        </section>
    );
}