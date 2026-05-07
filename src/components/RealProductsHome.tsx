import { Gem, Headphones, ShoppingBag, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type RealProductItem = {
  id: string;
  title: string;
  category: string;
  price: number;
  oldPrice: number;
  image: string;
};

type ShowcaseSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  icon: LucideIcon;
  products: RealProductItem[];
};

const showcaseSections: ShowcaseSection[] = [
  {
    id: "real-beauty-products",
    eyebrow: "Real Beauty Products",
    title: "Beauty & Fragrance Picks",
    description: "Authentic product photography for cosmetics, perfume, and self-care essentials.",
    accent: "from-[#fff2ea] to-[#fff8f3]",
    icon: Sparkles,
    products: [
      {
        id: "real-beauty-1",
        title: "Luxury Perfume Bottle",
        category: "Fragrance",
        price: 4500,
        oldPrice: 5900,
        image: "https://images.pexels.com/photos/6738807/pexels-photo-6738807.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-beauty-2",
        title: "Studio Makeup Collection",
        category: "Beauty",
        price: 2850,
        oldPrice: 3400,
        image: "https://images.pexels.com/photos/3148938/pexels-photo-3148938.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-beauty-3",
        title: "Premium Cosmetic Kit",
        category: "Cosmetics",
        price: 2300,
        oldPrice: 2999,
        image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-beauty-4",
        title: "White Perfume Essence",
        category: "Fragrance",
        price: 3950,
        oldPrice: 4650,
        image: "https://images.pexels.com/photos/3785784/pexels-photo-3785784.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
  {
    id: "real-fashion-products",
    eyebrow: "Real Fashion Products",
    title: "Bags, Accessories & Apparel",
    description: "Lifestyle and accessory photography for fashion-forward shopping sections on the homepage.",
    accent: "from-[#fff7ee] to-[#ffffff]",
    icon: ShoppingBag,
    products: [
      {
        id: "real-fashion-1",
        title: "Designer Handbag",
        category: "Bags",
        price: 6800,
        oldPrice: 7900,
        image: "https://images.pexels.com/photos/12194934/pexels-photo-12194934.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-fashion-2",
        title: "Unboxed Premium Purse",
        category: "Fashion",
        price: 5400,
        oldPrice: 6250,
        image: "https://images.pexels.com/photos/6207710/pexels-photo-6207710.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-fashion-3",
        title: "Black Leather Handbag",
        category: "Accessories",
        price: 4900,
        oldPrice: 5700,
        image: "https://images.pexels.com/photos/3973974/pexels-photo-3973974.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-fashion-4",
        title: "Classic White Shirt",
        category: "Apparel",
        price: 2150,
        oldPrice: 2799,
        image: "https://images.pexels.com/photos/7432216/pexels-photo-7432216.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
  {
    id: "real-tech-products",
    eyebrow: "Real Tech Products",
    title: "Tech & Smart Lifestyle",
    description: "Modern real-world photography for gadgets, watches, and home appliance merchandising.",
    accent: "from-[#fff4ea] to-[#fffdfb]",
    icon: Headphones,
    products: [
      {
        id: "real-tech-1",
        title: "Wireless Earbuds Pro",
        category: "Audio",
        price: 3600,
        oldPrice: 4200,
        image: "https://images.pexels.com/photos/3921864/pexels-photo-3921864.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-tech-2",
        title: "Luxury Smart Watch",
        category: "Wearables",
        price: 7850,
        oldPrice: 8990,
        image: "https://images.pexels.com/photos/17147831/pexels-photo-17147831/free-photo-of-close-up-of-rolex-on-hand.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-tech-3",
        title: "Home Appliance Display",
        category: "Kitchen",
        price: 12500,
        oldPrice: 14200,
        image: "https://images.pexels.com/photos/19599329/pexels-photo-19599329/free-photo-of-kitchen-appliances-in-a-store.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-tech-4",
        title: "Premium Watch Edition",
        category: "Accessories",
        price: 6900,
        oldPrice: 7700,
        image: "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
  {
    id: "real-premium-products",
    eyebrow: "Real Premium Products",
    title: "Gourmet & Lifestyle Selection",
    description: "Extra visual product blocks for the homepage using authentic retail-style photography.",
    accent: "from-[#fff9f1] to-[#fff6ee]",
    icon: Gem,
    products: [
      {
        id: "real-premium-1",
        title: "Fresh Orange Bottle",
        category: "Beverages",
        price: 1250,
        oldPrice: 1650,
        image: "https://images.pexels.com/photos/8679338/pexels-photo-8679338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-premium-2",
        title: "Kitchen Counter Essentials",
        category: "Home Goods",
        price: 9400,
        oldPrice: 10999,
        image: "https://images.pexels.com/photos/4816319/pexels-photo-4816319.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-premium-3",
        title: "Fresh Juice Collection",
        category: "Refreshments",
        price: 1100,
        oldPrice: 1480,
        image: "https://images.pexels.com/photos/5946803/pexels-photo-5946803.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      {
        id: "real-premium-4",
        title: "Shopping Lifestyle Pick",
        category: "Premium Lifestyle",
        price: 3950,
        oldPrice: 4900,
        image: "https://images.pexels.com/photos/6567383/pexels-photo-6567383.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
    ],
  },
];

function formatRupees(value: number) {
  return `Rs. ${value.toLocaleString()}`;
}

export default function RealProductsHome({
  onAddToCart,
  onBuyNow,
}: {
  onAddToCart: (product: RealProductItem) => void;
  onBuyNow: (product: RealProductItem) => void;
}) {
  return (
    <section className="mt-9 space-y-7" id="real-products">
      {showcaseSections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]"
        >
          <div className={`bg-gradient-to-r ${section.accent} px-5 py-7 sm:px-7 lg:px-8`}>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black uppercase tracking-[0.24em] text-[#ff6a00] shadow-sm">
                  <section.icon className="h-4 w-4" />
                  {section.eyebrow}
                </div>
                <h2 className="mt-4 text-3xl font-black text-[#1f1f1f] sm:text-5xl">{section.title}</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#576070]">{section.description}</p>
              </div>
              <a href="#home" className="text-lg font-bold text-[#ff6a00] underline underline-offset-4">
                Back to top
              </a>
            </div>
          </div>

          <div className="grid gap-5 p-5 md:grid-cols-2 xl:grid-cols-4 xl:p-8">
            {section.products.map((product) => (
              <article
                key={`${section.id}-${product.title}`}
                className="overflow-hidden rounded-[24px] border border-[#f0f0f0] bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[4/4.1] overflow-hidden bg-[#fff8f3]">
                  <div className="absolute left-3 top-3 z-10 rounded-r-xl bg-[#ff6976] px-4 py-2 text-sm font-black uppercase text-white">
                    Real Image
                  </div>
                  <img src={product.image} alt={product.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">{product.category}</div>
                  <h3 className="mt-3 line-clamp-2 min-h-[64px] text-[21px] font-semibold leading-8 text-[#222]">
                    {product.title}
                  </h3>
                  <div className="mt-4 flex items-end gap-3">
                    <span className="text-[24px] font-black text-[#ff6a00]">{formatRupees(product.price)}</span>
                    <span className="text-lg text-[#6b7280] line-through">{formatRupees(product.oldPrice)}</span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <button
                      onClick={() => onAddToCart(product)}
                      className="w-full rounded-xl border border-[#ff6a00] px-5 py-3 text-sm font-black uppercase text-[#ff6a00]"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => onBuyNow(product)}
                      className="w-full rounded-xl bg-[#ff6a00] px-5 py-3 text-sm font-black uppercase text-white shadow-[0_12px_24px_rgba(255,106,0,0.18)]"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
