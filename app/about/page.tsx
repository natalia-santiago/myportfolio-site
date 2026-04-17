import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutOverview from "@/components/about/AboutOverview";

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="about-page">
        <AboutOverview />
      </main>

      <Footer />
    </div>
  );
}