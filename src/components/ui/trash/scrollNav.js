"use client"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faHouse, faBolt, faNetworkWired, faUser, faBars, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoImage from '../../../public/img/SVG/RWLogo.svg'


export function ScrollNav() {


    return (
        <motion.div>
            <motion.nav className="absolute w-full bg-gradient-to-r from-slate-900 to-slate-600 grid grid-cols-3 gap-4 place-items-center">
                <motion.div className="grid grid-cols-3 gap-2 h-14">
                    <Image
                        src={LogoImage.src}
                        width={0}
                        height={0}
                        alt="RW-Elektrotechnik Logo" className=" place-self-center h-14 w-14" />

                    <motion.h1 className="text-center text-orange-400 text-2xl drop-shadow-lg">RW-Elektrotechnik</motion.h1>
                    <motion.div className="text-orange-400 text-sm drop-shadow-lg">GmbH & Co. KG.</motion.div>
                </motion.div>


                <motion.div className="grid grid-cols-5 gap-4 w-2/5 ">
                    <a href="#home"><FontAwesomeIcon className="text-orange-400 z-40 " icon={faHouse} /></a>
                    <a href="#pv"><FontAwesomeIcon className="text-orange-400 z-40 " icon={faSolarPanel} /></a>
                    <a href="#elektro"><FontAwesomeIcon className="text-orange-400 z-40 " icon={faBolt} /></a>
                    <a href="#edv"><FontAwesomeIcon className="text-orange-400 z-40 " icon={faNetworkWired} /></a>
                    <a href="#info"><FontAwesomeIcon className="text-orange-400 z-40 " icon={faUser} /></a>
                </motion.div>

                <motion.div>
                    <motion.a className="text-lg text-white" href="tel:05233951538" ><FontAwesomeIcon className="text-orange-400" icon={faPhone} /> 05233 - 95 15 38</motion.a>
                </motion.div>

            </motion.nav>
        </motion.div>
    );
}