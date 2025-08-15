
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Clock, MapPin, Package, Percent, Phone, Shield, Star, ThumbsUp, Users, Zap, Briefcase, User, PhoneCall, ArrowRight, TrendingUp, BaggageClaim, CalendarDays, Rocket, Search, Smartphone, UserCheck, Handshake } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import TypewriterEffect from '@/components/TypewriterEffect';
import BookingForm from '@/components/BookingForm';
import { motion } from "framer-motion";
import AppLayout from './app-layout';

const stats = [
    { icon: <BaggageClaim className="h-8 w-8 text-white" />, value: "10k+", label: "Bags Handled" },
    { icon: <TrendingUp className="h-8 w-8 text-white" />, value: "98%", label: "On-Time Arrival" },
    { icon: <Star className="h-8 w-8 text-white" />, value: "4.9/5", label: "User Rating" },
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


export default function Home() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

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
                            <div className="space-y-1 text-left">
                                <Label htmlFor="pickup" className="text-xs font-semibold text-white/80">PICKUP</Label>
                                <Input id="pickup" placeholder="Enter pickup address" className="bg-white/10 border-white/20 h-9" />
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
                        {stat.icon}
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
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative flex flex-col items-center text-center p-8 bg-background rounded-2xl shadow-lg border border-transparent hover:border-primary transition-all duration-300"
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
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">Why Choose SwiftMove?</h2>
              <p className="text-muted-foreground mb-8">We are committed to providing an exceptional service that you can rely on, every time.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Trusted &amp; Vetted Porters</h3>
                    <p className="text-muted-foreground">All our porters undergo rigorous background checks for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">On-Time, Every Time</h3>
                    <p className="text-muted-foreground">We value your time. Punctuality is at the core of our service promise.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <ThumbsUp className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Flexible &amp; Accommodating</h3>
                    <p className="text-muted-foreground">Plans change. We offer flexible booking and cancellation options.</p>
                  </div>
                </div>
              </div>
            </div>
             <Image
                src="https://placehold.co/600x600.png"
                width="600"
                height="600"
                alt="Porter helping a customer"
                data-ai-hint="porter customer service"
                className="mx-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-center mb-12">What Our Customers Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image src={`https://placehold.co/48x48.png`} alt="Customer" data-ai-hint="person portrait" width={48} height={48} className="rounded-full" />
                    <div>
                      <CardTitle>Sarah L.</CardTitle>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"SwiftMove was a lifesaver! My porter was on time, professional, and made my airport experience so much smoother. Highly recommend!"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage Area Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <Image
                    src="https://placehold.co/600x450.png"
                    width={600}
                    height={450}
                    alt="Map of service area"
                    data-ai-hint="city map"
                    className="rounded-lg object-cover"
                />
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">We've Got You Covered</h2>
                    <p className="text-muted-foreground mb-6">We operate in major airports, train stations, and bus terminals across the country. Enter your location to see if we're in your area.</p>
                    <div className="flex gap-2">
                        <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">New York</span>
                        <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">Los Angeles</span>
                        <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">Chicago</span>
                        <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">...and more!</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Partnership/Corporate Section */}
       <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">Corporate &amp; Event Services</h2>
            <p className="max-w-3xl mx-auto md:text-xl/relaxed mb-8">
                Streamline logistics for your business travelers or event attendees. We offer tailored packages for companies and event organizers.
            </p>
            <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Learn More</Link>
            </Button>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
       <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
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
               <Phone className="h-10 w-10 mb-2 text-primary"/>
               <h3 className="font-bold text-lg">24/7 Support</h3>
               <p className="text-muted-foreground">Our support team is always available to assist you with any concerns.</p>
             </div>
           </div>
         </div>
       </section>
      
      {/* Blog/Tips Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
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

    