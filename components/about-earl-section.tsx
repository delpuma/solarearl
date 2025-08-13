import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Shield } from "lucide-react"
import Image from "next/image"

const credentials = [
  {
    icon: Award,
    title: "Licensed & Certified",
    description: "Florida licensed contractor with NABCEP solar certification",
  },
  {
    icon: Users,
    title: "500+ Happy Customers",
    description: "Trusted by Central Florida families since 2018",
  },
  {
    icon: Clock,
    title: "25+ Years Experience",
    description: "Electrical expertise you can count on",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete protection for your home and investment",
  },
]

export function AboutEarlSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet Earl,
              <span className="text-orange-500 block">Florida's Friendly Solar Nerd</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Hi there! I'm Earl, and I've been helping Central Florida families escape Duke Energy's high bills since
                2018. As a licensed electrical contractor with over 25 years of experience, I've seen firsthand how
                solar can transform your monthly budget.
              </p>

              <p>
                I started Solar Earl because I was tired of watching my neighbors get hit with surprise rate hikes and
                outrageous electric bills. Duke Energy keeps raising rates, but the sun? That's free forever!
              </p>

              <p>
                My mission is simple: provide honest advice, premium solar installations, and guaranteed savings. No
                high-pressure sales tactics, no hidden fees - just straight talk about how solar can save you thousands.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {credentials.map((cred, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-orange-100 rounded-full p-2 flex-shrink-0">
                    <cred.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{cred.title}</h3>
                    <p className="text-sm text-gray-600">{cred.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Your Free Consultation
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/images/earl-about.png"
                alt="Earl - Your trusted solar expert"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto animate-float"
              />
            </div>

            <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl border-0 max-w-xs z-20">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">$12M+</div>
                  <div className="text-sm text-gray-600">Saved for customers</div>
                  <div className="text-xs text-gray-500 mt-1">in Duke Energy bills</div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute -top-8 -right-8 bg-white shadow-xl border-0 max-w-xs z-20">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">4.9★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                  <div className="text-xs text-gray-500 mt-1">500+ reviews</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-white text-center">
          <h3 className="font-display text-3xl font-bold mb-4">Earl's Personal Guarantee</h3>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            "If your solar system doesn't perform as promised, I'll make it right. That's my personal commitment to
            every Central Florida family I serve. Your satisfaction and savings are guaranteed!"
          </p>
          <div className="mt-6 text-2xl">- Earl ☀️</div>
        </div>
      </div>
    </section>
  )
}
