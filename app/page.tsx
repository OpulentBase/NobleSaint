import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Band, Proof, Scope, Firm, Sequence, Standards } from "@/components/sections";
import { Vision } from "@/components/vision";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CallBar } from "@/components/call-bar";
import { DrawingDefs } from "@/components/marks";

export default function Page() {
  return (
    <>
      <DrawingDefs />
      <Nav />
      <main>
        <Hero />
        <Band />
        <Proof />
        <Scope />
        <Firm />
        <Vision />
        <Sequence />
        <Standards />
        <Contact />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
