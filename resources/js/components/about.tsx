import profile from '../assets/marvinramos.jpg';
import { useState, useEffect } from 'react';

const About = () => {
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

        const element = document.getElementById("about");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 py-4">
                <div className="container px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-0'}`}>
                            <div className="relative group">
                                <div className="w-full max-w-md mx-auto">
                                    <div className="relative border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300">
                                        <img
                                            src={profile}
                                            alt="profile"
                                            className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full"></div>
                                        <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-600/20 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-0'}`}>
                            <div className="space-y-4">
                                <p className="text-green-400 font-semibold text-lg">About Me</p>
                                <h2 className="text-4xl md:text-5xl text-white font-bold animate-slide-up">
                                    Why hire me for your <br />
                                    <span className="text-green-400">next project?</span>
                                </h2>
                                <p className="text-green-400 font-semibold delay-200">
                                    PHP Developer & Web Developer
                                </p>
                            </div>

                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <p className={`text-lg transition-all duration-100 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-0'}`}>
                                    I build modern, responsive, and user-friendly websites that help businesses create a strong online presence. My focus is on delivering designs that not only look great but also attract and engage customers.
                                </p>
                                <p className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-0'}`}>
                                    With expertise in both front-end and back-end development, I create fast, reliable, and scalable web solutions. Every project is tailored to your business needs, ensuring your website works smoothly and supports your growth.
                                </p>
                            </div>

                            <div className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-0'}`}>
                                <div className="group">
                                    <p className='text-white font-semibold group-hover:text-green-400 transition-all duration-300'>
                                        Name
                                    </p>
                                    <p className='text-gray-300'>Marvin M. Ramos</p>
                                </div>
                                <div className="group">
                                    <p className='text-white font-semibold group-hover:text-green-400 transition-all duration-300'>
                                        Phone
                                    </p>
                                    <p className='text-gray-300'>09052885214</p>
                                </div>
                                <div className="group">
                                    <p className='text-white font-semibold group-hover:text-green-400 transition-all duration-300'>
                                        Location
                                    </p>
                                    <p className='text-gray-300'>Brgy. Apopong., General Santos City</p>
                                </div>
                                <div className="group">
                                    <p className='text-white font-semibold group-hover:text-green-400 transition-all duration-300'>
                                        Email
                                    </p>
                                    <p className='text-gray-300'>career.marvinramos@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-1100">
                                <button className='bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105'>
                                    DOWNLOAD
                                </button>
                                <button className='border-2 border-slate-600 text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium hover:scale-105'>
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;