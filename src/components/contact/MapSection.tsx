"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const locations = [
    { name: "New York Headquarters", address: "123 Swift Ave, New York, NY 10001" },
    { name: "London Office", address: "456 Move St, London, W1 1AA, UK" },
    { name: "Tokyo Hub", address: "789 Porter Blvd, Shibuya, Tokyo 150-0002" },
];

export default function MapSection() {
    const [activeLocation, setActiveLocation] = React.useState(locations[0]);

    return (
        <section className="py-12 md:py-20">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Find Us Anywhere</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        Our interactive map shows all our locations. Click on an address to see it on the map.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image src={`https://placehold.co/1200x500.png?text=${encodeURIComponent(activeLocation.name)}`} layout="fill" objectFit="cover" alt="World map with office locations" data-ai-hint="world map pins" className="transition-all duration-500" key={activeLocation.name} />
                    </div>
                    <aside className="md:sticky top-24 h-fit">
                        <div className="flex flex-col gap-4">
                            {locations.map((loc) => (
                                <Card
                                    key={loc.name}
                                    className={`cursor-pointer transition-all duration-300 ${activeLocation.name === loc.name ? 'border-primary shadow-lg' : 'hover:shadow-md'}`}
                                    onClick={() => setActiveLocation(loc)}
                                >
                                    <CardHeader>
                                        <CardTitle className="text-lg">{loc.name}</CardTitle>
                                        <CardDescription>{loc.address}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
