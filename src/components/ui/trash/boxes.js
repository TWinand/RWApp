"use client"
import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"
import { BoxesCore } from "./background-boxes"

export const Boxes = () => {
    return (
        <div className="h-36 w-2/3 relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg -skew-x-12 p-10">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <BoxesCore />

            <h1 className={cn("md:text-2xl text-l text-white relative z-20")}>
                Herzlich willkommen bei
            </h1>
            <h1 className="md:text-2xl text-l relative z-20 text-yellow-500 break-normal"> RW-Elektrotechnik GmbH & Co. KG. </h1>
        </div>

    )

}

