"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { UtensilsCrossed, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SimplifiedCateringSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-rose-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-500 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-rose-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
            <UtensilsCrossed className="h-8 w-8" />
          </div>

          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
            Catering & Online Orders
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto mb-6"></div>

          <p className="text-lg text-gray-700 mb-8">
            Planning a celebration or hosting a special event? We offer pure vegetarian, hygienically prepared
            Rajasthani food for all kinds of functions and festivals — right at your doorstep!
          </p>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-6 rounded-full text-lg shadow-lg group"
          >
            <Link href="/catering" className="flex items-center gap-2">
              More Inquiry
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
