import { Metadata } from "next";

import { Section } from "@/components/section/Section";

export const metadata: Metadata = {
    title: "CodarSe - Todos os cursos"
};
export default function PageCursos() {
    return (
        <Section 
            title="Todos os cursos"
            variant="grid"
        />
    );
}