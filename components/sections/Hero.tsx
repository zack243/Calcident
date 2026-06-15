'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1A78C8] via-[#3159B7] to-[#1A78C8]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Fond hero.png"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A78C8]/90 via-[#3159B7]/80 to-[#1A78C8]/70" />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#3DB7FF]/30 rounded-full blur-[120px] pointer-events-none z-10"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#3DB7FF]/20 rounded-full blur-[100px] pointer-events-none z-10"
      />

      {/* Floating Water Splash - Right side */}
      <motion.div
        style={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
        animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[5%] w-[250px] h-[250px] z-20 pointer-events-none hidden lg:block"
      >
        <Image
          src="/images/eclaboussure.png"
          alt=""
          width={250}
          height={250}
          className="object-contain opacity-80 mix-blend-screen"
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-30 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/15 backdrop-blur-xl rounded-full border border-white/30 mx-auto lg:mx-0"
            >
              <span className="w-2.5 h-2.5 bg-[#D71920] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-white tracking-wide uppercase">
                Nouvelle Formule 2025
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight"
              >
                Votre Sourire
                <br />
                <span className="text-[#3DB7FF]">Notre Passion</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl sm:text-2xl text-white/80 font-light max-w-lg mx-auto lg:mx-0"
              >
                Découvrez la fraîcheur longue durée qui transforme votre quotidien
              </motion.p>
            </div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {[
                { text: '12h Fraîcheur' },
                { text: 'Protection Max' },
                { text: 'Blancheur Éclat' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 text-white text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4 text-[#3DB7FF]" />
                  {item.text}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white text-[#1A78C8] font-bold text-lg rounded-2xl overflow-hidden shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Découvrir la Gamme
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-6 py-4 bg-white/15 backdrop-blur-xl text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/25 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/25 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                Voir la Vidéo
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-8 pt-4 justify-center lg:justify-start"
            >
              {[
                { value: '98%', label: 'Satisfaction' },
                { value: '5M+', label: 'Clients' },
                { value: '30+', label: 'Ans d\'exp.' },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="text-2xl lg:text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Hero Image with Woman and Products */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            {/* Main Hero Image - Woman */}
            <motion.div
              style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
              className="absolute inset-0 z-20 flex items-end justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero1.png"
                  alt="Femme avec un sourire éclatant"
                  fill
                  className="object-contain object-bottom"
                  priority
                  quality={95}
                />
              </div>
            </motion.div>

            {/* Floating Product */}
            <motion.div
              style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute -left-10 top-1/4 w-[120px] h-[200px] z-30"
            >
              <Image
                src="/images/product.png"
                alt="Calcident Fresh"
                width={120}
                height={200}
                className="object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-[#3DB7FF]/20 blur-3xl -z-10 rounded-full" />
            </motion.div>

            {/* Secondary Product */}
            <motion.div
              style={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 6, repeat: Infinity } }}
              className="absolute right-0 top-10 w-[100px] h-[180px] z-30"
            >
              <Image
                src="/images/product pack.png"
                alt="Calcident Pack"
                width={100}
                height={180}
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Glass Card - Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="absolute bottom-10 left-0 lg:-left-10 z-40"
            >
              <div className="px-6 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">98%</p>
                    <p className="text-sm text-white/70">Satisfaction Client</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FBFF] to-transparent z-40 pointer-events-none" />
    </section>
  )
}
