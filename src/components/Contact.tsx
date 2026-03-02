"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export function Contact() {
    return (
        <section id="contact" className="py-32 mb-20 text-center max-w-2xl mx-auto scroll-mt-16">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-blue-500 font-mono mb-4"
            >
                05. What's Next?
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6"
            >
                Get In Touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted text-lg mb-10"
            >
                I'm currently looking for new opportunities as a software engineering intern.
                Whether you have a question or just want to say hi, my inbox is always open!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <a
                    href={`mailto:${resumeData.contact.email}`}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-mono transition-colors"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
}
