import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://photon.aftershoot.com"),
  title: "Photon by Aftershoot — Beautiful photo editing, made joyful",
  description:
    "Photon is a free, delightfully simple photo editor for hobbyists, memory keepers and creators. No complexity, no cost — just the joy of making your photos shine.",
  keywords: [
    "free photo editor for hobbyists",
    "simple photo editing app",
    "free photo editor",
    "beginner photo editing software",
    "easy photo editor",
  ],
  openGraph: {
    title: "Photon by Aftershoot — Beautiful photo editing, made joyful",
    description:
      "A free, simple photo editor for everyone who loves a good picture. The joy of editing, without the complexity.",
    url: "https://photon.aftershoot.com",
    siteName: "Photon by Aftershoot",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photon by Aftershoot",
    description: "Beautiful photo editing, made joyful. Free forever.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
