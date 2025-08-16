
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Handshake, Heart, Lightbulb, MapPin, Rocket, Shield, Smile, Sparkles, Star, Target, ThumbsUp, TrendingUp, Users, Award, Briefcase, Building, GitBranch, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AppLayout from '../app-layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const timelineEvents = [
    { year: "2021", title: "The Spark of an Idea", description: "Frustrated by chaotic airport experiences, our founders envisioned a seamless way to connect travelers with reliable porters." },
    { year: "2022", title: "Building the Foundation", description: "Development begins on the SwiftMove platform, focusing on user-friendly design and robust, AI-powered logistics." },
    { year: "2023", title: "Official Launch", description: "SwiftMove officially launches in three major airports, receiving overwhelmingly positive feedback from early adopters." },
    { year: "2024", title: "Expanding Our Reach", description: "We expanded our services to over 20 airports and introduced new features like real-time tracking and corporate packages." },
    { year: "Future", title: "The Journey Ahead", description: "Our mission continues: to redefine travel convenience globally, one stress-free journey at a time." },
];

const teamMembers = [
    { name: "John Carter", role: "CEO & Co-Founder", image: "https://placehold.co/150x150.png", hint: "male ceo portrait" },
    { name: "Jane Doe", role: "CTO & Co-Founder", image: "https://placehold.co/150x150.png", hint: "female cto portrait" },
    { name: "Peter Jones", role: "Head of Operations", image: "https://placehold.co/150x150.png", hint: "operations manager portrait" },
    { name: "Samantha Lee", role: "Lead UX Designer", image: "https://placehold.co/150x150.png", hint: "female designer portrait" },
];

const coreValues = [
    { icon: Smile, title: "Customer-First", description: "Our customers are at the heart of everything we do. We strive to exceed expectations at every turn." },
    { icon: Shield, title: "Unwavering Integrity", description: "We operate with transparency, honesty, and a strong sense of responsibility in all our interactions." },
    { icon: Lightbulb, title: "Continuous Innovation", description: "We embrace technology and creative thinking to constantly improve our service and user experience." },
    { icon: Users, title: "Empowered Team", description: "We foster a supportive and collaborative environment where every team member can thrive and contribute." },
];

const differentiators = [
    { icon: Rocket, title: "AI-Powered Logistics", description: "Our smart system optimizes porter matching and routing for unparalleled efficiency, reducing wait times and ensuring a smooth handover." },
    { icon: Check, title: "Rigorous Vetting Process", description: "Every porter undergoes extensive background checks, interviews, and comprehensive training for your safety and peace of mind." },
    { icon: ThumbsUp, title: "Seamless User Experience", description: "From a 60-second booking process to real-time updates, our platform is designed to be intuitive and completely hassle-free." },
    { icon: Handshake, title: "Strong Partnerships", description: "We collaborate closely with airports, airlines, and travel providers to ensure a smooth, integrated service from curb to gate." },
];

const openPositions = [
    { title: "Senior Backend Engineer", location: "Remote", department: "Engineering" },
    { title: "Customer Support Specialist", location: "New York, USA", department: "Customer Experience" },
    { title: "Digital Marketing Manager", location: "London, UK", department: "Marketing" },
    { title: "Operations Coordinator", location: "Remote", department: "Operations" },
];

const pressMentions = [
    { logo: "https://placehold.co/150x50.png", hint: "tech news logo", name: "Tech Today" },
    { logo: "https://placehold.co/150x50.png", hint: "travel magazine logo", name: "Global Traveler" },
    { logo: "https://placehold.co/150x50.png", hint: "business journal logo", name: "Startup Weekly" },
    { logo: "https://placehold.co/150x50.png", hint: "innovation publication logo", name: "Future Forward" },
];

export default function AboutPage() {
    return (
        <AppLayout>
            {/* 1. Hero Section */}
            <section className="relative bg-secondary py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="container relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="outline" className="mb-4 border-primary text-primary">About SwiftMove</Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">Redefining Travel, One Porter at a Time</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                            We are a passionate team dedicated to making your travel experience smoother, safer, and completely stress-free through innovation and exceptional service.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Our Mission & Vision Section */}
            <section className="py-12 md:py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-video md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image src="https://placehold.co/500x600.png" alt="Team collaborating" data-ai-hint="team collaboration office" layout="fill" objectFit="cover" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </motion.div>
                        <div className="flex flex-col gap-8">
                             <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className="p-6 rounded-lg bg-muted/50 border border-border h-full flex flex-col justify-center shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <Target className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold font-headline">Our Mission</h2>
                                </div>
                                <p className="text-muted-foreground">To unburden travelers worldwide by providing a reliable, secure, and hyper-efficient platform for porter services, turning stressful journeys into seamless, positive experiences from the first click to the final destination.</p>
                            </motion.div>
                             <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="p-6 rounded-lg bg-muted/50 border border-border h-full flex flex-col justify-center shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <Sparkles className="h-6 w-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold font-headline">Our Vision</h2>
                                </div>
                                <p className="text-muted-foreground">To become the global standard for on-demand travel assistance, integrating predictive AI and exceptional human service to be an indispensable part of every modern journey, recognized for our innovation and unwavering commitment to customer satisfaction.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Story (Timeline) Section */}
            <section className="bg-secondary py-12 md:py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Journey So Far</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                            From a simple idea to a trusted service, our story is one of passion and perseverance.
                        </p>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center w-full my-4 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className={`md:w-1/2 p-2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div className={`bg-background rounded-lg shadow-lg p-6 border-l-4 ${index % 2 === 0 ? 'border-primary' : 'border-accent'}`}>
                                        <Badge variant="default" className="mb-2">{event.year}</Badge>
                                        <h3 className="text-xl font-bold">{event.title}</h3>
                                        <p className="text-muted-foreground mt-2">{event.description}</p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 bg-primary h-4 w-4 rounded-full ring-8 ring-secondary" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Meet the Team Section */}
            <section className="py-12 md:py-20">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">The People Behind SwiftMove</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4 mb-12">
                        Meet the leadership team guiding our mission to revolutionize travel.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="group flex flex-col items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="relative w-40 h-40">
                                    <Image src={member.image} alt={member.name} data-ai-hint={member.hint} width={160} height={160} className="rounded-full object-cover shadow-lg transition-all duration-300 group-hover:scale-105" />
                                </div>
                                <h3 className="font-bold text-xl mt-4">{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                                <div className="flex gap-4 mt-2 text-muted-foreground">
                                    <Link href="#" className="hover:text-primary"><Twitter className="h-5 w-5" /></Link>
                                    <Link href="#" className="hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Our Core Values Section */}
            <section className="bg-secondary py-12 md:py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Guiding Principles</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                            These values are the foundation of our culture and the compass for our decisions.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col border-t-4 border-primary/20 hover:border-primary">
                                    <CardHeader>
                                        <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                                            <value.icon className="h-8 w-8" />
                                        </div>
                                        <CardTitle>{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. What Makes Us Different */}
            <section className="py-12 md:py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
                        >
                             <Image src="https://placehold.co/500x500.png" alt="A porter assisting a customer" data-ai-hint="friendly porter customer" layout="fill" objectFit="cover" />
                        </motion.div>
                         <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                         >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">The SwiftMove Advantage</h2>
                            <p className="text-muted-foreground md:text-xl/relaxed mt-4 mb-8">We're not just another service; we are a travel revolution built on a foundation of unique strengths that set us apart.</p>
                            <div className="space-y-6">
                                {differentiators.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 7. Technology & Innovation */}
            <section className="bg-secondary py-12 md:py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Driven by Innovation</h2>
                        <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                            Technology is our engine for creating a seamless and efficient travel experience. We leverage cutting-edge solutions to solve real-world travel challenges.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6 text-center group bg-transparent border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2">
                            <Rocket className="h-12 w-12 mx-auto text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                            <h3 className="text-xl font-bold">Smart Matching Algorithm</h3>
                            <p className="text-muted-foreground mt-2">Our AI instantly connects you with the best available porter based on location, time, and ratings.</p>
                        </Card>
                        <Card className="p-6 text-center group bg-transparent border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2">
                            <GitBranch className="h-12 w-12 mx-auto text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                            <h3 className="text-xl font-bold">Optimized Route Planning</h3>
                            <p className="text-muted-foreground mt-2">We calculate the most efficient routes within transport hubs to save you precious time.</p>
                        </Card>
                        <Card className="p-6 text-center group bg-transparent border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-2">
                            <Shield className="h-12 w-12 mx-auto text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                            <h3 className="text-xl font-bold">Secure, Scalable Platform</h3>
                            <p className="text-muted-foreground mt-2">Built on robust infrastructure to ensure your data is safe and our service is always available.</p>
                        </Card>
                    </div>
                </div>
            </section>
            
            {/* 8. Join Our Team */}
            <section className="py-12 md:py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-primary/10 p-8 md:p-12 rounded-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Help Us Shape the Future of Travel</h2>
                            <p className="text-muted-foreground md:text-xl/relaxed mt-4 mb-6">
                                We're always looking for talented and passionate individuals to join our growing team. If you're excited about solving real-world travel challenges, we'd love to hear from you.
                            </p>
                            <Button size="lg" className="bg-accent hover:bg-accent/90">
                                View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                        <motion.div
                             initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="bg-background shadow-lg">
                                <CardHeader>
                                    <CardTitle>Current Openings</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {openPositions.map((pos, i) => (
                                            <li key={i} className="flex justify-between items-center pb-2 border-b last:border-none">
                                                <div>
                                                    <p className="font-semibold">{pos.title}</p>
                                                    <p className="text-sm text-muted-foreground">{pos.department} - {pos.location}</p>
                                                </div>
                                                <ArrowRight className="h-5 w-5 text-primary" />
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* 9. Press & Media */}
            <section className="bg-secondary py-12 md:py-20">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">As Featured In</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4 mb-12">
                        We're proud to be recognized by leading publications in technology and travel.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {pressMentions.map((press, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <Image src={press.logo} alt={press.name} data-ai-hint={press.hint} width={150} height={50} className="opacity-60 hover:opacity-100 transition-opacity" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* 10. Our Commitment to the Community */}
            <section className="py-12 md:py-20">
                <div className="container">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                         <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative aspect-video rounded-2xl overflow-hidden shadow-lg"
                        >
                             <Image src="https://placehold.co/600x400.png" alt="Community event" data-ai-hint="community event charity" layout="fill" objectFit="cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">More Than a Service</h2>
                             <p className="text-muted-foreground md:text-xl/relaxed mt-4 mb-6">
                                We believe in giving back to the communities we operate in and creating a positive impact beyond travel. We are dedicated to fostering local employment, promoting sustainable practices, and supporting community-driven initiatives.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                                    <Heart className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Local Partnerships</h4>
                                        <span>We collaborate with local charities to support employment initiatives and contribute to community development projects.</span>
                                    </div>
                                </li>
                                 <li className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                                    <GitBranch className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold">Green Initiatives</h4>
                                        <span>We actively implement eco-friendly practices within transport hubs to minimize our environmental footprint and promote sustainability.</span>
                                    </div>
                                </li>
                                 <li className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                                    <Briefcase className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                     <div>
                                        <h4 className="font-bold">Fair Employment</h4>
                                        <span>We are committed to providing fair, living wages and creating professional growth opportunities for all our porters, empowering our team.</span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* 11. CTA Section */}
            <section className="bg-primary text-primary-foreground">
                <div className="container py-12 md:py-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold font-headline">Ready to Experience the Difference?</h2>
                        <p className="mt-4 max-w-xl mx-auto text-lg opacity-90">
                            Join thousands of happy travelers who have unburdened their journey with SwiftMove.
                        </p>
                        <Button size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                            <Link href="/booking">Book Your Porter Today</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </AppLayout>
    );
}
