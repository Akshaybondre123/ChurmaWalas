"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Gallery data
const galleryItems = {
  food: [
    {
      id: 1,
      title: "Daal Baati Churma",
      image: "https://media.istockphoto.com/id/695148572/photo/traditional-rajasthani-food-daal-baati-churma-indian-food.jpg?s=612x612&w=0&k=20&c=PsZhEt2uuH91Ni6TKyDqVy91V-XhpqwkLL49OOGam3M=",
      type: "image",
      likes: 245,
    },
    {
      id: 2,
      title: "Pineapple Churma",
      image: "https://media.istockphoto.com/id/696977540/photo/traditional-rajasthani-food-daal-baati-churma-indian-food.jpg?s=612x612&w=0&k=20&c=S2GsSFVd-mzkVQMlunw7seiQ-tKrZRgCZQL0mdmC5vc=",
      type: "image",
      likes: 189,
    },
    {
      id: 3,
      title: "Gatte Ki Sabzi",
      image: "https://media.istockphoto.com/id/1516191603/photo/rajasthani-gatta-curry-or-besan-ke-gatte-ki-sabzi-gatte-are-gram-flour-roundels-or-chickpea.jpg?s=612x612&w=0&k=20&c=EfrEHWLgBmT1jm2RsjUktMSUq_ViHeNnEZ0b46p6Ido=",
      type: "image",
      likes: 302,
    },
    {
      id: 4,
      title: "Khichadi",
      image: "https://media.istockphoto.com/id/1084191038/photo/masala-rice-or-masale-bhat-is-a-spicy-vegetable-fried-rice-biryani-or-pulav-usually-made.jpg?s=612x612&w=0&k=20&c=sFt2TbkwylVjjE46H9Q3WRJfSJu6QAJHH3DBIglTasw=",
      type: "image",
      likes: 276,
    },
    {
      id: 5,
      title: "Ker Sangri",
      image: "https://media.istockphoto.com/id/1840096951/photo/dessert-made-with-egg-yolk-popular-in-the-malabar-region-known-as-muttamala.jpg?s=612x612&w=0&k=20&c=k9HE_n9I5gVs1Pzk-pdbb9nAIm1AJAL8DP1G25APGTU=",
      type: "image",
      likes: 198,
    },
    {
      id: 6,
      title: "Pyaaz Kachori",
      image: "https://media.istockphoto.com/id/1127525314/photo/indian-famous-street-food-kachori.jpg?s=612x612&w=0&k=20&c=uu9-wbsDlx3LXr9yXbvNUGDOFN7-KTmk0L-O75c7lp8=",
      type: "image",
      likes: 221,
    },
  ],
  restaurant: [
    {
      id: 7,
      title: "Jaipur Branch Interior",
      image: "/images/gallery/restaurant-1.png",
      type: "image",
      likes: 156,
    },
    {
      id: 8,
      title: "Udaipur Branch Exterior",
      image: "/images/gallery/restaurant-2.png",
      type: "image",
      likes: 178,
    },
    {
      id: 9,
      title: "Private Dining Area",
      image: "/images/gallery/restaurant-3.png",
      type: "image",
      likes: 203,
    },
    {
      id: 10,
      title: "Outdoor Seating",
      image: "/images/gallery/restaurant-4.png",
      type: "image",
      likes: 167,
    },
  ],
  events: [
    {
      id: 11,
      title: "Rajasthani Food Festival",
      image: "/RajaE.jpg",
      type: "image",
      likes: 234,
    },
    {
      id: 12,
      title: "Live Cooking Demonstration",
      image: "/Cook.jpg",
      type: "image",
      likes: 187,
    },
    {
      id: 13,
      title: "Traditional Dance Performance",
      image: "/Dan.jpg",
      type: "image",
      likes: 256,
    },
  ],
 videos: [
    {
      id: 14,
      title: "Interiour",
      type: "video",
      videoUrl:
        "/Churma01.mp4",
    },
    {
      id: 15,
      title: "Chef's Special: Churma",
      type: "video",
      videoUrl:
        "/V3.mp4",
    },
    {
      id: 16,
      title: "Rajasthani Food",
      type: "video",
      videoUrl:
        "/Churma.mp4",
    },
  ],
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src?: string
    title: string
    type: "image" | "video"
    videoUrl?: string
  } | null>(null)

  const [activeTab, setActiveTab] = useState("food")
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-red-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-4 font-serif relative z-10 drop-shadow-sm">
            Our Colorful Gallery
          </h1>
          <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto mb-6 rounded-full shadow-sm"></div>
          <p className="text-gray-700 max-w-2xl mx-auto relative z-10 text-lg">
            Explore our visual journey through delicious Rajasthani cuisine, restaurant ambiance, and special events at
            Churma Wala's.
          </p>
        </div>

        <Tabs defaultValue="food" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <div className="mb-8 overflow-x-auto pb-2">
           <TabsList className="inline-flex flex-nowrap border-b-2 border-pink-200 w-auto min-w-full sm:min-w-0">
              <TabsTrigger
                value="food"
                className="px-4 sm:px-8 py-1 text-lg font-medium rounded-t-lg transition-all duration-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white hover:bg-purple-500/10 whitespace-nowrap"
              >
                Food
              </TabsTrigger>
              <TabsTrigger
                value="restaurant"
                className="px-5 py-1 text-lg font-medium rounded-t-lg transition-all duration-300 data-[state=active]:bg-pink-600 data-[state=active]:text-white hover:bg-pink-500/10"
              >
                Restaurant
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="px-5 py-1 text-lg font-medium rounded-t-lg transition-all duration-300 data-[state=active]:bg-red-600 data-[state=active]:text-white hover:bg-red-500/10"
              >
                Events
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="px-5 py-1 text-lg font-medium rounded-t-lg transition-all duration-300 data-[state=active]:bg-orange-600 data-[state=active]:text-white hover:bg-orange-500/10"
              >
                Videos
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="food" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {isLoaded &&
                  galleryItems.food.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl"
                      
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-pink-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white font-bold text-xl">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="restaurant" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {isLoaded &&
                  galleryItems.restaurant.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl"
                     
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-red-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white font-bold text-xl">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="events" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {isLoaded &&
                  galleryItems.events.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl"
                      
                    >
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-orange-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white font-bold text-xl">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </TabsContent>

           <TabsContent value="videos" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {isLoaded &&
                  galleryItems.videos.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-xl"
                     
                    >
                      <div className="aspect-[4/3] relative">
                        <video
                          ref={(el) => (videoRefs.current[item.id] = el)}
                          src={item.videoUrl}
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-yellow-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-white font-bold text-xl">{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </TabsContent>
        </Tabs>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                className="relative max-w-4xl w-full"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-12 right-0 text-white hover:bg-white/10 z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>

                {selectedImage.type === "image" ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl">
                    <Image
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-red-900 flex flex-col items-center justify-center rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl">
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      <div className="w-0 h-0 border-t-12 border-t-transparent border-l-24 border-l-white border-b-12 border-b-transparent ml-2"></div>
                    </div>
                    <p className="text-white text-center text-2xl font-bold">{selectedImage.title}</p>
                    <p className="text-white/80 text-center mt-2">
                      (In a real implementation, this would be a video player)
                    </p>
                  </div>
                )}

                <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500 rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-500 rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-red-500 rounded-full opacity-5 blur-3xl -z-10"></div>
      </div>
    </div>
  )
}
