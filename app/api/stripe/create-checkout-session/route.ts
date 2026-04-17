import { NextResponse } from "next/server";
import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

if (!secretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

const stripe = new Stripe(secretKey);

export async function POST() {
  try {
    const priceId = process.env.STRIPE_MAINTENANCE_PRICE_ID;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    console.log("PRICE ID:", priceId);
    console.log("SITE URL:", siteUrl);
    console.log("SECRET KEY PREFIX:", process.env.STRIPE_SECRET_KEY?.slice(0, 10));

    if (!priceId) {
      return NextResponse.json(
        { error: "Missing STRIPE_MAINTENANCE_PRICE_ID" },
        { status: 500 }
      );
    }

    if (!siteUrl) {
      return NextResponse.json(
        { error: "Missing NEXT_PUBLIC_SITE_URL" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      return_url: `${siteUrl}/payments/complete?session_id={CHECKOUT_SESSION_ID}`,
    });

    if (!session.client_secret) {
      return NextResponse.json(
        { error: "Stripe did not return a client secret." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      clientSecret: session.client_secret,
    });
  } catch (error: any) {
    console.error("FULL STRIPE ERROR:", error);

    return NextResponse.json(
      {
        error: error?.raw?.message || error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}