import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-7N2XSVS6V8";

export const metadata: Metadata = {
  title: {
    default: "Partner Hub | Connecting Care",
    template: "%s | Partner Hub",
  },
  description:
    "Partner Hub connects families and early childhood care providers in North Carolina. Apply for NC Pre-K programs, find childcare, manage attendance and payments — all in one place.",
  keywords: [
    "Partner Hub",
    "childcare North Carolina",
    "NC Pre-K",
    "Smart Start Forsyth County",
    "early childhood education",
    "CCR&R map",
    "childcare providers",
    "family care resources",
    "Pre-K scholarships",
  ],
  authors: [{ name: "Partner Hub" }],
  openGraph: {
    type: "website",
    title: "Partner Hub | Connecting Care",
    description:
      "One platform connecting families and care providers in North Carolina. Apply for programs, find care, manage attendance and payments.",
    siteName: "Partner Hub",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Hub | Connecting Care",
    description:
      "One platform connecting families and care providers in North Carolina. Apply for programs, find care, manage attendance and payments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Partner Hub",
  description:
    "Partner Hub connects families and early childhood care providers in North Carolina through a modern digital platform.",
  areaServed: {
    "@type": "State",
    name: "North Carolina",
  },
  audience: [
    { "@type": "Audience", audienceType: "Families" },
    { "@type": "Audience", audienceType: "Childcare Providers" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
