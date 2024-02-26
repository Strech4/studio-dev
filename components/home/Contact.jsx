"use client"
import React, { useEffect, useRef } from 'react'
import { FormContact } from '../FormContact'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import SectionHeading from './SectionHeading';

import { useScroll, motion, useTransform } from "framer-motion";

export const Contact = () => {

    //ANIMATION

    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["0 1", '1.33 1']
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const OpacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    // NAV ANIMATION

    const { ref, inView } = useInView({
        threshold: 0.5
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1200) {
            setActiveSection('#contact');
        }
    }, [inView])


    return (
        <section
            ref={ref}
            className='max-w-6xl w-full my-12 scroll-mt-28 px-4'
            id='contact'
        >
            <motion.div 
                ref={sectionRef}
                style={{
                    scale: scaleProgress,
                    opacity: OpacityProgress,
                }}
            >
                <SectionHeading value="Prendre contact" />
                <p className='text-center mb-8 text-low-contrast text-xl max-w-3xl mx-auto'>
                    Contactez-moi directement à l'adresse
                    {" "}
                    <span className='underline decoration-high-contrast underline-offset-4'>
                        contact@studio-dev.fr
                    </span>
                    {" "}
                    ou via le formulaire ci-dessous.
                </p>
                <FormContact />
            </motion.div>


        </section>
    )
}
