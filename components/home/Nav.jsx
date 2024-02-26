"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

const links = [
    { name: "Accueil", link: "#home" },
    { name: "A propos", link: "#about" },
    { name: "Hébergement", link: "#hosting" },
    { name: "Contact", link: "#contact" },
]

export const Nav = () => {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <header className='relative z-40'>
            <motion.div
                className='fixed top-0 left-1/2 -translate-x-1/2 h-20 w-full rounded-none bg-ui-bg/70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.5rem] sm:w-[36rem] sm:rounded-full'
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }} 
            >
            </motion.div>
            <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                 <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-high-contrast sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                    {links.map((link, i) => (
                        <motion.li 
                            key={i} 
                            className='h-3/4 flex items-center justify-center relative'
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }} 
                        >
                            <Link 
                                className={clsx('flex w-full items-center justify-center px-3 py-3')}
                                href={link.link}
                                onClick={() => {
                                    setActiveSection(link.link)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                    {link.name}

                                    {link.link === activeSection && (
                                        <motion.span 
                                            className='bg-hover rounded-full absolute inset-0 -z-10'
                                            layoutId='activeSection'
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        ></motion.span>
                                    )}
                            </Link>
                        </motion.li>
                    ))}
                 </ul>
            </nav>
        </header>
    )
}