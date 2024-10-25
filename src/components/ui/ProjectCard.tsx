// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    linkHref: string;
    linkText: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description, linkHref, linkText }) => {
    return (
        <div className="relative overflow-hidden flex flex-col rounded-lg bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 group">
            <div className="overflow-hidden w-full min-h-[20rem] relative">
                <Image
                    src={imageSrc}
                    alt={title}
                    objectFit="cover"
                    layout="fill"
                    objectPosition="top"
                    className="group-hover:scale-105 duration-300"
                />
            </div>
            <div className="z-10 p-3 pb-10">
                <h3 className="text-lg font-bold mb-3">{title}</h3>
                <p className="text-sm mb-6">{description}</p>
                <Link
                    className="px-4 py-1 bg-black text-white text-sm rounded-full hover:bg-white hover:text-black duration-300 border"
                    href={linkHref}
                >
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
