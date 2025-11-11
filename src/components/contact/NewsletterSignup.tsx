"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSignup() {
    const { toast } = useToast();

    const handleGenericSubmit = (e: React.FormEvent<HTMLFormElement>, title: string) => {
        e.preventDefault();
        toast({
            title: title,
            description: "We've received your message and will get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section className="bg-secondary py-12 md:py-20">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center">
                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                        <Mail className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Stay in the Loop</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4 mb-8">
                        Subscribe to our newsletter for exclusive offers, new destination announcements, and travel tips. No spam, we promise.
                    </p>
                    <form onSubmit={(e) => handleGenericSubmit(e, "Subscribed!")} className="flex sm:flex-row flex-col gap-2 max-w-md mx-auto">
                        <Input type="email" placeholder="Enter your email" className="flex-1 h-12" required />
                        <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 h-12">Subscribe</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
