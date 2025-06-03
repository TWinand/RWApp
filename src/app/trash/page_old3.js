"use client";
import React from "react";

import { ContentContainer } from "../../components/ui/contentContainer.js"
import { Boxes } from '../../components/ui/background-boxes.js'
import { cn } from "@/utils/cn";
//import { SunSystem } from "@/components/ui/sunSystem"
import { SunNav } from "@/components/ui/trash/sunNav.js"
import { motion } from 'framer-motion'
import { Banner } from "@/components/ui/banner.js"

const words = 'Herzlich willkommen bei RW-Elektrotechnik GmbH & Co. KG.';
const tag = 'RW-Elektrotechnik GmbH & Co. KG.';


export default function Home() {


    return (
        <main className="relative flex flex-col min-h-screen items-center justify-between overflow-y-scroll h-80 bg-cover bg-scroll bg-no-repeat bg-bottom scroll-smooth focus:scroll-auto" style={{ backgroundImage: "url(./img/bgimg2.jpg)" }}>
            <SunNav />

            <Banner className="inline-block align-middle p-20 " duration={2} filter={true} words={words} tag={tag} />

            <motion.div className="flex flex-col items-center justify-between h-screen">
                <div className="origin-center grid grid-rows-3 grid-flow-col md:gap-4 gap-4 m-auto text-2xl text-justify p-10">

                    <div className="row-span-3  relative text-white rounded-2xl bg-amber-300 bg-opacity-50 backdrop-filter backdrop-blur-sm p-10 shadow-lg"><h1 id="info">Info</h1><span>asdawdadadasd</span></div>
                    <div className="col-span-2 relative text-white rounded-2xl bg-blue-950 bg-opacity-50 backdrop-filter backdrop-blur-sm p-10 shadow-lg"><h1 id="pv">PV</h1><span>In Zeiten steigender Energiekosten und wachsender Umweltbewusstheit gewinnt die Nutzung von Photovoltaikanlagen (PV-Anlagen) zunehmend an Bedeutung. Eine PV-Anlage wandelt Sonnenlicht in Strom um und bietet zahlreiche Vorteile, die sowohl wirtschaftliche als auch ökologische Aspekte betreffen.</span></div>
                    <div className="col-span-2 relative text-white rounded-2xl bg-blue-950 bg-opacity-50 backdrop-filter backdrop-blur-sm p-10 shadow-lg"><h1 id="elektro">Elektro</h1><span>Elektroanlagen sind essentielle Komponenten moderner Infrastruktur, die die sichere und effiziente Verteilung von elektrischer Energie gewährleisten. Sie umfassen alles von Stromverteilungsnetzen über Transformatoren bis hin zu Schaltanlagen. Diese Systeme sorgen dafür, dass Haushalte, Unternehmen und Industrie zuverlässig mit Energie versorgt werden.</span></div>
                    <div className="col-span-2 relative text-white rounded-2xl bg-blue-950 bg-opacity-50 backdrop-filter backdrop-blur-sm p-10 shadow-lg"><h1 id="netz">Netz</h1><span>IT-Netzwerke und Telefonanlagen sind essenzielle Bestandteile der Kommunikationsinfrastruktur in Unternehmen. IT-Netzwerke ermöglichen den Austausch von Daten und Informationen zwischen Geräten, seien es Computer, Server oder mobile Endgeräte. Sie gewährleisten eine stabile und sichere Verbindung, die für den reibungslosen Betrieb unerlässlich ist.</span></div>

                </div>

            </motion.div>
        </main >
    );
}
