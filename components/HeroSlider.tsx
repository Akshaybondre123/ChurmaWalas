"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    video: "/videos/Churma4.mp4",
    title: "Authentic Rajasthani Cuisine",
    subtitle: "Experience the Royal Flavors Since 1985",
    description:
      "Indulge in the rich culinary heritage of Rajasthan with our traditional recipes passed down through generations.",
  },
  {
    id: 2,
    video: "/videos/Churma.mp4",
    title: "Signature Daal Baati Churma",
    subtitle: "Our Award-Winning Specialty",
    description:
      "Savor the perfect blend of baked wheat balls, lentil curry, and sweetened crushed wheat that defines Rajasthani cuisine.",
  },
  {
    id: 3,
    video: "/videos/Churma01.mp4",
    title: "Elegant Dining Experience",
    subtitle: "Traditional Ambiance with Modern Comfort",
    description:
      "Immerse yourself in the vibrant colors and rich traditions of Rajasthan while enjoying exceptional service.",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* Background media */}
          <div className="absolute inset-0 z-0">
            {slide.video ? (
              <video
                src={slide.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

          {/* Slide content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center px-4 max-w-5xl mx-auto">
              <div
                className={cn(
                  "transition-all duration-1000 transform",
                  index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                )}
              >
                <h2 className="text-rose-400 text-xl md:text-2xl font-medium mb-4 tracking-wider">{slide.subtitle}</h2>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">{slide.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-6 rounded-full text-lg shadow-lg"
                  >
                    <Link href="/menu">View Our Menu</Link>
                  </Button>
                  <Button
  asChild
  size="lg"
  variant="outline"
  className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg"
>
  <Link href="/contact#book">Book A Table</Link>
</Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-rose-500 w-10" : "bg-white/50 hover:bg-white",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
