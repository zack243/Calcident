'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Mail, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setEmail('')
    }
  }

  return (
    <section id="contact" className="relative py-32 bg-[#F8FBFF] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1A78C8]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#3DB7FF]/10 rounded-full blur-[80px]"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A78C8]/10 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#1A78C8]" />
              <span className="text-sm font-semibold text-[#1A78C8] tracking-wide uppercase">Rejoignez-nous</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#3159B7] mb-6 leading-tight">
              Prêt à révéler votre
              <br />
              <span className="text-[#1A78C8]">plus beau sourire ?</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Découvrez la gamme Calcident et commencez dès aujourd'hui votre voyage vers un sourire éclatant et une fraîcheur longue durée.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                'Testé cliniquement',
                '100% Satisfaction',
                'Formule respectueuse',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Main CTA */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(26, 120, 200, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-gradient-to-r from-[#1A78C8] to-[#3DB7FF] text-white font-bold text-lg rounded-2xl shadow-xl flex items-center gap-3"
            >
              Découvrir Calcident
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right - Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#3159B7] mb-2">
                  Restez informé
                </h3>
                <p className="text-gray-600">
                  Recevez nos conseils d'experts et les dernières nouveautés Calcident
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#1A78C8] focus:ring-2 focus:ring-[#1A78C8]/20 outline-none transition-all text-gray-800"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitted}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
                    submitted 
                      ? 'bg-green-500' 
                      : 'bg-gradient-to-r from-[#1A78C8] to-[#3DB7FF] hover:shadow-lg'
                  }`}
                >
                  {submitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Inscrit avec succès !
                    </span>
                  ) : (
                    'S\'inscrire'
                  )}
                </motion.button>
              </form>

              <p className="text-center text-xs text-gray-400 mt-4">
                En vous inscrivant, vous acceptez notre politique de confidentialité
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
