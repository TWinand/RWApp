"use client";
import { motion } from "framer-motion";

export function MovingBorder({ children }) {
    return (
        <motion.div
            className="relative rounded-2xl p-[2px]"
            whileHover={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
                backgroundImage:
                    "linear-gradient(90deg,#ec4899,#8b5cf6,#3b82f6)",
                backgroundSize: "200% 200%",
            }}
        >
            <div className="bg-gray-900 rounded-2xl p-6">
                {children}
            </div>
        </motion.div>
    );
}
