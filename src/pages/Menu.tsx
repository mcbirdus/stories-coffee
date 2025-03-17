import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Coffee, Cherry, Leaf, GlassWater, Sandwich, BookOpen, CakeSlice } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CateringFormSection from "@/components/menu/CateringFormSection";

interface Category {
  id: number;
  name: string;
  icon: React.ElementType;
  slug: string;
}

interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  image?: string;
  isAddOn?: boolean;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Açaí",
    icon: Cherry,
    slug: "acai",
  },
  {
    id: 2,
    name: "Main Menu",
    icon: BookOpen,
    slug: "main-menu",
  },
  {
    id: 3,
    name: "Sandwiches",
    icon: Sandwich,
    slug: "sandwiches",
  },
  {
    id: 4,
    name: "Coffee",
    icon: Coffee,
    slug: "coffee",
  },
  {
    id: 5,
    name: "Iced Coffee",
    icon: Coffee,
    slug: "iced-coffee",
  },
  {
    id: 6,
    name: "Teas",
    icon: Leaf,
    slug: "teas",
  },
  {
    id: 7,
    name: "Smoothies",
    icon: GlassWater,
    slug: "smoothies",
  },
  {
    id: 8,
    name: "Specialty",
    icon: GlassWater,
    slug: "speciality",
  },
  {
    id: 9,
    name: "Cold Pressed Juices",
    icon: GlassWater,
    slug: "cold-pressed-juices",
  },
  {
    id: 10,
    name: "Kombucha",
    icon: GlassWater,
    slug: "kombucha",
  },
  {
    id: 11,
    name: "Flavoured Sparkling",
    icon: GlassWater,
    slug: "flavoured-sparkling",
  },
  {
    id: 12,
    name: "Catering",
    icon: GlassWater,
    slug: "catering",
  },
];

const menuItems: MenuItem[] = [
  // Açaí Items
  {
    id: 1,
    name: "Crushed Peanuts Bowl",
    price: "$14.45",
    description: "",
    category: "acai",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 2,
    name: "Almont Silver Bowl",
    price: "$15.50",
    description: "",
    category: "acai",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 3,
    name: "Crushed Oreo Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 4,
    name: "Biscoff Crushed Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 5,
    name: "Coconut Flakes Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 6,
    name: "Coco Pops Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 7,
    name: "Chia Seeds Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 8,
    name: "Sour Worms Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 9,
    name: "Mini Mnms Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 10,
    name: "Flakes Crumbs Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 11,
    name: "Sour Bears Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  {
    id: 12,
    name: "Nerds Bowl",
    price: "$16.50",
    description: "",
    category: "acai",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1741914224/eiliv-aceron-uzdfBCKwKTk-unsplash_rroswm.jpg"
  },
  
  // Coffee Items
  {
    id: 13,
    name: "Espresso",
    price: "$5.00",
    description: "",
    category: "coffee",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 14,
    name: "Piccolo",
    price: "$5.00",
    description: "",
    category: "coffee",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 15,
    name: "Macchiato",
    price: "$5.00",
    description: "",
    category: "coffee",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 16,
    name: "Long Black",
    price: "S $4.50 | M $5.00 | L $5.50",
    description: "",
    category: "coffee",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 17,
    name: "Cappucino",
    price: "S $4.50 | M $5.00 | L $5.50",
    description: "",
    category: "coffee",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },  
  {
    id: 18,
    name: "Latte",
    price: "S $4.50 | M $5.00 | L $5.50",
    description: "",
    category: "coffee",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },  
  {
    id: 19,
    name: "Mocha",
    price: "S $4.50 | M $5.00 | L $5.50",
    description: "",
    category: "coffee",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },  
  {
    id: 20,
    name: "Chai Latte",
    price: "S $4.50 | M $5.00 | L $5.50",
    description: "",
    category: "coffee",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },  
  {
    id: 21,
    name: "Hot Chocolate",
    price: "S $4.50 | M $5.00 | L $5.50",
    description: "",
    category: "coffee",
    isNew: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },

  // Coffee Add-Ons
  {
    id: 101,
    name: "Extra Shot",
    price: "$0.50",
    description: "Add an extra shot of espresso",
    category: "coffee",
    isAddOn: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 102,
    name: "Almond Milk",
    price: "$0.80",
    description: "Replace with almond milk",
    category: "coffee",
    isAddOn: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 103,
    name: "Oat Milk",
    price: "$0.80",
    description: "Replace with oat milk",
    category: "coffee",
    isAddOn: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 104,
    name: "Soy Milk",
    price: "$0.80",
    description: "Replace with soy milk",
    category: "coffee",
    isAddOn: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 105,
    name: "Vanilla Syrup",
    price: "$0.50",
    description: "Add vanilla flavor",
    category: "coffee",
    isAddOn: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  {
    id: 106,
    name: "Caramel Syrup",
    price: "$0.50",
    description: "Add caramel flavor",
    category: "coffee",
    isAddOn: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100000/nathan-dumlao-nBJHO6wmRWw-unsplash_t4aewl.jpg"
  },
  
  // Teas
  {
    id: 22,
    name: "English Breakfast",
    price: "$6.00",
    description: "",
    category: "teas",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100801/mae-mu-kbch-i63YTg-unsplash_nspd5d.jpg"
  },
  {
    id: 23,
    name: "Lemongrass Ginger",
    price: "$6.00",
    description: "",
    category: "teas",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100801/mae-mu-kbch-i63YTg-unsplash_nspd5d.jpg"
  },
  {
    id: 24,
    name: "Peppermint",
    price: "$6.00",
    description: "",
    category: "teas",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100801/mae-mu-kbch-i63YTg-unsplash_nspd5d.jpg"
  },
  {
    id: 25,
    name: "Chamomile",
    price: "$6.00",
    description: "",
    category: "teas",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742100801/mae-mu-kbch-i63YTg-unsplash_nspd5d.jpg"
  },
  
  // Smoothies
  {
    id: 26,
    name: "Protein Smoothy",
    price: "$7.00",
    description: "",
    category: "smoothies",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101031/joanna-kosinska-m741tj4Cz7M-unsplash_klrjab.jpg"
  },
  {
    id: 27,
    name: "Green Smoothy",
    price: "$7.00",
    description: "",
    category: "smoothies",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101031/joanna-kosinska-m741tj4Cz7M-unsplash_klrjab.jpg"
  },
  {
    id: 28,
    name: "Chocolate Shake",
    price: "$7.00",
    description: "",
    category: "smoothies",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101031/joanna-kosinska-m741tj4Cz7M-unsplash_klrjab.jpg"
  },
  {
    id: 29,
    name: "Caramel Shake",
    price: "$7.00",
    description: "",
    category: "smoothies",
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101031/joanna-kosinska-m741tj4Cz7M-unsplash_klrjab.jpg"
  },
  
  // Sandwiches
  {
    id: 30,
    name: "Poached Chicken Wrap",
    price: "$14.00",
    description: "Green goddess, lettuce, tomato, swiss cheese",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },
  {
    id: 31,
    name: "Salmon Bagel",
    price: "$14.00",
    description: "Salmon, red onion, capers, dill, mayo & cream cheese",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },
  {
    id: 32,
    name: "Ham & Cheese",
    price: "$14.00",
    description: "Ham, swiss cheese, mayo & mustard sauce",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },
  {
    id: 33,
    name: "Salami and Coppa",
    price: "$14.00",
    description: "Eggplant, red onion, mesclun, chilli mayo, provolone",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },
  {
    id: 34,
    name: "Mortadella",
    price: "$14.00",
    description: "Rocket, pesto, stracciatella",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },
  {
    id: 35,
    name: "Tuna Mayo",
    price: "$14.00",
    description: "Tasty cheese, rocket, olive and capers",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },
  {
    id: 36,
    name: "Chicken Schnitzel Caesar Wrap",
    price: "$14.00",
    description: "Caesar dressing, lettuce, prosciutto, egg, parmesan",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },
  {
    id: 37,
    name: "Herb Chicken",
    price: "$14.00",
    description: "Lettuce, shallots, roasted almond, mayo",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },
  {
    id: 38,
    name: "Vegetarian Falafel Wrap",
    price: "$14.00",
    description: "Halloumi, beetroot, carrot, avocado, hummus",
    category: "sandwiches",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742101621/eiliv-aceron-mAQZ3X_8_l0-unsplash_yjegkc.jpg"
  },

  
  // Main Menu Items
  {
    id: 39,
    name: "Bread & Spread",
    price: "$7.00",
    description: "One thick toast with choice of spreads",
    category: "main-menu",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742102673/mariana-medvedeva-fk6IiypMWss-unsplash_bp3bas.jpg"
  },
  {
    id: 40,
    name: "Eggs in Toast",
    price: "$13.00",
    description: "Scrambled or field eggs on toast",
    category: "main-menu",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742102673/mariana-medvedeva-fk6IiypMWss-unsplash_bp3bas.jpg"
  },
  {
    id: 41,
    name: "Bacon & Egg Roll",
    price: "$12.00",
    description: "Bacon, folded egg, cheese & BBQ - Aioli",
    category: "main-menu",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742102673/mariana-medvedeva-fk6IiypMWss-unsplash_bp3bas.jpg"
  },
  {
    id: 42,
    name: "Haloumi & Egg Roll",
    price: "$14.00",
    description: "Haloumi, avo, folded eggs, cheese & mayo",
    category: "main-menu",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742102673/mariana-medvedeva-fk6IiypMWss-unsplash_bp3bas.jpg"
  },
  {
    id: 43,
    name: "Avostories",
    price: "$16.00",
    description: "Smashed avo, medley tomato, rocket, grated ricotta & dukka on thick sourdough",
    category: "main-menu",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742102673/mariana-medvedeva-fk6IiypMWss-unsplash_bp3bas.jpg"
  },
  {
    id: 44,
    name: "Teriyaki Rice Bowl",
    price: "$18.00",
    description: "Sushi rice served with edamame, house slaw, red onion, mayo & fried shallots either chicken/ smoked salomon/haloumi",
    category: "main-menu",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742102673/mariana-medvedeva-fk6IiypMWss-unsplash_bp3bas.jpg"
  },


  // Speciality
  {
    id: 45,
    name: "Cherry Vanilla",
    price: "$10.00",
    description: "",
    category: "speciality",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742103616/nha-van-uFAVbEbsOIM-unsplash_tsqipw.jpg"
  },
  {
    id: 46,
    name: "Raspberry Matcha",
    price: "$10.00",
    description: "",
    category: "speciality",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742103616/nha-van-uFAVbEbsOIM-unsplash_tsqipw.jpg"
  },
  {
    id: 47,
    name: "Matcha",
    price: "$10.00",
    description: "",
    category: "speciality",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742103616/nha-van-uFAVbEbsOIM-unsplash_tsqipw.jpg"
  },
  {
    id: 48,
    name: "Raspberry Chocolate",
    price: "$10.00",
    description: "",
    category: "speciality",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742103616/nha-van-uFAVbEbsOIM-unsplash_tsqipw.jpg"
  },


  // Cold Pressed Juices
  {
    id: 49,
    name: "100% Orange",
    price: "$7.00",
    description: "",
    category: "cold-pressed-juices",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104106/farhad-ibrahimzade-CiDpRQ9oPso-unsplash_umro4h.jpg"
  },
  {
    id: 50,
    name: "Green - Apple",
    price: "$7.00",
    description: "",
    category: "cold-pressed-juices",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104106/farhad-ibrahimzade-CiDpRQ9oPso-unsplash_umro4h.jpg"
  },
  {
    id: 51,
    name: "Kale & Pear",
    price: "$7.00",
    description: "",
    category: "cold-pressed-juices",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104106/farhad-ibrahimzade-CiDpRQ9oPso-unsplash_umro4h.jpg"
  },
  {
    id: 52,
    name: "Beets - Apple",
    price: "$7.00",
    description: "",
    category: "cold-pressed-juices",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104106/farhad-ibrahimzade-CiDpRQ9oPso-unsplash_umro4h.jpg"
  },
  {
    id: 53,
    name: "Beetroot & Carrot",
    price: "$7.00",
    description: "",
    category: "cold-pressed-juices",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104106/farhad-ibrahimzade-CiDpRQ9oPso-unsplash_umro4h.jpg"
  },
  {
    id: 54,
    name: "Ginger Orange",
    price: "$7.00",
    description: "",
    category: "cold-pressed-juices",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104106/farhad-ibrahimzade-CiDpRQ9oPso-unsplash_umro4h.jpg"
  },
  {
    id: 55,
    name: "Ginger",
    price: "$7.00",
    description: "",
    category: "cold-pressed-juices",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104106/farhad-ibrahimzade-CiDpRQ9oPso-unsplash_umro4h.jpg"
  },
  {
    id: 56,
    name: "Pineapple & Carrot",
    price: "$7.00",
    description: "",
    category: "cold-pressed-juices",
    isPopular: true,
    image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104106/farhad-ibrahimzade-CiDpRQ9oPso-unsplash_umro4h.jpg"
  },


    // Iced Coffee
    {
      id: 57,
      name: "Iced Long Black",
      price: "$7.00",
      description: "",
      category: "iced-coffee",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104842/eiliv-aceron-_tSgUmeYMm8-unsplash_vlyn6n.jpg"
    },
    {
      id: 58,
      name: "Iced Latte",
      price: "$7.00",
      description: "",
      category: "iced-coffee",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104842/eiliv-aceron-_tSgUmeYMm8-unsplash_vlyn6n.jpg"
    },
    {
      id: 59,
      name: "Iced Mocha",
      price: "$8.00",
      description: "",
      category: "iced-coffee",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104842/eiliv-aceron-_tSgUmeYMm8-unsplash_vlyn6n.jpg"
    },
    {
      id: 60,
      name: "Iced Chocolate",
      price: "$8.00",
      description: "",
      category: "iced-coffee",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104842/eiliv-aceron-_tSgUmeYMm8-unsplash_vlyn6n.jpg"
    },
    {
      id: 61,
      name: "Iced Chai Latte",
      price: "$8.00",
      description: "",
      category: "iced-coffee",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742104842/eiliv-aceron-_tSgUmeYMm8-unsplash_vlyn6n.jpg"
    },


    // Kombucha
    {
      id: 62,
      name: "Ginger Lemon",
      price: "$6.00",
      description: "",
      category: "kombucha",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742105168/katherine-sousa-ln2R1wJ8TCM-unsplash_oc6rj6.jpg"
    },
    {
      id: 63,
      name: "Raspberry Lemonade",
      price: "$6.00",
      description: "",
      category: "kombucha",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742105168/katherine-sousa-ln2R1wJ8TCM-unsplash_oc6rj6.jpg"
    },
    {
      id: 64,
      name: "Passion Fruit",
      price: "$6.00",
      description: "",
      category: "kombucha",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742105168/katherine-sousa-ln2R1wJ8TCM-unsplash_oc6rj6.jpg"
    },


    // Flavoured Sparkling
    {
      id: 65,
      name: "San Pellegrino Aranciata",
      price: "$7.00",
      description: "",
      category: "flavoured-sparkling",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742105430/jamie-street-qpN5MLx1uwk-unsplash_csnj6u.jpg"
    },
    {
      id: 66,
      name: "San Pellegrino Limonata",
      price: "$7.00",
      description: "",
      category: "flavoured-sparkling",
      isPopular: true,
      image: "https://res.cloudinary.com/dkuvvyaly/image/upload/v1742105430/jamie-street-qpN5MLx1uwk-unsplash_csnj6u.jpg"
    },
];

const Menu = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const categoryItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && categories.some(c => c.slug === hash)) {
      setSelectedCategory(hash);
      
      setTimeout(() => {
        if (menuRef.current) {
          menuRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [location]);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredItems(menuItems.filter(item => item.category === selectedCategory));
      
      // Scroll to the items section after category is selected
      setTimeout(() => {
        if (categoryItemsRef.current) {
          categoryItemsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setFilteredItems([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const groupedItems = filteredItems.reduce(
    (acc, item) => {
      if (item.isAddOn) {
        acc.addOns.push(item);
      } else {
        acc.regularItems.push(item);
      }
      return acc;
    },
    { regularItems: [] as MenuItem[], addOns: [] as MenuItem[] }
  );

  return (
    <>
      <Header />
      <main className="pt-36 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in">
            <span className="inline-block px-4 py-1 rounded-full bg-stories-green/10 text-stories-green dark:bg-stories-green/20 text-sm font-medium mb-4">
              Our Menu
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Culinary Delights</h1>
            <p className="text-stories-dark/70 dark:text-white/70">
              Discover our exceptional selection of handcrafted coffee, açaí bowls, and delicious food items made with love and the finest ingredients.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-16 opacity-0 animate-fade-in delay-200">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  "bg-stories-light-gray dark:bg-stories-dark/60 rounded-xl p-4 text-center hover-lift hover:bg-white dark:hover:bg-stories-dark/80 border-2 transition-all duration-300",
                  selectedCategory === category.slug 
                    ? "border-stories-green" 
                    : "border-transparent hover:border-stories-green/20 dark:hover:border-stories-green/20",
                  isVisible && `delay-${Math.min(index * 100, 500)}`
                )}
              >
                <div className="bg-stories-green/10 dark:bg-stories-green/20 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <category.icon className="h-6 w-6 text-stories-green" />
                </div>
                <h3 className="text-sm font-bold mb-1 font-playfair">{category.name}</h3>
              </button>
            ))}
          </div>

          {selectedCategory && (
            <div ref={menuRef} className="opacity-0 animate-fade-in delay-300">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                  {categories.find(c => c.slug === selectedCategory)?.name} Menu
                </h2>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory(null)}
                  className="border-stories-green text-stories-green hover:bg-stories-green/10"
                >
                  View All Categories
                </Button>
              </div>

              <div ref={categoryItemsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                {groupedItems.regularItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className={cn(
                      "bg-white dark:bg-stories-dark/60 rounded-xl overflow-hidden shadow-md hover-lift group transition-all duration-300",
                      isVisible && `opacity-0 animate-fade-up delay-${Math.min(index * 100, 700)}`
                    )}
                  >
                    <div className="h-36 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      {item.isNew && (
                        <span className="absolute top-2 right-2 bg-stories-green text-white text-xs px-2 py-1 rounded-md">
                          New
                        </span>
                      )}
                      {item.isPopular && !item.isNew && (
                        <span className="absolute top-2 right-2 bg-stories-gold text-white text-xs px-2 py-1 rounded-md">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-base">{item.name}</h3>
                        <span className="font-medium text-stories-green text-sm">{item.price}</span>
                      </div>
                      <p className="text-stories-dark/70 dark:text-white/70 text-xs line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {selectedCategory === "coffee" && groupedItems.addOns.length > 0 && (
                <div className="mt-8 mb-12">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 border-b-2 pb-2 border-stories-green/30 font-playfair">Coffee Add-Ons</h3>
                  <div className="bg-stories-green/5 p-4 rounded-xl border border-stories-green/20">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {groupedItems.addOns.map((item, index) => (
                        <div 
                          key={item.id}
                          className={cn(
                            "bg-white dark:bg-stories-dark/60 rounded-lg overflow-hidden shadow-sm hover-lift border border-stories-green/10 group transition-all duration-300 p-3",
                            isVisible && `opacity-0 animate-fade-up delay-${Math.min(index * 100 + 300, 1000)}`
                          )}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-medium text-sm">{item.name}</h3>
                            <span className="font-medium text-stories-green text-sm">{item.price}</span>
                          </div>
                          <p className="text-stories-dark/70 dark:text-white/70 text-xs">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!selectedCategory && (
            <div className="text-center max-w-2xl mx-auto mt-12 opacity-0 animate-fade-in delay-300">
              <h2 className="text-2xl font-bold mb-4">Select a Category Above</h2>
              <p className="text-stories-dark/70 dark:text-white/70 mb-6">
                Explore our diverse menu by selecting one of our categories to view all available options.
              </p>
            </div>
          )}
        </div>
        
        <CateringFormSection />
      </main>
      <Footer />
    </>
  );
};

export default Menu;

