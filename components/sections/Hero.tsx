'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play, Star } from 'lucide-react'

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
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-[600px] h-[600px] bg-[#3DB7FF]/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#3DB7FF]/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Floating Elements */}
      <motion.div
        style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[10%] w-32 h-32 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hidden lg:block"
      />
      <motion.div
        style={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] left-[5%] w-24 h-24 bg-[#3DB7FF]/30 backdrop-blur-xl rounded-full hidden lg:block"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-32 lg:pt-40 pb-20">
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
                  <Star className="w-4 h-4 text-[#3DB7FF] fill-[#3DB7FF]" />
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

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] lg:h-[500px] hidden lg:block"
          >
            {/* Central Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-[300px] h-[300px] bg-[#3DB7FF]/40 rounded-full blur-[60px]"
              />
            </div>

            {/* Product Cards Stack */}
            <motion.div
              style={{ x: mousePosition.x * -0.5, y: mousePosition.y * -0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Card 1 */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [-5, -3, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-48 h-64 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl -translate-x-20 translate-y-10"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#3DB7FF] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Fresh</p>
                    <p className="text-white/60 text-sm">12h Fraîcheur</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Main */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-56 h-72 bg-gradient-to-br from-white to-[#F8FBFF] rounded-3xl shadow-2xl z-10"
              >
                <div className="p-8 h-full flex flex-col justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF] flex items-center justify-center">
                    <Star className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-[#3159B7] font-black text-2xl">CALCIDENT</p>
                    <p className="text-[#1A78C8] font-semibold">Total Protection</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [5, 7, 5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-48 h-64 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl translate-x-20 translate-y-10"
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#1A78C8] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">White</p>
                    <p className="text-white/60 text-sm">Blancheur Éclat</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FBFF] to-transparent z-20 pointer-events-none" />
    </section>
  )
}
