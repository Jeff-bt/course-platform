import { Card } from "@/components/Card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial"
};

export default function PageHome() {
  return (
    <main>
      <Card />
    </main>
  );
}
