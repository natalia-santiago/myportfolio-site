import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Education from "@/components/about/Education";

export default function EducationPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-title-wrap">
            <h1 className="about-title">About Me</h1>
          </div>

          <Education />
        </section>
      </main>

      <Footer />
    </div>
  );
}