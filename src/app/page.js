import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Coach from "@/components/Coach";
import Features from "@/components/Features";
import Ladder from "@/components/Ladder";
import Audience from "@/components/Audience";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <Coach />
      <Features />
      <Ladder />
      <Audience />
      <Download />
      <Footer />
    </main>
  );
}
