import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '../../lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'usd', planType } = await request.json()

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata: {
        planType
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error('Payment intent error:', error)
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}
