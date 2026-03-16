"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IndiegogoCTA() {
    return (
        <section id="indiegogo" className="w-full bg-[#000000] text-[#FFFFFF] py-32 px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-[800px] mx-auto text-center"
            >
                <Image
                    src="/logo.png"
                    alt="AskLabs Logo"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] mx-auto mb-8 object-contain"
                />

                <h2 className="text-[48px] font-bold text-white tracking-[-0.02em] leading-tight">
                    Be Part of the Revolution.
                </h2>
                <p className="text-[21px] text-[#999999] mt-4 max-w-[600px] mx-auto leading-relaxed">
                    Back us on Indiegogo and shape the future of AI video creation.
                </p>

                <a
                    href="#"
                    className="inline-block bg-[#FFFFFF] text-[#000000] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 mt-8"
                    aria-label="Back project on Indiegogo"
                >
                    Back this Project →
                </a>
            </motion.div>
        </section>
    );
}
