
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        customerName: "Alice Johnson",
        avatar: "https://placehold.co/48x48.png",
        rating: 5,
        comment: "Mike was fantastic! So helpful and professional. Made my travel day so much less stressful.",
        date: "2024-07-28",
    },
    {
        id: 2,
        customerName: "Bob Williams",
        avatar: "https://placehold.co/48x48.png",
        rating: 4,
        comment: "Great service, very punctual. Would use again.",
        date: "2024-07-27",
    },
     {
        id: 3,
        customerName: "Charlie Brown",
        avatar: "https://placehold.co/48x48.png",
        rating: 5,
        comment: "Excellent service from start to finish. The agent was courteous and efficient.",
        date: "2024-07-25",
    },
];

export default function AgentReviewsPage() {
  return (
    <div className="space-y-4">
        <h1 className="text-2xl font-bold">My Reviews</h1>
        <Card>
            <CardHeader>
                <CardTitle>Your Performance</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Average Rating</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-2">
                            <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                            <span className="text-3xl font-bold">4.8</span>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Total Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-3xl font-bold">52</span>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Completion Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <span className="text-3xl font-bold">98%</span>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Recent Reviews</CardTitle>
                <CardDescription>Here's what customers are saying about you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="flex items-start gap-4">
                         <Avatar>
                            <AvatarImage src={review.avatar} alt={review.customerName} />
                            <AvatarFallback>{review.customerName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">{review.customerName}</p>
                                <p className="text-xs text-muted-foreground">{review.date}</p>
                            </div>
                             <div className="flex text-yellow-400 mt-1 mb-2">
                                {[...Array(review.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                                {[...Array(5-review.rating)].map((_, j) => <Star key={j} className="h-4 w-4" />)}
                            </div>
                            <p className="text-sm text-muted-foreground">{review.comment}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    </div>
  );
}
