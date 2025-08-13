import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.svg"
              alt="Solar Earl Logo"
              width={200}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Central Florida's trusted solar expert helping families escape Duke Energy's high bills since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#benefits" className="hover:text-orange-400 transition-colors">
                  Why Solar?
                </a>
              </li>
              <li>
                <a href="#savings" className="hover:text-orange-400 transition-colors">
                  Savings Calculator
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-orange-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About Earl
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Get Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Orlando</li>
              <li>Tampa</li>
              <li>Kissimmee</li>
              <li>Winter Haven</li>
              <li>Lakeland</li>
              <li>Clermont</li>
              <li>All Central Florida</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>(407) SOLAR-FL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>earl@solarearl.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Central Florida</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Solar Earl. All rights reserved. Licensed Florida Contractor.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Warranty
              </a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              Website developed by{" "}
              <a
                href="https://delpuma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                DelPuma Consulting Group
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
