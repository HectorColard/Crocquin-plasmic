import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: SITE_URL,
    title: "Magnétiseuse Val d'oise | Catherine Lajudie-Rocquin",
    description:
        "Magnétiseuse Val d'oise, Catherine Lajudie-Rocquin propose des séances, à distance et au cabinet Val d'oise.",
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "/",
        siteName:
            "Catherine Lajudie-Rocquin - Magnétiseuse Val d'oise",
        title: "Magnétiseuse Val d'oise | Catherine Lajudie-Rocquin",
        description:
            "Séances de magnétisme, au cabinet, dans le Val d'Oise ou à distance.",
    },
    twitter: {
        card: "summary",
        title: "Magnétiseuse Val d'oise | Catherine Lajudie-Rocquin",
        description:
            "Séances de magnétisme, au cabinet, dans le Val d'Oise ou à distance.",
    },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="fr"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <head>
                <meta
                    name="google-site-verification"
                    content="e9_hGailxirkeJXsECnJVyTUI5cpGvZaFonW94XHiTE"
                />
            </head>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
