import About from "@/components/about";
import Hero from "@/components/hero/hero";
import Testimonial from "@/components/testimonial";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="w-screen">
      <Nav />
      <Hero />
      <About />
      <Testimonial />
    </main>
  );
}
