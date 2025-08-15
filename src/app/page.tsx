import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Clock, Star } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import TypewriterEffect from '@/components/TypewriterEffect';

const services = [
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Standard Porter',
    description: 'Reliable and efficient luggage handling for your journey.',
    price: '$25 / hour',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Express Service',
    description: 'Priority handling for when you\'re short on time.',
    price: '$40 / hour',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'VIP Assistance',
    description: 'A premium, all-inclusive service for the discerning traveler.',
    price: '$75 / hour',
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Effortless Journeys with <TypewriterEffect text="SwiftMove" />
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your trusted partner for fast, reliable, and secure porter services. Let us handle the load while you enjoy a seamless travel experience.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a href="#book-now">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="porter luggage airport"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a range of services tailored to meet your specific needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader className="items-center">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="book-now" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
              <Card>
                  <CardHeader>
                      <CardTitle className="text-3xl font-bold text-center font-headline">Schedule a Porter</CardTitle>
                      <CardDescription className="text-center">
                        Fill out the form below to book your porter service in minutes.
                      </CardDescription>
                  </CardHeader>
                  <CardContent>
                      <BookingForm />
                  </CardContent>
              </Card>
          </div>
        </div>
      </section>
    </>
  );
}
