"use client"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faBolt, faNetworkWired, faUser, faBars, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoImage from '../../../public/img/logo.png'
import Link from "next/link";


//not finished

export function NavBar() {

    return (
        <motion.div className="relative flex-no-wrap flex w-full items-center justify-center z-50 top-10">

            <motion.nav className="fixed items-center justify-center flex bg-blue-950 text-white rounded-full ">

                <Image
                    src={LogoImage.src}
                    width={35}
                    height={35}
                    alt="RW-Elektrotechnik Logo" className="absolute left-0 size-16 shadow-lg shadow-black/30" />

                <div className="grid grid-cols-6 gap-4 m-4">
                    <h1>RW-Elektrotechnik</h1>
                    <Link href="#pv">Photovoltaik</Link>
                    <Link href="#elektro">Elektrotechnik</Link>
                    <Link href="#netz">Netzwerktechnik</Link>
                    <Link href="#kontakt">Kontakt</Link>
                    <motion.a href="tel:05233951538" className=""><FontAwesomeIcon className="text-orange-400" icon={faPhone} /> 05233 - 95 15 38</motion.a>
                </div>
            </motion.nav>
        </motion.div>
    );
}