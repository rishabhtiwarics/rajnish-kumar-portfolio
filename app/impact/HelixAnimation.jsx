'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HelixAnimation() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const currentMount = mountRef.current;

        const scene = new THREE.Scene();

        // Camera — tight FOV to fill the frame
        const camera = new THREE.PerspectiveCamera(42, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z = 28;

        // Renderer with transparent background
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        currentMount.appendChild(renderer.domElement);

        // Lighting — bright key from top-front, cool fill from below, rim from back
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
        keyLight.position.set(8, 20, 20);
        scene.add(keyLight);

        const fillLight = new THREE.DirectionalLight(0xddeeff, 1.0);
        fillLight.position.set(-15, -10, 5);
        scene.add(fillLight);

        const rimLight = new THREE.DirectionalLight(0xffffff, 0.5);
        rimLight.position.set(0, 0, -20);
        scene.add(rimLight);

        const helixGroup = new THREE.Group();
        scene.add(helixGroup);

        // Define a smooth path for the helix
        const points1 = [];
        const points2 = [];
        const turns = 1.5;
        const height = 40;
        const radius = 5;

        for (let i = 0; i <= 200; i++) {
            const t = i / 200;
            const angle = t * Math.PI * 2 * turns;
            const y = (t - 0.5) * height;

            points1.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
            points2.push(new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius));
        }

        const curve1 = new THREE.CatmullRomCurve3(points1);
        const curve2 = new THREE.CatmullRomCurve3(points2);

        // ─────────────────────────────────────────────────────────────────
        // Build bead surface by placing spheres at every vertex of the
        // tube geometry. radialSeg = beads around circumference,
        // tubularSeg = beads along the length.
        // ─────────────────────────────────────────────────────────────────
        const tubeRadius = 2.1;
        const radialSeg = 20;
        const tubularSeg = 140;

        const tubeGeo1 = new THREE.TubeGeometry(curve1, tubularSeg, tubeRadius, radialSeg, false);
        const tubeGeo2 = new THREE.TubeGeometry(curve2, tubularSeg, tubeRadius, radialSeg, false);

        const pos1 = tubeGeo1.attributes.position.array;
        const pos2 = tubeGeo2.attributes.position.array;
        const totalBeads = (pos1.length / 3) + (pos2.length / 3);

        // Beads that just-kiss each other — same dense packed look as reference
        const beadGeo = new THREE.SphereGeometry(0.52, 32, 32);
        const beadMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.17,
            metalness: 0.04,
        });

        const mesh = new THREE.InstancedMesh(beadGeo, beadMat, totalBeads);
        const dummy = new THREE.Object3D();
        let idx = 0;

        for (let i = 0; i < pos1.length; i += 3) {
            dummy.position.set(pos1[i], pos1[i + 1], pos1[i + 2]);
            dummy.updateMatrix();
            mesh.setMatrixAt(idx++, dummy.matrix);
        }
        for (let i = 0; i < pos2.length; i += 3) {
            dummy.position.set(pos2[i], pos2[i + 1], pos2[i + 2]);
            dummy.updateMatrix();
            mesh.setMatrixAt(idx++, dummy.matrix);
        }

        helixGroup.add(mesh);

        // Slow Y-axis spin only — model stays perfectly upright
        let rafId;
        const animate = () => {
            rafId = requestAnimationFrame(animate);
            helixGroup.rotation.y += 0.0018;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            const w = currentMount.clientWidth;
            const h = currentMount.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(rafId);
            if (currentMount && renderer.domElement) currentMount.removeChild(renderer.domElement);
            renderer.dispose();
            beadGeo.dispose();
            beadMat.dispose();
            tubeGeo1.dispose();
            tubeGeo2.dispose();
        };
    }, []);

    return <div ref={mountRef} className="w-full h-full min-h-[500px]" />;
}
