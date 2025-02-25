"use client"

import './globals.scss'
import { ReactNode, useEffect, useState, Suspense } from 'react'
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <div className="h-16 bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-12 bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
})

// Move theme logic to a separate component to avoid html/body nesting issues
function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
    } else if (systemPrefersDark) {
      setTheme('dark')
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark')
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Prevent flash of wrong theme
  if (!mounted) {
    return null
  }

  return (
    <>
      <Suspense fallback={<div className="h-16 bg-neutral-100 dark:bg-neutral-800 animate-pulse" />}>
        <Header theme={theme} toggleTheme={toggleTheme} />
      </Suspense>
      
      <main className="pt-20 pb-16">
        <div className="relative z-10">
          {children}
        </div>
      </main>
      
      <Suspense fallback={<div className="h-12 bg-neutral-100 dark:bg-neutral-800 animate-pulse" />}>
        <Footer />
      </Suspense>
    </>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}