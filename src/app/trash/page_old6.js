"use client";
import React from "react";

import { ContentContainer } from "../../components/ui/contentContainer.js"
import { Boxes } from '../../components/ui/background-boxes.js'
import { cn } from "@/utils/cn";
//import { SunSystem } from "@/components/ui/sunSystem"
import { SunNav } from "@/components/ui/trash/sunNav.js"

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faBolt, faNetworkWired, faUser, faBars, faXmark, } from '@fortawesome/free-solid-svg-icons'

import { Footer } from '@/components/ui/footer.js'

import { Banner } from "@/components/ui/banner.js"
import { Parallax } from "@/components/ui/trash/parallax.js"

import { Logo } from "@/components/ui/trash/logo.js"
import { LogoSvg } from "@/components/ui/logoSvg.js"

const words = 'Ihre Energiezukunft beginnt hier – Elektroinstallationen und Photovoltaik vom Profi.';
const tag = 'Elektroinstallationen und Photovoltaik vom Profi.';

//TODO Fix Size in Resolution md lg xl 2xl
const style = 'relative text-white rounded-2xl border-2 border-neutral-50/20 bg-white hover:bg-blue-950 bg-opacity-10 backdrop-filter backdrop-blur-sm size-32 2xl:size-52 flex items-center justify-center'
const style2 = 'relative w-full text-white rounded-2xl border-2 border-neutral-50/20 bg-blue-950 flex items-center justify-center'
const style3 = 'relative text-blue-950 rounded-2xl border-2 border-neutral-50/20 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm flex items-center justify-center'

export default function Home() {


    return (
        <main className="relative flex flex-col items-center justify-between h-screen scroll-smooth focus:scroll-auto">
            <Logo />
            <SunNav />

            <Parallax id="home" modStyle="min-h-full" src="./img/bgimg2.jpg" >
                <div className="relative flex flex-col h-full w-full items-center">
                    <Banner className="relative inline-block flex-col align-middle p-24 text-center w-1/2" duration={2} filter={false} words={words} tag={tag} />
                    <div className="grid grid-cols-1 mb-24 min-h-full">
                        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 100 }} className="col-span-1 flex flex-col items-center justify-between pt-5 2xl:pt-20">
                            <div className="origin-center rotate-45 grid grid-cols-2 gap-1 2xl:gap-4">
                                <motion.a href="#pv" className={style}> <div className="text-center -rotate-45"><FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faSolarPanel} /><h1>Photovoltaik</h1></div></motion.a>
                                <motion.a href="#elektro" className={style}><div className="text-center -rotate-45"><FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faBolt} /><h1>Elektrotechnik</h1></div></motion.a>
                                <motion.a href="#netz" className={style}><div className="text-center -rotate-45"><FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faNetworkWired} /><h1>EDV, TV & Netzwerktechnik</h1></div></motion.a>
                                <motion.a href="#kontakt" className={style}><div className="text-center -rotate-45"><FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faUser} /><h1>Kontakt</h1></div></motion.a>
                            </div>
                        </motion.div>
                    </div>


                </div>
            </Parallax >

            <ContentContainer><p>hallo</p></ContentContainer>


            <Parallax id="pv" modStyle="h-1/2 text-orange-400 font-bold min-h-80" src="./img/Photovoltaik/pv.jpg">
                <FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faSolarPanel} /><h1>Photovoltaik</h1>
            </Parallax>
            <ContentContainer />

            <Parallax id="elektro" modStyle="h-1/2 text-orange-400 font-bold min-h-80" src="./img/Elektro/elektro.jpg">
                <FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faBolt} /><h1>Elektrotechnik</h1>
            </Parallax>

            <ContentContainer />

            <Parallax id="netz" modStyle="h-1/2 text-orange-400 font-bold min-h-80" src="./img/Netzwerk/netz.jpg" >
                <FontAwesomeIcon className="text-orange-400 size-5 md:size-10 backdrop-filter drop-shadow-lg" icon={faNetworkWired} /><h1>EDV, TV & Netzwerktechnik</h1>
            </Parallax>
            <ContentContainer />

        </main >
    );
}
