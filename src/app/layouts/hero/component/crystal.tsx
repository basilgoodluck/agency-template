// components/CrystalN.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  brightness: number;
  alpha: number;
  hue: number;
}

const CrystalN: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;

    // Resize canvas
    const resizeCanvas = () => {
      width = Math.min(window.innerWidth * 0.3, 300);
      height = Math.min(window.innerHeight * 0.4, 350);
      canvas.width = width;
      canvas.height = height;
      drawCrystalN();
    };

    const particles: Particle[] = [];

    const createParticles = () => {
      particles.length = 0;
      // Left vertical line
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: width * 0.25 + Math.random() * (width * 0.1),
          y: height * 0.1 + Math.random() * (height * 0.8),
          size: 1 + Math.random() * 3,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          brightness: 0.5 + Math.random() * 0.5,
          alpha: 0.7 + Math.random() * 0.3,
          hue: 230 + Math.random() * 30,
        });
      }
      // Right vertical line
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: width * 0.75 + Math.random() * (width * 0.1),
          y: height * 0.1 + Math.random() * (height * 0.8),
          size: 1 + Math.random() * 3,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          brightness: 0.5 + Math.random() * 0.5,
          alpha: 0.7 + Math.random() * 0.3,
          hue: 230 + Math.random() * 30,
        });
      }
      for (let i = 0; i < 100; i++) {
        const progress = i / 100;
        particles.push({
          x: width * (0.25 + progress * 0.5) + Math.random() * (width * 0.1),
          y: height * (0.1 + progress * 0.8) + Math.random() * (height * 0.05),
          size: 1 + Math.random() * 3,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          brightness: 0.5 + Math.random() * 0.5,
          alpha: 0.7 + Math.random() * 0.3,
          hue: 230 + Math.random() * 30,
        });
      }
    };

    const drawCrystalN = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < width * 0.2 || particle.x > width * 0.85) {
          particle.speedX *= -1;
        }
        if (particle.y < height * 0.05 || particle.y > height * 0.95) {
          particle.speedY *= -1;
        }

        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        gradient.addColorStop(
          0,
          `hsla(${particle.hue}, 100%, ${70 + particle.brightness * 30}%, ${particle.alpha})`
        );
        gradient.addColorStop(
          1,
          `hsla(${particle.hue}, 100%, ${50 + particle.brightness * 20}%, 0)`
        );
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < 5; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        const sparkleGradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          2 + Math.random() * 4
        );
        sparkleGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        sparkleGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = sparkleGradient;
        ctx.arc(x, y, 1 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(drawCrystalN);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    createParticles();
    drawCrystalN();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative select-none pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[600px] max-h-96 opacity-80 mix-blend-screen dark:mix-blend-normal"
      />
    </div>
  );
};

export default CrystalN;

export function ThreeScene() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} />
      <Suspense fallback={null}>
        <mesh rotation={[0.4, 0.2, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#7EC8E3" />
        </mesh>
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
