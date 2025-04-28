"use client"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoImage from '../../../public/img/SVG/RWLogo.svg'



export function Logo() {

    return (
        <motion.div className="relative flex-no-wrap flex w-full items-center justify-between z-50">
            <motion.nav initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="fixed items-center justify-center flex top-0 left-0 shadow-lg">
                <motion.div className="relative flex items-center justify-between bg-gradient-to-r from-blue-950 to-sky-800 rounded-lg">

                    <div className="grid grid-rows-3 grid-cols-4 items-center justify-center align-middle inline-block pr-2 rounded-lg shadow-[0px_0px_66px_2px_rgba(255,147,46,0.8)]" >

                        <div className="absolute inset-0 overflow-hidden">
                            <div className="h-20 w-60 bg-[linear-gradient(to_right,#D3D3D340_1px,transparent_1px),linear-gradient(to_bottom,#D3D3D340_1px,transparent_1px)] bg-[size:20px_20px] rotate-45 origin-center"></div>
                        </div>

                        <Image
                            src={LogoImage.src}
                            width={0}
                            height={0}
                            alt="RW-Elektrotechnik Logo" className="row-span-3 w-24 h-24 inline bg-blue-950" />

                        <motion.h1 className="col-span-3 text-center text-orange-400 text-2xl font-bold drop-shadow-lg">RW-Elektrotechnik</motion.h1>
                        <motion.h2 className="col-span-3 col-start-4 col-end-4 text-end text-orange-400 text-sm font-bold drop-shadow-lg">GmbH & Co. KG.</motion.h2>
                        <motion.a className="col-span-3 text-center text-lg text-white drop-shadow-lg" href="tel:05233951538" ><FontAwesomeIcon className="text-orange-400" icon={faPhone} /> 05233 - 95 15 38</motion.a>
                    </div>
                </motion.div>
            </motion.nav>
        </motion.div >
    );
}