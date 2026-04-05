"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";
import { Folder } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-24 scroll-mt-16">
            <SectionHeading title="03. Projects" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {resumeData.projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative flex flex-col justify-between h-full bg-card hover:bg-[#111113] border border-white/5 hover:border-blue-500/50 rounded-lg p-6 transition-all duration-300"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <Folder className="text-blue-500 h-10 w-10 stroke-1" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted mb-6 leading-relaxed line-clamp-4">
                                {project.description}
                            </p>
                        </div>

                        <ul className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies.map((tech, i) => (
                                <li key={i} className="text-xs font-mono text-muted">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
