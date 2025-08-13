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

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Earl's AI assistant. I'm here to help you learn about solar savings and get you connected with Earl for a free consultation. What's your name?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [userInfo, setUserInfo] = useState<UserInfo>({})
  const [currentStep, setCurrentStep] = useState<"name" | "email" | "phone" | "bill" | "address" | "complete">("name")
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
    if (!inputValue.trim()) return

    addMessage(inputValue, false)
    processUserInput(inputValue)
    setInputValue("")
  }

  const processUserInput = (input: string) => {
    setTimeout(() => {
      switch (currentStep) {
        case "name":
          setUserInfo((prev) => ({ ...prev, name: input }))
          addMessage(
            `Nice to meet you, ${input}! What's your email address so Earl can send you a personalized solar savings report?`,
            true,
          )
          setCurrentStep("email")
          break

        case "email":
          setUserInfo((prev) => ({ ...prev, email: input }))
          addMessage("Perfect! What's the best phone number to reach you?", true)
          setCurrentStep("phone")
          break

        case "phone":
          setUserInfo((prev) => ({ ...prev, phone: input }))
          addMessage("Great! What's your current monthly Duke Energy bill? (Just enter the dollar amount)", true)
          setCurrentStep("bill")
          break

        case "bill":
          setUserInfo((prev) => ({ ...prev, monthlyBill: input }))
          const bill = Number.parseFloat(input) || 150
          const savings = Math.round(bill * 0.85)
          addMessage(
            `Wow! Based on a $${bill} monthly bill, you could save approximately $${savings} per month with solar! That's $${savings * 12} per year! 🎉`,
            true,
          )
          setTimeout(() => {
            addMessage("What's your home address so Earl can check your roof's solar potential?", true)
            setCurrentStep("address")
          }, 2000)
          break

        case "address":
          setUserInfo((prev) => ({ ...prev, address: input }))
          addMessage(
            "Excellent! I'm sending all your information to Earl right now. He'll contact you within 24 hours with a detailed solar savings analysis for your specific home.",
            true,
          )
          setTimeout(() => {
            addMessage(
              "Earl will show you exactly how much you can save, explain the installation process, and answer all your questions. Thanks for choosing Solar Earl - Central Florida's friendliest solar expert! ☀️",
              true,
            )
            setCurrentStep("complete")
            // Here you would send the data to Earl
            sendToEarl()
          }, 2000)
          break

        case "complete":
          addMessage(
            "I've already sent your information to Earl! He'll be in touch soon. Is there anything else you'd like to know about solar?",
            true,
          )
          break
      }
    }, 1000)
  }

  const sendToEarl = () => {
    // In a real implementation, you would send this data to Earl via email or your preferred method
    console.log("Sending lead to Earl:", userInfo)

    // Example: You could use a service like EmailJS, a webhook, or your own API
    // emailjs.send('service_id', 'template_id', {
    //   name: userInfo.name,
    //   email: userInfo.email,
    //   phone: userInfo.phone,
    //   monthlyBill: userInfo.monthlyBill,
    //   address: userInfo.address,
    //   timestamp: new Date().toISOString()
    // })
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse-glow z-50"
        size="lg"
      >
        <MessageCircle className="w-6 h-6 mr-2" />
        Chat with Earl's AI
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
        <div className="text-sm text-orange-100">Get instant solar savings info!</div>
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
              placeholder={currentStep === "complete" ? "Ask me anything about solar..." : "Type your response..."}
              className="flex-1 border-2 border-gray-200 focus:border-orange-500"
            />
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
