import { Briefcase, Code, User, Sparkles } from "lucide-react";

const content = {
    en: {
        title: "About",
        titleSpan: "Me",
        subtitle: "Fullstack Developer & Tech Enthusiast",
        desc1: "Hi! I'm currently pursuing a Bachelor's Degree in Information Technology at the Instituto Metrópole Digital (IMD/UFRN). I'm always looking for new challenges and opportunities to grow as a developer and expand my knowledge in the tech field.",
        desc2: "I'm passionate about building complete and efficient applications, from intuitive user interfaces to robust backend logic. I'm constantly exploring new technologies and best practices to sharpen my skills and stay up to date with the fast-paced world of technology.",
        contactBtn: "Get In Touch",
        cvBtn: "Download CV",
        skills: [
            {
                title: "Web Development",
                description: "Building complete web applications from frontend to backend with modern frameworks.",
                icon: Code
            },
            {
                title: "Software Engineering",
                description: "Software development principles, best practices, code structure, and version control.",
                icon: User
            },
            {
                title: "Problem Solving & Critical Thinking",
                description: "Identifying challenges, analyzing situations, and developing effective solutions.",
                icon: Briefcase
            },
            {
                title: "AI Integration",
                description: "Working with modern technologies such as AI-powered assistants to enhance decision-making and automate processes.",
                icon: Sparkles
            }
        ]
    },
    pt: {
        title: "Sobre",
        titleSpan: "Mim",
        subtitle: "Desenvolvedor Fullstack & Entusiasta de Tecnologia",
        desc1: "Olá! Atualmente estou cursando Bacharelado em Tecnologia da Informação no Instituto Metrópole Digital (IMD/UFRN). Estou sempre em busca de novos desafios e oportunidades para crescer como desenvolvedor e expandir meus conhecimentos na área de tecnologia.",
        desc2: "Sou apaixonado por construir aplicações completas e eficientes, desde interfaces de usuário intuitivas até lógicas de backend robustas. Estou constantemente explorando novas tecnologias e melhores práticas para aprimorar minhas habilidades e acompanhar o mundo dinâmico da tecnologia.",
        contactBtn: "Entre em Contato",
        cvBtn: "Baixar Currículo",
        skills: [
            {
                title: "Desenvolvimento Web",
                description: "Construindo aplicações web completas do frontend ao backend com frameworks modernos.",
                icon: Code
            },
            {
                title: "Engenharia de Software",
                description: "Princípios de desenvolvimento de software, melhores práticas, estrutura de código e controle de versão.",
                icon: User
            },
            {
                title: "Resolução de Problemas & Pensamento Crítico",
                description: "Identificando desafios, analisando situações e desenvolvendo soluções eficazes.",
                icon: Briefcase
            },
            {
                title: "Integração de IA",
                description: "Trabalhando com tecnologias modernas como assistentes baseados em IA para melhorar tomadas de decisão e automatizar processos.",
                icon: Sparkles
            }
        ]
    }
};

export const AboutSection = ({ lang }) => {
    const t = content[lang] || content.en;

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t.title} <span className="text-primary">{t.titleSpan}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            {t.subtitle}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed text-left">
                            {t.desc1}
                        </p>

                        <p className="text-muted-foreground leading-relaxed text-left">
                            {t.desc2}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="#contact" className="cosmic-button text-center">
                                {t.contactBtn}
                            </a>

                            <a
                                href=""
                                className="px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center font-medium"
                            >
                                {t.cvBtn}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {t.skills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <div key={index} className="gradient-border p-6 card-hover">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <IconComponent className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">{skill.title}</h4>
                                            <p className="text-muted-foreground text-sm mt-1">
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
