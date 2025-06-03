"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { cn } from "@/utils/cn";
//import { SunSystem } from "@/components/ui/sunSystem"
import { SunNav } from "@/components/ui/trash/sunNav.js"

import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faBolt, faNetworkWired, faUser, faBars, faXmark, } from '@fortawesome/free-solid-svg-icons'

import { Banner } from "@/components/ui/banner.js"
import { Parallax } from "@/components/ui/trash/parallax.js"
import { Footer } from '@/components/ui/footer.js'

import { BlurContainer } from "@/components/ui/blurContainer"

import { Logo } from "@/components/ui/trash/logo.js"
import { ContentContainer } from "@/components/ui/contentContainer";
import { GoogleGeminiEffect } from "@/components/ui/trash/googleGemini";

import { ThreeCanvas } from "@/components/threejs/threeCanvas";
import { Content } from "@/components/ui/content";


// Wir bringen Licht ins Haus, holen Strom vom Dach und Vernetzen Sie mit der Welt
const words = 'Ihre Energiezukunft beginnt hier – Elektroinstallationen und Photovoltaik vom Profi.';
const tag = 'Elektroinstallationen und Photovoltaik vom Profi.';

//TODO Fix Size in Resolution md lg xl 2xl
const style = 'relative text-white rounded-2xl border-2 border-neutral-50/20 bg-white hover:bg-blue-950 bg-opacity-10 backdrop-filter backdrop-blur-sm size-32 2xl:size-52 flex items-center justify-center'
const style2 = 'relative w-full text-white rounded-2xl border-2 border-neutral-50/20 bg-blue-950 flex items-center justify-center'


export default function Home() {


    return (
        <main className="relative flex flex-col min-h-screen justify-between bg-cover bg-scroll bg-no-repeat scroll-smooth focus:scroll-auto bg-left-bottom" style={{ backgroundImage: "url(./img/bgimg2.jpg)" }}>
            <SunNav />
            <Content>
                <div></div>
                <Banner words={words} tag={tag} />
            </Content>

        </main >
    );
}
