import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: {
            en: "Planify AI",
            pt: "Planify AI"
        },
        description: {
            en: "A modern SaaS financial planner integrated with a Telegram Bot and Google Gemini AI. Instantly log transactions via voice or text messages and automatically parse credit card invoices from PDF uploads.",
            pt: "SaaS inteligente de gestão financeira integrado com Telegram Bot e Google Gemini. Registre gastos por áudio ou texto e envie faturas em PDF para extração automática."
        },
        image: "/projects/PlanifyAI_1.png",
        hoverImage: "/projects/PlanifyAI_2.png",
        tags: ["Next.js", "PostgreSQL", "Google Gemini", "Telegram API", "Drizzle ORM", "Tailwind CSS"],
        demoUrl: "https://github.com/danielsmartins/Planify-AI",
        githubUrl: "https://github.com/danielsmartins/Planify-AI"
    },
    {
        id: 2,
        title: {
            en: "FinPlan",
            pt: "FinPlan"
        },
        description: {
            en: "A financial planner app to help you manage your finances, track spending and view analytics.",
            pt: "Um aplicativo de planejamento financeiro para ajudá-lo a gerenciar suas finanças, acompanhar gastos e visualizar relatórios."
        },
        image: "/projects/FinPlan.jpg",
        tags: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Tailwind CSS"],
        demoUrl: "https://fin-plan-web.vercel.app/",
        githubUrl: "https://github.com/danielsmartins/FinPlan"
    },
    {
        id: 3,
        title: {
            en: "Recipe App",
            pt: "Recipe App"
        },
        description: {
            en: "A web application to suggest recipes with AI based on ingredients you have at home.",
            pt: "Um aplicativo web para sugerir receitas com inteligência artificial com base nos ingredientes que você tem em casa."
        },
        image: "/projects/ChefClaude.png",
        tags: ["React", "AI", "JavaScript", "CSS"],
        demoUrl: "https://chefclaude-flax.vercel.app/",
        githubUrl: "https://github.com/danielsmartins/React_Course/tree/main/ChefClaude"
    },
    {
        id: 4,
        title: {
            en: "Phonebook App",
            pt: "Phonebook App"
        },
        description: {
            en: "A full-stack phonebook application built with React, Node.js, and MongoDB.",
            pt: "Uma aplicação de agenda telefônica full-stack construída com React, Node.js e MongoDB."
        },
        image: "/projects/Phonebook.png",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        demoUrl: "https://fullstack-part3-phonebook-iodu.onrender.com/",
        githubUrl: "https://github.com/danielsmartins/FullStack-part3"
    },
    {
        id: 5,
        title: {
            en: "Wordle Game",
            pt: "Jogo Wordle"
        },
        description: {
            en: "A version of the popular wordle with programming thematics and animations.",
            pt: "Uma versão do popular jogo Wordle com temática de programação e animações."
        },
        image: "/projects/AssemblyEndgame.png",
        tags: ["React", "JavaScript", "CSS"],
        demoUrl: "https://assemblyendgame-eight.vercel.app/",
        githubUrl: "https://github.com/danielsmartins/React_Course/tree/main/AssemblyEndGame"
    }
];

const translations = {
    en: {
        title: "Featured",
        titleSpan: "Projects",
        subtitle: "Here are some of my projects. Each project was carefully crafted with attention to detail, performance, and best practices.",
        githubBtn: "Check My Github"
    },
    pt: {
        title: "Projetos em",
        titleSpan: "Destaque",
        subtitle: "Aqui estão alguns dos meus projetos. Cada projeto foi cuidadosamente desenvolvido com atenção aos detalhes, performance e melhores práticas.",
        githubBtn: "Ver Meu Github"
    }
};

export const ProjectsSection = ({ lang }) => {
    const t = translations[lang] || translations.en;

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    {t.title} <span className="text-gradient text-glow">{t.titleSpan}</span>
                </h2>

                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
                    {t.subtitle}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group gradient-border overflow-hidden card-hover flex flex-col justify-between h-full bg-card/10 backdrop-blur-xs"
                        >
                            <div className="h-52 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title[lang] || project.title.en}
                                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                                        project.hoverImage ? "group-hover:opacity-0 absolute inset-0" : ""
                                    }`}
                                />
                                {project.hoverImage && (
                                    <img
                                        src={project.hoverImage}
                                        alt={`${project.title[lang] || project.title.en} hover`}
                                        className="w-full h-full object-cover transition-all duration-500 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 absolute inset-0"
                                    />
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2.5 py-0.5 text-[11px] font-medium border border-border bg-secondary/35 text-foreground/80 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 text-left">
                                        {project.title[lang] || project.title.en}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 text-left line-clamp-3 leading-relaxed">
                                        {project.description[lang] || project.description.en}
                                    </p>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-border/40">
                                    <div className="flex space-x-4">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/75 hover:text-primary transition-colors duration-300 flex items-center gap-1.5 text-sm font-medium"
                                            >
                                                <ExternalLink size={18} />
                                                <span>Demo</span>
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/75 hover:text-primary transition-colors duration-300 flex items-center gap-1.5 text-sm font-medium"
                                        >
                                            <Github size={18} />
                                            <span>{lang === "pt" ? "Código" : "Code"}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/danielsmartins"
                    >
                        {t.githubBtn} <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};