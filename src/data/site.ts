export const site = {
  brand: "Luxury Floral Gifts Template",
  alt: "Boutique Floral Gifting Studio",
  founder: "Founder Name Placeholder",
  pickupCity: "Your City, State",
  phone: "(000) 000-0000",
  phoneRaw: "0000000000",
  whatsappLink: "https://wa.me/10000000000?text=Hi%2C%20I%27d%20love%20to%20place%20an%20order.",
  catalogUrl: "#collection",
  payments: [
    { label: "Payment Option 1", value: "Replace me" },
    { label: "Payment Option 2", value: "Replace me" },
    { label: "Payment Option 3", value: "Replace me" },
  ],
} as const;

export type CategoryKey = "Roses" | "Eternal Roses" | "Gift Box" | "Breakfast" | "Basket";

export type Product = {
  id:
    | "heart-box-large"
    | "heart-box-baileys"
    | "hydrangeas-box"
    | "box-in-love"
    | "box-baileys"
    | "premium-breakfast"
    | "roses-cylinder-breakfast"
    | "eternal-i-love-you"
    | "magnetic-gift-box";
  price: number;
  category: CategoryKey;
  image?: string;
};

export const products: Product[] = [
  {
    id: "heart-box-large",
    price: 195,
    category: "Roses",
    image: "/images/generated/luxury-rose-bouquet.png",
  },
  {
    id: "heart-box-baileys",
    price: 180,
    category: "Basket",
    image: "/images/generated/holiday-gift-basket.png",
  },
  {
    id: "hydrangeas-box",
    price: 175,
    category: "Roses",
    image: "/images/generated/romantic-red-rose-arrangement.png",
  },
  {
    id: "box-in-love",
    price: 143,
    category: "Gift Box",
    image: "/images/generated/birthday-pastel-bouquet.png",
  },
  {
    id: "box-baileys",
    price: 157,
    category: "Gift Box",
    image: "/images/generated/floral-gifting-hero.png",
  },
  {
    id: "premium-breakfast",
    price: 176,
    category: "Gift Box",
    image: "/images/generated/holiday-gift-basket.png",
  },
  {
    id: "roses-cylinder-breakfast",
    price: 150,
    category: "Roses",
    image: "/images/generated/luxury-rose-bouquet.png",
  },
  {
    id: "eternal-i-love-you",
    price: 132,
    category: "Eternal Roses",
    image: "/images/generated/romantic-red-rose-arrangement.png",
  },
  {
    id: "magnetic-gift-box",
    price: 90,
    category: "Basket",
    image: "/images/generated/birthday-pastel-bouquet.png",
  },
];

export const categoryIcons = ["flower", "basket", "ribbon", "leaf"] as const;
