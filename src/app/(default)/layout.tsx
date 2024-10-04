import type { Metadata } from "next";
import { Header } from "@/components/header/Header";

interface ILayout extends Readonly<{children: React.ReactNode;}> { }

export default function RootLayout({children,}: ILayout) {
  return (
    <>
        <Header />
        {children}
    </>
  );
}
