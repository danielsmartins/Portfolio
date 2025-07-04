import { useState } from "react";
import { cn } from "@/lib/utils";





const skills = [
    // Languages
    { name: "C++", category: "languages", icon: "/icons/cplusplus.svg" },
    { name: "Python", category: "languages", icon: "/icons/python.svg" },
    { name: "Java", category: "languages", icon: "/icons/java.svg" },
    { name: "JavaScript", category: "languages", icon: "/icons/javascript.svg" },
    { name: "HTML/CSS", category: "languages", icon: "/icons/html_css.svg" },

    // Frameworks, Platforms & Libraries
    { name: "React", category: "frameworks & libs", icon: "/icons/react.svg" },
    { name: "Node.js", category: "frameworks & libs", icon: "/icons/nodejs.svg" },
    { name: "Express.js", category: "frameworks & libs", icon: "/icons/express.svg" },
    { name: "Nodemon", category: "frameworks & libs", icon: "/icons/nodemon.svg" },
    { name: "Vite", category: "frameworks & libs", icon: "/icons/vite.svg" },
    { name: "Webpack", category: "frameworks & libs", icon: "/icons/webpack.svg" },
    { name: "Tailwind CSS", category: "frameworks & libs", icon: "/icons/tailwindcss.svg" },
    { name: "Bootstrap", category: "frameworks & libs", icon: "/icons/bootstrap.svg" },
    { name: "JWT", category: "frameworks & libs", icon: "/icons/jsonwebtokens.svg" },
    { name: "Mongoose", category: "frameworks & libs", icon: "/icons/mongoose.svg" },

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

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary" // Corrected 'bd-secondary' to 'bg-secondary'
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col justify-between" // Added flex classes for layout control
                        >
                            <div className="flex items-center justify-between mb-4"> {/* Adjusted for icon and name alignment */}
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                {skill.icon && (
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.name} icon`}
                                        className={cn(
                                            "w-12 h-10 object-contain",
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};