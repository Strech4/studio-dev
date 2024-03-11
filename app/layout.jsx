import { Montserrat } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'react-hot-toast';
import { Nav} from "@/components/home/Nav";
import { Footer } from "@/components/Footer";

const mont = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mont',
});

export const metadata = {
    title: "Studio-dev | Développeur Web",
    description: "Conception de sites vitrine, portfolios et e-commerce. Hébergement adapté à vos besoins pour garantir une présence en ligne optimale",
    keywords: [
        'studio-dev',
        'dev studio',
        'studio',
        'dev',
        'création',
        'web', 
        'web-master', 
        'design', 
        'design web', 
        'développeur',
        'développeur web',
        'portfolios',
        'vitrine',
        'e-commerce',
        'refonte',
        'hébergement',
        'maintenance',
        'front-end',
        'dev front-end',
    ],
    publisher: 'Studio-dev',
    twitter: {
        card: "summary_large_image"
    },
};

export default function RootLayout({ children }) {
    return (
        <html className="bg-bg !scroll-smooth " lang="fr">
            <body className={`pt-28 sm:pt-28 overflow-x-hidden ${mont.className}`}>
                <ActiveSectionContextProvider>

                    <Toaster />
                    <Nav />
                    {children}
                    <Footer />
                    {/* Speed Insights = vecel production tool */}
                    <SpeedInsights />

                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
