"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-gradient-to-r from-rose-600 to-amber-600 text-white py-3 relative z-20"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="text-center flex-1">
                <p className="font-medium">
                  <span className="hidden md:inline">Special Offer:</span> 20% OFF on your first online order! Use code{" "}
                  <span className="font-bold bg-white text-rose-600 px-2 py-0.5 rounded">WELCOME20</span>
                </p>
                <div className="mt-2 md:mt-0 md:inline-block md:ml-4">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20 text-xs md:text-sm"
                  >
                    <Link href="/menu">Order Now</Link>
                  </Button>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-rose-200 ml-4"
                aria-label="Close promotion banner"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
