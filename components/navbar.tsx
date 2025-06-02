"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Catering", href: "/catering" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setScrolled(currentScrollPos > 50)
      const isVisible = isMenuOpen || prevScrollPos > currentScrollPos || currentScrollPos < 50
      setPrevScrollPos(currentScrollPos)
      setVisible(isVisible)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, isMenuOpen])

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => setIsMenuOpen(false)
    window.addEventListener("popstate", handleRouteChange)
    return () => window.removeEventListener("popstate", handleRouteChange)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          scrolled ? "bg-saffron-700/95 backdrop-blur-md shadow-lg py-4" : "bg-saffron-700/80 backdrop-blur-sm py-4",
          visible ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <div
                className={cn(
                  "relative overflow-hidden rounded-full transition-all duration-300 border-2 border-cream-400",
                  scrolled ? "w-10 h-10" : "w-12 h-12",
                )}
              >
                <Image
                  src="images/Logo.jpg"
                  alt="Churma Wala's Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span
                  className={cn(
                    "font-bold text-white font-serif transition-all duration-300",
                    scrolled ? "text-xl" : "text-2xl",
                  )}
                >
                  Churma Wala's
                </span>
                <div className={cn("h-0.5 bg-cream-400 transition-all duration-300", scrolled ? "w-12" : "w-16")}></div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-cream-300 transition-colors font-medium relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cream-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-cream-500 to-terracotta-500 hover:from-cream-600 hover:to-terracotta-600 ml-4 rounded-full px-6 shadow-lg"
              >
                <Link href="/contact#book">Book A Table</Link>
              </Button>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 flex flex-col justify-center items-center group"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out top-3 ${
                      isMenuOpen ? "opacity-0 -left-10" : "opacity-100 left-0"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                      isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-saffron-700 md:hidden"
          >
            <div className="h-full flex flex-col pt-20">
              {/* Menu content */}
              <motion.nav className="flex-1 flex flex-col justify-center items-center px-6">
                <div className="space-y-4 w-full max-w-xs">
                  {navLinks.map((link, index) => (
                    <motion.div key={link.name} variants={itemVariants} custom={index}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-center text-white text-xl font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition duration-300 w-full"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} custom={navLinks.length} className="mt-8">
                  <div className="w-40 h-px bg-white/30 mx-auto mb-6"></div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cream-500 to-terracotta-500 hover:from-cream-600 hover:to-terracotta-600 rounded-full px-8 py-4 text-lg shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/contact#book">Book A Table</Link>
                  </Button>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for content below navbar - reduced height */}
      <div className="h-[0px]" />
    </>
  )
}
