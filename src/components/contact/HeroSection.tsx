"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
    return (
        <section className="relative bg-primary text-primary-foreground py-20 md:py-32 text-center overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <svg className="absolute bottom-0 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,176C672,149,768,107,864,117.3C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
            <div className="container relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">We're Here to Help</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
                        Have a question, a suggestion, or need support? Our team is ready to assist you. Whether you're a customer, a potential partner, or just curious, we'd love to hear from you.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
