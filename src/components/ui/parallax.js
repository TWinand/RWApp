"use client"
import React from "react"
import { motion } from 'framer-motion'

export function Parallax({ id, modStyle, src, children }) {
    return (
        <motion.div id={id} className={`${modStyle} w-full bg-fixed bg-center bg-no-repeat bg-cover z-0 items-center justify-between text-center`} style={{ backgroundImage: `url(${src})` }}>

            {children}

        </motion.div>
    )
}