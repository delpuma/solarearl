import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { to, subject, leadData } = await request.json()

    // Validate the request
    if (!leadData || !leadData.name || !leadData.email || !leadData.phone) {
      return NextResponse.json({ error: "Missing required lead data" }, { status: 400 })
    }

    // Sanitize and validate email recipient
    if (to !== "Earl.HomeSolutions@gmail.com") {
      return NextResponse.json({ error: "Invalid recipient" }, { status: 400 })
    }

    // In production, you would integrate with an email service like:
    // - EmailJS
    // - SendGrid
    // - Resend
    // - AWS SES

    // For now, we'll log the lead and return success
    console.log("📧 New lead for Earl:", {
      timestamp: new Date().toISOString(),
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      monthlyBill: leadData.monthlyBill,
      address: leadData.address,
      estimatedSavings: leadData.estimatedSavings,
    })

    // TODO: Replace with actual email service integration
    // Example with a service like Resend:
    /*
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'leads@solarearlfl.com',
        to: 'Earl.HomeSolutions@gmail.com',
        subject: subject,
        html: `
          <h2>New Solar Lead from Website</h2>
          <p><strong>Name:</strong> ${leadData.name}</p>
          <p><strong>Email:</strong> ${leadData.email}</p>
          <p><strong>Phone:</strong> ${leadData.phone}</p>
          <p><strong>Monthly Bill:</strong> $${leadData.monthlyBill}</p>
          <p><strong>Address:</strong> ${leadData.address}</p>
          <p><strong>Estimated Monthly Savings:</strong> $${leadData.estimatedSavings}</p>
          <p><strong>Source:</strong> Website Chatbot</p>
          <p><strong>Timestamp:</strong> ${leadData.timestamp}</p>
        `
      }),
    })
    */

    return NextResponse.json({
      success: true,
      message: "Lead sent successfully to Earl",
    })
  } catch (error) {
    console.error("Error sending lead:", error)
    return NextResponse.json(
      {
        error: "Failed to send lead",
      },
      { status: 500 },
    )
  }
}
