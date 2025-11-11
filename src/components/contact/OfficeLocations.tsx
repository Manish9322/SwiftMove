"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const locations = [
    { name: "New York Headquarters", address: "123 Swift Ave, New York, NY 10001", image: "https://placehold.co/600x400.png", hint: "new york office" },
    { name: "London Office", address: "456 Move St, London, W1 1AA, UK", image: "https://placehold.co/600x400.png", hint: "london office" },
    { name: "Tokyo Hub", address: "789 Porter Blvd, Shibuya, Tokyo 150-0002", image: "https://placehold.co/600x400.png", hint: "tokyo office" },
];

export default function OfficeLocations() {
    return (
        <section className="bg-secondary py-12 md:py-20">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Global Offices</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        We have a presence in key cities around the world to better serve you.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="overflow-hidden h-full group border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
                                <div className="overflow-hidden h-48 relative">
                                    <Image src={loc.image} alt={loc.name} data-ai-hint={loc.hint} width={600} height={400} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <h3 className="font-bold text-xl text-white absolute bottom-4 left-6">{loc.name}</h3>
                                </div>
                                <CardContent className="p-6">
                                    <p className="text-muted-foreground mt-2 flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                        <span>{loc.address}</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
