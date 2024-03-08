"use client"
import React, { useEffect, useRef } from 'react';

export const TemplatesCard = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const pointSize = 7;
        const maxPoints = 9;
        const numPointsX = Math.min(Math.ceil(width / pointSize), maxPoints);
        const numPointsY = Math.min(Math.ceil(height / pointSize), maxPoints);

        for (let y = 0; y < numPointsY; y++) {
            for (let x = 0; x < numPointsX; x++) {
                const point = document.createElement("div");
                point.classList.add("point");
                point.style.width = `${pointSize}px`;
                point.style.height = `${pointSize}px`;
                point.style.left = `${x * pointSize}px`;
                point.style.top = `${y * pointSize}px`;
                point.style.background = '#16433C';
                point.style.borderRadius = "100%"
                point.style.opacity = "0.4"
                container.appendChild(point);
            }
        }
    }, []);

    return (
        <div className="col-span-6 sm:col-span-2 flex flex-col rounded-xl bg-gradient-to-b from-hover/70 via-hover/80 to-hover">

            <div className='w-full p-5 relative z-20 overflow-hidden'>
                <h5 className='tracking-widest text-center text-9xl font-black text-high-contrast mt-3'>
                    7J
                </h5>

                <div ref={containerRef} className='absolute top-0 left-0 w-full h-full flex justify-center flex-wrap gap-8 p-4 -z-10'></div>
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
