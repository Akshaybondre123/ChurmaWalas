"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FeaturedSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
            Discover Our Restaurant
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Experience the authentic flavors of Rajasthan in a setting that combines traditional elegance with modern
            comfort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl h-[500px] group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/dal-baati-churma-1.jpg"
              alt="Signature Dishes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Signature Dishes</h3>
              <p className="mb-4 text-white/80">
                Discover our award-winning Rajasthani specialties prepared with authentic recipes
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl h-[500px] group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://media.istockphoto.com/id/1159992039/photo/indian-restaurant-with-colorful-traditional-interior.jpg?s=612x612&w=0&k=20&c=Xvg42DR1Z7WxZAla6MoMkDqYGFO7Y2da6Wy9ZdBnDLE="
              alt="Elegant Ambiance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Elegant Ambiance</h3>
              <p className="mb-4 text-white/80">
                Immerse yourself in the vibrant colors and rich traditions of Rajasthan
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full"
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl h-[500px] group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="https://media.istockphoto.com/id/1045464882/photo/portrait-of-senior-indian-rajasthani-man-with-turban.jpg?s=612x612&w=0&k=20&c=Uc0Oi3_LRKytwX_O8Wl5LlHEwv9ixps3wVHwizQM4IM="
              alt="Our Heritage"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Heritage</h3>
              <p className="mb-4 text-white/80">
                Learn about our journey and commitment to authentic Rajasthani cuisine since 1985
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
