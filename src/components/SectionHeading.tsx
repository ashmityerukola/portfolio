"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 relative inline-block"
        >
            {title}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-2 left-0 h-1 bg-blue-500 rounded-full"
            />
        </motion.h2>
    );
}
