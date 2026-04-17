import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Licenses from "@/components/about/Licenses";

export default function LicensesCertificationsPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="about-container">
        <Licenses />
      </main>

      <Footer />
    </div>
  );
}