import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Band, Scope, Firm, Sequence, Standards } from "@/components/sections";
import { PlanView } from "@/components/plan-view";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { DrawingDefs } from "@/components/marks";

export default function Page() {
  return (
    <>
      <DrawingDefs />
      <Nav />
      <main>
        <Hero />
        <Band />
        <Scope />
        <Firm />
        <PlanView />
        <Sequence />
        <Standards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
