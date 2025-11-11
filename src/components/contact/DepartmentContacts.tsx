"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, HelpCircle, Briefcase, Building } from 'lucide-react';

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

export default function DepartmentContacts() {
    return (
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
    );
}
