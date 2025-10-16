"use client";
import React, { useState } from 'react'
import { HeadMenu } from '@/components/ui/headMenu'
import { Lamp } from '@/components/ui/lamp'
import { SideNav } from '@/components/ui/sideNav';


export default function Home() {
    const [sideNavOpen, setSideNavOpen] = useState(false);


    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-slate-950">

            <SideNav isOpen={sideNavOpen} onClose={() => setSideNavOpen(false)} />
            <HeadMenu onMenuClick={() => setSideNavOpen(true)} />

            <div className="w-full" id="Elektrotechnik">
                <Lamp>Mit Uns geht immer ein Licht auf</Lamp>
            </div>
       
        </main>
    );
}
