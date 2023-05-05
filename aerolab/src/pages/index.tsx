import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Walkthrough } from "@/components/Walkthrough";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Walkthrough />
    </>
  );
}
