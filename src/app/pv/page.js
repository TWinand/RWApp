"use client";
import React, { useState } from 'react'
import { HeadMenu } from '@/components/ui/headMenu'
import { SideNav } from '@/components/ui/sideNav';

import { CompareImg } from '@/components/ui/compareImg';

import first from '../../../public/img/Photovoltaik/first.jpg';
import second from '../../../public/img/Photovoltaik/second.jpg';


export default function Home() {
    const [sideNavOpen, setSideNavOpen] = useState(false);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-950">

            <SideNav isOpen={sideNavOpen} onClose={() => setSideNavOpen(false)} />
            <HeadMenu onMenuClick={() => setSideNavOpen(true)} />

            <div className="relative flex flex-col items-center w-full" id="Photovoltaik">
                <CompareImg ImageOne={first} ImageTwo={second} />
            </div>
        
        </main>
    );
}
