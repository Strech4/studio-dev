"use client"
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import clsx from 'clsx';

export const Header = () => {

    const { ref, inView } = useInView({
        threshold: 0.5
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('/templates');
        }
    }, [inView])

    return (
        <header className='px-4' ref={ref}>
            <motion.h1
                className='text-center text-6xl md:text-8xl lg:text-9xl font-extrabold font-mont text-transparent bg-clip-text bg-gradient-to-r from-high-contrast via-high-contrast/80 to-high-contrast tracking-wide'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                Studio-dev
            </motion.h1>
            <motion.p
                className={clsx(
                    'text-4xl md:text-5xl lg:text-6xl mt-3 font-extrabold font-mont tracking-wide text-center',
                    'text-transparent bg-clip-text bg-gradient-to-r from-high-contrast via-high-contrast/80 to-high-contrast'
                )}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                Templates
            </motion.p>
            <motion.p
                className='max-w-5xl mt-7 px-4 text-xl font-mont !leading-[1.5] sm:text-3xl md:text-4xl text-center text-low-contrast'
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Découvrez nos templates et trouvez celui qui correspond le mieux à votre projet et donnez vie à votre vision en un rien de temps !
            </motion.p>
        </header>
    )
}
