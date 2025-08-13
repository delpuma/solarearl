import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, DollarSign } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50 py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              <Zap className="w-4 h-4 mr-2" />
              Duke Energy Bills Too High?
            </div>

            <h1 className="font-display text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Paying
              <span className="text-orange-500 block">Duke Energy!</span>
              <span className="text-blue-600 block text-4xl lg:text-5xl">Go Solar with Earl</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Central Florida's friendliest solar nerd is here to save you
              <span className="font-bold text-green-600"> hundreds every month</span>! Get premium solar panels, expert
              installation, and guaranteed savings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg animate-pulse-glow"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Get FREE Quote & Save Now!
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg bg-transparent"
              >
                Calculate My Savings
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Free Installation Quote
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                25-Year Warranty
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Guaranteed Savings
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 animate-float">
              <Image
                src="/images/earl-hero.png"
                alt="Solar Earl - Florida's Friendly Solar Expert"
                width={600}
                height={600}
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating elements */}
            <div
              className="absolute top-10 right-10 bg-white rounded-full p-4 shadow-lg animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$200+</div>
                <div className="text-xs text-gray-600">Monthly Savings</div>
              </div>
            </div>

            <div
              className="absolute bottom-10 left-10 bg-white rounded-full p-4 shadow-lg animate-bounce"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">25</div>
                <div className="text-xs text-gray-600">Year Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
