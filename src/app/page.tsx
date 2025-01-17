import Hero from "@/components/hero";
import About from "@/components/about";
import Testimonial from "@/components/testimonial";
import FloatingButton from "@/components/floating-button";

export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      <About />
      <Testimonial />
      <FloatingButton />
    </main>
  );
}
