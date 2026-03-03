import Menu from "@/components/Menu";
import IntroText from "@/components/IntoText";

export default function Home() {

    return (
        <main className="flex flex-col h-screen">
            <div className=" flex flex-col justify-center items-center my-auto">
                <div className="text-[15vh] md:text-[20vh] font-black leading-none">
                    <IntroText
                        text="TOBY"
                        spacing={false}
                    />

                </div>

                <Menu />


                <div className="text-[15vh] md:text-[20vh] font-black leading-none">
                    <IntroText
                        text="CHEN"
                        spacing={false}
                    />
                </div>
            </div>
        </main>
    );
}