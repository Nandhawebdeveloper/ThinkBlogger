"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would submit to a newsletter service
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter",
    })

    // Clear the input
    setEmail("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
        <CardDescription>Get the latest blog posts delivered directly to your inbox</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
            Subscribe
          </Button>
          <p className="text-xs text-muted-foreground text-center">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      </CardContent>
    </Card>
  )
}
