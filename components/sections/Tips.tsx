'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Calendar, RefreshCw, Stethoscope, ArrowRight } from 'lucide-react'

const tips = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Brossage Optimal',
    subtitle: '2x par jour, 2 minutes',
    description: 'Utilisez une brosse à dents souple et du dentifrice Calcident. Mouvements doux et circulaires pour un nettoyage en profondeur.',
    color: '#1A78C8',
  },
  {
    id: 2,
    icon: RefreshCw,
    title: 'Renouvellement',
    subtitle: 'Tous les 3 mois',
    description: 'Remplacez votre brosse dès que les poils s\'effilochent. Une brosse usée est inefficace et peut abîmer vos gencives.',
    color: '#3DB7FF',
  },
  {
    id: 3,
    icon: Check,
    title: 'Formule Adaptée',
    subtitle: 'Selon vos besoins',
    description: 'Choisissez la gamme Calcident qui correspond à vos besoins spécifiques : fraîcheur, blancheur ou protection totale.',
    color: '#3159B7',
  },
  {
    id: 4,
    icon: Stethoscope,
    title: 'Contrôle Régulier',
    subtitle: 'Tous les 6 mois',
    description: 'Prévoyez un contrôle dentaire régulier pour une santé bucco-dentaire optimale et une prévention efficace.',
    color: '#1A78C8',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Tips() {
  return (
    <section id="conseils" className="relative py-32 bg-gradient-to-br from-[#1A78C8] via-[#3159B7] to-[#1A78C8] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8FBFF] to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-[300px] h-[300px] border border-[#1A78C8]/5 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Header */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A78C8]/10 rounded-full mb-6"
              >
                <Check className="w-4 h-4 text-[#1A78C8]" />
                <span className="text-sm font-semibold text-white tracking-wide uppercase">Expert Dentaire</span>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Conseils
                <br />
                <span className="text-[#3DB7FF]">d'Experts</span>
              </h2>

              <p className="text-lg text-white/80 leading-relaxed max-w-lg">
                Suivez ces recommandations de nos dentistes partenaires pour maintenir une hygiène bucco-dentaire optimale
              </p>
            </div>

            {/* Tips List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.id}
                  variants={itemVariants}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex gap-5 p-5 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div 
                    className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${tip.color}15` }}
                  >
                    <tip.icon className="w-7 h-7" style={{ color: tip.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-[#1A78C8] text-lg">
                        {tip.title}
                      </h3>
                      <span 
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: `${tip.color}15`, color: tip.color }}
                      >
                        {tip.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#1A78C8] group-hover:translate-x-1 transition-all self-center" />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1A78C8] font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Guide Complet
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:ml-auto">
              {/* Water Effect Visual */}
              <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF]">
                {/* Animated Circles */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#3DB7FF]/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl"
                />
                
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-32 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Floating Card - Reminder */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF] rounded-xl flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#3159B7] text-lg">Rappel</p>
                    <p className="text-sm text-gray-500">Prochain contrôle dans</p>
                    <p className="text-[#1A78C8] font-bold">45 jours</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-[#3DB7FF]/30 rounded-full blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
