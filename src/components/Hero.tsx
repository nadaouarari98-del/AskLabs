"use client";

import { motion } from "framer-motion";
import HeyGenAvatar from "./HeyGenAvatar";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center bg-[#FFFFFF] px-6 pt-24 pb-12 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center"
            >
                <span className="uppercase text-[14px] text-[#6E6E73] tracking-[0.1em] font-medium mb-6 block">
                    INTRODUCING
                </span>

                <h1 className="text-[36px] md:text-[56px] font-bold text-[#1D1D1F] leading-[1.1] tracking-[-0.03em] max-w-[800px] mx-auto">
                    The Future of Video Creation.
                    <br className="hidden md:block" />
                    <span className="md:mt-2 block">Powered by AI.</span>
                </h1>

                <p className="text-[17px] md:text-[21px] text-[#6E6E73] font-normal leading-relaxed mt-6 max-w-[600px] mx-auto">
                    Meet your AI co-creator. Talk to it. Watch it build.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 w-full"
            >
                <HeyGenAvatar />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8"
            >
                <Link
                    href="#demo"
                    className="inline-block bg-[#000000] text-[#FFFFFF] px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
                    aria-label="Experience the HeyGen avatar demo"
                >
                    Experience it →
                </Link>
            </motion.div>
        </section>
    );
}
