import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StripeEmbeddedCheckout from "@/components/StripeEmbeddedCheckout";

export default function PaymentPage() {
  const portalUrl = process.env.NEXT_PUBLIC_STRIPE_PORTAL_URL;

  return (
    <div className="page-shell">
      <Header />

      <main className="payment-page">
        <section className="payment-hero">
          <p className="payment-eyebrow">SECURE PAYMENTS</p>

          <h1 className="payment-title">Payments</h1>

          <p className="payment-trust">
            Secure payments powered by Stripe. Your information is encrypted.
          </p>

          <p className="payment-intro">
            Pay for website services securely, manage billing, or view your
            existing invoices.
          </p>
        </section>

        <section className="payment-layout">
          <div className="payment-card">
            <div className="payment-card-copy">
              <h2 className="payment-card-title">Monthly Maintenance</h2>

              <p className="payment-card-text">
                Start your monthly website maintenance plan below. Secure checkout powered by Stripe.
              </p>
            </div>

            <ul className="payment-benefits">
              <li>✔ Up to 4 hours of updates per month</li>
              <li>✔ Ongoing support and improvements</li>
              <li>✔ Fast turnaround time</li>
            </ul>

            <div className="payment-divider" />

            <p className="payment-alt">
              Have an invoice? Use the button on the right to pay or manage billing.
            </p>

            <div className="payment-checkout-wrap">
              <StripeEmbeddedCheckout />
            </div>
          </div>

          <aside className="payment-sidebar">
            <div className="payment-sidebar-card">
              <h2 className="payment-sidebar-title">Already a client?</h2>

              <p className="payment-sidebar-text">
                View and pay open invoices, update your payment method, and
                manage your billing in your Stripe customer portal.
              </p>

              {portalUrl ? (
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="payment-portal-button"
                >
                  View & Manage Billing
                </a>
              ) : (
                <p className="payment-portal-missing">
                  Add your customer portal link to{" "}
                  <code>NEXT_PUBLIC_STRIPE_PORTAL_URL</code>.
                </p>
              )}
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}