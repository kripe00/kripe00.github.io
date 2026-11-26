import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { WorkbenchProvider } from "@/components/providers/WorkbenchProvider";
import { CONTENT_DICTIONARY, PROFILE_CONFIG } from "@/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0D10" },
    { media: "(prefers-color-scheme: light)", color: "#EEF2F6" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kristiansolliepedersen.no"),
  title: CONTENT_DICTIONARY.no.meta.title,
  description: CONTENT_DICTIONARY.no.meta.description,
  authors: [{ name: PROFILE_CONFIG.fullName, url: PROFILE_CONFIG.links.github }],
  creator: PROFILE_CONFIG.fullName,
  keywords: [
    "Kristian Sollie Pedersen",
    "Fullstack-utvikler",
    "Fullstack Developer Norway",
    "Three.js",
    "React Three Fiber",
    "AxisOS",
    "Floorplan Studio",
    "AI Security",
    "AI Red-Teaming",
    "TypeScript",
    "Next.js",
    "OpenSCAD",
    "Eidsvoll",
    "Romerike",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    alternateLocale: ["en_US"],
    siteName: PROFILE_CONFIG.fullName,
    title: CONTENT_DICTIONARY.no.meta.title,
    description: CONTENT_DICTIONARY.no.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: CONTENT_DICTIONARY.no.meta.title,
    description: CONTENT_DICTIONARY.no.meta.description,
  },
};

const themeInitScript = `
(function() {
  try {
    var savedTheme = localStorage.getItem('ksp-workbench-theme');
    if (savedTheme === 'blueprint' || savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    var savedLocale = localStorage.getItem('ksp-workbench-locale');
    if (savedLocale === 'en') {
      document.documentElement.lang = 'en';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE_CONFIG.fullName,
    jobTitle: "Fullstack Developer & Spatial 3D Engineer",
    worksFor: {
      "@type": "Organization",
      name: "AxisOS",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Høyskolen Kristiania",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Råholt / Eidsvoll",
      addressCountry: "NO",
    },
    sameAs: [PROFILE_CONFIG.links.github, PROFILE_CONFIG.links.linkedin],
  };

  return (
    <html
      lang="nb"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-ink">
        <WorkbenchProvider>{children}</WorkbenchProvider>
      </body>
    </html>
  );
}
