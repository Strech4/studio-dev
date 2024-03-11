import React from 'react';
import { FaPaintBrush } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { SiVisualstudiocode } from "react-icons/si";
import Image from "next/image"
import Pattern from "@/public/pattern.svg";

export const TemplatesCard = () => {

    return (
        <div className="col-span-6 sm:col-span-2 flex flex-col rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover">

            <div className='w-full p-5 relative z-20 overflow-hidden'>
                <h5 className='tracking-widest text-center text-9xl font-black text-high-contrast mt-3'>
                    7J
                </h5>

                <div className='absolute top-0 left-0 flex justify-center flex-wrap w-full -z-10 p-3'>
                    <Image 
                        quality={50}
                        src={Pattern}
                    />
                </div>
            </div>

            <div className='w-full py-5 px-4'>
                <h4 className='text-high-contrast font-bold tracking-wide text-2xl sm:text-3xl'>
                    Livraison rapide
                </h4>
                <p className='text-low-contrast mt-4 text-xl'>
                    Pour l'achat d'un de nos templates, démarrer votre projet sans attendre.
                </p>
            </div>
        </div>
    )
}

export const TemplatesCard2 = () => {

    return (
        <div className="rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover w-full md:w-1/2">
            <div className="px-6 py-10 flex gap-8 flex-wrap relative z-20 overflow-hidden">
                <div className="bg-ui-bg p-3 rounded-2xl">
                    <AiFillCode color="#16433C" size={60} />
                </div>
                <div className="bg-ui-bg p-3 rounded-2xl">
                    <SiVisualstudiocode color="#16433C" size={60} />
                </div>
                <div className="bg-ui-bg p-3 rounded-2xl">
                    <FaPaintBrush color="#16433C" size={60} />
                </div>

                <div className='absolute top-0 left-0 flex justify-center flex-wrap w-full -z-10 p-5'>
                    <Image
                        className=''
                        quality={50}
                        src={Pattern}
                    />
                </div>
            </div>
            <div className='w-full py-5 px-6'>
                <h4 className='text-high-contrast font-bold tracking-wide text-2xl sm:text-3xl !leading-[1.3]'>
                    Made in Studio-dev
                </h4>
                <p className='text-low-contrast mt-4 text-xl'>
                    Découvrez notre collection exclusive de templates originaux, conçus avec créativité pour vous offrir une expérience unique et personnalisée.
                </p>
            </div>
        </div>
    )
}
