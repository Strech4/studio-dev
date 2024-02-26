import { Divider } from "@/components/Divider";
import { Header } from "@/components/home/Header";
import { Nav } from "@/components/home/Nav";
import { About } from "@/components/home/About";
import { About2 } from "@/components/home/About2";
import { Marquee } from "@/components/home/Marquee";
import { Hosting } from "@/components/home/Hosting";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/Footer";


export default function Home() {
    return (
        <>
           <Nav />
           <main className="flex flex-col items-center">
                <Header />
                <Divider />
                <About />
                <About2 />
                <Marquee />
                <Hosting />
                <Divider />
                <Contact />
                <Footer />
                {/* Only in dev env */}
                {/* <div className="h-screen"></div> */}
           </main>
        </>
  );
}
