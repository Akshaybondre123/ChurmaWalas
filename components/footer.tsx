import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-rose-900 to-amber-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://img.freepik.com/free-vector/mandala-illustration_53876-81805.jpg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="bg-gradient-to-r from-rose-800/50 to-amber-800/50 backdrop-blur-sm p-10 rounded-2xl border border-rose-700/30 shadow-xl mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-rose-300 font-serif">Join Our Royal Table</h3>
              <p className="text-amber-100 mb-0">
                Subscribe to our newsletter for exclusive offers, recipes, and updates on special events.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-rose-600/30 text-white placeholder:text-rose-200/70 focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <Button className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-semibold rounded-full px-6 py-4 shadow-lg">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/Logo.jpg"
                alt="Churma Wala's Logo"
                width={50}
                height={50}
                className="rounded-full border-2 border-rose-400"
              />
              <div>
                <span className="font-bold text-2xl font-serif">Churma Wala's</span>
                <div className="h-0.5 w-16 bg-gradient-to-r from-rose-500 to-amber-500"></div>
              </div>
            </Link>
            <p className="text-amber-100/80 mb-6 leading-relaxed">
              Authentic Rajasthani cuisine served with love and tradition since 1985. Experience the royal flavors of
              Rajasthan in an ambiance that reflects our rich cultural heritage.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-800/50 to-amber-800/50 hover:from-rose-700 hover:to-amber-700 p-3 rounded-full transition-colors shadow-lg"
              >
                <Facebook className="h-5 w-5 text-rose-300" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-800/50 to-amber-800/50 hover:from-rose-700 hover:to-amber-700 p-3 rounded-full transition-colors shadow-lg"
              >
                <Instagram className="h-5 w-5 text-rose-300" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-rose-800/50 to-amber-800/50 hover:from-rose-700 hover:to-amber-700 p-3 rounded-full transition-colors shadow-lg"
              >
                <Twitter className="h-5 w-5 text-rose-300" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-rose-300">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "Gallery", href: "/gallery" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-amber-100/80 hover:text-rose-300 transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-0 mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2 text-rose-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-rose-300">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-rose-400" />
                <span className="text-amber-100/80">123 MI Road, Jaipur, Rajasthan 302001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-rose-400" />
                <span className="text-amber-100/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-rose-400" />
                <span className="text-amber-100/80">info@churmawalas.com</span>
              </li>
            </ul>
            <Button
              asChild
              className="mt-6 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full shadow-lg"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-rose-300">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-amber-100/80">Monday - Friday</span>
                <span className="text-rose-300 font-medium">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-amber-100/80">Saturday - Sunday</span>
                <span className="text-rose-300 font-medium">10:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-amber-100/80">Holidays</span>
                <span className="text-rose-300 font-medium">10:00 AM - 11:00 PM</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gradient-to-r from-rose-800/30 to-amber-800/30 rounded-lg border border-rose-700/30">
              <p className="text-rose-300 font-medium">Special Hours During Festivals</p>
              <p className="text-amber-100/80 text-sm">Please check our social media for festival timings</p>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-800/50 mt-16 pt-8 text-center">
          <p className="text-amber-100/60">&copy; {new Date().getFullYear()} Churma Wala's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
