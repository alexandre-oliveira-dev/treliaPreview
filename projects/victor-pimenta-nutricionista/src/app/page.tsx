import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { OfficeMoment } from "@/components/OfficeMoment";
import { ContactLocation } from "@/components/ContactLocation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <OfficeMoment />
        <ContactLocation />
      </main>
      <Footer />
    </>
  );
}
