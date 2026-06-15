'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Droplets } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Calcident Fresh',
    subtitle: 'Fraîcheur Intense',
    image: '/images/product.png',
    color: '#1A78C8',
  },
  {
    id: 2,
    name: 'Calcident Pack',
    subtitle: 'Économique',
    image: '/images/product pack.png',
    color: '#3159B7',
  },
  {
    id: 3,
    name: 'Calcident Box',
    subtitle: 'Famille',
    image: '/images/Product Box .png',
    color: '#3DB7FF',
  },
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse parallax
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

  // Auto-rotate
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
      return {
        transform: 'translateX(0) translateZ(50px) scale(1)',
        zIndex: 30,
        opacity: 1,
      }
    } else if (adjustedDiff === 1 || adjustedDiff === -2) {
      return {
        transform: 'translateX(75%) translateZ(-50px) scale(0.85) rotateY(-8deg)',
        zIndex: 20,
        opacity: 0.8,
      }
    } else {
      return {
        transform: 'translateX(-75%) translateZ(-50px) scale(0.85) rotateY(8deg)',
        zIndex: 20,
        opacity: 0.8,
      }
    }
  }

  return (
    <section id="accueil" className="relative h-screen min-h-[700px] max-h-[900px] overflow-hidden">
      
      {/* BACKGROUND - Salle de bain visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Fond hero.png"
          alt="Salle de bain premium"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Voile blanc très léger pour lisibilité */}
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* PARTICULES FRAÎCHEUR */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Gouttes d'eau */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`drop-${i}`}
            className="absolute w-2 h-2 bg-[#3DB7FF]/60 rounded-full"
            style={{ left: `${10 + Math.random() * 80}%`, top: `${Math.random() * 60}%` }}
            animate={{
              y: [0, 100, 200],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        {/* Particules lumineuses */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* FEUILLES DE MENTHE FLOTTANTES */}
      <motion.div
        style={{ x: mousePosition.x * 0.3 }}
        animate={{ rotate: [0, 15, -15, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[15%] left-[5%] z-10 opacity-60"
      >
        <svg width="50" height="70" viewBox="0 0 50 70" fill="#3DB7FF">
          <path d="M25 0C10 25 0 35 0 50C0 60 10 70 25 70C40 70 50 60 50 50C50 35 40 25 25 0Z" />
        </svg>
      </motion.div>
      <motion.div
        style={{ x: mousePosition.x * -0.2 }}
        animate={{ rotate: [0, -10, 10, 0], y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-[25%] right-[45%] z-10 opacity-50"
      >
        <svg width="35" height="50" viewBox="0 0 50 70" fill="#1A78C8">
          <path d="M25 0C10 25 0 35 0 50C0 60 10 70 25 70C40 70 50 60 50 50C50 35 40 25 25 0Z" />
        </svg>
      </motion.div>

      {/* MAIN CONTENT - Structure Bom Dia */}
      <div className="relative z-10 h-full flex">
        
        {/* LEFT SIDE - 45% - Famille émotionnelle */}
        <div className="w-[45%] h-full relative">
          {/* Photo famille grande */}
          <motion.div
            style={{ x: mousePosition.x * -0.3, y: mousePosition.y * -0.2 }}
            className="absolute inset-0 flex items-end justify-center"
          >
            <div className="relative w-[95%] h-[90%]">
              <Image
                src="/images/hero1.png"
                alt="Famille souriante"
                fill
                className="object-contain object-bottom"
                priority
                quality={95}
              />
            </div>
          </motion.div>

          {/* Produit intégré dans la scène */}
          <motion.div
            style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-[15%] left-[5%] w-[100px] h-[160px] z-20"
          >
            <Image
              src="/images/product.png"
              alt="Calcident"
              width={100}
              height={160}
              className="object-contain drop-shadow-2xl"
            />
            {/* Glow produit */}
            <div className="absolute inset-0 bg-[#3DB7FF]/30 blur-2xl -z-10 rounded-full scale-150" />
          </motion.div>

          {/* Water splash */}
          <motion.div
            style={{ x: mousePosition.x * 0.4 }}
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-[10%] right-0 w-[150px] h-[150px] z-15"
          >
            <Image
              src="/images/eclaboussure.png"
              alt=""
              width={150}
              height={150}
              className="object-contain opacity-60 mix-blend-screen"
            />
          </motion.div>

          {/* Glow bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[#3DB7FF]/20 blur-[80px] rounded-full" />
        </div>

        {/* RIGHT SIDE - 55% - Carousel 3D + CTA */}
        <div className="w-[55%] h-full flex flex-col justify-center px-8 lg:px-12">
          
          {/* CAROUSEL 3D - Style Bom Dia */}
          <div className="relative h-[400px] mb-6" style={{ perspective: '1200px' }}>
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
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Card avec ombre et profondeur */}
                    <div 
                      className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                        isActive ? 'shadow-2xl' : 'shadow-xl'
                      }`}
                      style={{
                        width: isActive ? '220px' : '180px',
                        height: isActive ? '340px' : '280px',
                        background: `linear-gradient(135deg, ${product.color}20 0%, white 50%, ${product.color}10 100%)`,
                        boxShadow: isActive 
                          ? `0 25px 60px ${product.color}40, 0 10px 20px rgba(0,0,0,0.2)`
                          : `0 15px 40px rgba(0,0,0,0.15)`,
                      }}
                    >
                      {/* Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span 
                          className="px-3 py-1 text-[10px] font-bold text-white rounded-full"
                          style={{ backgroundColor: product.color }}
                        >
                          {index === 0 ? 'Best-Seller' : index === 1 ? 'Nouveau' : 'Famille'}
                        </span>
                      </div>

                      {/* Product Image */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
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
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent">
                        <p className="font-bold text-[#3159B7] text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.subtitle}</p>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#3159B7] shadow-lg hover:bg-white hover:scale-110 transition-all z-40"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-[#3159B7] shadow-lg hover:bg-white hover:scale-110 transition-all z-40"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* DOTS INDICATOR */}
          <div className="flex justify-center gap-2 mb-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'w-8 bg-[#1A78C8]' 
                    : 'w-2 bg-[#1A78C8]/30 hover:bg-[#1A78C8]/50'
                }`}
              />
            ))}
          </div>

          {/* CTA CARD - Connecté au carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50"
          >
            {/* Badge fraîcheur */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-[#1A78C8] rounded-full flex items-center justify-center">
                <Droplets className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-semibold text-[#1A78C8] uppercase tracking-wide">
                Fraîcheur Longue Durée
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-black text-[#3159B7] mb-2 leading-tight">
              Retrouvez un sourire éclatant
            </h2>
            <p className="text-gray-600 text-sm mb-5">
              Fraîcheur longue durée pour toute la famille. Protection 12h.
            </p>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 px-5 bg-[#1A78C8] text-white font-bold rounded-xl shadow-lg hover:bg-[#1565a8] transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Découvrir Calcident
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="py-3 px-5 text-[#1A78C8] font-semibold hover:bg-[#1A78C8]/10 rounded-xl transition-colors text-sm"
              >
                En savoir plus
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WATER SPLASH ANIMATION */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[40%] w-[80px] h-[80px] z-20 pointer-events-none"
      >
        <Image
          src="/images/eclaboussure.png"
          alt=""
          width={80}
          height={80}
          className="object-contain opacity-40"
        />
      </motion.div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-[30%] right-[20%] w-[200px] h-[200px] bg-[#3DB7FF]/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[30%] w-[150px] h-[150px] bg-[#1A78C8]/15 blur-[80px] rounded-full pointer-events-none" />
    </section>
  )
}
