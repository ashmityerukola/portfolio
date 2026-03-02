"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
    return (
        <section id="experience" className="py-24 scroll-mt-16">
            <SectionHeading title="02. Experience" />

            <div className="mt-8">
                {resumeData.work.map((job, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="mb-12 relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-white/10 last:before:bottom-auto last:before:h-20"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-background" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground">
                                {job.title} <span className="text-blue-400">@ {job.company}</span>
                            </h3>
                            <span className="text-sm font-mono text-muted mt-1 sm:mt-0">
                                {job.start} — {job.end}
                            </span>
                        </div>
                        <p className="text-sm text-muted mb-4 font-mono">{job.location}</p>
                        <p className="text-muted leading-relaxed">{job.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
