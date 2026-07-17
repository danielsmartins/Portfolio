import { ArrowDown } from "lucide-react";

const content = {
    en: {
        greeting: "Hi, I'm",
        name: "Daniel",
        lastName: "Silva",
        description: "Hello! I'm an IT student at IMD/UFRN, driven by a passion for Fullstack development. My goal is to build exceptional web experiences, crafting robust and intuitive solutions from end to end.",
        button: "View My Work",
        scroll: "Scroll"
    },
    pt: {
        greeting: "Olá, eu sou",
        name: "Daniel",
        lastName: "Silva",
        description: "Olá! Sou estudante de TI no IMD/UFRN, movido pela paixão pelo desenvolvimento Fullstack. Meu objetivo é criar experiências web excepcionais, desenvolvendo soluções robustas e intuitivas de ponta a ponta.",
        button: "Ver Meu Trabalho",
        scroll: "Rolar"
    }
};

export const HeroSection = ({ lang }) => {
    const t = content[lang] || content.en;

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            {/* Ambient Background glow effect */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0" />
            
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">{t.greeting}</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> {t.name}</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> {t.lastName}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
                        {t.description}
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button inline-block">
                            {t.button}
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
                <span className="text-sm text-muted-foreground mb-2">{t.scroll}</span>
                <ArrowDown className="w-5 h-5 text-primary" />
            </div>
        </section>
    );
};