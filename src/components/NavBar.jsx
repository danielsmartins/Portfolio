import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = {
    en: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ],
    pt: [
        { name: "Início", href: "#hero" },
        { name: "Sobre", href: "#about" },
        { name: "Projetos", href: "#projects" },
        { name: "Habilidades", href: "#skills" },
        { name: "Contato", href: "#contact" },
    ]
};

export const Navbar = ({ lang, setLang }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const items = navItems[lang] || navItems.en;

    return (
        <nav
            className={cn(
                "fixed w-full z-45 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs border-b border-border/30" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Daniel</span> Portfolio
                    </span>
                </a>

                {/* desktop */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-8">
                        {items.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => setLang(lang === "en" ? "pt" : "en")}
                        className="px-2.5 py-1 text-xs border border-border/80 bg-secondary/35 hover:bg-secondary rounded-full font-bold cursor-pointer transition-all duration-300"
                    >
                        {lang === "en" ? "PT" : "EN"}
                    </button>
                </div>

                {/* mobile toggle and menu button */}
                <div className="flex items-center space-x-4 md:hidden">
                    <button
                        onClick={() => setLang(lang === "en" ? "pt" : "en")}
                        className="px-2.5 py-1 text-xs border border-border/85 bg-secondary/35 rounded-full font-bold cursor-pointer"
                    >
                        {lang === "en" ? "PT" : "EN"}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-2 text-foreground z-50"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* mobile menu */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {items.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};