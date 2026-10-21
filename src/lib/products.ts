export type Product = {
  id: number;
  name: string;
  brand: string;
  type: "Road Bike" | "Gravel Bike" | "TT Bike";
  price?: number;
  modelYear?: number;
  image?: string;
  delivery: string;
  postUrl?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Charon Gravel Bike 2026",
    brand: "Sunpeed",
    type: "Gravel Bike",
    price: 89999,
    modelYear: 2026,
    delivery: "15–25 working days",
    image: "/images/charon.png",
    postUrl: "https://www.facebook.com/share/p/1YXBGFNiBF/",
  },
  {
    id: 2,
    name: "Sunpeed Triton 2026",
    brand: "Sunpeed",
    type: "Road Bike",
    price: 46999,
    modelYear: 2026,
    image: "/images/sunpeed-triton.png",
    delivery: "15–25 working days",
    postUrl: "https://www.facebook.com/share/p/1DZabJ7brM/",
  },
  {
    id: 3,
    name: "MARS-A Road Bike",
    brand: "Sunpeed",
    type: "Road Bike",
    price: 61999,
    delivery: "15–25 working days",
    image: "/images/mars-a.png",
    postUrl: "https://www.facebook.com/share/p/1Dbbn27EC4/",
  },
  {
    id: 4,
    name: "Sunpeed ASTRO",
    brand: "Sunpeed",
    type: "Road Bike",
    price: 80000,
    delivery: "15–25 working days",
    image: "/images/astro.png",
    postUrl: "https://fb.watch/HD_R71qxYS/",
  },
  {
    id: 5,
    name: "Sunpeed Invincible Carbon Road Bike",
    brand: "Sunpeed",
    type: "Road Bike",
    price: 117999,
    modelYear: 2025,

    image: "/images/Invincible-4.png",
    delivery: "15–25 working days",
    postUrl: "https://www.facebook.com/share/p/17gdpkpxiu/",
  },

  {
    id: 7,
    name: "SUNPEED MARS-A PRO",
    brand: "Sunpeed",
    type: "Road Bike",
    price: 71500,
    delivery: "15–25 working days",
    image: "/images/SUNPEED MARS-A PRO.png",
    postUrl: "https://www.facebook.com/share/p/194oenontz/",
  },
  {
    id: 8,
    name: "SAVA EX7",
    brand: "Sava",
    type: "Road Bike",
    price: 73000,
    delivery: "15–25 working days",
    image: "/images/Savaex7.png",
    postUrl:
      "https://www.facebook.com/share/p/1Bq2VDdKMA/",
  },
  {
    id: 9,
    name: "GRAVEL G2 MAX",
    brand: "Twitter",
    type: "Gravel Bike",
    image: "/images/GRAVEL G2 MAX.png",
    delivery: "15–25 working days",
    postUrl:
      "https://www.facebook.com/share/p/19ZQHrHoxK/",
  },
  {
    id: 10,
    name: "Sunpeed Invincible Expert",
    brand: "Sunpeed",
    type: "Road Bike",
    price: 152000,
    image: "/images/Sunpeed Invincible Expert.png",
    delivery: "15–25 working days",
    postUrl:
      "https://www.facebook.com/share/p/18ynwE4LAn/",

  },
  {
    id: 11,
    name: "Trinx TDO 700",
    brand: "Trinx",
    type: "Road Bike",
    price: 63000,
    image: "/images/Trinx TDO 700.png",
    delivery: "15–25 working days",
    postUrl:
      "https://www.facebook.com/share/p/19vRMWZuKy/",


  },
  {
    id: 12,
    name: "Twitter T8 Pro",
    brand: "Twitter",
    type: "Road Bike",
    price: 165000,
    image: "/images/t8pro.png",
    delivery: "15–25 working days",
    postUrl:

      "https://www.facebook.com/share/r/1CDcT8fK4d/"
  },
  {
    id: 13,
    name: "Twitter R10 Pro",
    brand: "Twitter",
    type: "Road Bike",
    image: "/images/t10pro.png",
    delivery: "15–25 working days",
    postUrl:

      "https://www.facebook.com/share/p/1CpHybXya9/"
  },
  {
    id: 14,
    name: "Java Fuco Top 6",
    brand: "Java",
    type: "Road Bike",
    delivery: "15–25 working days",
    image: "/images/javatop6.png",
    postUrl:
      "https://www.facebook.com/share/p/19mEGgcBWz/",
  },
  {
    id: 15,
    name: "Java VEGA",
    brand: "TT Bike",
    type: "TT Bike",
    price: 250000,
    image: "/images/ttvega.png",
    delivery: "15–25 working days",
    postUrl:
      "https://www.facebook.com/share/p/19mthBV9GU/?mibextid=wwXIfr",

  },
  {
    id: 16,
    name: "SAVA EX8 PRO",
    brand: "Sava",
    type: "Road Bike",
    delivery: "15–25 working days",
    image: "/images/Savaex8.png",
    postUrl:
      "https://www.facebook.com/share/p/14otxXwvSNR/",
  }

];
