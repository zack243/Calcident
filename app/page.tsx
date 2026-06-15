'use client'

import { useEffect } from 'react'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Benefits from '@/components/sections/Benefits'
import Tips from '@/components/sections/Tips'
import Family from '@/components/sections/Family'
import Values from '@/components/sections/Values'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  useEffect(() => {
    // Smooth scroll polyfill for Safari
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <main className="min-h-screen bg-calcident-light">
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Tips />
      <Family />
      <Values />
      <CTA />
      <Footer />
    </main>
  )
}
