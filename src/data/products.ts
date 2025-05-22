
export interface Product {
  id: number;
  name: string;
  category: string;
  description?: string;
  price: string;
  image: string;
}

// Base products from original implementation
const baseProducts = [
  {
    id: 1,
    name: "Elite Performance Tennis Racket",
    category: "Tennis",
    price: "$495.00",
    image: "https://images.unsplash.com/photo-1617229921943-8c3e4eefc7f0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Premium Court Shoes",
    category: "Tennis",
    price: "$320.00",
    image: "https://images.unsplash.com/photo-1588361861040-ac9b1018dcfa?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Pro Basketball",
    category: "Basketball",
    price: "$195.00",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Signature Series Basketball Shoes",
    category: "Basketball",
    price: "$380.00",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    name: "Tournament Football",
    category: "Football",
    price: "$240.00",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    name: "Carbon Fiber Golf Clubs Set",
    category: "Golf",
    price: "$2,950.00",
    image: "https://images.unsplash.com/photo-1535131749006-b7d58e7896b5?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 7,
    name: "Hydrodynamic Swim Goggles",
    category: "Swimming",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1576663892698-8a49a16ff96e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 8,
    name: "Ultralight Running Shoes",
    category: "Running",
    price: "$290.00",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 9,
    name: "Professional Tennis Bag",
    category: "Tennis",
    price: "$275.00",
    image: "https://images.unsplash.com/photo-1521336993297-eeb2645f76a7?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 10,
    name: "Compression Tennis Apparel",
    category: "Tennis",
    price: "$180.00",
    image: "https://images.unsplash.com/photo-1534615098164-44710336b2c6?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 11,
    name: "Basketball Performance Jersey",
    category: "Basketball",
    price: "$150.00",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 12,
    name: "Premium Football Boots",
    category: "Football",
    price: "$320.00",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600",
  },
];

// Additional 50 products
const additionalProducts: Product[] = [
  // Tennis Products
  {
    id: 13,
    name: "Pro Tour Tennis Strings",
    category: "Tennis",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1622279457486-28f93261c643?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 14,
    name: "Performance Tennis Shorts",
    category: "Tennis",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1515171309414-6f2848247b7f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 15,
    name: "Competition Tennis Wristbands",
    category: "Tennis",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1623912879699-5090abb8909b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 16,
    name: "Tournament Tennis Polo",
    category: "Tennis",
    price: "$150.00",
    image: "https://images.unsplash.com/photo-1620318135208-c3fac615b246?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 17,
    name: "Elite Tennis Cap",
    category: "Tennis",
    price: "$85.00",
    image: "https://images.unsplash.com/photo-1600185016288-7939425391b4?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 18,
    name: "Pro Tennis Socks Set",
    category: "Tennis",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1583329650189-9a1d471da5dd?auto=format&fit=crop&q=80&w=600",
  },
  
  // Basketball Products
  {
    id: 19,
    name: "Premium Basketball Shorts",
    category: "Basketball",
    price: "$125.00",
    image: "https://images.unsplash.com/photo-1562490839-985a43149b9a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 20,
    name: "Signature Basketball Socks",
    category: "Basketball",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1608906062872-7504e4433d96?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 21,
    name: "Elite Basketball Training Kit",
    category: "Basketball",
    price: "$310.00",
    image: "https://images.unsplash.com/photo-1517747614396-d21a78b650e7?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 22,
    name: "Pro Court Basketball Tank",
    category: "Basketball",
    price: "$140.00",
    image: "https://images.unsplash.com/photo-1579622315422-1cf0da6b5d7a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 23,
    name: "Tournament Basketball Hoop",
    category: "Basketball",
    price: "$795.00",
    image: "https://images.unsplash.com/photo-1509984487929-4119602d7c56?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 24,
    name: "Professional Basketball Arm Sleeve",
    category: "Basketball",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1616337895137-225173583cb0?auto=format&fit=crop&q=80&w=600",
  },

  // Football Products  
  {
    id: 25,
    name: "Pro Touch Football Gloves",
    category: "Football",
    price: "$95.00",
    image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 26,
    name: "Elite Football Jersey",
    category: "Football",
    price: "$175.00",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 27,
    name: "Competition Football Shin Guards",
    category: "Football",
    price: "$85.00",
    image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 28,
    name: "Goalkeeper Pro Gloves",
    category: "Football",
    price: "$155.00",
    image: "https://images.unsplash.com/photo-1616349485181-1d9c7f46a54d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 29,
    name: "Pro Football Training Cone Set",
    category: "Football",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 30,
    name: "Match Day Football Socks",
    category: "Football",
    price: "$40.00",
    image: "https://images.unsplash.com/photo-1526604648377-1433c7c1f5b7?auto=format&fit=crop&q=80&w=600",
  },

  // Golf Products
  {
    id: 31,
    name: "Precision Golf Putter",
    category: "Golf",
    price: "$580.00",
    image: "https://images.unsplash.com/photo-1622143538038-40a88999868d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 32,
    name: "Pro Golf Glove",
    category: "Golf",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1632939282171-58ab9d6cf077?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 33,
    name: "Tournament Golf Polo",
    category: "Golf",
    price: "$195.00",
    image: "https://images.unsplash.com/photo-1593398107751-9ed017f7960f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 34,
    name: "Premium Golf Balls (Set of 12)",
    category: "Golf",
    price: "$120.00",
    image: "https://images.unsplash.com/photo-1588365454008-79d80256db0e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 35,
    name: "Elite Golf Bag",
    category: "Golf",
    price: "$920.00",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 36,
    name: "Pro Golf Cap",
    category: "Golf",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1611374243147-44a702c2d44c?auto=format&fit=crop&q=80&w=600",
  },

  // Swimming Products
  {
    id: 37,
    name: "Competition Swim Cap",
    category: "Swimming",
    price: "$55.00",
    image: "https://images.unsplash.com/photo-1593826788056-4565442283d8?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 38,
    name: "Elite Performance Swimsuit",
    category: "Swimming",
    price: "$290.00",
    image: "https://images.unsplash.com/photo-1575574202425-915c2ab833fz?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 39,
    name: "Pro Swim Fins",
    category: "Swimming",
    price: "$175.00",
    image: "https://images.unsplash.com/photo-1578413686566-014f46cf2fbf?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 40,
    name: "Performance Swim Paddles",
    category: "Swimming",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1599076413624-83ee5b8c0b62?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 41,
    name: "Premium Swim Training Board",
    category: "Swimming",
    price: "$95.00",
    image: "https://images.unsplash.com/photo-1579136122134-4feba63d8dad?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 42,
    name: "Waterproof Sports Bag",
    category: "Swimming",
    price: "$225.00",
    image: "https://images.unsplash.com/photo-1598116061746-c1b0ee65eafa?auto=format&fit=crop&q=80&w=600",
  },

  // Running Products
  {
    id: 43,
    name: "Carbon Plate Racing Shoes",
    category: "Running",
    price: "$350.00",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 44,
    name: "Performance Running Tights",
    category: "Running",
    price: "$180.00",
    image: "https://images.unsplash.com/photo-1617064951929-648a76b005cc?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 45,
    name: "Elite Running Jacket",
    category: "Running",
    price: "$275.00",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 46,
    name: "Sports Fitness Watch",
    category: "Running",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 47,
    name: "Compression Running Socks",
    category: "Running",
    price: "$50.00",
    image: "https://images.unsplash.com/photo-1535486607281-4fc90307a8bb?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 48,
    name: "Hydration Running Belt",
    category: "Running",
    price: "$95.00",
    image: "https://images.unsplash.com/photo-1584415299150-6c1a21eb7713?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 49,
    name: "Reflective Running Cap",
    category: "Running",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 50,
    name: "Lightweight Running Shorts",
    category: "Running",
    price: "$115.00",
    image: "https://images.unsplash.com/photo-1602094771822-3bd963a38f19?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 51,
    name: "Running Performance Top",
    category: "Running",
    price: "$130.00",
    image: "https://images.unsplash.com/photo-1509398484917-2a5b6439feef?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 52,
    name: "Anti-Blister Running Socks",
    category: "Running",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1600869286326-702b10b3961c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 53,
    name: "Marathon Training Shoes",
    category: "Running",
    price: "$310.00",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 54,
    name: "Running Recovery Slides",
    category: "Running",
    price: "$75.00",
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 55,
    name: "Trail Running Backpack",
    category: "Running",
    price: "$165.00",
    image: "https://images.unsplash.com/photo-1529720317453-c8da503f2051?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 56,
    name: "Stability Running Shoes",
    category: "Running",
    price: "$290.00",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 57,
    name: "Winter Running Gloves",
    category: "Running",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 58,
    name: "Running LED Visibility Vest",
    category: "Running",
    price: "$85.00",
    image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 59,
    name: "Trail Running Gaiters",
    category: "Running",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600", 
  },
  {
    id: 60,
    name: "Running Sunglasses",
    category: "Running",
    price: "$195.00",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 61,
    name: "High-Performance Running Headphones",
    category: "Running",
    price: "$220.00",
    image: "https://images.unsplash.com/photo-1564424224827-cd24b8915874?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 62,
    name: "Running Training Calendar",
    category: "Running",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1522836924445-4478bdeb860c?auto=format&fit=crop&q=80&w=600",
  },
];

// Combine base products with additional products
export const allProducts = [...baseProducts, ...additionalProducts];
