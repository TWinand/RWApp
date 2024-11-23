"use client"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faHouse, faMoon } from '@fortawesome/free-solid-svg-icons'
import "../../css/SunSystem.css";

export function SunSystem() {
    React.useEffect(() => {
        const handleScroll = (event) => {
            document.body.style.setProperty(
                "--scroll",
                ((window.scrollY) / (document.body.offsetHeight - window.innerHeight)) * 10
            );
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id="sunSystem" className="m-auto items-center justify-center flex inset-0 top-1/2">
            <div id="sun" className="text-yellow-500">
                <FontAwesomeIcon icon={faSun} size="3x" />
            </div>
            <div id="house" className="text-green-400">
                <FontAwesomeIcon icon={faHouse} size="3x" />
            </div>
            <div id="moon" className="text-cyan-100">
                <FontAwesomeIcon icon={faMoon} size="3x" />
            </div>
        </div>
    )
}
