"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const Divider = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
        className='bg-separator my-12 sm:my-24 h-16 w-1 rounded-full '
    >
    </motion.div>
  )
}
