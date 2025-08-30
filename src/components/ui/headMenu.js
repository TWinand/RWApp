"use client"
import React from "react"
import { LogoSvg } from '@/components/ui/logoSvg'
import { AlignJustify, EthernetPort, Unplug, Sun, Contact } from 'lucide-react'
import Link from 'next/link';


export function HeadMenu({ onMenuClick }) {

    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-gray-200 rounded-b bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 shadow-lg">
            <div className="relative flex flex-row items-center justify-between">
                <Link href="#Home" >
                    <div className="flex flex-row items-center justify-between p-1">
                        <LogoSvg />

                        <h1 className={`font-medium text-white ml-4 ${linkStyle}`} > RW-Elektrotechnik </h1>
                    </div>
                </Link>
                <div className="flex flex-row font-medium text-white items-center justify-between gap-24 invisible lg:visible">
                    <Link href="#Elektrotechnik" ><Unplug /></Link>
                    <Link href="#Photovoltaik"><Sun /></Link>
                    <Link href="#Netzwerktechnik"><EthernetPort /></Link>
                    <Link href="#Kontakt"><Contact /></Link>

                </div>
                <button onClick={onMenuClick} className="mr-2 text-white rounded-md bg-gray-900 p-2 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 shadow-lg" >
                    <AlignJustify />
                </button>
            </div>
        </div>
    );
}

