




"use client";
import React, { useState } from 'react'
import { HeadMenu } from "@/components/ui/headMenu"
import { Lamp } from "@/components/ui/lamp"
import { Banner } from "@/components/ui/banner"
import { SideNav } from '@/components/ui/sideNav';


const words = 'Ihre Energiezukunft beginnt hier – Elektroinstallationen und Photovoltaik vom Profi.';
const tag = 'Elektroinstallationen und Photovoltaik vom Profi.';
const src = "./img/bgimg2_cut.jpg";


export default function Home() {
    const [sideNavOpen, setSideNavOpen] = useState(false);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-950">

            <SideNav isOpen={sideNavOpen} onClose={() => setSideNavOpen(false)} />
            <HeadMenu onMenuClick={() => setSideNavOpen(true)} />

            <div className="relative flex flex-col min-h-screen w-full bg-white justify-center item-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${src})` }}>

                <div className="absolute inset-0 bg-slate-500/20 backdrop-brightness-75 h-screen" />

                <div className="relative flex flex-col h-full w-full items-center">
                    <Banner className="relative inline-block flex-col align-middle p-24 text-center w-full" duration={2} filter={false} words={words} tag={tag} />
                </div>


            </div>


            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 from-2% h-64" />

            <div></div>



            <Lamp>Das Ihnen ein Licht aufgeht <br /> ist unser Handwerk</Lamp>
        </main>
    );
}
