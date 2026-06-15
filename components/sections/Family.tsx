'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Users, Baby, Smile, Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: "Calcident est devenu indispensable pour toute notre famille. Les enfants adorent le goût frais, et nous apprécions la qualité professionnelle. Un vrai changement pour notre hygiène quotidienne !",
    author: 'Marie L.',
    role: 'Mère de 2 enfants',
    location: 'Casablanca',
    rating: 5,
  },
  {
    id: 2,
    quote: "Depuis que nous utilisons Calcident, mes enfants se brossent les dents sans que je leur rappelle. Le goût menthe est frais mais pas trop fort. Parfait pour toute la famille !",
    author: 'Sophie K.',
    role: 'Mère de famille',
    location: 'Rabat',
    rating: 5,
  },
]

const familyFeatures = [
  { 
    icon: Baby, 
    title: 'Dès 3 ans', 
    description: 'Formule adaptée aux plus petits',
    color: '#3DB7FF',
  },
  { 
    icon: Users, 
    title: 'Toute la famille', 
    description: 'Une gamme pour tous les âges',
    color: '#1A78C8',
  },
  { 
    icon: Heart, 
    title: 'Doux & Efficace', 
    description: 'Respectueux des dents sensibles',
    color: '#3159B7',
  },
  { 
    icon: Smile, 
    title: 'Plaisir garanti', 
    description: 'Des goûts appréciés de tous',
    color: '#1A78C8',
  },
]

const stats = [
  { value: '3+', label: 'Générations', suffix: '' },
  { value: '100', label: 'Satisfaction', suffix: '%' },
  { value: '24', label: 'Protection', suffix: 'h' },
  { value: '0', label: 'Soucis', suffix: '%' },
]

export default function Family() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="famille" className="relative py-32 bg-[#F8FBFF] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 left-20 w-[500px] h-[500px] bg-[#1A78C8]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#3DB7FF]/10 rounded-full blur-[80px]"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6"
          >
            <Heart className="w-4 h-4 text-[#D71920]" />
            <span className="text-sm font-semibold text-[#3159B7] tracking-wide uppercase">Pour Toute la Famille</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#3159B7] mb-6 tracking-tight">
            Un Sourire pour
            <br />
            <span className="text-[#1A78C8]">Chacun</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions adaptées à chaque membre de la famille, pour une hygiène bucco-dentaire optimale au quotidien
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Left - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#3159B7] to-[#1A78C8] rounded-[40px] overflow-hidden shadow-2xl p-8 md:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3DB7FF] rounded-full blur-3xl" />
              </div>

              <div className="relative">
                <Quote className="w-16 h-16 text-white/20 mb-6" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-white text-xl md:text-2xl leading-relaxed mb-8">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[activeTestimonial].author[0]}
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{testimonials[activeTestimonial].author}</p>
                        <p className="text-white/70 text-sm">{testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="flex gap-2 ml-auto">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeTestimonial ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Family Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black text-[#3159B7] mb-4">
                Pensé pour toute la famille
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Des formules adaptées à chaque âge et chaque besoin. De l'enfant à l'adulte, chacun trouve sa solution Calcident.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {familyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h4 className="font-bold text-[#3159B7] mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-[#3159B7] to-[#1A78C8] rounded-[32px] p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-black text-white mb-2">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-white/70 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
