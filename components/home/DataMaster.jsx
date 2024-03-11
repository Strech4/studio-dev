import React from 'react'
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs, SiPrisma } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { MdStopScreenShare } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import Image from "next/image"
import Pattern from "@/public/pattern.svg";
import SectionHeading from './SectionHeading';

export const DataMaster = () => {

    const iconSize = 60

    const Icons = [
        { icon: <BiLogoPostgresql size={iconSize} color="#16433C" /> },
        { icon: <SiPrisma size={iconSize} color="#16433C" /> },
        { icon: <SiNextdotjs size={iconSize} color="#16433C" /> },
        { icon: <FaDatabase size={iconSize} color="#16433C" /> },
    ];

    return (
        <section className='px-10 max-w-6xl w-full '>

            <SectionHeading value="Vos données" />

            <div className='grid grid-cols-5 gap-6'>
                <div className='col-span-5 md:col-span-3 rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover'>

                    <div className="px-6 py-10 flex gap-8 flex-wrap relative z-20 overflow-hidden">
                        {Icons.map((icon, index) => (
                            <div className='p-3 bg-ui-bg rounded-2xl' key={index}>
                                {icon.icon}
                            </div>
                        ))}

                        <div className='absolute top-0 left-0 flex justify-center flex-wrap w-full -z-10 p-4'>
                            <Image
                                className='aspect-auto'
                                quality={50}
                                src={Pattern}
                            />
                        </div>

                    </div>

                    <div className='w-full py-5 px-6'>
                        <h4 className='text-high-contrast font-bold tracking-wide text-2xl sm:text-3xl !leading-[1.3]'>
                            Maître de vos données
                        </h4>
                        <p className='text-low-contrast mt-4 text-xl'>
                            Nous accordons une grande importance à la confidentialité et à la sécurité des données de nos clients. Avec nos solutions web, vous gardez le contrôle total sur vos données.
                        </p>
                    </div>

                </div>

                <div className='col-span-5 md:col-span-2 rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover'>
                    
                    <div className='px-6 py-10 flex gap-8 flex-wrap relative z-20 overflow-hidden'>
                        <div className='p-3 bg-ui-bg rounded-2xl'>
                            <MdStopScreenShare size={iconSize} color="#16433C" />
                        </div>
                        <div className='p-3 bg-ui-bg rounded-2xl'>
                            <GrSecure size={iconSize} color="#16433C" />
                        </div>

                        <div className='absolute top-0 left-0 flex justify-center flex-wrap w-full -z-10 p-4'>
                            <Image
                                className='aspect-auto'
                                quality={50}
                                src={Pattern}
                            />
                        </div>
                    </div>

                    <div className='w-full py-5 px-6'>
                        <h4 className='text-high-contrast font-bold tracking-wide text-2xl sm:text-3xl !leading-[1.3]'>
                            intermédiaire ?
                        </h4>
                        <p className='text-low-contrast mt-4 text-xl'>
                            Il n'y a aucun intermédiaire entre vous et vos données. Une expérience transparente et sécurisée, où vous avez un contrôle total sur vos données.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}
