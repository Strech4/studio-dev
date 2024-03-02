"use client"
import React, { useEffect, useRef } from 'react'
import { FormContact } from '../FormContact'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import SectionHeading from './SectionHeading';

import { useScroll, motion, useTransform } from "framer-motion";

export const Contact = () => {

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
            <div>
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
            </div>


        </section>
    )
}
