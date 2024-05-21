import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "SalesForce - Sua solução para gerenciamento de relacionamento com o cliente",
  description:
    "SalesForce oferece uma gama completa de recursos para gerenciamento de relacionamento com o cliente. Descubra como podemos ajudar a transformar o seu negócio hoje.",
  keywords: "CRM, gerenciamento de relacionamento com o cliente, SalesForce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
