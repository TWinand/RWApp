"use client"
import Link from "next/link"
import { AlignJustify, EthernetPort, Unplug, Sun, Contact, X, House, Minus } from 'lucide-react'

export function SideNav({ isOpen, onClose }) {

    const linkStyle = "flex flex-row gap-4 hover:text-amber-300 hover:underline"

    return (
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 z-50 divide-solid divide-y ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={onClose}>
                    <X className="w-6 h-6" />
                </button>
            </div>

            <nav className="flex flex-col gap-4 pt-4">
                <Link href="#Home" className={linkStyle} ><House /> Home</Link>
                <Link href="#Elektrotechnik" className={linkStyle} ><Unplug /> Elektrotechnik</Link>
                <Link href="#Photovoltaik" className={linkStyle}><Sun /> Photovoltaik</Link>
                <Link href="#Netzwerktechnik" className={linkStyle}><EthernetPort /> Netzwerktechnik</Link>
                <Link href="#Kontakt" className={linkStyle}><Contact /> Kontakt</Link>
            </nav>

            <nav className="absolute inset-x-0 bottom-0">
                <div className="flex flex-row gap-2 justify-between items-center m-2">
                    <Link href="Impressum" className={linkStyle} >Impressum</Link>
                    <Minus />
                    <Link href="Datenschutz" className={linkStyle} >Datenschutz</Link>
                    <Minus />
                    <Link href="AGB" className={linkStyle}>AGB</Link>
                </div>

            </nav>
        </div>
    )
}
