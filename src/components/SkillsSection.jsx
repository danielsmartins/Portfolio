import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const skills = [
    // Languages
    { name: "JavaScript", category: "languages", icon: "/icons/javascript.svg" },
    { name: "HTML/CSS", category: "languages", icon: "/icons/html_css.svg" },
    { name: "Java", category: "languages", icon: "/icons/java.svg" },
    { name: "Python", category: "languages", icon: "/icons/python.svg" },
    { name: "C++", category: "languages", icon: "/icons/cplusplus.svg" },

    // Frameworks, Platforms & Libraries
    { name: "React", category: "frameworks & libs", icon: "/icons/react.svg" },
    { name: "Next.js", category: "frameworks & libs", icon: "/icons/nextjs.svg" },
    { name: "Vue.js", category: "frameworks & libs", icon: "/icons/vue.svg" },
    { name: "Node.js", category: "frameworks & libs", icon: "/icons/nodejs.svg" },
    { name: "Express.js", category: "frameworks & libs", icon: "/icons/express.svg" },
    { name: "Bootstrap", category: "frameworks & libs", icon: "/icons/bootstrap.svg" },
    { name: "Vite", category: "frameworks & libs", icon: "/icons/vite.svg" },
    { name: "Webpack", category: "frameworks & libs", icon: "/icons/webpack.svg" },
    { name: "Tailwind CSS", category: "frameworks & libs", icon: "/icons/tailwindcss.svg" },
    { name: "Nodemon", category: "frameworks & libs", icon: "/icons/nodemon.svg" },
    { name: "JWT", category: "frameworks & libs", icon: "/icons/jsonwebtokens.svg" },
    { name: "Mongoose", category: "frameworks & libs", icon: "/icons/mongoose.svg" },
    { name: "AI Integration", category: "frameworks & libs", lucideIcon: Sparkles },

    // Hosting, Platforms, CI/CD & Version Control
    { name: "Render", category: "Hosting & CI/CD", icon: "/icons/render.svg" },
    { name: "Vercel", category: "Hosting & CI/CD", icon: "/icons/vercel.svg" },
    { name: "Docker", category: "Hosting & CI/CD", icon: "/icons/docker.svg" },
    { name: "Git/GitHub/GitLab", category: "Hosting & CI/CD", icon: "/icons/git.svg" },

    // Databases & Testing
    { name: "MongoDB", category: "Database & Testing", icon: "/icons/mongodb.svg" },
    { name: "Jest", category: "Database & Testing", icon: "/icons/jest.svg" },
    { name: "Cypress", category: "Database & Testing", icon: "/icons/cypress.svg" },

    // Others & Tools
    { name: "ESLint", category: "tools", icon: "/icons/eslint.svg" },
    { name: "Prettier", category: "tools", icon: "/icons/prettier.svg" },
    { name: "Postman", category: "tools", icon: "/icons/postman.svg" },
    { name: "Trello", category: "tools", icon: "/icons/trello.svg" },
    { name: "VS Code", category: "tools", icon: "/icons/html_css.svg" },
];

const categories = ["all", "languages", "frameworks & libs", "Database & Testing", "Hosting & CI/CD", "tools"];

const translations = {
    en: {
        title: "My",
        titleSpan: "Skills",
        categoryLabels: {
            all: "all",
            languages: "languages",
            "frameworks & libs": "frameworks & libs",
            "Database & Testing": "database & testing",
            "Hosting & CI/CD": "hosting & CI/CD",
            tools: "tools"
        }
    },
    pt: {
        title: "Minhas",
        titleSpan: "Habilidades",
        categoryLabels: {
            all: "todas",
            languages: "linguagens",
            "frameworks & libs": "frameworks e libs",
            "Database & Testing": "banco de dados e testes",
            "Hosting & CI/CD": "hospedagem e CI/CD",
            tools: "ferramentas"
        }
    }
};

export const SkillsSection = ({ lang }) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const t = translations[lang] || translations.en;

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/15">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t.title} <span className="text-primary">{t.titleSpan}</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2.5 rounded-full transition-all duration-300 capitalize text-sm font-medium cursor-pointer border border-border/40",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-xs shadow-primary/20"
                                    : "bg-secondary/45 text-foreground hover:bg-secondary"
                            )}
                        >
                            {t.categoryLabels[category] || category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="gradient-border p-6 card-hover flex items-center justify-between"
                        >
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            {skill.icon ? (
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    className={cn(
                                        "w-10 h-10 object-contain filter dark:brightness-110",
                                    )}
                                />
                            ) : (
                                skill.lucideIcon && <skill.lucideIcon className="w-8 h-8 text-primary animate-pulse-subtle" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};