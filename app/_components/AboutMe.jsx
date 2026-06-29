'use client';
import SectionTitle from '@/components/SectionTitle';
import { SectionFlower } from '@/components/icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
gsap.registerPlugin(ScrollTrigger, useGSAP);
const AboutMe = () => {
    const container = React.useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                id: 'about-me-in',
                trigger: container.current,
                start: 'top 70%',
                end: 'bottom bottom',
                scrub: 0.5,
            },
        });
        tl.from('.slide-up-and-fade', {
            y: 150,
            opacity: 0,
            stagger: 0.05,
        });
    }, { scope: container });
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                id: 'about-me-out',
                trigger: container.current,
                start: 'bottom 50%',
                end: 'bottom 10%',
                scrub: 0.5,
            },
        });
        tl.to('.slide-up-and-fade', {
            y: -150,
            opacity: 0,
            stagger: 0.02,
        });
    }, { scope: container });
    return (<section className="pb-0" id="about-me">
            <div className="container" ref={container}>
                <h2 className="banner-title slide-up-and-fade mb-20 text-center text-[28px] font-anton leading-[.95] sm:text-[38px] lg:text-[48px]">
                    I believe every strong company begins with a clear idea,
                    <span className="mx-3 inline-block h-1.5 w-12 rounded-full bg-primary align-middle"></span>
                    a sharp story, and the discipline to
                    <span className="text-primary"> launch with purpose.</span>
                </h2>

                <SectionTitle title="Founder Profile" className="slide-up-and-fade pb-3 border-b mb-9"/>

                <div className="grid md:grid-cols-12">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m Rajnish Kumar.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m the founder of Launchveda, an end-to-end
                                brand launch partner helping entrepreneurs move
                                from idea clarity to market-ready presence.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                My work connects brand strategy, positioning,
                                digital experience, content, and growth
                                execution so founders can build trust, launch
                                faster, and create businesses that feel clear
                                from day one.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="slide-up-and-fade mb-16 mt-8 overflow-hidden border-y border-primary/10 py-5">
                    <div className="flex w-max animate-[about-marquee_24s_linear_infinite] items-center gap-8 font-anton text-3xl uppercase leading-none text-primary/20 sm:text-5xl">
                        <span>10+ Years Experience</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000"/>
                        <span>200+ Brands</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000"/>
                        <span>500+ Formulations</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000"/>
                        <span>100+ Perfume Brand Associations</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000"/>
                        <span>10+ Years Experience</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000"/>
                        <span>200+ Brands</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000"/>
                        <span>500+ Formulations</span>
                        <SectionFlower width={25} className="shrink-0 animate-spin opacity-25 duration-7000"/>
                        <span>100+ Perfume Brand Associations</span>
                    </div>
                </div>
                <style jsx>{`
                    @keyframes about-marquee {
                        from {
                            transform: translateX(0);
                        }
                        to {
                            transform: translateX(-50%);
                        }
                    }
                `}</style>
            </div>
        </section>);
};
export default AboutMe;
