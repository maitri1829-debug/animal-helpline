"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ReportForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    animalType: "",
    condition: "",
    location: "",
    description: "",
    contactName: "",
    contactPhone: "",
    urgency: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        animalType: "",
        condition: "",
        location: "",
        description: "",
        contactName: "",
        contactPhone: "",
        urgency: "",
      })
    }, 5000)
  }

  if (submitted) {
    return (
      <section id="report-form" className="bg-background py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-primary/20">
            <CardContent className="pt-6">
              <Alert className="border-secondary bg-secondary/10">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <AlertTitle className="text-secondary">Report Submitted Successfully!</AlertTitle>
                <AlertDescription className="text-secondary/90">
                  Thank you for reporting. We've notified nearby shelters and they will respond shortly. You'll receive
                  a confirmation call at the number you provided.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="report-form" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle className="text-3xl">Report an Animal in Need</CardTitle>
            <CardDescription className="text-base">
              Fill out this form to connect with nearby shelters. All fields are required for fastest response.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="animalType">Animal Type</Label>
                  <Select
                    value={formData.animalType}
                    onValueChange={(value) => setFormData({ ...formData, animalType: value })}
                    required
                  >
                    <SelectTrigger id="animalType">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="bird">Bird</SelectItem>
                      <SelectItem value="wildlife">Wildlife</SelectItem>
                      <SelectItem value="small-animal">Small Animal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level</Label>
                  <Select
                    value={formData.urgency}
                    onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                    required
                  >
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Can wait</SelectItem>
                      <SelectItem value="medium">Medium - Soon</SelectItem>
                      <SelectItem value="high">High - Urgent</SelectItem>
                      <SelectItem value="critical">Critical - Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">Animal Condition</Label>
                <Input
                  id="condition"
                  placeholder="e.g., Injured leg, appears malnourished, trapped"
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Street address or nearest intersection"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide any additional details about the animal's appearance, behavior, or situation..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Your Name</Label>
                  <Input
                    id="contactName"
                    placeholder="Full name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  By submitting this report, you agree to be contacted by nearby shelters regarding this animal.
                </AlertDescription>
              </Alert>

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Report
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
