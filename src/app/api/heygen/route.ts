import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const { message, sessionId } = body;

        const apiKey = process.env.HEYGEN_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
        }

        if (!sessionId) {
            // Create new session
            const res = await fetch("https://api.heygen.com/v1/streaming.new", {
                method: "POST",
                headers: {
                    "X-Api-Key": apiKey,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    quality: "high",
                    avatar_name: process.env.HEYGEN_AVATAR_ID || "c7b85542-1af4-11f1-a99e-066a7fa2e369",
                    voice: {
                        voice_id: process.env.HEYGEN_VOICE_ID || "default",
                    },
                }),
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error("HeyGen API creation failed:", res.status, errorText);
                return NextResponse.json(
                    { error: `Failed to create session: ${res.statusText}`, details: errorText },
                    { status: res.status }
                );
            }

            const data = await res.json();
            return NextResponse.json(data);
        } else if (sessionId && message) {
            // Speak request
            const res = await fetch("https://api.heygen.com/v1/streaming.task", {
                method: "POST",
                headers: {
                    "X-Api-Key": apiKey,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    session_id: sessionId,
                    text: message,
                    task_type: "talk",
                }),
            });

            if (!res.ok) {
                const errorText = await res.text();
                console.error("HeyGen API speak failed:", res.status, errorText);
                return NextResponse.json(
                    { error: `Failed to send message: ${res.statusText}`, details: errorText },
                    { status: res.status }
                );
            }

            const data = await res.json();
            return NextResponse.json(data);
        } else {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
        }
    } catch (error: any) {
        console.error("HeyGen API route error:", error);
        return NextResponse.json(
            { error: "Internal server error", message: error.message },
            { status: 500 }
        );
    }
}
