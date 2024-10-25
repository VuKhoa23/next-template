import ProjectCard from "./ui/ProjectCard";
import Title from "./ui/Title";

const Work = () => {
    return (
        <div id="work">
            <Title text="Work" />
            <div className="grid md:grid-cols-2 gap-5 my-5">
                <ProjectCard
                    imageSrc="/project1.webp"
                    title="Mobile App Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium in quisquam perspiciatis quam veniam placeat harum aliquid qui!"
                    linkHref="/project-details"
                    linkText="Learn More"
                />
                <ProjectCard
                    imageSrc="/project2.webp"
                    title="Website Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat accusantium in quisquam perspiciatis quam veniam placeat harum aliquid qui!"
                    linkHref="/project-details"
                    linkText="Learn More"
                />
            </div>
        </div>
    );
};

export default Work;
