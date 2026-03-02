"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
];

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 border border-white/10 rounded-full"
        >
            <nav className="flex items-center gap-6 text-sm font-medium">
                <ul className="flex items-center gap-6 sm:gap-8 hidden sm:flex">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-muted hover:text-foreground transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(item.href)?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-center gap-4 sm:ml-4 border-l-0 sm:border-l border-white/10 sm:pl-4">
                    <Link
                        href={resumeData.contact.social.GitHub.url}
                        target="_blank"
                        className="text-muted hover:text-foreground transition-colors"
                    >
                        <Github size={18} />
                    </Link>
                    <Link
                        href={resumeData.contact.social.LinkedIn.url}
                        target="_blank"
                        className="text-muted hover:text-foreground transition-colors"
                    >
                        <Linkedin size={18} />
                    </Link>
                    <Link
                        href={`mailto:${resumeData.contact.email}`}
                        className="text-muted hover:text-foreground transition-colors"
                    >
                        <Mail size={18} />
                    </Link>
                </div>
            </nav>
        </motion.header>
    );
}
