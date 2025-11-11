"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAddContactMutation } from '@/services/api';

export default function ContactFormSection() {
    const { toast } = useToast();
    const [addContact, { isLoading }] = useAddContactMutation();

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            await addContact({
                name: data.name as string,
                email: data.email as string,
                reason: data.reason as string,
                message: data.message as string,
            }).unwrap();

            toast({
                title: "Message Sent!",
                description: "We've received your message and will get back to you shortly.",
            });
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <section className="py-12 md:py-20">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-headline">Send Us a Message</CardTitle>
                                <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <Input name="name" placeholder="Your Name" required />
                                        <Input name="email" type="email" placeholder="Your Email" required />
                                    </div>
                                    <Select name="reason" required>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Reason for contacting" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="general">General Inquiry</SelectItem>
                                            <SelectItem value="support">Customer Support</SelectItem>
                                            <SelectItem value="partnership">Partnership</SelectItem>
                                            <SelectItem value="press">Press</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Textarea name="message" placeholder="Your Message" rows={5} required />
                                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                                        {isLoading ? "Submitting..." : "Submit Message"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-6 rounded-lg bg-muted border">
                            <h3 className="text-xl font-bold font-headline mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span>+1 (800) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>info@swiftmove.com</span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-5 w-5 text-primary mt-1" />
                                    <span>123 Swift Avenue, New York, NY 10001, USA</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg bg-muted border">
                            <h3 className="text-xl font-bold font-headline mb-4">Business Hours</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between"><span>Customer Support:</span> <span className="font-semibold text-primary">24/7</span></div>
                                <div className="flex justify-between"><span>Office Hours:</span> <span className="font-semibold">Mon-Fri, 9am - 5pm EST</span></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
