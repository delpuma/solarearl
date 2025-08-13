import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, DollarSign, Calendar } from "lucide-react"

const caseStudies = [
  {
    title: "The Rodriguez Family",
    location: "4BR Home in Orlando",
    beforeBill: "$342",
    afterBill: "$28",
    monthlySavings: "$314",
    yearlyTotal: "$3,768",
    paybackPeriod: "5.8 years",
    systemSize: "8.2 kW",
    details:
      "Large family with pool and AC running constantly. Duke Energy bills were crushing their budget until Earl installed their solar system.",
    image: "/modern-house-solar-panels.png",
  },
  {
    title: "Small Business Success",
    location: "Auto Shop in Tampa",
    beforeBill: "$1,247",
    afterBill: "$89",
    monthlySavings: "$1,158",
    yearlyTotal: "$13,896",
    paybackPeriod: "4.2 years",
    systemSize: "25 kW",
    details:
      "High energy usage from equipment and lighting. Solar eliminated 93% of their Duke Energy costs, improving their bottom line significantly.",
    image: "/commercial-building-solar.png",
  },
  {
    title: "Retirement Savings",
    location: "2BR Condo in Kissimmee",
    beforeBill: "$189",
    afterBill: "$12",
    monthlySavings: "$177",
    yearlyTotal: "$2,124",
    paybackPeriod: "6.1 years",
    systemSize: "4.8 kW",
    details:
      "Fixed income retirees needed predictable energy costs. Solar provided immediate relief from Duke Energy's unpredictable rate hikes.",
    image: "/retirement-community-solar.png",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Solar Success Stories
            <span className="text-blue-600 block">From Your Central Florida Neighbors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly how much your neighbors are saving with Earl's solar installations. These are real customers
            with real savings!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
            >
              <div className="relative">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {study.systemSize} System
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="font-display text-xl text-gray-900">{study.title}</CardTitle>
                <p className="text-gray-600 flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  {study.location}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">{study.details}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <div className="text-red-600 text-sm font-semibold mb-1">Before Solar</div>
                    <div className="text-2xl font-bold text-red-700">{study.beforeBill}</div>
                    <div className="text-xs text-red-600">Duke Energy Bill</div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-green-600 text-sm font-semibold mb-1">After Solar</div>
                    <div className="text-2xl font-bold text-green-700">{study.afterBill}</div>
                    <div className="text-xs text-green-600">New Electric Bill</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Monthly Savings</span>
                  </div>
                  <div className="text-3xl font-bold">{study.monthlySavings}</div>
                  <div className="text-sm opacity-90">${study.yearlyTotal} per year</div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Payback Period</span>
                  </div>
                  <span className="font-semibold text-gray-900">{study.paybackPeriod}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-orange-100 border border-orange-300 rounded-lg p-6 max-w-3xl">
            <div className="text-4xl mr-4">📊</div>
            <div className="text-left">
              <div className="font-bold text-orange-800 text-lg mb-1">Average Customer Saves $2,400+ Per Year</div>
              <div className="text-orange-700">
                That's enough to cover a family vacation, car payments, or boost your retirement savings!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
