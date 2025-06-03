"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";


const textColor = "bg-clip-text text-transparent bg-gradient-to-r from-sky-200 to-sky-500";
const textColorTag = "bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-400";


export const Banner = ({
    words,
    tag,
    className,
    filter = true,
    duration = 0.5
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate("span", {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
        }, {
            duration: duration ? duration : 1,
            delay: stagger(0.2),
        });
    }, [scope.current]);

    const renderWords = () => {
        let color = textColor;
        return (
            (<motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    tag.includes(word) == true ? color = textColorTag : color = textColor;
                    return (
                        (<motion.span
                            key={word + idx}
                            className={color + " opacity-0 "}
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}>
                            {word + " "}
                        </motion.span>)
                    );
                })
                }
            </motion.div >)
        );
    };

    return (
        (<div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div
                    className="text-2xl md:text-5xl leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>)
    );
};
