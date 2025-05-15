"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Phone, Calendar, UtensilsCrossed, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CateringSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://img.freepik.com/free-vector/hand-drawn-indian-pattern_23-2148990017.jpg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
            Catering & Online Orders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Planning a celebration or hosting a special event? We offer pure vegetarian, hygienically prepared
            Rajasthani food for all kinds of functions and festivals — right at your doorstep!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="https://media.istockphoto.com/id/1309024232/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=_zM2kp1lH1YZOEj7SxXRkQHQbKr_kJGpCyPJvfLTSyI="
              alt="Catering Services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Weddings</span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  Birthdays
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Poojas</span>
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  Corporate Events
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium Catering Services</h3>
              <p className="text-white/80">
                Authentic Rajasthani cuisine for all your special occasions, prepared with love and tradition
              </p>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* Catering Services */}
            <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-rose-500 to-amber-500 p-3 rounded-full text-white">
                  <UtensilsCrossed className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-rose-700 mb-2">Catering Services</h3>
                  <p className="text-gray-600 mb-4">
                    Whether it's a wedding, pooja, birthday, or family gathering, place your catering orders with us.
                    We'll ensure top-quality food, timely delivery, and an unforgettable traditional taste.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> Book Catering
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Online Orders */}
            <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-rose-500 to-amber-500 p-3 rounded-full text-white">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-rose-700 mb-2">Order Online</h3>
                  <p className="text-gray-600 mb-4">
                    You can also order our delicious food directly from Swiggy or Zomato for home delivery. Enjoy our
                    authentic Rajasthani dishes from the comfort of your home.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="border-rose-500 text-rose-600 hover:bg-rose-50 rounded-full"
                    >
                      <Link href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="https://logodix.com/logo/1981634.png"
                          alt="Swiggy"
                          width={80}
                          height={24}
                          className="h-6 w-auto"
                        />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-rose-500 text-rose-600 hover:bg-rose-50 rounded-full"
                    >
                      <Link href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                          alt="Zomato"
                          width={80}
                          height={24}
                          className="h-6 w-auto"
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-8 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-rose-500 to-amber-500 p-3 rounded-full text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-rose-700 mb-2">For Inquiries</h3>
                  <p className="text-gray-600 mb-4">
                    For bookings or inquiries, contact us directly — we promise to serve you the best in taste and
                    tradition!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full"
                    >
                      <Link href="tel:+919876543210" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" /> +91 98765 43210
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-rose-500 text-rose-600 hover:bg-rose-50 rounded-full"
                    >
                      <Link href="/contact">Contact Form</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
