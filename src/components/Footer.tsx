"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 text-center text-sm text-muted border-t border-white/5">
            <div className="flex justify-center gap-6 mb-4 sm:hidden">
                <a
                    href={resumeData.contact.social.GitHub.url}
                    target="_blank"
                    className="hover:text-blue-400 transition-colors"
                >
                    <Github size={20} />
                </a>
                <a
                    href={resumeData.contact.social.LinkedIn.url}
                    target="_blank"
                    className="hover:text-blue-400 transition-colors"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href={`mailto:${resumeData.contact.email}`}
                    className="hover:text-amber-400 transition-colors"
                >
                    <Mail size={20} />
                </a>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Designed & Built by{" "}
                <a
                    href={resumeData.contact.social.GitHub.url}
                    target="_blank"
                    className="text-foreground hover:text-blue-400 transition-colors"
                >
                    {resumeData.name}
                </a>
            </motion.p>
        </footer>
    );
}
