"use client"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faBolt, faNetworkWired, faUser, faBars, faXmark, } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const pvVar = {
    open: { opacity: 1, x: "0", y: "3.5rem", filter: "drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.2))" },
    closed: { opacity: 0, x: "0", y: "0" },
}
const elektroVar = {
    open: { opacity: 1, x: "3.5rem", y: "2.5rem", filter: "drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.2))" },
    closed: { opacity: 0, x: "0", y: "0" },
}
const netzVar = {
    open: { opacity: 1, x: "-3.5rem", y: "2.5rem", filter: "drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.2))" },
    closed: { opacity: 0, x: "0", y: "0" },
}

const infoVar = {
    open: { opacity: 1, x: "3.5rem", y: "0", filter: "drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.2))" },
    closed: { opacity: 0, x: "0", y: "0" },
}


const sunVar = {
    open: { filter: "brightness(.9)", boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.2)" },
    closed: { filter: "brightness(1)" },
}
export function SunNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(isOpen => !isOpen);



    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="relative flex-no-wrap flex w-full items-center justify-between z-50">
            <motion.nav animate={isOpen ? "open" : "closed"} className="fixed top-5 left-14 items-center justify-center flex ">

                <motion.button onClick={toggle} variants={sunVar} type="button" whileTap={{ scale: 0.9 }} title="home" className=" w-14 h-14 bg-gradient-to-b from-orange-200 to-orange-400 rounded-full z-50" ><FontAwesomeIcon className="text-sky-900" icon={isOpen ? faXmark : faBars} /></motion.button>

                <motion.a href="#pv" variants={pvVar} type="button" title="Photovoltaik" className="absolute" > <FontAwesomeIcon className="text-orange-400 z-40 " icon={faSolarPanel} /></motion.a>
                <motion.a href="#elektro" variants={elektroVar} type="button" title="Elektrotechnik" className="absolute" ><FontAwesomeIcon className="text-orange-400 z-40" icon={faBolt} /></motion.a>
                <motion.a href="#netz" variants={netzVar} type="button" title="EDV, TV und Netzwerktechnik" className="absolute" ><FontAwesomeIcon className="text-orange-400 z-40" icon={faNetworkWired} /></motion.a>
                <motion.a href="#kontakt" variants={infoVar} type="button" title="Kontakt" className="absolute" > <FontAwesomeIcon className="text-orange-400 z-40" icon={faUser} /></motion.a>

            </motion.nav>
        </motion.div >
    );
}