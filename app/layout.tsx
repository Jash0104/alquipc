import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "ALQUIPC - Alquiler de Computadores",
  description: "Alquiler de equipos de cómputo portátiles por días",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={` ${poppins.className } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
