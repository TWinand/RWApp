import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareImg({ ImageOne, ImageTwo }) {
    return (
        <div className="w-3/4 h-[60vh] px-1 md:px-8 flex items-center justify-center [perspective:800px] [transform-style:preserve-3d]">
            <div
                style={{
                    transform: "rotateX(15deg) translateZ(80px)",
                }}
                className="p-1 md:p-4 border rounded-3xl  bg-gray-900  border-gray-900 mx-auto w-3/4 h-1/2 md:h-3/4"
            >
                <Compare
                    firstImage={ImageOne.src}
                    secondImage={ImageTwo.src}
                    firstImageClassName="object-cover object-left-top w-full"
                    secondImageClassname="object-cover object-left-top w-full"
                    className="w-full h-full rounded-[22px] md:rounded-lg"
                    slideMode="hover"
                    autoplay={true}
                />
            </div>
        </div>
    );
}
