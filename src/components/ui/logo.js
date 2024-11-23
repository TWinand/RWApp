"use client"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoImage from '../../../public/img/logo.png'

export function Logo(style) {

    return (
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100 }} className="relative flex-no-wrap flex w-full items-center justify-between z-50">
            <motion.nav className="absolute top-5 right-5 items-center justify-center flex z-50 rounded-full p-2 border-2 border-neutral-50/20 bg-white hover:bg-blue-950 bg-opacity-10 backdrop-filter backdrop-blur-sm " >
                <motion.a href="tel:05233951538" className="text-white"><FontAwesomeIcon className="text-orange-400" icon={faPhone} /> 05233 - 95 15 38</motion.a>
                <Image
                    src={LogoImage.src}
                    width={35}
                    height={35}
                    alt="RW-Elektrotechnik Logo" className="m-1 shadow-lg shadow-black/30" />
            </motion.nav>
        </motion.div >
    );
}