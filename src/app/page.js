"use client";
import React, { useState } from 'react'
import { HeadMenu } from '@/components/ui/headMenu'
import { Lamp } from '@/components/ui/lamp'
import { Banner } from '@/components/ui/banner'
import { SideNav } from '@/components/ui/sideNav';
import { Card } from '@/components/ui/card';
import imgE from '../../public/img/Elektro/elektro.jpg';
import imgP from '../../public/img/Photovoltaik/pv.jpg';
import imgN from '../../public/img/Netzwerk/netz.jpg';


const words = 'Willkommen bei RW-Elektrotechnik – Ihr Partner für moderne Elektrotechnik & nachhaltige Energielösungen';
const tag = 'Ihr Partner für moderne Elektrotechnik & nachhaltige Energielösungen';
const src = "./img/bgimg2_cut.jpg";

export default function Home() {
    const [sideNavOpen, setSideNavOpen] = useState(false);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-950">

            <SideNav isOpen={sideNavOpen} onClose={() => setSideNavOpen(false)} />
            <HeadMenu onMenuClick={() => setSideNavOpen(true)} />

            <div id="#Home" className="relative flex flex-col min-h-96 w-full bg-white justify-center item-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${src})` }}>

                <div className="absolute inset-0 bg-slate-500/20 backdrop-brightness-75 h-full" />

                <div className="relative flex flex-col h-full w-full items-center">
                    <Banner className="relative inline-block flex-col align-middle p-24 text-center w-full z-10" duration={2} filter={false} words={words} tag={tag} />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 from-2% h-64" />
            </div>

            <div className="relative flex flex-col items-center min-h-60 w-full p-20 text-center">
                <div className="text-white">
                    <p className="text-xl">Ob Photovoltaikanlage, Elektrotechnik oder EDV-Installation – wir planen und realisieren maßgeschneiderte Lösungen für Privat- und Gewerbekunden. Mit fundiertem Fachwissen, innovativen Ideen und einem hohen Qualitätsanspruch begleiten wir Sie von der ersten Beratung über die Planung bis hin zur fachgerechten Umsetzung Ihres Projekts.</p>
                </div>
            </div>

            <div className="relative flex flex-col lg:flex-row text-white gap-4" >
                <Card title="Elektrotechnik" text="Innovative Lösungen für mehr Komfort, Sicherheit und Effizienz – zuverlässig, modern und zukunftsorientiert." hashTag1="Beratung" hashTag2="Planung" hashTag3="Installation" src={imgE} />
                <Card title="Photovoltaik" text="Sauber, effizient und unabhängig: Mit Solarstrom nutzen Sie die Kraft der Sonne für eine nachhaltige Zukunft." hashTag1="Batterie" hashTag2="Repowering" hashTag3="WallBox" src={imgP} />
                <Card title="Netzwerktechnik" text="Schnell, sicher und zuverlässig – für Kommunikation ohne Grenzen und eine digitale Zukunft." hashTag1="Telefonie" hashTag2="Schwesternruf" hashTag3="Notbeleuchtung" src={imgN} />
            </div>




            <div className="w-full" id="Elektrotechnik">
                <Lamp>Mit Uns geht immer ein Licht auf</Lamp>
            </div>
            <div className="w-full" id="Photovoltaik">
                <Lamp>Mit Uns geht immer ein Licht auf</Lamp>
            </div>
            <div className="w-full" id="Netzwerktechnik">
                <Lamp>Mit Uns geht immer ein Licht auf</Lamp>
            </div>
            <div className="w-full" id="Kontakt">
                <Lamp>Mit Uns geht immer ein Licht auf</Lamp>
            </div>


        </main>
    );
}
