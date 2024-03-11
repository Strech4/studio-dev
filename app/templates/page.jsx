import { Divider } from '@/components/Divider'
import { Header } from '@/components/templates/Header'
import { TemplatesList } from '@/components/templates/TemplatesList'
import React from 'react'

export const metadata = {
    title: "Studio-dev | Templates"
}

export default function page() {
    return (
        <>
            <main className="flex flex-col items-center">
                <Header />
                <Divider />
                <TemplatesList />
                {/* Only in dev mode */}
                {/* <div className='h-screen'></div> */}
            </main>
        </>
    )
}
