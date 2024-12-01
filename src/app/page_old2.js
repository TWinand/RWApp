"use client";
import React from "react";

import { Lorem } from "./ContentContainer.js"
import { Boxes } from '../components/ui/background-boxes'
import { cn } from "@/utils/cn";
//import { SunSystem } from "@/components/ui/sunSystem"
import { SunNav } from "@/components/ui/sunNav.js"
import { motion } from 'framer-motion'



export default function Home() {


    return (
        <main className="relative flex flex-col min-h-screen items-center justify-between overflow-y-scroll h-80 bg-cover bg-scroll bg-no-repeat md:bg-bottom scroll-smooth focus:scroll-auto" style={{ backgroundImage: "url(./img/bgimg2.jpg)" }}>
            <SunNav />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col space-y-32 items-center justify-between p-20">


                <div className="origin-center rotate-45 grid grid-cols-2 gap-2">
                    <div className="relative text-white rounded-2xl bg-blue-300 bg-opacity-50 backdrop-filter backdrop-blur-lg p-20"><h1 className="-rotate-45">test</h1></div>
                    <div className="relative text-white rounded-2xl bg-blue-300 bg-opacity-50 backdrop-filter backdrop-blur-lg p-20"><h1 className="-rotate-45">test</h1></div>
                    <div className="relative text-white rounded-2xl bg-blue-300 bg-opacity-50 backdrop-filter backdrop-blur-lg p-20"><h1 className="-rotate-45">test</h1></div>
                    <div className="relative text-white rounded-2xl bg-blue-300 bg-opacity-50 backdrop-filter backdrop-blur-lg p-20"><h1 className="-rotate-45">test</h1></div>

                </div>


                <div className="relative text-white rounded-2xl bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-10"><h1 id="pv">PV</h1><Lorem /></div>
                <div className="relative text-white rounded-2xl bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-10"><h1 id="elektro">Elektro</h1><Lorem /></div>
                <div className="relative text-white rounded-2xl bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-10"><h1 id="netz">Netz</h1><Lorem /></div>
                <div className="relative text-white rounded-2xl bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-10"><h1 id="info">Info</h1><Lorem /></div>
            </motion.div>
        </main >
    );
}
