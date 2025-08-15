"use client";

import { useState, useTransition, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { suggestDestination } from "@/ai/flows/suggest-destination";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  pickupLocation: z.string().min(3, { message: "Pickup location is required." }),
  destination: z.string().min(3, { message: "Destination is required." }),
  date: z.date({ required_error: "A date is required." }),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Invalid time format (HH:MM).",
  }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSuggestionsLoading, startSuggestionsTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      pickupLocation: "",
      destination: "",
      time: "",
    },
  });

  const handleDestinationChange = useCallback((value: string) => {
    form.setValue("destination", value);
    if (value.length > 2) {
      startSuggestionsTransition(async () => {
        try {
          const result = await suggestDestination({ currentDestination: value });
          const filteredSuggestions = result.suggestedDestinations.filter(
            (s) => s.toLowerCase() !== value.toLowerCase()
          );
          setSuggestions(filteredSuggestions);
        } catch (error) {
          console.error("Failed to fetch suggestions:", error);
          setSuggestions([]);
        }
      });
    } else {
      setSuggestions([]);
    }
  }, [form]);

  function onSubmit(data: BookingFormValues) {
    console.log(data);
    toast({
      title: "Booking Submitted!",
      description: "Your porter service has been scheduled successfully.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pickupLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pickup Location</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Terminal 4, Gate 2B" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="e.g., Main Taxi Stand"
                    {...field}
                    onChange={(e) => handleDestinationChange(e.target.value)}
                    autoComplete="off"
                  />
                  {isSuggestionsLoading && (
                    <Loader2 className="absolute right-2 top-2.5 h-5 w-5 animate-spin text-muted-foreground" />
                  )}
                </div>
              </FormControl>
              {suggestions.length > 0 && (
                <ul className="mt-2 rounded-md border bg-background p-2 shadow-sm">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        form.setValue("destination", suggestion);
                        setSuggestions([]);
                      }}
                      className="cursor-pointer rounded p-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time (24h format)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 14:30" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
          Book Service
        </Button>
      </form>
    </Form>
  );
}
