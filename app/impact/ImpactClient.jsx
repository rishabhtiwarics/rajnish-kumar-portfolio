'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { SectionFlower } from '@/components/icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { CheckCircle, Factory, Gem, Leaf, Sparkles, TrendingUp, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CTASection from '../_components/CTASection';
gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATS = [
    { value: '200+', label: 'Brands Worked With' },
    { value: '500+', label: 'Product Formulations' },
    { value: '100+', label: 'Perfume Brand Associations' },
    { value: '10+', label: 'Years of Experience' },
];

const DIFFERENTIATORS = [
    {
        Icon: TrendingUp,
        title: 'End-to-End Launch',
        detail: 'Idea to market-ready brand',
        desc: 'From idea clarity to market-ready formulation, packaging, compliance and launch under one roof.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85',
    },
    {
        Icon: Factory,
        title: 'Manufacturing Systems',
        detail: 'Production infrastructure',
        desc: 'Production infrastructure and vendor networks built over a decade of hands-on industry work.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85',
    },
    {
        Icon: Gem,
        title: 'Luxury Perfumery',
        detail: '100+ scent architectures',
        desc: '100+ scent architectures across niche, mass-market and luxury perfume brands.',
        image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1000&q=85',
    },
    {
        Icon: Leaf,
        title: 'Ayurveda & Cosmetics',
        detail: 'Scientific formulation systems',
        desc: 'Scientific formulation systems for Ayurveda, cosmetics and wellness products.',
        image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1000&q=85',
    },
    {
        Icon: Users,
        title: 'Brand Strategy',
        detail: 'Positioning and storytelling',
        desc: 'Sharp positioning, storytelling and digital experience that builds trust from day one.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=85',
    },
    {
        Icon: CheckCircle,
        title: 'Proven Track Record',
        detail: '200+ brands launched',
        desc: '200+ brands across India and globally, from startups to established names, all launched successfully.',
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=85',
    },
];

export default function ImpactClient() {
    const heroRef = React.useRef(null);
    const statsRef = React.useRef(null);
    const differentiatorRef = React.useRef(null);

    useGSAP(() => {
        gsap.from('.impact-hero-item', {
            y: 60,
            opacity: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: 'power3.out',
            delay: 0.2,
        });
    }, { scope: heroRef });

    useGSAP(() => {
        gsap.from('.stat-card', {
            scrollTrigger: {
                trigger: statsRef.current,
                start: 'top 75%',
                end: 'center 50%',
                scrub: 0.5,
            },
            y: 80,
            opacity: 0,
            stagger: 0.08,
        });
    }, { scope: statsRef });

    useGSAP(() => {
        gsap.from('.diff-card', {
            scrollTrigger: {
                trigger: differentiatorRef.current,
                start: 'top 72%',
                end: 'center 45%',
                scrub: 0.6,
            },
            y: 90,
            opacity: 0,
            stagger: 0.07,
        });
    }, { scope: differentiatorRef });

    return (
        <div className="min-h-screen">

            {/* ── HERO ──────────────────────────────────────────────────── */}
            <section
                ref={heroRef}
                className="relative overflow-hidden"
                id="impact-hero"
            >
                <ArrowAnimation className="!bottom-8" />
                <div className="container min-h-[100svh] pt-28 pb-24 flex flex-col items-center justify-center">
                    <div className="relative z-[1] mx-auto max-w-[780px] text-center">

                        {/* Badge */}
                        <p className="impact-hero-item mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                            <Sparkles size={16} className="text-primary" />
                            Industry Experience &amp; Impact
                        </p>

                        {/* Headline */}
                        <h1 className="impact-hero-item font-anton text-[48px] leading-[.95] sm:text-[72px] lg:text-[92px]">
                            Worked With
                            <span className="mx-3 inline-block h-2 w-14 rounded-full bg-primary align-middle" />
                            <span className="text-primary">200+ Brands</span>
                        </h1>

                        {/* Sub-headline */}
                        <p className="impact-hero-item mx-auto mt-6 max-w-[620px] text-base sm:text-lg text-muted-foreground">
                            500+ Product Formulations · 100+ Perfume Brand Associations · 10+ Years of Industry Experience across Ayurveda, Cosmetics and Luxury Perfumery.
                        </p>

                        {/* CTA */}
                        <div className="impact-hero-item mt-8 flex flex-wrap items-center justify-center gap-4">
                            <Button as="link" href="/contact" variant="primary" className="text-white hover:text-foreground">
                                Start Your Brand Journey
                            </Button>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
                            >
                                About Rajnish
                            </Link>
                        </div>
                    </div>

                    {/* Floating stat cards — same style as home page */}
                    <div className="impact-hero-item relative mt-12 grid w-full max-w-[900px] grid-cols-2 gap-4 sm:grid-cols-4">
                        {STATS.map((s) => (
                            <div
                                key={s.value}
                                className="rounded-2xl border border-white/85 bg-white/92 p-4 text-center shadow-[0_20px_45px_rgba(35,35,55,0.12)] backdrop-blur"
                            >
                                <p className="font-anton text-[2rem] leading-none text-primary sm:text-[2.4rem]">{s.value}</p>
                                <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MARQUEE STRIP ────────────────────────────────────────── */}
            <div className="container">
                <div className="mb-16 mt-8 overflow-hidden border-y border-primary/10 py-5">
                    <div
                        className="flex w-max items-center gap-8 font-anton text-3xl uppercase leading-none text-primary sm:text-primary/20 sm:text-5xl"
                        style={{ animation: 'about-page-marquee 24s linear infinite' }}
                    >
                        <span>200+ Brands</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                        <span>500+ Formulations</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                        <span>100+ Perfume Associations</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                        <span>10+ Years Experience</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                        {/* duplicate for seamless loop */}
                        <span>200+ Brands</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                        <span>500+ Formulations</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                        <span>100+ Perfume Associations</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-100 sm:opacity-25 duration-7000" />
                        <span>10+ Years Experience</span>
                    </div>
                </div>
            </div>


             <div className="">
                <CTASection />
            </div>



        </div>
    );
}
