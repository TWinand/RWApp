"use client";
import React from "react";

export function ContentContainer({ children }) {

    return (
        <div className="relative z-20 flex rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 text-black p-10 shadow-lg shadow-black/70 -my-1">
            {children}
        </div>
    );
}
