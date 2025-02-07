"use client"
import React from "react"
import { motion } from 'framer-motion'

export function Parallax({ id, modStyle, src, children }) {
    return (
        <motion.div className={`${modStyle} w-full bg-fixed bg-center bg-no-repeat bg-cover z-0`} style={{ backgroundImage: `url(${src})` }}>
            {children}
        </motion.div>
    )
}