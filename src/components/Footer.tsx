import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#FFFFFF] border-t border-[#E5E5E5] py-8 px-6">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[14px] text-[#6E6E73]">
                    © 2026 AskLabs. All rights reserved.
                </p>

                <div className="flex items-center text-[14px] text-[#6E6E73]">
                    <Link href="/privacy" className="hover:text-[#1D1D1F] transition-colors">Privacy</Link>
                    <span className="mx-2">·</span>
                    <Link href="/terms" className="hover:text-[#1D1D1F] transition-colors">Terms</Link>
                    <span className="mx-2">·</span>
                    <a href="mailto:askwhy133@gmail.com" className="hover:text-[#1D1D1F] transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
