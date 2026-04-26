export const site = {
  brand: "Luxury Gifts Boston",
  alt: "Sunrise & Petals Boston",
  founder: "Maria Camila Ríos Ramírez",
  pickupCity: "Revere, MA",
  phone: "617-459-8957",
  phoneRaw: "6174598957",
  whatsappLink: "https://wa.me/16174598957?text=Hi%20Camila%2C%20I%27d%20love%20to%20place%20an%20order.",
  catalogUrl: "/catalogs/Valentine%E2%80%99s%20Day%20catalog%20camila.pdf",
  payments: [
    { label: "Cash App", value: "$CamilaRios1" },
    { label: "Venmo", value: "@Maria-Rios636" },
    { label: "Zelle", value: "617-459-8957" },
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
  { id: "heart-box-large", price: 195, category: "Roses", image: "/images/flower-bouqets/rose-1.jpg" },
  { id: "heart-box-baileys", price: 180, category: "Roses", image: "/images/flower-bouqets/set-1/655677755_17894497131428154_47658270050642268_n.jpg" },
  { id: "hydrangeas-box", price: 175, category: "Gift Box" },
  { id: "box-in-love", price: 143, category: "Gift Box" },
  { id: "box-baileys", price: 157, category: "Gift Box" },
  { id: "premium-breakfast", price: 176, category: "Breakfast" },
  { id: "roses-cylinder-breakfast", price: 150, category: "Breakfast" },
  { id: "eternal-i-love-you", price: 132, category: "Eternal Roses", image: "/images/gift baskets/gift-basket-2.jpg" },
  { id: "magnetic-gift-box", price: 90, category: "Basket", image: "/images/gift baskets/gift-basket-1.jpg" },
];

export const categoryIcons = ["flower", "basket", "ribbon", "leaf"] as const;
