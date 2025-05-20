"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const featuredDishes = [
  {
    id: 1,
    name: "Daal Baati Churma",
    description:
      "Our signature dish featuring baked wheat balls served with lentil curry and sweetened crushed wheat mixed with ghee and sugar.",
    image: "https://media.istockphoto.com/id/1400659219/photo/rajasthani-dish-cusine-meal-called-dal-baati-churma.jpg?s=612x612&w=0&k=20&c=Zz1Di4fEN4zJpV1zzEGKyoo05i3-auBTNYmkIBBkfCw=",
    category: "Main Course",
    price: "₹280",
  },
  {
    id: 2,
    name: "Pineapple Churma",
    description:
      "A unique twist on the traditional churma, infused with sweet pineapple flavors for a delightful dessert experience.",
    image: "https://media.istockphoto.com/id/503402487/photo/panjeeri-in-clay-pot.jpg?s=612x612&w=0&k=20&c=C-gyudzv8E5ZBOpxAROsutgSSZzmGKAxCreZP4IY1vg=",
    category: "Dessert",
    price: "₹150",
  },
  {
    id: 3,
    name: "Gatte Ki Sabzi",
    description:
      "Gram flour dumplings cooked in a spicy yogurt gravy, a classic Rajasthani delicacy full of flavor and texture.",
    image: "https://media.istockphoto.com/id/1516191093/photo/rajasthani-gatta-curry-or-besan-ke-gatte-ki-sabzi-gatte-are-gram-flour-roundels-or-chickpea.jpg?s=612x612&w=0&k=20&c=Q7Puv8F_xAD4BovG8vxxv5N2JmX5yCO5XziK9UY92-U=",
    category: "Main Course",
    price: "₹220",
  },
]

export default function FoodShowcase() {
  const [hoveredDish, setHoveredDish] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-rose-50 to-amber-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
            Our Signature Dishes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Experience the authentic flavors of Rajasthan with our carefully crafted signature dishes, prepared using
            traditional recipes passed down through generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  fill
                  className={cn(
                    "object-cover transition-all duration-700",
                    hoveredDish === dish.id ? "scale-110 brightness-110" : "scale-100",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {dish.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-rose-600 text-lg font-bold px-4 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-rose-700 group-hover:text-rose-600 transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{dish.description}</p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 group"
                >
                  <Link href="/menu" className="flex items-center justify-center gap-2">
                    View on Menu
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 text-white px-8 py-6 rounded-full text-lg shadow-lg"
          >
            <Link href="/menu">Explore Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
