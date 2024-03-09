"use client"
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import Link from "next/link";
import { MoveRight, Github } from "lucide-react"
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { ContactButton } from '../ContactButton';

export const Header = () => {

    const {ref, inView} = useInView({
        threshold: 0.5
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection('/#home');
        }
    }, [inView])

  return (
    <section className=' sm:mb-0 scroll-mt-36' ref={ref}>
        <div className='flex items-center justify-center'>
            <motion.div 
                className=''
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type:"tween",
                    duration: 0.5,
                }}

            >
                <h1 className='text-5xl md:text-8xl lg:text-9xl font-extrabold font-mont text-high-contrast tracking-wide text-nowrap'>
                    Studio-dev
                </h1>
            </motion.div>
        </div>
        <div>
            <motion.h3 
                className='text-center text-high-contrast my-4 md:my-8 font-semibold text-lg sm:text-2xl md:text-3xl tracking-wide'
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type:"tween",
                    duration: 0.5,
                }}
            >
                Design - Création - Dévelopement
            </motion.h3>
        </div>
        <motion.p 
            className=' max-w-5xl mt-4 mb-10 px-4 text-lg font-mont !leading-[1.5] sm:text-3xl md:text-4xl text-center text-low-contrast'
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
        >
            Conception sur mesure de sites vitrine, portfolios et e-commerce. Hébergement adapté à vos besoins pour assurer une présence en ligne optimale.
        </motion.p>
        <motion.div
            className='flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1
            }}
        >
            <ContactButton />

        </motion.div>
    </section>
  )
}
