
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Mail, MapPin, Phone, MessageSquare, Building, Users, Briefcase, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AppLayout from '../app-layout';
import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
  { question: "How do I modify my booking?", answer: "You can modify your booking details, including time and location, through the 'My Bookings' section of your account up to 2 hours before the scheduled service time." },
  { question: "What is your cancellation policy?", answer: "We offer free cancellations up to 24 hours before your service. Cancellations made within 24 hours may be subject to a small fee. Please see our terms for full details." },
  { question: "How do I find my assigned porter?", answer: "Once your booking is confirmed, you'll receive your porter's name, photo, and real-time location tracking link. They will be waiting at the exact pickup point you specified." },
  { question: "Are there any luggage restrictions?", answer: "We handle most standard luggage types. For oversized, overweight, or unusual items, please select the 'Special Luggage Care' add-on or contact us in advance to ensure we can accommodate your needs." },
];

const locations = [
    { name: "New York Headquarters", address: "123 Swift Ave, New York, NY 10001", image: "https://placehold.co/600x400.png", hint: "new york office" },
    { name: "London Office", address: "456 Move St, London, W1 1AA, UK", image: "https://placehold.co/600x400.png", hint: "london office" },
    { name: "Tokyo Hub", address: "789 Porter Blvd, Shibuya, Tokyo 150-0002", image: "https://placehold.co/600x400.png", hint: "tokyo office" },
]

export default function ContactPage() {
    return (
        <AppLayout>
            {/* 1. Hero Section */}
            <section className="relative bg-primary text-primary-foreground py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <svg className="absolute bottom-0 text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,176C672,149,768,107,864,117.3C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="container relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-4">Get in Touch</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">We're Here to Help</h1>
                        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
                            Have a question, a suggestion, or need support? Our team is ready to assist you.
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
                                    <form className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <Input placeholder="Your Name" />
                                            <Input type="email" placeholder="Your Email" />
                                        </div>
                                        <Select>
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
                                        <Textarea placeholder="Your Message" rows={5} />
                                        <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">Submit Message</Button>
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
                        <h2 className="text-3xl font-bold font-headline">Connect with the Right Team</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
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
            <section className="py-12 md:py-20">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">Quick Answers</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                            Before you reach out, you might find your answer here.
                        </p>
                    </div>
                     <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                          <AccordionItem value={`item-${index}`} key={index} className="bg-background border border-border rounded-lg shadow-sm transition-all hover:shadow-md">
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline px-6 py-4 text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                </div>
            </section>

            {/* 5. Office Locations */}
            <section className="bg-secondary py-12 md:py-20">
                <div className="container">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-headline">Our Global Offices</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
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
                                <Card className="overflow-hidden h-full group">
                                    <div className="overflow-hidden h-48">
                                     <Image src={loc.image} alt={loc.name} data-ai-hint={loc.hint} width={600} height={400} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-xl">{loc.name}</h3>
                                        <p className="text-muted-foreground mt-2">{loc.address}</p>
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
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                        <Image src="https://placehold.co/1200x500.png" layout="fill" objectFit="cover" alt="World map with office locations" data-ai-hint="world map pins" />
                    </div>
                </div>
            </section>
            
            {/* 7. Social Media Section */}
             <section className="bg-secondary py-12 md:py-20">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold font-headline">Follow Our Journey</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mt-4 mb-8">
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
                         <h2 className="text-3xl font-bold font-headline">Want to Join Us?</h2>
                         <p className="max-w-2xl mx-auto text-muted-foreground mt-4 mb-8">
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
                        <h2 className="text-3xl font-bold font-headline">Stay in the Loop</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground mt-4 mb-8">
                            Subscribe to our newsletter for exclusive offers, new destination announcements, and travel tips.
                        </p>
                        <form className="flex sm:flex-row flex-col gap-2 max-w-md mx-auto">
                            <Input type="email" placeholder="Enter your email" className="flex-1" />
                            <Button type="submit" className="bg-primary hover:bg-primary/90">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* 10. Customer Feedback Section */}
            <section className="py-12 md:py-20">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold font-headline">We Value Your Feedback</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mt-4 mb-8">
                        Your suggestions help us improve. Share your experience or ideas with us.
                    </p>
                    <Button size="lg" variant="outline">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Share Feedback
                    </Button>
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
