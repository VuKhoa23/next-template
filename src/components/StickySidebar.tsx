import Image from "next/image";

const StickySidebar = () => {
    return (
        <div className="sticky mt-5 top-24 flex flex-col items-center">
            <div className="rounded-2xl flex flex-col relative p-10 bg-neutral-900">
                <Image className="rounded-full" src="/avatar2.jpg" alt="avatar" width={100} height={100} />
                <h2 className="text-xl font-bold mt-4">Vu Anh Khoa</h2>
                <p className="font-bold mb-4">Web Developer</p>
                <p className="text-sm leading-relaxed">
                    I&apos;m Vu Anh Khoa, a passionate web developer specializing in building modern,
                    user-friendly websites and applications. With a focus on clean code, performance, and
                    seamless user experiences, I love turning ideas into functional digital products that make
                    an impact.
                </p>
            </div>
        </div>
    );
};

export default StickySidebar;
