import Link from "next/link";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const StickyHeader = () => {
    return (
        <div className="sticky -top-2 pt-10 md:pt-24 bg-background p-6 z-10">
            <div className="flex flex-col md:flex-row gap-10 justify-between md:items-center">
                <div className="flex gap-10 items-center">
                    <a
                        className="px-5 py-1 duration-200 bg-neutral-900 hover:bg-neutral-800 rounded-full"
                        href="#about"
                    >
                        About
                    </a>
                    <a
                        className="px-5 py-1 duration-200 bg-neutral-900 hover:bg-neutral-800 rounded-full"
                        href="#experience"
                    >
                        Experience
                    </a>
                    <a
                        className="px-5 py-1 duration-200 bg-neutral-900 hover:bg-neutral-800 rounded-full"
                        href="#work"
                    >
                        Work
                    </a>
                </div>
                <div className="flex gap-3 items-center">
                    <Link href="https://linkedin.com/" target="_blank">
                        <FaLinkedin className="text-4xl rounded-lg duration-300 hover:bg-neutral-900 bg-neutral-800 p-2" />
                    </Link>
                    <Link href="https://facebook.com/" target="_blank">
                        <FaFacebook className="text-4xl rounded-lg duration-300 hover:bg-neutral-900 bg-neutral-800 p-2" />
                    </Link>
                    <Link href="https://github.com/" target="_blank">
                        <FaGithub className="text-4xl rounded-lg duration-300 hover:bg-neutral-900 bg-neutral-800 p-2" />
                    </Link>
                    <Link href="mailto:example@gmail.com" target="_blank">
                        <FaEnvelope className="text-4xl rounded-lg duration-300 hover:bg-neutral-900 bg-neutral-800 p-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StickyHeader;
