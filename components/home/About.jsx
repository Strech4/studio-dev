"use client"
import React, { useEffect } from 'react';
import { Paragraph } from './Word';
import { motion } from "framer-motion";
import SectionHeading from './SectionHeading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

const text = "De la création a la refonte en passant par la maintence de site web. Que vous recherchiez une vitrine élégante, un portfolio professionnel ou une boutique en ligne dynamique, Studio-dev donne vie à vos idées et vos projets sur le web."

export const About = () => {

    const {ref, inView} = useInView({
        threshold: 0.75
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection('#about');
        }
    }, [inView, setActiveSection, timeOfLastClick])
    
    return (
        <motion.section
            ref={ref}
            id='about'
            className='mb-28 max-w-5xl scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading value="A propos" />
            <Paragraph value={text} />
        </motion.section>
    )
}
