import React from 'react'
import { MoveRight } from "lucide-react"
import Link from "next/link";

export const ContactButton = () => {
  return (
    <>
      <Link
        href="#contact" className='font-medium bg-button text-high-contrast px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 hover:bg-hover transition-all shadow-lg hover:shadow-2xl'>
        Contact <MoveRight />
      </Link>
    </>
  )
}
