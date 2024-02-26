"use client"
import React, { useEffect, useRef } from 'react'
import Image from "next/image";
import Responsive from "@/public/ResponsiveSvg.svg"
import Maintenence from "@/public/maintenence.svg"
import { useScroll, motion, useTransform } from "framer-motion";


export const About2 = () => {

    const card = useRef(null);

    const { scrollYProgress } = useScroll({
        target: card,
        offset: ["0 1", '1.33 1']
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const OpacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


    return (
        <section className='max-w-6xl'>
            

            <motion.div
                className='mb-3 sm:mb-12'
                ref={card}
                style={{
                    scale: scaleProgress,
                    opacity: OpacityProgress,
                }}
            >
                <div
                    className='w-full flex flex-col px-4 md:px-0 md:grid grid-cols-2 gap-3'
                >

                    <div className='bg-ui-bg rounded-xl p-4 flex flex-col justify-center items-left sm:maw-w-1/2'>
                        <h3 className='text-high-contrast text-2xl md:text-4xl font-bold mb-2'>Référencement</h3>
                        <p className='text-low-contrast text-lg md:text-2xl'>
                            Studio-Dev accorde une attention particulière au référencement, une étape cruciale pour maximiser la visibilité en ligne de votre entreprise. Un bon référencement assure une présence optimale sur les moteurs de recherche et accroît la notoriété de votre site.
                        </p>
                    </div>
                    <div>
                        <Image
                            src={Responsive}
                            quality={95}
                            alt='Image with 3 screen. One laptop Screen, one tablet screen and phone screen'
                        />
                    </div>
                </div>
            </motion.div>

            
            <div className='w-full flex flex-col px-4 md:px-0 md:grid grid-cols-2 gap-3 mb-3 sm:mb-12'>

                <div className='bg-ui-bg rounded-xl p-4 flex flex-col justify-center items-left sm:maw-w-1/2'>
                    <h3 className='text-high-contrast text-2xl md:text-4xl font-bold mb-2'>Refonte & maintenance</h3>
                    <p className='text-low-contrast text-lg md:text-2xl'>
                        Au-delà de la création, je me consacre à la refonte et à la maintenance de sites web. Confiez-moi l'évolution continue de votre présence en ligne pour des résultats durables et optimisés
                    </p>
                </div>

                <div className='flex justify-center'>
                    <Image
                        src={Maintenence}
                        quality={95}
                        alt='Image representing A Remake website'
                    />
                </div>

            </div>

        </section>
    )
}
