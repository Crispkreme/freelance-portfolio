import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Skill from '@/components/skill';
import Project from '@/components/project';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Welcome() {
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
