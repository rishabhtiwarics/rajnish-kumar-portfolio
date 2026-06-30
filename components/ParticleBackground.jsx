'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
gsap.registerPlugin(useGSAP);
const CIRCLE_POSITIONS = [
    { left: '8%', top: '18%' },
    { left: '74%', top: '14%' },
    { left: '12%', top: '68%' },
    { left: '78%', top: '62%' },
];
const ParticleBackground = () => {
    const circlesRef = useRef([]);
    const particlesRef = useRef([]);
    const circleMotionRef = useRef([]);
    useGSAP(() => {
        circlesRef.current.forEach((circle, index) => {
            if (!circle)
                return;
            const size = Math.random() * 90 + 85;
            circleMotionRef.current[index] = {
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.25 + 0.18,
                radius: new THREE.Vector2(Math.random() * 22 + 22, Math.random() * 18 + 18),
                scale: Math.random() * 0.08 + 0.98,
            };
            gsap.set(circle, {
                width: size,
                height: size,
                opacity: Math.random() * 0.12 + 0.28,
                left: CIRCLE_POSITIONS[index].left,
                top: CIRCLE_POSITIONS[index].top,
            });
        });
        particlesRef.current.forEach((particle) => {
            if (!particle)
                return;
            const isSmallScreen = window.innerWidth < 1024;
            gsap.set(particle, {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: isSmallScreen ? Math.random() * 0.16 + 0.16 : Math.random() * 0.35 + 0.55,
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });
            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 10 + 10,
                opacity: 0,
                repeat: -1,
                ease: 'none',
            });
        });
    }, []);
    useEffect(() => {
        const clock = new THREE.Clock();
        let frameId;

        const animate = () => {
            const elapsed = clock.getElapsedTime();
            circlesRef.current.forEach((circle, index) => {
                const motion = circleMotionRef.current[index];
                if (!circle || !motion)
                    return;

                const phase = elapsed * motion.speed + motion.angle;
                const x = Math.sin(phase) * motion.radius.x;
                const y = Math.cos(phase * 0.85) * motion.radius.y;
                const rotate = Math.sin(phase * 0.6) * 5;
                circle.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${motion.scale})`;
            });
            frameId = requestAnimationFrame(animate);
        };

        animate();
        return () => cancelAnimationFrame(frameId);
    }, []);
    return (<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (<div key={i} ref={(el) => {
                circlesRef.current[i] = el;
            }} className="absolute hidden rounded-full border border-primary/40 bg-white/20 shadow-[inset_0_0_28px_rgba(255,255,255,0.42),0_18px_55px_rgba(124,41,255,0.14)] backdrop-blur-md 2xl:block"/>))}
            {[...Array(100)].map((_, i) => (<div key={i} ref={(el) => {
                particlesRef.current[i] = el;
            }} className="absolute rounded-full bg-primary/80 shadow-[0_0_14px_rgba(124,41,255,0.55)] max-lg:bg-primary/25 max-lg:shadow-[0_0_10px_rgba(124,41,255,0.16)]"/>))}
        </div>);
};
export default ParticleBackground;
