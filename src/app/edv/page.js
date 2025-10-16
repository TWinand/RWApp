"use client";
import React, { useState } from 'react'
import { HeadMenu } from '@/components/ui/headMenu'
import { SideNav } from '@/components/ui/sideNav';

import { ContactCard } from '@/components/ui/contactCard';


export default function Home() {
    const [sideNavOpen, setSideNavOpen] = useState(false);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-950">

            <SideNav isOpen={sideNavOpen} onClose={() => setSideNavOpen(false)} />
            <HeadMenu onMenuClick={() => setSideNavOpen(true)} />

            <div className="w-full" id="Netzwerktechnik">

            </div>
            <div className="relative flex flex-col items-center w-full" id="Kontakt">
                <ContactCard />
            </div>
        </main>
    );
}
