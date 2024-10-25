import React from "react";

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return <h2 className="px-6 py-1 border border-neutral-700 w-fit rounded-full">{text}</h2>;
};

export default Title;
