import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PaymentCompletePage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="payment-complete-page">
        <section className="payment-complete-card">
          <p className="payment-eyebrow">PAYMENT RECEIVED</p>

          <h1 className="payment-complete-title">Thank you</h1>

          <p className="payment-complete-text">
            Your checkout was completed successfully. You can return to the
            payment page anytime to manage billing or access your customer
            portal.
          </p>

          <Link href="/payments" className="payment-return-button">
            Back to Payments
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}