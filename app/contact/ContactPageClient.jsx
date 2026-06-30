'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import SectionTitle from '@/components/SectionTitle';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import {
    ArrowUpRight,
    Building2,
    Globe,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageSquare,
    Send,
    Sparkles,
    User,
} from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const contactLinks = [
    {
        label: 'Email',
        value: GENERAL_INFO.email,
        href: `mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`,
        Icon: Mail,
    },
    {
        label: 'Launchveda',
        value: 'launchveda.com',
        href: GENERAL_INFO.oldPortfolio,
        Icon: Globe,
    },
    {
        label: 'LinkedIn',
        value: 'Founder Profile',
        href: SOCIAL_LINKS.find((link) => link.name === 'linkedin')?.url || '#',
        Icon: Linkedin,
    },
    {
        label: 'Instagram',
        value: '@launchveda',
        href: SOCIAL_LINKS.find((link) => link.name === 'instagram')?.url || '#',
        Icon: Instagram,
    },
];

const fields = [
    {
        id: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Your full name',
        Icon: User,
    },
    {
        id: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'you@example.com',
        Icon: Mail,
    },
    {
        id: 'brand',
        label: 'Brand / Company',
        type: 'text',
        placeholder: 'Your brand name',
        Icon: Building2,
    },
];

export default function ContactPageClient() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const revealItems = gsap.utils.toArray('.contact-reveal');

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
            <section className="container">
                <SectionTitle
                    title="Contact Rajnish"
                    className="contact-reveal mb-8 justify-center text-center lg:justify-start lg:text-left"
                />

                <div className="grid gap-6 lg:grid-cols-[0.3fr_0.7fr] lg:gap-8 xl:gap-10">
                    <aside className="contact-reveal relative overflow-hidden border border-white/80 bg-white/55 p-4 shadow-[0_24px_70px_rgba(35,35,55,0.12)] backdrop-blur-xl sm:p-5 lg:min-h-[680px]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-b-[46%] rounded-t-[2px] bg-background-light">
                            <Image
                                src="/founder.png"
                                alt="Rajnish Kumar"
                                fill
                                sizes="(min-width: 1024px) 30vw, 86vw"
                                className="object-cover object-center"
                                priority
                            />
                        </div>

                        <div className="mt-6 text-center lg:text-left">
                            <p className="inline-flex items-center gap-2 border border-primary/15 bg-white/60 px-3 py-2 text-xs font-medium text-muted-foreground backdrop-blur">
                                <Sparkles size={14} className="text-primary" />
                                Launch clarity starts here
                            </p>
                            <h1 className="mt-5 font-anton text-[38px] uppercase leading-[0.95] text-foreground sm:text-[48px] lg:text-[42px] xl:text-[52px]">
                                Build the next launch with purpose.
                            </h1>
                            <p className="mx-auto mt-4 max-w-[420px] text-sm leading-6 text-muted-foreground lg:mx-0">
                                Share your idea, category, or launch challenge. Rajnish will help map the next practical step.
                            </p>
                        </div>

                        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-1">
                            {contactLinks.map(({ label, value, href, Icon }) => (
                                <a
                                    className="group flex items-center gap-3 border border-primary/10 bg-white/55 p-3 text-left transition hover:border-primary/35 hover:bg-white/80"
                                    href={href}
                                    key={label}
                                    rel="noreferrer"
                                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                                >
                                    <span className="flex size-10 shrink-0 items-center justify-center bg-background-light text-primary ring-1 ring-primary/15">
                                        <Icon size={17} />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                                            {label}
                                        </span>
                                        <span className="mt-1 block truncate text-sm font-medium text-foreground">
                                            {value}
                                        </span>
                                    </span>
                                    <ArrowUpRight
                                        size={16}
                                        className="ml-auto shrink-0 text-primary opacity-0 transition group-hover:opacity-100"
                                    />
                                </a>
                            ))}
                        </div>
                    </aside>

                    <div className="border border-white/80 bg-white/70 p-5 shadow-[0_28px_90px_rgba(35,35,55,0.14)] backdrop-blur-xl sm:p-7 lg:p-9">
                        <div className="contact-reveal max-w-[760px]">
                            <p className="font-anton text-[42px] uppercase leading-[0.95] text-foreground sm:text-[58px] lg:text-[70px]">
                                Tell me about your
                                <span className="text-primary"> launch.</span>
                            </p>
                            <p className="mt-5 max-w-[560px] text-base leading-7 text-muted-foreground sm:text-lg">
                                Use the form to share what you are building. Keep it simple: idea, stage, timeline, and the kind of support you need.
                            </p>
                        </div>

                        <form
                            action={`mailto:${GENERAL_INFO.email}`}
                            className="contact-reveal mt-8 grid gap-5"
                            encType="text/plain"
                            method="post"
                        >
                            <div className="grid gap-5 md:grid-cols-3">
                                {fields.map(({ id, label, type, placeholder, Icon }) => (
                                    <label className="block" htmlFor={id} key={id}>
                                        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                            {label}
                                        </span>
                                        <span className="flex h-14 items-center gap-3 border border-primary/12 bg-white/70 px-4 transition focus-within:border-primary/45 focus-within:bg-white">
                                            <Icon size={18} className="shrink-0 text-primary" />
                                            <input
                                                className="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/70"
                                                id={id}
                                                name={id}
                                                placeholder={placeholder}
                                                required={id !== 'brand'}
                                                type={type}
                                            />
                                        </span>
                                    </label>
                                ))}
                            </div>

                            <label className="block" htmlFor="projectType">
                                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                    What do you need?
                                </span>
                                <span className="flex h-14 items-center gap-3 border border-primary/12 bg-white/70 px-4 focus-within:border-primary/45 focus-within:bg-white">
                                    <Sparkles size={18} className="shrink-0 text-primary" />
                                    <select
                                        className="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none"
                                        id="projectType"
                                        name="projectType"
                                        defaultValue=""
                                        required
                                    >
                                        <option value="" disabled>
                                            Select launch support
                                        </option>
                                        <option>Brand launch strategy</option>
                                        <option>Fragrance / product systems</option>
                                        <option>Website and launch assets</option>
                                        <option>Growth and acquisition planning</option>
                                        <option>Founder advisory</option>
                                    </select>
                                </span>
                            </label>

                            <label className="block" htmlFor="message">
                                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                    Message
                                </span>
                                <span className="flex min-h-[190px] items-start gap-3 border border-primary/12 bg-white/70 px-4 py-4 focus-within:border-primary/45 focus-within:bg-white">
                                    <MessageSquare size={18} className="mt-1 shrink-0 text-primary" />
                                    <textarea
                                        className="min-h-[150px] min-w-0 flex-1 resize-none bg-transparent text-base leading-7 text-foreground outline-none placeholder:text-muted-foreground/70"
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your idea, launch stage, timeline, and goals."
                                        required
                                    ></textarea>
                                </span>
                            </label>

                            <div className="flex flex-col gap-5 pt-3 xl:flex-row xl:items-center xl:justify-between">
                                <p className="max-w-[430px] text-sm leading-6 text-muted-foreground">
                                    Response usually starts with clarity: category, offer, timeline, and execution needs.
                                </p>
                                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:max-w-[460px]">
                                    <Button
                                        as="link"
                                        href={GENERAL_INFO.oldPortfolio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="light"
                                        className="h-14 w-full whitespace-nowrap bg-white px-5 text-center !text-sm text-foreground shadow-[0_12px_28px_rgba(35,35,55,0.12)] hover:text-primary sm:!text-base"
                                    >
                                        Book Consultation
                                        <ArrowUpRight size={18} />
                                    </Button>
                                    <Button
                                        as="button"
                                        type="submit"
                                        variant="primary"
                                        className="h-14 w-full whitespace-nowrap px-5 text-center !text-sm text-white hover:text-foreground sm:!text-base"
                                    >
                                        Send Message
                                        <Send size={18} />
                                    </Button>
                                </div>
                            </div>
                        </form>
                        <div className="contact-reveal mt-8 overflow-hidden border border-primary/12 bg-white/65 shadow-[0_18px_55px_rgba(35,35,55,0.10)]">
                            <div className="flex flex-col gap-3 border-b border-primary/10 p-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="flex size-11 shrink-0 items-center justify-center bg-background-light text-primary ring-1 ring-primary/15">
                                        <MapPin size={19} />
                                    </span>
                                    <div>
                                        <p className="font-anton text-2xl uppercase leading-none text-foreground">
                                            Find Us
                                        </p>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            Golden I Tower, Greater Noida T3
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                                    href="https://www.google.com/maps/search/?api=1&query=Golden%20I%20Tower%20Greater%20Noida%20T3"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Open Map
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                            <iframe
                                className="h-[130px] w-full border-0 grayscale-[15%] sm:h-[160px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps?q=Golden%20I%20Tower%20Greater%20Noida%20T3&output=embed"
                                title="Golden I Tower Greater Noida T3 map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

