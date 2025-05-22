
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
    image: "https://i.pinimg.com/736x/04/0d/d6/040dd628837c4b213c49479c94fbef8a.jpg",
  },
  {
    id: 2,
    name: "Premium Court Shoes",
    category: "Tennis",
    price: "$320.00",
    image: "https://i.pinimg.com/736x/d4/bf/13/d4bf1341cedb3ecb0fe6aebb0331e24a.jpg",
  },
  {
    id: 3,
    name: "Pro Basketball",
    category: "Basketball",
    price: "$195.00",
    image: "https://i.pinimg.com/736x/b1/fe/ec/b1feeca52a2dde905a6da836a146127f.jpg",
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
    image: "https://i.pinimg.com/736x/a7/db/2d/a7db2dbcd08b50a74779d853dcf4308b.jpg",
  },
  {
    id: 7,
    name: "Hydrodynamic Swim Goggles",
    category: "Swimming",
    price: "$120.00",
    image: "https://i.pinimg.com/736x/64/56/c6/6456c6739ad41c63972f4ae80c06ee70.jpg",
  },
  {
    id: 8,
    name: "Ultralight Running Shoes",
    category: "Running",
    price: "$290.00",
    image: "https://i.pinimg.com/736x/de/2d/02/de2d021e61235ccfcd81fa355f6790fc.jpg",
  },
  {
    id: 9,
    name: "Professional Tennis Bag",
    category: "Tennis",
    price: "$275.00",
    image: "https://i.pinimg.com/736x/61/46/0e/61460e89cfba0ae8c5758c32f6407f19.jpg",
  },
  {
    id: 10,
    name: "Compression Tennis Apparel",
    category: "Tennis",
    price: "$180.00",
    image: "https://i.pinimg.com/736x/ae/fb/95/aefb958516c3f20b4c976541d32df001.jpg",
  },
  {
    id: 11,
    name: "Basketball Performance Jersey",
    category: "Basketball",
    price: "$150.00",
    image: "https://i.pinimg.com/736x/a1/d8/66/a1d866e137930d2fa34e5e846a99b208.jpg",
  },
  {
    id: 12,
    name: "Premium Football Boots",
    category: "Football",
    price: "$320.00",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=600",
  },
];


export const allProducts = [...baseProducts];
