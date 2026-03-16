"use client";

import { motion } from "framer-motion";
import { Zap, Brain, MessageCircle } from "lucide-react";

export default function Vision() {
    const cards = [
        {
            icon: <Zap size={48} strokeWidth={1.5} color="#1D1D1F" className="mx-auto mb-6" />,
            title: "Instant Creation",
            description: "Generate stunning videos in seconds, not hours.",
        },
        {
            icon: <Brain size={48} strokeWidth={1.5} color="#1D1D1F" className="mx-auto mb-6" />,
            title: "AI-Powered",
            description: "Advanced diffusion models that understand your vision.",
        },
        {
            icon: <MessageCircle size={48} strokeWidth={1.5} color="#1D1D1F" className="mx-auto mb-6" />,
            title: "Human Touch",
            description: "An avatar that listens, understands, and responds.",
        },
    ];

    return (
        <section id="vision" className="bg-[#FFFFFF] py-32 px-6">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-[48px] font-bold text-[#1D1D1F] tracking-[-0.02em]">A New Era of Video.</h2>
                    <p className="text-[21px] text-[#6E6E73] mt-4">Create, interact, and innovate with artificial intelligence.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1000px] mx-auto mt-16">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="text-center p-8 bg-white border border-transparent hover:border-gray-100 hover:shadow-sm transition-all rounded-3xl"
                        >
                            {card.icon}
                            <h3 className="text-[24px] font-semibold text-[#1D1D1F] mb-4">{card.title}</h3>
                            <p className="text-[17px] text-[#6E6E73] leading-relaxed">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
