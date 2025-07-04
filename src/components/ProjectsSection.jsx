import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Recipe App",
        description: "A web application to suggest recipes with AI using React",
        image: "/projects/ChefClaude.png",
        tags: ["React", "AI", "JavaScript"],
        demoUrl: "https://chefclaude-flax.vercel.app/",
        githubUrl: "https://github.com/danielsmartins/React_Course/tree/main/ChefClaude"
    },
    {
        id: 2,
        title: "Phonebook App",
        description: "A full-stack phonebook application built with React, Node.js, and MongoDB",
        image: "/projects/Phonebook.png",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        demoUrl: "https://fullstack-part3-phonebook-iodu.onrender.com/",
        githubUrl: "https://github.com/danielsmartins/FullStack-part3"
    },
    {
        id: 3,
        title: "Wordle Game",
        description: "A version of the popular wordle with progamming thematics",
        image: "/projects/AssemblyEndgame.png",
        tags: ["React", "JavaScript"],
        demoUrl: "https://assemblyendgame-eight.vercel.app/",
        githubUrl: "https://github.com/danielsmartins/React_Course/tree/main/AssemblyEndGame"
    },

]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text=3xl md:text-4xl font-bold text-center"> Featured <span className="text-primary"> Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project was carefully
                    crafted with attention to detail, performance, and best practices .
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/danielsmartins"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}