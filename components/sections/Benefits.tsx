'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Shield, Clock, Heart, Award, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const benefits = [
  {
    icon: Sparkles,
    title: 'Blancheur Éclatante',
    description: 'Technologie avancée pour des dents visiblement plus blanches dès la première semaine',
    stat: '+3 tons',
    color: '#1A78C8',
  },
  {
    icon: Clock,
    title: 'Fraîcheur 12h',
    description: 'Micro-encapsulation pour une haleine fraîche qui dure toute la journée',
    stat: '12 heures',
    color: '#3DB7FF',
  },
  {
    icon: Shield,
    title: 'Protection Email',
    description: 'Formule enrichie au fluor actif pour renforcer et protéger votre email',
    stat: '99.9%',
    color: '#3159B7',
  },
  {
    icon: Heart,
    title: 'Dents Sensibles',
    description: 'Doux et efficace, même pour les dents les plus sensibles',
    stat: '0% douleur',
    color: '#1A78C8',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1])

  return (
    <section id="bienfaits" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-white via-[#F0F7FF] to-[#F8FBFF] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8FBFF] to-transparent" />
        <motion.div
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] border border-[#1A78C8]/5 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border border-[#3DB7FF]/5 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left - Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[40px] overflow-hidden bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF] shadow-2xl">
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-6 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-16 h-16 text-white" />
                  </motion.div>
                  <p className="text-white text-2xl font-bold mb-2">Sourire Éclatant</p>
                  <p className="text-white/80">La confiance en plus</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF] flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-[#3159B7]">98%</p>
                      <p className="text-sm text-gray-600">de satisfaction client</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#3DB7FF]/30 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#1A78C8]/30 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A78C8]/10 rounded-full"
              >
                <TrendingUp className="w-4 h-4 text-[#1A78C8]" />
                <span className="text-sm font-semibold text-[#1A78C8] tracking-wide uppercase">Résultats Prouvés</span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#3159B7] leading-tight">
                Des Bienfaits
                <br />
                <span className="text-[#1A78C8]">Visibles</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Nos formules sont développées avec des experts dentaires pour des résultats mesurables et durables
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-[#F8FBFF] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#1A78C8]/10"
                >
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${benefit.color}15` }}
                  >
                    <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#3159B7] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Stat */}
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                    style={{ 
                      backgroundColor: `${benefit.color}15`,
                      color: benefit.color 
                    }}
                  >
                    {benefit.stat}
                  </div>

                  {/* Hover Glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                    style={{ backgroundColor: `${benefit.color}10` }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1A78C8] to-[#3DB7FF] text-white font-bold rounded-2xl shadow-lg shadow-[#1A78C8]/25 hover:shadow-xl hover:shadow-[#1A78C8]/30 transition-all"
              >
                Découvrir la Science
                <Sparkles className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
