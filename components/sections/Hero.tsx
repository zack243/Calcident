'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Calcident Fresh',
    subtitle: 'Fraîcheur Intense',
    image: '/images/product.png',
    badge: 'Best-Seller',
  },
  {
    id: 2,
    name: 'Calcident Pack',
    subtitle: 'Économique',
    image: '/images/product pack.png',
    badge: 'Nouveau',
  },
  {
    id: 3,
    name: 'Calcident Box',
    subtitle: 'Famille',
    image: '/images/Product Box .png',
    badge: 'Famille',
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % products.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
  }, [])

  const getSlideStyle = (index: number) => {
    const diff = ((index - activeIndex + products.length) % products.length)
    const adjustedDiff = diff > products.length / 2 ? diff - products.length : diff

    if (adjustedDiff === 0) {
      // Center card - dominant
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 30,
        opacity: 1,
      }
    } else if (adjustedDiff === 1 || adjustedDiff === -2) {
      // Right card
      return {
        transform: 'translateX(85%) scale(0.84)',
        zIndex: 20,
        opacity: 0.7,
      }
    } else {
      // Left card
      return {
        transform: 'translateX(-85%) scale(0.84)',
        zIndex: 20,
        opacity: 0.7,
      }
    }
  }

  return (
    <section id="accueil" className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden">
      
      {/* BACKGROUND - Fond hero.png visible + effets premium */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Fond hero.png"
          alt=""
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Voile blanc très léger */}
        <div className="absolute inset-0 bg-white/10" />
        
        {/* Glow bleu subtil */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#3DB7FF]/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-[#1A78C8]/10 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Reflets lumineux */}
        <div className="absolute top-[20%] right-[40%] w-2 h-2 bg-white/60 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-[35%] right-[25%] w-1 h-1 bg-white/80 rounded-full animate-pulse" />
        <div className="absolute bottom-[30%] right-[35%] w-1.5 h-1.5 bg-[#3DB7FF]/50 rounded-full animate-pulse" />
      </div>

      {/* MAIN CONTENT - Split 45% / 55% */}
      <div className="relative z-10 h-full flex">
        
        {/* LEFT SIDE - 45% - Image lifestyle redimensionnée et alignée */}
        <div className="w-[45%] h-full relative flex items-end justify-center pt-[15%]">
          <motion.div
            style={{ x: mousePosition.x * -0.3 }}
            className="absolute inset-0 flex items-start justify-center pt-[12%]"
          >
            <div className="relative w-[100%] h-[82%]">
              <Image
                src="/images/New hero2.png"
                alt="Femme avec un sourire éclatant"
                fill
                className="object-cover object-top"
                style={{ objectPosition: 'center 12%' }}
                priority
                quality={95}
              />
            </div>
          </motion.div>

          {/* Glow subtil + accent rouge discret */}
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#3DB7FF]/20 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute top-[20%] right-[15%] w-[80px] h-[80px] bg-[#E53935]/10 blur-[40px] rounded-full pointer-events-none" />
        </div>

        {/* RIGHT SIDE - 55% - Carousel 3D + CTA centrés */}
        <div className="w-[55%] h-full flex flex-col justify-center items-center px-8 lg:px-12">
          
          {/* CAROUSEL 3D - Centré */}
          <div className="relative h-[360px] w-full max-w-[500px] mb-3" style={{ perspective: '1000px' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              {products.map((product, index) => {
                const style = getSlideStyle(index)
                const isActive = index === activeIndex
                
                return (
                  <motion.div
                    key={product.id}
                    initial={false}
                    animate={{
                      transform: style.transform,
                      opacity: style.opacity,
                      zIndex: style.zIndex,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Card style Bom Dia */}
                    <div 
                      className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                        isActive ? 'shadow-2xl' : 'shadow-lg'
                      }`}
                      style={{
                        width: isActive ? '200px' : '170px',
                        height: isActive ? '320px' : '270px',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.9) 100%)',
                        boxShadow: isActive 
                          ? '0 25px 60px rgba(26, 120, 200, 0.25), 0 10px 20px rgba(0,0,0,0.1)'
                          : '0 15px 40px rgba(0,0,0,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.5)',
                      }}
                    >
                      {/* Badge avec accent rouge sur best-seller */}
                      <div className="absolute top-3 left-3 z-10">
                        <span 
                          className="px-2.5 py-1 text-[10px] font-bold text-white rounded-full"
                          style={{ backgroundColor: product.badge === 'Best-Seller' ? '#D71920' : '#1A78C8' }}
                        >
                          {product.badge}
                        </span>
                      </div>

                      {/* Product Image */}
                      <div className="absolute inset-0 flex items-center justify-center p-4 pt-10">
                        <motion.div
                          animate={isActive ? { y: [0, -5, 0] } : {}}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="relative w-full h-[70%]"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain drop-shadow-xl"
                          />
                        </motion.div>
                      </div>

                      {/* Product Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/95 to-transparent">
                        <p className="font-bold text-[#3159B7] text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#3159B7] shadow-lg hover:bg-white transition-all z-40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#3159B7] shadow-lg hover:bg-white transition-all z-40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mb-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-[#1A78C8]' 
                    : 'w-2 bg-[#1A78C8]/30'
                }`}
              />
            ))}
          </div>

          {/* CTA CARD - Sous le carousel, centrée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-white/60 w-full max-w-[450px] mx-auto"
            style={{ borderLeft: '3px solid #D71920' }}
          >
            {/* Badge avec accent rouge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-gradient-to-r from-[#1A78C8] to-[#D71920] text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                Premium
              </span>
            </div>

            <h2 className="text-2xl font-black text-[#3159B7] mb-2 leading-tight">
              Retrouvez un sourire éclatant
            </h2>
            <p className="text-gray-600 text-sm mb-5">
              Fraîcheur longue durée pour toute la famille.
            </p>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-[#1A78C8] to-[#3159B7] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
              >
                Découvrir Calcident
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 px-4 text-[#1A78C8] font-semibold hover:text-[#D71920] hover:bg-[#1A78C8]/10 rounded-xl transition-colors text-sm"
              >
                En savoir plus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
