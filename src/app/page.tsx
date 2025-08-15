import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { CheckCircle, Clock, MapPin, Package, Percent, Phone, Shield, Star, ThumbsUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Busy airport terminal"
          data-ai-hint="airport terminal"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">Your Journey, Unburdened</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Instant, reliable porter services at your fingertips. Move with ease, wherever you are.
          </p>
          <Card className="max-w-4xl mx-auto bg-background/20 backdrop-blur-sm border-none">
            <CardContent className="p-4">
              <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center">
                <Input placeholder="Enter Location (e.g., JFK Terminal 4)" className="h-12 text-black" />
                <Select>
                  <SelectTrigger className="h-12 text-black">
                    <SelectValue placeholder="Package Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (1-2 bags)</SelectItem>
                    <SelectItem value="medium">Medium (3-4 bags)</SelectItem>
                    <SelectItem value="large">Large (5+ bags)</SelectItem>
                  </SelectContent>
                </Select>
                 <Input type="date" className="h-12 text-black" />
                <Button size="lg" className="h-12 w-full bg-accent hover:bg-accent/90 text-white">Search</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-12">How It Works in 3 Easy Steps</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Book Online</h3>
              <p className="text-muted-foreground">Enter your details and schedule a porter in seconds.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Meet Your Porter</h3>
              <p className="text-muted-foreground">Our professional will meet you at your specified location.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center bg-primary text-primary-foreground rounded-full h-16 w-16 mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Travel Stress-Free</h3>
              <p className="text-muted-foreground">Enjoy a seamless journey while we handle your luggage.</p>
            </div>
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

      {/* Our Porters Section */}
       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline mb-4">Meet Our Professional Porters</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed mb-12">Friendly, strong, and dedicated to making your travel easier.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <Image src={`https://placehold.co/200x200.png`} alt="Porter" data-ai-hint="porter professional portrait" width={200} height={200} className="rounded-full object-cover" />
                        <h3 className="font-bold">John D.</h3>
                        <p className="text-sm text-primary">5 Years Experience</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Service Coverage Area Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
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
