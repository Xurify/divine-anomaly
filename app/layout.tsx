import type { Metadata } from "next";
import { Geist, Geist_Mono, Vesper_Libre, Noto_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vesperLibre = Vesper_Libre({
  variable: "--font-vesper-libre",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Divine Anomaly",
  description: "An epic journey awaits in a realm where reality fractures and shadows come alive.",
  icons: {
    icon: [
      { url: '/images/DivineAnomalyIconTransparent.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/DivineAnomalyIconTransparent.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/DivineAnomalyIconTransparent.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/images/DivineAnomalyIconTransparent.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${vesperLibre.variable} ${notoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
