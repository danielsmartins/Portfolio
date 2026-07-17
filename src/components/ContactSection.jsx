import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";

const content = {
    en: {
        title: "Get In",
        titleSpan: "Touch",
        subtitle: "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
        cardTitle: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location",
        connect: "Connect With Me"
    },
    pt: {
        title: "Entre em",
        titleSpan: "Contato",
        subtitle: "Tem um projeto em mente ou quer colaborar? Sinta-se à vontade para entrar em contato. Estou sempre aberto a novas oportunidades.",
        cardTitle: "Informações de Contato",
        email: "E-mail",
        phone: "Telefone",
        location: "Localização",
        connect: "Conecte-se Comigo"
    }
};

export const ContactSection = ({ lang }) => {
    const t = content[lang] || content.en;

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/15">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t.title} <span className="text-gradient text-glow">{t.titleSpan}</span>
                </h2>

                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
                    {t.subtitle}
                </p>

                <div className="max-w-xl mx-auto">
                    <div className="gradient-border p-8 md:p-10 bg-card/10 backdrop-blur-md space-y-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            {t.cardTitle}
                        </h3>

                        <div className="space-y-6 flex flex-col">
                            <div className="flex items-center space-x-5 text-left">
                                <div className="p-3.5 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">{t.email}</h4>
                                    <a
                                        href="mailto:danielsmartins19@gmail.com"
                                        className="text-foreground hover:text-primary transition-colors text-base font-medium"
                                    >
                                        danielsmartins19@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-5 text-left">
                                <div className="p-3.5 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">{t.phone}</h4>
                                    <a
                                        href="tel:+558499166-0631"
                                        className="text-foreground hover:text-primary transition-colors text-base font-medium"
                                    >
                                        +55 (84) 99166-0631
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-5 text-left">
                                <div className="p-3.5 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">{t.location}</h4>
                                    <span className="text-foreground text-base font-medium">
                                        Natal, RN, Brazil
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border/40 text-center">
                            <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-6">{t.connect}</h4>
                            <div className="flex space-x-5 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/daniel-silva-martins"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://x.com/danielsmartins_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300"
                                >
                                    <Twitter size={20} />
                                </a>
                                <a
                                    href="https://www.instagram.com/danielslvm02/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-300"
                                >
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};