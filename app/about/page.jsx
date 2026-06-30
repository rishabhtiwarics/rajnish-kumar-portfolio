import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import CTASection from '../_components/CTASection';
import { SectionFlower } from '@/components/icons';

export const metadata = {
    title: 'About Rajnish Kumar - Founder of Launchveda',
    description:
        'About Rajnish Kumar, founder of Launchveda, with 10+ years of industry experience, 200+ brand collaborations, and deep fragrance formulation expertise.',
};

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

export default function AboutPage() {
    return (
        <div className="min-h-screen overflow-hidden pb-24 pt-28 sm:pt-32">
            <section className="container relative">
                <SectionTitle title="About Rajnish Kumar" className="relative z-[1] mb-8" />

                <div className="relative z-[1] grid min-h-[560px] items-center gap-8 py-6 lg:grid-cols-[1fr_430px_170px]">
                    <div className="max-w-[500px]">
                        <p className="mb-3 font-anton text-2xl leading-none text-foreground sm:text-3xl">
                            Hey, I&apos;m Rajnish,
                        </p>
                        <h1 className="font-anton text-[58px] uppercase leading-[0.95] text-foreground sm:text-[78px] lg:text-[96px]">
                            Founder <span className="text-primary">& Brand</span>
                            <span className="block">Launch</span>
                            <span className="block">Expert</span>
                        </h1>
                        <p className="mt-7 max-w-[430px] text-base leading-7 text-muted-foreground">
                            I help fragrance, beauty, and consumer-product founders turn ideas into clear, credible, market-ready brands.
                        </p>
                    </div>

                    <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-b-[48%] rounded-t-[2px]">
                        <Image
                            src="/founder.png"
                            alt="Rajnish Kumar"
                            fill
                            sizes="(min-width: 1024px) 430px, 85vw"
                            className="object-cover object-center drop-shadow-[0_34px_46px_rgba(31,35,48,0.18)]"
                            priority
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-7 lg:block lg:space-y-10 lg:text-right">
                        {stats.map((item) => (
                            <div key={item.label}>
                                <p className="font-anton text-4xl leading-none text-foreground sm:text-5xl">
                                    {item.value}
                                </p>
                                <p className="mt-2 text-[11px] leading-4 text-muted-foreground">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mt-20 border-y border-primary/15 py-8">
                <div className="grid gap-6 md:grid-cols-4">
                    {pillars.map((pillar) => (
                        <article key={pillar.title} className="bg-white/10 p-5 backdrop-blur-sm">
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

            <section className="container mt-16">
                <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr]">
                    <div>
                        <p className="font-anton text-5xl uppercase leading-none text-primary sm:text-6xl">
                            10+ years journey
                        </p>
                    </div>
                    <div className="max-w-2xl text-lg leading-8 text-muted-foreground">
                        <p>
                            His work is rooted in practical market learning: what founders actually need before launch, what customers notice first, and how product, packaging, story, and digital trust must work together.
                        </p>
                        <p className="mt-4">
                            The result is a founder profile shaped by execution, category insight, and a clear belief: a strong brand should feel simple to understand, valuable to trust, and ready to grow.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mt-14 overflow-hidden border-y border-primary/10 py-5">
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

            <CTASection />
        </div>
    );
}
