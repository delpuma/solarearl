import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Rodriguez",
    location: "Orlando, FL",
    savings: "$287/month",
    rating: 5,
    text: "Earl saved us from Duke Energy's crazy bills! Our electric bill went from $320 to just $33. Best investment we ever made!",
    image: "/happy-hispanic-woman.png",
  },
  {
    name: "John & Sarah Mitchell",
    location: "Tampa, FL",
    savings: "$245/month",
    rating: 5,
    text: "We were skeptical at first, but Earl explained everything perfectly. Our solar panels paid for themselves in 6 years, and now we're saving thousands!",
    image: "/happy-couple-park.png",
  },
  {
    name: "Robert Chen",
    location: "Kissimmee, FL",
    savings: "$198/month",
    rating: 5,
    text: "Duke Energy raised our rates 3 times last year. Earl's solar system locked in our costs and we're saving $200+ every month. No more surprises!",
    image: "/happy-asian-man.png",
  },
  {
    name: "Jennifer Williams",
    location: "Lakeland, FL",
    savings: "$312/month",
    rating: 5,
    text: "As a single mom, every dollar counts. Earl's solar panels cut my electric bill by 90%! That's $300+ back in my pocket every month.",
    image: "/happy-african-american-woman.png",
  },
  {
    name: "Mike & Lisa Thompson",
    location: "Winter Haven, FL",
    savings: "$267/month",
    rating: 5,
    text: "We love that we're helping the environment AND saving money. Earl made the whole process easy and stress-free. Highly recommend!",
    image: "/happy-elderly-couple.png",
  },
  {
    name: "Carlos Mendez",
    location: "Clermont, FL",
    savings: "$223/month",
    rating: 5,
    text: "My Duke Energy bill was killing me - $280+ every month! Now I pay almost nothing and my house runs on sunshine. Earl is the man!",
    image: "/happy-latino-man.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Central Florida Families,
            <span className="text-orange-500 block">Real Solar Savings</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what your neighbors are saying about ditching Duke Energy and switching
            to solar with Earl!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-8 h-8 text-orange-300 mb-2" />
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                </div>

                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <div className="text-green-800 font-semibold text-sm">Monthly Savings</div>
                  <div className="text-2xl font-bold text-green-600">{testimonial.savings}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-yellow-100 border border-yellow-300 rounded-lg p-6 max-w-2xl">
            <div className="text-4xl mr-4">⭐</div>
            <div className="text-left">
              <div className="font-bold text-yellow-800 text-lg mb-1">4.9/5 Stars • 500+ Happy Customers</div>
              <div className="text-yellow-700">
                Join hundreds of Central Florida families who've escaped Duke Energy's high bills!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
