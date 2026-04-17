import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonalProjects from "@/components/about/PersonalProjects";

export default function PersonalProjectsPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="about-page">
        <PersonalProjects />
      </main>

      <Footer />
    </div>
  );
}