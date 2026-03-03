"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function About() {
    return (
        <section id="about" className="py-24 scroll-mt-16">
            <SectionHeading title="01. About Me" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-muted space-y-4 text-lg"
                >
                    <p>{resumeData.about}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-xl font-bold text-foreground mb-4 border-b border-white/10 pb-2">
                        Education
                    </h3>
                    {resumeData.education.map((edu, idx) => (
                        <div key={idx} className="mb-6">
                            <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                                <h4 className="font-semibold text-lg text-blue-400">
                                    {edu.school}
                                </h4>
                                <span className="text-sm font-mono text-muted whitespace-nowrap">
                                    {edu.end}
                                </span>
                            </div>
                            <p className="text-foreground font-medium mb-2">{edu.degree}</p>
                            <p className="text-sm text-muted">{edu.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
