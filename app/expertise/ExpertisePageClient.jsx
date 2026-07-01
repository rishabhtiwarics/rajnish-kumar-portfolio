'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { EXPERTISE_ITEMS } from '@/lib/expertise';
import { GENERAL_INFO } from '@/lib/data';
import {
    ArrowUpRight,
    Boxes,
    FileCheck2,
    FlaskConical,
    Layers3,
    Orbit,
    TrendingUp,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const iconMap = {
    'Brand Building': Layers3,
    'Manufacturing Consultancy': Boxes,
    'Formulation Development': FlaskConical,
    'Legal & Business Support': FileCheck2,
    'Sales & Growth Systems': TrendingUp,
    'Hero Launch Systems': Orbit,
};

export default function ExpertisePageClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const revealItems = gsap.utils.toArray('.expertise-reveal');

        revealItems.forEach((item) => {
            gsap.from(item, {
                y: 120,
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    end: 'top 64%',
                    scrub: 0.45,
                },
            });
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-32">
            <section className="container relative min-h-[calc(100svh-6rem)] overflow-hidden py-6 sm:py-8 lg:py-10">
                <div className="relative z-[1] grid items-center gap-8 py-6 text-center sm:gap-10 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_430px] lg:text-left">
                    <div className="expertise-reveal mx-auto max-w-[560px] lg:mx-0 lg:max-w-[560px]">
                        <SectionTitle title="Launch Systems" className="mb-4 justify-center lg:justify-start" />
                        <h1 className="font-anton text-[44px] uppercase leading-[0.95] text-foreground xs:text-[52px] sm:text-[68px] md:text-[78px] lg:text-[96px]">
                            Build the brand.
                            <span className="block text-primary">Engineer the launch.</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-[430px] text-base leading-7 text-muted-foreground lg:mx-0 lg:mt-7">
                            From brand DNA to production, formulation, compliance, sales systems, and growth - Rajnish helps founders move from idea to market with a complete launch architecture.
                        </p>
                        <div className="mt-7 flex flex-col gap-3 xs:flex-row xs:justify-center lg:justify-start">
                            <Button as="link" href="#expertise-services" variant="primary" className="h-14 px-5 text-white hover:text-foreground">
                                Explore Expertise
                                <ArrowUpRight size={18} />
                            </Button>
                            <Button as="link" href={GENERAL_INFO.oldPortfolio} target="_blank" rel="noopener noreferrer" variant="light" className="h-14 bg-white px-5 text-foreground hover:text-primary">
                                Launchveda
                                <ArrowUpRight size={18} />
                            </Button>
                        </div>
                    </div>

                    <div className="expertise-reveal relative mx-auto w-full max-w-[430px] overflow-visible">
                        <div className="relative aspect-[4/5] overflow-hidden border border-white/90 bg-white/20 backdrop-blur-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1300&q=85"
                                alt="Premium brand launch moodboard"
                                fill
                                priority
                                sizes="(min-width: 1024px) 470px, 88vw"
                                className="object-cover object-[center_42%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
                            <div className="absolute bottom-5 left-4 right-4 grid gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                                {['Brand Building', 'Manufacturing', 'Growth Systems'].map((item) => (
                                    <div key={item} className="border border-primary/18 bg-white/88 p-3.5 text-foreground backdrop-blur-xl">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">System</p>
                                        <p className="mt-1.5 font-anton text-[26px] uppercase leading-none text-primary">{item}</p>
                                    </div>
                                ))}
                            </div>                            <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-foreground sm:left-6 sm:right-6 sm:top-6">
                                <span className="font-anton text-[28px] uppercase leading-none">Creative DNA</span>
                                <span className="text-xs uppercase tracking-[0.18em] text-foreground/65">Launchveda</span>
                            </div>

                        </div>
                        <div className="absolute -bottom-8 -right-8 z-[2] hidden size-36 items-center justify-center rounded-full text-center sm:flex">
                            <svg className="absolute inset-0 animate-[expertise-badge-spin_12s_linear_infinite] overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
                                <defs>
                                    <path id="expertise-badge-path" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
                                </defs>
                                <text className="fill-muted-foreground text-[6px] font-semibold uppercase tracking-[0.08em]">
                                    <textPath href="#expertise-badge-path">Founder Rajnish Kumar - Launchveda - Brand Launch Systems - </textPath>
                                </text>
                            </svg>
                            <div className="relative z-[1] flex size-24 flex-col items-center justify-center rounded-full border border-primary/20 bg-white px-3 backdrop-blur-xl">
                                <p className="font-anton text-4xl uppercase leading-none text-primary">6</p>
                                <p className="mt-1 text-[10px] leading-3 text-muted-foreground">connected brand systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="expertise-services" className="container mt-16 sm:mt-20">
                <SectionTitle title="Expertise" className="expertise-reveal mb-9 border-b pb-3 justify-center text-center lg:justify-start lg:text-left" />

                <div className="expertise-reveal mb-8 grid items-start gap-6 text-center lg:grid-cols-12 lg:text-left">
                    <div className="lg:col-span-7">
                        <h2 className="mx-auto max-w-[720px] font-anton text-[28px] leading-[0.95] text-foreground sm:text-[38px] lg:mx-0 lg:text-[48px]">
                            Six connected systems
                            <span className="mx-3 inline-block h-1.5 w-12 rounded-full bg-primary align-middle"></span>
                            for brand launch.
                        </h2>
                    </div>
                    <div className="lg:col-span-5">
                        <p className="mx-auto max-w-[430px] text-base leading-7 text-muted-foreground lg:ml-auto lg:mr-0">
                            Brand building, manufacturing, formulation, legal readiness, and sales systems connected into one practical launch engine.
                        </p>
                    </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {EXPERTISE_ITEMS.map((item, index) => {
                        const Icon = iconMap[item.title] || Layers3;
                        return (
                            <Link
                                href={`/expertise/${item.slug}`}
                                key={item.slug}
                                className="expertise-reveal group relative min-h-[420px] overflow-hidden border border-white/80 bg-white/65 shadow-[0_20px_70px_rgba(35,35,55,0.12)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-primary/30"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(min-width: 1280px) 360px, (min-width: 640px) 48vw, 92vw"
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,36,0.22)_0%,rgba(20,24,36,0.58)_44%,rgba(20,24,36,0.92)_100%)]" />
                                <div className="absolute inset-0 flex flex-col justify-between p-5 text-white sm:p-6">
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="flex size-12 items-center justify-center border border-white/20 bg-white/15 backdrop-blur-md">
                                            <Icon size={22} />
                                        </span>
                                        <span className="font-anton text-3xl leading-none text-white/40">0{index + 1}</span>
                                    </div>
                                    <div>
                                        <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/70">{item.kicker}</p>
                                        <h2 className="font-anton text-[2rem] uppercase leading-[0.92] sm:text-[2.25rem] lg:text-[2.35rem]">
                                            {item.title}
                                        </h2>
                                        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
                                            View System
                                            <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="container mt-16 sm:mt-20">
                <div className="expertise-reveal grid gap-6 border-y border-primary/15 py-8 text-center md:grid-cols-3 md:text-left">
                    {['Brand clarity', 'Product feasibility', 'Growth execution'].map((item) => (
                        <div key={item}>
                            <p className="font-anton text-3xl uppercase leading-none text-foreground sm:text-4xl">{item}</p>
                            <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                A launch system should make the next decision obvious, practical, and connected to revenue.
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}