"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { Menu, X } from "lucide-react"

const links = [
    { name: "Accueil", link: "/#home", linkUI: "#home" },
    { name: "A propos", link: "/#about", linkUI: "#about" },
    { name: "Hébergement", link: "/#hosting", linkUI: "#hosting" },
    { name: "Contact", link: "/#contact", linkUI: "#contact" },
    { name: "Templates", link: "/templates", linkUI: "#templates" }
]

export const Nav = () => {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [open, setOpen] = useState(false)

    const handleNav = () => {
        setOpen(!open)
    }

    return (
        <motion.nav 
            className='fixed z-50 top-0 h-16 bg-ui-bg/70 backdrop-blur-[0.5rem] w-full shadow-lg shadow-black/[0.03]'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <div className='flex justify-between items-center max-w-5xl mx-auto h-full px-10 sm:px-5'>
                <div className=''>
                    <p className='text-lg lg:text-xl text-high-contrast font-bold'>
                        Studio-dev
                    </p>
                </div>
                <div>
                    <ul className='hidden md:flex'>
                        {links.map((link, i) => (
                            <motion.li
                                key={i}
                                className='flex items-center justify-center relative text-high-contrast'
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    className={clsx('flex w-full items-center justify-center px-3 py-1')}
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
                </div>
                <div
                    onClick={handleNav}
                    className={`md:hidden cursor-pointer transition-all ${open ? 'ease-out' : 'ease-in'} duration-500`}
                >
                    {open ? <X size={28} color='#16433C' /> : <Menu size={28} color='#16433C' />}
                </div>
            </div>
            <div className={clsx(
                'backdrop-blur-[0.5rem] bg-ui-bg/70',
                open ?
                    'fixed left-0 top-16 w-[100%] md:hidden h-screen px-10 ease-in duration-300'
                    : 'fixed left-[-100%] top-16 px-10 ease-in duration-300 h-screen'
            )}>
                <ul className='flex flex-col gap-4'>
                    {links.map((link, i) => (
                        <li 
                        className="text-lg"
                            key={i}
                        >
                            <Link 
                                href={link.link}
                                onClick={() => {
                                    setActiveSection(link.link)
                                    setTimeOfLastClick(Date.now())
                                    setOpen(!open)
                                }}
                            >
                                {link.name}
                            </Link>
                           
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    )
}
