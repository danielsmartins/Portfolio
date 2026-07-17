import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
    const [lang, setLang] = useState("pt"); // Default to Portuguese

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <Navbar lang={lang} setLang={setLang} />
            {/* Main Content*/}
            <main>
                <HeroSection lang={lang} />
                <AboutSection lang={lang} />
                <ProjectsSection lang={lang} />
                <SkillsSection lang={lang} />
                <ContactSection lang={lang} />
            </main>
            {/* Footer */}
            <Footer lang={lang} />
        </div>
    );
};