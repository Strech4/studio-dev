import React from 'react'
import SectionHeading from '../home/SectionHeading'
import Image from "next/image"
import ImgTemplates from "@/public/templatesOne.png";
import ImgSoon from "@/public/commingSoon.png"
import PortfolioTemplate from "@/public/PortfolioTemplate.png"
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";

export const TemplatesList = () => {

    const data = [
        {
            title: "Neutral",
            author: "SD",
            by: "Studio-dev",
            text: "Conçu spécialement pour mettre en valeur votre travail de manière élégante et professionnelle.",
            image: ImgTemplates,
            linkIcon: false,
            link: "",
        },
        {
            title: "Clasique Portfolio",
            author: "SD",
            by: "Studio-dev",
            text: "Un portfolio Classique, mais modulable à l'infini pour présenter vos projets et compétences.",
            image: PortfolioTemplate,
            linkIcon: true,
            link: "https://portfolio-template-ecru.vercel.app/"
        },
        {
            title: "Bientôt disponible",
            author: "SD",
            by: "",
            text: "Découvrez bientôt de nouveaux templates pour enrichir votre expérience et répondre à vos besoins de manière innovante.",
            image: ImgSoon,
            linkIcon: false,
            link: "",
        },
    ]

    return (
        <section className='px-10 mb-32 max-w-6xl w-full'>

            <SectionHeading value="Templates" />

            <div className='mt-12 flex flex-col md:flex-row gap-6'>

                {data.map((card, index) => (
                    <div key={index} className="mx-auto md:mx-0 max-w-sm rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover hover:scale-105 transition-all shadow-xl hover:shadow-2xl">
                        <Image
                            className='rounded-t-xl aspect-video'
                            src={card.image}
                        />
                        <div className="p-5">
                            <h5 className="mb-2 text-high-contrast font-bold tracking-wide text-lg md:text-xl ">
                                {card.title}
                            </h5>

                            <p className="mb-3 text-low-contrast text-base">
                                {card.text}
                            </p>
                        </div>
                        <div className='flex p-5'>
                            <p className='text-base text-high-contrast font-medium'>
                                {card.by}
                            </p>
                            {card.linkIcon ? (
                                <div className='ml-auto hover:scale-110 transition-all'>
                                    <Link
                                        href={card.link}
                                        target='_blank'
                                    >
                                        <GoLinkExternal size={20} color='#16433C' />
                                    </Link>
                                </div>
                            ) : null}

                        </div>
                    </div>
                ))}

            </div>

        </section>
    )
}
