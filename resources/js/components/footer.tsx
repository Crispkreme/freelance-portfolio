
import { ArrowUp, Laptop } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

const footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="bg-slate-900 text-white py-12 border-t border-slate-800 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 tranform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:text-start text-center justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="text-2xl font-bold mb-2 group cursor-pointer">
                            <span className="text-green-500 group-hover:text-green-400 transition-all duration-300">
                                MARVIN
                            </span>
                            <span className="text-white group-hover:text-green-400 transition-all duration-300">
                                RAMOS.
                            </span>
                        </div>
                        <TypeAnimation
                            sequence={[
                                'WEB DEVELOPER',
                                3000,
                                'PHP DEVELOPER',
                                3000,
                                'LARAVEL DEVELOPER',
                                3000,
                                'WORDPRESS DEVELOPER',
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-gray-400 hover:text-gray-300 transition-all duration-300 text-2xl inline-block"
                        />
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>Prepared</span>
                            <Laptop className="w-4 h-4 text-green-500 fill-current" />
                            <span>by Marvin Ramos</span>
                        </div>
                        <button className="w-10 h-10 bg-green-600 rounded-full flex justify-center items-center hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:rotate-12 group" onClick={scrollToTop} >
                            <ArrowUp />
                        </button>
                    </div>
                </div>
                <div className="mt-8 text-gray-500 text-sm text-center">
                    &#64; { new Date().getFullYear() } Marvin Ramos. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default footer