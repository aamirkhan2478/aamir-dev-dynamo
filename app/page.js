"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
