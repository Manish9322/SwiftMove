"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BookingCta() {
    return (
        <section className="bg-primary text-primary-foreground">
            <div className="container py-12 md:py-20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold font-headline">Ready for a Seamless Journey?</h2>
                        <p className="mt-4 max-w-xl text-lg opacity-90">
                            Let us handle the luggage while you enjoy the trip. Book a professional porter in minutes.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                            <Link href="/booking">Book a Porter Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
