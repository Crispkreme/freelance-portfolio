import { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import profile from '../assets/project.jpg';

const Project = () => {

    type ProjectItem = {
        id: number;
        title: string;
        image: string;
        description: string;
        technologies: string[];
        role: string;
        featured: boolean;
    };

    const projectItems: ProjectItem[] = [
        {
            id: 1,
            title: "Sample Projects",
            image: profile,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            technologies: ["React.js", "Node.js", "MongoDB"],
            role: "Full Stack",
            featured: true,
        }
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById("project");
        if (element) observer.observe(element);
        return () => observer.disconnect();
    }, []);
        
    return (
        <section id="project" className="py-24 bg-slate-950 overflow-hidden relative">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}>
                    <p className="text-green-400 font-semibold text-lg mb-4">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and expertise
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {projectItems.map((project, projectIndex) => (
                        <div
                            key={project.id}
                            className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 delay-600 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0":"opacity-0 translate-y-10"}`}
                            style={{ transitionDelay: `${(projectIndex + 3) * 150}ms` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-72 object-cover group-hover:scale-105 transition-all duration-300"
                                />

                                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                                        <Github className="w-4 h-4 text-gray-700" />
                                    </button>
                                    <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                                        <ExternalLink className="w-4 h-4 text-gray-700" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                                        {project.role}
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-all duration-300">
                                    {project.title}
                                </h4>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    {project.description.substring(0, 100)} ...
                                </p>
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center transition-all duration-1000 delay-1000 mt-5">
                    <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                        VIEW ALL PROJECTS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Project;