"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const branches = [
  {
    id: "Sodala",
    name: "Sodala - Jaipur Branch",
    address: "opp metro piller number 104 shyam nagar new sanagner road sodala jaipur",
    phone: "+91 89469 51963",
    email: "Churmawalas@gmail.com",
    hours: "11:00 AM - 10:00 PM",
    mapUrl: "https://maps.app.goo.gl/ZvwMyuGkX96atTgf8?g_st=iw",
    image: "https://files.yappe.in/place/full/churma-walas-4593527.webp",
  },
  {
    id: "VaishaliNagar",
    name: "VaishaliNagar - Jaipur Branch",
    address: " 1/465A girnar colony chitrakoot marg vaishali nagar jaipur",
    phone: "+91 89469 51963",
    email: "Churmawalas@gmail.com",
    hours: "11:00 AM - 10:00 PM",
    mapUrl: "https://maps.app.goo.gl/n43Sfd1dKhmu8REU6?g_st=iw",
    image: "/images/jaipur_vaishali.jpg",
  },
  {
    id: "Jhotwara",
    name: "Jhotwara - Jaipur Branch",
    address: "shop no 6,7 raghunathpuri kalwar road near boring chouraha jhothwara jaipur",
    phone: "+91 89469 51963",
    email: "Churmawalas@gmail.com",
    hours: "11:00 AM - 10:00 PM",
    mapUrl: "https://maps.app.goo.gl/n2bHhXtMYXu7CJJ46?g_st=iw",
    image: "/images/branch.jpg",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
  })

  const [formType, setFormType] = useState<"booking" | "inquiry">("booking")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Form submitted successfully! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      branch: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      message: "",
    })
  }

  return (
    <div className="container mx-auto px-4 py-9 bg-white text-black mt-20">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-800 mb-4 font-serif">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you want to make a reservation, have a question, or provide feedback,
          we're here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-6 font-serif">Our Locations</h2>
          <Tabs defaultValue="Sodala" className="w-full">
           <TabsList className="w-full grid grid-cols-3 mb-6 bg-amber-100 rounded-lg shadow-sm">
  {branches.map((branch) => (
    <TabsTrigger
      key={branch.id}
      value={branch.id}
      className="text-black data-[state=active]:bg-amber-600 data-[state=active]:text-white rounded-md transition-colors"
    >
      {branch.name.split(" ")[0]}
    </TabsTrigger>
  ))}
</TabsList>

            {branches.map((branch) => (
              <TabsContent key={branch.id} value={branch.id}>
                <div className="bg-amber-50 p-6 rounded-lg text-black">
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image src={branch.image || "/placeholder.svg"} alt={branch.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{branch.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                      <p>{branch.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0" />
                      <p>{branch.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <p>{branch.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 flex-shrink-0" />
                      <p>{branch.hours}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                        View on Map
                      </a>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Contact Form */}
        <div id="book">
          <h2 className="text-2xl font-bold mb-6 font-serif text-black">Get in Touch</h2>

          <div className="bg-amber-50 p-6 rounded-lg">
            <RadioGroup defaultValue="booking" className="flex gap-4 mb-6" onValueChange={(value) => setFormType(value as "booking" | "inquiry")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="booking" id="booking" />
                <Label htmlFor="booking" className="text-black">Table Reservation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inquiry" id="inquiry" />
                <Label htmlFor="inquiry" className="text-black">General Inquiry</Label>
              </div>
            </RadioGroup>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="bg-white text-black placeholder:text-gray-400" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="bg-white text-black placeholder:text-gray-400" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-black">Phone Number</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" className="bg-white text-black placeholder:text-gray-400" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="branch" className="text-black">Branch</Label>
                  <Select value={formData.branch} onValueChange={(value) => handleSelectChange("branch", value)}>
                    <SelectTrigger id="branch" className="bg-white text-black placeholder:text-gray-400">
                      <SelectValue placeholder="Select Branch" />
                    </SelectTrigger>
                    <SelectContent>
                      {branches.map((branch) => (
                        <SelectItem key={branch.id} value={branch.id}>
                          {branch.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {formType === "booking" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-black">Date</Label>
                      <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} className="bg-white text-black placeholder:text-gray-400" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-black">Time</Label>
                      <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} className="bg-white text-black placeholder:text-gray-400" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-black">Number of Guests</Label>
                      <Select value={formData.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
                        <SelectTrigger id="guests" className="bg-white text-black placeholder:text-gray-400">
                          <SelectValue placeholder="Select Number" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "More than 10"].map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="occasion" className="text-black">Occasion (Optional)</Label>
                      <Select value={formData.occasion} onValueChange={(value) => handleSelectChange("occasion", value)}>
                        <SelectTrigger id="occasion" className="bg-white text-black placeholder:text-gray-400">
                          <SelectValue placeholder="Select Occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="birthday">Birthday</SelectItem>
                          <SelectItem value="anniversary">Anniversary</SelectItem>
                          <SelectItem value="business">Business Meal</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="message" className="text-black">
                  {formType === "booking" ? "Special Requests (Optional)" : "Message"}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    formType === "booking"
                      ? "Any special requests or dietary requirements?"
                      : "How can we help you?"
                  }
                  rows={4}
                  className="bg-white text-black placeholder:text-gray-400"
                  required={formType === "inquiry"}
                />
              </div>

              <Button type="submit" className="w-full bg-amber-600 text-white hover:bg-amber-700">
                {formType === "booking" ? "Book Table" : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
