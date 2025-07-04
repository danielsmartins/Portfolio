import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Fullstack Developer & Tech Enthusiast
                    </h3>

                    <p className="text-muted-foreground">
                        Hi! I'm currently pursuing a Bachelor's Degree in Information Technology 
                        at the Instituto Metrópole Digital (IMD/UFRN). 
                        I'm always looking for new challenges and opportunities 
                        to grow as a developer and expand my knowledge in the tech field.
                    </p>

                    <p className="text-muted-foreground">
                        I'm passionate about building complete and efficient applications, 
                        from intuitive user interfaces to robust backend logic. 
                        I'm constantly exploring new technologies and best practices to 
                        sharpen my skills and stay up to date with the fast-paced 
                        world of tecnology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">

                            Get In Touch
                        </a>

                        <a
                            href=""
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                    Building complete web applications from frontend to backend with
                                    modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Software Engineering</h4>
                                <p className="text-muted-foreground">
                                    Software development principles, best practices, code structure, and version control
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Problem Solving & Critical Thinking</h4>
                                <p className="text-muted-foreground">
                                    Identifying challenges, analyzing situations, and developing effective solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
