"use client"
import React from 'react'
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import Link from "next/link"
import { MoveRight } from "lucide-react"

export const TemplatesLink = () => {

    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <>
            <Link 
                className="flex items-center gap-3 transition-all hover:scale-105 " 
                href="/templates"
                onClick={() => {
                    setActiveSection("/templates")
                    setTimeOfLastClick(Date.now())
                }}
            >
                <p className="text-high-contrast text-xl font-medium tracking-wide ">
                    Explorez maintenant
                </p>
                <MoveRight color="#16433C" size={40} />
            </Link>
        </>
    )
}
