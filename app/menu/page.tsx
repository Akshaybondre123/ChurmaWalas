import Image from "next/image"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Menu categories and items
const menuCategories = [
  { id: "churma", name: "Churma Varieties" },
  { id: "main-course", name: "Main Course" },
  { id: "baati", name: "Baati" },
  { id: "breads", name: "Breads & Rice" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
  { id: "thali", name: "Thali Packages" },
]

const menuItems = {
  churma: [
    {
      id: 101,
      name: "Gehun Churma",
      description: "Traditional wheat churma made with ghee and jaggery, a classic Rajasthani sweet dish.",
      price: "₹500",
      image: "/menu/MAK_3975.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 102,
      name: "Besan ka Churma",
      description: "Gram flour churma with a rich nutty flavor, sweetened with sugar and flavored with cardamom.",
      price: "₹500",
      image: "https://t4.ftcdn.net/jpg/04/48/22/47/240_F_448224740_Co3QCqpK19ES62jbmSUsPOPX13g3i0l2.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 103,
      name: "Bajre ka Churma",
      description: "Millet flour churma, a healthier alternative with the goodness of millets and jaggery.",
      price: "₹500",
      image: "data:image/jpeg;base64,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",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 104,
      name: "Gulab ka Churma",
      description: "Wheat churma infused with rose flavor and garnished with dried rose petals.",
      price: "₹525",
      image: "/menu/MAK_3963.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 105,
      name: "Pineapple ka Churma",
      description:
        "Our signature churma with a unique twist of pineapple flavor, a perfect blend of traditional and modern.",
      price: "₹525",
      image: "/menu/MAK_3954.jpg",
      isVeg: true,
      isSpicy: false,
      isSignature: true,
    },
    {
      id: 106,
      name: "Aam ka Churma",
      description: "Seasonal mango-flavored churma, a delightful summer specialty.",
      price: "₹525",
      image: "/menu/MAK_3955.jpg",
      isVeg: true,
      isSpicy: false,
      isSeasonal: true,
    },
  ],
  
  "main-course": [
    {
      id: 1,
      name: "Daal Baati Churma",
      description:
        "Our signature dish featuring baked wheat balls served with lentil curry and sweetened crushed wheat mixed with ghee and sugar.",
      price: "₹280",
      image: "https://media.istockphoto.com/id/695148572/photo/traditional-rajasthani-food-daal-baati-churma-indian-food.jpg?s=612x612&w=0&k=20&c=PsZhEt2uuH91Ni6TKyDqVy91V-XhpqwkLL49OOGam3M=",
      isVeg: true,
      isSpicy: false,
      isSignature: true,
    },
    {
      id: 2,
      name: "Gatte Ki Sabzi",
      description: "Gram flour dumplings cooked in a spicy yogurt gravy, a classic Rajasthani delicacy.",
      price: "₹250",
      image: "https://media.istockphoto.com/id/1521673747/photo/rajasthani-gatta-curry-or-besan-ke-gatte-ki-sabzi-gatte-are-gram-flour-roundels-or-chickpea.jpg?s=612x612&w=0&k=20&c=zh-2Im8FuB-FDF3PA2S7a6v-T9iA_2z4gaCq192G6fM=",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 3,
      name: "Kadhi",
      description: "Yogurt-based curry with gram flour and spices, a comforting Rajasthani specialty.",
      price: "₹250",
      image: "https://media.istockphoto.com/id/928062758/photo/vegetarian-curry-gujarati-kadhi-with-chickpea-and-yogurt.jpg?s=612x612&w=0&k=20&c=epVA_PTQMB2JnzbvMibqw0g-opfyr140qdaHU4RJLOg=",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 4,
      name: "Gatta Masala",
      description: "Gram flour dumplings in a rich, spicy gravy with aromatic spices.",
      price: "₹300",
      image: "https://media.istockphoto.com/id/2047442128/photo/gatte-ki-sabzi.jpg?s=612x612&w=0&k=20&c=TlAA5bpPzXgIKTSzkufjstcGViAG8tXWz4wBGtbGtLk=",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 5,
      name: "Chatni",
      description: "Assortment of freshly made chutneys including mint, tamarind, and garlic varieties.",
      price: "₹300",
      image: "/menu/MAK_3985.jpg",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 6,
      name: "Mirchi Tipore",
      description: "Spicy chili pickle preparation, a perfect accompaniment to Rajasthani meals.",
      price: "₹300",
      image: "/menu/MAK_3994.jpg",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 7,
      name: "Aalu Pyaaz Paneer",
      description: "Potatoes, onions, and cottage cheese cooked together in a flavorful gravy.",
      price: "₹450",
      image: "https://media.istockphoto.com/id/1266588753/photo/indian-food-kadai-paneer-served-with-dal-makhani-tandoori-or-papad-on-wooden-background.jpg?s=612x612&w=0&k=20&c=POTQTu0blXW2p6Z5U5Ab1vKVfqXPC2It-ycHwfRVjUk=",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 8,
      name: "Baingan ka Bharta",
      description: "Roasted eggplant mash cooked with onions, tomatoes, and spices.",
      price: "₹300",
      image: "https://media.istockphoto.com/id/927930044/photo/eggplant-bharta-baigan-food-south-bread-bhakar-maharashtra-menu-bharit-traditional-diet-tasty.jpg?s=612x612&w=0&k=20&c=CKkZbxc68WFwVfIDeJzLaj8mZyGL2vO6q0KiP5OTFPk=",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 9,
      name: "Keri ki Launji",
      description: "Sweet and tangy raw mango curry, a seasonal delicacy.",
      price: "₹300",
      image: "https://i.pinimg.com/736x/cf/0b/72/cf0b722a86dba47b13a9a52444037137.jpg",
      isVeg: true,
      isSpicy: false,
      isSeasonal: true,
    },
    {
      id: 10,
      name: "Sarson ka Saag",
      description: "Traditional mustard greens preparation, slow-cooked with spices.",
      price: "₹350",
      image: "https://i.pinimg.com/736x/05/f5/92/05f592dc4298fe60d5ad403cc22b5ff8.jpg",
      isVeg: true,
      isSpicy: true,
      isSeasonal: true,
    },
    {
      id: 11,
      name: "Haldi ki Sabzi",
      description: "Unique Rajasthani preparation made with fresh turmeric root.",
      price: "₹700",
      image: "https://i.pinimg.com/736x/45/b9/df/45b9df34db82cc38ba49562c299687e2.jpg",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 12,
      name: "Ker Sangri ki Sabzi",
      description: "Traditional Rajasthani dish made with dried berries and beans, cooked with spices.",
      price: "₹1400",
      image: "https://media.istockphoto.com/id/1360849471/photo/traditional-delicious-turkish-food-hibiscus-malva-dish.jpg?s=612x612&w=0&k=20&c=mzTco39sGq4JWii81bU7yv9jzeDgP56Kf5p999kuX_U=",
      isVeg: true,
      isSpicy: true,
      isPremium: true,
    },
  ],
  baati: [
    {
      id: 13,
      name: "Sada Baati",
      description: "Plain baked wheat balls, a staple of Rajasthani cuisine.",
      price: "₹25",
      image: "data:image/jpeg;base64,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",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 14,
      name: "Aalu Matar Baati",
      description: "Wheat balls stuffed with spiced potato and peas mixture.",
      price: "₹30",
      image: "https://i.pinimg.com/736x/b2/35/a2/b235a2fb0c62b805b2f4dd86d20632d8.jpg",
      isVeg: true,
      isSpicy: true,
      perPiece: true,
    },
    {
      id: 15,
      name: "Bafla Baati",
      description: "Boiled and then baked wheat balls, softer than regular baati.",
      price: "₹30",
      image: "https://i.pinimg.com/736x/5a/92/b2/5a92b21050cdc812edea2d1f64cdb3af.jpg",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 16,
      name: "Dry Fruit Baati",
      description: "Wheat balls stuffed with a mixture of dry fruits and nuts.",
      price: "₹30",
      image: "https://i.pinimg.com/736x/f9/42/81/f94281972c6460d05bf404fd2c97dbf0.jpg",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 17,
      name: "Missi Baati",
      description: "Wheat and gram flour balls with dry spices, baked to perfection.",
      price: "₹30",
      image: "https://media.istockphoto.com/id/1394450890/photo/indian-sweet.jpg?s=612x612&w=0&k=20&c=gA54vTfQw4oQ9Dx6sx17DFTKdGU8xGQeGBp4K8-c-94=",
      isVeg: true,
      isSpicy: true,
      perPiece: true,
    },
    {
      id: 18,
      name: "Masala Baati",
      description: "Wheat balls infused with aromatic spices for extra flavor.",
      price: "₹30",
      image: "https://i.pinimg.com/736x/1f/79/9a/1f799aeb46aa85f7099b22d61c52824c.jpg",
      isVeg: true,
      isSpicy: true,
      perPiece: true,
    },
    {
      id: 19,
      name: "Kela Baati",
      description: "Unique wheat balls with ripe banana filling, a sweet and savory combination.",
      price: "₹30",
      image: "https://i.pinimg.com/736x/48/00/a8/4800a8d7df7e4e45313b9e595e201ca6.jpg",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 20,
      name: "Vegetable Baati",
      description: "Wheat balls stuffed with mixed vegetables and spices.",
      price: "₹30",
      image: "https://media.istockphoto.com/id/2198136060/photo/litti-a-popular-food-item-in-india.jpg?s=612x612&w=0&k=20&c=vAfLvubuF-MBNwAtZtNgGAvjOXktCs3zwdAISvMjy-U=",
      isVeg: true,
      isSpicy: true,
      perPiece: true,
    },
    {
      id: 21,
      name: "Paneer Baati",
      description: "Wheat balls with a spiced cottage cheese filling.",
      price: "₹35",
      image: "https://media.istockphoto.com/id/943608928/photo/image-of-bihar-traditional-food-known-as-litti-chokha.jpg?s=612x612&w=0&k=20&c=i8UgE7M2KwA_N6ZtWog8p7Rw6SiWrVW-o_FlAqESec0=",
      isVeg: true,
      isSpicy: true,
      perPiece: true,
    },
  ],
  breads: [
    {
      id: 22,
      name: "Gehun Roti (Bina Ghee)",
      description: "Plain wheat flatbread without ghee.",
      price: "₹25",
      image: "https://i.pinimg.com/736x/8e/83/0c/8e830cc9a774f2ea4998030d919c0a70.jpg",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 23,
      name: "Gehun Roti (Ghee ke Sath)",
      description: "Wheat flatbread served with a dollop of ghee.",
      price: "₹30",
      image: "https://i.pinimg.com/736x/83/83/34/8383344645d480fdd68f6957dbda48f9.jpg",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 24,
      name: "Bajre ki Roti",
      description: "Traditional millet flatbread, a staple in Rajasthani cuisine.",
      price: "₹50",
      image: "https://i.pinimg.com/736x/1a/34/7b/1a347b9fafbed5f0e6f51220251f8b1d.jpg",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 25,
      name: "Makka Roti",
      description: "Cornmeal flatbread, crispy and flavorful.",
      price: "₹45",
      image: "https://i.pinimg.com/736x/fb/05/45/fb054530174e883490a5e229c701e93a.jpg",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 26,
      name: "Missi Roti",
      description: "Flatbread made with a mix of wheat and gram flour, flavored with spices.",
      price: "₹40",
      image: "https://i.pinimg.com/736x/76/25/12/762512fa5700a3ab96545f5eacaa93f3.jpg",
      isVeg: true,
      isSpicy: false,
      perPiece: true,
    },
    {
      id: 8,
      name: "Bajra Roti",
      description: "Traditional millet flatbread, a staple in Rajasthani cuisine.",
      price: "₹50",
      image: "https://i.pinimg.com/736x/7b/0b/ee/7b0bee4beb7ebf198879c6db0b6ff631.jpg",
      isVeg: true,
      isSpicy: false,
    },
    
    {
      id: 9,
      name: "Jeera Rice",
      description: "Fragrant basmati rice tempered with cumin seeds.",
      price: "₹120",
      image: "https://i.pinimg.com/736x/5b/72/91/5b729124bfdc306b348c478f31e13b10.jpg",
      isVeg: true,
      isSpicy: false,
    },
  ],
  desserts: [
    {
      id: 27,
      name: "Kesariya Kheer",
      description: "Saffron-infused rice pudding garnished with nuts and dried fruits.",
      price: "₹350",
      image: "https://i.pinimg.com/736x/68/6d/52/686d52de94df958cd42c9ed983a3e2cd.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 28,
      name: "Gulab Jamun",
      description: "Soft milk solids dumplings soaked in rose-flavored sugar syrup.",
      price: "₹450",
      image: "/menu/MAK_4073.JPG",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 29,
      name: "Rabdi ke Malpue",
      description: "Sweet pancakes topped with thickened sweetened milk.",
      price: "₹450",
      image: "https://i.pinimg.com/736x/6c/d1/79/6cd179f9770e8159e6bb635c4e366648.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 30,
      name: "Gajar ka Halwa",
      description: "Traditional carrot pudding cooked with milk, sugar, and ghee.",
      price: "₹450",
      image: "https://i.pinimg.com/736x/61/1f/c9/611fc9926b68bacbe15abc1767704fb7.jpg",
      isVeg: true,
      isSpicy: false,
      isSeasonal: true,
    },
    {
      id: 31,
      name: "Moong ka Halwa",
      description: "Rich pudding made from yellow moong lentils, ghee, and sugar.",
      price: "₹450",
      image: "https://i.pinimg.com/736x/b3/eb/a7/b3eba78490279a7528157a72b1f1cf7d.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 32,
      name: "Moong Badam ka Halwa",
      description: "Moong lentil pudding enriched with almonds for extra flavor and texture.",
      price: "₹450",
      image: "https://i.pinimg.com/736x/3b/d7/de/3bd7de57b029d91956bbdba3ba28f929.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 33,
      name: "Lachchha Rabdi",
      description: "Layered thickened milk dessert flavored with cardamom and saffron.",
      price: "₹600",
      image: "https://i.pinimg.com/736x/24/02/44/240244bfcc07eda4da10b1cc1da18b6d.jpg",
      isVeg: true,
      isSpicy: false,
      isPremium: true,
    },
    {
      id: 10,
      name: "Pineapple Churma",
      description: "A unique twist on the traditional churma, infused with sweet pineapple flavors.",
      price: "₹150",
      image: "/menu/MAK_3950.jpg",
      isVeg: true,
      isSpicy: false,
      isSignature: true,
    },
    {
      id: 11,
      name: "Ghevar",
      description: "Disc-shaped sweet cake made with flour and soaked in sugar syrup.",
      price: "₹180",
      image: "https://i.pinimg.com/736x/09/4d/b1/094db10b0f43c21a7f5f4b6ac7dda40e.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 12,
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
      id: 34,
      name: "Chhachh (1 Glass)",
      description: "Traditional buttermilk with cumin and herbs, refreshing and digestive.",
      price: "₹30",
      image: "https://media.istockphoto.com/id/1427294115/photo/close-up-of-summer-drink-buttermilk-or-mattha-or-chhachh-glass-garnished-with-coriander-made.jpg?s=612x612&w=0&k=20&c=Io46p1oxOjyUibIQIr3e6kg0y6ULOfL3V-sQfBQZDBA=",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 35,
      name: "Papad",
      description: "Crispy lentil wafer, a perfect accompaniment to any meal.",
      price: "₹20",
      image: "https://media.istockphoto.com/id/534784353/photo/fried-pappadum-on-a-white-wooden-table.jpg?s=612x612&w=0&k=20&c=X5mLQ8ZK5ReyUY2YBKzMBFuO9_A0bG9_XK26duBK4Es=",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 36,
      name: "Pani Bottle",
      description: "Mineral water bottle.",
      price: "₹30",
      image: "https://i.pinimg.com/736x/ee/98/23/ee9823e6bd504a140ebaf67ee42bb867.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 37,
      name: "Rabdi (1 Glass)",
      description: "Chilled thickened sweetened milk flavored with cardamom.",
      price: "₹30",
      image: "https://i.pinimg.com/736x/db/c0/55/dbc055afdf5309d468530bf319f1a9f4.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 38,
      name: "Lassi (1 Glass)",
      description: "Sweet yogurt drink, thick and creamy.",
      price: "₹60",
      image: "https://i.pinimg.com/736x/3c/74/af/3c74af536dcdfa2630ef9359382339d3.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 13,
      name: "Makhaniya Lassi",
      description: "Creamy buttermilk drink with a hint of cardamom and saffron.",
      price: "₹120",
      image: "https://i.pinimg.com/736x/e1/00/19/e1001928d86859feff6ae77c10861915.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 14,
      name: "Thandai",
      description: "Cooling milk drink flavored with nuts, seeds, and spices.",
      price: "₹140",
      image: "https://i.pinimg.com/736x/e9/68/90/e9689087198bfe03785dc2a0133588b3.jpg",
      isVeg: true,
      isSpicy: false,
    },
    {
      id: 15,
      name: "Rajasthani Chai",
      description: "Strong tea brewed with milk, cardamom, and other spices.",
      price: "₹80",
      image: "https://i.pinimg.com/736x/fa/97/24/fa9724998ec7364520366a5dfb276f33.jpg",
      isVeg: true,
      isSpicy: false,
    },
  ],
  thali: [
    {
      id: 39,
      name: "Basic Thali",
      description:
        "3 types of rotis + Aalu Pyaaz Paneer + Dal + Gatta Masala + Kadhi + Chatni + Mirchi Tipore + Papad + Chhachh",
      price: "₹350",
      image: "https://i.pinimg.com/736x/ec/46/0c/ec460c127ed77c01125a9a838240923a.jpg",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 40,
      name: "Medium Thali",
      description:
        "Sada Baati (2 pcs) + Aalu Matar Baati (2 pcs) + One type of Churma + Dal + Kadhi + Gatta Masala + Chatni + Mirchi Tipore + Chhachh + Papad",
      price: "₹350",
      image: "https://i.pinimg.com/736x/63/a1/bf/63a1bf5b69a288437be6b14d46870b9d.jpg",
      isVeg: true,
      isSpicy: true,
    },
    {
      id: 41,
      name: "Special Thali",
      description:
        "Sada Baati (3 pcs) + Aalu Matar Baati (3 pcs) + Two types of Churma + Dal + Kadhi + Gatta Masala + Chatni + Mirchi Tipore + Chhachh + Papad",
      price: "₹450",
      image: "/menu/MAK_4078.jpg",
      isVeg: true,
      isSpicy: true,
      isSignature: true,
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

        <Tabs defaultValue="churma" className="w-full">
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
                            ? "data-[state=active]:bg-amber-600 data-[state=active]:text-white hover:bg-amber-500/10"
                            : index === 4
                              ? "data-[state=active]:bg-pink-600 data-[state=active]:text-white hover:bg-pink-500/10"
                              : index === 5
                                ? "data-[state=active]:bg-rose-600 data-[state=active]:text-white hover:bg-rose-500/10"
                                : index === 6
                                  ? "data-[state=active]:bg-purple-600 data-[state=active]:text-white hover:bg-purple-500/10"
                                  : "data-[state=active]:bg-green-600 data-[state=active]:text-white hover:bg-green-500/10"
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
                      <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                        {item.isSignature && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-red-500 text-white border-none px-4 py-1.5 text-sm font-bold shadow-lg">
                            SIGNATURE DISH ⭐
                          </Badge>
                        )}
                        {item.isPremium && (
                          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none px-4 py-1.5 text-sm font-bold shadow-lg">
                            PREMIUM ✨
                          </Badge>
                        )}
                        {item.isSeasonal && (
                          <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-none px-4 py-1.5 text-sm font-bold shadow-lg">
                            SEASONAL 🍃
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                        <h3 className="text-2xl font-bold text-white drop-shadow-md">{item.name}</h3>
                        <span className="font-bold text-xl text-white bg-gradient-to-r from-red-600 to-orange-600 px-4 py-1 rounded-full shadow-md">
                          {item.perPiece ? `${item.price}/pc` : item.price}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 bg-gradient-to-br from-white to-orange-50">
                      <p className="text-gray-700 mb-4 text-lg">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
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
                            Non-Vegetarian 🍖
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

        <div className="mt-16 p-8 bg-gradient-to-r from-red-100 to-amber-100 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-red-800 mb-4 text-center">Special Note</h2>
          <p className="text-center text-red-700">
            Minimum serving size for Sabji and Churma is 250 grams. All prices are inclusive of taxes.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-red-500 rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-yellow-500 rounded-full opacity-5 blur-3xl -z-10"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-orange-500 rounded-full opacity-5 blur-3xl -z-10"></div>
      </div>
    </div>
  )
}
