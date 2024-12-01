import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Users App",
    description: "A simple app to view and add users",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
