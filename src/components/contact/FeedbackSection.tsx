"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function FeedbackSection() {
    const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);
    const { toast } = useToast();

    const handleFeedbackSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toast({
            title: "Feedback Submitted!",
            description: "Thank you for helping us improve our service.",
        });
        (e.target as HTMLFormElement).reset();
        setIsFeedbackDialogOpen(false);
    }

    return (
        <section className="py-12 md:py-20">
            <div className="container text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">We Value Your Feedback</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4 mb-8">
                    Your suggestions help us improve. Share your experience or ideas with us.
                </p>
                <Dialog open={isFeedbackDialogOpen} onOpenChange={setIsFeedbackDialogOpen}>
                    <DialogTrigger asChild>
                        <Button size="lg" variant="outline">
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Share Feedback
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Share Your Feedback</DialogTitle>
                            <DialogDescription>We appreciate you taking the time to share your thoughts.</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="feedback-name">Name</Label>
                                <Input id="feedback-name" placeholder="Your Name" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="feedback-email">Email</Label>
                                <Input id="feedback-email" type="email" placeholder="Your Email" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="feedback-message">Message</Label>
                                <Textarea id="feedback-message" placeholder="Your feedback..." required />
                            </div>
                            <DialogFooter>
                                <Button type="submit">Submit Feedback</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
