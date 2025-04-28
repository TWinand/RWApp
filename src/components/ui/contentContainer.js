"use client";
import React from "react";

export function ContentContainer({ children }) {

    return (
        <div className="relative z-20 flex rounded-lg text-black p-10 w-full">
            {children}
        </div>
    );
}
