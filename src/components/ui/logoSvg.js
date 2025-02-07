"use client"
import React from "react"
import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoImage from '../../../public/img/SVG/RWLogo.svg'

export function LogoSvg() {

    return (
        <motion.div className="relative grid grid-cols-3 align-middle p-20 justify-items-center">
            <Image
                src={LogoImage.src}
                width={35}
                height={35}
                alt="RW-Elektrotechnik Logo" style={{}} className="relative rotate-[0deg] -skew-x-[20deg] -skew-y-[10deg] col-start-2 col-span-1 size-96" />
        </motion.div >
    );
}