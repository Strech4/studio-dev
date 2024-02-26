"use client"
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring} from 'framer-motion'

export const Cursor = () => {
    const cursorSize = 32
    const mouse = { 
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }
    

    useEffect(() => {

        window.addEventListener('mousemove', manageMouseMove)
        
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    }, [])

  return (
    <motion.div
        className='bg-high-contrast h-8 w-8 rounded-full fixed z-50 hidden md:block'
        style={{ left: smoothMouse.x, top: smoothMouse.y, pointerEvents: 'none' }}
    ></motion.div>
  )
}
