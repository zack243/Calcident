'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
    sm: { width: 120, height: 40 },
    md: { width: 150, height: 50 },
    lg: { width: 180, height: 60 }
  }

  const { width, height } = sizes[size]

  return (
    <motion.div 
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Image
        src="/images/logo calcident.png"
        alt="Calcident"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </motion.div>
  )
}
