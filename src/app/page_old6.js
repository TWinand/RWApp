"use client";
import React from "react";

import { ContentContainer } from "../components/ui/contentContainer.js"
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
import { LogoSvg } from "@/components/ui/logoSvg.js"

const words = 'Ihre Energiezukunft beginnt hier – Elektroinstallationen und Photovoltaik vom Profi.';
const tag = 'Elektroinstallationen und Photovoltaik vom Profi.';

//TODO Fix Size in Resolution md lg xl 2xl
const style = 'relative text-white rounded-2xl border-2 border-neutral-50/20 bg-white hover:bg-blue-950 bg-opacity-10 backdrop-filter backdrop-blur-sm size-32 2xl:size-52 flex items-center justify-center'
const style2 = 'relative w-full text-white rounded-2xl border-2 border-neutral-50/20 bg-blue-950 flex items-center justify-center'
export default function Home() {


    return (
        <main className="relative flex-col items-center justify-between h-screen scroll-smooth focus:scroll-auto scroll-p-60">
            <Logo style={style} />
            <SunNav />
            <Parallax src="./img/bgimg2.jpg" >
                <div className="relative flex flex-col h-svh w-full">
                    <Banner className="relative inline-block flex align-middle p-40 h-full text-center items-center" duration={2} filter={false} words={words} tag={tag} />


                </div>
            </Parallax>

            <Footer />
        </main >
    );
}
