import About from "@/components/about";
// import Hero from "@/components/hero/hero";
import Testimonial from "@/components/testimonial";

import FloatingButton from "@/components/floating-button";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="w-screen">
      <Hero />
      {/* <Hero /> */}
      <About />
      <Testimonial />
      <FloatingButton />
    </main>
  );
}
