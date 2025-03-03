import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Gallery from "@/components/Home/Gallery";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "React NextJS Tailwind",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Gallery />
    </main>
  );
}
