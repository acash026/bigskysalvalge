import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Big Sky Salvage is one of the biggest auto parts chains in the USA. Learn about our story, quality process, and values.",
  alternates: { canonical: "/aboutus" },
};

export default function AboutUsPage() {
  return <AboutPageClient />;
}
