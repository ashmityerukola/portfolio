"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center pt-20">
            <div className="max-w-3xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-blue-500 font-mono mb-4"
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-4"
                >
                    {resumeData.name}.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl sm:text-6xl font-bold tracking-tight text-muted mb-8"
                >
                    I build robust software systems.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-muted max-w-xl mb-12"
                >
                    {resumeData.summary}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-4"
                >
                    <a
                        href={`mailto:${resumeData.contact.email}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                    >
                        <Mail size={18} />
                        Get In Touch
                    </a>
                    <a
                        href={resumeData.contact.social.GitHub.url}
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 hover:bg-white/5 font-medium transition-colors"
                    >
                        GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
