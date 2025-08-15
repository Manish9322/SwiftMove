
"use client";

import { useState } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion";
import { ArrowLeft, Mail, KeyRound, User, UserPlus, Phone, Building, Eye, EyeOff } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-secondary via-background to-background p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="absolute top-8 left-8">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="mx-auto w-full max-w-2xl shadow-2xl bg-background/80 backdrop-blur-lg border-border/20">
          <CardHeader>
             <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <UserPlus className="h-8 w-8 text-primary"/>
              </div>
            </div>
            <CardTitle className="text-2xl font-headline text-center">Create Your Account</CardTitle>
            <CardDescription className="text-center">
              Fill out the form below to get started with SwiftMove.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3 h-5 w-5 text-muted-foreground" />
                      <Input id="full-name" placeholder="John Doe" required className="pl-10"/>
                    </div>
                </div>
                 <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3 h-5 w-5 text-muted-foreground" />
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required className="pl-10"/>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="user-type">I am a...</Label>
                    <div className="relative flex items-center">
                      <Building className="absolute left-3 h-5 w-5 text-muted-foreground z-10" />
                      <Select required>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="person">Person</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative flex items-center">
                    <KeyRound className="absolute left-3 h-5 w-5 text-muted-foreground" />
                    <Input id="password" type={showPassword ? "text" : "password"} required className="pl-10 pr-10"/>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 h-7 w-7 text-muted-foreground hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                   <div className="relative flex items-center">
                    <KeyRound className="absolute left-3 h-5 w-5 text-muted-foreground" />
                    <Input id="confirm-password" type={showConfirmPassword ? "text" : "password"} required className="pl-10 pr-10"/>
                     <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 h-7 w-7 text-muted-foreground hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
                    </Button>
                  </div>
                </div>
                <div className="md:col-span-2 flex items-start space-x-3 mt-4">
                  <Checkbox id="terms" required className="mt-0.5" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2 mt-4">
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Create Account
                  </Button>
                </div>
              </div>
            </form>
            <div className="mt-6 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-semibold text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
