'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Shield, ArrowRight, Check } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Calcident Fresh',
    subtitle: 'Fraîcheur Intense',
    description: 'Une explosion de fraîcheur qui dure 12 heures. La formule préférée des professionnels.',
    features: ['12h Fraîcheur', 'Menthe Cryo', 'Protection Email'],
    color: '#1A78C8',
    gradient: 'from-[#1A78C8] to-[#3DB7FF]',
    bgGradient: 'from-[#1A78C8]/10 to-[#3DB7FF]/5',
    badge: 'Best-Seller',
    image: '/images/product.png',
  },
  {
    id: 2,
    name: 'Calcident White',
    subtitle: 'Blancheur Éclat',
    description: 'Technologie blanchissante avancée pour un sourire visiblement plus blanc en 2 semaines.',
    features: ['Blancheur +3 tons', 'Sans Peroxyde', 'Dents Sensibles'],
    color: '#3159B7',
    gradient: 'from-[#3159B7] to-[#1A78C8]',
    bgGradient: 'from-[#3159B7]/10 to-[#1A78C8]/5',
    badge: 'Nouveau',
    image: '/images/product pack.png',
  },
  {
    id: 3,
    name: 'Calcident Total',
    subtitle: 'Protection 360°',
    description: 'La protection complète pour toute la famille. Anti-caries, anti-plaque, gencives saines.',
    features: ['Protection Totale', 'Anti-Caries', 'Famille'],
    color: '#3DB7FF',
    gradient: 'from-[#3DB7FF] to-[#1A78C8]',
    bgGradient: 'from-[#3DB7FF]/10 to-[#1A78C8]/5',
    badge: 'Famille',
    image: '/images/Product Box .png',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  return (
    <section id="produits" className="relative py-32 bg-[#F8FBFF] overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 right-20 w-[400px] h-[400px] bg-[#1A78C8]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 left-20 w-[300px] h-[300px] bg-[#3DB7FF]/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A78C8]/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1A78C8]" />
            <span className="text-sm font-semibold text-[#1A78C8] tracking-wide uppercase">Gamme Complète</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#3159B7] mb-6 tracking-tight">
            Nos Produits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Des formules innovantes développées avec les experts pour des résultats visibles
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className={`relative bg-white rounded-[32px] overflow-hidden shadow-xl transition-all duration-500 ${
                hoveredProduct === product.id ? 'shadow-2xl scale-[1.02]' : ''
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glow Effect */}
                <div 
                  className="absolute -inset-px rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${product.color}40, transparent 70%)` }}
                />

                {/* Content */}
                <div className="relative p-8">
                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span 
                      className="px-3 py-1 text-xs font-bold text-white rounded-full"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="relative h-[280px] mb-6 flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: hoveredProduct === product.id ? -10 : 0,
                        scale: hoveredProduct === product.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                    
                    {/* Glow behind product */}
                    <div 
                      className="absolute w-40 h-40 rounded-full blur-3xl -z-10 opacity-40"
                      style={{ backgroundColor: product.color }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-[#3159B7] mb-1">
                        {product.name}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {product.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                        >
                          <Check className="w-3 h-3" style={{ color: product.color }} />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full mt-4 py-4 rounded-xl font-bold text-white bg-gradient-to-r ${product.gradient} shadow-lg transition-all duration-300 group-hover:shadow-xl flex items-center justify-center gap-2`}
                    >
                      Découvrir
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-r from-[#3159B7] to-[#1A78C8] rounded-[32px] p-10 md:p-14 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3DB7FF] rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                  Trouvez votre formule idéale
                </h3>
                <p className="text-white/80 text-lg max-w-xl">
                  Notre questionnaire personnalisé vous aide à choisir le produit parfait pour vos besoins
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1A78C8] font-bold rounded-2xl shadow-xl flex items-center gap-3 whitespace-nowrap"
              >
                <Sparkles className="w-5 h-5" />
                Guide Personnalisé
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
