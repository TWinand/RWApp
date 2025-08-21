"use client"
import Link from "next/link"
import { AlignJustify, EthernetPort, Unplug, Sun, Contact, X } from 'lucide-react'

export function SideNav({ isOpen, onClose }) {

    const linkStyle = "flex flex-row gap-4 hover:text-amber-300"

    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={onClose}>
                    <X className="w-6 h-6" />
                </button>
            </div>
            <nav className="flex flex-col gap-4">
                <Link href="Elektrotechnik" className={linkStyle} ><Unplug /> Elektrotechnik</Link>
                <Link href="Photovoltaik" className={linkStyle}><Sun /> Photovoltaik</Link>
                <Link href="Netzwerktechnik" className={linkStyle}><EthernetPort /> Netzwerktechnik</Link>
                <Link href="Kontakt" className={linkStyle}><Contact /> Kontakt</Link>
            </nav>
        </div>
    )
}
