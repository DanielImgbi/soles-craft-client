import About from "@/components/about";
import Hero from "@/components/hero/hero";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      <About />
      <Testimonial />
    </main>
  );
}
