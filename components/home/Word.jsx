"use client"
import React, { Children, useRef } from 'react'
import { useScroll, motion, useTransform } from "framer-motion";

export const Paragraph = ({value}) => {

    const elm = useRef(null)
    const { scrollYProgress } = useScroll({
        target: elm,
        offset: ["start 0.9", "start 0.25"],
    })

    const words = value.split(" ");

    return (
        <motion.p
            ref={elm}
            className='text-3xl sm:text-4xl font-mont text-low-contrast mx-auto my-5 flex flex-wrap leading-[1] px-4'
            
        >
            {
                words.map( (word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length)
                    return <Word 
                                key={i} 
                                range={[start, end]} 
                                progress={scrollYProgress}

                            >
                                    {word}
                            </Word>
                })
            }
        </motion.p>
    )
}

const Word = ({children, range, progress}) => {

    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span className='mr-3 mt-3 relative'>
            <span className='absolute opacity-[0.1]'>{children}</span>
            <motion.span 
                style={{opacity}}
            >
                    {children}
            </motion.span>
        </span>
    )
}
