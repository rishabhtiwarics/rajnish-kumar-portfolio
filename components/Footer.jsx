import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { ExternalLink, Globe, Instagram, Linkedin } from 'lucide-react';

const SOCIAL_ICONS = {
    launchveda: Globe,
    linkedin: Linkedin,
    instagram: Instagram,
    website: Globe,
};
const Footer = async () => {
    return (<footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a brand idea to launch?</p>
                <a href={`mailto:${GENERAL_INFO.email}`} className="text-3xl sm:text-4xl font-anton inline-block my-5 text-primary hover:underline">
                    {GENERAL_INFO.email}
                </a>

                <div className="mb-6 flex items-center justify-center gap-3">
                    {SOCIAL_LINKS.map((link) => {
                        const Icon = SOCIAL_ICONS[link.name] || Globe;

                        return (<a key={link.name} href={link.url} target="_blank" rel="noreferrer" aria-label={link.name} className="inline-flex size-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-muted-foreground shadow-sm backdrop-blur transition hover:border-primary/40 hover:text-primary">
                                <Icon size={18}/>
                            </a>);
                    })}
                </div>

                <div>
                    <a href="https://launchveda.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 leading-none text-muted-foreground hover:underline hover:text-primary">
                        Founder of Launchveda
                        <ExternalLink size={16}/>
                    </a>
                </div>
            </div>
        </footer>);
};

export default Footer;
