
"use client";

import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Mail, MapPin, Phone, MessageSquare, Building, Users, Briefcase, HelpCircle, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';
import AppLayout from '../app-layout';
import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAddContactMutation } from '@/services/api';

const contactPoints = [
    {
        icon: MessageSquare,
        title: "General Inquiries",
        description: "For any general questions about our services, how it works, or anything else.",
        email: "info@swiftmove.com",
        phone: "+1 (800) 123-4567"
    },
    {
        icon: HelpCircle,
        title: "Customer Support",
        description: "Need help with a booking? Our support team is here for you 24/7.",
        email: "support@swiftmove.com",
        phone: "+1 (800) 123-4568"
    },
    {
        icon: Briefcase,
        title: "Partnerships & B2B",
        description: "Interested in corporate packages or partnership opportunities?",
        email: "partners@swiftmove.com",
        phone: "+1 (800) 123-4569"
    },
    {
        icon: Building,
        title: "Press & Media",
        description: "For all media inquiries, please reach out to our communications team.",
        email: "press@swiftmove.com",
        phone: "+1 (800) 123-4570"
    }
];

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

const locations = [
    { name: "New York Headquarters", address: "123 Swift Ave, New York, NY 10001", image: "https://placehold.co/600x400.png", hint: "new york office" },
    { name: "London Office", address: "456 Move St, London, W1 1AA, UK", image: "https://placehold.co/600x400.png", hint: "london office" },
    { name: "Tokyo Hub", address: "789 Porter Blvd, Shibuya, Tokyo 150-0002", image: "https://placehold.co/600x400.png", hint: "tokyo office" },
]

export default function ContactPage() {
    const [activeLocation, setActiveLocation] = React.useState(locations[0]);
    const { toast } = useToast();
    const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);
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
    
    const handleGenericSubmit = (e: React.FormEvent<HTMLFormElement>, title: string) => {
        e.preventDefault();
        toast({
            title: title,
            description: "We've received your message and will get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
    };


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
        <AppLayout>
            {/* 1. Hero Section */}
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

            {/* 2. Contact Form & Info Section */}
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
                                            <Input name="name" placeholder="Your Name" required/>
                                            <Input name="email" type="email" placeholder="Your Email" required/>
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
                                        <Textarea name="message" placeholder="Your Message" rows={5} required/>
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
                                       <Phone className="h-5 w-5 text-primary"/>
                                       <span>+1 (800) 123-4567</span>
                                   </div>
                                   <div className="flex items-center gap-4">
                                       <Mail className="h-5 w-5 text-primary"/>
                                       <span>info@swiftmove.com</span>
                                   </div>
                                   <div className="flex items-start gap-4">
                                       <MapPin className="h-5 w-5 text-primary mt-1"/>
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

            {/* 3. Department Contacts */}
            <section className="bg-secondary py-12 md:py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Connect with the Right Team</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                            Find the direct contact information for your specific needs.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                                            <point.icon className="h-8 w-8" />
                                        </div>
                                        <CardTitle>{point.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm mb-4">{point.description}</p>
                                        <div className="space-y-2">
                                            <a href={`mailto:${point.email}`} className="block text-primary hover:underline text-sm">{point.email}</a>
                                            <a href={`tel:${point.phone}`} className="block text-muted-foreground hover:text-primary text-sm">{point.phone}</a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FAQ Section */}
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
                                            <Input id="faq-name" placeholder="Your name" className="pl-10" required/>
                                        </div>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                            <Input id="faq-email" type="email" placeholder="Your email address" className="pl-10" required/>
                                        </div>
                                        <div className="relative">
                                            <HelpCircle className="absolute left-3 top-4 h-5 w-5 text-muted-foreground" />
                                            <Textarea id="faq-question" placeholder="Ask us anything..." rows={4} className="pl-10" required/>
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

            {/* 5. Office Locations */}
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
                                            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1"/>
                                            <span>{loc.address}</span>
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Map Section */}
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
                             <Image src={`https://placehold.co/1200x500.png?text=${encodeURIComponent(activeLocation.name)}`} layout="fill" objectFit="cover" alt="World map with office locations" data-ai-hint="world map pins" className="transition-all duration-500" key={activeLocation.name}/>
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
            
            {/* 7. Social Media Section */}
             <section className="bg-secondary py-12 md:py-20">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Follow Our Journey</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4 mb-8">
                        Stay connected with us on social media for the latest news, updates, and travel tips.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Button size="lg" variant="outline" asChild>
                            <Link href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 9.7v.2c0 1.5-.4 3.6-1.3 5.4-1.1 2.2-2.9 4-5.2 5.2-1.5 1-3.4 1.3-5.1 1.3h-.1c-5.4 0-10.7-4-10.7-10.7v-.2c0-4.6 1.8-8.2 3.3-9.5C5.1 6.5 4 4.1 4 4s1.6-1.2 3.5-1.2c1.9 0 3.3 2.1 3.3 2.1s1.3-1.2 3.2-1.2c1.9 0 3.5 1.2 3.5 1.2z"/></svg>
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
            
            {/* 8. Career Opportunities CTA */}
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
            
            {/* 9. Newsletter Signup */}
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
                            <Input type="email" placeholder="Enter your email" className="flex-1 h-12" required/>
                            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 h-12">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* 10. Customer Feedback Section */}
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
                                    <Input id="feedback-name" placeholder="Your Name" required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="feedback-email">Email</Label>
                                    <Input id="feedback-email" type="email" placeholder="Your Email" required/>
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="feedback-message">Message</Label>
                                    <Textarea id="feedback-message" placeholder="Your feedback..." required/>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Submit Feedback</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </section>

            {/* 11. CTA to Booking */}
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
        </AppLayout>
    );
}
