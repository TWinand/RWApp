"use client";
import { motion } from "framer-motion";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { LogoSvg } from "./logoSvg";

export function ContactCard() {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative w-full max-w-sm p-[2px] rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg"
        >
            <div className="bg-gray-900 rounded-2xl p-6 flex flex-col items-center gap-4">
                {/* Logo / Icon */}
                <div className="flex items-center justify-center w-24 h-24">
                    <LogoSvg />
                </div>

                {/* Firmendaten */}
                <h2 className="text-xl font-bold text-gray-200">
                    RW-Elektrotechnik GmbH & Co. KG
                </h2>
                <p className="text-gray-300 text-sm text-center">
                    Ihr Partner für moderne Elektrotechnik & Installation
                </p>

                {/* Kontaktinfos */}
                <div className="w-full flex flex-col gap-2 mt-4">
                    <div className="flex items-center gap-2 text-gray-200">
                        <PhoneCall className="w-5 h-5 text-yellow-500" />
                        <a href="tel:05233951538">05233 - 95 15 38</a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-200">
                        <Mail className="w-5 h-5 text-yellow-500" />
                        <a href="mailto:rolfwinand58@gmail.com">rolfwinand58@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2 text-gray-200">
                        <MapPin className="w-5 h-5 text-yellow-500" />
                        <span>Im Grünen Winkel 5, 32805 Horn Bad Meinberg, Deutschland</span>
                    </div>
                </div>

                {/* Button */}
                <motion.a
                    href="mailto:info@elektro-meier.de"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-6 py-2 rounded-xl bg-yellow-500 text-white font-semibold shadow hover:bg-yellow-600 transition"
                >
                    Kontakt aufnehmen
                </motion.a>
            </div>
        </motion.div>
    );
}
