'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="accueil" className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden bg-gradient-to-br from-[#F0F9FF] via-[#E8F4FC] to-[#F5FBFF]">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#3DB7FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[300px] bg-[#1A78C8]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Content - Split Layout */}
      <div className="relative z-10 h-full max-w-[1600px] mx-auto flex">
        
        {/* LEFT SIDE - 50% - New hero image grande */}
        <div className="w-[50%] h-full relative flex items-end">
          <motion.div
            style={{ x: mousePosition.x * -0.5 }}
            className="absolute inset-0 flex items-end justify-center"
          >
            <div className="relative w-[95%] h-[90%]">
              <Image
                src="/images/New hero.png"
                alt="Femme avec un sourire éclatant et produit Calcident"
                fill
                className="object-contain object-bottom"
                priority
                quality={95}
              />
            </div>
          </motion.div>

          {/* Subtle glow behind the person */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[350px] h-[200px] bg-[#3DB7FF]/20 blur-[80px] rounded-full pointer-events-none" />
        </div>

        {/* RIGHT SIDE - 50% - Product + CTA */}
        <div className="w-[50%] h-full flex flex-col justify-center px-12 lg:px-16">
          
          {/* Product Image - Grande et dominante */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[350px] mb-8"
          >
            <motion.div
              style={{ x: mousePosition.x * 0.3, y: mousePosition.y * 0.3 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/product pack.png"
                alt="Calcident Pack Premium"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
            
            {/* Glow behind product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#1A78C8]/15 blur-[60px] rounded-full pointer-events-none" />
          </motion.div>

          {/* CTA Card - Remonté et moins large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/60 max-w-[400px] mx-auto lg:mx-0"
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#1A78C8]/10 text-[#1A78C8] text-xs font-semibold rounded-full uppercase tracking-wide">
                Premium
              </span>
            </div>

            <h2 className="text-xl lg:text-2xl font-black text-[#3159B7] mb-2 leading-tight">
              Retrouvez un sourire éclatant
            </h2>
            <p className="text-gray-600 text-sm mb-5">
              Fraîcheur longue durée pour toute la famille.
            </p>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 bg-[#1A78C8] text-white font-bold rounded-xl shadow-lg hover:bg-[#1565a8] transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Découvrir Calcident
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 px-4 text-[#1A78C8] font-semibold hover:bg-[#1A78C8]/10 rounded-xl transition-colors text-sm"
              >
                En savoir plus
              </motion.button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-8 mt-8 ml-2"
          >
            {[
              { value: '12h', label: 'Fraîcheur' },
              { value: '98%', label: 'Satisfaction' },
              { value: '5M+', label: 'Clients' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-black text-[#3159B7]">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
