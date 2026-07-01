'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ExpertiseDetailClient({ item }) {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.detail-reveal', {
            y: 90,
            opacity: 0,
            stagger: 0.08,
            duration: 0.9,
            ease: 'power3.out',
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="min-h-screen overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-32">
            <section className="container relative">
                <Link href="/expertise" className="detail-reveal relative z-[1] mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    <ArrowLeft size={16} />
                    Back to Expertise
                </Link>

                <div className="relative z-[1] grid gap-7 lg:grid-cols-[minmax(0,0.88fr)_minmax(360px,0.72fr)] lg:gap-10">
                    <div className="detail-reveal border border-white/80 bg-white/70 p-5 shadow-[0_28px_90px_rgba(35,35,55,0.14)] backdrop-blur-xl sm:p-8 lg:p-10">
                        <p className="mb-4 inline-flex items-center gap-2 border border-primary/15 bg-white/65 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px]">
                            <Sparkles size={13} className="text-primary" />
                            {item.kicker}
                        </p>
                        <h1 className="font-anton text-[clamp(2.2rem,8vw,3.4rem)] uppercase leading-[0.94] text-foreground lg:text-[4rem]">
                            {item.title}
                        </h1>
                        <p className="mt-6 max-w-[660px] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                            {item.description}
                        </p>
                        <div className="mt-8 grid gap-3 xs:grid-cols-3">
                            {item.metrics.map((metric) => (
                                <div key={metric} className="border border-primary/10 bg-white/65 p-4">
                                    <p className="font-anton text-lg uppercase leading-none text-primary sm:text-xl">{metric}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-col gap-3 xs:flex-row">
                            <Button as="link" href="/contact" variant="primary" className="h-14 px-5 text-white hover:text-foreground">
                                Start This System
                                <ArrowUpRight size={18} />
                            </Button>
                            <Button as="link" href={GENERAL_INFO.oldPortfolio} target="_blank" rel="noopener noreferrer" variant="light" className="h-14 bg-white px-5 text-foreground shadow-[0_12px_28px_rgba(35,35,55,0.12)] hover:text-primary">
                                Visit Launchveda
                                <ArrowUpRight size={18} />
                            </Button>
                        </div>
                    </div>

                    <div className="detail-reveal relative min-h-[480px] overflow-hidden border border-white/80 shadow-[0_28px_90px_rgba(35,35,55,0.14)] backdrop-blur-xl">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority
                            sizes="(min-width: 1024px) 460px, 92vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground/88 via-foreground/38 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-7">
                            <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">{item.accent}</p>
                            <p className="mt-2 font-anton text-3xl uppercase leading-none sm:text-4xl">Market-ready execution</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mt-12 sm:mt-16">
                <div className="detail-reveal grid gap-4 border-y border-primary/15 py-8 md:grid-cols-3">
                    {item.outcomes.map((outcome) => (
                        <article key={outcome} className="border border-primary/12 bg-white/20 p-5 backdrop-blur-sm transition hover:border-primary/30 hover:bg-white/35">
                            <CheckCircle2 size={22} className="text-primary" />
                            <p className="mt-4 text-sm leading-6 text-muted-foreground">{outcome}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}