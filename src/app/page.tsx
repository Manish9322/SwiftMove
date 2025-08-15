"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Clock, MapPin, Package, Percent, Phone, Shield, Star, ThumbsUp, Users, Zap, Briefcase, User, PhoneCall, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

export default function Home() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[700px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Busy airport terminal with a porter helping a traveler"
          data-ai-hint="airport terminal porter"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">Your Journey, Unburdened</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Experience seamless travel with SwiftMove. Our professional porters are ready to assist you at airports, train stations, and more. Get an instant estimate for your luggage handling needs and travel with peace of mind.
          </p>
          <Card className="max-w-5xl mx-auto bg-background/20 backdrop-blur-sm border-none">
            <CardContent className="p-4">
              <form onSubmit={(e) => { e.preventDefault(); setIsEstimateModalOpen(true); }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 items-center">
                <Input placeholder="Your Name" required className="h-11 text-black" />
                <Input type="tel" placeholder="Phone Number" required className="h-11 text-black" />
                <Input placeholder="Pickup Address" required className="h-11 text-black" />
                <Input placeholder="Drop-off Address" required className="h-11 text-black" />
                <Select required>
                  <SelectTrigger className="h-11 text-black">
                    <SelectValue placeholder="Package Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (1-2 bags)</SelectItem>
                    <SelectItem value="medium">Medium (3-4 bags)</SelectItem>
                    <SelectItem value="large">Large (5+ bags)</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" size="lg" className="h-11 w-full bg-accent hover:bg-accent/90 text-white">Get Estimate</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Estimate Modal */}
       <Dialog open={isEstimateModalOpen} onOpenChange={setIsEstimateModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Your Estimate</DialogTitle>
            <DialogDescription>
              Here is an approximate estimate for your porter service.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Estimated Price
              </Label>
              <span id="price" className="col-span-3 font-bold text-2xl text-primary">$25.00</span>
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="distance" className="text-right">
                Distance
              </Label>
              <span id="distance" className="col-span-3">Approx. 0.5 miles</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Estimated Time
              </Label>
              <span id="time" className="col-span-3">15-20 minutes</span>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsEstimateModalOpen(false)} variant="outline">Cancel</Button>
            <Button type="submit" className="bg-accent hover:bg-accent/90">Confirm Booking</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl/relaxed mb-16">A hassle-free experience in just three simple steps.</p>
          <div className="relative grid gap-8 md:grid-cols-3">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10 hidden md:block">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/30 -translate-y-1/2" style={{clipPath: 'inset(0 100% 0 0)'}}></div>
            </div>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 ring-8 ring-background">
                   <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>1. Book Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Provide your journey details and luggage information to get an instant estimate and book your porter.</p>
              </CardContent>
            </Card>
             <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 ring-8 ring-background">
                   <User className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>2. Meet Your Porter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">A verified and professional porter will meet you at your designated pickup point right on time.</p>
              </CardContent>
            </Card>
             <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 ring-8 ring-background">
                   <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>3. Travel with Ease</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Relax and enjoy your journey as we handle your luggage securely to your destination.</p>
              </CardContent>
            </Card>
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
                    <h3 className="font-bold">Trusted & Vetted Porters</h3>
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
                    <h3 className="font-bold">Flexible & Accommodating</h3>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">Corporate & Event Services</h2>
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
             <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Book Now
            </Button>
        </div>
      </section>
    </>
  );
}
