import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/about';
import Skill from '@/components/Skill';
import Project from '@/components/Project';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/footer';

import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Welcome() {
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skill />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </>
    );
}
