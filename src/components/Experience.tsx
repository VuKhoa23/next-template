import JobCard from "./ui/JobCard";
import Title from "./ui/Title";

const Experience = () => {
    return (
        <div id="experience" className="relative">
            <Title text="Experience" />
            <p className="text-sm pt-5 text-neutral-300">
                Over the past decade, I have taken on a variety of key roles in the technology and product
                management sectors. My career reflects a steady progression from technical expertise to
                strategic leadership, continually fostering innovation and excellence at every step.
            </p>
            <div className="my-10 grid md:grid-cols-2 gap-5">
                <JobCard
                    company="Code Crafters Co."
                    position="Product Specialist"
                    years="2014 - 2016"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deleniti vel quaerat cum, minus est consequuntur quod culpa soluta at iste ut praesentium mollitia magni assumenda ad ipsam aliquid repellat."
                />
                <JobCard
                    company="NextGen"
                    position="Senior Product Manager"
                    years="2016 - 2018"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deleniti vel quaerat cum, minus est consequuntur quod culpa soluta at iste ut praesentium mollitia magni assumenda ad ipsam aliquid repellat."
                />
                <JobCard
                    company="E-commerce"
                    position="Data Analyst"
                    years="2018 - 2020"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deleniti vel quaerat cum, minus est consequuntur quod culpa soluta at iste ut praesentium mollitia magni assumenda ad ipsam aliquid repellat."
                />
                <JobCard
                    company="WebVisionary"
                    position="Software Engineer"
                    years="2020 - Now"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deleniti vel quaerat cum, minus est consequuntur quod culpa soluta at iste ut praesentium mollitia magni assumenda ad ipsam aliquid repellat."
                />
            </div>
        </div>
    );
};

export default Experience;
