import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Skills from "@/components/about/Skills";

export default function SkillsPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="about-page-placeholder">
        <div className="about-container">
          <Skills />
        </div>
      </main>

      <Footer />
    </div>
  );
}