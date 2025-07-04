import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from "lucide-react";


export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                
                <div className="flex flex-col">
                    
                    <div className="space-y-8 mx-auto">
                        <h3 className="text-2xl font-semibold mb-6 text-center"> 
                            Contact Information
                        </h3>

                        
                        <div className="space-y-6 flex flex-col">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div> 
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:danielsmartins19@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        danielsmartins19@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div> 
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+558499166-0631"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +55 (84) 99166-0631
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div> 
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Natal, RN, Brazil
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 text-center">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="www.linkedin.com/in/daniel-silva-martins" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://x.com/danielsmartins_" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="https://www.instagram.com/danielslvm02/" target="_blank">
                                    <Instagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};