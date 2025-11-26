import "./globals.scss"
import type { Metadata } from "next"
import { Quicksand, Cinzel } from "next/font/google"

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Matheus Leite",
  description: "Meu portifólio pessoal.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR" data-theme="light">
      <body className={`${quicksand.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
