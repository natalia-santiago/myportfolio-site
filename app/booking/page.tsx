import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function BookingPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="booking-page">
        <section className="booking-hero">
          <p className="booking-eyebrow">LET’S WORK TOGETHER</p>

          <h1 className="booking-title">Book a Free Consultation</h1>

          <p className="booking-intro">
            Choose a time that works for you and let’s talk about your website,
            goals, and the best direction for your business online.
          </p>
        </section>

        <section className="booking-card">
          <CalendlyEmbed />
        </section>
      </main>

      <Footer />
    </div>
  );
}