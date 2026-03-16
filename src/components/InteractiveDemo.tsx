"use client";

// import removed: HeyGenAvatar

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

                <div className="mt-12 w-full max-w-[600px] mx-auto flex flex-col items-center">
                    <div className="bg-[#18181b] rounded-2xl flex flex-col items-center justify-center w-full max-w-[420px] aspect-video mx-auto shadow-lg">
                        <div className="flex flex-col items-center justify-center">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="28" cy="28" r="28" fill="#232329"/>
                                <polygon points="23,18 41,28 23,38" fill="#fff"/>
                            </svg>
                            <span className="block mt-4 text-[#fff] text-lg font-medium opacity-80">Demo Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
