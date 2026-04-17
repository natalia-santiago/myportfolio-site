"use client";

import { FormEvent, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type FormData = {
  name: string;
  email: string;
  businessName: string;
  website: string;
  service: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  businessName: "",
  website: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFeedback("Your message has been sent successfully. I’ll reply to your email as soon as I can.");
      setFormData(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="page-shell">
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h1 className="contact-title">Contact Me</h1>

          <p className="contact-intro">
            Not ready to book a consultation yet? Leave your information and tell
            me a little about your website needs. I’ll review your message and
            reply by email.
          </p>
        </section>

        <section className="contact-card">
          <div className="contact-card-inner">
            <div className="contact-copy">
              <h2 className="contact-card-title">Tell me about your project</h2>

              <p className="contact-card-text">
                This form is perfect if you want to ask questions, share your
                ideas, or reach out before booking.
              </p>

              <div className="contact-note">
                <p>
                  <strong>Good fit for:</strong> small business websites, redesigns,
                  maintenance, SEO-focused pages, and custom website projects.
                </p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="businessName">Business Name</label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Your business name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="website">Current Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="service">What do you need help with?</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Website Maintenance">Website Maintenance</option>
                  <option value="SEO">SEO</option>
                  <option value="Custom Website">Custom Website</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              <div className="contact-field">
                <label htmlFor="message">What can you tell me about your website needs? *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your business, goals, current website, and anything you’d like help with."
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {feedback && (
                <p
                  className={`contact-feedback ${
                    status === "success" ? "success" : "error"
                  }`}
                >
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}