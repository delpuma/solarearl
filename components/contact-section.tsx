"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    monthlyBill: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically send the data to Earl via email or your preferred method
    console.log("Form submitted:", formData)

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Thanks for Reaching Out!</h2>
            <p className="text-xl text-gray-700 mb-8">
              Earl will contact you within 24 hours to discuss your solar savings opportunity. Get ready to say goodbye
              to high Duke Energy bills!
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  monthlyBill: "",
                  message: "",
                })
              }}
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Ditch Duke Energy?
            <span className="text-orange-500 block">Let's Talk Solar Savings!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your free solar consultation and custom savings estimate. Earl will show you exactly how much you can
            save!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-display">Get Your Free Solar Quote</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 border-2 border-gray-200 focus:border-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 border-2 border-gray-200 focus:border-orange-500"
                      placeholder="(407) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 border-2 border-gray-200 focus:border-orange-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-gray-700 font-semibold">
                    Home Address
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-1 border-2 border-gray-200 focus:border-orange-500"
                    placeholder="123 Main St, Orlando, FL 32801"
                  />
                </div>

                <div>
                  <Label htmlFor="monthlyBill" className="text-gray-700 font-semibold">
                    Current Monthly Duke Energy Bill
                  </Label>
                  <Input
                    id="monthlyBill"
                    name="monthlyBill"
                    type="number"
                    value={formData.monthlyBill}
                    onChange={handleChange}
                    className="mt-1 border-2 border-gray-200 focus:border-orange-500"
                    placeholder="$200"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold">
                    Questions or Comments
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 border-2 border-gray-200 focus:border-orange-500"
                    placeholder="Tell Earl about your energy goals or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending to Earl...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Get My Free Solar Quote!
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Contact Earl Directly</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-100 rounded-full p-3">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Call or Text</div>
                      <div className="text-gray-600">(407) SOLAR-FL</div>
                      <div className="text-sm text-gray-500">Available 7 days a week</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">earl@solarearl.com</div>
                      <div className="text-sm text-gray-500">Response within 4 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-full p-3">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Service Area</div>
                      <div className="text-gray-600">All of Central Florida</div>
                      <div className="text-sm text-gray-500">Orlando, Tampa, Kissimmee & beyond</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 rounded-full p-3">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Business Hours</div>
                      <div className="text-gray-600">Mon-Fri: 8AM-7PM</div>
                      <div className="text-sm text-gray-500">Sat-Sun: 9AM-5PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="font-display text-2xl font-bold mb-4">Emergency Solar Service</h3>
                <p className="text-green-100 mb-4">
                  System not working? Earl provides 24/7 emergency support for all solar installations.
                </p>
                <Button className="bg-white text-green-600 hover:bg-gray-100 font-bold">
                  Emergency Hotline: (407) 911-SOLAR
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
