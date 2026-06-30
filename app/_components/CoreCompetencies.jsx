'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Factory, Gem, Leaf, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
gsap.registerPlugin(ScrollTrigger, useGSAP);

const CARDS = [
    {
        title: 'D2C Growth',
        detail: '50+ Scalable Frameworks',
        image:
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=85',
        Icon: TrendingUp,
        position: 'object-center',
    },
    {
        title: 'Mfg Systems',
        detail: 'Production Infrastructure',
        image:
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85',
        Icon: Factory,
        position: 'object-center',
    },
    {
        title: 'Luxury Perfumery',
        detail: '100+ Scent Architectures',
        image:
            'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1000&q=85',
        Icon: Gem,
        position: 'object-center',
    },
    {
        title: 'Ayurveda & Cosmetics',
        detail: 'Scientific formulation systems',
        image:
            'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1000&q=85',
        Icon: Leaf,
        position: 'object-center',
    },
];

const CoreCompetencies = () => {
    const container = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isBelowLg, setIsBelowLg] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1023px)');
        const handleChange = () => setIsBelowLg(mediaQuery.matches);
        handleChange();
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                id: 'core-competencies-in',
                trigger: container.current,
                start: 'top 74%',
                end: 'center 42%',
                scrub: 0.6,
            },
        });

        tl.from('.core-reveal', {
            y: 90,
            opacity: 0,
            stagger: 0.07,
            ease: 'power2.out',
        });
    }, { scope: container });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                id: 'core-competencies-out',
                trigger: container.current,
                start: 'bottom 58%',
                end: 'bottom 10%',
            scrub: 0.75,
            },
        });

        tl.to('.core-reveal', {
            y: -120,
            opacity: 0,
            stagger: 0.03,
            ease: 'power1.inOut',
        });
    }, { scope: container });

    return (
        <section id="core-competencies" className="relative overflow-hidden bg-transparent pb-40 mb-12">
            <ArrowAnimation className="!bottom-8 !fill-transparent" />
            <div className="container" ref={container}>
                <SectionTitle title="Core Competencies" className="core-reveal slide-up-and-fade pb-3 border-b mb-9"/>

                <div className="core-reveal mb-8 grid items-start gap-6 max-md:text-center lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <h2 className="max-w-[720px] font-anton text-[28px] leading-[.95] text-foreground max-md:mx-auto sm:text-[38px] lg:text-[48px]">
                            Business Verticals
                            <span className="mx-3 inline-block h-1.5 w-12 rounded-full bg-primary align-middle"></span>
                            built to scale.
                        </h2>
                    </div>
                    <div className="lg:col-span-5">
                        <p className="max-w-[430px] text-base leading-7 text-muted-foreground max-md:mx-auto lg:ml-auto">
                            Premium formulation, manufacturing, scent
                            architecture, and D2C growth systems connected into
                            one launch-ready business engine.
                        </p>
                    </div>
                </div>

             


                <div
                    className="core-reveal flex min-h-[520px] flex-col gap-5 lg:h-[460px] lg:min-h-0 lg:flex-row"
                    onMouseLeave={() => setActiveIndex(0)}
                >
                    {CARDS.map(({ title, detail, image, Icon, position }, index) => {
                        const isActive = isBelowLg || activeIndex === index;

                        return (
                            <article
                                className={[
                                    'group relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_28px_80px_rgba(35,35,55,0.14)] transition-[flex,filter,transform] duration-1000 ease-out',
                                    'min-h-[260px] lg:min-h-0',
                                    isActive
                                        ? 'lg:flex-[2.45] saturate-100'
                                        : 'lg:flex-[0.7] saturate-100 hover:-translate-y-1',
                                ].join(' ')}
                                key={title}
                                onFocus={() => setActiveIndex(index)}
                                onMouseEnter={() => setActiveIndex(index)}
                                tabIndex={0}
                            >
                                <Image
                                    src={image}
                                    alt={`${title} visual`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 35vw"
                                    className={`object-cover ${position} transition duration-1000 ease-out group-hover:scale-[1.04]`}
                                />

                                {!isActive && (
                                    <div className="absolute inset-0 z-[1] bg-black/45 transition duration-1000 lg:bg-black/48"></div>
                                )}

                                <div className="relative z-[2] flex h-full min-h-[260px] flex-col justify-between p-5 text-white lg:min-h-0 lg:p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        {isActive && (
                                            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/65 bg-white/82 text-primary shadow-sm backdrop-blur transition duration-500">
                                                <Icon size={20} />
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        className={[
                                            'relative -mx-5 -mb-5 p-5 transition-all duration-1000 ease-out lg:-mx-6 lg:-mb-6 lg:p-6',
                                            isActive
                                                ? 'w-auto max-w-none bg-gradient-to-t from-black/70 via-black/34 to-transparent pt-24'
                                                : 'bg-gradient-to-t from-black/58 via-black/16 to-transparent pt-20 lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:p-0',
                                        ].join(' ')}
                                    >
                                        <p
                                            className={[
                                                'mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/86 transition duration-700',
                                                isActive
                                                    ? 'opacity-100'
                                                    : 'lg:absolute lg:opacity-0',
                                            ].join(' ')}
                                        >
                                            {detail}
                                        </p>
                                        <h3
                                            className={[
                                                'font-anton leading-none text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.62)] transition-all duration-1000 ease-out',
                                                isActive
                                                    ? 'text-[42px] sm:text-[58px]'
                                                    : 'text-[32px] sm:text-[38px] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rotate-90 lg:whitespace-nowrap',
                                            ].join(' ')}
                                        >
                                            {title}
                                        </h3>
                                        <p
                                            className={[
                                                'mt-4 max-w-[330px] text-sm leading-6 text-white/88 transition duration-700',
                                                isActive
                                                    ? 'translate-y-0 opacity-100'
                                                    : 'translate-y-3 opacity-0 lg:hidden',
                                            ].join(' ')}
                                        >
                                            {detail}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <p className="core-reveal slide-up-and-fade mx-auto mt-8 mb-0 max-w-[760px] text-center text-base leading-7 text-muted-foreground sm:text-lg">
                    Founder Rajnish builds every launch around focused capabilities,
                    sharp systems, and the discipline to scale with purpose.
                </p>
            </div>
        </section>
    );
};
export default CoreCompetencies;
