
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockFaqs } from "@/lib/mock-data";
import type { FaqItem } from "@/lib/types";
import { Pencil, PlusCircle, Trash2, HelpCircle, BookOpen, Hash } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function FaqTab() {
  const [faqs, setFaqs] = useState<FaqItem[]>(mockFaqs);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FaqItem | null>(null);

  const handleSaveFaq = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newFaqData = {
      id: editingFaq?.id || `faq_${Date.now()}`,
      question: formData.get("question") as string,
      answer: formData.get("answer") as string,
      category: formData.get("category") as string,
    };

    if (editingFaq) {
      setFaqs(faqs.map((f) => (f.id === editingFaq.id ? newFaqData : f)));
    } else {
      setFaqs([...faqs, newFaqData]);
    }
    setIsDialogOpen(false);
    setEditingFaq(null);
  };

  const handleDeleteFaq = (id: string) => {
    setFaqs(faqs.filter((f) => f.id !== id));
  };
  
  const openEditDialog = (faq: FaqItem) => {
    setEditingFaq(faq);
    setIsDialogOpen(true);
  };
  
  const openAddDialog = () => {
    setEditingFaq(null);
    setIsDialogOpen(true);
  };

  const faqStats = {
      total: faqs.length,
      categories: new Set(faqs.map(f => f.category)).size
  };

  return (
    <div className="space-y-8">
        {/* Stat Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total FAQs</CardTitle>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{faqStats.total}</div>
                    <p className="text-xs text-muted-foreground">questions answered</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Categories</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{faqStats.categories}</div>
                    <p className="text-xs text-muted-foreground">distinct sections</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
                     <Hash className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">Yesterday</div>
                    <p className="text-xs text-muted-foreground">New answers added</p>
                </CardContent>
            </Card>
        </div>

        <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
            <CardTitle>Manage FAQs</CardTitle>
            <CardDescription>Add, edit, or remove frequently asked questions.</CardDescription>
            </div>
            <Button onClick={openAddDialog}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add FAQ
            </Button>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq) => (
                    <AccordionItem value={faq.id} key={faq.id} className="border rounded-md px-4">
                         <div className="flex items-center justify-between py-2">
                            <AccordionTrigger className="flex-1 text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                            <div className="flex items-center gap-2 ml-4">
                                <Badge variant="secondary">{faq.category}</Badge>
                                <Button variant="ghost" size="icon" onClick={() => openEditDialog(faq)}>
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDeleteFaq(faq.id)}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <AccordionContent className="text-muted-foreground pb-4">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
            <DialogHeader>
                <DialogTitle>{editingFaq ? "Edit FAQ" : "Add New FAQ"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSaveFaq} className="space-y-4">
                <div className="space-y-2">
                <Label htmlFor="question">Question</Label>
                <Input id="question" name="question" defaultValue={editingFaq?.question} required />
                </div>
                <div className="space-y-2">
                <Label htmlFor="answer">Answer</Label>
                <Textarea id="answer" name="answer" defaultValue={editingFaq?.answer} required />
                </div>
                 <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" defaultValue={editingFaq?.category} placeholder="e.g., Bookings" required />
                </div>
                <DialogFooter>
                <Button type="submit">Save</Button>
                </DialogFooter>
            </form>
            </DialogContent>
        </Dialog>
        </Card>
    </div>
  );
}
