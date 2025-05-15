import Image from "next/image"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Menu categories and items
const menuCategories = [
  { id: "starters", name: "Starters" },
  { id: "main-course", name: "Main Course" },
  { id: "breads", name: "Breads & Rice" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
]

const menuItems = {
  starters: [
    {
      id: 1,
      name: "Pyaaz Kachori",
      description: "Deep-fried pastry filled with spicy onion mixture, served with tangy tamarind chutney.",
      price: "₹120",
      image: "https://media.istockphoto.com/id/1127525314/photo/indian-famous-street-food-kachori.jpg?s=612x612&w=0&k=20&c=uu9-wbsDlx3LXr9yXbvNUGDOFN7-KTmk0L-O75c7lp8=",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 2,
      name: "Mirchi Vada",
      description: "Green chillies stuffed with spiced potato mixture, battered and deep-fried.",
      price: "₹100",
      image: "https://media.istockphoto.com/id/1137738109/photo/image-of-popular-traditional-indian-street-food-chilli-pakora-mirch-pakoda-mirchi-bhaje-green.jpg?s=612x612&w=0&k=20&c=aANbKj1uoLMZd2vHkAPpjmNXvT3E_0xEb_PoKdKN2yM=",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 3,
      name: "Jodhpuri GulabJamun",
      description: "Minced lamb mixed with aromatic spices, grilled to perfection.",
      price: "₹250",
      image: "https://media.istockphoto.com/id/1055082232/photo/delicious-traditional-indian-sweet-gulab-jamun-in-bowl-on-bamboo-mat-background.jpg?s=612x612&w=0&k=20&c=UH3_z5qhcllpovgno8NSAG0NA4M_X-fLgm3LQ19NmUs=",
      isVeg: false,
      isSpicy: true,
    },
  ],
  "main-course": [
    {
      id: 4,
      name: "Daal Baati Churma",
      description:
        "Our signature dish featuring baked wheat balls served with lentil curry and sweetened crushed wheat mixed with ghee and sugar.",
      price: "₹280",
      image: "https://media.istockphoto.com/id/908651174/photo/from-bati-choorma.jpg?s=612x612&w=0&k=20&c=LU62cV5Rjfnr-PXCUQPWtIC2su2I7-zgBEOsR2XW9eg=",
      isVeg: true,
      isSpicy: false,
      isSignature: true,
    },
    {
      id: 5,
      name: "Gatte Ki Sabzi",
      description: "Gram flour dumplings cooked in a spicy yogurt gravy, a classic Rajasthani delicacy.",
      price: "₹220",
      image: "https://media.istockphoto.com/id/1516191604/photo/rajasthani-gatta-curry-or-besan-ke-gatte-ki-sabzi-gatte-are-gram-flour-roundels-or-chickpea.jpg?s=612x612&w=0&k=20&c=u_dix1NhFOFYj1SORovfQfPHYAT3JS0336AF6E8m4EY=",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 6,
      name: "Khichadi",
      description: "Fiery red mutton curry cooked with mathania red chillies and other spices.",
      price: "₹350",
      image: "https://media.istockphoto.com/id/1421270982/photo/dal-khichadi-or-masala-khichdi-is-a-tasty-indian-recipe-made-of-mixed-lentils-rice-combined.jpg?s=612x612&w=0&k=20&c=EpidCgGtmRw1zpKyLDXi25q3fKUMrMG4VZfMEl9C0DQ=",
      isVeg: false,
      isSpicy: true,
    },
    {
      id: 7,
      name: "Ker Sangri",
      description: "Traditional Rajasthani dish made with dried berries and beans, cooked with spices.",
      price: "₹240",
      image: "https://media.istockphoto.com/id/1349387778/photo/indian-sweet-and-savory-called-as-bombay-mixture-prepared-during-festivals.jpg?s=612x612&w=0&k=20&c=zsDm3bR-upKY-IwZ8dQmKa3yP4orelb3-MkNCJSBHvg=",
      isVeg: true,
      isSpicy: false,
    },
  ],
  breads: [
    {
      id: 8,
      name: "Bajra Roti",
      description: "Traditional millet flatbread, a staple in Rajasthani cuisine.",
      price: "₹50",
      image: "https://media.istockphoto.com/id/1156279707/photo/bajra-sorghum-ki-roti-or-pearl-millet-flat-bread.jpg?s=612x612&w=0&k=20&c=2OmcjJ9OHU61Jny2kQZ4-n1bkqwENDXbiOILSNUIRy4=",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 9,
      name: "Missi Roti",
      description: "Flatbread made with a mix of wheat and gram flour, flavored with spices.",
      price: "₹60",
      image: "https://media.istockphoto.com/id/1291039334/photo/close-up-of-delicious-indian-tiffin-punjabi-cuisine-shuddha-desi-ghee-gajar-ka-paratha-flat.jpg?s=612x612&w=0&k=20&c=5_BoTzADwodwsq0GpOyFYIbInSJt_rAS-iDNbCC08Zk=",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 10,
      name: "Jeera Rice",
      description: "Fragrant basmati rice tempered with cumin seeds.",
      price: "₹120",
      image: "https://media.istockphoto.com/id/1315887800/photo/indian-dish-made-of-basmati-rice-flavoured-with-cumin-seeds-and-spices-served-with-bottle.jpg?s=612x612&w=0&k=20&c=54lH8T23K_obcQ2RkmNaiWJbfa_mMeCs_DeqIOg3jUU=",
      isVeg: true,
      isSpicy: false,
    },
  ],
  desserts: [
    {
      id: 11,
      name: "Pineapple Churma",
      description: "A unique twist on the traditional churma, infused with sweet pineapple flavors.",
      price: "₹150",
      image: "https://media.istockphoto.com/id/696977540/photo/traditional-rajasthani-food-daal-baati-churma-indian-food.jpg?s=612x612&w=0&k=20&c=S2GsSFVd-mzkVQMlunw7seiQ-tKrZRgCZQL0mdmC5vc=",
      isVeg: true,
      isSpicy: false,
      isSignature: true,
    },
    {
      id: 12,
      name: "Ghevar",
      description: "Disc-shaped sweet cake made with flour and soaked in sugar syrup.",
      price: "₹180",
      image: "https://media.istockphoto.com/id/1897169977/photo/ghewar-traditional-indian-delicious-sweet-close-up-shot-in-details-from-different-perceptive.jpg?s=612x612&w=0&k=20&c=gE5_VJyfLZkCSP4dHgAsIpx5O1t1BIyZmqJeYKt73GI=",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 13,
      name: "Malpua",
      description: "Sweet pancakes dipped in sugar syrup, served with rabri.",
      price: "₹160",
      image: "https://media.istockphoto.com/id/843599766/photo/indian-sweet-malpua.jpg?s=612x612&w=0&k=20&c=OKowKDv_2K5SEIxRSLLqPTFiio3IFWUCkAuX_hrGMpo=",
      isVeg: true,
      isSpicy: false,
    },
  ],
  beverages: [
    {
      id: 14,
      name: "Makhaniya Lassi",
      description: "Creamy buttermilk drink with a hint of cardamom and saffron.",
      price: "₹120",
      image: "https://media.istockphoto.com/id/806310852/photo/authentic-indian-cold-drink-made-up-of-curd-milk-malai-called-lassi.jpg?s=612x612&w=0&k=20&c=GuPwqqGvmlgFY-a3-8ArP2amNTW44A_zbucWeVyxdxs=",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 15,
      name: "Thandai",
      description: "Cooling milk drink flavored with nuts, seeds, and spices.",
      price: "₹140",
      image: "https://media.istockphoto.com/id/909946730/photo/traditional-inian-thandai-or-sardai.jpg?s=612x612&w=0&k=20&c=qXZke_TeEb7_9K6gICl8JakyD406fmrF5v_5dpB2q7o=",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 16,
      name: "Rajasthani Chai",
      description: "Strong tea brewed with milk, cardamom, and other spices.",
      price: "₹80",
      image: "https://media.istockphoto.com/id/1185465206/photo/tea.jpg?s=612x612&w=0&k=20&c=Vekngxr8Q-guj2McmXCCMrNGuwKoRA3cxKmRd2ohF_4=",
      isVeg: true,
      isSpicy: false,
    },
  ],
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-50 to-red-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 mb-4 font-serif relative z-10 drop-shadow-sm">
            Our Delicious Menu
          </h1>
          <div className="w-40 h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mb-6 rounded-full shadow-sm"></div>
          <p className="text-gray-700 max-w-2xl mx-auto relative z-10 text-lg">
            Explore our extensive menu featuring authentic Rajasthani dishes prepared with traditional recipes and the
            finest ingredients. From our signature Daal Baati Churma to the unique Pineapple Churma, there's something
            for everyone.
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full">
         <div className="mb-8 text-center overflow-x-auto pb-2">
            <TabsList className="inline-flex flex-nowrap border-b-2 border-orange-200 w-auto min-w-full sm:min-w-0">
              {menuCategories.map((category, index) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`px-4 sm:px-6 py-1 text-base sm:text-lg font-medium rounded-t-lg transition-all duration-300 whitespace-nowrap ${
                    index === 0
                      ? "data-[state=active]:bg-red-600 data-[state=active]:text-white hover:bg-red-500/10"
                      : index === 1
                        ? "data-[state=active]:bg-orange-600 data-[state=active]:text-white hover:bg-orange-500/10"
                        : index === 2
                          ? "data-[state=active]:bg-yellow-600 data-[state=active]:text-white hover:bg-yellow-500/10"
                          : index === 3
                            ? "data-[state=active]:bg-pink-600 data-[state=active]:text-white hover:bg-pink-500/10"
                            : "data-[state=active]:bg-purple-600 data-[state=active]:text-white hover:bg-purple-500/10"
                  }`}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className="overflow-hidden border-none rounded-xl shadow-[0_10px_30px_rgba(249,115,22,0.2)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative h-60">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      {item.isSignature && (
                        <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white border-none px-4 py-1.5 text-sm font-bold shadow-lg">
                          SIGNATURE DISH ⭐
                        </Badge>
                      )}
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-white drop-shadow-md">{item.name}</h3>
                        <span className="font-bold text-xl text-white bg-gradient-to-r from-red-600 to-orange-600 px-4 py-1 rounded-full shadow-md">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 bg-gradient-to-br from-white to-orange-50">
                      <p className="text-gray-700 mb-4 text-lg">{item.description}</p>
                      <div className="flex gap-2">
                        {item.isVeg ? (
                          <Badge
                            variant="outline"
                            className="border-2 border-green-500 text-green-600 bg-green-50 px-3 py-1 text-sm font-medium"
                          >
                            Vegetarian 🌱
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="border-2 border-red-500 text-red-600 bg-red-50 px-3 py-1 text-sm font-medium"
                          >
                            Vegetarian 🌱
                          </Badge>
                        )}
                        {item.isSpicy && (
                          <Badge
                            variant="outline"
                            className="border-2 border-orange-500 text-orange-600 bg-orange-50 px-3 py-1 text-sm font-medium"
                          >
                            Spicy 🔥
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-red-500 rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-yellow-500 rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-orange-500 rounded-full opacity-5 blur-3xl -z-10"></div>
      </div>
    </div>
  )
}
