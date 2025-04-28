"use client";
import React from "react";

import { ContentContainer } from "@/components/ui/contentContainer.js"
import { cn } from "@/utils/cn";
//import { SunSystem } from "@/components/ui/sunSystem"
import { SunNav } from "@/components/ui/sunNav.js"
import { NavBar } from "@/components/ui/navBar.js"

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
const style2 = 'relative w-full text-white rounded-2xl border-2 border-neutral-50/20 bg-white hover:bg-blue-950 bg-opacity-10 backdrop-filter backdrop-blur-sm flex items-center justify-center'

export default function Home() {


    return (
        <main className="relative flex-col items-center justify-between h-screen scroll-smooth focus:scroll-auto scroll-p-60">

            <SunNav />

            <Parallax src="./img/bgimg2.jpg" >

                <div className="relative flex flex-col h-svh w-full">
                    <Banner className="relative inline-block flex-col align-middle p-20 text-center" duration={2} filter={false} words={words} tag={tag} />


                </div>
            </Parallax>
            <ContentContainer id="kontakt" />



            <Parallax id="pv" modStyle="h-1/2 brightness-50" src="./img/Photovoltaik/pv.jpg">
                <h1>Photovoltaik</h1>
            </Parallax>
            <ContentContainer />

            <Parallax id="elektro" modStyle="h-1/2 brightness-50" src="./img/Elektro/elektro.jpg" />
            <ContentContainer />

            <Parallax id="netz" modStyle="h-1/2 brightness-50" src="./img/Netzwerk/netz.jpg" />
            <ContentContainer />

            <Footer />
        </main >
    );
}
