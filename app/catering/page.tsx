import Image from "next/image"
import Link from "next/link"
import { Phone, UtensilsCrossed, Check, Clock, Users, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CateringPage() {
  // Sample catering packages
  const cateringPackages = [
    {
      name: "Royal Rajasthani Feast",
      price: "₹850",
      description: "Our premium package featuring a complete authentic Rajasthani meal experience",
      items: [
        "Daal Baati Churma",
        "Gatte Ki Sabzi",
        "Ker Sangri",
        "Bajra Roti",
        "Missi Roti",
        "Pineapple Churma",
        "Makhaniya Lassi",
      ],
      minGuests: 25,
    },
    {
      name: "Classic Celebration",
      price: "₹650",
      description: "Perfect for medium-sized gatherings with our most popular dishes",
      items: ["Daal Baati Churma", "Gatte Ki Sabzi", "Bajra Roti", "Ghevar", "Rajasthani Chai"],
      minGuests: 15,
    },
    {
      name: "Rajasthani Snacks",
      price: "₹450",
      description: "A selection of traditional Rajasthani snacks for casual gatherings",
      items: ["Pyaaz Kachori", "Mirchi Vada", "Jodhpuri GulabJamun", "Makhaniya Lassi"],
      minGuests: 10,
    },
  ]

  // Sample events we cater to
  const events = [
    {
      name: "Weddings",
      image:
        "/images/CaterWedding.jpg",
    },
    {
      name: "Corporate Events",
      image:
        "/images/Corporate.jpg",
    },
    {
      name: "Birthday Parties",
      image:
        "/images/Birthday.jpg",
    },
    {
      name: "Religious Ceremonies",
      image:
        "/images/Rituals.jpg",
    },
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-rose-700 via-amber-600 to-rose-800">
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400 rounded-full opacity-20 blur-3xl"></div>

          {/* Pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/hand-drawn-indian-pattern_23-2148990017.jpg')] opacity-5"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif drop-shadow-lg">
            Catering Services
          </h1>
          <div className="w-32 h-2 bg-white mx-auto mb-6 rounded-full shadow-md"></div>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Authentic Rajasthani cuisine for all your special occasions, prepared with love and tradition
          </p>
          <Button
  asChild
  size="lg"
  className="bg-white text-rose-700 hover:bg-white/90 px-8 py-6 rounded-full text-lg shadow-lg"
>
  <Link href="#inquiry">Make an Inquiry</Link>
</Button>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
              Catering & Online Orders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              Planning a celebration or hosting a special event? We offer pure vegetarian, hygienically prepared
              Rajasthani food for all kinds of functions and festivals — right at your doorstep!
            </p>
            <p className="text-lg text-gray-700">
              Whether it's a wedding, pooja, birthday, or family gathering, place your catering orders with us. We'll
              ensure top-quality food, timely delivery, and an unforgettable traditional taste.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
            Our Catering Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-gradient-to-r from-rose-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <UtensilsCrossed className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rose-700">Full-Service Catering</h3>
              <p className="text-gray-600">
                Complete setup with servers, chefs, and all necessary equipment for a seamless dining experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-gradient-to-r from-rose-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rose-700">Drop-Off Catering</h3>
              <p className="text-gray-600">
                We deliver freshly prepared food to your venue, ready to serve with disposable serving ware.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-gradient-to-r from-rose-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rose-700">Custom Menus</h3>
              <p className="text-gray-600">
                Personalized menu planning to suit your event theme, dietary requirements, and preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-gradient-to-r from-rose-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-rose-700">Last-Minute Orders</h3>
              <p className="text-gray-600">
                Quick turnaround for urgent catering needs with our efficient preparation process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events We Cater */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
            Events We Cater To
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden h-64 group">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{event.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
            Our Catering Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cateringPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-gradient-to-r from-rose-600 to-amber-600 py-4 px-6">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-white/80 text-sm">Starting from {pkg.price} per person</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <p className="text-sm text-gray-500 mb-2">Includes:</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.items.map((item, i) => (
  <li key={i} className="flex items-start gap-2">
    <Check className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
    <span className="text-gray-800">{item}</span> {/* <-- Changed here */}
  </li>
))}

                  </ul>
                  <p className="text-sm text-gray-500 mb-6">Minimum {pkg.minGuests} guests</p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full"
                  >
                    <Link href="#inquiry">Get Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see what you're looking for? We offer custom packages tailored to your specific needs.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full"
            >
              <Link href="#inquiry">Request Custom Package</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Online Ordering */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
                Order Online
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                You can also order our delicious food directly from Swiggy or Zomato for home delivery. Enjoy our
                authentic Rajasthani dishes from the comfort of your home.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our online menu features all our popular dishes, prepared with the same care and quality as in our
                restaurant.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button
                  asChild
                  className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full px-8 py-6"
                >
                  <Link
                    href="https://www.swiggy.com/menu/398956?source=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Image
                      src="/images/Swiggy1.png"
                      alt="Swiggy"
                      width={100}
                      height={30}
                      className="h-8 w-auto"
                    />
                    Order on Swiggy
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full px-8 py-6"
                >
                  <Link
                    href="https://zomato.onelink.me/xqzv/sndsx7ek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Image
                      src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                      alt="Zomato"
                      width={100}
                      height={30}
                      className="h-8 w-auto"
                    />
                    Order on Zomato
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
  <img
    src="https://media.istockphoto.com/id/1131794659/vector/flat-isometric-vector-concept-of-table-online-reservation-mobile-booking.jpg?s=612x612&w=0&k=20&c=7ExZiylsirYEceJqjgMtjA1207unLtcmkC29lTx1n0k=" // Replace with actual image URL
    alt="Founder or Restaurant"
    className="w-full h-full object-cover"
  />
</div>

              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-8 rounded-full w-32 h-32 flex items-center justify-center">
                  {/* <div className="text-white text-6xl font-bold">24/7</div> */}
                {/* </div>
              </div> */} */
              {/* <div className="absolute bottom-6 left-6 right-6 text-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                  {/* <h3 className="text-white text-xl font-bold">Online Delivery Available</h3> */}
                  {/* <p className="text-white/90">Order anytime, anywhere</p> */}
                {/* </div>
              </div> */} */
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-16 bg-gradient-to-r from-rose-50 to-amber-50">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-amber-700 font-serif">
        Make an Inquiry
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto mb-8"></div>
      <p className="text-center text-gray-700 mb-8">
        For bookings or inquiries, contact us directly — we promise to serve you the best in taste and tradition!
      </p>

      <div className="bg-gradient-to-br from-rose-100 to-amber-100 p-8 rounded-xl shadow-xl">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-rose-800 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-rose-800 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-rose-800 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                placeholder="Your Phone"
                required
              />
            </div>
            <div>
              <label htmlFor="event-type" className="block text-rose-800 font-semibold mb-2">
                Event Type
              </label>
              <select
                id="event-type"
                className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                required
              >
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="religious">Religious Ceremony</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-rose-800 font-semibold mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-rose-800 font-semibold mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                id="guests"
                className="w-full px-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                placeholder="Approximate number"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-rose-800 font-semibold mb-2">
              Additional Information
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
              placeholder="Tell us more about your event and any specific requirements"
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-4 rounded-full text-lg font-medium"
          >
            Submit Inquiry
          </Button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-4">Prefer to talk to us directly?</p>
        <Button
          asChild
          className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 rounded-full"
        >
          <Link href="tel:+919876543210" className="flex items-center gap-2 justify-center text-white py-2 px-4">
            <Phone className="h-5 w-5" /> +91 8946951963
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
