
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle, Clock, MapPin, ThumbsUp, Users, Zap, UserCheck, PhoneCall, ArrowRight, TrendingUp, BaggageClaim, CalendarDays, Rocket, Smartphone, Handshake, DollarSign, Shield, LocateFixed, Globe, Search, Building, Briefcase, StarIcon, CheckSquare, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import TypewriterEffect from '@/components/TypewriterEffect';
import AppLayout from './app-layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const Star = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const stats = [
    { icon: <BaggageClaim className="h-8 w-8 text-white" />, value: "10k+", label: "Bags Handled" },
    { icon: <TrendingUp className="h-8 w-8 text-white" />, value: "98%", label: "On-Time Arrival" },
    { icon: <Star className="h-8 w-8 text-yellow-400" />, value: "4.9/5", label: "User Rating" },
    { icon: <CalendarDays className="h-8 w-8 text-white" />, value: "500+", label: "Bookings Daily" },
];

const steps = [
  {
    icon: Smartphone,
    title: "1. Instant Booking",
    description: "Enter your travel details on our website or mobile app. Get an instant price estimate and confirm your booking in seconds.",
  },
  {
    icon: Handshake,
    title: "2. Meet Your Porter",
    description: "A professional, vetted porter will be waiting for you at your specified pickup point, ready to assist with your luggage.",
  },
  {
    icon: Rocket,
    title: "3. Travel Freely",
    description: "Enjoy a stress-free journey while we handle the heavy lifting, ensuring your bags get to your destination safely.",
  },
];

const features = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Trusted & Vetted Porters",
    description: "Your peace of mind is paramount. All our porters undergo rigorous background checks and comprehensive training to ensure the highest standards of professionalism and security.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "On-Time, Every Time",
    description: "We respect your schedule. Punctuality is a cornerstone of our service, and our dispatch system ensures your porter is there when you need them, without fail.",
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-primary" />,
    title: "Flexible & Accommodating",
    description: "Travel plans can be unpredictable. That's why we offer easy, flexible booking modifications and a straightforward cancellation policy to adapt to your changing needs.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "AI-Powered Efficiency",
    description: "Our smart platform optimizes routes and assignments, ensuring the quickest and most efficient service, saving you time and hassle.",
    },
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. Get a clear, upfront estimate before you book, so you know exactly what you're paying for.",
    },
      {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: "Personalized Service",
    description: "From extra luggage to special handling requests, our service is tailored to meet your unique travel needs and preferences.",
  },
  {
    icon: <PhoneCall className="h-10 w-10 text-primary" />,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available around the clock to assist you with any questions or concerns that may arise.",
  },
];

const corporateFeatures = [
    {
        icon: UserCheck,
        title: "Dedicated Account Management",
        description: "Get a single point of contact to manage all your corporate booking needs efficiently.",
    },
    {
        icon: DollarSign,
        title: "Centralized Billing",
        description: "Simplify your accounting with consolidated, monthly invoicing for all services.",
    },
    {
        icon: CheckSquare,
        title: "Bulk & Recurring Bookings",
        description: "Easily schedule services for large groups, VIPs, or frequent travelers with our flexible system.",
    },
    {
        icon: BarChart2,
        title: "Custom Reporting",
        description: "Gain insights into your travel patterns and expenditures with detailed, custom reports.",
    }
];

const testimonials = [
  {
    name: "Sarah L.",
    designation: "Frequent Flyer",
    comment: "SwiftMove was a lifesaver! My porter was on time, professional, and made my airport experience so much smoother. Highly recommend!",
    rating: 5,
    avatar: "https://placehold.co/48x48.png"
  },
  {
    name: "Michael B.",
    designation: "Business Traveler",
    comment: "The booking process was incredibly simple and the service was impeccable. I'll be using SwiftMove for all my future business trips.",
    rating: 5,
    avatar: "https://placehold.co/48x48.png"
  },
  {
    name: "Jessica P.",
    designation: "Family Vacationer",
    comment: "Traveling with kids and tons of luggage is always a challenge. SwiftMove made it feel effortless. What a fantastic service!",
    rating: 5,
    avatar: "https://placehold.co/48x48.png"
  },
   {
    name: "David R.",
    designation: "International Student",
    comment: "As a student moving abroad, I had so much luggage. The porter was a huge help and the price was very reasonable. Thank you, SwiftMove!",
    rating: 5,
    avatar: "https://placehold.co/48x48.png"
  },
  {
    name: "Emily C.",
    designation: "Event Coordinator",
    comment: "We used SwiftMove for our corporate event, and the feedback from our attendees was amazing. Professional, reliable, and efficient.",
    rating: 5,
    avatar: "https://placehold.co/48x48.png"
  },
]


export default function Home() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = React.useState(false);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <AppLayout>
      {/* Hero Section */}
       <section className="relative w-full overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1920x1080.png"
            alt="Busy airport terminal with a porter helping a traveler"
            data-ai-hint="airport terminal porter"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto grid min-h-[calc(100vh-80px)] items-center px-4 md:px-6">
            <div className="space-y-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl font-headline">
                        Your Journey, <TypewriterEffect text="Unburdened" />
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300">
                        Experience seamless travel with SwiftMove. Our AI-powered platform connects you with professional porters instantly. Get a quick estimate and book your service in under a minute.
                    </p>
                </motion.div>
                 <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8"
                >
                    <Card className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border-white/10 shadow-2xl p-4 sm:p-6">
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-end">
                            <div className="relative space-y-1 text-left">
                                <Label htmlFor="pickup" className="text-xs font-semibold text-white/80">PICKUP</Label>
                                <Input id="pickup" placeholder="Enter pickup address" className="bg-white/10 border-white/20 h-9 pr-8" />
                                <Button variant="ghost" size="icon" className="absolute right-0 bottom-0 h-9 w-9 text-white/70 hover:bg-white/20 hover:text-white">
                                    <LocateFixed className="h-4 w-4" />
                                </Button>
                            </div>
                             <div className="space-y-1 text-left">
                                <Label htmlFor="drop" className="text-xs font-semibold text-white/80">DROP</Label>
                                <Input id="drop" placeholder="Enter drop address" className="bg-white/10 border-white/20 h-9" />
                            </div>
                            <div className="space-y-1 text-left">
                                <Label htmlFor="name" className="text-xs font-semibold text-white/80">NAME</Label>
                                <Input id="name" placeholder="Your name" className="bg-white/10 border-white/20 h-9" />
                            </div>
                             <div className="space-y-1 text-left">
                                <Label htmlFor="phone" className="text-xs font-semibold text-white/80">PHONE</Label>
                                <Input id="phone" type="tel" placeholder="Phone number" className="bg-white/10 border-white/20 h-9" />
                            </div>
                            <Button className="w-full bg-accent hover:bg-accent/90 h-9" onClick={() => setIsEstimateModalOpen(true)}>Get Estimate</Button>
                        </div>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
                >
                    {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                        {React.cloneElement(stat.icon, { className: "h-8 w-8"})}
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-sm text-slate-300">{stat.label}</p>
                    </div>
                    ))}
                </motion.div>
            </div>
        </div>
      </section>

       {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                        How It Works
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        Your seamless journey is just three steps away.
                    </p>
                </div>
                <div className="relative grid md:grid-cols-3 gap-8">
                     <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/20 -translate-y-1/2 hidden md:block" />
                     <div className="absolute top-1/2 left-0 w-full h-1 bg-primary origin-left hidden md:block" />
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                             initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col items-center text-center p-8 bg-background rounded-xl shadow-lg border border-transparent hover:border-primary transition-all duration-300 z-10"
                        >
                             <div className="absolute top-0 -translate-y-1/2 flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground ring-8 ring-secondary z-10">
                                <step.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-2xl font-bold font-headline mt-12 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                        Why Choose SwiftMove?
                    </h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mt-4">
                        We are committed to providing an exceptional service that you can rely on, every time.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                     >
                        <Image
                            src="https://placehold.co/500x500.png"
                            width={500}
                            height={500}
                            alt="A happy traveler with their luggage"
                            data-ai-hint="happy traveler"
                            className="rounded-2xl object-cover shadow-lg mx-auto"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                       <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                         {features.slice(0, 4).map((feature, index) => (
                           <AccordionItem value={`item-${index}`} key={index} className="border-b">
                             <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4 rounded-lg px-4 data-[state=open]:bg-primary/10 data-[state=open]:text-primary transition-all">
                               <div className="flex items-center gap-4">
                                {React.cloneElement(feature.icon, {className: "h-8 w-8 text-primary"})}
                                <span>{feature.title}</span>
                               </div>
                             </AccordionTrigger>
                             <AccordionContent className="pt-0 pb-4 px-4 text-muted-foreground">
                               {feature.description}
                             </AccordionContent>
                           </AccordionItem>
                         ))}
                       </Accordion>
                    </motion.div>
                </div>
                <div className="text-center mt-16">
                    <p className="max-w-3xl mx-auto text-muted-foreground mb-6">
                        From our meticulously vetted porters to our intelligent, AI-driven platform, every aspect of SwiftMove is designed with your convenience and security in mind. We're not just moving your luggage; we're upgrading your entire travel experience.
                    </p>
                    <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => document.querySelector('#pickup')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book Your Porter Today
                    </Button>
                </div>
            </div>
        </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-center mb-12">What Our Customers Say</h2>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[autoplayPlugin.current]}
                className="w-full"
                onMouseEnter={autoplayPlugin.current.stop}
                onMouseLeave={autoplayPlugin.current.reset}
            >
                <CarouselContent>
                    {testimonials.map((testimonial, i) => (
                        <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                 <Card className="bg-background h-full flex flex-col">
                                    <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                                        <Image src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" width={48} height={48} className="rounded-full" />
                                        <div className="flex-1">
                                            <CardTitle>{testimonial.name}</CardTitle>
                                            <CardDescription>{testimonial.designation}</CardDescription>
                                            <div className="flex text-yellow-500 mt-1">
                                                {[...Array(testimonial.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
      </section>

      {/* Service Coverage Area Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Globe className="absolute -top-1/4 -left-1/4 w-1/2 h-auto text-primary/50" />
          <Globe className="absolute -bottom-1/4 -right-1/4 w-1/2 h-auto text-primary/50" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">
                      We've Got You Covered
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      We operate in major airports, train stations, and transport hubs across the globe. Enter your city to see if we're in your area.
                    </p>
                    <div className="relative max-w-md">
                        <Input 
                            type="text" 
                            placeholder="Enter your city or airport code"
                            className="h-12 pl-4 pr-12 text-base"
                        />
                        <Button variant="ghost" size="icon" className="absolute right-1 top-1 h-10 w-10 text-primary hover:bg-primary/10">
                          <Search className="h-5 w-5" />
                          <span className="sr-only">Search</span>
                        </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Popular locations include: <span className="font-semibold text-foreground">JFK, LAX, LHR, CDG, HND</span> & many more.
                    </p>
                </motion.div>
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                 >
                    <Image
                        src="https://placehold.co/600x450.png"
                        width={600}
                        height={450}
                        alt="Map of service area"
                        data-ai-hint="world map illustration"
                        className="rounded-xl object-cover shadow-2xl"
                    />
                </motion.div>
            </div>
        </div>
      </section>

      {/* Partnership/Corporate Section */}
       <section className="relative w-full py-12 md:py-24 lg:py-32">
         <div className="absolute inset-0">
             <Image
                 src="https://placehold.co/1920x1080.png"
                 alt="Modern corporate building"
                 data-ai-hint="modern office building"
                 layout="fill"
                 objectFit="cover"
                 className="opacity-20"
             />
             <div className="absolute inset-0 bg-background/90" />
         </div>
        <div className="container relative z-10 px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Corporate & Event Services</h2>
                <p className="text-muted-foreground text-lg mt-4 mb-12">
                   Elevate the travel experience for your team or event attendees. SwiftMove offers tailored solutions for businesses and event organizers, ensuring seamless and stress-free journeys for everyone.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {corporateFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="text-center h-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                             <CardHeader>
                                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <CardTitle className="mt-4">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
             <div className="text-center mt-16">
                 <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
                   <Link href="/contact">Partner With Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>What if my flight is delayed?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">We monitor flight schedules and will adjust your porter's arrival time accordingly. No extra charges for flight delays.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Can I book for someone else?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Yes, you can. Just enter the traveler's name and contact information during the booking process.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Is my luggage insured?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Absolutely. We provide complimentary insurance coverage for your belongings while they are in our care for your complete peace of mind.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Safety Commitment Section */}
       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
         <div className="container px-4 md:px-6">
           <div className="text-center">
             <Shield className="h-16 w-16 mx-auto text-primary mb-4" />
             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">Our Commitment to Safety</h2>
             <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mb-12">
               Your safety and the security of your belongings are our top priorities.
             </p>
           </div>
           <div className="grid md:grid-cols-3 gap-8 text-center">
             <div className="flex flex-col items-center">
               <Users className="h-10 w-10 mb-2 text-primary"/>
               <h3 className="font-bold text-lg">Verified Porters</h3>
               <p className="text-muted-foreground">All porters are background-checked and thoroughly trained.</p>
             </div>
             <div className="flex flex-col items-center">
                <CheckCircle className="h-10 w-10 mb-2 text-primary"/>
               <h3 className="font-bold text-lg">Secure Handling</h3>
               <p className="text-muted-foreground">We follow strict protocols to ensure your luggage is handled with care.</p>
             </div>
             <div className="flex flex-col items-center">
               <PhoneCall className="h-10 w-10 mb-2 text-primary"/>
               <h3 className="font-bold text-lg">24/7 Support</h3>
               <p className="text-muted-foreground">Our support team is always available to assist you with any concerns.</p>
             </div>
           </div>
         </div>
       </section>
      
      {/* Blog/Tips Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-center mb-12">Travel Smarter</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "5 Tips for a Stress-Free Airport Experience", image: "https://placehold.co/600x400.png", hint: "airport check-in" },
              { title: "How to Pack Like a Pro", image: "https://placehold.co/600x400.png", hint: "packing suitcase" },
              { title: "Navigating Train Stations with Ease", image: "https://placehold.co/600x400.png", hint: "train station" },
            ].map((post, i) => (
              <Card key={i} className="overflow-hidden">
                <Image src={post.image} alt={post.title} data-ai-hint={post.hint} width={600} height={400} className="w-full h-48 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">A quick guide to improve your journey.</p>
                  <Button variant="link" className="p-0">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x600.png')" }}>
         <div className="container px-4 md:px-6 bg-black/50 py-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-white mb-4">Ready for an Effortless Trip?</h2>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
              Book your porter now and experience the SwiftMove difference. Your smoothest journey awaits.
            </p>
             <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" onClick={() => document.querySelector('#pickup')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Now
            </Button>
        </div>
      </section>

      <Dialog open={isEstimateModalOpen} onOpenChange={setIsEstimateModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Your Estimate</DialogTitle>
            <DialogDescription>
              Here is an estimated cost for your porter service.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label>Base Fare:</Label>
              <span className="font-semibold text-right">$25.00</span>
            </div>
             <div className="grid grid-cols-2 items-center gap-4">
              <Label>Distance (approx):</Label>
              <span className="font-semibold text-right">$5.00</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label>Service Fee:</Label>
              <span className="font-semibold text-right">$3.00</span>
            </div>
            <div className="grid grid-cols-2 items-center gap-4 font-bold text-lg border-t pt-4 mt-2">
              <Label>Total Estimate:</Label>
              <span className="text-right">$33.00</span>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90">Confirm Booking</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppLayout>
  );
}
