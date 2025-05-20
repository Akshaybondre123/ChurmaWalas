"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { motion, useInView } from "framer-motion"

const instagramPosts = [
  {
    id: 1,
    video: "/videos/VVV.mp4", // Add your video here (must be in /public)
    likes: 312,
    comments: 27,
  },
  {
    id: 2,
    video: "/videos/V2.mp4",
    likes: 245,
    comments: 18,
  },
  {
    id: 3,
    video: "/videos/V3.mp4",
    likes: 189,
    comments: 12,
  },
  {
    id: 4,
    video: "/videos/V4.mp4",
    likes: 302,
    comments: 24,
  },
  {
    id: 5,
    video: "/videos/V5.mp4",
    likes: 276,
    comments: 31,
  },
  {
    id: 6,
    video: "/videos/Churma.mp4",
    likes: 198,
    comments: 15,
  },
]

export default function InstagramFeed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-6 w-6 text-rose-600" />
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
              Follow Us on Instagram
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest dishes, events, and behind-the-scenes moments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group relative overflow-hidden rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square relative">
                {post.video ? (
                  <video
                    src={post.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={`Instagram post ${post.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                  <div className="flex items-center justify-between text-white text-sm">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 font-medium"
          >
            <Instagram className="h-5 w-5" />
            @churmawalas
          </Link>
        </div>
      </div>
    </section>
  )
}
