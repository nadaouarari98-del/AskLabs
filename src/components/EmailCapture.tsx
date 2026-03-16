"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-6 border-t border-[#F3F4F6] flex justify-center">
      <div className="max-w-[480px] w-full text-center">
        <h2 className="text-[2rem] font-bold text-[#1D1D1F] mb-2">Get Early Access</h2>
        <p className="text-[#6E6E73] mb-8">Be the first to know when we launch.</p>
        {submitted ? (
          <div className="text-green-600 text-lg font-medium py-6">You're on the list! 🎉</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3 rounded-full border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-base text-[#1D1D1F] placeholder:text-[#A3A3A3] min-w-[200px]"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-[#000] text-white font-semibold text-base hover:bg-[#222] transition-all"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
