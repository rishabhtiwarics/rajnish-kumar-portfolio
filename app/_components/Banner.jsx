'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MessageCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import * as THREE from 'three';
gsap.registerPlugin(ScrollTrigger, useGSAP);
const HERO_IMAGE = '/founder.png';
const STACK_ICONS = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
];
const Banner = () => {
    const containerRef = React.useRef(null);
    const threeMountRef = React.useRef(null);
    const imageFadeRef = React.useRef(null);
    // move the content a little up on scroll
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'bottom 70%',
                end: 'bottom 10%',
                scrub: 1,
            },
        });
        tl.fromTo('.slide-up-and-fade', { y: 0 }, { y: -150, opacity: 0, stagger: 0.02 });
    }, { scope: containerRef });
    useGSAP(() => {
        if (!imageFadeRef.current)
            return;

        gsap.to(imageFadeRef.current, {
            opacity: 0.72,
            scaleX: 1.08,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });
    }, { scope: containerRef });
    React.useEffect(() => {
        const mount = threeMountRef.current;
        if (!mount)
            return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const count = 90;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 9;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 4.8;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 3;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0x7c29ff,
            size: 0.035,
            transparent: true,
            opacity: 0.55,
        });
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const resize = () => {
            const { width, height } = mount.getBoundingClientRect();
            renderer.setSize(width, height, false);
            camera.aspect = width / height || 1;
            camera.updateProjectionMatrix();
        };
        resize();
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(mount);

        let frameId;
        const animate = () => {
            points.rotation.y += 0.0018;
            points.rotation.x = Math.sin(Date.now() * 0.00035) * 0.08;
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(frameId);
            resizeObserver.disconnect();
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, []);
    return (<section className="relative overflow-hidden" id="banner">
            <ArrowAnimation className="!bottom-8" />
            <div className="container min-h-[100svh] pt-24 pb-28 flex flex-col items-center justify-center" ref={containerRef}>
                <div className="relative z-[1] mx-auto max-w-[760px] text-center">
                    <p className="slide-up-and-fade mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur">
                        <Sparkles size={16} className="text-primary"/>
                        Founder - LaunchVeda
                    </p>
                    <h1 className="banner-title slide-up-and-fade text-[48px] leading-[.95] sm:text-[72px] lg:text-[92px] font-anton">
                        Hi, I&apos;m Rajnish
                        <span className="mx-3 inline-block h-2 w-14 rounded-full bg-primary align-middle"></span>
                        <span className="text-primary">Founder</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mx-auto mt-6 max-w-[610px] text-base sm:text-lg text-muted-foreground">
                        10+ Years of Experience Building Ayurveda, Cosmetic &
                        Perfume Brands with strategy, systems, and execution.
                    </p>
                    <div className="slide-up-and-fade mt-7 flex flex-wrap items-center justify-center gap-4">
                        <Button as="link" target="_blank" rel="noopener noreferrer" href={GENERAL_INFO.upworkProfile} variant="primary" className="banner-button text-white hover:text-foreground">
                            Build Your Brand
                        </Button>
                        <div className="flex items-center">
                            {STACK_ICONS.map((icon) => (<span key={icon} className="-ml-2 first:ml-0 flex size-10 items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-md">
                                    <Image src={icon} alt="" width={40} height={40} className="h-full w-full object-cover"/>
                                </span>))}
                            <span className="ml-3 text-sm text-muted-foreground">
                                Book Consultation
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative mt-8 grid h-auto w-full max-w-[900px] grid-cols-6 gap-4 pb-2 lg:block lg:h-[620px] lg:pb-0">
                    <div ref={threeMountRef} className="pointer-events-none absolute inset-0 z-0 opacity-50"></div>
                    <div className="slide-up-and-fade relative left-1/2 z-[1] col-span-full block h-[360px] w-[315px] -translate-x-1/2 max-lg:block sm:h-[430px] sm:w-[390px] lg:absolute lg:bottom-8 lg:h-[570px]">
                        <Image src={HERO_IMAGE} alt="Founder Image (Rajnish Kumar)" fill priority sizes="(max-width: 768px) 315px, 390px" className="object-contain object-bottom drop-shadow-[0_28px_42px_rgba(35,35,55,0.22)]"/>
                        <div ref={imageFadeRef} className="pointer-events-none absolute inset-x-[-24px] bottom-0 h-24 origin-bottom bg-gradient-to-t from-[#edf7ff] via-[#edf7ff]/70 to-transparent"></div>
                    </div>

                    <div className="slide-up-and-fade relative z-[3] col-span-3 min-h-[92px] w-full rounded-2xl border border-white/85 bg-white/92 p-3.5 text-left shadow-[0_20px_45px_rgba(35,35,55,0.14)] backdrop-blur md:col-span-2 lg:absolute lg:left-[112px] lg:top-[188px] lg:w-[168px] lg:min-h-0">
                        <p className="text-xs font-semibold text-foreground">10+ Years</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">
                            Industry Experience
                        </p>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e8edf7]">
                            <span className="block h-full w-[70%] rounded-full bg-primary"></span>
                        </div>
                    </div>

                    <div className="slide-up-and-fade relative z-[3] col-span-3 min-h-[92px] w-full rounded-2xl border border-white/85 bg-white/92 p-3.5 text-left shadow-[0_20px_45px_rgba(35,35,55,0.14)] backdrop-blur md:col-span-2 lg:absolute lg:right-[78px] lg:top-[226px] lg:w-[228px] lg:min-h-0 lg:rotate-[3deg]">
                        <div className="flex items-start gap-3">
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <MessageCircle size={16}/>
                            </span>
                            <div>
                                <p className="text-xs font-semibold text-foreground">
                                    Founder - LaunchVeda
                                </p>
                                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                                    Book a consultation to shape your brand roadmap.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="slide-up-and-fade relative z-[3] col-span-6 min-h-[92px] w-full rounded-2xl border border-white/85 bg-white/92 p-3.5 text-left shadow-[0_20px_45px_rgba(35,35,55,0.14)] backdrop-blur md:col-span-2 lg:absolute lg:bottom-[142px] lg:left-[88px] lg:w-[192px] lg:min-h-0 lg:-rotate-[3deg]">
                        <p className="text-[11px] text-muted-foreground">
                            Complete business growth
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">
                            Systems for scalable brands
                        </p>
                    </div>
                </div>
            </div>
        </section>);
};
export default Banner;
