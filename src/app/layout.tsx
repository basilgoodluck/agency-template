"use client";

import './globals.scss';
import { ReactNode, useEffect, useState, Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <div className="h-16 bg-gray-100 dark:bg-neutral-800 animate-pulse" />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-12 bg-gray-100 dark:bg-neutral-800 animate-pulse" />,
});

type Theme = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Theme setup
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme as Theme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  // Particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    let particles: Particle[] = [];
    const particleCount = 30;
  
    if (!ctx || !canvas) return;
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    resizeCanvas();
  
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
  
      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
      }
  
      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;
  
        if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1;
      }
  
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  
    const init = () => {
      if (!canvas) return; // Ensure canvas is not null
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };
  
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });
      requestAnimationFrame(animate);
    };
  
    init();
    animate();
  
    const handleResize = () => {
      if (!canvas) return;
      resizeCanvas();
      init();
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-10 dark:opacity-15 pointer-events-none"
        style={{ width: '100vw', height: '100vh' }}
      />

      <Suspense fallback={<div className="h-16 bg-gray-100 dark:bg-neutral-800 animate-pulse" />}>
        <Header theme={theme} toggleTheme={toggleTheme} />
      </Suspense>

      <main className="relative z-10 min-h-[calc(100vh-16rem)] bg-gray-100 dark:bg-neutral-900 w-full">
        <div className="max-w-[100vw] overflow-x-hidden">
          {children}
        </div>
      </main>

      <Suspense fallback={<div className="h-12 bg-gray-100 dark:bg-neutral-800 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
}

// Props for RootLayout
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}