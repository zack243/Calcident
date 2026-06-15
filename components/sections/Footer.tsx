'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ExternalLink, Heart } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  produits: [
    { name: 'Calcident Fresh', href: '#' },
    { name: 'Calcident White', href: '#' },
    { name: 'Calcident Total', href: '#' },
    { name: 'Nouveautés', href: '#' },
  ],
  entreprise: [
    { name: 'À propos', href: '#' },
    { name: 'Notre histoire', href: '#' },
    { name: 'Carrières', href: '#' },
    { name: 'Presse', href: '#' },
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Guide d\'utilisation', href: '#' },
    { name: 'Retours', href: '#' },
  ],
  legal: [
    { name: 'Confidentialité', href: '#' },
    { name: 'Conditions', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Mentions légales', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#3159B7] overflow-hidden">
      {/* Marquee */}
      <div className="relative py-8 border-b border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black text-white/10 mx-8 tracking-tight">
              CALCIDENT • FRAÎCHEUR • CONFIANCE • SOURIRE •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#accueil" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DB7FF] to-[#1A78C8] flex items-center justify-center">
                  <span className="text-white font-black text-xl italic">C</span>
                </div>
                <span className="font-black text-2xl text-white tracking-tight">Calcident</span>
              </div>
            </a>
            <p className="text-white/60 text-sm mb-6 max-w-xs leading-relaxed">
              Votre partenaire santé bucco-dentaire depuis plus de 30 ans. Des produits de qualité pour toute la famille.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#3DB7FF]" />
                <span>Casablanca, Maroc</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 text-[#3DB7FF]" />
                <span>+212 5XX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 text-[#3DB7FF]" />
                <span>contact@calcident.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-white mb-4">Produits</h4>
            <ul className="space-y-2">
              {footerLinks.produits.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#3DB7FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#3DB7FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#3DB7FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#3DB7FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-sm text-white/60 hover:text-[#3DB7FF] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-white/40">Membre du</span>
              <div className="w-16 h-8 bg-white/10 rounded flex items-center justify-center">
                <span className="text-white/80 text-xs font-bold">BNB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p className="flex items-center gap-1">
              © 2025 Calcident. Fait avec <Heart className="w-4 h-4 text-[#D71920] fill-[#D71920]" /> au Maroc
            </p>
            <p>Tous droits réservés</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
