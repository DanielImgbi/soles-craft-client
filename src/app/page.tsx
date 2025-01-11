import About from "@/components/about";
import Hero from "@/components/hero/hero";
import Testimonial from "@/components/testimonial";
import Nav from "@/components/nav";
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
