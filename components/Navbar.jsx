'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
const COLORS = [
    'bg-primary text-white',
    'bg-white/40 text-primary ring-1 ring-primary/30',
    'bg-secondary text-black',
    'bg-foreground text-white',
    'bg-primary/15 text-primary ring-1 ring-primary/25',
];
const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About',
        url: '/about',
    },
    {
        name: 'Expertise',
        url: '/expertise',
    },
    {
        name: 'Journey',
        url: '/#my-experience',
    },
    {
        name: 'Launch Work',
        url: '/#selected-projects',
    },
    {
        name: 'Contact',
        url: '/contact',
    },
];
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 12);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (<>
            <div className="sticky top-0 z-[4]">
                <button className={cn('group size-12 absolute top-5 right-5 md:right-10 z-[2] rounded-none border border-primary/25 transition-all duration-500 ease-out', {
                    'border-primary/35 bg-white/55 shadow-[0_14px_35px_rgba(35,35,55,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/35': hasScrolled && !isMenuOpen,
                })} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={cn('inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ', {
            'rotate-45 -translate-y-1/2': isMenuOpen,
            'md:group-hover:rotate-12': !isMenuOpen,
        })}></span>
                    <span className={cn('inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ', {
            '-rotate-45 -translate-y-1/2': isMenuOpen,
            'md:group-hover:-rotate-12': !isMenuOpen,
        })}></span>
                </button>
            </div>

            <div className={cn('overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150', {
            'opacity-0 invisible pointer-events-none': !isMenuOpen,
        })} onClick={() => setIsMenuOpen(false)}></div>

            <div className={cn('fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14', 'flex flex-col lg:justify-center py-10', { 'translate-x-0': isMenuOpen })}>
                <div className={cn('fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light/90 backdrop-blur-xl duration-700 delay-150 z-[-1]', {
            'translate-x-0': isMenuOpen,
        })}></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                SOCIAL
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (<li key={link.name}>
                                        <a href={link.url} target="_blank" rel="noreferrer" className="text-lg capitalize hover:underline">
                                            {link.name}
                                        </a>
                                    </li>))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                MENU
                            </p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link, idx) => (<li key={link.name}>
                                        <button onClick={() => {
                router.push(link.url);
                setIsMenuOpen(false);
            }} className="group text-xl flex items-center gap-3">
                                            <span className={cn('size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all', COLORS[idx % COLORS.length])}>
                                                <MoveUpRight size={8} className="scale-0 group-hover:scale-100 transition-all"/>
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="text-muted-foreground mb-4">GET IN TOUCH</p>
                    <a href={`mailto:${GENERAL_INFO.email}`} className="text-primary">
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>);
};
export default Navbar;
