
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, ShieldCheck, Star, Users, ArrowRight, LifeBuoy, CreditCard, ShoppingCart, Info, Luggage, Gift, Flame } from 'lucide-react';
import Link from 'next/link';
import AppLayout from '../app-layout';
import BookingForm from '@/components/BookingForm';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from "framer-motion";

const whyBookWithUs = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure & Vetted",
    description: "All porters are background-checked and trained for your safety.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Always On Time",
    description: "We value your schedule and guarantee punctuality.",
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: "24/7 Support",
    description: "Our team is here to help you anytime, day or night.",
  },
];

const bookingSteps = [
    {
        icon: ShoppingCart,
        title: "1. Fill Your Details",
        description: "Complete the form with your journey information. It's quick and easy.",
    },
    {
        icon: CreditCard,
        title: "2. Confirm & Pay",
        description: "Review your details and complete the secure payment process.",
    },
    {
        icon: Users,
        title: "3. Meet Your Porter",
        description: "We'll assign a porter and you'll receive their details instantly.",
    }
];

const luggageTypes = [
    { name: "Backpack", image: "https://placehold.co/200x200.png", hint: "travel backpack" },
    { name: "Carry-on", image: "https://placehold.co/200x200.png", hint: "carry-on suitcase" },
    { name: "Large Suitcase", image: "https://placehold.co/200x200.png", hint: "large suitcase" },
    { name: "Duffel Bag", image: "https://placehold.co/200x200.png", hint: "duffel bag" },
    { name: "Odd-size Items", image: "https://placehold.co/200x200.png", hint: "golf clubs" },
];

const addons = [
    { icon: Flame, title: "Express Handling", description: "Priority service to get you on your way faster." },
    { icon: Gift, title: "Special Luggage Care", description: "Extra attention for fragile or valuable items." },
    { icon: Info, title: "Real-time Tracking", description: "Monitor your porter's location for peace of mind." },
];

const testimonials = [
  {
    name: "Alex Johnson",
    comment: "The booking process was so intuitive and fast. I had my porter confirmed in less than two minutes. A truly modern service!",
    avatar: "https://placehold.co/48x48.png",
    hint: "person smiling"
  },
  {
    name: "Maria Garcia",
    comment: "I loved how transparent the pricing was. No hidden fees. What you see is what you pay. Made booking a breeze.",
    avatar: "https://placehold.co/48x48.png",
    hint: "woman portrait"
  },
];

const checklistItems = [
    "Double-check your pickup time and location.",
    "Keep your booking confirmation email handy.",
    "Ensure your phone is charged to communicate with your porter.",
    "Have your luggage ready for a swift handover.",
    "Relax and look forward to a hassle-free journey!"
];


export default function BookingPage() {
  return (
    <AppLayout>
      {/* 1. Hero Section */}
      <section className="relative bg-secondary py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container relative">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Badge variant="outline" className="mb-4 border-primary text-primary">Secure Booking</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Book Your Porter Service</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Just a few details and you'll be on your way to a stress-free travel experience.
                </p>
            </motion.div>
        </div>
      </section>

      {/* 2. Main Booking Form Section */}
      <section className="py-12 md:py-20">
          <div className="container">
               <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                   <div className="md:col-span-2">
                     <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                     >
                        <Card className="shadow-2xl border-2 border-primary">
                            <CardHeader>
                                <CardTitle className="text-2xl font-headline flex items-center gap-3">
                                    <ShoppingCart className="h-6 w-6 text-primary"/>
                                    <span>Your Booking Details</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <BookingForm />
                            </CardContent>
                        </Card>
                      </motion.div>
                   </div>
                   {/* 3. Why Book With Us Section */}
                   <aside className="space-y-6">
                     <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                     >
                        <h3 className="text-xl font-bold font-headline mb-4">Why Book with SwiftMove?</h3>
                        {whyBookWithUs.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 mb-4">
                                <div>{item.icon}</div>
                                <div>
                                    <h4 className="font-semibold">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                      </motion.div>
                   </aside>
               </div>
          </div>
      </section>

      {/* 4. How It Works Section */}
       <section className="bg-secondary py-12 md:py-20">
            <div className="container text-center">
                <h2 className="text-3xl font-bold font-headline mb-4">A Simple 3-Step Process</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
                    We've simplified the booking process to save you time and effort.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                     {bookingSteps.map((step, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background p-8 rounded-lg shadow-lg text-center"
                        >
                            <div className="mx-auto bg-primary/10 text-primary h-16 w-16 flex items-center justify-center rounded-full mb-6">
                                <step.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </motion.div>
                     ))}
                </div>
            </div>
      </section>

      {/* 5. Luggage We Handle Section */}
       <section className="py-12 md:py-20">
            <div className="container text-center">
                <h2 className="text-3xl font-bold font-headline mb-4">We Handle All Types of Luggage</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground mb-12">
                    From single backpacks to oversized items, our porters are equipped to handle it all.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                     {luggageTypes.map((item, index) => (
                         <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                         >
                            <Card className="overflow-hidden group">
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    data-ai-hint={item.hint}
                                    width={200} 
                                    height={200} 
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-center">{item.name}</h3>
                                </CardContent>
                            </Card>
                        </motion.div>
                     ))}
                </div>
            </div>
      </section>
      
      {/* 6. Add-on Services */}
      <section className="bg-secondary py-12 md:py-20">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Enhance Your Experience</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                        Consider these optional add-ons for even greater convenience.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {addons.map((addon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="text-center h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                                        <addon.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle>{addon.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{addon.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
      </section>

      {/* 7. Availability Checker Section */}
       <section className="py-12 md:py-20">
            <div className="container">
                <div className="bg-background rounded-lg shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                     <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                     >
                        <h2 className="text-3xl font-bold font-headline mb-4">Check Real-Time Availability</h2>
                        <p className="text-muted-foreground mb-6">
                            Our network is vast, but high-demand slots fill up fast. Enter your date to see available porters in real-time. This helps us guarantee your service.
                        </p>
                        <div className="flex gap-2">
                            <Button size="lg" className="bg-accent hover:bg-accent/90">Check Availability</Button>
                        </div>
                    </motion.div>
                     <motion.div
                        className="relative h-64"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                     >
                         <Image 
                            src="https://placehold.co/500x300.png" 
                            alt="Map with location pins" 
                            data-ai-hint="map location pins"
                            layout="fill"
                            objectFit="contain"
                        />
                    </motion.div>
                </div>
            </div>
      </section>
      
      {/* 8. Testimonials Section */}
      <section className="bg-secondary py-12 md:py-20">
          <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline">Don't Just Take Our Word</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                        See what other travelers are saying about our seamless booking experience.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-background">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src={item.avatar} alt={item.name} data-ai-hint={item.hint}/>
                                            <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="italic text-muted-foreground">"{item.comment}"</p>
                                            <p className="font-bold mt-4">- {item.name}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
          </div>
      </section>

      {/* 9. Pre-booking Checklist */}
      <section className="py-12 md:py-20">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                   <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                   >
                       <Image 
                            src="https://placehold.co/500x600.png" 
                            alt="Traveler with luggage" 
                            data-ai-hint="traveler luggage"
                            width={500}
                            height={600}
                            className="rounded-lg shadow-xl object-cover"
                        />
                   </motion.div>
                   <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                   >
                        <h2 className="text-3xl font-bold font-headline mb-6">Your Quick Checklist</h2>
                        <ul className="space-y-4">
                            {checklistItems.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                   </motion.div>
              </div>
          </div>
      </section>

      {/* 10. Secure Payment Section */}
      <section className="bg-secondary py-12 md:py-20">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                    <ShieldCheck className="h-16 w-16 mx-auto text-primary mb-4" />
                    <h2 className="text-3xl font-bold font-headline">100% Secure & Encrypted Payments</h2>
                    <p className="text-muted-foreground mt-4 mb-6">
                        Your security is our top priority. We use industry-standard encryption to protect your payment information. Your data is safe with us.
                    </p>
                    <div className="flex justify-center items-center gap-4">
                        <Image src="https://placehold.co/100x40.png" alt="Visa" data-ai-hint="visa logo" width={100} height={40}/>
                        <Image src="https://placehold.co/100x40.png" alt="Mastercard" data-ai-hint="mastercard logo" width={100} height={40}/>
                        <Image src="https://placehold.co/100x40.png" alt="PayPal" data-ai-hint="paypal logo" width={100} height={40}/>
                        <Image src="https://placehold.co/100x40.png" alt="Stripe" data-ai-hint="stripe logo" width={100} height={40}/>
                    </div>
                </div>
            </div>
      </section>
    </AppLayout>
  );
}
