"use client";

import { useCallback, useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

export default function StripeEmbeddedCheckout() {
  const [debugError, setDebugError] = useState<string | null>(null);

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

  const stripePromise = useMemo(() => {
    if (!publishableKey) return null;
    return loadStripe(publishableKey);
  }, [publishableKey]);

  const fetchClientSecret = useCallback(async () => {
    setDebugError(null);

    const response = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const message =
        data?.error || `Request failed with status ${response.status}`;
      setDebugError(message);
      throw new Error(message);
    }

    if (!data?.clientSecret) {
      const message = "No clientSecret was returned by the server.";
      setDebugError(message);
      throw new Error(message);
    }

    return data.clientSecret;
  }, []);

  if (!publishableKey || !stripePromise) {
    return (
      <div className="payment-debug-box">
        <p className="payment-debug-title">Stripe checkout unavailable</p>
        <p className="payment-debug-text">
          Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.
        </p>
      </div>
    );
  }

  if (debugError) {
    return (
      <div className="payment-debug-box">
        <p className="payment-debug-title">Stripe checkout error</p>
        <p className="payment-debug-text">{debugError}</p>
      </div>
    );
  }

  return (
    <EmbeddedCheckoutProvider
      stripe={stripePromise}
      options={{ fetchClientSecret }}
    >
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
}