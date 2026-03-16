"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function HeyGenAvatar() {
    const [input, setInput] = useState("");
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const peerConnectionRef = useRef<RTCPeerConnection | null>(null);

    useEffect(() => {
        let active = true;

        async function initializeSession() {
            try {
                setIsLoading(true);
                const res = await fetch("/api/heygen", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({}),
                });
                const data = await res.json();
                if (data && data.data && data.data.session_id && active) {
                    setSessionId(data.data.session_id);
                    setIsConnected(true);

                    // Optional: You could configure WebRTC video streaming here using standard HeyGen protocols.
                    // Due to the complexity of the full WebRTC handshake, in this MVP, 
                    // we are assuming the streaming endpoint manages initial handshake setup locally
                    // if provided via HeyGen SDK. To maintain a simple implementation,
                    // video setup will wait for stream signals.
                }
            } catch (err) {
                console.error(err);
            } finally {
                if (active) setIsLoading(false);
            }
        }

        initializeSession();

        return () => {
            active = false;
        };
    }, []);

    const handleSend = async () => {
        if (!input.trim() || !sessionId) return;
        setIsLoading(true);

        try {
            await fetch("/api/heygen", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, message: input }),
            });
            setInput("");
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="w-full">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 shadow-2xl mx-auto">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover z-20 relative"
                    autoPlay
                    playsInline
                    muted
                />

                {/* Fallback View */}
                {!isConnected && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center animate-pulse">
                        <Image
                            src="/logo-dark.png"
                            alt="AskLabs Logo"
                            width={100}
                            height={100}
                            className="w-[100px] h-[100px] object-contain opacity-20"
                        />
                    </div>
                )}
            </div>

            <div className="mt-8 flex gap-3 w-full max-w-[480px] mx-auto">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    className="flex-1 px-6 py-3 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-base text-[#1D1D1F] placeholder:text-[#999999]"
                    disabled={!isConnected}
                />
                <button
                    onClick={handleSend}
                    disabled={isLoading || !input.trim() || !isConnected}
                    className="px-6 py-3 bg-[#000000] text-white rounded-full hover:bg-gray-800 transition-all duration-300 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message to AI avatar"
                >
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </div>

            <div className="mt-4 flex flex-row items-center justify-center gap-2 text-sm text-[#6E6E73]">
                <div
                    className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-gray-400"
                        }`}
                />
                <span>{isConnected ? "Connected" : "Connecting..."}</span>
            </div>
        </div>
    );
}
