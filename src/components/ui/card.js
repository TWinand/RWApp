"use client"
import React from "react"
import Image from 'next/image'
import { LoaderOne } from "@/components/ui/loader";




export function Card({ title, text, hashTag1, hashTag2, hashTag3, src }) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-gray-900">
            <Image
                src={src}
                width={500}
                height={500}
                alt="RW-ElektroIMG"
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-300 text-base">
                    {text}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashTag1}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashTag2}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashTag3}</span>
            </div>
        </div>
    );
}
