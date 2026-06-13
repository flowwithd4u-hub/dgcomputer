import gaming from "@/assets/product-gaming.jpg";
import gaming1 from "@/assets/products/gaming-1.jpg";
import gaming2 from "@/assets/products/gaming-2.jpg";
import business from "@/assets/product-business.jpg";
import business1 from "@/assets/products/business-1.jpg";
import business2 from "@/assets/products/business-2.jpg";
import pc from "@/assets/product-pc.jpg";
import pc1 from "@/assets/products/pc-1.jpg";
import pc2 from "@/assets/products/pc-2.jpg";
import accessories from "@/assets/product-accessories.jpg";
import acc1 from "@/assets/products/acc-1.jpg";
import acc2 from "@/assets/products/acc-2.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  badge?: string;
  rating: number;
  specs: { label: string; value: string }[];
  image: string;
};

export type Category = {
  slug: "gaming" | "business" | "custom-pc" | "accessories";
  label: string;
  title: string;
  description: string;
  hero: string;
  accent: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "gaming",
    label: "Gaming",
    title: "Frame-perfect performance.",
    description:
      "RTX-class graphics, vapor-chamber cooling and high-refresh OLED displays — engineered for esports and AAA titles.",
    hero: gaming,
    accent: "from-fuchsia-500/30 via-cyan-glow/20 to-transparent",
    products: [
      {
        id: "predator-x18",
        name: "Predator X18 Pro",
        tagline: "Flagship 18\" battle station.",
        price: "$3,499",
        badge: "Editor's Pick",
        rating: 4.9,
        specs: [
          { label: "CPU", value: "Intel Core i9-14900HX" },
          { label: "GPU", value: "RTX 4090 16GB" },
          { label: "Display", value: "18\" 240Hz Mini-LED" },
          { label: "Memory", value: "64GB DDR5" },
        ],
        image: gaming1,
      },
      {
        id: "razer-blade-16",
        name: "Razer Blade 16 OLED",
        tagline: "Thin, brutal, dual-mode OLED.",
        price: "$2,799",
        rating: 4.8,
        specs: [
          { label: "CPU", value: "Intel Core i9-14900HX" },
          { label: "GPU", value: "RTX 4080 12GB" },
          { label: "Display", value: "16\" 240Hz QHD+ OLED" },
          { label: "Memory", value: "32GB DDR5" },
        ],
        image: gaming,
      },
      {
        id: "rog-strix",
        name: "ROG Strix Scar 17",
        tagline: "Tournament-tuned chassis.",
        price: "$2,199",
        rating: 4.7,
        specs: [
          { label: "CPU", value: "AMD Ryzen 9 7945HX" },
          { label: "GPU", value: "RTX 4070 8GB" },
          { label: "Display", value: "17.3\" 240Hz IPS" },
          { label: "Memory", value: "32GB DDR5" },
        ],
        image: gaming2,
      },
    ],
  },
  {
    slug: "business",
    label: "Business",
    title: "Featherweight productivity.",
    description:
      "Sub-1.2kg chassis, all-day battery and silicon-level security — built for boardrooms, lounges and long-haul flights.",
    hero: business,
    accent: "from-cyan-glow/25 via-silver/20 to-transparent",
    products: [
      {
        id: "macbook-air-15",
        name: "MacBook Air 15\" M3",
        tagline: "Whisper-quiet, all-day fast.",
        price: "$1,499",
        badge: "Bestseller",
        rating: 4.9,
        specs: [
          { label: "CPU", value: "Apple M3 (8-core)" },
          { label: "GPU", value: "10-core Apple GPU" },
          { label: "Display", value: "15.3\" Liquid Retina" },
          { label: "Memory", value: "16GB Unified" },
        ],
        image: business1,
      },
      {
        id: "xps-13",
        name: "Dell XPS 13 Plus",
        tagline: "Zero-bezel productivity.",
        price: "$1,299",
        rating: 4.7,
        specs: [
          { label: "CPU", value: "Intel Core Ultra 7" },
          { label: "GPU", value: "Intel Arc Graphics" },
          { label: "Display", value: "13.4\" OLED Touch" },
          { label: "Memory", value: "16GB LPDDR5" },
        ],
        image: business,
      },
      {
        id: "thinkpad-x1",
        name: "ThinkPad X1 Carbon",
        tagline: "MIL-spec lightweight legend.",
        price: "$1,899",
        rating: 4.8,
        specs: [
          { label: "CPU", value: "Intel Core Ultra 7 vPro" },
          { label: "GPU", value: "Intel Arc Graphics" },
          { label: "Display", value: "14\" 2.8K OLED" },
          { label: "Memory", value: "32GB LPDDR5x" },
        ],
        image: business2,
      },
    ],
  },
  {
    slug: "custom-pc",
    label: "Custom PC",
    title: "Configured to your workflow.",
    description:
      "Hand-assembled rigs for creators, developers and traders — every fan, cable and pixel chosen by you, built by our engineers.",
    hero: pc,
    accent: "from-cyan-glow/30 via-fuchsia-500/15 to-transparent",
    products: [
      {
        id: "apex-architect",
        name: "Apex Architect",
        tagline: "Workstation for 3D & ML.",
        price: "$4,299",
        badge: "New",
        rating: 5.0,
        specs: [
          { label: "CPU", value: "AMD Threadripper 7980X" },
          { label: "GPU", value: "RTX 4090 24GB" },
          { label: "Storage", value: "4TB Gen5 NVMe" },
          { label: "Cooling", value: "Custom liquid loop" },
        ],
        image: pc,
      },
      {
        id: "halo-stream",
        name: "Halo Stream Rig",
        tagline: "Stream + game, zero compromise.",
        price: "$2,799",
        rating: 4.8,
        specs: [
          { label: "CPU", value: "Intel Core i7-14700K" },
          { label: "GPU", value: "RTX 4070 Ti Super" },
          { label: "Storage", value: "2TB Gen4 NVMe" },
          { label: "Cooling", value: "360mm AIO" },
        ],
        image: pc1,
      },
      {
        id: "core-studio",
        name: "Core Studio Mini",
        tagline: "Silent SFF creator build.",
        price: "$1,999",
        rating: 4.7,
        specs: [
          { label: "CPU", value: "AMD Ryzen 9 7900X" },
          { label: "GPU", value: "RTX 4070 Super" },
          { label: "Storage", value: "2TB Gen4 NVMe" },
          { label: "Form", value: "11L mini-ITX" },
        ],
        image: pc2,
      },
    ],
  },
  {
    slug: "accessories",
    label: "Accessories",
    title: "Peripherals that match your craft.",
    description:
      "Mechanical keyboards, studio-grade headphones, color-true monitors and dock-anywhere hubs — only the brands we'd use ourselves.",
    hero: accessories,
    accent: "from-silver/30 via-cyan-glow/15 to-transparent",
    products: [
      {
        id: "sennheiser-momentum",
        name: "Sennheiser Momentum 4",
        tagline: "Reference ANC, 60-hour life.",
        price: "$349",
        badge: "Pro Audio",
        rating: 4.9,
        specs: [
          { label: "Driver", value: "42mm transducer" },
          { label: "Battery", value: "60 hours" },
          { label: "Codec", value: "aptX Adaptive" },
          { label: "Weight", value: "293 g" },
        ],
        image: acc1,
      },
      {
        id: "mx-master-4",
        name: "Logitech MX Master 4",
        tagline: "The pro's pointing device.",
        price: "$129",
        rating: 4.8,
        specs: [
          { label: "Sensor", value: "8000 DPI Darkfield" },
          { label: "Battery", value: "70 days" },
          { label: "Connect", value: "Bluetooth + USB-C" },
          { label: "Buttons", value: "7 customizable" },
        ],
        image: acc2,
      },
      {
        id: "anker-dock",
        name: "Anker 778 Thunderbolt",
        tagline: "12-in-1 desk command center.",
        price: "$249",
        rating: 4.7,
        specs: [
          { label: "Bandwidth", value: "Thunderbolt 4" },
          { label: "Display", value: "Dual 4K @ 60Hz" },
          { label: "PD", value: "100W passthrough" },
          { label: "Ports", value: "12 total" },
        ],
        image: accessories,
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
