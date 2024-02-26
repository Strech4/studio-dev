import React from 'react'

export const Footer = () => {
  return (
    <footer className='p-4 flex flex-col gap-1 text-center'>
        <p className='text-sm text-low-contrast'>
            © studio-dev tout droit réserver
        </p>
        <div className='flex flex-col justify-around'>
            <p className='text-sm text-low-contrast'>
                Crée avec NextJS 14 (app router) - tailwindcss - framer-motion - react-hook-form 
            </p>
            <p className='text-sm text-high-contrast'>
                Site web en développement
            </p>
        </div>
    </footer>
  )
}
