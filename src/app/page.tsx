import { Card } from "@/components/Card/Card";
import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial"
};

export default function PageHome() {
  return (
    <main>
      <Section 
        title="Veja mais cursos"
        variant="h-list"
      />
    </main>
  );
}
