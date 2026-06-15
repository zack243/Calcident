'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Calcident Fresh',
    image: '/images/product.png',
    subtitle: 'Fraîcheur Intense',
  },
  {
    id: 2,
    name: 'Calcident Pack',
    image: '/images/product pack.png',
    subtitle: 'Économique',
  },
  {
    id: 3,
    name: 'Calcident Box',
    image: '/images/Product Box .png',
    subtitle: 'Famille',
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-rotate carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const nextSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % products.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const prevSlide = useCallback(() => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }, [])

  const getSlideStyle = (index: number) => {
    const diff = index - activeIndex
    const normalizedDiff = ((diff + products.length) % products.length)
    const adjustedDiff = normalizedDiff > products.length / 2 ? normalizedDiff - products.length : normalizedDiff

    if (adjustedDiff === 0) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        zIndex: 30,
        opacity: 1,
      }
    } else if (adjustedDiff === 1 || adjustedDiff === -2) {
      return {
        transform: 'translateX(140%) scale(0.75) rotateY(-15deg)',
        zIndex: 20,
        opacity: 0.7,
      }
    } else {
      return {
        transform: 'translateX(-140%) scale(0.75) rotateY(15deg)',
        zIndex: 20,
        opacity: 0.7,
      }
    }
  }

  return (
    <section id="accueil" className="relative min-h-screen overflow-hidden bg-[#F8FBFF]">
      
      {/* Background - Premium bathroom feel with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FC] via-[#F0F9FF] to-[#E0F2FE]" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(61, 183, 255, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(26, 120, 200, 0.1) 0%, transparent 40%)`,
        }} />
      </div>

      {/* Premium floating particles */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#3DB7FF]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content Container - 42%/58% Split */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-12 pt-24 lg:pt-28 pb-12 min-h-screen">
        <div className="grid lg:grid-cols-[42%_58%] gap-8 lg:gap-12 items-center h-full min-h-[calc(100vh-140px)]">
          
          {/* LEFT SIDE - 42% - Lifestyle Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[650px] order-2 lg:order-1"
          >
            {/* Main character image */}
            <motion.div
              style={{ x: mousePosition.x * -0.3, y: mousePosition.y * -0.3 }}
              className="absolute inset-0 flex items-end justify-center"
            >
              <div className="relative w-full h-[90%]">
                <Image
                  src="/images/hero1.png"
                  alt="Femme avec un sourire éclatant"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                  quality={95}
                />
              </div>
            </motion.div>

            {/* Floating water splash */}
            <motion.div
              style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
              animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
              transition={{ y: { duration: 4, repeat: Infinity }, rotate: { duration: 6, repeat: Infinity } }}
              className="absolute -right-4 top-10 w-[120px] h-[120px] z-20"
            >
              <Image
                src="/images/eclaboussure.png"
                alt=""
                width={120}
                height={120}
                className="object-contain opacity-70 mix-blend-screen"
              />
            </motion.div>

            {/* Floating product in scene */}
            <motion.div
              style={{ x: mousePosition.x * 0.8, y: mousePosition.y * 0.8 }}
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 top-1/3 w-[80px] h-[130px] z-20"
            >
              <Image
                src="/images/product.png"
                alt="Calcident"
                width={80}
                height={130}
                className="object-contain drop-shadow-xl"
              />
              <div className="absolute inset-0 bg-[#3DB7FF]/20 blur-2xl -z-10 rounded-full" />
            </motion.div>

            {/* Glow effect */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#3DB7FF]/30 blur-[60px] rounded-full"
            />

            {/* Mint leaves decoration */}
            <motion.div
              style={{ x: mousePosition.x * 0.4 }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -left-8 top-20 text-[#3DB7FF]/30"
            >
              <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor">
                <path d="M20 0C10 20 0 30 0 40C0 52 9 60 20 60C31 60 40 52 40 40C40 30 30 20 20 0Z" />
              </svg>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - 58% - 3D Carousel + CTA */}
          <div className="relative h-[500px] lg:h-[650px] order-1 lg:order-2 flex flex-col">
            
            {/* 3D Carousel Container */}
            <div className="flex-1 relative flex items-center justify-center">
              <div className="relative w-full h-[350px] lg:h-[400px]" style={{ perspective: '1000px' }}>
                {products.map((product, index) => {
                  const style = getSlideStyle(index)
                  return (
                    <motion.div
                      key={product.id}
                      initial={false}
                      animate={{
                        transform: style.transform,
                        opacity: style.opacity,
                        zIndex: style.zIndex,
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{ transformStyle: 'preserve-3d' }}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setActiveIndex(index)
                        setTimeout(() => setIsAutoPlaying(true), 10000)
                      }}
                    >
                      <div className={`relative ${index === activeIndex ? 'w-[200px] h-[320px] lg:w-[240px] lg:h-[380px]' : 'w-[160px] h-[260px] lg:w-[180px] lg:h-[290px]'} transition-all duration-500`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-2xl"
                        />
                        {/* Product glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A78C8]/10 to-transparent blur-xl -z-10" />
                      </div>
                      
                      {/* Active product label */}
                      {index === activeIndex && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
                        >
                          <p className="text-[#3159B7] font-bold text-sm">{product.name}</p>
                          <p className="text-gray-500 text-xs">{product.subtitle}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#3159B7] shadow-lg hover:bg-white hover:scale-110 transition-all z-40"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#3159B7] shadow-lg hover:bg-white hover:scale-110 transition-all z-40"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots indicator */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setActiveIndex(index)
                      setTimeout(() => setIsAutoPlaying(true), 10000)
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? 'bg-[#1A78C8] w-6' : 'bg-[#1A78C8]/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Card - Bom Dia style adapted */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-auto"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
                {/* Decorative sparkle */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF] rounded-full flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-black text-[#3159B7] mb-3">
                  Retrouvez un sourire éclatant
                </h3>
                <p className="text-gray-600 mb-6 text-sm lg:text-base">
                  Fraîcheur longue durée pour toute la famille.
                </p>

                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 min-w-[140px] px-6 py-3 bg-gradient-to-r from-[#1A78C8] to-[#3DB7FF] text-white font-bold rounded-xl shadow-lg shadow-[#1A78C8]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Découvrir Calcident
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 text-[#1A78C8] font-semibold hover:bg-[#1A78C8]/5 rounded-xl transition-colors"
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8FBFF] to-transparent z-20 pointer-events-none" />
    </section>
  )
}
