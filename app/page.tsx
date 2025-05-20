import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import FoodShowcase from "@/components/FoodShowcase"
import TestimonialSlider from "@/components/TestimonialSlider"
import HeroSlider from "@/components/HeroSlider"
import SpecialtySection from "@/components/SpecialtySection"
import ParallaxSection from "@/components/ParallaxSection"
import InstagramFeed from "@/components/InstagramFeed"
import PromoBanner from "@/components/PromoBanner"
import SimplifiedCateringSection from "@/components/SimplifiedCateringSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Specialty Section */}
      <SpecialtySection />

      {/* About Section with Parallax */}
      <ParallaxSection />

      {/* Food Showcase */}
      <FoodShowcase />

      {/* Simplified Catering Section */}
      <SimplifiedCateringSection />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Call to Action */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://img.freepik.com/free-vector/hand-drawn-indian-pattern_23-2148990017.jpg"
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
              Experience the Royal Flavors of Rajasthan
            </h2>
            <p className="text-xl text-amber-700 mb-10 max-w-2xl mx-auto">
              Join us for an unforgettable culinary journey through the rich and diverse flavors of authentic Rajasthani
              cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-6 rounded-full text-lg shadow-lg"
              >
                <Link href="/menu">Explore Our Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-rose-500 text-rose-600 hover:bg-rose-50 px-8 py-6 rounded-full text-lg"
              >
                <Link href="/contact#book">Book A Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
