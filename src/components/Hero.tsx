"use client";

import { motion } from "framer-motion";
// import removed: HeyGenAvatar
import Link from "next/link";

export default function Hero() {
        return (
                <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#FFFFFF] px-6 pt-10 md:pt-16 pb-12 overflow-hidden">
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
                <div className="relative w-full max-w-[420px] aspect-video mx-auto rounded-2xl flex items-center justify-center bg-white shadow-xl overflow-hidden">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                        background: 'linear-gradient(120deg, #e0e7ff 0%, #f3f4f6 40%, #f1f5f9 100%)',
                        opacity: 0.85,
                        zIndex: 1,
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                    }} />
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8">
                        <div className="flex flex-col items-center justify-center">
                            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
                                <circle cx="44" cy="44" r="42" fill="#F3F4F6" stroke="#e0e7ff" strokeWidth="2" />
                                <circle cx="44" cy="44" r="36" fill="#fff" />
                                <polygon points="39,32 62,44 39,56" fill="#6366f1"/>
                                <circle cx="44" cy="44" r="42" fill="url(#glow)" fillOpacity="0.2" />
                                <defs>
                                  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
                                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
                                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                                  </radialGradient>
                                </defs>
                            </svg>
                            <span className="block mt-6 text-[#1D1D1F] text-xl font-semibold opacity-90">Demo Coming Soon</span>
                            <span className="block mt-2 text-[#6E6E73] text-base font-normal opacity-80 text-center max-w-xs">Interactive AI avatar — coming with our Indiegogo launch</span>
                        </div>
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
            {/* Animated scroll indicator */}
            <div className="absolute left-1/2 bottom-6 z-20 -translate-x-1/2 flex flex-col items-center select-none pointer-events-none">
                <svg className="animate-bounce-slow" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" fill="#F3F4F6"/>
                    <path d="M14 9V19" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round"/>
                    <path d="M10 15L14 19L18 15" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </section>
    );
}
