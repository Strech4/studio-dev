import React from "react"
import { TemplatesCard } from './TemplatesCard';
import { SiNextdotjs, SiTailwindcss, SiReact, SiFramer, SiPrisma, SiVisualstudiocode } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { HiOutlineWindow } from "react-icons/hi2";
import { TemplatesLink } from "./TemplatesLink";
import { PiHandWaving, PiMagnifyingGlassFill } from "react-icons/pi";

export const Templates = () => {

    const iconSize = 60

    const Icons = [
        { icon: <SiNextdotjs size={iconSize} color="#16433C" /> },
        { icon: <SiReact size={iconSize} color="#16433C" /> },
        { icon: <SiTailwindcss size={iconSize} color="#06b6d4" /> },
        { icon: <SiFramer size={iconSize} color="#16433C" /> },
        { icon: <SiPrisma size={iconSize} color="#16433C" /> },
    ];


    return (

        <section className='px-10 max-w-6xl w-full mt-10'>

            <div className="grid mdb:grid-cols-6 gap-6">
                <TemplatesCard />

                <div className="col-span-6 sm:col-span-4 rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover ">
                    <div className="px-6 py-10 flex gap-8 flex-wrap">
                        {Icons.map((icons, index) => (
                            <div
                                className="bg-ui-bg/80 p-3 rounded-2xl"
                                key={index}
                            >
                                {icons.icon}
                            </div>
                        ))}
                    </div>
                    <div className='w-full py-5 px-6'>
                        <h4 className='text-high-contrast font-bold tracking-wide text-2xl sm:text-3xl !leading-[1.3]'>
                            Les meilleures technologies.
                        </h4>
                        <p className='text-low-contrast mt-4 text-xl'>
                            J'utilise les technologies les plus avancées et les plus stables pour garantir des performances optimales et une expérience utilisateur exceptionnelle.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row gap-6 ">

                <div className="rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover w-full md:w-1/2">
                    <div className="px-6 py-10 flex gap-8 flex-wrap">
                        <div className="bg-ui-bg/80 p-3 rounded-2xl">
                            <HiOutlineWindow color="#16433C" size={60} />
                        </div>
                        <div className="bg-ui-bg/80 p-3 rounded-2xl">
                            <PiMagnifyingGlassFill color="#16433C" size={60} />
                        </div>
                    </div>

                    <div className='w-full py-5 px-6'>
                        <h4 className='text-high-contrast font-bold tracking-wide text-2xl sm:text-3xl !leading-[1.3]'>
                            Explorez les templates
                        </h4>
                        <p className='text-low-contrast mt-4 text-xl'>
                            Découvrez notre collection exclusive de templates originaux
                        </p>
                        <div className="mt-3">
                           <TemplatesLink />
                        </div>
                    </div>

                </div>

                <div className="rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover w-full md:w-1/2">
                    <div className="px-6 py-10 flex gap-8 flex-wrap">
                        <div className="bg-ui-bg/80 p-3 rounded-2xl">
                            <AiFillCode color="#16433C" size={60} />
                        </div>
                        <div className="bg-ui-bg/80 p-3 rounded-2xl">
                            <SiVisualstudiocode color="#16433C" size={60} />
                        </div>
                        <div className="bg-ui-bg/80 p-3 rounded-2xl">
                            <PiHandWaving color="#16433C" size={60} />
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

            </div>

        </section>
    )
}
