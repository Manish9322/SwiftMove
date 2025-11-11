"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SocialMediaSection() {
    return (
        <section className="bg-secondary py-12 md:py-20">
            <div className="container text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Follow Our Journey</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4 mb-8">
                    Stay connected with us on social media for the latest news, updates, and travel tips.
                </p>
                <div className="flex justify-center gap-6">
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 9.7v.2c0 1.5-.4 3.6-1.3 5.4-1.1 2.2-2.9 4-5.2 5.2-1.5 1-3.4 1.3-5.1 1.3h-.1c-5.4 0-10.7-4-10.7-10.7v-.2c0-4.6 1.8-8.2 3.3-9.5C5.1 6.5 4 4.1 4 4s1.6-1.2 3.5-1.2c1.9 0 3.3 2.1 3.3 2.1s1.3-1.2 3.2-1.2c1.9 0 3.5 1.2 3.5 1.2z" /></svg>
                            Twitter / X
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            LinkedIn
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            Facebook
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
