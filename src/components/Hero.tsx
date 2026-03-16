"use client";

import { motion } from "framer-motion";
// import removed: HeyGenAvatar
import Link from "next/link";

export default function Hero() {
        return (
                <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#FFFFFF] px-6 pt-24 pb-12 overflow-hidden">
                        {/* Subtle animated light dot pattern background */}
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                                <div className="w-full h-full absolute inset-0 bg-transparent">
                                        <svg className="w-full h-full" width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g className="animate-dot-float">
                                                        <circle cx="200" cy="200" r="3" fill="#E5E7EB" opacity="0.7" />
                                                        <circle cx="600" cy="400" r="2.5" fill="#E5E7EB" opacity="0.5" />
                                                        <circle cx="1200" cy="300" r="2.5" fill="#E5E7EB" opacity="0.6" />
                                                        <circle cx="900" cy="700" r="2.5" fill="#E5E7EB" opacity="0.4" />
                                                        <circle cx="400" cy="650" r="2.5" fill="#E5E7EB" opacity="0.5" />
                                                        <circle cx="1100" cy="500" r="2.5" fill="#E5E7EB" opacity="0.5" />
                                                </g>
                                        </svg>
                                </div>
                        </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full flex flex-col items-center"
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
                className="relative z-10 mt-12 w-full flex flex-col items-center"
            >
                <div className="bg-white border border-[#F3F4F6] rounded-2xl flex flex-col items-center justify-center w-full max-w-[420px] aspect-video mx-auto shadow-lg">
                    <div className="flex flex-col items-center justify-center">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28" cy="28" r="28" fill="#F3F4F6"/>
                            <polygon points="23,18 41,28 23,38" fill="#A3A3A3"/>
                        </svg>
                        <span className="block mt-4 text-[#6E6E73] text-lg font-medium opacity-80">Demo Coming Soon</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 mt-8"
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
