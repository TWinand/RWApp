"use client"
import React from "react"
import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoImage from '../../../public/img/SVG/RWLogo.svg'

export function LogoSvg() {

    return (
        <motion.div className="">
            <Image
                src={LogoImage.src}
                width={50}
                height={50}
                alt="RW-Elektrotechnik Logo" style={{}} className="bg-blue-900" />
        </motion.div >
    );
}