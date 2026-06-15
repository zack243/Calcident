'use client'

import { motion } from 'framer-motion'
import { Award, ShieldCheck, Leaf, Users, Sparkles, TrendingUp } from 'lucide-react'

const values = [
  {
    id: 1,
    icon: Award,
    title: 'Excellence',
    description: 'Des ingrédients soigneusement sélectionnés et des formules testées cliniquement pour une efficacité optimale.',
    color: '#1A78C8',
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: 'Confiance',
    description: 'Plus de 30 ans d\'expertise dans la santé bucco-dentaire au service des familles marocaines.',
    color: '#3159B7',
  },
  {
    id: 3,
    icon: Leaf,
    title: 'Innovation',
    description: 'Des technologies de pointe pour une fraîcheur longue durée qui accompagne votre journée.',
    color: '#3DB7FF',
  },
  {
    id: 4,
    icon: Users,
    title: 'Accessibilité',
    description: 'Des produits adaptés à chaque âge et chaque besoin, pour que chacun puisse rayonner.',
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

export default function Values() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#F8FBFF] via-white to-[#F8FBFF] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(26, 120, 200, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] border border-[#1A78C8]/5 rounded-full"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A78C8]/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1A78C8]" />
            <span className="text-sm font-semibold text-[#1A78C8] tracking-wide uppercase">Nos Valeurs</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#3159B7] mb-6 tracking-tight">
            Ce qui nous anime
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Chez Calcident, chaque produit est le fruit de nos convictions profondes et de notre engagement pour votre bien-être
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-[24px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${value.color}, transparent)` }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-shadow"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="w-8 h-8" style={{ color: value.color }} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#3159B7] mb-3 group-hover:text-[#1A78C8] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Decorative Line */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: value.color }}
                />
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
                  Rejoignez la famille Calcident
                </h3>
                <p className="text-white/80 text-lg max-w-xl">
                  Des millions de sourires éclatants nous font confiance chaque jour
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1A78C8] font-bold rounded-2xl shadow-xl whitespace-nowrap"
              >
                Découvrir nos produits
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
