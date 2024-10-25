import About from "@/components/About";
import Work from "@/components/Work";

import Experience from "../components/Experience";
import StickyHeader from "../components/StickyHeader";
import StickySidebar from "../components/StickySidebar";

export default function Home() {
    return (
        <div className="container gap-10 px-5 flex flex-col lg:grid lg:grid-cols-3 mx-auto lg:py-0">
            <div className="relative w-full flex flex-col col-span-1">
                <StickySidebar />
            </div>
            <div className="relative w-full flex flex-col col-span-2">
                <StickyHeader />
                <div className="p-6 w-full relative min-h-screen">
                    <About />
                    <div className="bg-gradient-to-r from-neutral-800 via-neutral-900 to-[#050505] h-[2px] w-full my-10" />
                    <Experience />
                    <div className="bg-gradient-to-r from-neutral-800 via-neutral-900 to-[#050505] h-[2px] w-full my-10" />
                    <Work />
                </div>
            </div>
        </div>
    );
}
