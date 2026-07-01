'use client';

import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import CTASection from '../_components/CTASection';
import { SectionFlower } from '@/components/icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const categoryVisuals = [
    {
        title: 'Cosmetics',
        image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=500&q=85',
    },
    {
        title: 'Perfume',
        image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=500&q=85',
    },
    {
        title: 'Ayurveda',
        image: 'https://images.unsplash.com/photo-1600428877878-1a0fd85beda4?auto=format&fit=crop&w=500&q=85',
    },
];

const stats = [
    { value: '10+', label: 'Years Journey' },
    { value: '200+', label: 'Brands Worked With' },
    { value: '500+', label: 'Product Formulations' },
    { value: '100+', label: 'Perfume Brand Associations' },
];

const typingWords = [
    'Founder Rajnish',
    'Brand Launch Expert',
    'Perfume Launch Architect',
    'Formulation Guide',
    'Growth Systems Builder',
];

const pillars = [
    {
        title: 'Industry Experience',
        text: 'Rajnish brings practical knowledge from product development, sourcing, positioning, and founder-led brand execution.',
    },
    {
        title: 'Brand Launch Strategy',
        text: 'He helps founders convert raw ideas into clear offers, strong messaging, launch assets, and market-facing systems.',
    },
    {
        title: 'Fragrance Expertise',
        text: 'From formulation understanding to brand fit, his work connects creative direction with real product feasibility.',
    },
    {
        title: 'Growth Partnerships',
        text: 'Launchveda is built around long-term brand support, practical execution, and trust-first founder collaboration.',
    },
];

const AboutPageClient = () => {
    const [typedText, setTypedText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
        const currentWord = typingWords[wordIndex % typingWords.length];
        const delay = isDeleting ? 45 : 85;

        const timer = window.setTimeout(() => {
            if (!isDeleting && typedText === currentWord) {
                window.setTimeout(() => setIsDeleting(true), 800);
                return;
            }

            if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setWordIndex((index) => (index + 1) % typingWords.length);
                return;
            }

            setTypedText((value) => currentWord.slice(0, value.length + (isDeleting ? -1 : 1)));
        }, delay);

        return () => window.clearTimeout(timer);
    }, [typedText, isDeleting, wordIndex]);
    useGSAP(() => {
        const revealItems = gsap.utils.toArray('.about-reveal');

        revealItems.forEach((item) => {
            gsap.from(item, {
                y: 150,
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 88%',
                    end: 'top 62%',
                    scrub: 0.5,
                },
            });
        });
    }, { scope: containerRef });
    useGSAP(() => {
        gsap.from('.about-stat-item', {
            y: 70,
            opacity: 0,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about-stats-grid',
                start: 'top 82%',
                end: 'top 58%',
                scrub: 0.45,
            },
        });
    }, { scope: containerRef });
    return (
        <div className="min-h-screen overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-32" ref={containerRef}>
            <section className="container relative pb-8 sm:pb-10 lg:pb-12">
                <div className="about-reveal mx-auto max-w-[1060px] text-center">
                    <SectionTitle title="Founder Profile" className="mb-6 justify-center" />
                    <div className="mx-auto mb-6 flex w-full max-w-[760px] items-center justify-center gap-3 border border-primary/15 bg-white/35 px-4 py-3 text-center text-sm text-foreground backdrop-blur-xl sm:text-base">
                        <span>We are a brand launch studio led by founder Rajnish Kumar.</span>
                        <span className="relative flex size-9 shrink-0 overflow-hidden rounded-full border border-primary/20 bg-white">
                            <Image src="/founder.png" alt="Rajnish Kumar" fill priority sizes="36px" className="object-cover object-top" />
                        </span>
                    </div>
                    <h1 className="font-anton text-[40px] uppercase leading-[0.95] text-foreground xs:text-[48px] sm:text-[64px] md:text-[78px] lg:text-[92px]">
                        Launch clarity
                        <span className="mt-1 block">for fragrance</span>
                        <span className="mt-1 block text-primary">and beauty brands.</span>
                        <span className="ml-[0.12em] inline-flex translate-y-[-0.1em] items-center align-middle">
                            {categoryVisuals.map((item) => (
                                <span key={item.title} className="relative -ml-[0.18em] first:ml-0 block h-[0.8em] w-[0.75em] overflow-hidden rounded-[0.2em] border-[0.025em] border-white bg-white shadow-[0_0.1em_0.25em_rgba(35,35,55,0.16)] first:rotate-[-8deg] odd:-rotate-6 even:rotate-6">
                                    <Image src={item.image} alt={item.title} fill sizes="12vw" className="object-cover" />
                                </span>
                            ))}
                        </span>
                    </h1>
                    <div className="mx-auto mt-6 inline-flex min-h-14 min-w-[min(100%,360px)] items-center justify-center border border-primary/15 bg-white/35 px-4 text-center font-anton text-2xl uppercase leading-none text-primary backdrop-blur-sm sm:text-3xl">
                        {typedText}
                        <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-primary sm:h-8"></span>
                    </div>
                    <p className="mx-auto mt-6 max-w-[650px] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                        Rajnish helps founders shape product ideas, perfume launches, brand stories, and growth systems into a market-ready business direction.
                    </p>
                    
                    <div className="about-stats-grid mx-auto mt-12 grid w-full max-w-5xl grid-cols-2 gap-8 px-4 sm:mt-16 sm:grid-cols-4 sm:gap-6 lg:px-8">
                        {stats.map((item) => (
                            <div key={item.label} className="about-stat-item text-center">
                                <p className="font-anton text-4xl leading-none text-foreground sm:text-5xl lg:text-6xl">
                                    {item.value}
                                </p>
                                <p className="mx-auto mt-2 max-w-[140px] text-xs leading-4 text-muted-foreground sm:text-sm sm:leading-5">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mt-16 border-y border-primary/15 py-8 text-center sm:mt-20 md:text-left">
                <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
                    {pillars.map((pillar) => (
                        <article key={pillar.title} className="about-reveal bg-white/10 p-5 backdrop-blur-sm">
                            <h2 className="font-anton text-2xl uppercase leading-none text-foreground">
                                {pillar.title}
                            </h2>
                            <p className="mt-4 text-sm leading-6 text-muted-foreground">
                                {pillar.text}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="container mt-14 text-center sm:mt-16 lg:text-left">
                <div className="grid gap-7 lg:grid-cols-[0.7fr_1fr] lg:gap-8">
                    <div className="about-reveal">
                        <p className="font-anton text-[42px] uppercase leading-none text-primary sm:text-6xl">
                            10+ years journey
                        </p>
                    </div>
                    <div className="about-reveal mx-auto max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mx-0">
                        <p>
                            His work is rooted in practical market learning: what founders actually need before launch, what customers notice first, and how product, packaging, story, and digital trust must work together.
                        </p>
                        <p className="mt-4">
                            The result is a founder profile shaped by execution, category insight, and a clear belief: a strong brand should feel simple to understand, valuable to trust, and ready to grow.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-reveal container mt-12 overflow-hidden border-y border-primary/10 py-5 sm:mt-14">
                <div className="flex w-max animate-[about-page-marquee_24s_linear_infinite] items-center gap-8 font-anton text-3xl uppercase leading-none text-primary sm:text-primary/25 sm:text-5xl">
                    <span>Industry Experience</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Brand Launch Strategy</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Fragrance Expertise</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Founder-Led Execution</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Market-Ready Brands</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Industry Experience</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Brand Launch Strategy</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Fragrance Expertise</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Founder-Led Execution</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                    <span>Market-Ready Brands</span>
                </div>
            </section>

            <div className="about-reveal">
                <CTASection />
            </div>
        </div>
    );
};

export default AboutPageClient;
