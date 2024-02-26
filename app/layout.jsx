import { Montserrat } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const mont = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mont',
});

export const metadata = {
    title: "Studio-dev | Développeur Web",
    description: "Studio-dev",
    keywords: [
        'Next.js',
        'React',
        'JavaScript', 
        'studio-dev', 
        'création',
        'web', 
        'web-master', 
        'design', 
        'design web', 
        'développeur', 
        'portfolios',
        'vitrine',
        'e-commerce',
        'refonte',
        'hébergement',
        'maintenance',
    ],
    publisher: 'Studio-dev',
};

export default function RootLayout({ children }) {
    return (
        <html className="bg-bg !scroll-smooth " lang="fr">
            <body className={`pt-28 sm:pt-28 ${mont.className}`}>
                <ActiveSectionContextProvider>
                    {children}
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}