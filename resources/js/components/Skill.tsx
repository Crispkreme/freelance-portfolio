import { useState, useEffect } from 'react';

type SkillItem = {
    name: string;
    percentage: number;
};

type EducationItem = {
    year: string;
    course: string;
    institution: string;
    description: string;
};

const skillItems: SkillItem[] = [
    { name: "HTML", percentage: 100 },
    { name: "PHP", percentage: 80 },
    { name: "CSS", percentage: 100 },
    { name: "JAVASCRIPT", percentage: 60 },
    { name: "LARAVEL", percentage: 50 },
    { name: "WORDPRESS", percentage: 10 },
    { name: "REACT.JS", percentage: 20 },
    { name: "ANGULAR.JS", percentage: 45 },
];

const educationItems: EducationItem[] = [
    {
        year: "2013-2018",
        course: "BS Computer Engineering",
        institution: "Holy Trinity College",
        description:
            "Graduated with a Bachelor of Science in Computer Engineering from Holy Trinity College, General Santos City, Philippines (March 2019). Gained a strong foundation in computer systems, programming, and hardware integration, which supports my expertise in web development and innovative technology solutions.",
    },
];

const Skill = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    skillItems.forEach((skill, index) => {
                        setTimeout(() => {
                            setAnimatedSkills((prev) => ({
                                ...prev,
                                [skill.name]: skill.percentage,
                            }));
                        }, index * 200);
                    });
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById("skill");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skill" className="bg-slate-900 py-24 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Education */}
                    <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                        <div className="mb-12">
                            <p className="text-green-400 font-semibold text-lg mb-4">Qualification</p>
                            <p className="text-green-400 text-4xl font-bold mb-8">Education</p>
                        </div>
                        <div className="space-y-8">
                            {educationItems.map((education, educationIndex) => (
                                <div
                                    key={educationIndex}
                                    className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000 ${
                                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                                    }`}
                                >
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                                    <div className="text-green-400 text-sm font-semibold mb-2 group-hover:text-green-300 transition-all duration-300">
                                        {education.year}
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                                        {education.course}
                                    </h3>
                                    <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">{education.institution}</p>
                                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-all duration-300">
                                        {education.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Skills */}
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                        <div className="mb-12">
                            <p className="text-green-400 font-semibold text-lg mb-4">Used in Project</p>
                            <p className="text-4xl font-black text-white mb-8">Tech-Stack</p>
                        </div>
                        <div className="space-y-6">
                            {skillItems.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="space-y-2 transition-all duration-1000"
                                    style={{ transitionDelay: `${skillIndex * 150}ms` }}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-white font-medium">{skill.name}</span>
                                        <span className="text-green-400 font-semibold">{skill.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1000 ease-out relative"
                                            style={{ width: `${animatedSkills[skill.name] || 0}%` }}
                                        >
                                            <div className="absolute inset-0 bg-white/20"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;