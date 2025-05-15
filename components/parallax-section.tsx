"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [sectionTop, setSectionTop] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop)
      }
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    // Initial calculation
    handleResize()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const calculateParallax = (factor: number) => {
    if (!sectionRef.current) return 0

    const sectionHeight = sectionRef.current.offsetHeight
    const sectionMiddle = sectionTop + sectionHeight / 2
    const windowMiddle = scrollY + windowHeight / 2
    const distanceFromMiddle = windowMiddle - sectionMiddle

    return distanceFromMiddle * factor
  }

  return (
    <section ref={sectionRef} className="py-24 bg-amber-50 relative overflow-hidden">
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
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div
              className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105"
              style={{
                transform: `translateY(${calculateParallax(-0.05)}px)`,
              }}
            >
            <img
  src="/path-to-your-image.jpg"
  alt="Descriptive alt text"
  className="w-full h-[500px] rounded-lg object-cover"
/>

  

            </div>

            {/* <div
              className="absolute -bottom-10 -left-10 w-64 h-64 rounded-lg overflow-hidden shadow-xl hidden md:block"
              style={{
                transform: `translateY(${calculateParallax(-0.08)}px) rotate(${calculateParallax(0.02)}deg)`,
              }}
            >
              {/* <Image
                src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/dal-baati-churma-1.jpg"
                alt="Daal Baati Churma"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              /> */}
            {/* </div> */} */
          </div>

          <div
            className="md:w-1/2"
            style={{
              transform: `translateY(${calculateParallax(0.03)}px)`,
            }}
          >
            <div className="relative">
              <h2 className="text-5xl font-bold mb-6 text-amber-800 font-serif relative z-10">Our Story</h2>
              <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              <div className="absolute -top-10 -left-10 text-9xl font-serif text-amber-200 opacity-20 z-0">1985</div>
            </div>

            <p className="text-xl mb-6 text-amber-900/80 leading-relaxed">
              Founded in 1985, Churma Wala's began as a small family-owned eatery in Jaipur. Our passion for authentic
              Rajasthani cuisine has led us to expand across multiple locations while maintaining the traditional
              flavors and cooking techniques that make our food special.
            </p>

            <p className="text-xl mb-8 text-amber-900/80 leading-relaxed">
              Our recipes have been passed down through generations, preserving the rich culinary heritage of Rajasthan.
              We take pride in using locally-sourced ingredients and traditional cooking methods to create an authentic
              dining experience that transports you to the royal courts of Rajasthan.
            </p>

            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 rounded-full text-lg">
              <Link href="/about">Discover Our Heritage</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
