import { Divider } from "@/components/Divider";
import { Header } from "@/components/home/Header";
import { About } from "@/components/home/About";
import { Hosting } from "@/components/home/Hosting";
import { Contact } from "@/components/home/Contact";
import { Templates } from "@/components/home/Templates";
import { DataMaster } from "@/components/home/DataMaster";


export default function Home() {
    return (
        <>
           <main className="flex flex-col items-center">
                <Header />
                <Divider />
                <About />
                <Templates />
                <Divider />
                <DataMaster />
                <Divider />
                <Hosting />
                <Divider />
                <Contact />
                {/* Only in dev env */}
                {/* <div className="h-screen"></div> */}
           </main>
        </>
  );
}
