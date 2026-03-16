"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Describe your vision",
            description: "Type or speak your creative brief to the AI.",
        },
        {
            number: "02",
            title: "AI generates your video",
            description: "Our diffusion engine creates your video frame by frame.",
        },
        {
            number: "03",
            title: "Refine with your AI avatar",
            description: "Have a real-time conversation to perfect every detail.",
        },
    ];

    return (
        <section id="how-it-works" className="bg-[#F5F5F7] py-32 px-6">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[48px] font-bold text-[#1D1D1F] text-center tracking-[-0.02em]">
                    Simple. Powerful. Intelligent.
                </h2>

                <div className="flex flex-col md:flex-row gap-16 max-w-[1000px] mx-auto mt-16 items-start">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="flex-1 text-center md:text-left"
                        >
                            <div className="text-[80px] font-bold text-[#E5E5E5] leading-none select-none">
                                {step.number}
                            </div>
                            <h3 className="text-[24px] font-bold text-[#1D1D1F] mt-4">
                                {step.title}
                            </h3>
                            <p className="text-[17px] text-[#6E6E73] mt-2 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
