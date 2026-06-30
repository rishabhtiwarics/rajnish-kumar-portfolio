'use client';

import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import CTASection from '../_components/CTASection';
import { SectionFlower } from '@/components/icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
    {
        value: '10+',
        label: 'Years Journey',
        copy: 'A decade of building clarity across fragrance, beauty, and consumer brand launches.',
    },
    {
        value: '200+',
        label: 'Brands Worked With',
        copy: 'Partnered with founders, manufacturers, and growing labels across launch stages.',
    },
    {
        value: '500+',
        label: 'Product Formulations',
        copy: 'Hands-on exposure across perfume, personal care, and market-ready product systems.',
    },
    {
        value: '100+',
        label: 'Perfume Brand Associations',
        copy: 'Deep network and category insight in fragrance-led business building.',
    },
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
    const containerRef = useRef(null);

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

    return (
        <div className="min-h-screen overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-32" ref={containerRef}>
            <section className="container relative">
                <SectionTitle title="About Rajnish Kumar" className="about-reveal relative z-[1] mb-8 justify-center text-center lg:justify-start lg:text-left" />

                <div className="relative z-[1] grid min-h-0 items-center gap-8 py-6 text-center sm:gap-10 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_430px_170px] lg:text-left">
                    <div className="about-reveal mx-auto max-w-[560px] lg:mx-0 lg:max-w-[500px]">
                        <p className="mb-3 font-anton text-2xl leading-none text-foreground sm:text-3xl">
                            Hey, I&apos;m Rajnish,
                        </p>
                        <h1 className="font-anton text-[44px] uppercase leading-[0.95] text-foreground xs:text-[52px] sm:text-[68px] md:text-[78px] lg:text-[96px]">
                            Founder & <span className="text-primary">Brand</span>
                            <span className="block">Launch</span>
                            <span className="text-primary">Expert</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-[430px] text-base leading-7 text-muted-foreground lg:mx-0 lg:mt-7">
                            I help fragrance, beauty, and consumer-product founders turn ideas into clear, credible, market-ready brands.
                        </p>
                    </div>

                    <div className="about-reveal relative mx-auto aspect-[4/5] w-[min(100%,360px)] overflow-hidden rounded-b-[48%] rounded-t-[2px] sm:w-full sm:max-w-[430px]">
                        <Image
                            src="/founder.png"
                            alt="Rajnish Kumar"
                            fill
                            sizes="(min-width: 1024px) 430px, 85vw"
                            className="object-cover object-center drop-shadow-[0_34px_46px_rgba(31,35,48,0.18)]"
                            priority
                        />
                    </div>

                    <div className="mx-auto grid w-full max-w-[560px] grid-cols-4 gap-2 text-center sm:gap-4 lg:mx-0 lg:block lg:max-w-none lg:space-y-10 lg:text-right">
                        {stats.map((item) => (
                            <div key={item.label}>
                                <p className="font-anton text-2xl leading-none text-foreground xs:text-3xl sm:text-4xl lg:text-5xl">
                                    {item.value}
                                </p>
                                <p className="mt-1 text-[9px] leading-3 text-muted-foreground xs:text-[10px] sm:mt-2 sm:text-[11px] sm:leading-4">
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
                <div className="flex w-max animate-[about-page-marquee_24s_linear_infinite] items-center gap-8 font-anton text-3xl uppercase leading-none text-primary/25 sm:text-5xl">
                    <span>Industry Experience</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
                    <span>Brand Launch Strategy</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
                    <span>Fragrance Expertise</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
                    <span>Founder-Led Execution</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
                    <span>Market-Ready Brands</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
                    <span>Industry Experience</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
                    <span>Brand Launch Strategy</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
                    <span>Fragrance Expertise</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
                    <span>Founder-Led Execution</span>
                    <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000" />
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
