"use client";

import { motion } from "framer-motion";

export default function Roadmap() {
    const roadmapItems = [
        {
            label: "NOW",
            title: "MVP Launch",
            description: "Interactive AI avatar, investor-ready landing page, Indiegogo campaign.",
            active: true,
        },
        {
            label: "Q3 2026",
            title: "Connectors & API",
            description: "Third-party integrations, plugin ecosystem, developer API.",
            active: false,
            colorClass: "bg-gray-400 border-gray-400",
        },
        {
            label: "2027",
            title: "Platform & Marketplace",
            description: "Template marketplace, collaborative editing, enterprise features.",
            active: false,
            colorClass: "bg-gray-300 border-gray-300",
        },
    ];

    return (
        <section id="roadmap" className="bg-[#FFFFFF] py-32 px-6">
            <h2 className="text-[48px] font-bold text-[#1D1D1F] text-center tracking-[-0.02em]">
                Where we&apos;re going.
            </h2>

            <div className="max-w-[600px] mx-auto mt-16 relative">
                {/* Vertical Connecting Line */}
                <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#E5E5E5] z-0" />

                {roadmapItems.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className={`relative pl-10 z-10 ${index !== roadmapItems.length - 1 ? "mb-12" : "mb-0"
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div
                            className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${item.active ? "bg-[#000000] border-[#000000]" : item.colorClass
                                }`}
                        />

                        <span className="uppercase text-[12px] font-semibold tracking-widest text-[#0071E3] block">
                            {item.label}
                        </span>
                        <h3 className="text-[24px] font-bold text-[#1D1D1F] mt-1">
                            {item.title}
                        </h3>
                        <p className="text-[17px] text-[#6E6E73] mt-2 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
