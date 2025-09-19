import { useState, useEffect } from 'react';
import * as Icons from "lucide-react";

const contact = () => {

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.intersectionRatio) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById("contact");
        if(element) observer.observe(element);
        return () => observer.disconnect();
        
    }, []);

    type ContactItem = {
        icon: string;
        info: string;
        title: string;
    };

    const contacts: ContactItem[] = [
        { icon: "Mail", info: "career.marvinramos@gmail.com", title: "Email" },
        { icon: "Phone", info: "09052885214", title: "Phone" },
        { icon: "MapPin", info: "Brgy. Apopong., General Santos City", title: "Address" },
    ];

    return (
        <section id="contact" className="py-24 bg-slate-800 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 tranform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <p className="text-green-400 font-semibold text-lg mb-4">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Got a project in mind? Let's turn your vision into reality—share your ideas and let's make them happen!
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <h3 className="text-2xl font-bold text-white mb-16">
                            Contact Information
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            I'm always open to fresh opportunities and exciting projects! Got a question, idea, or just want to say hello? Drop me a message—I'd love to hear from you and I'll do my best to reply!
                        </p>
                        <div className="space-y-4">
                            {contacts.map((contact, contactIndex) => {
                                const Icon = (Icons as any)[contact.icon] || Icons.HelpCircle;

                                return <div key={contactIndex} className={`flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointer transform hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${contactIndex * 200 + 300}ms`}}>
                                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white group-hover:text-gray-400 transition-all duration-300">{contact.title}</p>
                                        <p className="text-gray-300 group-hover:text-gray-200 transition-all duration-300">{contact.info}{" "}</p>
                                    </div>
                                </div>;
                            })}
                        </div>

                        <div className={`pt-8 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                            <h4 className="text-lg font-semibold text-white mb-4">
                                Follow Me
                            </h4>
                            <div className="flex gap-4">
                                {[Icons.Github, Icons.Linkedin, Icons.Facebook].map((Icon, iconIndex) => {
                                    return (
                                        <a className={`w-12 h-12 bg-slate-900 text-gray-300 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group border border-slate-700 hover:border-green-500 hover:scale-110 hover:rotate-6`}>
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className=" bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Send Message
                            </h3>

                            <form action="#">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label htmlFor="" className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">Full Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 duration-300 hover:border-green-500/50" placeholder="Your Name" required/>
                                    </div>
                                    <div className="group">
                                        <label htmlFor="" className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 duration-300 hover:border-green-500/50" placeholder="Your Email" required/>
                                    </div>
                                </div>
                                <div className="group mt-5">
                                    <label htmlFor="" className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">Subject</label>
                                    <input type="text" id="subject" name="subject" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 duration-300 hover:border-green-500/50" placeholder="Subject" required/>
                                </div>
                                <div className="group mt-5">
                                    <label htmlFor="" className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 duration-300 hover:border-green-500/50" placeholder="Message" required/>
                                </div>
                                <button className="mt-5 w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group">
                                    Send Message <Icons.Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact