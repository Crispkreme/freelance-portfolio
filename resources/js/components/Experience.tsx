import { Award, Briefcase, Calendar, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
};

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRefs = itemRefs.current;

    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [visibleItems]);

  const experienceItems: ExperienceItem[] = [
    {
      company: "Seed Tech Philippines Inc.",
      position: "Full Stack Developer",
      period: "07/2023 - PRESENT",
      location: "Cebu, Central Visayas, Philippines",
      description:
        "Responsible for designing and developing web applications using Laravel and React.js. Ensured high-quality user interfaces and efficient back-end functionality. Managed MySQL databases, implemented REST APIs, and optimized application performance to meet client needs.",
      achievements: [
        "Designed and developed web applications using Laravel and React.js, ensuring high-quality UI and efficient back-end functionality.",
        "Created responsive interfaces with CSS and HTML, improving user experience.",
        "Managed and optimized MySQL databases and developed REST APIs for robust server-client communication.",
        "Applied the Repository Pattern in Laravel for scalable and maintainable code.",
        "Utilized Figma for UI design and prototyping, translating designs into functional components.",
        "Integrated and customized WordPress sites with plugins and themes.",
        "Tested and debugged APIs using Postman for reliable system interactions.",
      ],
      skills: [
        "FIGMA",
        "PHP",
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "LARAVEL",
        "REACT.JS",
        "ANGULAR",
        "SPRINGBOOT",
        "JAVA",
        "SALESFORCE",
        "POSTMAN",
        "NODE",
        "WORDPRESS",
      ],
    },
    {
      company: "Nutnull IT Solution",
      position: "Full Stack Developer",
      period: "02/2022 - 09/2022",
      location: "General Santos City, Philippines",
      description:
        "Developed responsive web applications with HTML, CSS, and PHP, converted PSD designs into functional websites, managed WordPress sites, collaborated on Figma designs, built back-end systems with PHP and MySQL, optimized performance achieving a 25% load time reduction, maintained and updated websites, and worked with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Developed responsive web applications using HTML, CSS, and PHP.",
        "Converted PSD designs into functional websites with precise HTML/CSS coding.",
        "Managed and customized WordPress sites, improving site performance and user engagement.",
        "Collaborated with designers on Figma for enhanced interface design.",
        "Maintained and updated websites, addressing issues and implementing new features.",
        "Worked with cross-functional teams to deliver high-quality web solutions.",
      ],
      skills: [
        "FIGMA",
        "PHP",
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "LARAVEL",
        "REACT.JS",
        "ANGULAR",
        "POSTMAN",
        "C#",
        "WORDPRESS",
      ],
    },
    {
      company:
        "Capstone Project Developer (PART-TIME)",
      position: "Full Stack Developer",
      period: "01/2022 - PRESENT",
      location: "Remote",
      description:
        "Dedicated to assisting students with research and capstone projects, leveraging extensive technical and programming experience to provide tailored support for successful project completion.",
      achievements: [
        "Developed and maintained web applications using Laravel and React.js for efficient, scalable solutions.",
        "Created responsive interfaces with HTML, Bootstrap, and CSS, improving user experience.",
        "Optimized databases with MySQL and integrated real-time features using Firebase.",
        "Engineered IoT solutions with Arduino IDE and Raspberry Pi, enhancing functionality and efficiency.",
        "Designed circuit prototypes with Fritzing for clear, effective development.",
      ],
      skills: [
        "FIGMA",
        "PHP",
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "LARAVEL",
        "REACT.JS",
        "ANGULAR",
        "POSTMAN",
        "FIREBASE",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-green-400 font-semibold text-lg mb-4">All Company</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto delay-300">
            My professional journey and the experiences that shaped my expertise
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="timeline-line absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-slate-700 rounded-full overflow-hidden">
              <div className="w-full bg-gradient-to-b from-green-500 via-green-400 to-green-300 rounded-full transition-all duration-2000 ease-out">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-300 to-transparent"></div>
              </div>
            </div>

            {experienceItems.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative flex items-center mb-20 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 300 + 800}ms`,
                  }}
                >
                  <div
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10 ${
                      isVisible ? "scale-110" : "scale-0"
                    }`}
                    style={{ transitionDelay: `${index * 300 + 1200}ms` }}
                  ></div>

                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/20 group">
                      
                      <div className="flex items-center gap-3 mb-6 group-hover:transform group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-white group-hover:text-green-400 transition-colors duration-300">
                              {exp.company}
                            </h3>
                            <div className="flex items-center gap-2 text-green-400 text-sm">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
                          {exp.position}
                        </h4>
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <div className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                        {exp.description}
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-white mb-3 flex items-center gap-2 group-hover:text-green-400 transition-all duration-300">
                          <Award className="w-4 h-4 text-green-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achv, achvIndex) => {
                            return <li key={achvIndex} className={`text-gray-300 text-sm flex items-start gap-3 group-hover:text-white transition-all duration-300`} style={{ animationDelay: `${index * 300 + achvIndex * 200 + 1500}ms`}}>
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              {achv}
                            </li>
                          })}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => {
                          return (
                            <span key={skillIndex} className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-green-400" style={{ animationDelay: `${index * 300 + skillIndex * 100 + 18000}ms`}}>{skill}</span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;