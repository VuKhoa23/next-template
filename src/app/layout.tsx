import "./globals.css";

import localFont from "next/font/local";



const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <title>Vu Khoa - Portfolio</title>
            <meta name="title" content="Vu Khoa - Portfolio" />
            <meta name="description" content="Hello! I am Vu Khoa, a passionate software developer." />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://vukhoa.tech/" />
            <meta property="og:title" content="Vu Khoa - Portfolio" />
            <meta property="og:description" content="Hello! I am Vu Khoa, a passionate software developer." />
            <meta property="og:image" content="https://vukhoa.tech/thumb.jpg" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://vukhoa.tech/" />
            <meta property="twitter:title" content="Vu Khoa - Portfolio" />
            <meta
                property="twitter:description"
                content="Hello! I am Vu Khoa, a passionate software developer."
            />
            <meta property="twitter:image" content="https://vukhoa.tech/thumb.jpg" />

            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
