import Image from "next/image"
import Link from "next/link"
import { Award, Users, Utensils, Clock, Star, ChefHat, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-teal-50 to-green-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-blue-500 rounded-full opacity-5 blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-teal-500 rounded-full opacity-5 blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-green-600 rounded-full opacity-5 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-teal-500 rounded-full opacity-20 blur-3xl"></div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 mb-4 font-serif relative z-10 drop-shadow-sm">
            Our Colorful Journey
          </h1>
          <div className="w-40 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 mx-auto mb-6 rounded-full shadow-sm"></div>
          <p className="text-gray-700 max-w-2xl mx-auto relative z-10 text-lg">
            Discover the story behind Churma Wala's, our passion for authentic Rajasthani cuisine, and our commitment to
            preserving the rich culinary heritage of Rajasthan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative z-10">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-70 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-200 rounded-full opacity-70 -z-10"></div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-6 font-serif">
              Our Colorful Story
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-teal-500 mb-6 rounded-full"></div>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Founded in 1985 by Shri Mohan Singh Rathore, Churma Wala's began as a small family-owned eatery in the
              heart of Jaipur. What started as a humble establishment with just five tables has now grown into one of
              the most beloved Rajasthani restaurant chains in the region.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Our founder's vision was simple: to share the authentic flavors of Rajasthan with the world while
              preserving the traditional cooking techniques that make our cuisine so special. Three generations later,
              we continue to honor this vision by using recipes that have been passed down through our family.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Over the years, we've expanded to multiple locations across Rajasthan, but our commitment to quality,
              authenticity, and warm hospitality remains unchanged. Each branch of Churma Wala's offers the same
              exceptional dining experience that our customers have come to love and expect.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-teal-300 rounded-2xl transform rotate-3 scale-95 opacity-40 blur-sm"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white transform hover:rotate-2 transition-transform duration-500">
           <img
  src="/path-to-your-image.jpg"
  alt="Descriptive alt text"
  className="w-full h-[500px] rounded-lg object-cover"
/>



              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium text-teal-300">Our Founder</p>
                <h3 className="text-2xl font-bold">Shri Mohan Singh Rathore</h3>
                <p className="text-white/80 text-sm">Established in 1985</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full p-4 shadow-lg text-white">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-blue-500 to-teal-500 p-12 rounded-2xl mb-16 overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://img.freepik.com/free-vector/hand-drawn-indian-pattern_23-2148990017.jpg')] opacity-10"></div>
          <h2 className="text-4xl font-bold text-white mb-8 text-center font-serif relative z-10 drop-shadow-md">
            What Makes Us Special
          </h2>
          <div className="w-32 h-2 bg-white mx-auto mb-8 rounded-full shadow-sm"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <Card className="overflow-hidden border-none bg-white/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-blue-700">Authentic Recipes</h3>
                <p className="text-gray-600 text-lg">
                  Our recipes have been passed down through generations, preserving the authentic flavors of Rajasthan.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-white/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-blue-600 to-teal-500"></div>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Utensils className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-teal-700">Traditional Cooking</h3>
                <p className="text-gray-600 text-lg">
                  We use traditional cooking methods and earthenware to enhance the flavors of our dishes.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-white/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-teal-500 to-teal-600"></div>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-teal-700">Family Atmosphere</h3>
                <p className="text-gray-600 text-lg">
                  We treat every customer like family, offering warm hospitality and personalized service.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-none bg-white/90 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-teal-600 to-green-500"></div>
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-600 to-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-700">Time-Honored Tradition</h3>
                <p className="text-gray-600 text-lg">
                  With over 35 years of experience, we've perfected the art of Rajasthani cuisine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 mb-8 text-center font-serif">
            Our Culinary Philosophy
          </h2>
          <div className="w-40 h-2 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 mx-auto mb-8 rounded-full shadow-sm"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-teal-300 rounded-2xl transform -rotate-3 scale-95 opacity-40 blur-sm"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white transform hover:rotate-2 transition-transform duration-500">
                <Image
                  src="https://media.istockphoto.com/id/479955752/photo/earthenware.jpg?s=612x612&w=0&k=20&c=m5tB-x29iEdUo0pSTDyOuV2_hG4MHgcDZDhzl8ymRzY="
                  alt="Traditional Rajasthani cooking"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium text-teal-300">Traditional Methods</p>
                  <h3 className="text-2xl font-bold">Clay Pot Cooking</h3>
                  <p className="text-white/80 text-sm">Enhancing flavors the traditional way</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-teal-500 to-green-500 rounded-full p-4 shadow-lg text-white">
                <ChefHat className="h-8 w-8" />
              </div>
            </div>
            <div className="order-1 md:order-2 relative z-10">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-200 rounded-full opacity-70 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-70 -z-10"></div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                At Churma Wala's, we believe that food is not just about taste; it's about culture, tradition, and
                bringing people together. Our culinary philosophy is rooted in three core principles:
              </p>
              <ul className="space-y-8 mb-6">
                <li className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-blue-700 mb-2">Authenticity</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      We never compromise on the authenticity of our recipes. Each dish is prepared according to
                      traditional methods to ensure the true flavors of Rajasthan.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-teal-700 mb-2">Quality Ingredients</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      We source the finest local ingredients, many of which come from small farms across Rajasthan,
                      supporting local communities while ensuring the best quality.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-green-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-green-700 mb-2">Innovation with Respect</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      While we honor tradition, we also embrace innovation. Dishes like our Pineapple Churma represent
                      our ability to create new flavors while respecting traditional techniques.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl transform -rotate-1 scale-95 opacity-90"></div>
          <div className="relative p-16 rounded-2xl shadow-2xl">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-12 w-12 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                ))}
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 font-serif pt-8 drop-shadow-md">Visit Us Today!</h2>
            <div className="w-24 h-2 bg-white mx-auto mb-6 rounded-full shadow-sm"></div>
            <p className="text-white mb-8 max-w-2xl mx-auto leading-relaxed text-lg">
              We invite you to experience the rich flavors and warm hospitality of Churma Wala's. Whether you're a local
              or a tourist, our doors are always open to those who appreciate authentic Rajasthani cuisine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-teal-700 hover:bg-white/90 border-none shadow-lg text-lg px-8 py-6"
              >
                <Link href="/menu">View Our Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Link href="/contact">Book A Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
