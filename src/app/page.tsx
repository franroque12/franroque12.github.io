import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import BeyondTheRole from "@/components/BeyondTheRole";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-pattern" aria-hidden="true" />
      <main className="relative">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Certifications />
        <Education />
        <BeyondTheRole />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
