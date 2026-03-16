"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Vision", href: "#vision" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Roadmap", href: "#roadmap" },
        { name: "Kickstarter", href: "#kickstarter" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 z-50">
                    <Image
                        src="/logo-dark.png"
                        alt="AskLabs Logo"
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] object-contain"
                    />
                    <span className="font-semibold text-[18px] text-[#1D1D1F]">
                        AskLabs
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[14px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-[#1D1D1F]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Navigation Menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`fixed inset-0 bg-white pt-[100px] px-6 transition-transform duration-300 md:hidden z-40 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[24px] font-semibold text-[#1D1D1F] border-b border-gray-100 pb-4"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
