import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kapil Thakare | Portfolio",
  description: "Software Engineer & Automator. Building intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={clsx(inter.className, "bg-neutral-950 text-neutral-100 antialiased selection:bg-cyan-500/30")}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}