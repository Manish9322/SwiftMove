"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CareerCta() {
    return (
        <section className="py-12 md:py-20">
            <div className="container">
                <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Want to Join Us?</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4 mb-8">
                        We're building a team of innovators and problem-solvers. If you're passionate about making travel better, explore our career opportunities.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                        <Link href="/about">View Careers</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
