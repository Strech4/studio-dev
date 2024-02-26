"use client"
import Image from "next/image";
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { Server, ShieldCheck, Wrench } from "lucide-react";
import { ContactButton } from "../ContactButton";
import clsx from "clsx";


export const Hosting = () => {

    const data = [
        {
            title: "Hébergement",
            text: "Flexible pour tous les sites, quels que soient leur taille ou leur complexité, offrant une solution efficace pour chaque besoin.",
            icon: <Server size={32} color="#16433C" />,
            class: ""
        },
        {
            title: "Sécurité",
            text: "Sécurité maximale pour votre site web grâce à notre hébergement, protégeant ansi vos données comme il le faudrais ",
            icon: <ShieldCheck size={32} color="#16433C" />,
            class: "bg-hover/40 rounded-2xl"
        },
        {
            title: "Maintenence",
            text: "Nous recevons une alerte à chaque fois que le site web est en difficulté pour une maintenance efficace. 6/7 24/24",
            icon: <Wrench size={32} color="#16433C" />,
            class: ""
        },
    ]

    const { ref, inView } = useInView({
        threshold: 0.5
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('#hosting');
        }
    }, [inView])

    return (
        <section
            ref={ref}
            id='hosting'
            className='sm:max-w-6xl w-full px-6 sm:px-4 scroll-mt-28 '
        >

            <div className="flex flex-col md:grid grid-cols-2 gap-7">
                <div>
                    <h1 className="mb-8 text-high-contrast text-2xl md:text-4xl font-bold tracking-wide !leading-[1.3]">
                        Performance assurée hébergement sur mesure
                    </h1>
                    <p className="mb-10 text-low-contrast text-lg md:text-xl tracking-wide !leading-[1.6]">
                        Assurez la stabilité de n'importe lequel de vos projets web grâce à un hébergement adapté, créé sur mesure. Une infrastructure robuste pour garantir des performances optimales. Offrez à vos idées le support qu'elles méritent.
                    </p>
                    <div className="flex">
                        <ContactButton />
                    </div>
                </div>

                <div className="grid grid-rows-3 gap-y-4 p-5">
                    {data.map((item, index) => (
                        <div className={clsx(`flex p-2`, item.class)} key={index}>
                            <div className="flex justify-center items-center mr-5">
                                <div className="rounded-full p-4 bg-ui-bg">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-center items-left gap-1">
                                <h1 className="text-high-contrast text-lg md:text-xl font-bold ">
                                    {item.title}
                                </h1>
                                <p className="text-low-contrast text-lg !leading-6">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}
