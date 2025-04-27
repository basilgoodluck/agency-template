"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; 
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 50;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        if (!canvas) return; 
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      if (!canvas) return; 
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx); 
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      if (canvas) { 
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const glitchVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -5, 5, 0],
      x: [0, 3, -3, 0],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-20 dark:opacity-30"
      />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-primary-600 dark:text-primary-400 mb-4"
          variants={glitchVariants}
          initial="initial"
          animate="animate"
        >
          404
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Sorry, we couldn’t find the page you’re looking for.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary-600 dark:bg-primary-500 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
          >
            Go back home
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-300 dark:bg-primary-700 rounded-full opacity-10" />
      </div>
    </div>
  );
}
