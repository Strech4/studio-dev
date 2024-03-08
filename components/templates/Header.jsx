import React from 'react'

export const Header = () => {
  return (
    <header className='px-4 text-nowrap'>
        <h1 className='text-6xl md:text-8xl lg:text-9xl font-extrabold font-mont text-high-contrast tracking-wide'>
            Studio-dev
        </h1>
        <p className='text-4xl md:text-5xl lg:text-6xl mt-3 font-extrabold font-mont text-high-contrast tracking-wide'>
            Templates
        </p>
        <p className='mt-32 text-3xl text-low-contrast tracking-wide'>
          Build in progress... Come back later!
        </p>
    </header>
  )
}
