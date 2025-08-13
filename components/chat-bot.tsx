"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface UserInfo {
  name?: string
  email?: string
  phone?: string
  monthlyBill?: string
  address?: string
}

const sanitizeInput = (input: string): string => {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .trim()
    .substring(0, 500) // Limit input length
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
  const cleanPhone = phone.replace(/[\s\-$$$$.]/g, "")
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10
}

const validateBill = (bill: string): boolean => {
  const amount = Number.parseFloat(bill.replace(/[$,]/g, ""))
  return !isNaN(amount) && amount > 0 && amount < 10000
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Earl's AI assistant. My goal is to help you discover your solar savings potential and connect you with Earl for a FREE consultation. Duke Energy rates keep rising - let's see how much you can save! What's your first name?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [userInfo, setUserInfo] = useState<UserInfo>({})
  const [currentStep, setCurrentStep] = useState<"name" | "email" | "phone" | "bill" | "address" | "complete">("name")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (text: string, isBot = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isSubmitting) return

    const sanitizedInput = sanitizeInput(inputValue)
    if (!sanitizedInput) {
      addMessage("Please enter valid information.", true)
      return
    }

    addMessage(sanitizedInput, false)
    processUserInput(sanitizedInput)
    setInputValue("")
  }

  const processUserInput = (input: string) => {
    setTimeout(() => {
      switch (currentStep) {
        case "name":
          if (input.length < 2) {
            addMessage("Please enter your full first name.", true)
            return
          }
          setUserInfo((prev) => ({ ...prev, name: input }))
          addMessage(
            `Great to meet you, ${input}! I need your email so Earl can send you a personalized solar savings report with real numbers for your home. What's your email address?`,
            true,
          )
          setCurrentStep("email")
          break

        case "email":
          if (!validateEmail(input)) {
            addMessage("Please enter a valid email address (example: john@email.com)", true)
            return
          }
          setUserInfo((prev) => ({ ...prev, email: input }))
          addMessage("Perfect! What's the best phone number for Earl to call you with your savings results?", true)
          setCurrentStep("phone")
          break

        case "phone":
          if (!validatePhone(input)) {
            addMessage("Please enter a valid phone number (example: 407-555-1234)", true)
            return
          }
          setUserInfo((prev) => ({ ...prev, phone: input }))
          addMessage(
            "Excellent! Now, what's your current monthly Duke Energy bill? (Just the dollar amount - like 150 or $200)",
            true,
          )
          setCurrentStep("bill")
          break

        case "bill":
          if (!validateBill(input)) {
            addMessage("Please enter a valid monthly bill amount (example: 150 or $200)", true)
            return
          }
          setUserInfo((prev) => ({ ...prev, monthlyBill: input }))
          const bill = Number.parseFloat(input.replace(/[$,]/g, "")) || 150
          const savings = Math.round(bill * 0.85)
          const yearSavings = savings * 12
          addMessage(
            `🎉 AMAZING! With a $${bill} monthly Duke Energy bill, you could save approximately $${savings} per month with solar! That's $${yearSavings} per year - enough for a nice vacation! Duke Energy keeps raising rates, but the sun is FREE!`,
            true,
          )
          setTimeout(() => {
            addMessage(
              "Finally, what's your home address? Earl needs this to check your roof's solar potential and calculate exact savings.",
              true,
            )
            setCurrentStep("address")
          }, 2000)
          break

        case "address":
          if (input.length < 10) {
            addMessage("Please enter your complete home address including city.", true)
            return
          }
          setUserInfo((prev) => ({ ...prev, address: input }))
          addMessage(
            "🚀 Perfect! I'm sending all your information to Earl RIGHT NOW. He'll call you within 24 hours with your personalized solar savings analysis!",
            true,
          )
          setTimeout(() => {
            addMessage(
              "Earl will show you EXACTLY how much you'll save, explain the simple installation process, and answer all your questions. Get ready to say goodbye to high Duke Energy bills! ☀️💰",
              true,
            )
            setCurrentStep("complete")
            sendToEarl()
          }, 2000)
          break

        case "complete":
          addMessage(
            "Your information is already with Earl! He'll contact you soon with your savings analysis. Any other questions about going solar?",
            true,
          )
          break
      }
    }, 1000)
  }

  const sendToEarl = async () => {
    setIsSubmitting(true)

    try {
      const leadData = {
        ...userInfo,
        timestamp: new Date().toISOString(),
        source: "Website Chatbot",
        estimatedSavings: userInfo.monthlyBill
          ? Math.round(Number.parseFloat(userInfo.monthlyBill.replace(/[$,]/g, "")) * 0.85)
          : 0,
      }

      const emailData = {
        to_email: "Earl.HomeSolutions@gmail.com",
        from_name: userInfo.name || "Website Visitor",
        from_email: userInfo.email || "no-reply@solarearlfl.com",
        subject: `🌟 NEW SOLAR LEAD: ${userInfo.name} - Potential $${leadData.estimatedSavings}/month savings!`,
        message: `
NEW SOLAR LEAD FROM WEBSITE CHATBOT
=====================================

Customer Information:
• Name: ${userInfo.name}
• Email: ${userInfo.email}
• Phone: ${userInfo.phone}
• Address: ${userInfo.address}

Current Duke Energy Bill: $${userInfo.monthlyBill}/month
Estimated Solar Savings: $${leadData.estimatedSavings}/month
Annual Savings Potential: $${leadData.estimatedSavings * 12}/year

Lead Source: Website AI Chatbot
Timestamp: ${new Date().toLocaleString()}

CALL THIS CUSTOMER WITHIN 24 HOURS!
They're ready to learn about solar savings and beat Duke Energy's rising rates.

Best regards,
Earl's Solar Assistant
        `.trim(),
      }

      // Simple fetch to EmailJS service (no server required)
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_solarearl", // You'll need to set this up at emailjs.com
          template_id: "template_lead", // You'll need to create this template
          user_id: "your_emailjs_user_id", // Your EmailJS public key
          template_params: emailData,
        }),
      })

      if (!response.ok) {
        // Fallback: Create mailto link as backup
        const mailtoLink = `mailto:Earl.HomeSolutions@gmail.com?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.message)}`

        // Try to open default email client
        window.open(mailtoLink, "_blank")

        console.log("📧 Email client opened with lead data:", leadData)
        addMessage(
          "I've opened your email client with Earl's information. Please send the email to complete your request!",
          true,
        )
      } else {
        console.log("✅ Lead successfully sent to Earl via EmailJS:", leadData)
      }
    } catch (error) {
      console.error("❌ Error sending lead to Earl:", error)

      const fallbackMessage = `
NEW SOLAR LEAD: ${userInfo.name}

Name: ${userInfo.name}
Email: ${userInfo.email}
Phone: ${userInfo.phone}
Address: ${userInfo.address}
Monthly Bill: $${userInfo.monthlyBill}
Estimated Savings: $${userInfo.monthlyBill ? Math.round(Number.parseFloat(userInfo.monthlyBill.replace(/[$,]/g, "")) * 0.85) : 0}/month

Please call within 24 hours!
      `.trim()

      const mailtoLink = `mailto:Earl.HomeSolutions@gmail.com?subject=NEW SOLAR LEAD: ${userInfo.name}&body=${encodeURIComponent(fallbackMessage)}`
      window.open(mailtoLink, "_blank")

      addMessage(
        "I've opened your email client with Earl's contact info. You can also call Earl directly at 407-394-8029!",
        true,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow z-50"
        size="lg"
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        Get Solar Savings Now!
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl border-0 z-50 bg-white">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-t-lg p-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center text-lg">
            <Bot className="w-5 h-5 mr-2" />
            Earl's Solar Assistant
          </CardTitle>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-sm text-orange-100">Beat Duke Energy's rising rates!</div>
      </CardHeader>

      <CardContent className="p-0 flex flex-col h-[400px]">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isBot ? "bg-gray-100 text-gray-800" : "bg-orange-500 text-white"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot ? (
                    <Bot className="w-4 h-4 mt-0.5 text-orange-600" />
                  ) : (
                    <User className="w-4 h-4 mt-0.5" />
                  )}
                  <div className="text-sm leading-relaxed">{message.text}</div>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={currentStep === "complete" ? "Ask about solar benefits..." : "Type your response..."}
              className="flex-1 border-2 border-gray-200 focus:border-orange-500"
              disabled={isSubmitting}
              maxLength={500}
            />
            <Button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4"
              disabled={isSubmitting || !inputValue.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
