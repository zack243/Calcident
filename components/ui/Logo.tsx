'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  inverted?: boolean
}

export default function Logo({ 
  className = '', 
  size = 'md', 
  showText = true,
  inverted = false 
}: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' }
  }

  const { icon, text } = sizes[size]

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Logo Icon */}
      <div 
        className="relative flex items-center justify-center rounded-xl overflow-hidden"
        style={{ width: icon, height: icon }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A78C8] to-[#3DB7FF]" />
        
        {/* White stylized C */}
        <svg 
          viewBox="0 0 40 40" 
          className="relative z-10 w-3/4 h-3/4"
          fill="none"
        >
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="28"
            fontWeight="800"
            fontStyle="italic"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            C
          </text>
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <span 
          className={`font-bold ${text} tracking-tight ${inverted ? 'text-white' : ''}`}
          style={inverted ? {} : {
            background: 'linear-gradient(135deg, #1A78C8 0%, #3159B7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Calcident
        </span>
      )}
    </motion.div>
  )
}
