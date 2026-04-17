import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkExperience from "@/components/about/WorkExperience";

export default function WorkExperiencePage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="about-page">
        <WorkExperience />
      </main>

      <Footer />
    </div>
  );
}