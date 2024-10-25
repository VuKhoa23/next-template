// components/JobCard.tsx
import React from "react";

interface JobCardProps {
    company: string;
    position: string;
    years: string;
    description: string;
}

const JobCard: React.FC<JobCardProps> = ({ company, position, years, description }) => {
    return (
        <div className="p-4 rounded-md bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950">
            <div className="flex border-b border-neutral-700 pb-4 flex-row justify-between md:grid grid-cols-2 mb-3">
                <h3 className="font-bold text-lg flex flex-col">
                    {company}
                    <span className="font-normal text-neutral-300 text-sm">{position}</span>
                </h3>
                <span className="text-sm text-neutral-300 flex justify-end">{years}</span>
            </div>
            <p className="text-sm text-neutral-300">{description}</p>
        </div>
    );
};

export default JobCard;
