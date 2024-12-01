"use client";
import React from "react";

import { ContentContainer } from "./ContentContainer.js"
import { Boxes } from '../components/ui/background-boxes.js'
import { cn } from "@/utils/cn";
//import { SunSystem } from "@/components/ui/sunSystem"
import { SunNav } from "@/components/ui/sunNav.js"

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faBolt, faNetworkWired, faUser, faBars, faXmark, } from '@fortawesome/free-solid-svg-icons'

import { Footer } from '@/components/ui/footer.js'

import { Banner } from "@/components/ui/banner.js"
import { Parallax } from "@/components/ui/parallax.js"

import { Logo } from "@/components/ui/logo.js"

const words = 'Herzlich willkommen bei RW-Elektrotechnik GmbH & Co. KG.';
const tag = 'RW-Elektrotechnik GmbH & Co. KG.';

//TODO Fix Size in Resolution md lg xl 2xl
const style = 'relative text-white rounded-2xl border-2 border-neutral-50/20 bg-white hover:bg-blue-950 bg-opacity-10 backdrop-filter backdrop-blur-sm size-32 2xl:size-52 flex items-center justify-center'

export default function Home() {


    return (
        <main className="relative flex-col items-center justify-between h-screen scroll-smooth focus:scroll-auto scroll-p-60">
            <Logo style={style} />
            <SunNav />

            <Parallax src="./img/bgimg2.jpg" >

                <div className="relative flex-col h-svh">
                    <Banner className="inline-block align-middle p-20" duration={2} filter={false} words={words} tag={tag} />
                    <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100 }} className="flex flex-col items-center justify-between pt-5 2xl:pt-20">
                        <div className="origin-center rotate-45 grid grid-cols-2 gap-1 2xl:gap-4">
                            <motion.a href="#pv" className={style}> <div className="text-center -rotate-45"><FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faSolarPanel} /><h1>Photovoltaik</h1></div></motion.a>
                            <motion.a href="#elektro" className={style}><div className="text-center -rotate-45"><FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faBolt} /><h1>Elektrotechnik</h1></div></motion.a>
                            <motion.a href="#netz" className={style}><div className="text-center -rotate-45"><FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faNetworkWired} /><h1>EDV, TV & Netzwerktechnik</h1></div></motion.a>
                            <motion.a href="#kontakt" className={style}><div className="text-center -rotate-45"><FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faUser} /><h1>Kontakt</h1></div></motion.a>
                        </div>
                    </motion.div>
                </div>
            </Parallax>

            <ContentContainer id="pv" />
            <Parallax height="h-1/2" src="./img/Elektro/elektro.jpg" />
            <ContentContainer id="elektro" />

            <Parallax height="h-1/2" src="./img/Netzwerk/netz.jpg" />
            <ContentContainer id="netz" />

            <Parallax height="h-1/2" src="./img/bgimg.jpg" />
            <ContentContainer id="kontakt" />

            <Footer />
        </main >
    );
}
