import Header from "@/components/Header";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Stacks from "@/components/sections/Stacks";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen px-3 py-3 sm:px-6 sm:py-10">
      <div className="mx-auto w-full max-w-5xl border border-line bg-sheet px-5 sm:px-12">
        <div className="mx-auto w-full max-w-[600px]">
          <Header />
          <main>
            <Hero />
            <TrustedBy />
            <About />
            <Achievements />
            <Stacks />
            <Experience />
            <Projects />
            <Testimonials />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
