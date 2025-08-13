import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much can I really save compared to Duke Energy?",
    answer:
      "Most Central Florida homeowners save 80-90% on their electric bills! With Duke Energy rates averaging $0.12-0.15 per kWh and rising, solar typically saves $150-$300+ monthly. Over 25 years, that's $45,000-$90,000 in savings!",
  },
  {
    question: "What happens when Duke Energy raises rates again?",
    answer:
      "That's the beauty of solar! While Duke Energy customers face unpredictable rate hikes (they've raised rates 4 times in recent years), your solar energy cost stays locked in. You're protected from future rate increases for 25+ years.",
  },
  {
    question: "Do solar panels work during Florida's cloudy/rainy days?",
    answer:
      "Solar panels generate electricity from daylight, not just direct sunlight. Florida gets 250+ sunny days per year, making it perfect for solar. Even on cloudy days, you'll generate power, and your system is sized to account for seasonal variations.",
  },
  {
    question: "What about hurricanes and severe weather?",
    answer:
      "Modern solar panels are built to withstand Florida weather, including hurricanes up to Category 4 winds (150+ mph). They're actually more durable than most roofing materials! Plus, they're fully insured and come with comprehensive warranties.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential installations take 1-3 days once permits are approved. The entire process from contract to system activation typically takes 6-12 weeks, including permitting, utility approvals, and scheduling.",
  },
  {
    question: "Do I need to replace my roof first?",
    answer:
      "Not necessarily! I'll inspect your roof during the free consultation. If your roof is in good condition (less than 10 years old), we can install immediately. For older roofs, I'll recommend the best approach to ensure long-term performance.",
  },
  {
    question: "What if I sell my house?",
    answer:
      "Solar panels increase your home's value by $15,000-$25,000 on average! The system transfers to the new owner, and homes with solar sell 20% faster than those without. It's a win-win investment.",
  },
  {
    question: "How much does solar cost upfront?",
    answer:
      "Many customers pay $0 down with solar financing options! Federal tax credits cover 30% of the system cost, and with various financing programs, your monthly solar payment is often less than your current Duke Energy bill.",
  },
  {
    question: "What maintenance do solar panels require?",
    answer:
      "Very little! Solar panels are self-cleaning in Florida's frequent rains. I recommend an annual inspection and occasional cleaning if needed. The systems come with 25-year warranties and monitoring to ensure optimal performance.",
  },
  {
    question: "Can I go completely off-grid?",
    answer:
      "While possible, most customers choose grid-tied systems for reliability and cost-effectiveness. You'll still be connected to Duke Energy for backup power, but your usage will be minimal. Battery backup systems are available for critical loads during outages.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
            <span className="text-orange-500 block">About Going Solar in Florida</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earl answers the most common questions about solar panels, savings, and ditching Duke Energy's high bills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-md border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left font-semibold text-gray-900 hover:text-orange-600 text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-700 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-blue-100 border border-blue-300 rounded-lg p-6 max-w-2xl">
            <div className="text-4xl mr-4">💬</div>
            <div className="text-left">
              <div className="font-bold text-blue-800 text-lg mb-1">Still Have Questions?</div>
              <div className="text-blue-700">
                Earl loves talking solar! Schedule a free consultation and get all your questions answered.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
