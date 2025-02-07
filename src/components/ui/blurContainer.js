"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Banner } from "@/components/ui/banner.js"

// Wir bringen Licht ins Haus, holen Strom vom Dach und Vernetzen Sie mit der Welt
const words = 'Ihre Energiezukunft beginnt hier – Elektroinstallationen und Photovoltaik vom Profi.';
const tag = 'Elektroinstallationen und Photovoltaik vom Profi.';

export function BlurContainer({ children }) {
    const [blurLevel, setBlurLevel] = useState(0);
    const containerRef = useRef(null); // Referenz für das scrollbare Element

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = containerRef.current?.scrollTop || 0; // Scrollposition des Containers
            const maxScroll = 300; // Maximaler Scrollbereich
            const blur = Math.min((scrollY / maxScroll) * 20, 20); // Dynamischer Blur
            setBlurLevel(blur);
        };

        const container = containerRef.current; // Scrollbares Element
        if (container) {
            console.log("Scroll listener added to container");
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                console.log("Scroll listener removed from container");
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <motion.div
            ref={containerRef} // Referenziere das scrollbare Element
            style={{
                backdropFilter: `blur(${blurLevel}px)`,
                WebkitBackdropFilter: `blur(${blurLevel}px)`, // Safari-Unterstützung
            }}
            className="relative h-screen overflow-y-scroll"
        >
            <div className="relative flex flex-col h-svh w-full">
                <Banner className="relative inline-block flex align-middle p-40 h-full text-center items-center" duration={2} filter={false} words={words} tag={tag} />
            </div>
            <div className="h-[100vh]">


            </div>
            {children}
        </motion.div>
    );
}

