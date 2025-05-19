import Features from "../components/Features";
import Hero from "../components/Hero";
import Header from "../layout/Header";

export default function Home() {
  return (
    <div className="min-vh-100">
      <section id="hero" className="hero">
        <Header />
        <div className="pt-5 pb-5">
          <Hero />
        </div>
      </section>
      <section id="features" className="mt-5">
        <Features />
      </section>
    </div>
  );
}