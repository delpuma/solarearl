import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.svg" alt="Solar Earl Logo" width={200} height={50} className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Why Solar?
            </a>
            <a href="#savings" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Savings Calculator
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Reviews
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About Earl
            </a>
            <a href="#faq" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow">
              <Phone className="w-4 h-4 mr-2" />
              Call Earl Now!
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
