"use client";
import React from "react";

export function Content({ children }) {

    return (
        <div className="relative flex flex-col w-full p-2 text-blue-950 rounded-2xl bg-white items-center justify-center bg-gradient-to-r from-white to-slate-300 border-2 border-gray-400">
            {children}
        </div>
    );
}