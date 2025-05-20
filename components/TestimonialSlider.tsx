"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { motion, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Jaipur",
    quote:
      "The Daal Baati Churma at Churma Wala's is the best I've ever had! The authentic flavors remind me of my grandmother's cooking. This place is a must-visit for anyone who wants to experience true Rajasthani cuisine.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Mehta",
    location: "Delhi",
    quote:
      "I traveled all the way from Delhi just to try their famous Pineapple Churma, and it was worth every kilometer! The blend of traditional taste with a modern twist is simply amazing. The staff is very friendly too.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Udaipur",
    quote:
      "As a Rajasthani, I'm very particular about my traditional food. Churma Wala's is one of the few restaurants that maintains the authentic taste while ensuring a great dining experience. Their Gatte Ki Sabzi is exceptional!",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Anita Desai",
    location: "Mumbai",
    quote:
      "The ambiance is as authentic as the food. Every corner of the restaurant reflects Rajasthani culture. I especially loved their Laal Maas - perfectly spiced and cooked to perfection. Will definitely come back!",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://img.freepik.com/free-vector/mandala-illustration_53876-81805.jpg"
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
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our valued customers have to say about their dining experience
            at Churma Wala's
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -top-16 -left-16 text-rose-200 opacity-20">
            <Quote className="h-32 w-32" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-10 rounded-2xl shadow-xl">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-rose-200 shadow-lg mb-4">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-xl text-rose-700">{testimonial.name}</h3>
                        <p className="text-amber-600">{testimonial.location}</p>
                        <div className="flex justify-center mt-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-5 h-5",
                                i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300",
                              )}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="md:w-2/3">
                        <p className="text-gray-700 text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center mt-10 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-rose-500 w-10" : "bg-rose-300 hover:bg-rose-400",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
