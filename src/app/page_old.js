"use client";
import React from "react";
import { Boxes } from '../components/ui/background-boxes'
import { Navbar } from '../components/navbar'
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="h-36 w-2/3 relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg -skew-x-12">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <h1 className={cn("md:text-2xl text-l text-white relative z-20")}>
          Herzlich willkommen bei
        </h1>
        <h1 className="md:text-2xl text-l relative z-20 text-yellow-500 break-normal"> RW-Elektrotechnik GmbH & Co. KG. </h1>
      </div>

      <div className="h-60 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <h1 className={cn("md:text-4xl text-l text-white relative z-20")}>
          Herzlich willkommen bei
        </h1>
        <h1 className="md:text-4xl text-l relative z-20 text-yellow-500 break-normal"> RW-Elektrotechnik <a>GmbH & Co. KG.</a> </h1>
      </div>

    </main>
  );
}
