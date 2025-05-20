"use client"

import { useRef } from "react"
import Image from "next/image"
import { Award, Utensils, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function SpecialtySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
            Our Specialties
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Discover what makes Churma Wala's the most beloved Rajasthani restaurant, where tradition meets excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <Image
              src="/images/MAK_4077.jpg"
              alt="Traditional Recipes"
              width={500}
              height={600}
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-gradient-to-r from-rose-500 to-amber-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:rotate-12">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Authentic Recipes</h3>
              <p className="text-white/80 mb-4">
                Our recipes have been passed down through generations, preserving the authentic flavors of Rajasthan.
              </p>
              <div className="w-10 h-1 bg-rose-500 transform transition-all duration-500 group-hover:w-20"></div>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <Image
              src="data:image/jpeg;base64,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"
              alt="Traditional Cooking"
              width={500}
              height={600}
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-gradient-to-r from-rose-500 to-amber-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:rotate-12">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Traditional Methods</h3>
              <p className="text-white/80 mb-4">
                We use traditional cooking methods and earthenware to enhance the flavors of our dishes.
              </p>
              <div className="w-10 h-1 bg-rose-500 transform transition-all duration-500 group-hover:w-20"></div>
            </div>
          </motion.div>

          <motion.div
            className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <Image
              src="https://media.istockphoto.com/id/92222813/photo/interior-view-of-an-empty-restaurant.jpg?s=612x612&w=0&k=20&c=Dx_9TAwDfykyyxDbHEm90Z47rXiz2wWij6IJGOLN2Ec="
              alt="Royal Experience"
              width={500}
              height={600}
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="bg-gradient-to-r from-rose-500 to-amber-500 rounded-full w-16 h-16 flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:rotate-12">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Royal Experience</h3>
              <p className="text-white/80 mb-4">
                Experience dining like royalty with our carefully crafted ambiance and exceptional service.
              </p>
              <div className="w-10 h-1 bg-rose-500 transform transition-all duration-500 group-hover:w-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
