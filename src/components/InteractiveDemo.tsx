"use client";

import HeyGenAvatar from "./HeyGenAvatar";

export default function InteractiveDemo() {
    return (
        <section id="demo" className="bg-[#FFFFFF] py-32 px-6">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                <h2 className="text-[48px] font-bold text-[#1D1D1F] text-center tracking-[-0.02em]">
                    Try it yourself.
                </h2>
                <p className="text-[21px] text-[#6E6E73] text-center mt-4">
                    Have a conversation with our AI avatar right now.
                </p>

                <div className="mt-12 w-full max-w-[600px] mx-auto">
                    <HeyGenAvatar />
                </div>
            </div>
        </section>
    );
}
