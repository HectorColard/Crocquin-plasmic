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
    title: "Magnétiseuse à Saint-Ouen-l’Aumône | Catherine Lajudie-Rocquin",
    description:
        "Magnétiseuse à Saint-Ouen-l’Aumône, Catherine Lajudie-Rocquin propose des séances, à distance et au cabinet, proche pontoise à Saint-Ouen-l’Aumône.",
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
            "Catherine Lajudie-Rocquin - Magnétiseuse à Saint-Ouen-l’Aumône",
        title: "Magnétiseuse à Saint-Ouen-l’Aumône | Catherine Lajudie-Rocquin",
        description:
            "Séances de magnétisme, au cabinet, à saint-ouen-l'aumône ou à distance, proche pontoise.",
    },
    twitter: {
        card: "summary",
        title: "Magnétiseuse à Saint-Ouen-l’Aumône | Catherine Lajudie-Rocquin",
        description:
            "Séances de magnétisme, au cabinet, à saint-ouen-l'aumône ou à distance, proche pontoise.",
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
