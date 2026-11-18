import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Presentation } from "@/components/sections/Presentation";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonial } from "@/components/sections/Testimonial";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="site">
            <Navbar />
            <main>
                <Hero />
                <Presentation />
                <Method />
                <Pricing />
                <Testimonial />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
