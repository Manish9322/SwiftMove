"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageSquare, HelpCircle, User, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const faqs = [
  {
    question: "What if my flight is delayed?",
    answer: "We monitor flight schedules and will adjust your porter's arrival time accordingly. No extra charges for flight delays.",
  },
  {
    question: "Can I book for someone else?",
    answer: "Yes, you can. Just enter the traveler's name and contact information during the booking process.",
  },
  {
    question: "Is my luggage insured?",
    answer: "Absolutely. We provide complimentary insurance coverage for your belongings while they are in our care for your complete peace of mind.",
  },
  {
    question: "How do I identify my porter?",
    answer: "You will receive your porter's photo, name, and contact details in your booking confirmation. They will also be wearing a SwiftMove uniform.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer a flexible cancellation policy. You can cancel for a full refund up to 24 hours before your scheduled service time. Please refer to our terms and conditions for more details.",
  },
];

export default function FaqSection() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                        Quick Answers
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        Find answers to common questions about our services. If you can't find what you're looking for, feel free to ask.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <Card className="p-6 lg:p-8 shadow-lg">
                            <CardHeader className="p-0 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <MessageSquare className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl font-headline">Have a Question?</CardTitle>
                                        <CardDescription className="mt-1">
                                            We're here to help. Fill out the form and we'll get back to you.
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <form onSubmit={(e) => handleGenericSubmit(e, "Question Submitted!")} className="space-y-4">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Input id="faq-name" placeholder="Your name" className="pl-10" required />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                        <Input id="faq-email" type="email" placeholder="Your email address" className="pl-10" required />
                                    </div>
                                    <div className="relative">
                                        <HelpCircle className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                                        <Textarea id="faq-question" placeholder="Ask us anything..." rows={4} className="pl-10" required />
                                    </div>
                                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Submit Question</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index} className="bg-secondary/50 border-l-4 border-primary rounded-lg shadow-sm transition-all hover:shadow-md">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline px-6 py-4 text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
