"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
    return (
        <section id="skills" className="py-24 scroll-mt-16">
            <SectionHeading title="04. Skills" />

            <div className="flex flex-wrap gap-3 mt-8">
                {resumeData.skills.map((skill, idx) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full font-mono text-sm shadow-sm hover:bg-blue-500/20 hover:border-blue-500/40 transition-colors"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
