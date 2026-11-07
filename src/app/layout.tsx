import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Aldair Ortiz Sancho | DevOps, Cloud & Platform Engineering",
    template: "%s | Aldair Ortiz Sancho",
  },
  description: "Aldair Josue Ortiz Sancho is a Senior DevOps and Platform Engineer in Costa Rica, building secure cloud infrastructure, CI/CD platforms and automation across AWS and Azure.",
  applicationName: "Aldair Ortiz Sancho — Field Journal",
  authors: [{ name: "Aldair Josue Ortiz Sancho" }],
  creator: "Aldair Josue Ortiz Sancho",
  publisher: "Aldair Josue Ortiz Sancho",
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  keywords: [
    "Aldair Ortiz Sancho",
    "Senior DevOps Engineer",
    "AWS",
    "Azure",
    "Platform Engineering",
    "Cloud Infrastructure",
    "Terraform",
    "Kubernetes",
    "GitHub Actions",
    "Costa Rica",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aldair Ortiz Sancho",
    title: "Aldair Ortiz Sancho | DevOps, Cloud & Platform Engineering",
    description: "Senior DevOps Engineer building dependable cloud platforms and collecting small moments.",
    url: siteUrl,
    images: siteUrl ? [{ url: "/photos/miho-fuji.png", alt: "Mount Fuji above the road to Miho beach in Japan" }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldair Ortiz Sancho | DevOps, Cloud & Platform Engineering",
    description: "Senior DevOps Engineer building dependable cloud platforms and collecting small moments.",
    images: siteUrl ? [{ url: "/photos/miho-fuji.png", alt: "Mount Fuji above the road to Miho beach in Japan" }] : undefined,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
