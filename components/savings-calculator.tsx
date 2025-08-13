"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, DollarSign, TrendingDown } from "lucide-react"
import Image from "next/image"

export function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState<string>("150")
  const [showResults, setShowResults] = useState(false)

  const calculateSavings = () => {
    setShowResults(true)
  }

  const bill = Number.parseFloat(monthlyBill) || 150
  const monthlySavings = Math.round(bill * 0.85) // 85% savings
  const yearlySavings = monthlySavings * 12
  const twentyFiveYearSavings = yearlySavings * 25

  return (
    <section id="savings" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See How Much
            <span className="text-orange-500 block">You'll Save with Solar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop guessing! Use Earl's calculator to see your exact savings compared to Duke Energy's rising rates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center text-2xl font-display">
                <Calculator className="w-6 h-6 mr-3" />
                Solar Savings Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="monthly-bill" className="text-lg font-semibold text-gray-700 mb-2 block">
                    What's your current monthly Duke Energy bill?
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="monthly-bill"
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="pl-10 text-lg py-3 border-2 border-gray-200 focus:border-orange-500"
                      placeholder="150"
                    />
                  </div>
                </div>

                <Button
                  onClick={calculateSavings}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Calculate My Savings!
                </Button>

                {showResults && (
                  <div className="mt-8 space-y-4 animate-in slide-in-from-bottom duration-500">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-green-800 font-semibold">Monthly Savings:</span>
                        <span className="text-3xl font-bold text-green-600">${monthlySavings}</span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-green-800 font-semibold">Yearly Savings:</span>
                        <span className="text-2xl font-bold text-green-600">${yearlySavings.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-green-200 pt-4">
                        <span className="text-green-800 font-semibold">25-Year Savings:</span>
                        <span className="text-4xl font-bold text-green-600">
                          ${twentyFiveYearSavings.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                      <div className="text-red-800 font-semibold mb-2">🚨 Duke Energy Rate Increases</div>
                      <div className="text-red-700 text-sm">
                        Without solar, you could pay{" "}
                        <span className="font-bold">${(bill * 1.5 * 25 * 12).toLocaleString()}</span>
                        over 25 years with rate increases!
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="text-center lg:text-left">
            <div className="relative">
              <Image
                src="/images/earl-savings.png"
                alt="Earl showing solar savings"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto lg:mx-0 animate-float"
              />

              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
                <TrendingDown className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  Why Duke Energy Bills Keep Rising
                </h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Aging power grid infrastructure
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Rising fuel and maintenance costs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Regulatory rate increases
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Hurricane damage repairs
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-6 shadow-lg">
                <h3 className="font-display text-xl font-bold mb-2">Solar = Predictable Energy Costs</h3>
                <p className="text-green-100">
                  Lock in your energy costs for 25+ years while Duke Energy customers face unpredictable rate hikes
                  every year!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
