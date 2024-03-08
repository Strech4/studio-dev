import { Header } from '@/components/templates/Header'
import React from 'react'

export const metadata = {
    title: "Studio-dev | Templates"
}

export default function page() {
    return (
        <>
            <main className="flex flex-col items-center">
                <Header />
            </main>
        </>
    )
}
