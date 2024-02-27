"use client"
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import TopWave from "@/public/wavetop.svg"
import BottomWave from "@/public/bottomwave.svg"

export const Marquee = () => {

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -500])

    return (
        <>
            <Image
                className='w-full select-none'
                src={TopWave}
                quality={95}
                alt='Green wave on top of the marquee'
            />
            <section className='w-full  overflow-hidden whitespace-nowrap bg-high-contrast'>
                <motion.h2
                    className='text-[4rem] sm:text-[8rem] font-bold fot-mont text-bg uppercase italic'
                    style={{ x }}
                >
                    Design - Création - Dévelopement
                </motion.h2>
            </section>
            <Image
                className='w-full select-none'
                src={BottomWave}
                quality={95}
                alt='Green wave on bottom of the marquee'
            />
        </>
    )
}
