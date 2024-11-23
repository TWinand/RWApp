"use client"
import React from "react"
import { motion } from 'framer-motion'

export function Parallax({ height, src, children }) {
    return (
        <motion.div className={`${height} w-full bg-fixed bg-center bg-no-repeat bg-cover -z-50`} style={{ backgroundImage: `url(${src})` }}>
            {children}
        </motion.div>
    )
}