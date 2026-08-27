import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Differentiators } from "@/components/Differentiators";
import { Studio } from "@/components/Studio";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LeafDivider } from "@/components/LeafDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <LeafDivider tone="sage" className="bg-ivory" />
        <Differentiators />
        <LeafDivider tone="sage" flip className="bg-ivory" />
        <Studio />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
