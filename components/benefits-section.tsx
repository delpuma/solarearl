import { Card, CardContent } from "@/components/ui/card"
import { Sun, DollarSign, Leaf, Home, Shield, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Slash Your Electric Bills",
    description:
      "Save $150-$300+ monthly on Duke Energy bills. Many customers see 80-90% reduction in electricity costs!",
    color: "text-green-600 bg-green-100",
  },
  {
    icon: Sun,
    title: "Florida's Perfect Climate",
    description:
      "Central Florida gets 250+ sunny days per year - perfect for maximum solar energy production and savings.",
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    icon: Home,
    title: "Increase Home Value",
    description:
      "Solar panels increase your home's value by $15,000-$25,000 while providing immediate monthly savings.",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: Leaf,
    title: "Go Green & Clean",
    description:
      "Reduce your carbon footprint by 3-4 tons of CO2 annually. Help protect Florida's beautiful environment!",
    color: "text-emerald-600 bg-emerald-100",
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description:
      "Premium panels with 25-year manufacturer warranty plus Earl's personal guarantee on installation quality.",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: TrendingUp,
    title: "Beat Rising Energy Costs",
    description:
      "Lock in your energy costs while Duke Energy rates keep climbing. Protect yourself from future rate hikes!",
    color: "text-orange-600 bg-orange-100",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Central Florida Families
            <span className="text-orange-500 block">Choose Solar Earl</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Duke Energy keeps raising rates, but the sun is free! Here's why thousands of Central Florida homeowners
            have made the smart switch to solar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${benefit.color} mb-6`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl">
            <div className="text-4xl mr-4">⚡</div>
            <div className="text-left">
              <div className="font-bold text-red-800 text-lg mb-1">Duke Energy raised rates 4 times in 2023!</div>
              <div className="text-red-700">
                Don't let them keep draining your wallet. Solar locks in your energy costs for 25+ years.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
