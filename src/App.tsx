import { type FormEvent, type ReactNode, useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUp,
  Baby,
  BedDouble,
  Car,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flame,
  Gem,
  Gift,
  Hammer,
  Heart,
  LogOut,
  Menu,
  Minus,
  Monitor,
  PenTool,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Star,
  Store,
  Trash2,
  Truck,
  User,
  UtensilsCrossed,
  X,
} from "lucide-react";
import RealProductsHome, { type RealProductItem } from "./components/RealProductsHome";

type ApiProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  images?: string[];
  brand?: string;
};

type StoreItem = {
  id: string;
  title: string;
  category: string;
  price: number;
  oldPrice: number;
  image: string;
  rating: number;
  description: string;
};

type CartItem = StoreItem & {
  quantity: number;
};

type View = "home" | "cart" | "checkout" | "success";

type CategoryItem = {
  label: string;
  icon: LucideIcon;
  color: string;
};

type CheckoutForm = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
};

const LOGIN_CREDENTIALS = {
  username: "Harrypotter24321@gmail.com",
  password: "Harry(890)",
};

const promoImage = "https://images.pexels.com/photos/6567383/pexels-photo-6567383.jpeg?auto=compress&cs=tinysrgb&w=1200";
const heroLifestyle = "https://images.pexels.com/photos/1004877/pexels-photo-1004877.jpeg?auto=compress&cs=tinysrgb&w=1200";
const CART_STORAGE_KEY = "orbi-functional-cart";

const navLinks = [
  { label: "Home", section: "home" },
  { label: "Collections", section: "collections" },
  { label: "Premium Products", section: "premium-products" },
  { label: "Flash Sale", section: "leftovers" },
  { label: "Become a Seller", section: "become-a-seller" },
];

const categories: CategoryItem[] = [
  { label: "Automobiles & Vehicles", icon: Car, color: "#f01885" },
  { label: "Tools, Diy & Outdoor", icon: Hammer, color: "#13e6d0" },
  { label: "Software", icon: Monitor, color: "#12f036" },
  { label: "Bedding & Bath", icon: BedDouble, color: "#ff1b13" },
  { label: "Food", icon: UtensilsCrossed, color: "#4614ff" },
  { label: "Stationery & Craft", icon: PenTool, color: "#47a8f5" },
  { label: "Watches, Bags & Jewellery", icon: Gem, color: "#ff5f72" },
  { label: "Premium Products", icon: Star, color: "#ffb21a" },
  { label: "Sports & Outdoor", icon: Dumbbell, color: "#3dcc80" },
  { label: "Mother & Baby", icon: Baby, color: "#af42f3" },
];

const slideMessages = [
  {
    eyebrow: "TRENDY KIDS COLLECTION",
    heading: "KIDS FASHION",
    text: "Bright colors, soft fabrics & trendy styles for kids.",
    button: "SHOP NOW",
  },
  {
    eyebrow: "LIMITED TIME WEEKEND DEAL",
    heading: "HOT SALE",
    text: "Special discounts on fashion, beauty, accessories and lifestyle products.",
    button: "GRAB OFFER",
  },
];

const REAL_PRODUCT_PHOTOS = {
  tech: [
    "https://images.pexels.com/photos/3921864/pexels-photo-3921864.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/23474/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
  ],
  watches: [
    "https://images.pexels.com/photos/17147831/pexels-photo-17147831/free-photo-of-close-up-of-rolex-on-hand.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  beauty: [
    "https://images.pexels.com/photos/3148938/pexels-photo-3148938.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6738807/pexels-photo-6738807.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3785784/pexels-photo-3785784.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  bags: [
    "https://images.pexels.com/photos/12194934/pexels-photo-12194934.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/6207710/pexels-photo-6207710.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3973974/pexels-photo-3973974.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  kitchen: [
    "https://images.pexels.com/photos/19599329/pexels-photo-19599329/free-photo-of-kitchen-appliances-in-a-store.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/4816319/pexels-photo-4816319.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  drinks: [
    "https://images.pexels.com/photos/8679338/pexels-photo-8679338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/5946803/pexels-photo-5946803.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],
  fashion: [promoImage, heroLifestyle, "https://images.pexels.com/photos/7432216/pexels-photo-7432216.jpeg?auto=compress&cs=tinysrgb&w=1200"],
  general: [promoImage, heroLifestyle],
} as const;

function formatRupees(value: number) {
  return `Rs. ${Math.round(value).toLocaleString()}`;
}

function oldRupees(price: number, oldPrice: number) {
  return oldPrice > price ? formatRupees(oldPrice) : formatRupees(price);
}

function getImagePool(product: ApiProduct) {
  const text = `${product.title} ${product.category} ${product.brand ?? ""}`.toLowerCase();

  if (["watch", "watches"].some((term) => text.includes(term))) return REAL_PRODUCT_PHOTOS.watches;
  if (["beauty", "fragrance", "fragrances", "skin", "makeup"].some((term) => text.includes(term))) return REAL_PRODUCT_PHOTOS.beauty;
  if (["bag", "bags", "purse", "handbag"].some((term) => text.includes(term))) return REAL_PRODUCT_PHOTOS.bags;
  if (["laptop", "phone", "smartphone", "tablet", "earbud", "airpod", "mobile", "tech"].some((term) => text.includes(term))) return REAL_PRODUCT_PHOTOS.tech;
  if (["kitchen", "appliance", "blender", "mixer", "fryer", "home"].some((term) => text.includes(term))) return REAL_PRODUCT_PHOTOS.kitchen;
  if (["juice", "drink", "grocer", "food", "beverage"].some((term) => text.includes(term))) return REAL_PRODUCT_PHOTOS.drinks;
  if (["dress", "shirt", "tops", "fashion", "shoe", "women", "men"].some((term) => text.includes(term))) return REAL_PRODUCT_PHOTOS.fashion;

  return [];
}

function getProductImage(product: ApiProduct, index = 0) {
  const pool = getImagePool(product);
  if (pool.length > 0) return pool[index % pool.length];
  if (product.images?.length) return product.images[index % product.images.length];
  return product.thumbnail || REAL_PRODUCT_PHOTOS.general[index % REAL_PRODUCT_PHOTOS.general.length];
}

function apiToStoreItem(product: ApiProduct, index = 0): StoreItem {
  const oldPrice = Math.round((product.price / (1 - product.discountPercentage / 100)) * 120);
  return {
    id: `api-${product.id}`,
    title: product.title,
    category: product.category,
    price: Math.round(product.price * 120),
    oldPrice,
    image: getProductImage(product, index),
    rating: product.rating,
    description: product.description,
  };
}

function realToStoreItem(product: RealProductItem): StoreItem {
  return {
    id: product.id,
    title: product.title,
    category: product.category,
    price: product.price,
    oldPrice: product.oldPrice,
    image: product.image,
    rating: 5,
    description: `${product.category} premium product with real product photography.`,
  };
}

const checkoutInitialState: CheckoutForm = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvc: "",
};

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(LOGIN_CREDENTIALS.username);
  const [password, setPassword] = useState(LOGIN_CREDENTIALS.password);
  const [loginError, setLoginError] = useState("");
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);
  const [currentView, setCurrentView] = useState<View>("home");
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [checkoutForm, setCheckoutForm] = useState<CheckoutForm>(checkoutInitialState);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (!authenticated) return;

    const controller = new AbortController();

    async function loadProducts() {
      try {
        setLoading(true);
        setFetchError("");
        const response = await fetch("https://dummyjson.com/products?limit=100", { signal: controller.signal });
        if (!response.ok) throw new Error("Unable to load products");
        const data = (await response.json()) as { products: ApiProduct[] };
        setProducts(data.products ?? []);
      } catch {
        if (!controller.signal.aborted) {
          setFetchError("We could not load products right now. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void loadProducts();
    return () => controller.abort();
  }, [authenticated]);

  useEffect(() => {
    if (!authenticated || currentView !== "home") return;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideMessages.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [authenticated, currentView]);

  useEffect(() => {
    if (!authenticated) return;
    const onScroll = () => setShowTopButton(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [authenticated]);

  const visibleProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (!keyword) return products;
    return products.filter((product) => {
      return [product.title, product.description, product.category, product.brand ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    });
  }, [products, search]);

  const flashSaleProducts = useMemo(() => {
    return [...visibleProducts]
      .sort((a, b) => b.discountPercentage - a.discountPercentage)
      .slice(0, 6)
      .map((product, index) => apiToStoreItem(product, index));
  }, [visibleProducts]);

  const topSelling = useMemo(() => {
    return [...visibleProducts]
      .sort((a, b) => b.stock * b.rating - a.stock * a.rating)
      .slice(0, 3)
      .map((product, index) => apiToStoreItem(product, index));
  }, [visibleProducts]);

  const trendingProducts = useMemo(() => {
    return [...visibleProducts]
      .sort((a, b) => b.rating + b.discountPercentage / 10 - (a.rating + a.discountPercentage / 10))
      .slice(0, 3)
      .map((product, index) => apiToStoreItem(product, index + 2));
  }, [visibleProducts]);

  const recentlyAdded = useMemo(() => {
    return [...visibleProducts]
      .sort((a, b) => b.id - a.id)
      .slice(0, 3)
      .map((product, index) => apiToStoreItem(product, index + 4));
  }, [visibleProducts]);

  const topRated = useMemo(() => {
    return [...visibleProducts]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)
      .map((product, index) => apiToStoreItem(product, index + 6));
  }, [visibleProducts]);

  const heroProducts = useMemo(() => {
    const fashionCandidates = visibleProducts.filter((product) => {
      const text = `${product.category} ${product.title}`.toLowerCase();
      return ["dress", "shirt", "tops", "fashion", "bag", "jewellery", "beauty"].some((term) => text.includes(term));
    });
    const source = fashionCandidates.length >= 2 ? fashionCandidates : visibleProducts;
    return source.slice(0, 2).map((product, index) => apiToStoreItem(product, index));
  }, [visibleProducts]);

  const currentSlide = slideMessages[activeSlide];
  const featuredHeroItem = heroProducts[0] ?? {
    id: "fallback-hero-item",
    title: "Featured Fashion Collection",
    category: "Fashion",
    price: 4200,
    oldPrice: 5200,
    image: heroLifestyle,
    rating: 5,
    description: "Featured shopping item from ORBI style homepage.",
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = cartItems.length > 0 ? 250 : 0;
  const checkoutTotal = cartSubtotal + shippingFee;

  function openHome() {
    setCurrentView("home");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 40);
  }

  function goToSection(section: string) {
    setCurrentView("home");
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);
  }

  function addToCart(item: StoreItem) {
    setCartItems((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry,
        );
      }
      return [...current, { ...item, quantity: 1 }];
    });
  }

  function buyNow(item: StoreItem) {
    addToCart(item);
    setCurrentView("cart");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  }

  function updateQuantity(id: string, nextQuantity: number) {
    setCartItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, nextQuantity) } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(id: string) {
    setCartItems((current) => current.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartItems([]);
  }

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username.trim() === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
      setLoginError("");
      setAuthenticated(true);
      setCurrentView("home");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 30);
      return;
    }
    setLoginError("Incorrect username or password. Please use the provided credentials.");
  }

  function handleCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (cartItems.length === 0) {
      setCurrentView("cart");
      return;
    }
    const generatedOrder = `ORBI-${Date.now().toString().slice(-8)}`;
    setOrderNumber(generatedOrder);
    setCartItems([]);
    setCheckoutForm(checkoutInitialState);
    setCurrentView("success");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 30);
  }

  function logout() {
    setAuthenticated(false);
    setMobileMenuOpen(false);
    setCurrentView("home");
    setLoginError("");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  if (!authenticated) {
    return (
      <LoginScreen
        username={username}
        password={password}
        loginError={loginError}
        onUsernameChange={setUsername}
        onPasswordChange={setPassword}
        onSubmit={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf5] text-[#1f1f1f]">
      <div className="bg-[#222529] text-white">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <p className="hidden font-medium md:block">Your must-have item is calling – Buy Now!</p>
          <p className="font-medium md:hidden">Buy Now!</p>
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-2 text-white/90 hover:text-white">
              <span className="text-lg">🇺🇸</span>
              English
              <ChevronDown className="h-4 w-4" />
            </button>
            <span className="hidden h-7 w-px bg-white/20 sm:block" />
            <button className="flex items-center gap-2 text-white/90 hover:text-white">
              PKR
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#ff6a00] shadow-[0_10px_30px_rgba(255,106,0,0.14)]">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 py-6 lg:flex-nowrap lg:gap-8">
            <div className="flex w-full items-center justify-between lg:w-auto lg:min-w-[300px]">
              <button onClick={openHome} className="flex items-center gap-3 text-left text-white">
                <div className="grid h-16 w-16 place-items-center rounded-full border-[6px] border-white/95 text-2xl font-black">O</div>
                <div>
                  <div className="text-4xl font-black tracking-[0.28em]">ORBI</div>
                  <div className="-mt-1 text-sm font-semibold tracking-[0.45em] text-white/90">STORE</div>
                </div>
              </button>

              <button
                className="grid h-12 w-12 place-items-center rounded-xl border border-white/20 text-white lg:hidden"
                onClick={() => setMobileMenuOpen((value) => !value)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            <div className="w-full flex-1">
              <div className="flex overflow-hidden rounded-xl bg-white shadow-[0_8px_22px_rgba(0,0,0,0.12)]">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search in Orbi"
                  className="h-16 w-full px-6 text-lg text-slate-700 outline-none placeholder:text-slate-400"
                />
                <button
                  onClick={openHome}
                  className="grid h-16 w-24 place-items-center bg-[#ff6a00] text-white"
                >
                  <Search className="h-8 w-8" />
                </button>
              </div>
            </div>

            <div className="hidden items-center gap-4 text-white xl:flex">
              <HeaderIcon icon={Phone} />
              <span className="h-9 w-px bg-white/35" />
              <HeaderIcon icon={Heart} />
              <span className="h-9 w-px bg-white/35" />
              <HeaderIcon icon={ShoppingCart} badge={cartCount} onClick={() => setCurrentView("cart")} />
              <span className="h-9 w-px bg-white/35" />
              <div className="flex items-center gap-3">
                <User className="h-6 w-6" />
                <div>
                  <div className="text-xs text-white/70">Signed in as</div>
                  <div className="max-w-[180px] truncate text-lg font-semibold">Harry Potter</div>
                </div>
              </div>
              <button
                onClick={logout}
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="border-b border-[#ffd2b0] bg-white lg:hidden">
          <div className="mx-auto max-w-[1800px] space-y-3 px-4 py-4 sm:px-6">
            <div className="grid gap-2 sm:grid-cols-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => goToSection(link.section)}
                  className="rounded-xl bg-[#fff4ea] px-4 py-3 text-left font-semibold text-[#333333]"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentView("cart");
                  setMobileMenuOpen(false);
                }}
                className="rounded-xl bg-[#fff4ea] px-4 py-3 text-left font-semibold text-[#333333]"
              >
                Cart ({cartCount})
              </button>
            </div>
            <button onClick={logout} className="w-full rounded-xl bg-[#ff6a00] px-4 py-3 font-semibold text-white">
              Logout
            </button>
          </div>
        </div>
      )}

      {currentView === "home" ? (
        <main className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
          <section className="rounded-[28px] bg-white px-4 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] lg:px-8">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#ff7a12] px-7 py-5 text-lg font-bold text-white shadow-[0_12px_24px_rgba(255,122,18,0.25)]">
                <Menu className="h-7 w-7" />
                All Categories
              </button>

              <nav className="flex flex-wrap items-center justify-center gap-6 text-[17px] font-semibold text-[#2a2a2a]" id="home">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => goToSection(link.section)}
                    className="hover:text-[#ff6a00]"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <button
                onClick={() => buyNow(featuredHeroItem)}
                className="inline-flex items-center justify-center rounded-xl bg-[#ff7a12] px-7 py-5 text-lg font-bold text-white shadow-[0_12px_24px_rgba(255,122,18,0.25)]"
              >
                Start Dropshipping
              </button>
            </div>
          </section>

          <section className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_280px]">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <div className="grid min-h-[520px] gap-6 bg-[linear-gradient(120deg,#fff7ef_0%,#ffffff_28%,#ffffff_58%,#ff7a12_58%,#ff6a00_100%)] p-6 lg:grid-cols-[240px_1fr_260px] lg:p-8">
                <div className="hidden items-end justify-center lg:flex">
                  <div className="w-full overflow-hidden rounded-[34px] bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                    <img src={featuredHeroItem.image} alt={featuredHeroItem.title} className="h-[330px] w-full rounded-[28px] object-cover" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <div className="inline-flex rounded-full bg-[#fff2e6] px-5 py-2 text-lg font-black tracking-wide text-[#ff6a00] shadow-sm">
                    {currentSlide.eyebrow}
                  </div>
                  <h1 className="mt-6 text-5xl font-black uppercase leading-none tracking-wide text-[#0085a6] drop-shadow-[0_4px_3px_rgba(0,0,0,0.2)] sm:text-6xl lg:text-7xl">
                    {currentSlide.heading}
                  </h1>
                  <p className="mt-5 max-w-3xl text-xl font-semibold text-[#222222] sm:text-2xl">{currentSlide.text}</p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => buyNow(featuredHeroItem)}
                      className="rounded-full border-[5px] border-white bg-[#ff7a12] px-10 py-5 text-3xl font-black uppercase text-white shadow-[0_14px_30px_rgba(0,0,0,0.2)] transition-transform hover:scale-[1.02]"
                    >
                      {currentSlide.button}
                    </button>
                    <button
                      onClick={() => setCurrentView("cart")}
                      className="rounded-full border-[4px] border-white bg-white/80 px-8 py-4 text-xl font-black uppercase text-[#ff6a00] shadow-lg backdrop-blur"
                    >
                      View Cart
                    </button>
                  </div>
                  <div className="mt-6 text-3xl font-black text-[#ff6a00]">www.orbi.pk</div>
                  <div className="mt-8 flex items-center gap-3">
                    {slideMessages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-3 rounded-full transition-all ${activeSlide === index ? "w-10 bg-[#ff6a00]" : "w-3 bg-[#d9d9d9]"}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-[24px] border-[3px] border-[#ffbd66] bg-[radial-gradient(circle_at_top,#ffb440_0%,#ff8b0f_40%,#ff6a00_100%)] p-5 text-white shadow-[0_18px_40px_rgba(255,106,0,0.18)]">
                    <div className="absolute right-3 top-3 grid h-16 w-16 place-items-center rounded-full border-[3px] border-white bg-[#d90429] text-center text-sm font-black leading-tight">
                      50%<br />OFF
                    </div>
                    <div className="mt-20 inline-block rounded-full bg-[#d20022] px-4 py-2 text-sm font-black uppercase tracking-wide">
                      This Weekend Only!
                    </div>
                    <div className="mt-5 text-6xl font-black uppercase leading-[0.85] drop-shadow-[0_4px_3px_rgba(0,0,0,0.28)]">
                      HOT<br />SALE
                    </div>
                    <p className="mt-3 text-sm font-medium text-white/90">New arrival</p>
                    <button
                      onClick={() => buyNow(featuredHeroItem)}
                      className="mt-6 rounded-full bg-[#ffe34d] px-6 py-3 text-base font-black text-[#7a2300] shadow-lg"
                    >
                      Shop Now
                    </button>
                  </div>

                  <div className="relative overflow-hidden rounded-[24px] bg-[#fff1e7] p-4 shadow-[0_16px_35px_rgba(0,0,0,0.08)]">
                    <img src={heroLifestyle} alt="Fashion shopping" className="h-[160px] w-full rounded-[18px] object-cover" />
                    <div className="absolute inset-x-4 bottom-4 rounded-[18px] bg-white/95 p-4 shadow-xl backdrop-blur">
                      <div className="text-sm font-semibold text-[#ff6a00]">Premium picks</div>
                      <div className="mt-1 text-lg font-bold text-[#222]">Fresh fashion arrivals for every season</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#f1f1f1] bg-white px-6 py-4 lg:px-10">
                <button
                  onClick={() => setActiveSlide((current) => (current - 1 + slideMessages.length) % slideMessages.length)}
                  className="grid h-14 w-14 place-items-center rounded-2xl border border-[#efefef] text-[#ff6a00] shadow-sm"
                >
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <div className="flex flex-wrap items-center justify-center gap-4 text-center text-sm text-[#666] sm:text-base">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4ea] px-4 py-2 font-semibold text-[#ff6a00]">
                    <ShieldCheck className="h-4 w-4" /> Secure shopping
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4ea] px-4 py-2 font-semibold text-[#ff6a00]">
                    <Truck className="h-4 w-4" /> Fast delivery
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4ea] px-4 py-2 font-semibold text-[#ff6a00]">
                    <Gift className="h-4 w-4" /> Daily offers
                  </div>
                </div>
                <button
                  onClick={() => setActiveSlide((current) => (current + 1) % slideMessages.length)}
                  className="grid h-14 w-14 place-items-center rounded-2xl border border-[#efefef] text-[#ff6a00] shadow-sm"
                >
                  <ChevronRight className="h-7 w-7" />
                </button>
              </div>
            </div>

            <div className="hidden xl:flex xl:flex-col xl:gap-4">
              <SideMiniCard title="Daily Deals" text="Discover discounted accessories and lifestyle products today." image={promoImage} />
              <SideMiniCard title="Fashion Essentials" text="New season picks selected for style and comfort." image={heroLifestyle} />
            </div>
          </section>

          <section className="mt-7 rounded-[28px] bg-white px-4 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:px-6 lg:px-8" id="collections">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold text-[#1e1e1e] sm:text-5xl">Shop By Categories</h2>
              <div className="hidden items-center gap-3 md:flex">
                <button className="grid h-14 w-14 place-items-center rounded-2xl border border-[#efefef] text-[#ff6a00] shadow-sm">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="grid h-14 w-14 place-items-center rounded-2xl border border-[#efefef] text-[#ff6a00] shadow-sm">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10">
              {categories.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full text-white shadow-[0_15px_30px_rgba(0,0,0,0.08)]" style={{ backgroundColor: item.color }}>
                    <item.icon className="h-11 w-11" />
                  </div>
                  <div className="mx-auto mt-5 max-w-[160px] text-xl font-medium leading-8 text-[#222]">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-7 overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]" id="premium-products">
            <div className="grid items-center gap-4 bg-[linear-gradient(90deg,#ffffff_0%,#fff4ec_35%,#fff6ef_70%,#ff7a12_100%)] p-5 lg:grid-cols-[320px_1fr_280px] lg:p-8">
              <div className="relative h-full overflow-hidden rounded-[24px]">
                <img src={promoImage} alt="Shopping promotion" className="h-full w-full object-cover" />
                <div className="absolute right-4 top-4 grid h-24 w-24 place-items-center rounded-full border-[4px] border-white bg-[#ff7a12] text-center text-2xl font-black leading-none text-white shadow-xl">
                  45%<br />OFF
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-black uppercase tracking-wide text-[#ff6a00] sm:text-6xl">EXCLUSIVE OFFERS</div>
                <p className="mt-3 text-2xl font-semibold text-[#141414] sm:text-5xl">Limited Time Exclusive Deals – Don’t Miss Out!</p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <button
                  onClick={() => buyNow(featuredHeroItem)}
                  className="rounded-full bg-[#ff7a12] px-8 py-4 text-2xl font-black uppercase text-white shadow-[0_16px_32px_rgba(255,122,18,0.25)]"
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </section>

          <section className="mt-9 rounded-[28px] bg-white px-4 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:px-6 lg:px-8" id="leftovers">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#1e1e1e] sm:text-5xl">Flash Sale</h2>
                <div className="mt-4 flex items-center gap-4 text-[#ff6a00]">
                  <span className="h-[2px] w-20 bg-[#ff8f41]" />
                  <Flame className="h-8 w-8" />
                  <span className="h-[2px] w-20 bg-[#ff8f41]" />
                </div>
                <p className="mt-5 text-xl text-[#4a5565]">Don't miss this opportunity at a special discount just for this week.</p>
              </div>
              <button onClick={() => goToSection("premium-products")} className="text-2xl font-medium text-[#ff6a00] underline underline-offset-4">
                View More
              </button>
            </div>

            {loading ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="rounded-[22px] border border-[#f0f0f0] bg-white p-4 shadow-sm">
                    <div className="h-60 animate-pulse rounded-[18px] bg-[#f4f4f4]" />
                    <div className="mt-4 h-5 animate-pulse rounded bg-[#f4f4f4]" />
                    <div className="mt-3 h-5 w-2/3 animate-pulse rounded bg-[#f4f4f4]" />
                  </div>
                ))}
              </div>
            ) : fetchError ? (
              <div className="mt-8 rounded-2xl bg-[#fff4ea] px-5 py-4 text-lg font-medium text-[#b44900]">{fetchError}</div>
            ) : flashSaleProducts.length === 0 ? (
              <div className="mt-8 rounded-2xl bg-[#fff4ea] px-5 py-4 text-lg font-medium text-[#b44900]">No products matched your search.</div>
            ) : (
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
                {flashSaleProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    onAddToCart={() => addToCart(product)}
                    onBuyNow={() => buyNow(product)}
                  />
                ))}
              </div>
            )}
          </section>

          <RealProductsHome
            onAddToCart={(product) => addToCart(realToStoreItem(product))}
            onBuyNow={(product) => buyNow(realToStoreItem(product))}
          />

          <section className="mt-9 grid gap-6 lg:grid-cols-2 xl:grid-cols-4" id="trending-products">
            <MiniProductColumn title="Top Selling" products={topSelling} onAddToCart={addToCart} onBuyNow={buyNow} />
            <MiniProductColumn title="Trending Products" products={trendingProducts} onAddToCart={addToCart} onBuyNow={buyNow} />
            <MiniProductColumn title="Recently Added" products={recentlyAdded} onAddToCart={addToCart} onBuyNow={buyNow} />
            <MiniProductColumn title="Top Rated" products={topRated} onAddToCart={addToCart} onBuyNow={buyNow} />
          </section>

          <section className="mt-9 rounded-[28px] bg-white px-6 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:px-8 lg:px-10" id="become-a-seller">
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4ea] px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-[#ff6a00]">
                  <Store className="h-4 w-4" /> Become a Seller
                </div>
                <h2 className="mt-4 text-3xl font-black text-[#1d1d1d] sm:text-5xl">Join ORBI as a Shopkeeper</h2>
                <p className="mt-3 max-w-2xl text-lg text-[#667085]">
                  Register your shop, set up your storefront, and start selling to customers worldwide. Card payment only — fast, secure, and international.
                </p>
              </div>
            </div>

            <SellerJoinForm />
          </section>
        </main>
      ) : currentView === "cart" ? (
        <CartPage
          cartItems={cartItems}
          subtotal={cartSubtotal}
          shippingFee={shippingFee}
          total={checkoutTotal}
          onContinueShopping={openHome}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onClearCart={clearCart}
          onProceedCheckout={() => {
            setCurrentView("checkout");
            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 40);
          }}
        />
      ) : currentView === "checkout" ? (
        <CheckoutPage
          cartItems={cartItems}
          subtotal={cartSubtotal}
          shippingFee={shippingFee}
          total={checkoutTotal}
          form={checkoutForm}
          onChange={setCheckoutForm}
          onBackToCart={() => setCurrentView("cart")}
          onSubmit={handleCheckout}
        />
      ) : (
        <SuccessPage orderNumber={orderNumber} onContinueShopping={openHome} onGoToCart={() => setCurrentView("cart")} />
      )}

      <footer className="mt-10 bg-[#202327] text-white">
        <div className="mx-auto max-w-[1800px] px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-full border-[5px] border-white text-xl font-black">O</div>
                <div>
                  <div className="text-3xl font-black tracking-[0.28em]">ORBI</div>
                  <div className="text-xs font-semibold tracking-[0.45em] text-white/70">STORE</div>
                </div>
              </div>
              <p className="mt-5 max-w-md text-base leading-8 text-white/70">
                This store is now functional: add products to cart, review totals, complete checkout, and continue shopping after a successful order.
              </p>
            </div>
            <FooterGroup title="Quick Links" items={["Home", "Collections", "Premium Products", "Flash Sale"]} />
            <FooterGroup title="Support" items={["Help Center", "Return Policy", "Track Order", "Contact Us"]} />
            <FooterGroup title="Account" items={["Sign In", "Wishlist", "Cart", "Seller Panel"]} />
          </div>
        </div>
      </footer>

      {showTopButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-xl bg-[#ff6a00] text-white shadow-[0_16px_30px_rgba(255,106,0,0.28)]"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

function LoginScreen({
  username,
  password,
  loginError,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}: {
  username: string;
  password: string;
  loginError: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#fff5eb_0%,#fffaf5_35%,#fff1e5_100%)]">
      <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-[#ff6a00]/15 blur-3xl" />
      <div className="absolute bottom-[-80px] right-[-120px] h-80 w-80 rounded-full bg-[#ff6a00]/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#ff6a00] text-xl font-black text-white">O</div>
              <span className="text-sm font-black uppercase tracking-[0.28em] text-[#ff6a00]">Orbi Store Login</span>
            </div>
            <h1 className="mt-8 text-4xl font-black leading-tight text-[#1c1c1c] sm:text-5xl lg:text-6xl">Sign in to open the homepage in English.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#555] sm:text-xl">
              This first screen uses the exact login credentials you requested. After login, the website supports add to cart, cart summary, checkout, successful order flow, and continue shopping.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <CredentialBox label="Username" value={LOGIN_CREDENTIALS.username} />
              <CredentialBox label="Password" value={LOGIN_CREDENTIALS.password} />
            </div>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.12)] sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#ff6a00] text-white">
                <User className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-[#1e1e1e]">Account Login</h2>
                <p className="text-[#666]">Use the provided credentials to continue</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.18em] text-[#666]">Username</label>
                <input
                  value={username}
                  onChange={(event) => onUsernameChange(event.target.value)}
                  className="h-14 w-full rounded-2xl border border-[#ececec] bg-[#fffaf6] px-5 text-lg outline-none transition focus:border-[#ff6a00] focus:bg-white"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.18em] text-[#666]">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => onPasswordChange(event.target.value)}
                  className="h-14 w-full rounded-2xl border border-[#ececec] bg-[#fffaf6] px-5 text-lg outline-none transition focus:border-[#ff6a00] focus:bg-white"
                  placeholder="Enter your password"
                />
              </div>

              {loginError ? (
                <div className="rounded-2xl bg-[#fff1e7] px-4 py-3 text-sm font-medium text-[#b04a06]">{loginError}</div>
              ) : (
                <div className="rounded-2xl bg-[#fff6ef] px-4 py-3 text-sm text-[#8a5d34]">Tip: the fields are already filled with the correct credentials you provided.</div>
              )}

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#ff6a00] px-6 py-4 text-lg font-black uppercase tracking-wide text-white shadow-[0_16px_34px_rgba(255,106,0,0.24)] transition hover:translate-y-[-1px]"
              >
                Sign In to Homepage
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function CredentialBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[24px] bg-white px-5 py-5 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      <div className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff6a00]">{label}</div>
      <div className="mt-2 break-all text-lg font-semibold text-[#1d1d1d]">{value}</div>
    </div>
  );
}

function HeaderIcon({ icon: Icon, badge, onClick }: { icon: LucideIcon; badge?: number; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="relative grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10">
      <Icon className="h-6 w-6" />
      {badge && badge > 0 ? (
        <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-md bg-white text-xs font-bold text-[#ff6a00]">
          {badge}
        </span>
      ) : null}
    </button>
  );
}

function SideMiniCard({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
      <img src={image} alt={title} className="h-[210px] w-full object-cover" />
      <div className="p-5">
        <div className="text-xl font-black text-[#1f1f1f]">{title}</div>
        <p className="mt-2 text-base leading-7 text-[#5f5f5f]">{text}</p>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  index,
  onAddToCart,
  onBuyNow,
}: {
  product: StoreItem;
  index: number;
  onAddToCart: () => void;
  onBuyNow: () => void;
}) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-[#f0f0f0] bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)]">
      <div className="relative">
        <div className="absolute left-3 top-3 z-10 inline-flex items-center rounded-r-xl bg-[#ff6976] px-5 py-3 text-xl font-black uppercase text-white">
          Sale {index + 1}
        </div>
        <div className="aspect-[4/4.2] overflow-hidden bg-[#fff8f3]">
          <img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff6a00]">{product.category}</div>
        <h3 className="line-clamp-2 min-h-[64px] text-[20px] font-medium leading-8 text-[#222]">{product.title}</h3>
        <div className="mt-3 flex items-end gap-3">
          <span className="text-[22px] font-black text-[#ff6a00]">{formatRupees(product.price)}</span>
          <span className="text-xl text-[#6b7280] line-through">{oldRupees(product.price, product.oldPrice)}</span>
        </div>
        <div className="mt-3 flex items-center gap-1 text-[#ffb400]">
          <Stars rating={product.rating} />
        </div>
        <div className="mt-4 grid gap-3">
          <button onClick={onBuyNow} className="w-full rounded-xl bg-[#ff6a00] px-5 py-3 text-sm font-black uppercase text-white shadow-[0_12px_24px_rgba(255,106,0,0.18)]">
            Shop Now
          </button>
          <button onClick={onAddToCart} className="w-full rounded-xl border border-[#ff6a00] px-5 py-3 text-sm font-black uppercase text-[#ff6a00]">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

function MiniProductColumn({
  title,
  products,
  onAddToCart,
  onBuyNow,
}: {
  title: string;
  products: StoreItem[];
  onAddToCart: (item: StoreItem) => void;
  onBuyNow: (item: StoreItem) => void;
}) {
  return (
    <div className="rounded-[28px] bg-white px-5 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:px-6">
      <div>
        <h3 className="text-3xl font-bold text-[#1e1e1e]">{title}</h3>
        <div className="mt-5 h-[2px] w-full bg-[#f0f0f0]">
          <div className="h-full w-40 bg-[#ff7a12]" />
        </div>
      </div>

      <div className="mt-7 space-y-8">
        {products.map((product) => (
          <div key={product.id} className="flex gap-4 border-b border-dashed border-[#e6e6e6] pb-7 last:border-b-0 last:pb-0">
            <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-[18px] bg-[#fff8f3]">
              <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="line-clamp-2 text-[19px] font-medium leading-8 text-[#1f1f1f]">{product.title}</h4>
              <div className="mt-2 flex items-center gap-1 text-[#ffb400]">
                <Stars rating={product.rating} />
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-lg">
                <span className="font-black text-[#ff6a00]">{formatRupees(product.price)}</span>
                <span className="text-[#6b7280] line-through">{oldRupees(product.price, product.oldPrice)}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button onClick={() => onAddToCart(product)} className="rounded-lg border border-[#ff6a00] px-3 py-2 text-xs font-black uppercase text-[#ff6a00]">
                  Add
                </button>
                <button onClick={() => onBuyNow(product)} className="rounded-lg bg-[#ff6a00] px-3 py-2 text-xs font-black uppercase text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
        {products.length === 0 && <div className="text-lg text-[#777]">No products available.</div>}
      </div>
    </div>
  );
}

function CartPage({
  cartItems,
  subtotal,
  shippingFee,
  total,
  onContinueShopping,
  onUpdateQuantity,
  onRemove,
  onClearCart,
  onProceedCheckout,
}: {
  cartItems: CartItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
  onContinueShopping: () => void;
  onUpdateQuantity: (id: string, nextQuantity: number) => void;
  onRemove: (id: string) => void;
  onClearCart: () => void;
  onProceedCheckout: () => void;
}) {
  return (
    <main className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4ea] px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-[#ff6a00]">
              <ShoppingCart className="h-4 w-4" /> Cart Page
            </div>
            <h1 className="mt-4 text-4xl font-black text-[#1d1d1d] sm:text-5xl">Your Shopping Cart</h1>
            <p className="mt-3 text-lg text-[#667085]">Review selected products, update quantities, and proceed to checkout.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={onContinueShopping} className="rounded-xl border border-[#ff6a00] px-5 py-3 text-sm font-black uppercase text-[#ff6a00]">
              Continue Shopping
            </button>
            {cartItems.length > 0 ? (
              <button onClick={onClearCart} className="rounded-xl bg-[#fff1e7] px-5 py-3 text-sm font-black uppercase text-[#b04a06]">
                Clear Cart
              </button>
            ) : null}
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-[24px] bg-[#fff8f2] p-10 text-center">
            <ShoppingCart className="mx-auto h-16 w-16 text-[#ff6a00]" />
            <h2 className="mt-4 text-3xl font-black text-[#1f1f1f]">Your cart is empty</h2>
            <p className="mt-3 text-lg text-[#6b7280]">Add products first, then come back here to checkout.</p>
            <button onClick={onContinueShopping} className="mt-6 rounded-xl bg-[#ff6a00] px-6 py-4 text-base font-black uppercase text-white">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div key={item.id} className="grid gap-5 rounded-[24px] border border-[#f0f0f0] p-5 shadow-sm md:grid-cols-[150px_1fr_auto] md:items-center">
                  <div className="overflow-hidden rounded-[18px] bg-[#fff7ef]">
                    <img src={item.image} alt={item.title} className="h-36 w-full object-cover md:h-32" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-[#ff6a00]">{item.category}</div>
                    <h3 className="mt-2 text-2xl font-bold text-[#1f1f1f]">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-[#667085]">{item.description}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-2xl font-black text-[#ff6a00]">{formatRupees(item.price)}</span>
                      <span className="text-lg text-[#6b7280] line-through">{oldRupees(item.price, item.oldPrice)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4 md:items-end">
                    <div className="flex items-center rounded-xl border border-[#ececec] bg-[#fffaf6]">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-4 py-3 text-[#ff6a00]">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-12 px-3 text-center text-lg font-bold">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-4 py-3 text-[#ff6a00]">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-xl font-black text-[#1f1f1f]">{formatRupees(item.price * item.quantity)}</div>
                    <button onClick={() => onRemove(item.id)} className="inline-flex items-center gap-2 rounded-xl bg-[#fff1e7] px-4 py-3 text-sm font-black uppercase text-[#b04a06]">
                      <Trash2 className="h-4 w-4" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[24px] border border-[#f0f0f0] bg-[#fffdfb] p-6 shadow-sm">
              <h2 className="text-3xl font-black text-[#1f1f1f]">Order Summary</h2>
              <div className="mt-6 space-y-4 text-lg text-[#4b5563]">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#1f1f1f]">{formatRupees(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-[#1f1f1f]">{formatRupees(shippingFee)}</span>
                </div>
                <div className="border-t border-dashed border-[#e6e6e6] pt-4">
                  <div className="flex items-center justify-between text-2xl font-black text-[#1f1f1f]">
                    <span>Total</span>
                    <span className="text-[#ff6a00]">{formatRupees(total)}</span>
                  </div>
                </div>
              </div>
              <button onClick={onProceedCheckout} className="mt-8 w-full rounded-xl bg-[#ff6a00] px-6 py-4 text-lg font-black uppercase text-white shadow-[0_16px_30px_rgba(255,106,0,0.18)]">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function CheckoutPage({
  cartItems,
  subtotal,
  shippingFee,
  total,
  form,
  onChange,
  onBackToCart,
  onSubmit,
}: {
  cartItems: CartItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
  form: CheckoutForm;
  onChange: (form: CheckoutForm) => void;
  onBackToCart: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <main className="mx-auto max-w-[1800px] px-3 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="rounded-2xl bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-6 lg:p-10">

        {/* Page Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#fff4ea] px-3 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-[#ff6a00] sm:px-4 sm:py-2 sm:text-sm">
              <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Checkout
            </div>
            <h1 className="mt-3 text-2xl font-black text-[#1d1d1d] sm:text-4xl lg:text-5xl">Secure Checkout</h1>
            <p className="mt-1.5 text-sm text-[#667085] sm:mt-2 sm:text-base lg:text-lg">Complete your order and submit it successfully.</p>
          </div>
          <button
            onClick={onBackToCart}
            className="self-start rounded-xl border border-[#ff6a00] px-4 py-2.5 text-xs font-black uppercase text-[#ff6a00] sm:self-auto sm:px-5 sm:py-3 sm:text-sm"
          >
            ← Back to Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="mt-8 rounded-[20px] bg-[#fff8f2] p-8 text-center text-base text-[#6b7280] sm:p-10 sm:text-lg">
            Your cart is empty. Please add products before checkout.
          </div>
        ) : (
          /* Main grid — stacks on mobile, side-by-side from lg */
          <div className="mt-6 flex flex-col gap-6 lg:mt-10 lg:grid lg:grid-cols-[1fr_380px] lg:gap-8 xl:grid-cols-[1fr_420px]">

            {/* ── LEFT: Form ── */}
            <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">

              {/* Shipping Details Card */}
              <div className="rounded-2xl border border-[#f0f0f0] p-4 shadow-sm sm:rounded-[24px] sm:p-6">
                <h2 className="mb-4 text-base font-black uppercase tracking-wide text-[#1f1f1f] sm:text-lg">
                  Shipping Details
                </h2>

                {/* Full Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name">
                    <input
                      required
                      value={form.fullName}
                      onChange={(event) => onChange({ ...form, fullName: event.target.value })}
                      className="h-12 w-full rounded-xl border border-[#ececec] bg-[#fffaf6] px-4 text-base outline-none focus:border-[#ff6a00] sm:h-14 sm:rounded-2xl sm:px-5 sm:text-lg"
                      placeholder="Enter your full name"
                    />
                  </Field>
                  <Field label="Email Address">
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) => onChange({ ...form, email: event.target.value })}
                      className="h-12 w-full rounded-xl border border-[#ececec] bg-[#fffaf6] px-4 text-base outline-none focus:border-[#ff6a00] sm:h-14 sm:rounded-2xl sm:px-5 sm:text-lg"
                      placeholder="Enter your email"
                    />
                  </Field>
                </div>

                {/* Phone + City */}
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Phone Number">
                    <input
                      required
                      value={form.phone}
                      onChange={(event) => onChange({ ...form, phone: event.target.value })}
                      className="h-12 w-full rounded-xl border border-[#ececec] bg-[#fffaf6] px-4 text-base outline-none focus:border-[#ff6a00] sm:h-14 sm:rounded-2xl sm:px-5 sm:text-lg"
                      placeholder="Enter your phone number"
                    />
                  </Field>
                  <Field label="City">
                    <input
                      required
                      value={form.city}
                      onChange={(event) => onChange({ ...form, city: event.target.value })}
                      className="h-12 w-full rounded-xl border border-[#ececec] bg-[#fffaf6] px-4 text-base outline-none focus:border-[#ff6a00] sm:h-14 sm:rounded-2xl sm:px-5 sm:text-lg"
                      placeholder="Enter your city"
                    />
                  </Field>
                </div>

                {/* Address */}
                <div className="mt-4">
                  <Field label="Shipping Address">
                    <textarea
                      required
                      value={form.address}
                      onChange={(event) => onChange({ ...form, address: event.target.value })}
                      className="min-h-[110px] w-full rounded-xl border border-[#ececec] bg-[#fffaf6] px-4 py-3 text-base outline-none focus:border-[#ff6a00] sm:min-h-[130px] sm:rounded-2xl sm:px-5 sm:py-4 sm:text-lg"
                      placeholder="Enter your complete address"
                    />
                  </Field>
                </div>
              </div>

              {/* Card Payment Card */}
              <div className="rounded-2xl border border-[#ffe0c8] bg-[#fff8f2] p-4 sm:rounded-[24px] sm:p-6">
                {/* Card header */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ff6a00] text-white sm:h-10 sm:w-10">
                    <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-black text-[#1f1f1f] sm:text-base">Card Payment</div>
                    <div className="text-xs text-[#667085] sm:text-sm">Visa · Mastercard · American Express</div>
                  </div>
                  <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
                    <span className="rounded bg-[#1a1f71] px-1.5 py-0.5 text-[10px] font-black text-white sm:rounded-md sm:px-2 sm:py-1 sm:text-xs">VISA</span>
                    <span className="rounded bg-[#eb001b] px-1.5 py-0.5 text-[10px] font-black text-white sm:rounded-md sm:px-2 sm:py-1 sm:text-xs">MC</span>
                    <span className="rounded bg-[#2e77bc] px-1.5 py-0.5 text-[10px] font-black text-white sm:rounded-md sm:px-2 sm:py-1 sm:text-xs">AMEX</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Field label="Card Number">
                    <input
                      required
                      type="text"
                      inputMode="numeric"
                      maxLength={19}
                      value={form.cardNumber}
                      onChange={(event) => {
                        const raw = event.target.value.replace(/\D/g, "").slice(0, 16);
                        const formatted = raw.replace(/(.{4})/g, "$1 ").trim();
                        onChange({ ...form, cardNumber: formatted });
                      }}
                      className="h-12 w-full rounded-xl border border-[#ececec] bg-white px-4 text-base tracking-widest outline-none focus:border-[#ff6a00] sm:h-14 sm:rounded-2xl sm:px-5 sm:text-lg"
                      placeholder="1234 5678 9012 3456"
                    />
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Expiry Date">
                      <input
                        required
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        value={form.cardExpiry}
                        onChange={(event) => {
                          const raw = event.target.value.replace(/\D/g, "").slice(0, 4);
                          const formatted = raw.length > 2 ? `${raw.slice(0, 2)}/${raw.slice(2)}` : raw;
                          onChange({ ...form, cardExpiry: formatted });
                        }}
                        className="h-12 w-full rounded-xl border border-[#ececec] bg-white px-4 text-base outline-none focus:border-[#ff6a00] sm:h-14 sm:rounded-2xl sm:px-5 sm:text-lg"
                        placeholder="MM/YY"
                      />
                    </Field>
                    <Field label="CVC / CVV">
                      <input
                        required
                        type="text"
                        inputMode="numeric"
                        maxLength={4}
                        value={form.cardCvc}
                        onChange={(event) => {
                          const raw = event.target.value.replace(/\D/g, "").slice(0, 4);
                          onChange({ ...form, cardCvc: raw });
                        }}
                        className="h-12 w-full rounded-xl border border-[#ececec] bg-white px-4 text-base outline-none focus:border-[#ff6a00] sm:h-14 sm:rounded-2xl sm:px-5 sm:text-lg"
                        placeholder="123"
                      />
                    </Field>
                  </div>
                </div>

                <p className="mt-3 flex items-center gap-2 text-xs text-[#667085] sm:text-sm">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#22c55e] sm:h-4 sm:w-4" />
                  Your card details are encrypted and secure.
                </p>
              </div>

              {/* Submit — visible on mobile here, hidden on lg (shown in summary panel) */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#ff6a00] px-6 py-4 text-base font-black uppercase text-white shadow-[0_16px_30px_rgba(255,106,0,0.18)] sm:text-lg lg:hidden"
              >
                Place Order Successfully
              </button>
            </form>

            {/* ── RIGHT: Order Summary ── */}
            <div className="rounded-2xl border border-[#f0f0f0] bg-[#fffdfb] p-4 shadow-sm sm:rounded-[24px] sm:p-6 lg:self-start lg:sticky lg:top-24">
              <h2 className="text-xl font-black text-[#1f1f1f] sm:text-2xl lg:text-3xl">Order Summary</h2>

              {/* Cart items list */}
              <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-5">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 border-b border-dashed border-[#ececec] pb-3 sm:gap-4 sm:pb-4">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#fff7ef] sm:h-20 sm:w-20 sm:rounded-[16px]">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="line-clamp-1 text-sm font-bold text-[#1f1f1f] sm:text-base lg:text-lg">{item.title}</div>
                      <div className="text-xs text-[#667085] sm:text-sm">Qty: {item.quantity}</div>
                    </div>
                    <div className="shrink-0 text-sm font-black text-[#ff6a00] sm:text-base lg:text-lg">{formatRupees(item.price * item.quantity)}</div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="mt-4 space-y-3 text-sm text-[#4b5563] sm:mt-6 sm:space-y-4 sm:text-base lg:text-lg">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#1f1f1f]">{formatRupees(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-[#1f1f1f]">{formatRupees(shippingFee)}</span>
                </div>
                <div className="border-t border-dashed border-[#e6e6e6] pt-3 sm:pt-4">
                  <div className="flex items-center justify-between text-lg font-black text-[#1f1f1f] sm:text-xl lg:text-2xl">
                    <span>Total</span>
                    <span className="text-[#ff6a00]">{formatRupees(total)}</span>
                  </div>
                </div>
              </div>

              {/* Submit — only visible on lg+ inside summary panel */}
              <button
                form="checkout-form"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  const formEl = document.querySelector<HTMLFormElement>("form");
                  if (formEl) formEl.requestSubmit();
                }}
                className="mt-6 hidden w-full rounded-xl bg-[#ff6a00] px-6 py-4 text-base font-black uppercase text-white shadow-[0_16px_30px_rgba(255,106,0,0.18)] lg:block lg:text-lg"
              >
                Place Order Successfully
              </button>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}

function SuccessPage({
  orderNumber,
  onContinueShopping,
  onGoToCart,
}: {
  orderNumber: string;
  onContinueShopping: () => void;
  onGoToCart: () => void;
}) {
  return (
    <main className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[28px] bg-white p-8 text-center shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-10 lg:p-16">
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#e9fff0] text-[#1aa04a]">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h1 className="mt-6 text-4xl font-black text-[#1d1d1d] sm:text-5xl">Order placed successfully!</h1>
        <p className="mt-4 text-lg text-[#667085] sm:text-xl">
          Your checkout has been completed successfully. Your order number is <span className="font-black text-[#ff6a00]">{orderNumber || "ORBI-000000"}</span>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button onClick={onContinueShopping} className="rounded-xl bg-[#ff6a00] px-6 py-4 text-base font-black uppercase text-white shadow-[0_16px_30px_rgba(255,106,0,0.18)]">
            Continue Shopping
          </button>
          <button onClick={onGoToCart} className="rounded-xl border border-[#ff6a00] px-6 py-4 text-base font-black uppercase text-[#ff6a00]">
            Open Cart
          </button>
        </div>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.18em] text-[#666]">{label}</label>
      {children}
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.max(1, Math.min(5, Math.round(rating)));
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`h-5 w-5 ${index < rounded ? "fill-current" : "text-[#d3d3d3]"}`} />
      ))}
    </>
  );
}

function FooterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-lg font-black text-white">{title}</div>
      <ul className="mt-4 space-y-3 text-base text-white/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

type SellerForm = {
  shopName: string;
  ownerName: string;
  email: string;
  phone: string;
  country: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
};

const sellerFormInitial: SellerForm = {
  shopName: "",
  ownerName: "",
  email: "",
  phone: "",
  country: "",
  cardNumber: "",
  cardExpiry: "",
  cardCvc: "",
};

function SellerJoinForm() {
  const [form, setForm] = useState<SellerForm>(sellerFormInitial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(sellerFormInitial);
    setTimeout(() => setSubmitted(false), 6000);
  }

  if (submitted) {
    return (
      <div className="rounded-[24px] bg-[#e9fff0] p-10 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#22c55e] text-white">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h3 className="mt-5 text-3xl font-black text-[#1d1d1d]">Application Submitted!</h3>
        <p className="mt-3 text-lg text-[#4b5563]">
          Your shopkeeper application has been received. We'll review it and get back to you within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-2">
      {/* Shop Details */}
      <div className="space-y-5 rounded-[24px] border border-[#f0f0f0] p-6 shadow-sm">
        <h3 className="text-xl font-black text-[#1f1f1f]">Shop Information</h3>

        <Field label="Shop / Business Name">
          <input
            required
            value={form.shopName}
            onChange={(e) => setForm({ ...form, shopName: e.target.value })}
            className="h-14 w-full rounded-2xl border border-[#ececec] bg-[#fffaf6] px-5 text-lg outline-none focus:border-[#ff6a00]"
            placeholder="e.g. My Awesome Store"
          />
        </Field>

        <Field label="Owner Full Name">
          <input
            required
            value={form.ownerName}
            onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
            className="h-14 w-full rounded-2xl border border-[#ececec] bg-[#fffaf6] px-5 text-lg outline-none focus:border-[#ff6a00]"
            placeholder="Enter your full name"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Email Address">
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="h-14 w-full rounded-2xl border border-[#ececec] bg-[#fffaf6] px-5 text-lg outline-none focus:border-[#ff6a00]"
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Phone Number">
            <input
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-14 w-full rounded-2xl border border-[#ececec] bg-[#fffaf6] px-5 text-lg outline-none focus:border-[#ff6a00]"
              placeholder="+1 234 567 8900"
            />
          </Field>
        </div>

        <Field label="Country">
          <input
            required
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="h-14 w-full rounded-2xl border border-[#ececec] bg-[#fffaf6] px-5 text-lg outline-none focus:border-[#ff6a00]"
            placeholder="e.g. United States"
          />
        </Field>
      </div>

      {/* Card Payment */}
      <div className="space-y-5 rounded-[24px] border border-[#ffe0c8] bg-[#fff8f2] p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#ff6a00] text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-[#1f1f1f]">Card Payment</h3>
            <p className="text-sm text-[#667085]">International card transactions only</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="rounded-md bg-[#1a1f71] px-2 py-1 text-xs font-black text-white">VISA</span>
            <span className="rounded-md bg-[#eb001b] px-2 py-1 text-xs font-black text-white">MC</span>
            <span className="rounded-md bg-[#2e77bc] px-2 py-1 text-xs font-black text-white">AMEX</span>
          </div>
        </div>

        <Field label="Card Number">
          <input
            required
            type="text"
            inputMode="numeric"
            maxLength={19}
            value={form.cardNumber}
            onChange={(e) => {
              const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
              const formatted = raw.replace(/(.{4})/g, "$1 ").trim();
              setForm({ ...form, cardNumber: formatted });
            }}
            className="h-14 w-full rounded-2xl border border-[#ececec] bg-white px-5 text-lg tracking-widest outline-none focus:border-[#ff6a00]"
            placeholder="1234 5678 9012 3456"
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Expiry Date">
            <input
              required
              type="text"
              inputMode="numeric"
              maxLength={5}
              value={form.cardExpiry}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
                const formatted = raw.length > 2 ? `${raw.slice(0, 2)}/${raw.slice(2)}` : raw;
                setForm({ ...form, cardExpiry: formatted });
              }}
              className="h-14 w-full rounded-2xl border border-[#ececec] bg-white px-5 text-lg outline-none focus:border-[#ff6a00]"
              placeholder="MM/YY"
            />
          </Field>
          <Field label="CVC / CVV">
            <input
              required
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={form.cardCvc}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
                setForm({ ...form, cardCvc: raw });
              }}
              className="h-14 w-full rounded-2xl border border-[#ececec] bg-white px-5 text-lg outline-none focus:border-[#ff6a00]"
              placeholder="123"
            />
          </Field>
        </div>

        <p className="flex items-center gap-2 text-sm text-[#667085]">
          <ShieldCheck className="h-4 w-4 text-[#22c55e]" />
          Your card details are encrypted and secure. No local payment methods accepted.
        </p>

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-[#ff6a00] px-6 py-4 text-lg font-black uppercase text-white shadow-[0_16px_30px_rgba(255,106,0,0.18)]"
        >
          Submit Shopkeeper Application
        </button>
      </div>
    </form>
  );
}
